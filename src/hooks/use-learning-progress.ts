'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath, learningPaths } from '@/data/learning-paths';
import { createClient } from '@/lib/supabase/client';

const STORAGE_KEY = 'centraas-learning-progress-v1';

export type ProgressStatus = 'not-started' | 'in-progress' | 'completed';

export interface LessonProgress {
    lessonId: string;
    status: ProgressStatus;
    lastVisitedAt?: string;
    completedAt?: string;
}

export interface QuizAttemptRecord {
    module: MachineModule;
    score: number;
    total: number;
    percentage: number;
    completedAt: string;
    passed: boolean;
}

export interface LearningProgressData {
    lessons: Record<string, LessonProgress>;
    quizAttempts: QuizAttemptRecord[];
    worksheetCompletions: Record<string, string>;
    safetyChecklists: Record<string, string>;
}

const emptyProgress: LearningProgressData = {
    lessons: {},
    quizAttempts: [],
    worksheetCompletions: {},
    safetyChecklists: {},
};

function readProgress(): LearningProgressData {
    if (typeof window === 'undefined') return emptyProgress;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return emptyProgress;

    try {
        const parsed = JSON.parse(saved) as LearningProgressData;
        return {
            lessons: parsed.lessons ?? {},
            quizAttempts: parsed.quizAttempts ?? [],
            worksheetCompletions: parsed.worksheetCompletions ?? {},
            safetyChecklists: parsed.safetyChecklists ?? {},
        };
    } catch {
        return emptyProgress;
    }
}

function writeProgress(progress: LearningProgressData) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/** Upsert a single row to learning_progress in Supabase (fire-and-forget). */
async function syncToDb(
    userId: string,
    module: MachineModule,
    pagePath: string,
    completed: boolean,
    score: number | null,
    metadata: object,
) {
    const supabase = createClient();
    if (!supabase) return;

    await supabase.from('learning_progress').upsert(
        {
            user_id: userId,
            module,
            page_path: pagePath,
            completed,
            score,
            metadata,
        },
        { onConflict: 'user_id,module,page_path' },
    );
}

/** Fetch the current authed user id from Supabase (returns null when not signed in). */
async function getAuthUserId(): Promise<string | null> {
    const supabase = createClient();
    if (!supabase) return null;
    const { data } = await supabase.auth.getSession();
    return data.session?.user.id ?? null;
}

function markLessonVisited(
    progress: LearningProgressData,
    module: MachineModule,
    lessonId: string,
) {
    const path = getLearningPath(module);
    if (!path) return progress;

    const existing = progress.lessons[lessonId];
    const now = new Date().toISOString();

    progress.lessons[lessonId] = {
        ...existing,
        lessonId,
        status: existing?.status === 'completed' ? 'completed' : 'in-progress',
        lastVisitedAt: now,
    };

    return progress;
}

function completeLesson(
    progress: LearningProgressData,
    module: MachineModule,
    lessonId: string,
) {
    const path = getLearningPath(module);
    if (!path) return progress;

    const now = new Date().toISOString();
    progress.lessons[lessonId] = {
        lessonId,
        status: 'completed',
        completedAt: now,
        lastVisitedAt: now,
    };

    return progress;
}

export function useLearningProgress(module?: MachineModule) {
    // Lazily initialise from localStorage so we never call setProgress() synchronously
    // inside a useEffect body (which triggers the react-hooks/set-state-in-effect lint error).
    const [progress, setProgress] = useState<LearningProgressData>(() => readProgress());
    const [isHydrated, setIsHydrated] = useState(true);

    // Attempt to pull remote data and merge into local state.
    useEffect(() => {
        // Attempt to pull remote progress for this module and merge into local state.
        (async () => {
            const userId = await getAuthUserId();
            if (!userId) return;

            const supabase = createClient();
            if (!supabase) return;

            const query = supabase
                .from('learning_progress')
                .select('module, page_path, completed, score, metadata, updated_at')
                .eq('user_id', userId);

            if (module) query.eq('module', module);

            const { data, error } = await query;
            if (error || !data) return;

            // Merge remote rows into local progress without overwriting newer local data.
            setProgress((current) => {
                const merged: LearningProgressData = {
                    ...current,
                    lessons: { ...current.lessons },
                    quizAttempts: [...current.quizAttempts],
                    worksheetCompletions: { ...current.worksheetCompletions },
                    safetyChecklists: { ...current.safetyChecklists },
                };

                for (const row of data) {
                    const meta = (row.metadata ?? {}) as Record<string, unknown>;

                    // Merge lesson rows.
                    if (!row.page_path.includes('-worksheet') && !row.page_path.includes('-quiz') && !row.page_path.includes('-safety')) {
                        const existing = merged.lessons[row.page_path];
                        if (!existing || (row.completed && existing.status !== 'completed')) {
                            merged.lessons[row.page_path] = {
                                lessonId: row.page_path,
                                status: row.completed ? 'completed' : 'in-progress',
                                completedAt: meta.completedAt as string | undefined,
                                lastVisitedAt: row.updated_at,
                            };
                        }
                    }

                    // Merge worksheet rows.
                    if (row.page_path.includes('-worksheet') && row.completed) {
                        const lessonId = row.page_path.replace('-worksheet', '');
                        if (!merged.worksheetCompletions[lessonId]) {
                            merged.worksheetCompletions[lessonId] = row.updated_at;
                        }
                    }

                    // Merge safety checklist rows.
                    if (row.page_path.includes('-safety') && row.completed) {
                        const checklistId = row.page_path;
                        if (!merged.safetyChecklists[checklistId]) {
                            merged.safetyChecklists[checklistId] = row.updated_at;
                        }
                    }

                    // Merge quiz attempt rows.
                    if (row.page_path.includes('-quiz') && row.score !== null && meta.quizAttempt) {
                        const remoteAttempt = meta.quizAttempt as QuizAttemptRecord;
                        const alreadyHave = merged.quizAttempts.some(
                            (a) => a.completedAt === remoteAttempt.completedAt && a.module === remoteAttempt.module,
                        );
                        if (!alreadyHave) {
                            merged.quizAttempts.push(remoteAttempt);
                        }
                    }
                }

                writeProgress(merged);
                return merged;
            });
        })();
    }, [module]);


    const summary = useMemo(() => {
        const selectedPath = module ? getLearningPath(module) : null;
        const lessonIds =
            selectedPath?.lessons.map((lesson) => lesson.id) ??
            learningPaths.flatMap((path) => path.lessons.map((lesson) => lesson.id));
        const trackedLessons = lessonIds
            .map((lessonId) => progress.lessons[lessonId])
            .filter(Boolean) as LessonProgress[];
        const completedLessons = trackedLessons.filter((lesson) => lesson.status === 'completed').length;
        const inProgressLessons = trackedLessons.filter((lesson) => lesson.status === 'in-progress').length;
        const totalLessons = lessonIds.length;
        const completionPercentage = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

        const latestQuizAttempt = module
            ? [...progress.quizAttempts]
                  .filter((attempt) => attempt.module === module)
                  .sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0]
            : [...progress.quizAttempts].sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0];

        return {
            totalLessons,
            completedLessons,
            inProgressLessons,
            completionPercentage,
            latestQuizAttempt,
        };
    }, [module, progress]);

    const actions = useMemo(
        () => ({
            recordLessonVisit: (lessonId: string) => {
                if (!module) return;
                setProgress((current) => {
                    const next = markLessonVisited(
                        { ...current, lessons: { ...current.lessons } },
                        module,
                        lessonId,
                    );
                    writeProgress(next);

                    // Fire-and-forget DB sync.
                    getAuthUserId().then((userId) => {
                        if (!userId) return;
                        syncToDb(userId, module, lessonId, false, null, {});
                    });

                    return next;
                });
            },

            recordLessonComplete: (lessonId: string) => {
                if (!module) return;
                setProgress((current) => {
                    const next = completeLesson(
                        { ...current, lessons: { ...current.lessons } },
                        module,
                        lessonId,
                    );
                    writeProgress(next);

                    // Fire-and-forget DB sync.
                    getAuthUserId().then((userId) => {
                        if (!userId) return;
                        syncToDb(userId, module, lessonId, true, null, {
                            completedAt: next.lessons[lessonId]?.completedAt,
                        });
                    });

                    return next;
                });
            },

            recordQuizAttempt: (attempt: Omit<QuizAttemptRecord, 'completedAt'>) => {
                if (!module) return;
                setProgress((current) => {
                    const completedAt = new Date().toISOString();
                    const fullAttempt: QuizAttemptRecord = { ...attempt, completedAt };
                    const next: LearningProgressData = {
                        ...current,
                        quizAttempts: [...current.quizAttempts, fullAttempt],
                    };
                    writeProgress(next);

                    // Fire-and-forget DB sync.
                    getAuthUserId().then((userId) => {
                        if (!userId) return;
                        syncToDb(
                            userId,
                            module,
                            `${module}-quiz`,
                            fullAttempt.passed,
                            fullAttempt.percentage,
                            { quizAttempt: fullAttempt },
                        );
                    });

                    return next;
                });
            },

            recordWorksheetComplete: (lessonId: string) => {
                if (!module) return;
                setProgress((current) => {
                    const completedAt = new Date().toISOString();
                    const next: LearningProgressData = {
                        ...current,
                        worksheetCompletions: { ...current.worksheetCompletions, [lessonId]: completedAt },
                    };
                    writeProgress(next);

                    // Fire-and-forget DB sync.
                    getAuthUserId().then((userId) => {
                        if (!userId) return;
                        syncToDb(userId, module, `${lessonId}-worksheet`, true, null, {
                            completedAt,
                        });
                    });

                    return next;
                });
            },

            recordSafetyChecklistComplete: (checklistId: string) => {
                if (!module) return;
                setProgress((current) => {
                    const completedAt = new Date().toISOString();
                    const next: LearningProgressData = {
                        ...current,
                        safetyChecklists: { ...current.safetyChecklists, [checklistId]: completedAt },
                    };
                    writeProgress(next);

                    // Fire-and-forget DB sync.
                    getAuthUserId().then((userId) => {
                        if (!userId) return;
                        syncToDb(userId, module, `${checklistId}-safety`, true, null, {
                            completedAt,
                        });
                    });

                    return next;
                });
            },

            resetProgress: () => {
                setProgress(emptyProgress);
                writeProgress(emptyProgress);
            },
        }),
        [module],
    );

    return { progress, summary, actions, isHydrated };
}

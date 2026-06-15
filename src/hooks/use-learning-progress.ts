'use client';

import { useEffect, useMemo, useState } from 'react';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath, learningPaths } from '@/data/learning-paths';

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

function markLessonVisited(progress: LearningProgressData, module: MachineModule, lessonId: string) {
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

function completeLesson(progress: LearningProgressData, module: MachineModule, lessonId: string) {
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
    const [progress, setProgress] = useState<LearningProgressData>(emptyProgress);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setProgress(readProgress());
        setIsHydrated(true);
    }, []);

    const summary = useMemo(() => {
        const selectedPath = module ? getLearningPath(module) : null;
        const lessonIds = selectedPath?.lessons.map((lesson) => lesson.id) ?? learningPaths.flatMap((path) => path.lessons.map((lesson) => lesson.id));
        const trackedLessons = lessonIds.map((lessonId) => progress.lessons[lessonId]).filter(Boolean) as LessonProgress[];
        const completedLessons = trackedLessons.filter((lesson) => lesson.status === 'completed').length;
        const inProgressLessons = trackedLessons.filter((lesson) => lesson.status === 'in-progress').length;
        const totalLessons = lessonIds.length;
        const completionPercentage = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

        const latestQuizAttempt = module
            ? [...progress.quizAttempts].filter((attempt) => attempt.module === module).sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0]
            : [...progress.quizAttempts].sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0];

        return {
            totalLessons,
            completedLessons,
            inProgressLessons,
            completionPercentage,
            latestQuizAttempt,
        };
    }, [module, progress]);

    const actions = useMemo(() => ({
        recordLessonVisit: (lessonId: string) => {
            if (!module) return;
            setProgress((current) => markLessonVisited({ ...current, lessons: { ...current.lessons } }, module, lessonId));
        },
        recordLessonComplete: (lessonId: string) => {
            if (!module) return;
            setProgress((current) => {
                const next = completeLesson({ ...current, lessons: { ...current.lessons } }, module, lessonId);
                writeProgress(next);
                return next;
            });
        },
        recordQuizAttempt: (attempt: Omit<QuizAttemptRecord, 'completedAt'>) => {
            if (!module) return;
            setProgress((current) => {
                const next: LearningProgressData = {
                    ...current,
                    quizAttempts: [...current.quizAttempts, { ...attempt, completedAt: new Date().toISOString() }],
                };
                writeProgress(next);
                return next;
            });
        },
        recordWorksheetComplete: (lessonId: string) => {
            if (!module) return;
            setProgress((current) => {
                const next: LearningProgressData = {
                    ...current,
                    worksheetCompletions: { ...current.worksheetCompletions, [lessonId]: new Date().toISOString() },
                };
                writeProgress(next);
                return next;
            });
        },
        recordSafetyChecklistComplete: (checklistId: string) => {
            if (!module) return;
            setProgress((current) => {
                const next: LearningProgressData = {
                    ...current,
                    safetyChecklists: { ...current.safetyChecklists, [checklistId]: new Date().toISOString() },
                };
                writeProgress(next);
                return next;
            });
        },
        resetProgress: () => {
            setProgress(emptyProgress);
            writeProgress(emptyProgress);
        },
    }), [module]);

    useEffect(() => {
        if (!isHydrated) return;
        writeProgress(progress);
    }, [isHydrated, progress]);

    return { progress, summary, actions, isHydrated };
}

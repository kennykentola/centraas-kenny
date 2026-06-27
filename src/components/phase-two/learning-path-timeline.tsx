'use client';

import Link from 'next/link';
import { CheckCircle2, Clock, BookOpen, ClipboardCheck, AlertTriangle } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

interface LearningPathTimelineProps {
    module: MachineModule;
}

export function LearningPathTimeline({ module }: LearningPathTimelineProps) {
    const defaultPath = getLearningPath(module);
    const [path, setPath] = useState(defaultPath);
    const { progress, actions } = useLearningProgress(module);

    useEffect(() => {
        let mounted = true;
        async function fetchLessons() {
            const supabase = createClient();
            if (!supabase) return;
            
            const { data, error } = await supabase
                .from('lessons')
                .select('*')
                .eq('module', module)
                .eq('published', true)
                .order('created_at', { ascending: true });
                
            if (error || !data || !mounted) return;
            
            // Map DB lessons to the expected format
            const dbLessons = data.map(dbLesson => ({
                id: dbLesson.id,
                title: dbLesson.title,
                description: dbLesson.description || '',
                difficulty: 'Intermediate' as const, // Default for now
                estimatedMinutes: 30, // Default for now
                objectives: Array.isArray(dbLesson.objectives) ? dbLesson.objectives : [],
                safetyNotes: Array.isArray(dbLesson.safety_notes) ? dbLesson.safety_notes : [],
                href: `/${module}/lesson/${dbLesson.id}`, // Custom routing can be added later
                worksheetTitle: `${dbLesson.title} Worksheet`,
                worksheetTasks: [],
                prerequisites: []
            }));
            
            if (dbLessons.length > 0 && defaultPath) {
                setPath({
                    ...defaultPath,
                    lessons: [...defaultPath.lessons, ...dbLessons]
                });
            }
        }
        fetchLessons();
        return () => { mounted = false; };
    }, [module, defaultPath]);

    if (!path) return null;

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Guided learning path</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">{path.title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{path.description}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    Passing score: <span className="font-bold text-slate-950">{path.passingScore}%</span>
                </div>
            </div>

            <div className="space-y-4">
                {path.lessons.map((lesson, index) => {
                    const lessonProgress = progress.lessons[lesson.id];
                    const status = lessonProgress?.status ?? 'not-started';
                    const completed = status === 'completed';
                    const inProgress = status === 'in-progress';

                    return (
                        <article key={lesson.id} className="relative grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                {completed ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <span className="text-sm font-bold text-slate-500">{index + 1}</span>}
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-base font-bold text-slate-950">{lesson.title}</h3>
                                    <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${lesson.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-700' :
                                            lesson.difficulty === 'Intermediate' ? 'bg-blue-50 text-blue-700' :
                                                'bg-amber-50 text-amber-700'
                                        }`}>
                                        {lesson.difficulty}
                                    </span>
                                    {completed && <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">Completed</span>}
                                    {inProgress && <span className="rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700">In progress</span>}
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{lesson.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                                        <Clock className="h-3.5 w-3.5" /> {lesson.estimatedMinutes} min
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                                        <BookOpen className="h-3.5 w-3.5" /> {lesson.objectives.length} objectives
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                                        <ClipboardCheck className="h-3.5 w-3.5" /> Worksheet included
                                    </span>
                                </div>
                                <div className="mt-4 grid gap-3 md:grid-cols-2">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">Objectives</h4>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
                                            {lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                                            <AlertTriangle className="h-3.5 w-3.5" /> Safety notes
                                        </h4>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-amber-900">
                                            {lesson.safetyNotes.map((note) => <li key={note}>{note}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <Link href={lesson.href} className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                                        Study lesson
                                    </Link>
                                    <Link href={`/${module}/worksheet?lesson=${lesson.id}`} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                                        Worksheet
                                    </Link>
                                    {completed ? (
                                        <button disabled className="rounded-xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Completed</button>
                                    ) : (
                                        <button
                                            onClick={() => actions.recordLessonComplete(lesson.id)}
                                            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                                        >
                                            Mark complete
                                        </button>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

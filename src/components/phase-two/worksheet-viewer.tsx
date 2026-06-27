'use client';

import { useSearchParams } from 'next/navigation';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

interface WorksheetViewerProps {
    module: MachineModule;
}

export function WorksheetViewer({ module }: WorksheetViewerProps) {
    const searchParams = useSearchParams();
    const lessonId = searchParams.get('lesson');
    const defaultPath = getLearningPath(module);
    const { actions, progress } = useLearningProgress(module);
    const defaultLesson = defaultPath?.lessons.find((item) => item.id === lessonId);

    const [lesson, setLesson] = useState(defaultLesson);

    useEffect(() => {
        let mounted = true;
        async function fetchDynamicWorksheet() {
            if (!lessonId) return;
            const supabase = createClient();
            if (!supabase) return;

            // 1. Check if the lesson itself is in the DB
            const { data: lessonData } = await supabase
                .from('lessons')
                .select('*')
                .eq('id', lessonId)
                .single();

            let targetLesson = defaultLesson;

            if (lessonData) {
                targetLesson = {
                    id: lessonData.id,
                    title: lessonData.title,
                    description: lessonData.description || '',
                    difficulty: 'Intermediate' as const,
                    estimatedMinutes: 30,
                    objectives: Array.isArray(lessonData.objectives) ? lessonData.objectives : [],
                    safetyNotes: Array.isArray(lessonData.safety_notes) ? lessonData.safety_notes : [],
                    href: `/${module}/lesson/${lessonData.id}`,
                    worksheetTitle: `${lessonData.title} Worksheet`,
                    worksheetTasks: [],
                    prerequisites: []
                };
            }

            if (!targetLesson) return;

            // 2. Fetch worksheet template for this lesson
            const { data: wtData } = await supabase
                .from('worksheet_templates')
                .select('*')
                .eq('lesson_id', lessonId)
                .eq('published', true)
                .maybeSingle();

            if (wtData && mounted) {
                setLesson({
                    ...targetLesson,
                    worksheetTitle: wtData.title,
                    worksheetTasks: Array.isArray(wtData.tasks) ? wtData.tasks : []
                });
            } else if (targetLesson && mounted) {
                setLesson(targetLesson);
            }
        }
        fetchDynamicWorksheet();
        return () => { mounted = false; };
    }, [lessonId, defaultLesson, module]);

    if (!defaultPath || !lesson) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600">
                Select a lesson from the learning path to open its worksheet.
            </div>
        );
    }

    const completed = Boolean(progress.worksheetCompletions[lesson.id]);
    const worksheetText = [
        `${lesson.worksheetTitle}`,
        '',
        `Module: ${defaultPath.title}`,
        `Lesson: ${lesson.title}`,
        '',
        'Tasks:',
        ...lesson.worksheetTasks.map((task, index) => `${index + 1}. ${task}`),
        '',
        'Observation / answer space:',
        '1.',
        '2.',
        '3.',
        '',
        'Safety confirmation:',
        '- I reviewed the lesson safety notes.',
        '- I will follow institutional SOPs and supervisor instructions.',
    ].join('\n');

    const handleDownload = () => {
        const blob = new Blob([worksheetText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${lesson.worksheetTitle.toLowerCase().replaceAll(' ', '-')}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Practical lab worksheet</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">{lesson.worksheetTitle}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{lesson.description}</p>
                    </div>
                    <FileText className="h-10 w-10 text-indigo-600" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <h3 className="text-sm font-bold text-slate-950">Prerequisites</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
                            {lesson.prerequisites.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <h3 className="text-sm font-bold text-slate-950">Learning objectives</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
                            {lesson.objectives.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-base font-bold text-slate-950">Worksheet tasks</h3>
                    <ol className="mt-3 space-y-3">
                        {lesson.worksheetTasks.map((task, index) => (
                            <li key={task} className="rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                                <span className="font-bold text-slate-950">{index + 1}. </span>{task}
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                    <strong>Safety reminder:</strong> Use this worksheet only for guided learning or supervised practical training. Always follow institutional SOPs, manufacturer instructions, and qualified supervisor directions.
                </div>
            </section>

            <aside className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-950">Worksheet actions</h3>
                    <div className="mt-4 space-y-3">
                        <button onClick={handleDownload} className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                            <Download className="h-4 w-4" /> Download worksheet
                        </button>
                        {completed ? (
                            <button disabled className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
                                <CheckCircle2 className="h-4 w-4" /> Completed
                            </button>
                        ) : (
                            <button onClick={() => actions.recordWorksheetComplete(lesson.id)} className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100">
                                Mark worksheet complete
                            </button>
                        )}
                    </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-bold text-slate-950">Suggested reflection</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Write what you understood, what you found difficult, and which safety step you must remember before practical work.</p>
                </div>
            </aside>
        </div>
    );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import { ArrowLeft, BookOpen, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';
import { useRouter } from 'next/navigation';

interface ManagedLessonPageProps {
    module: MachineModule;
    lessonId: string;
}

interface LessonData {
    id: string;
    title: string;
    description: string | null;
    objectives: string[];
    safety_notes: string[];
    content: string | null;
}

export function ManagedLessonPage({ module, lessonId }: ManagedLessonPageProps) {
    const supabase = createClient();
    const router = useRouter();
    const [lesson, setLesson] = useState<LessonData | null>(null);
    const [loading, setLoading] = useState(true);
    const { progress, actions } = useLearningProgress(module);

    const lessonProgress = progress.lessons[lessonId];
    const isCompleted = lessonProgress?.status === 'completed';

    useEffect(() => {
        let mounted = true;
        async function fetchLesson() {
            if (!supabase) return;
            const { data, error } = await supabase
                .from('lessons')
                .select('*')
                .eq('id', lessonId)
                .eq('module', module)
                .eq('published', true)
                .single();

            if (!error && data && mounted) {
                setLesson({
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    objectives: Array.isArray(data.objectives) ? data.objectives : [],
                    safety_notes: Array.isArray(data.safety_notes) ? data.safety_notes : [],
                    content: data.content,
                });
            }
            if (mounted) setLoading(false);
        }
        fetchLesson();
        return () => { mounted = false; };
    }, [lessonId, module, supabase]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-200">
                    <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900">Lesson Not Found</h2>
                    <p className="mt-2 text-slate-600">This lesson may have been unpublished or removed.</p>
                    <Link href={`/${module}/learning-path`} className="mt-6 inline-flex rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700 transition">
                        Return to Learning Path
                    </Link>
                </div>
            </div>
        );
    }

    const handleComplete = () => {
        actions.recordLessonComplete(lessonId);
        router.push(`/${module}/learning-path`);
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Top Navigation */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href={`/${module}/learning-path`} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition font-medium text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Timeline
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                        <span>{module}</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-800 truncate max-w-[150px]">{lesson.title}</span>
                    </div>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-4 mt-8 sm:mt-12">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">
                        <BookOpen className="w-4 h-4" />
                        Lesson Module
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                        {lesson.title}
                    </h1>
                    {lesson.description && (
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            {lesson.description}
                        </p>
                    )}
                </motion.div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {/* Objectives */}
                    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Learning Objectives
                        </h3>
                        {lesson.objectives.length > 0 ? (
                            <ul className="space-y-3">
                                {lesson.objectives.map((obj, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                                        <span className="shrink-0 w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold mt-0.5">{i + 1}</span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500 italic">No specific objectives listed.</p>
                        )}
                    </motion.section>

                    {/* Safety Notes */}
                    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200/60">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            Safety Prerequisites
                        </h3>
                        {lesson.safety_notes.length > 0 ? (
                            <ul className="space-y-3">
                                {lesson.safety_notes.map((note, i) => (
                                    <li key={i} className="flex gap-3 text-amber-900 text-sm leading-relaxed">
                                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-amber-700/60 italic">No specific safety notes for this lesson.</p>
                        )}
                    </motion.section>
                </div>

                {lesson.content && (
                    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                        <div className="prose prose-slate max-w-none text-sm leading-loose">
                            {lesson.content}
                        </div>
                    </motion.section>
                )}

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12 flex flex-col items-center">
                    {isCompleted ? (
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Lesson Completed</h3>
                            <p className="text-slate-500 text-sm text-center max-w-sm">You have successfully finished this lesson. Great job!</p>
                            <Link href={`/${module}/learning-path`} className="mt-4 rounded-2xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800">
                                Return to Timeline
                            </Link>
                        </div>
                    ) : (
                        <button
                            onClick={handleComplete}
                            className="rounded-2xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30 w-full sm:w-auto"
                        >
                            Mark Lesson as Complete
                        </button>
                    )}
                </motion.div>
            </main>
        </div>
    );
}

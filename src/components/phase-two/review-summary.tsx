'use client';

import Link from 'next/link';
import { BookOpen, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';

interface ReviewSummaryProps {
    module: MachineModule;
}

export function ReviewSummary({ module }: ReviewSummaryProps) {
    const path = getLearningPath(module);
    const { progress, summary } = useLearningProgress(module);

    if (!path) return null;

    const incompleteLessons = path.lessons.filter((lesson) => progress.lessons[lesson.id]?.status !== 'completed');
    const completedLessons = path.lessons.filter((lesson) => progress.lessons[lesson.id]?.status === 'completed');
    const completedWorksheets = path.lessons.filter((lesson) => progress.worksheetCompletions[lesson.id]);

    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Review summary</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">{path.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">Use this page to identify completed work, remaining lessons, and safety topics to revise.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                        Latest quiz: <span className="font-bold text-slate-950">{summary.latestQuizAttempt ? `${summary.latestQuizAttempt.percentage}%` : 'No attempt yet'}</span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{completedLessons.length}</p>
                        <p className="mt-1 text-xs text-slate-500">Lessons completed</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{incompleteLessons.length}</p>
                        <p className="mt-1 text-xs text-slate-500">Lessons remaining</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{completedWorksheets.length}</p>
                        <p className="mt-1 text-xs text-slate-500">Worksheets completed</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{summary.completionPercentage}%</p>
                        <p className="mt-1 text-xs text-slate-500">Path completion</p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                        <h3 className="text-lg font-bold text-slate-950">Completed lessons</h3>
                    </div>
                    {completedLessons.length === 0 ? (
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">No lessons completed yet. Start with the first lesson in the learning path.</p>
                    ) : (
                        <ul className="mt-4 space-y-3">
                            {completedLessons.map((lesson) => (
                                <li key={lesson.id} className="rounded-2xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
                                    <strong>{lesson.title}</strong>
                                    <p className="mt-1">{lesson.summary[0]}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        <h3 className="text-lg font-bold text-slate-950">Recommended next lesson</h3>
                    </div>
                    {incompleteLessons.length === 0 ? (
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">All lessons are completed. Continue with assessment review or certificate generation.</p>
                    ) : (
                        <div className="mt-4 rounded-2xl bg-indigo-50 p-4">
                            <h4 className="font-bold text-indigo-950">{incompleteLessons[0].title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-indigo-900">{incompleteLessons[0].description}</p>
                            <Link href={incompleteLessons[0].href} className="mt-4 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700">
                                Continue learning
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <h3 className="text-lg font-bold text-slate-950">Safety topics to revise</h3>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {path.lessons.flatMap((lesson) => lesson.safetyNotes).slice(0, 6).map((note) => (
                        <div key={note} className="rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                            {note}
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">Quick actions</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                    <Link href={`/${module}/learning-path`} className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700">Learning path</Link>
                    <Link href={`/${module}/worksheet`} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Worksheets</Link>
                    <Link href={`/${module}/quiz`} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Retake quiz</Link>
                    <Link href={`/${module}/certificate`} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Certificate</Link>
                </div>
            </section>
        </div>
    );
}

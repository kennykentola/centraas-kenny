'use client';

import Link from 'next/link';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';

interface ProgressCardProps {
    module: MachineModule;
}

function getProgressWidthClass(percentage: number): string {
    const clamped = Math.max(0, Math.min(100, percentage));
    const rounded = Math.round(clamped / 5) * 5;
    const widthMap: Record<number, string> = {
        0: 'w-0',
        5: 'w-[5%]',
        10: 'w-[10%]',
        15: 'w-[15%]',
        20: 'w-[20%]',
        25: 'w-[25%]',
        30: 'w-[30%]',
        35: 'w-[35%]',
        40: 'w-[40%]',
        45: 'w-[45%]',
        50: 'w-[50%]',
        55: 'w-[55%]',
        60: 'w-[60%]',
        65: 'w-[65%]',
        70: 'w-[70%]',
        75: 'w-[75%]',
        80: 'w-[80%]',
        85: 'w-[85%]',
        90: 'w-[90%]',
        95: 'w-[95%]',
        100: 'w-full',
    };
    return widthMap[rounded] || 'w-0';
}

export function ProgressCard({ module }: ProgressCardProps) {
    const path = getLearningPath(module);
    const { summary } = useLearningProgress(module);

    if (!path) return null;

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">{path.title}</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-950">Your learning progress</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Complete lessons, worksheets, safety checklists, and quizzes to become certificate-ready.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[420px]">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{summary.completedLessons}/{summary.totalLessons}</p>
                        <p className="mt-1 text-xs text-slate-500">Lessons done</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{summary.inProgressLessons}</p>
                        <p className="mt-1 text-xs text-slate-500">In progress</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{summary.completionPercentage}%</p>
                        <p className="mt-1 text-xs text-slate-500">Completion</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{summary.latestQuizAttempt ? summary.latestQuizAttempt.percentage : '—'}%</p>
                        <p className="mt-1 text-xs text-slate-500">Latest quiz</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className={`h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 ${getProgressWidthClass(summary.completionPercentage)}`} />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/${module}/learning-path`} className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    Open learning path
                </Link>
                <Link href={`/${module}/certificate`} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                    Certificate
                </Link>
                <Link href={`/${module}/review-summary`} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                    Review summary
                </Link>
            </div>
        </div>
    );
}

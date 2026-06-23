'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Award, CheckCircle2, ShieldCheck, Users, XCircle } from 'lucide-react';

type Profile = {
    id: string;
    full_name: string | null;
    role: 'student' | 'instructor' | 'admin';
    institution: string | null;
};

type ProgressRow = {
    rowKey: string;
    studentName: string | null;
    module: string;
    activityLabel: string;
    activityType: 'lesson' | 'worksheet' | 'quiz' | 'safety' | 'other';
    completed: boolean;
    score: number | null;
    updatedAt: string;
};

/** Map a raw page_path to a human-readable label and an activity type. */
function parsePagePath(pagePath: string): { label: string; type: ProgressRow['activityType'] } {
    if (pagePath.endsWith('-worksheet')) {
        const base = pagePath.replace('-worksheet', '');
        const name = base.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return { label: `Worksheet – ${name}`, type: 'worksheet' };
    }
    if (pagePath.endsWith('-quiz')) {
        return { label: 'Quiz assessment', type: 'quiz' };
    }
    if (pagePath.endsWith('-safety')) {
        const base = pagePath.replace('-safety', '');
        const name = base.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return { label: `Safety checklist – ${name}`, type: 'safety' };
    }
    // Lesson
    const name = pagePath.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { label: `Lesson – ${name}`, type: 'lesson' };
}

function ActivityBadge({ type }: { type: ProgressRow['activityType'] }) {
    const map: Record<ProgressRow['activityType'], { label: string; className: string }> = {
        lesson: { label: 'Lesson', className: 'bg-indigo-100 text-indigo-700' },
        worksheet: { label: 'Worksheet', className: 'bg-emerald-100 text-emerald-700' },
        quiz: { label: 'Quiz', className: 'bg-amber-100 text-amber-700' },
        safety: { label: 'Safety', className: 'bg-rose-100 text-rose-700' },
        other: { label: 'Other', className: 'bg-slate-100 text-slate-600' },
    };
    const { label, className } = map[type];
    return (
        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${className}`}>
            {label}
        </span>
    );
}

export default function InstructorPage() {
    const supabase = createClient();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [rows, setRows] = useState<ProgressRow[]>([]);
    const [loading, setLoading] = useState(!!supabase);

    useEffect(() => {
        if (!supabase) return;

        const loadDashboard = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData.session?.user.id;

            if (!userId) {
                setLoading(false);
                return;
            }

            const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();
            setProfile(profileData);

            // Fetch all learning_progress rows with the associated student profile.
            const { data: progressData, error } = await supabase
                .from('learning_progress')
                .select('id, user_id, profiles(full_name), module, page_path, completed, score, updated_at')
                .order('updated_at', { ascending: false })
                .limit(200);

            if (!error && progressData) {
                const mapped: ProgressRow[] = progressData.map((row: any) => {
                    const { label, type } = parsePagePath(row.page_path as string);
                    return {
                        rowKey: row.id,
                        studentName: row.profiles?.full_name ?? null,
                        module: row.module,
                        activityLabel: label,
                        activityType: type,
                        completed: row.completed,
                        score: typeof row.score === 'number' ? row.score : null,
                        updatedAt: row.updated_at,
                    };
                });
                setRows(mapped);
            }

            setLoading(false);
        };

        loadDashboard();
    }, [supabase]);

    if (!supabase) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Instructor dashboard is not configured yet</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Add Supabase environment variables in Netlify, then redeploy.</p>
                </section>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
                        Loading instructor dashboard…
                    </div>
                </section>
            </div>
        );
    }

    if (!profile || !['instructor', 'admin'].includes(profile.role)) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Instructor access required</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        Your account role is <strong>{profile?.role ?? 'unknown'}</strong>. Ask an admin to update your profile role to instructor or admin.
                    </p>
                    <Link href="/admin" className="mt-4 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white">
                        Open admin dashboard
                    </Link>
                </section>
            </div>
        );
    }

    // Compute live stats.
    const uniqueStudents = new Set(rows.map((row) => row.studentName).filter(Boolean)).size;
    const completedActivities = rows.filter((row) => row.completed).length;
    const quizRows = rows.filter((row) => row.activityType === 'quiz' && row.score !== null);
    const averageScore =
        quizRows.length > 0
            ? (quizRows.reduce((sum, row) => sum + (row.score ?? 0), 0) / quizRows.length).toFixed(1)
            : '—';
    const worksheetsCompleted = rows.filter((row) => row.activityType === 'worksheet' && row.completed).length;
    const safetyCompleted = rows.filter((row) => row.activityType === 'safety' && row.completed).length;

    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Instructor dashboard</p>
                        <h1 className="mt-2 text-3xl font-black">Class progress overview</h1>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-indigo-50">
                            Live student progress from the database. Shows lesson completions, quiz scores, worksheets, and safety checklists.
                        </p>
                    </div>
                    <Users className="h-10 w-10 text-indigo-100" />
                </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Users className="h-4 w-4" />
                        <p className="text-xs font-bold uppercase tracking-wide">Students</p>
                    </div>
                    <p className="mt-2 text-3xl font-black text-slate-950">{uniqueStudents}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                        <CheckCircle2 className="h-4 w-4" />
                        <p className="text-xs font-bold uppercase tracking-wide">Activities done</p>
                    </div>
                    <p className="mt-2 text-3xl font-black text-slate-950">{completedActivities}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Award className="h-4 w-4" />
                        <p className="text-xs font-bold uppercase tracking-wide">Avg quiz score</p>
                    </div>
                    <p className="mt-2 text-3xl font-black text-slate-950">{averageScore}{quizRows.length > 0 ? '%' : ''}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                        <ShieldCheck className="h-4 w-4" />
                        <p className="text-xs font-bold uppercase tracking-wide">Safety checklists</p>
                    </div>
                    <p className="mt-2 text-3xl font-black text-slate-950">{safetyCompleted}</p>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Live activity log</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">Recent learning activity</h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600">
                        <span className="font-bold">{worksheetsCompleted}</span> worksheets done
                    </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                    <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-600">
                        <div className="col-span-3">Student</div>
                        <div className="col-span-2">Module</div>
                        <div className="col-span-3">Activity</div>
                        <div className="col-span-1">Type</div>
                        <div className="col-span-1">Done</div>
                        <div className="col-span-1">Score</div>
                        <div className="col-span-1">Date</div>
                    </div>
                    {rows.length === 0 ? (
                        <div className="p-5 text-sm text-slate-600">
                            No learning progress records yet. Students will appear here as they complete lessons.
                        </div>
                    ) : (
                        rows.map((row) => (
                            <div
                                key={row.rowKey}
                                className="grid grid-cols-12 items-center gap-2 border-t border-slate-100 px-4 py-3 text-sm"
                            >
                                <div className="col-span-3 font-semibold text-slate-700 truncate">
                                    {row.studentName || <span className="text-slate-400 italic">Unknown</span>}
                                </div>
                                <div className="col-span-2 font-medium text-slate-700 uppercase text-xs">{row.module}</div>
                                <div className="col-span-3 text-slate-600 truncate text-xs">{row.activityLabel}</div>
                                <div className="col-span-1">
                                    <ActivityBadge type={row.activityType} />
                                </div>
                                <div className="col-span-1">
                                    {row.completed
                                        ? <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                        : <XCircle className="h-4 w-4 text-slate-300" />
                                    }
                                </div>
                                <div className="col-span-1 text-slate-700 font-semibold">
                                    {row.score !== null ? `${row.score}%` : '—'}
                                </div>
                                <div className="col-span-1 text-slate-400 text-xs">
                                    {new Date(row.updatedAt).toLocaleDateString()}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}

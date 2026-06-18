'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { ShieldCheck, Users } from 'lucide-react';

type Profile = {
    id: string;
    full_name: string | null;
    role: 'student' | 'instructor' | 'admin';
    institution: string | null;
};

type ProgressRow = {
    id: string;
    full_name: string | null;
    module: string;
    page_path: string;
    completed: boolean;
    score: number | null;
    updated_at: string;
};

export default function InstructorPage() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [rows, setRows] = useState<ProgressRow[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

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

    useEffect(() => {
        const loadDashboard = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData.session?.user.id;

            if (!userId) {
                setLoading(false);
                return;
            }

            const { data: profileData } = await supabase.from('profiles').select('*').eq('id', userId).single();
            setProfile(profileData);

            const { data: progressData, error } = await supabase
                .from('learning_progress')
                .select('id, profiles(full_name), module, page_path, completed, score, updated_at')
                .order('updated_at', { ascending: false })
                .limit(100);

            if (!error && progressData) {
                setRows(progressData.map((row: any) => ({
                    id: row.id,
                    full_name: row.profiles?.full_name,
                    module: row.module,
                    page_path: row.page_path,
                    completed: row.completed,
                    score: row.score,
                    updated_at: row.updated_at,
                })));
            }

            setLoading(false);
        };

        loadDashboard();
    }, [supabase]);

    if (loading) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    Loading instructor dashboard…
                </section>
            </div>
        );
    }

    if (!profile || !['instructor', 'admin'].includes(profile.role)) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Instructor access required</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Your account role is <strong>{profile?.role ?? 'unknown'}</strong>. Ask an admin to update your profile role to instructor or admin.</p>
                    <Link href="/admin" className="mt-4 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white">Open admin dashboard</Link>
                </section>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Instructor dashboard</p>
                        <h1 className="mt-2 text-3xl font-black">Class progress overview</h1>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-indigo-50">View student progress, quiz scores, completed pages, and recent learning activity.</p>
                    </div>
                    <Users className="h-10 w-10 text-indigo-100" />
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Students tracked</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{new Set(rows.map((row) => row.id).filter(Boolean)).size}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Completed activities</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{rows.filter((row) => row.completed).length}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Average score</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">
                        {rows.filter((row) => typeof row.score === 'number').length ? (rows.reduce((sum, row) => sum + Number(row.score ?? 0), 0) / rows.filter((row) => typeof row.score === 'number').length).toFixed(1) : '—'}
                    </p>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Recent learning progress</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">Activity table</h2>
                    </div>
                    <ShieldCheck className="h-10 w-10 text-indigo-600" />
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                    <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                        <div className="col-span-3">Student</div>
                        <div className="col-span-2">Module</div>
                        <div className="col-span-3">Page</div>
                        <div className="col-span-1">Done</div>
                        <div className="col-span-1">Score</div>
                        <div className="col-span-2">Updated</div>
                    </div>
                    {rows.length === 0 ? (
                        <div className="p-5 text-sm text-slate-600">No learning progress records yet.</div>
                    ) : rows.map((row) => (
                        <div key={row.id} className="grid grid-cols-12 items-center gap-2 border-t border-slate-100 px-4 py-3 text-sm">
                            <div className="col-span-3 font-semibold text-slate-700">{row.full_name || 'Unknown student'}</div>
                            <div className="col-span-2 text-slate-700">{row.module}</div>
                            <div className="col-span-3 text-slate-600">{row.page_path}</div>
                            <div className="col-span-1">{row.completed ? 'Yes' : 'No'}</div>
                            <div className="col-span-1">{typeof row.score === 'number' ? row.score : '—'}</div>
                            <div className="col-span-2 text-slate-500">{new Date(row.updated_at).toLocaleDateString()}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

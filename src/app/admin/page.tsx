'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { ShieldAlert, UsersRound } from 'lucide-react';

type Profile = {
    id: string;
    full_name: string | null;
    role: 'student' | 'instructor' | 'admin';
    institution: string | null;
    updated_at: string;
};

export default function AdminPage() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [selectedId, setSelectedId] = useState('');
    const [selectedRole, setSelectedRole] = useState<'student' | 'instructor' | 'admin'>('student');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const supabase = createClient();

    if (!supabase) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Admin dashboard is not configured yet</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Add Supabase environment variables in Netlify, then redeploy.</p>
                </section>
            </div>
        );
    }

    useEffect(() => {
        const loadAdmin = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData.session?.user.id;

            if (!userId) {
                setLoading(false);
                return;
            }

            const { data: currentProfile } = await supabase.from('profiles').select('*').eq('id', userId).single();
            setProfile(currentProfile);

            const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });

            if (!error && data) {
                setProfiles(data);
            }

            setLoading(false);
        };

        loadAdmin();
    }, [supabase]);

    const updateRole = async () => {
        if (!selectedId) return;

        setSaving(true);
        setMessage('');

        const { error } = await supabase.from('profiles').update({ role: selectedRole }).eq('id', selectedId);

        setMessage(error ? error.message : 'User role updated.');
        setSaving(false);
    };

    if (loading) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    Loading admin dashboard…
                </section>
            </div>
        );
    }

    if (!profile || profile.role !== 'admin') {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Admin access required</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Your account role is <strong>{profile?.role ?? 'unknown'}</strong>. Only admins can manage roles.</p>
                </section>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-700 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Admin dashboard</p>
                        <h1 className="mt-2 text-3xl font-black">Manage users and roles</h1>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-indigo-50">Promote students to instructor or admin. This controls access to the instructor dashboard.</p>
                    </div>
                    <ShieldAlert className="h-10 w-10 text-indigo-100" />
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Students</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{profiles.filter((item) => item.role === 'student').length}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Instructors</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{profiles.filter((item) => item.role === 'instructor').length}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Admins</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{profiles.filter((item) => item.role === 'admin').length}</p>
                </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">User management</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-950">Registered users</h2>
                        </div>
                        <UsersRound className="h-10 w-10 text-indigo-600" />
                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                        <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                            <div className="col-span-4">Name</div>
                            <div className="col-span-3">Institution</div>
                            <div className="col-span-2">Role</div>
                            <div className="col-span-3">Updated</div>
                        </div>
                        {profiles.length === 0 ? (
                            <div className="p-5 text-sm text-slate-600">No users yet.</div>
                        ) : profiles.map((item) => (
                            <button key={item.id} onClick={() => { setSelectedId(item.id); setSelectedRole(item.role); }} className="grid w-full grid-cols-12 items-center gap-2 border-t border-slate-100 px-4 py-3 text-left text-sm hover:bg-slate-50">
                                <div className="col-span-4 font-semibold text-slate-700">{item.full_name || 'Unknown user'}</div>
                                <div className="col-span-3 text-slate-600">{item.institution || '—'}</div>
                                <div className="col-span-2 rounded-xl bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700">{item.role}</div>
                                <div className="col-span-3 text-slate-500">{new Date(item.updated_at).toLocaleDateString()}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-950">Update role</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Select a user from the list, then assign a role.</p>

                    <div className="mt-5 space-y-4">
                        <label className="block">
                            <span className="text-sm font-semibold text-slate-700">Selected user ID</span>
                            <input value={selectedId} onChange={(event) => setSelectedId(event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-semibold text-slate-700">Role</span>
                            <select value={selectedRole} onChange={(event) => setSelectedRole(event.target.value as 'student' | 'instructor' | 'admin')} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100">
                                <option value="student">student</option>
                                <option value="instructor">instructor</option>
                                <option value="admin">admin</option>
                            </select>
                        </label>
                        <button disabled={saving || !selectedId} onClick={updateRole} className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">
                            {saving ? 'Saving…' : 'Update role'}
                        </button>
                        <Link href="/instructor" className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white">Open instructor dashboard</Link>
                    </div>

                    {message && (
                        <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
                            {message}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

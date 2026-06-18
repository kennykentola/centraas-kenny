'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from 'lucide-react';

type Profile = {
    id: string;
    full_name: string | null;
    role: 'student' | 'instructor' | 'admin';
    institution: string | null;
};

export default function ProfilePage() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [fullName, setFullName] = useState('');
    const [institution, setInstitution] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const supabase = createClient();

    if (!supabase) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Profile is not configured yet</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Add Supabase environment variables in Netlify, then redeploy.</p>
                </section>
            </div>
        );
    }

    useEffect(() => {
        const loadProfile = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData.session?.user.id;

            if (!userId) {
                setLoading(false);
                return;
            }

            const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
            setProfile(data);
            setFullName(data?.full_name ?? sessionData.session?.user.email ?? '');
            setInstitution(data?.institution ?? '');
            setLoading(false);
        };

        loadProfile();
    }, [supabase]);

    const saveProfile = async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        const userId = sessionData.session?.user.id;

        if (!userId) return;

        setSaving(true);
        setMessage('');

        const { error } = await supabase.from('profiles').upsert({
            id: userId,
            full_name: fullName,
            institution,
            role: profile?.role ?? 'student',
        });

        setMessage(error ? error.message : 'Profile updated.');
        setSaving(false);
    };

    if (loading) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    Loading profile…
                </section>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Please sign in</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">You need to sign in before viewing your profile.</p>
                </section>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-4 py-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">Student profile</p>
                        <h1 className="mt-2 text-3xl font-black text-slate-950">My profile</h1>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">Update your name and institution. Your role is controlled by the instructor/admin database.</p>
                    </div>
                    <User className="h-10 w-10 text-violet-600" />
                </div>

                <div className="mt-6 space-y-4">
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Full name</span>
                        <input value={fullName} onChange={(event) => setFullName(event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
                    </label>
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Institution</span>
                        <input value={institution} onChange={(event) => setInstitution(event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
                    </label>
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                        <strong>Role:</strong> {profile.role}
                    </div>
                    <button disabled={saving} onClick={saveProfile} className="w-full rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">
                        {saving ? 'Saving…' : 'Save profile'}
                    </button>
                </div>

                {message && (
                    <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
                        {message}
                    </div>
                )}
            </section>
        </div>
    );
}

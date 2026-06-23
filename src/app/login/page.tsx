'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { KeyRound, LogIn, UserPlus } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [institution, setInstitution] = useState('');
    const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);

    const supabase = createClient();

    if (!supabase) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Login is not configured yet</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Add Supabase environment variables in Netlify, then redeploy.</p>
                </section>
            </div>
        );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        if (mode === 'sign-up') {
            const redirectToUrl = typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : undefined;
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: redirectToUrl,
                    data: {
                        full_name: fullName,
                        institution,
                    },
                },
            });

            if (error) {
                setMessage(error.message);
            } else {
                setMessage('Account created. Check your email if confirmation is enabled.');
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                setMessage(error.message);
            } else {
                router.push('/dashboard');
                router.refresh();
            }
        }

        setLoading(false);
    };

    return (
        <div className="mx-auto max-w-3xl px-4 py-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">Phase 4 Supabase auth</p>
                        <h1 className="mt-2 text-3xl font-black text-slate-950">Student login</h1>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                            Sign in to save AI tutor history, learning progress, certificates, and worksheet submissions to Supabase.
                        </p>
                    </div>
                    <KeyRound className="h-10 w-10 text-violet-600" />
                </div>

                <div className="mt-6 grid gap-2 rounded-2xl bg-slate-50 p-2 sm:grid-cols-2">
                    <button onClick={() => { setMode('sign-in'); setMessage(''); }} className={`rounded-xl px-4 py-3 text-sm font-bold ${mode === 'sign-in' ? 'bg-violet-600 text-white' : 'text-slate-700'}`}>
                        Sign in
                    </button>
                    <button onClick={() => { setMode('sign-up'); setMessage(''); }} className={`rounded-xl px-4 py-3 text-sm font-bold ${mode === 'sign-up' ? 'bg-violet-600 text-white' : 'text-slate-700'}`}>
                        Create account
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {mode === 'sign-up' && (
                        <>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Full name</span>
                                <input value={fullName} onChange={(event) => setFullName(event.target.value)} type="text" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="Your name" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Institution</span>
                                <input value={institution} onChange={(event) => setInstitution(event.target.value)} type="text" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="School or organization" />
                            </label>
                        </>
                    )}

                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Email</span>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="student@example.com" />
                    </label>

                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Password</span>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required minLength={6} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="Minimum 6 characters" />
                    </label>

                    {message && (
                        <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
                            {message}
                        </div>
                    )}

                    <button disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60">
                        {mode === 'sign-in' ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
                        {loading ? 'Please wait…' : mode === 'sign-in' ? 'Sign in' : 'Create account'}
                    </button>
                </form>
            </section>
        </div>
    );
}

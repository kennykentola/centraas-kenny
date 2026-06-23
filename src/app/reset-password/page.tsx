'use client';

import { FormEvent, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { KeyRound } from 'lucide-react';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    if (!supabase) {
        return (
            <div className="mx-auto max-w-2xl px-4 py-10">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-3xl font-black text-slate-950">Password reset is not configured yet</h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">Add Supabase environment variables in Netlify, then redeploy.</p>
                </section>
            </div>
        );
    }

    const sendResetEmail = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${siteUrl}/reset-password`,
        });

        setMessage(error ? error.message : 'Password reset email sent. Check your inbox.');
        setLoading(false);
    };

    const updatePassword = async () => {
        setLoading(true);
        setMessage('');

        const { error } = await supabase.auth.updateUser({
            password: newPassword,
        });

        setMessage(error ? error.message : 'Password updated successfully. You can now sign in.');
        setLoading(false);
    };

    return (
        <div className="mx-auto max-w-2xl px-4 py-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">Password reset</p>
                        <h1 className="mt-2 text-3xl font-black text-slate-950">Reset password</h1>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">Enter your email to receive a reset link. If you opened this page from the email link, enter your new password.</p>
                    </div>
                    <KeyRound className="h-10 w-10 text-violet-600" />
                </div>

                <form onSubmit={sendResetEmail} className="mt-6 space-y-4">
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Email</span>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="student@example.com" />
                    </label>
                    <button disabled={loading} className="w-full rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">
                        {loading ? 'Please wait…' : 'Send reset email'}
                    </button>
                </form>

                <div className="my-6 border-t border-slate-200" />

                <div className="space-y-4">
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">New password</span>
                        <input value={newPassword} onChange={(event) => setNewPassword(event.target.value)} type="password" minLength={6} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="Minimum 6 characters" />
                    </label>
                    <button disabled={loading || newPassword.length < 6} onClick={updatePassword} className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">
                        Update password
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

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { LogOut, User } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function AuthButton() {
    const [email, setEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = supabaseUrl && supabaseKey ? createClient() : null;

    useEffect(() => {
        if (!supabase) {
            setLoading(false);
            return;
        }

        let mounted = true;

        supabase.auth.getSession().then(({ data }) => {
            if (!mounted) return;
            setEmail(data.session?.user.email ?? null);
            setLoading(false);
        });

        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!mounted) return;
            setEmail(session?.user.email ?? null);
            setLoading(false);
        });

        return () => {
            mounted = false;
            subscription.subscription.unsubscribe();
        };
    }, [supabase]);

    const signOut = async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
        window.location.reload();
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center rounded-2xl bg-white/10 px-4 py-2 text-xs font-bold text-white">
                Loading…
            </div>
        );
    }

    if (!email) {
        return (
            <Link href="/login" className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-100">
                <User className="mr-2 h-4 w-4" />
                Login
            </Link>
        );
    }

    return (
        <button onClick={signOut} className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
        </button>
    );
}

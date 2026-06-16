'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function useProfileSync() {
    const supabase = supabaseUrl && supabaseKey ? createClient() : null;

    useEffect(() => {
        if (!supabase) return;

        const syncProfile = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const user = sessionData.session?.user;

            if (!user) return;

            const fullName = user.user_metadata?.full_name as string | undefined;
            const institution = user.user_metadata?.institution as string | undefined;

            await supabase.from('profiles').upsert({
                id: user.id,
                full_name: fullName ?? user.email,
                institution: institution ?? null,
                role: 'student',
            });
        };

        syncProfile();

        const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                supabase.from('profiles').upsert({
                    id: session.user.id,
                    full_name: (session.user.user_metadata?.full_name as string | undefined) ?? session.user.email,
                    institution: (session.user.user_metadata?.institution as string | undefined) ?? null,
                    role: 'student',
                });
            }
        });

        return () => subscription.subscription.unsubscribe();
    }, [supabase]);
}

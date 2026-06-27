'use client';

import { useProfileSync } from '@/hooks/use-profile-sync';

export function ProfileSyncProvider() {
    useProfileSync();
    return null;
}

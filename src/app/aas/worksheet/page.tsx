import { Metadata } from 'next';
import { Suspense } from 'react';
import { WorksheetViewer } from '@/components/phase-two/worksheet-viewer';

export const metadata: Metadata = {
    title: 'AAS Worksheet | Centraas',
    description: 'Download and complete AAS practical learning worksheets.',
};

export default function AASWorksheetPage() {
    return (
        <Suspense fallback={<div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">Loading worksheet…</div>}>
            <WorksheetViewer module="aas" />
        </Suspense>
    );
}

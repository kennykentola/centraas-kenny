import { Metadata } from 'next';
import { Suspense } from 'react';
import { WorksheetViewer } from '@/components/phase-two/worksheet-viewer';

export const metadata: Metadata = {
    title: 'Centrifuge Worksheet | Centraas',
    description: 'Download and complete centrifuge practical learning worksheets.',
};

export default function CentrifugeWorksheetPage() {
    return (
        <Suspense fallback={<div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">Loading worksheet…</div>}>
            <WorksheetViewer module="centrifuge" />
        </Suspense>
    );
}

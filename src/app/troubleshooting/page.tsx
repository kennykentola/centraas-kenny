import { Metadata } from 'next';
import { TroubleshootingTree } from '@/components/phase-three/troubleshooting-tree';
import { Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Troubleshooting Decision Trees | Centraas',
    description: 'Guided troubleshooting decision trees for AAS absorbance, calibration problems, centrifuge vibration, and separation issues.',
};

export default function TroubleshootingPage() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-orange-100">Phase 3 troubleshooting</p>
                        <h1 className="mt-2 text-3xl font-black">Decision trees</h1>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-orange-50">
                            Follow guided questions for AAS signal/calibration issues and centrifuge vibration, separation, and safety concerns.
                        </p>
                    </div>
                    <Stethoscope className="h-10 w-10 text-orange-100" />
                </div>
            </section>

            <TroubleshootingTree />
        </div>
    );
}

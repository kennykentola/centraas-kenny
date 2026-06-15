import { Metadata } from 'next';
import { CentrifugeCalculator } from '@/components/phase-three/centrifuge-calculator';
import { TubeBalanceChecker } from '@/components/phase-three/tube-balance-checker';
import { Gauge } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Centrifuge Calculators | Centraas',
    description: 'Use interactive centrifuge tools for RCF/RPM conversion, rotor radius, tube balancing, and safety checks.',
};

export default function CentrifugeCalculatorsPage() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 via-emerald-700 to-cyan-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-100">Phase 3 engineering tools</p>
                        <h1 className="mt-2 text-3xl font-black">Centrifuge calculators</h1>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-emerald-50">
                            Convert RCF and RPM, check rotor radius, and practice safe tube loading before using a real centrifuge.
                        </p>
                    </div>
                    <Gauge className="h-10 w-10 text-emerald-100" />
                </div>
            </section>

            <CentrifugeCalculator />
            <TubeBalanceChecker />
        </div>
    );
}

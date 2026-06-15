import { Metadata } from 'next';
import { BeerLambertCalculator } from '@/components/phase-three/beer-lambert-calculator';
import { CalibrationCurveGenerator } from '@/components/phase-three/calibration-curve';
import { FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AAS Calculators | Centraas',
    description: 'Use interactive AAS calculators for Beer-Lambert law, calibration curves, unknown concentration, and R-squared checks.',
};

export default function AASCalculatorsPage() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Phase 3 science tools</p>
                        <h1 className="mt-2 text-3xl font-black">AAS calculators</h1>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-indigo-50">
                            Practice analytical chemistry calculations for absorbance, concentration, calibration curves, residuals, and calibration quality.
                        </p>
                    </div>
                    <FlaskConical className="h-10 w-10 text-indigo-100" />
                </div>
            </section>

            <BeerLambertCalculator />
            <CalibrationCurveGenerator />
        </div>
    );
}

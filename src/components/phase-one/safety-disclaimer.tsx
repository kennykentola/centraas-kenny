import { AlertTriangle, ShieldCheck } from 'lucide-react';

export default function SafetyDisclaimer({ compact = false }: { compact?: boolean }) {
    if (compact) {
        return (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                <div className="flex gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <p className="text-xs leading-relaxed text-amber-800">
                        Safety-first training only. Always follow your institution's SOP, manufacturer manual, and qualified supervisor instructions.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <section className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm">
            <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                    <h2 className="text-base font-bold text-amber-950">Safety and training disclaimer</h2>
                    <p className="mt-2 text-sm leading-relaxed text-amber-900">
                        Centraas is an educational platform for laboratory training. It does not replace official institutional SOPs,
                        manufacturer instructions, regulatory requirements, or supervision by qualified laboratory personnel.
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm text-amber-900 sm:grid-cols-2">
                        <li className="flex gap-2">
                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                            <span>Perform only supervised practical work after proper training.</span>
                        </li>
                        <li className="flex gap-2">
                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                            <span>Use required PPE and follow chemical, gas, electrical, and biohazard rules.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import { Gauge, RotateCcw } from 'lucide-react';

export function CentrifugeCalculator() {
    const [mode, setMode] = useState<'rcf' | 'rpm'>('rcf');
    const [radiusMm, setRadiusMm] = useState('100');
    const [rpm, setRpm] = useState('3500');
    const [rcf, setRcf] = useState('1364');

    const radiusCm = Number(radiusMm) / 10;
    const rpmNumber = Number(rpm);
    const rcfNumber = Number(rcf);

    const calculatedRcf = mode === 'rcf' && radiusCm > 0 && rpmNumber > 0 ? 1.118e-5 * radiusCm * rpmNumber ** 2 : null;
    const calculatedRpm = mode === 'rpm' && radiusCm > 0 && rcfNumber > 0 ? Math.sqrt(rcfNumber / (1.118e-5 * radiusCm)) : null;

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Centrifuge calculator</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">RCF/RPM converter</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        Formula: <strong>RCF = 1.118 × 10⁻⁵ × r × N²</strong>, where r is rotor radius in centimeters and N is RPM.
                    </p>
                </div>
                <Gauge className="h-10 w-10 text-emerald-600" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
                <label className="block md:col-span-2">
                    <span className="text-sm font-semibold text-slate-700">Rotor radius (mm)</span>
                    <input value={radiusMm} onChange={(event) => setRadiusMm(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="e.g. 100" />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">RPM</span>
                    <input value={rpm} onChange={(event) => setRpm(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="e.g. 3500" />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">RCF / g-force</span>
                    <input value={rcf} onChange={(event) => setRcf(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="e.g. 1364" />
                </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                <button onClick={() => setMode('rcf')} className={`rounded-xl px-4 py-2 text-sm font-bold ${mode === 'rcf' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Calculate RCF</button>
                <button onClick={() => setMode('rpm')} className={`rounded-xl px-4 py-2 text-sm font-bold ${mode === 'rpm' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Calculate RPM</button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-emerald-600" />
                        <h3 className="font-bold text-slate-950">Result</h3>
                    </div>
                    {mode === 'rcf' ? (
                        <>
                            <p className="mt-3 text-3xl font-black text-slate-950">{calculatedRcf === null ? '—' : Math.round(calculatedRcf).toLocaleString()} × g</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">Equivalent relative centrifugal force for the entered radius and RPM.</p>
                        </>
                    ) : (
                        <>
                            <p className="mt-3 text-3xl font-black text-slate-950">{calculatedRpm === null ? '—' : Math.round(calculatedRpm).toLocaleString()} RPM</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">Equivalent rotor speed for the entered radius and RCF.</p>
                        </>
                    )}
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-900">
                    <strong>Important:</strong> Always confirm the radius from the centrifuge or rotor manual. RCF changes when radius changes, even if RPM is unchanged.
                </div>
            </div>

            <button onClick={() => { setRadiusMm('100'); setRpm('3500'); setRcf('1364'); setMode('rcf'); }} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                <RotateCcw className="h-4 w-4" />
                Reset example
            </button>
        </section>
    );
}

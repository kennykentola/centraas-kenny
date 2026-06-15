'use client';

import { useState } from 'react';
import { Calculator, FlaskConical } from 'lucide-react';

export function BeerLambertCalculator() {
    const [epsilon, setEpsilon] = useState('');
    const [pathLength, setPathLength] = useState('');
    const [concentration, setConcentration] = useState('');
    const [absorbance, setAbsorbance] = useState('');
    const [unknownMode, setUnknownMode] = useState<'absorbance' | 'concentration'>('absorbance');

    const epsilonNumber = Number(epsilon);
    const pathLengthNumber = Number(pathLength);
    const concentrationNumber = Number(concentration);
    const absorbanceNumber = Number(absorbance);

    const validInputs = epsilonNumber > 0 && pathLengthNumber > 0;
    const calculatedAbsorbance = validInputs && concentrationNumber > 0 ? epsilonNumber * pathLengthNumber * concentrationNumber : null;
    const calculatedConcentration = validInputs && absorbanceNumber >= 0 ? absorbanceNumber / (epsilonNumber * pathLengthNumber) : null;

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">AAS calculator</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">Beer-Lambert law calculator</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        Formula: <strong>A = εbc</strong>, where A is absorbance, ε is molar absorptivity, b is path length, and c is concentration.
                    </p>
                </div>
                <FlaskConical className="h-10 w-10 text-indigo-600" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">Molar absorptivity ε</span>
                    <input value={epsilon} onChange={(event) => setEpsilon(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" placeholder="e.g. 12000" />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">Path length b (cm)</span>
                    <input value={pathLength} onChange={(event) => setPathLength(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" placeholder="e.g. 1" />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">Concentration c</span>
                    <input value={concentration} onChange={(event) => setConcentration(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" placeholder="e.g. 0.0005" />
                </label>
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">Absorbance A</span>
                    <input value={absorbance} onChange={(event) => setAbsorbance(event.target.value)} type="number" min="0" step="any" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" placeholder="e.g. 0.450" />
                </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                <button onClick={() => setUnknownMode('absorbance')} className={`rounded-xl px-4 py-2 text-sm font-bold ${unknownMode === 'absorbance' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Calculate absorbance</button>
                <button onClick={() => setUnknownMode('concentration')} className={`rounded-xl px-4 py-2 text-sm font-bold ${unknownMode === 'concentration' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Calculate concentration</button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-bold text-slate-950">Result</h3>
                    </div>
                    {unknownMode === 'absorbance' ? (
                        <p className="mt-3 text-3xl font-black text-slate-950">{calculatedAbsorbance === null ? '—' : calculatedAbsorbance.toFixed(4)}</p>
                    ) : (
                        <p className="mt-3 text-3xl font-black text-slate-950">{calculatedConcentration === null ? '—' : calculatedConcentration.toExponential(4)}</p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {unknownMode === 'absorbance' ? 'Use concentration and constants to estimate absorbance.' : 'Use absorbance and constants to estimate unknown concentration.'}
                    </p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
                    <strong>Worked example:</strong> If ε = 12000 L·mol⁻¹·cm⁻¹, b = 1 cm, and c = 0.00005 mol/L, then A = 12000 × 1 × 0.00005 = 0.6000.
                </div>
            </div>
        </section>
    );
}

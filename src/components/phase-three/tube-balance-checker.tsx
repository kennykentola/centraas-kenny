'use client';

import { useMemo, useState } from 'react';
import { Beaker, CheckCircle2, XCircle } from 'lucide-react';

const ROTOR_POSITIONS = [2, 3, 4, 6, 8, 12];

function isBalanced(positions: number[], rotorSize: number): boolean {
    const uniquePositions = Array.from(new Set(positions));
    if (uniquePositions.length === 0) return false;
    if (uniquePositions.some((position) => position < 1 || position > rotorSize)) return false;

    const vectorSum = uniquePositions.reduce(
        (result, position) => {
            const angle = ((position - 1) * 2 * Math.PI) / rotorSize;
            return {
                x: result.x + Math.cos(angle),
                y: result.y + Math.sin(angle),
            };
        },
        { x: 0, y: 0 },
    );

    return Math.abs(vectorSum.x) < 0.0001 && Math.abs(vectorSum.y) < 0.0001;
}

function nextBalancedOptions(positions: number[], rotorSize: number): number[] {
    const occupied = new Set(positions);
    const options: number[] = [];

    for (let position = 1; position <= rotorSize; position += 1) {
        if (occupied.has(position)) continue;
        const candidate = [...occupied, position];
        if (isBalanced(candidate, rotorSize)) options.push(position);
    }

    return options.slice(0, 6);
}

export function TubeBalanceChecker() {
    const [rotorSize, setRotorSize] = useState(12);
    const [positions, setPositions] = useState('1, 7');
    const parsedPositions = positions.split(',').map((value) => Number(value.trim())).filter((value) => Number.isFinite(value));
    const balanced = useMemo(() => isBalanced(parsedPositions, rotorSize), [parsedPositions, rotorSize]);
    const options = useMemo(() => nextBalancedOptions(parsedPositions, rotorSize), [parsedPositions, rotorSize]);

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Centrifuge tool</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">Tube balance checker</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        Enter tube positions by rotor slot number. The checker estimates whether the loaded tubes are symmetrically balanced.
                    </p>
                </div>
                <Beaker className="h-10 w-10 text-emerald-600" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
                <label className="block">
                    <span className="text-sm font-semibold text-slate-700">Rotor positions</span>
                    <select value={rotorSize} onChange={(event) => setRotorSize(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100">
                        {ROTOR_POSITIONS.map((size) => (
                            <option key={size} value={size}>{size}-position rotor</option>
                        ))}
                    </select>
                </label>
                <label className="block md:col-span-2">
                    <span className="text-sm font-semibold text-slate-700">Loaded tube positions</span>
                    <input value={positions} onChange={(event) => setPositions(event.target.value)} type="text" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" placeholder="e.g. 1, 7 or 1, 5, 9" />
                </label>
            </div>

            <div className={`mt-6 flex items-center gap-3 rounded-2xl p-5 ${balanced ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                {balanced ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
                <div>
                    <p className="text-xl font-black">{balanced ? 'Balanced configuration' : 'Not balanced'}</p>
                    <p className="mt-1 text-sm leading-relaxed">{balanced ? 'The entered positions are symmetrically arranged.' : 'Add tubes opposite the loaded positions or use the suggested balanced options below.'}</p>
                </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">Visual rotor preview</h3>
                    <div className="mt-4 grid grid-cols-6 gap-2">
                        {Array.from({ length: rotorSize }, (_, index) => {
                            const position = index + 1;
                            const loaded = parsedPositions.includes(position);
                            return (
                                <div key={position} className={`flex aspect-square items-center justify-center rounded-2xl border text-sm font-black ${loaded ? 'border-emerald-300 bg-emerald-100 text-emerald-800' : 'border-slate-200 bg-white text-slate-400'}`}>
                                    {position}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-950">Suggested next balanced positions</h3>
                    {options.length > 0 ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {options.map((option) => (
                                <span key={option} className="rounded-xl bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-800">Add tube {option}</span>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">No single-tube addition makes this exact configuration balanced. Try adding a pair of opposite tubes.</p>
                    )}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Always load tubes with matched volume and mass, and follow your centrifuge manufacturer’s balancing instructions.
                    </p>
                </div>
            </div>
        </section>
    );
}

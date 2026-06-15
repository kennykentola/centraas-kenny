'use client';

import { useMemo, useState } from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

type Point = {
    concentration: number;
    absorbance: number;
};

type Regression = {
    slope: number;
    intercept: number;
    rSquared: number;
    predictions: Point[];
    residuals: Point[];
};

function linearRegression(points: Point[]): Regression {
    const n = points.length;
    const meanX = points.reduce((sum, point) => sum + point.concentration, 0) / n;
    const meanY = points.reduce((sum, point) => sum + point.absorbance, 0) / n;

    const numerator = points.reduce((sum, point) => sum + (point.concentration - meanX) * (point.absorbance - meanY), 0);
    const denominator = points.reduce((sum, point) => sum + (point.concentration - meanX) ** 2, 0);
    const slope = denominator === 0 ? 0 : numerator / denominator;
    const intercept = meanY - slope * meanX;

    const totalSumSquares = points.reduce((sum, point) => sum + (point.absorbance - meanY) ** 2, 0);
    const residualSumSquares = points.reduce((sum, point) => {
        const predicted = slope * point.concentration + intercept;
        return sum + (point.absorbance - predicted) ** 2;
    }, 0);

    const rSquared = totalSumSquares === 0 ? 1 : 1 - residualSumSquares / totalSumSquares;

    return {
        slope,
        intercept,
        rSquared,
        predictions: points.map((point) => ({
            concentration: point.concentration,
            absorbance: slope * point.concentration + intercept,
        })),
        residuals: points.map((point) => ({
            concentration: point.concentration,
            absorbance: point.absorbance - (slope * point.concentration + intercept),
        })),
    };
}

export function CalibrationCurveGenerator() {
    const [rows, setRows] = useState<Point[]>([
        { concentration: 0, absorbance: 0.02 },
        { concentration: 1, absorbance: 0.18 },
        { concentration: 2, absorbance: 0.34 },
        { concentration: 3, absorbance: 0.51 },
        { concentration: 4, absorbance: 0.67 },
    ]);
    const [unknownAbsorbance, setUnknownAbsorbance] = useState('0.40');

    const regression = useMemo(() => linearRegression(rows), [rows]);
    const unknownConcentration = regression.slope === 0 ? null : (Number(unknownAbsorbance) - regression.intercept) / regression.slope;

    const updateRow = (index: number, field: keyof Point, value: string) => {
        const numericValue = Number(value);
        if (Number.isNaN(numericValue)) return;
        setRows((currentRows) => currentRows.map((row, rowIndex) => (rowIndex === index ? { ...row, [field]: numericValue } : row)));
    };

    const addRow = () => setRows((currentRows) => [...currentRows, { concentration: currentRows.length, absorbance: 0 }]);
    const removeRow = (index: number) => setRows((currentRows) => currentRows.filter((_, rowIndex) => rowIndex !== index));

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">AAS calculator</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">Calibration curve generator</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        Enter standard concentrations and measured absorbance values to estimate the calibration equation, R², residuals, and unknown concentration.
                    </p>
                </div>
                <LineChart className="h-10 w-10 text-indigo-600" />
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                    <div className="col-span-1">#</div>
                    <div className="col-span-5">Concentration</div>
                    <div className="col-span-5">Absorbance</div>
                    <div className="col-span-1"></div>
                </div>
                {rows.map((row, index) => (
                    <div key={index} className="grid grid-cols-12 items-center gap-2 border-t border-slate-100 px-4 py-3">
                        <div className="col-span-1 text-sm font-semibold text-slate-500">{index + 1}</div>
                        <input aria-label={`Standard ${index + 1} concentration`} value={row.concentration} onChange={(event) => updateRow(index, 'concentration', event.target.value)} type="number" min="0" step="any" className="col-span-5 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" />
                        <input aria-label={`Standard ${index + 1} absorbance`} value={row.absorbance} onChange={(event) => updateRow(index, 'absorbance', event.target.value)} type="number" min="0" step="any" className="col-span-5 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" />
                        <button disabled={rows.length <= 2} onClick={() => removeRow(index)} className="col-span-1 rounded-xl bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={addRow} className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">Add standard</button>
                <button onClick={() => setRows([{ concentration: 0, absorbance: 0.02 }, { concentration: 1, absorbance: 0.18 }, { concentration: 2, absorbance: 0.34 }, { concentration: 3, absorbance: 0.51 }, { concentration: 4, absorbance: 0.67 }])} className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">Reset example</button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-bold text-slate-950">Equation</h3>
                    </div>
                    <p className="mt-3 text-2xl font-black text-slate-950">A = {regression.slope.toFixed(4)}c + {regression.intercept.toFixed(4)}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">The slope represents sensitivity; the intercept shows blank/background response.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-bold text-slate-950">R²</h3>
                    </div>
                    <p className="mt-3 text-3xl font-black text-slate-950">{regression.rSquared.toFixed(4)}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Closer to 1.0000 means a stronger linear calibration fit.</p>
                </div>
                <label className="block rounded-2xl bg-slate-50 p-5">
                    <span className="text-sm font-semibold text-slate-700">Unknown sample absorbance</span>
                    <input value={unknownAbsorbance} onChange={(event) => setUnknownAbsorbance(event.target.value)} type="number" min="0" step="any" className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" />
                    <p className="mt-3 text-3xl font-black text-slate-950">{Number.isFinite(unknownConcentration) ? unknownConcentration!.toFixed(4) : '—'}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Estimated concentration from the calibration line.</p>
                </label>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-950">Predicted absorbance</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {regression.predictions.map((prediction, index) => (
                            <li key={`prediction-${index}`} className="flex items-center justify-between">
                                <span>Standard {index + 1}</span>
                                <strong>{prediction.absorbance.toFixed(4)}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-950">Residuals</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {regression.residuals.map((residual, index) => (
                            <li key={`residual-${index}`} className="flex items-center justify-between">
                                <span>Standard {index + 1}</span>
                                <strong>{residual.absorbance >= 0 ? '+' : ''}{residual.absorbance.toFixed(4)}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

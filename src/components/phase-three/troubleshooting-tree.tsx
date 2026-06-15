'use client';

import { useState } from 'react';
import { AlertTriangle, CheckCircle2, ChevronRight, Stethoscope } from 'lucide-react';

type DecisionNode = {
    id: string;
    question: string;
    answer: string;
    options: {
        label: string;
        nextId: string;
    }[];
};

const troubleshootingTrees: Record<string, DecisionNode[]> = {
    aasAbsorbance: [
        {
            id: 'start',
            question: 'Is the absorbance signal unstable or drifting?',
            answer: 'Check flame, lamp, sample delivery, and gas flow first.',
            options: [
                { label: 'Yes', nextId: 'flame' },
                { label: 'No', nextId: 'calibration' },
            ],
        },
        {
            id: 'flame',
            question: 'Is the flame steady and correctly colored?',
            answer: 'An unstable flame often causes noisy absorbance.',
            options: [
                { label: 'No', nextId: 'gasFlow' },
                { label: 'Yes', nextId: 'sampleDelivery' },
            ],
        },
        {
            id: 'gasFlow',
            question: 'Are fuel and oxidant pressures within the method range?',
            answer: 'Adjust gas pressure carefully according to the instrument manual.',
            options: [
                { label: 'No', nextId: 'safety' },
                { label: 'Yes', nextId: 'lampWarmup' },
            ],
        },
        {
            id: 'sampleDelivery',
            question: 'Is the nebulizer and spray chamber clean?',
            answer: 'Clogged nebulizers and contaminated spray chambers reduce signal stability.',
            options: [
                { label: 'No', nextId: 'cleanNebulizer' },
                { label: 'Yes', nextId: 'lampWarmup' },
            ],
        },
        {
            id: 'lampWarmup',
            question: 'Has the hollow cathode lamp warmed up long enough?',
            answer: 'Allow the lamp to stabilize before quantitative measurements.',
            options: [
                { label: 'No', nextId: 'warmup' },
                { label: 'Yes', nextId: 'matrix' },
            ],
        },
        {
            id: 'matrix',
            question: 'Could sample matrix or viscosity be affecting aspiration?',
            answer: 'Use matrix-matched standards, dilution, or appropriate sample preparation.',
            options: [
                { label: 'Yes', nextId: 'matrixMatch' },
                { label: 'No', nextId: 'instrumentCheck' },
            ],
        },
        {
            id: 'cleanNebulizer',
            question: 'Action',
            answer: 'Clean or replace the nebulizer, rinse the spray chamber, and run blank solution before retesting.',
            options: [],
        },
        {
            id: 'safety',
            question: 'Action',
            answer: 'Stop the run if gas flow is abnormal. Check hoses, regulators, flame arrestor, and ventilation before restarting.',
            options: [],
        },
        {
            id: 'warmup',
            question: 'Action',
            answer: 'Warm up the lamp according to the manufacturer’s recommended time and re-zero the baseline.',
            options: [],
        },
        {
            id: 'matrixMatch',
            question: 'Action',
            answer: 'Prepare standards in a similar acid and matrix background as the samples.',
            options: [],
        },
        {
            id: 'instrumentCheck',
            question: 'Action',
            answer: 'Run a certified reference material or standard check. If recovery is poor, inspect lamp alignment and detector settings.',
            options: [],
        },
        {
            id: 'calibration',
            question: 'Is the calibration curve poor or nonlinear?',
            answer: 'Inspect standards, blank correction, wavelength, and concentration range.',
            options: [
                { label: 'Yes', nextId: 'standards' },
                { label: 'No', nextId: 'blank' },
            ],
        },
        {
            id: 'standards',
            question: 'Were standards prepared fresh and within the linear range?',
            answer: 'Prepare new standards and avoid using values outside the validated calibration range.',
            options: [
                { label: 'No', nextId: 'prepareStandards' },
                { label: 'Yes', nextId: 'wavelength' },
            ],
        },
        {
            id: 'wavelength',
            question: 'Is the correct analytical wavelength selected?',
            answer: 'Use the recommended wavelength for the target element and check for spectral interferences.',
            options: [
                { label: 'No', nextId: 'setWavelength' },
                { label: 'Yes', nextId: 'interference' },
            ],
        },
        {
            id: 'interference',
            question: 'Could chemical or spectral interference be present?',
            answer: 'Use background correction, releasing agents, matrix modifiers, or alternate lines where appropriate.',
            options: [
                { label: 'Yes', nextId: 'interferenceAction' },
                { label: 'No', nextId: 'instrumentCheck' },
            ],
        },
        {
            id: 'blank',
            question: 'Is the reagent blank clean?',
            answer: 'Check acid, water, glassware, and contamination sources.',
            options: [
                { label: 'No', nextId: 'blankAction' },
                { label: 'Yes', nextId: 'instrumentCheck' },
            ],
        },
        {
            id: 'prepareStandards',
            question: 'Action',
            answer: 'Prepare fresh calibration standards from certified stock solutions and verify serial dilution calculations.',
            options: [],
        },
        {
            id: 'setWavelength',
            question: 'Action',
            answer: 'Select the correct analytical line and optimize burner/lamp alignment before recalibration.',
            options: [],
        },
        {
            id: 'interferenceAction',
            question: 'Action',
            answer: 'Apply background correction and use matrix-matched standards or alternate analytical conditions.',
            options: [],
        },
        {
            id: 'blankAction',
            question: 'Action',
            answer: 'Replace contaminated reagents, clean glassware, and rerun the blank before measuring samples.',
            options: [],
        },
    ],
    centrifugeVibration: [
        {
            id: 'start',
            question: 'Is the centrifuge vibrating, making noise, or stopping unexpectedly?',
            answer: 'Stop the run and check load balance, rotor seating, and visible damage before restarting.',
            options: [
                { label: 'Yes', nextId: 'running' },
                { label: 'No', nextId: 'separation' },
            ],
        },
        {
            id: 'running',
            question: 'Did the problem start during a run?',
            answer: 'Do not open the lid until the rotor has fully stopped.',
            options: [
                { label: 'Yes', nextId: 'stopRun' },
                { label: 'No', nextId: 'rotorSeating' },
            ],
        },
        {
            id: 'stopRun',
            question: 'Action',
            answer: 'Stop the run using the instrument controls. Inspect tubes for breakage only after the rotor is completely stopped.',
            options: [],
        },
        {
            id: 'rotorSeating',
            question: 'Is the rotor seated correctly and locked?',
            answer: 'An improperly seated rotor can cause vibration and unsafe operation.',
            options: [
                { label: 'No', nextId: 'seatRotor' },
                { label: 'Yes', nextId: 'loadBalance' },
            ],
        },
        {
            id: 'loadBalance',
            question: 'Are tubes balanced by position and mass?',
            answer: 'Opposite tubes should have matched volume and mass. Check adapters and caps too.',
            options: [
                { label: 'No', nextId: 'balanceTubes' },
                { label: 'Yes', nextId: 'tubeDamage' },
            ],
        },
        {
            id: 'tubeDamage',
            question: 'Are any tubes cracked, leaking, or broken?',
            answer: 'Broken tubes can damage the rotor and create biohazard or chemical exposure.',
            options: [
                { label: 'Yes', nextId: 'spillAction' },
                { label: 'No', nextId: 'speedLimit' },
            ],
        },
        {
            id: 'speedLimit',
            question: 'Is the selected speed below the rotor and tube limits?',
            answer: 'Never exceed the maximum RCF/RPM rating for the rotor, tube, and sample density.',
            options: [
                { label: 'No', nextId: 'reduceSpeed' },
                { label: 'Yes', nextId: 'service' },
            ],
        },
        {
            id: 'seatRotor',
            question: 'Action',
            answer: 'Power down, reseat the rotor according to the manual, and confirm the locking mechanism is engaged.',
            options: [],
        },
        {
            id: 'balanceTubes',
            question: 'Action',
            answer: 'Balance tubes symmetrically with matched mass. Use water-filled balance tubes if samples differ in mass.',
            options: [],
        },
        {
            id: 'spillAction',
            question: 'Action',
            answer: 'Follow spill response procedures. Wear PPE, decontaminate if biological, and inspect rotor buckets and seals.',
            options: [],
        },
        {
            id: 'reduceSpeed',
            question: 'Action',
            answer: 'Reduce speed/RCF to the approved limit and verify tube compatibility with the sample density.',
            options: [],
        },
        {
            id: 'service',
            question: 'Action',
            answer: 'Do not continue. Contact the supervisor or service engineer to inspect bearings, rotor, lid lock, and drive system.',
            options: [],
        },
        {
            id: 'separation',
            question: 'Is separation incomplete or inconsistent?',
            answer: 'Check protocol, tube type, sample volume, and temperature requirements.',
            options: [
                { label: 'Yes', nextId: 'protocol' },
                { label: 'No', nextId: 'safeOperation' },
            ],
        },
        {
            id: 'protocol',
            question: 'Was the correct RCF and time used?',
            answer: 'Centrifugation protocols should specify RCF, time, temperature, and tube type.',
            options: [
                { label: 'No', nextId: 'setProtocol' },
                { label: 'Yes', nextId: 'temperature' },
            ],
        },
        {
            id: 'temperature',
            question: 'Is refrigeration or temperature control required?',
            answer: 'Temperature-sensitive samples may need pre-cooling and a refrigerated run.',
            options: [
                { label: 'Yes', nextId: 'coolRun' },
                { label: 'No', nextId: 'sampleVolume' },
            ],
        },
        {
            id: 'sampleVolume',
            question: 'Are tubes overfilled or underfilled?',
            answer: 'Tube fill level can affect separation and safety.',
            options: [
                { label: 'Yes', nextId: 'fillTubes' },
                { label: 'No', nextId: 'repeatProtocol' },
            ],
        },
        {
            id: 'setProtocol',
            question: 'Action',
            answer: 'Recalculate RPM from the required RCF using the rotor radius and rerun with the correct time.',
            options: [],
        },
        {
            id: 'coolRun',
            question: 'Action',
            answer: 'Pre-cool the rotor and chamber, then run at the specified temperature.',
            options: [],
        },
        {
            id: 'fillTubes',
            question: 'Action',
            answer: 'Adjust sample volume to the tube manufacturer’s recommended fill range.',
            options: [],
        },
        {
            id: 'repeatProtocol',
            question: 'Action',
            answer: 'Repeat with a validated protocol and check whether sample properties require different conditions.',
            options: [],
        },
        {
            id: 'safeOperation',
            question: 'Safe operation checklist',
            answer: 'Close lid, use compatible tubes, balance loads, do not exceed rotor limits, and stop immediately if abnormal vibration occurs.',
            options: [],
        },
    ],
};

export function TroubleshootingTree() {
    const [module, setModule] = useState<'aasAbsorbance' | 'centrifugeVibration'>('aasAbsorbance');
    const [nodeId, setNodeId] = useState('start');
    const currentTree = troubleshootingTrees[module];
    const currentNode = currentTree.find((node) => node.id === nodeId) ?? currentTree[0];

    const reset = () => setNodeId('start');

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Troubleshooting</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">Decision trees</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        Follow the guided questions to identify likely causes and safe corrective actions.
                    </p>
                </div>
                <Stethoscope className="h-10 w-10 text-indigo-600" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                <button onClick={() => { setModule('aasAbsorbance'); reset(); }} className={`rounded-xl px-4 py-2 text-sm font-bold ${module === 'aasAbsorbance' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>AAS absorbance/calibration</button>
                <button onClick={() => { setModule('centrifugeVibration'); reset(); }} className={`rounded-xl px-4 py-2 text-sm font-bold ${module === 'centrifugeVibration' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Centrifuge vibration/separation</button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-5 lg:col-span-2">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Current question</p>
                            <h3 className="mt-2 text-xl font-black text-slate-950">{currentNode.question}</h3>
                        </div>
                        <AlertTriangle className="h-7 w-7 text-amber-500" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{currentNode.answer}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {currentNode.options.length > 0 ? currentNode.options.map((option) => (
                            <button key={option.nextId} onClick={() => setNodeId(option.nextId)} className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
                                {option.label}
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        )) : (
                            <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white">
                                <CheckCircle2 className="h-4 w-4" />
                                Start over
                            </button>
                        )}
                    </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">Safety reminder</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        These decision trees are learning aids, not replacements for instrument manuals, standard operating procedures, or supervisor approval. Stop the instrument and seek qualified help for abnormal vibration, gas leaks, smoke, broken tubes, or unsafe conditions.
                    </p>
                </div>
            </div>
        </section>
    );
}

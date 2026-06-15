import { Metadata } from 'next';
import Link from 'next/link';
import { ProgressCard } from '@/components/phase-two/progress-card';
import { Award, BookOpen, Calculator, ClipboardCheck, GraduationCap, Stethoscope, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Learning Dashboard | Centraas',
    description: 'Track AAS and centrifuge learning progress, worksheets, certificates, review summaries, and instructor overview.',
};

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 p-6 text-white shadow-sm">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Phase 2 learning system</p>
                        <h1 className="mt-2 text-3xl font-black">Learning dashboard</h1>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-indigo-50">
                            Track guided learning paths, progress, worksheets, certificates, review summaries, and instructor overview from one place.
                        </p>
                    </div>
                    <Link href="/instructor" className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50">
                        <Users className="mr-2 h-4 w-4" />
                        Instructor dashboard
                    </Link>
                </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
                <ProgressCard module="aas" />
                <ProgressCard module="centrifuge" />
            </div>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Link href="/aas/learning-path" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50/40">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">AAS learning path</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Guided AAS lessons from principles to assessment.</p>
                </Link>
                <Link href="/centrifuge/learning-path" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:bg-cyan-50/40">
                    <BookOpen className="h-8 w-8 text-cyan-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">Centrifuge learning path</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Guided centrifuge lessons from safety to protocols.</p>
                </Link>
                <Link href="/worksheets" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50/40">
                    <ClipboardCheck className="h-8 w-8 text-emerald-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">Worksheets</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Download and complete pre-lab and reflection worksheets.</p>
                </Link>
                <Link href="/certificates" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-200 hover:bg-amber-50/40">
                    <Award className="h-8 w-8 text-amber-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">Certificates</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Generate completion certificates after passing requirements.</p>
                </Link>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                <Link href="/aas/calculators" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50/40">
                    <Calculator className="h-8 w-8 text-indigo-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">AAS calculators</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Beer-Lambert law, calibration curve, R², residuals, and unknown concentration.</p>
                </Link>
                <Link href="/centrifuge/calculators" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50/40">
                    <Calculator className="h-8 w-8 text-emerald-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">Centrifuge calculators</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">RCF/RPM conversion, rotor radius, and tube balance checker.</p>
                </Link>
                <Link href="/troubleshooting" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-200 hover:bg-amber-50/40">
                    <Stethoscope className="h-8 w-8 text-amber-600" />
                    <h2 className="mt-4 text-lg font-bold text-slate-950">Troubleshooting trees</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Guided checks for AAS calibration/signal and centrifuge vibration/separation issues.</p>
                </Link>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Certificate readiness</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">Graduation pathway</h2>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                            Complete both module paths, pass both quizzes, complete worksheets, and use certificates as educational evidence only.
                        </p>
                    </div>
                    <GraduationCap className="h-10 w-10 text-indigo-600" />
                </div>
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                    Certificates are educational records. They do not replace institutional competency assessment, SOP approval, manufacturer training, or supervision by qualified laboratory personnel.
                </div>
            </section>
        </div>
    );
}

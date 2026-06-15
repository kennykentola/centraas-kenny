'use client';

import { useMemo, useState } from 'react';
import { Users, Award, ClipboardCheck, AlertTriangle } from 'lucide-react';
import { learningPaths } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';

interface DemoStudent {
    id: string;
    name: string;
    aasScore: number;
    centrifugeScore: number;
    aasProgress: number;
    centrifugeProgress: number;
    safetyChecklistComplete: boolean;
}

const demoStudents: DemoStudent[] = [
    { id: 'STU-001', name: 'Amina Yusuf', aasScore: 86, centrifugeScore: 78, aasProgress: 80, centrifugeProgress: 60, safetyChecklistComplete: true },
    { id: 'STU-002', name: 'Chinedu Okafor', aasScore: 72, centrifugeScore: 90, aasProgress: 60, centrifugeProgress: 100, safetyChecklistComplete: true },
    { id: 'STU-003', name: 'Grace Mensah', aasScore: 94, centrifugeScore: 88, aasProgress: 100, centrifugeProgress: 80, safetyChecklistComplete: false },
    { id: 'STU-004', name: 'Tariq Ibrahim', aasScore: 64, centrifugeScore: 70, aasProgress: 40, centrifugeProgress: 40, safetyChecklistComplete: false },
];

export function InstructorDashboard() {
    const { summary: aasSummary } = useLearningProgress('aas');
    const { summary: centrifugeSummary } = useLearningProgress('centrifuge');

    const [studentFilter, setStudentFilter] = useState<'all' | 'certificate-ready' | 'needs-support'>('all');

    const filteredStudents = useMemo(() => {
        if (studentFilter === 'certificate-ready') {
            return demoStudents.filter((student) => student.aasProgress >= 100 && student.centrifugeProgress >= 100 && student.aasScore >= 80 && student.centrifugeScore >= 80 && student.safetyChecklistComplete);
        }
        if (studentFilter === 'needs-support') {
            return demoStudents.filter((student) => student.aasScore < 80 || student.centrifugeScore < 80 || !student.safetyChecklistComplete);
        }
        return demoStudents;
    }, [studentFilter]);

    const averageAas = Math.round(demoStudents.reduce((sum, student) => sum + student.aasScore, 0) / demoStudents.length);
    const averageCentrifuge = Math.round(demoStudents.reduce((sum, student) => sum + student.centrifugeScore, 0) / demoStudents.length);
    const certificateReadyCount = demoStudents.filter((student) => student.aasProgress >= 100 && student.centrifugeProgress >= 100 && student.aasScore >= 80 && student.centrifugeScore >= 80 && student.safetyChecklistComplete).length;

    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Instructor dashboard</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">Class learning overview</h2>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                            Phase 2 includes a local demo dashboard. In Phase 4 this can be connected to student accounts, roles, and persistent records.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                        Local demo data: <span className="font-bold text-slate-950">{demoStudents.length} students</span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Users className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">Students</span>
                        </div>
                        <p className="mt-2 text-2xl font-bold text-slate-950">{demoStudents.length}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Award className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">AAS avg.</span>
                        </div>
                        <p className="mt-2 text-2xl font-bold text-slate-950">{averageAas}%</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Award className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">Centrifuge avg.</span>
                        </div>
                        <p className="mt-2 text-2xl font-bold text-slate-950">{averageCentrifuge}%</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="flex items-center gap-2 text-slate-500">
                            <ClipboardCheck className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">Ready</span>
                        </div>
                        <p className="mt-2 text-2xl font-bold text-slate-950">{certificateReadyCount}</p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-bold text-slate-950">Student performance</h3>
                        <label className="flex items-center gap-2 text-sm">
                            <span className="sr-only">Filter students</span>
                            <select
                                aria-label="Filter students"
                                value={studentFilter}
                                onChange={(event) => setStudentFilter(event.target.value as typeof studentFilter)}
                                className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                            >
                                <option value="all">All students</option>
                                <option value="certificate-ready">Certificate-ready</option>
                                <option value="needs-support">Needs support</option>
                            </select>
                        </label>
                    </div>

                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full min-w-[760px] text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                                    <th className="pb-3">Student</th>
                                    <th className="pb-3">AAS score</th>
                                    <th className="pb-3">Centrifuge score</th>
                                    <th className="pb-3">AAS progress</th>
                                    <th className="pb-3">Centrifuge progress</th>
                                    <th className="pb-3">Safety checklist</th>
                                    <th className="pb-3">Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student) => (
                                    <tr key={student.id} className="border-b border-slate-100 last:border-b-0">
                                        <td className="py-4 font-semibold text-slate-950">
                                            {student.name}
                                            <p className="text-xs font-normal text-slate-500">{student.id}</p>
                                        </td>
                                        <td className="py-4">{student.aasScore}%</td>
                                        <td className="py-4">{student.centrifugeScore}%</td>
                                        <td className="py-4">
                                            <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                                                <div className="h-full rounded-full bg-indigo-600" style={{ width: `${student.aasProgress}%` }} />
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                                                <div className="h-full rounded-full bg-cyan-600" style={{ width: `${student.centrifugeProgress}%` }} />
                                            </div>
                                        </td>
                                        <td className="py-4">{student.safetyChecklistComplete ? 'Complete' : 'Incomplete'}</td>
                                        <td className="py-4 text-slate-600">
                                            {student.safetyChecklistComplete && student.aasScore >= 80 && student.centrifugeScore >= 80 ? 'Ready for certificate review' : 'Assign revision lesson'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside className="space-y-4">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-950">Your local progress</h3>
                        <div className="mt-4 space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">AAS completion</span>
                                <span className="font-bold text-slate-950">{aasSummary.completionPercentage}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">Centrifuge completion</span>
                                <span className="font-bold text-slate-950">{centrifugeSummary.completionPercentage}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">Latest AAS quiz</span>
                                <span className="font-bold text-slate-950">{aasSummary.latestQuizAttempt ? `${aasSummary.latestQuizAttempt.percentage}%` : '—'}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">Latest centrifuge quiz</span>
                                <span className="font-bold text-slate-950">{centrifugeSummary.latestQuizAttempt ? `${centrifugeSummary.latestQuizAttempt.percentage}%` : '—'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />
                            <div>
                                <h3 className="font-bold text-amber-950">Safety note</h3>
                                <p className="mt-2 text-sm leading-relaxed text-amber-900">Instructor data is currently demo data stored in code. Production instructor accounts require Phase 4 authentication, roles, and a database.</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
}

'use client';

import { useEffect, useState } from 'react';
import { Download, Award, ShieldCheck } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';
import { getLearningPath, getMachineLabel } from '@/data/learning-paths';
import { useLearningProgress } from '@/hooks/use-learning-progress';
import { createClient } from '@/lib/supabase/client';

interface CertificateGeneratorProps {
    module: MachineModule;
}

function createCertificateId(module: MachineModule) {
    const date = new Date();
    const stamp = date.toISOString().slice(0, 10).replaceAll('-', '');
    const random = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `CENTRAAS-${getMachineLabel(module).toUpperCase()}-${stamp}-${random}`;
}

export function CertificateGenerator({ module }: CertificateGeneratorProps) {
    const path = getLearningPath(module);
    const { summary } = useLearningProgress(module);
    const [studentName, setStudentName] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [certificateId, setCertificateId] = useState('');
    const [generatedAt, setGeneratedAt] = useState('');
    const [saving, setSaving] = useState(false);

    // On mount, try to restore a previously generated certificate from Supabase.
    useEffect(() => {
        if (!path) return;
        (async () => {
            const supabase = createClient();
            if (!supabase) return;

            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData.session?.user.id;
            if (!userId) return;

            // Pre-fill student name from profile.
            const { data: profile } = await supabase
                .from('profiles')
                .select('full_name, institution')
                .eq('id', userId)
                .single();
            if (profile) {
                if (profile.full_name && !studentName) setStudentName(profile.full_name);
                if (profile.institution && !institutionName) setInstitutionName(profile.institution ?? '');
            }

            // Restore latest certificate for this module.
            const { data: cert } = await supabase
                .from('certificates')
                .select('certificate_id, issued_at')
                .eq('user_id', userId)
                .eq('module', module)
                .order('issued_at', { ascending: false })
                .limit(1)
                .maybeSingle();

            if (cert) {
                setCertificateId(cert.certificate_id);
                setGeneratedAt(new Date(cert.issued_at).toLocaleString());
            }
        })();
    }, [module, path, studentName, institutionName]);

    if (!path) return null;

    const latestScore = summary.latestQuizAttempt?.percentage ?? 0;
    const hasPassedQuiz = latestScore >= path.passingScore;
    const ready = summary.completedLessons === summary.totalLessons && hasPassedQuiz && studentName.trim().length > 0;

    const handleGenerate = async () => {
        const id = createCertificateId(module);
        const issuedAt = new Date().toLocaleString();
        setCertificateId(id);
        setGeneratedAt(issuedAt);

        // Persist to Supabase if a session exists.
        setSaving(true);
        try {
            const supabase = createClient();
            if (supabase) {
                const { data: sessionData } = await supabase.auth.getSession();
                const userId = sessionData.session?.user.id;
                if (userId) {
                    await supabase.from('certificates').insert({
                        user_id: userId,
                        module,
                        student_name: studentName,
                        score: latestScore,
                        certificate_id: id,
                        issued_at: new Date().toISOString(),
                        metadata: {
                            institution: institutionName || null,
                            path_title: path.title,
                            passing_score: path.passingScore,
                        },
                    });
                }
            }
        } finally {
            setSaving(false);
        }
    };

    const handleDownload = () => {
        if (!certificateId) return;

        const certificateText = [
            'CENTRAAS CERTIFICATE OF COMPLETION',
            '',
            `Certificate ID: ${certificateId}`,
            `Date: ${generatedAt}`,
            `Student: ${studentName}`,
            `Institution: ${institutionName || 'Self-paced learner'}`,
            `Module: ${path.title}`,
            `Final quiz score: ${latestScore}%`,
            `Required passing score: ${path.passingScore}%`,
            '',
            'This certificate confirms completion of the Centraas educational module and assessment.',
            'It does not replace institutional SOP approval, manufacturer training, or supervised practical competency assessment.',
        ].join('\n');

        const blob = new Blob([certificateText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${certificateId}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Certificate readiness</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">{getMachineLabel(module)} completion certificate</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            Generate a certificate after completing all lessons and meeting the quiz passing score.
                        </p>
                    </div>
                    <Award className="h-10 w-10 text-indigo-600" />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{summary.completedLessons}/{summary.totalLessons}</p>
                        <p className="mt-1 text-xs text-slate-500">Lessons completed</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{latestScore}%</p>
                        <p className="mt-1 text-xs text-slate-500">Latest quiz score</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-950">{path.passingScore}%</p>
                        <p className="mt-1 text-xs text-slate-500">Required score</p>
                    </div>
                </div>

                {!ready && (
                    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                        <strong>Certificate not ready yet.</strong> Complete all lessons, pass the quiz with at least {path.passingScore}%, and enter the student name.
                    </div>
                )}

                {ready && certificateId && (
                    <div className="mt-6 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-cyan-50 p-6">
                        <div className="flex items-center justify-center">
                            <Award className="h-12 w-12 text-indigo-600" />
                        </div>
                        <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-indigo-700">Certificate of Completion</p>
                        <h3 className="mt-3 text-center text-3xl font-black text-slate-950">Centraas</h3>
                        <p className="mt-2 text-center text-lg font-bold text-slate-800">{studentName}</p>
                        <p className="mt-3 text-center text-sm leading-relaxed text-slate-700">
                            has completed the <strong>{path.title}</strong> with a quiz score of <strong>{latestScore}%</strong>.
                        </p>
                        <p className="mt-6 text-center text-xs text-slate-500">Certificate ID: {certificateId}</p>
                        <p className="mt-1 text-center text-xs text-slate-500">Generated: {generatedAt}</p>
                    </div>
                )}
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">Certificate details</h3>
                <div className="mt-4 space-y-4">
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Student name</span>
                        <input
                            value={studentName}
                            onChange={(event) => setStudentName(event.target.value)}
                            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                            placeholder="Enter student name"
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-semibold text-slate-700">Institution or instructor</span>
                        <input
                            value={institutionName}
                            onChange={(event) => setInstitutionName(event.target.value)}
                            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                            placeholder="Optional"
                        />
                    </label>
                    <button
                        onClick={handleGenerate}
                        disabled={!ready || Boolean(certificateId) || saving}
                        className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        <Download className="inline-block h-4 w-4 align-[-2px] mr-2" />
                        {saving ? 'Saving…' : certificateId ? 'Certificate generated' : 'Generate certificate'}
                    </button>
                    <button
                        onClick={handleDownload}
                        disabled={!certificateId}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-400"
                    >
                        Download certificate text
                    </button>
                </div>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
                    <ShieldCheck className="mb-2 h-4 w-4 text-emerald-600" />
                    Certificate is educational only and does not replace practical competency approval by qualified laboratory personnel.
                </div>
            </aside>
        </div>
    );
}

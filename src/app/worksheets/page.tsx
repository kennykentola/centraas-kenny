import { Metadata } from 'next';
import Link from 'next/link';
import { Download, ClipboardCheck } from 'lucide-react';
import { learningPaths } from '@/data/learning-paths';

export const metadata: Metadata = {
    title: 'Worksheets | Centraas',
    description: 'Download practical laboratory worksheets for AAS and centrifuge training.',
};

export default function WorksheetsPage() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Downloadable worksheets</p>
                        <h1 className="mt-2 text-3xl font-black text-slate-950">Practical learning worksheets</h1>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                            Use these worksheets for pre-lab preparation, observation notes, post-lab reflection, and safety sign-off.
                        </p>
                    </div>
                    <ClipboardCheck className="h-10 w-10 text-indigo-600" />
                </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
                {learningPaths.map((path) => (
                    <section key={path.module} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-slate-950">{path.title}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{path.description}</p>
                            </div>
                            <Download className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className="mt-5 space-y-3">
                            {path.lessons.map((lesson) => (
                                <Link
                                    key={lesson.id}
                                    href={`/${path.module}/worksheet?lesson=${lesson.id}`}
                                    className="block rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                                >
                                    <h3 className="font-bold text-slate-950">{lesson.worksheetTitle}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{lesson.title}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

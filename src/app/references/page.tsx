import Link from 'next/link';
import { BookOpen, ChevronRight, FlaskConical, RotateCcw, ShieldCheck } from 'lucide-react';

const references = [
    {
        category: 'AAS and analytical chemistry',
        items: [
            { label: 'Skoog, Holler, Crouch - Principles of Instrumental Analysis', href: 'https://www.cengage.com/' },
            { label: 'Harris - Quantitative Chemical Analysis', href: 'https://www.macmillanlearning.com/' },
            { label: 'US EPA - Atomic Absorption resources', href: 'https://www.epa.gov/' },
        ],
    },
    {
        category: 'Centrifugation and laboratory practice',
        items: [
            { label: 'CDC - Biosafety in Microbiological and Biomedical Laboratories', href: 'https://www.cdc.gov/labs/BMBL.html' },
            { label: 'WHO - Laboratory biosafety guidance', href: 'https://www.who.int/' },
            { label: 'OSHA - Laboratory safety guidance', href: 'https://www.osha.gov/laboratory' },
        ],
    },
    {
        category: 'Safety and quality',
        items: [
            { label: 'NIH - Chemical hygiene and safety resources', href: 'https://www.nih.gov/' },
            { label: 'ISO laboratory quality management principles', href: 'https://www.iso.org/' },
            { label: 'Manufacturer SOPs and equipment manuals', href: 'https://www.google.com/search?q=laboratory+equipment+manufacturer+manual' },
        ],
    },
];

export default function ReferencesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/select-machine" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900">
                        <ChevronRight className="h-4 w-4 rotate-180" />
                        Back to machine selection
                    </Link>
                </div>

                <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-blue-700">
                                <BookOpen className="h-5 w-5" />
                                <p className="text-sm font-bold uppercase tracking-wide">Academic support</p>
                            </div>
                            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                References and standards
                            </h1>
                            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                                These references support the educational content. For real laboratory work, always use the latest approved institutional SOPs and manufacturer manuals.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-5">
                        {references.map((section) => (
                            <section key={section.category} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                <h2 className="text-lg font-bold text-slate-950">{section.category}</h2>
                                <ul className="mt-4 space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronRight className="h-4 w-4 shrink-0" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <Link href="/glossary" className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 hover:bg-blue-50">
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-800"><BookOpen className="h-4 w-4" /> Glossary</span>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                    <Link href="/aas/overview" className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 hover:bg-blue-50">
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-800"><FlaskConical className="h-4 w-4" /> AAS overview</span>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                    <Link href="/centrifuge/overview" className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 hover:bg-purple-50">
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-800"><RotateCcw className="h-4 w-4" /> Centrifuge overview</span>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex gap-2">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                        <p className="text-sm leading-relaxed text-amber-900">
                            References are educational starting points. They do not replace local SOPs, regulatory requirements, or qualified laboratory supervision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

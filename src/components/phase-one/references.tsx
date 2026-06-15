import { BookOpen, ExternalLink } from 'lucide-react';

type ReferenceItem = {
    label: string;
    href: string;
};

type ReferencesProps = {
    items: ReferenceItem[];
};

export default function References({ items }: ReferencesProps) {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center gap-2 text-slate-800">
                <BookOpen className="h-4 w-4 text-blue-700" />
                <h2 className="text-sm font-bold uppercase tracking-wide">References and standards</h2>
            </div>
            <ul className="mt-4 space-y-2">
                {items.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                            <span>{item.label}</span>
                            <ExternalLink className="h-4 w-4 shrink-0" />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

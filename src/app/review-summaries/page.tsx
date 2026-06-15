import { Metadata } from 'next';
import { ReviewSummary } from '@/components/phase-two/review-summary';

export const metadata: Metadata = {
    title: 'Review Summaries | Centraas',
    description: 'Review AAS and centrifuge learning progress, safety topics, and recommended next lessons.',
};

export default function ReviewSummariesPage() {
    return (
        <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Review summaries</p>
                <h1 className="mt-2 text-3xl font-black text-slate-950">Learning review summaries</h1>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                    Use these summaries to see completed lessons, remaining lessons, latest quiz scores, worksheets, and safety topics to revise.
                </p>
            </section>
            <ReviewSummary module="aas" />
            <ReviewSummary module="centrifuge" />
        </div>
    );
}

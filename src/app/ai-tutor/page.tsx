import { Metadata } from 'next';
import { AiTutor } from '@/components/phase-four/ai-tutor';
import { Bot } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Tutor | Centraas',
    description: 'Ask guided questions about AAS, centrifuge machines, calculations, SOPs, safety, and troubleshooting.',
};

export default function AiTutorPage() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-600 p-6 text-white shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-violet-100">AI learning assistant</p>
                        <h1 className="mt-2 text-3xl font-black">Ask questions and get guided answers</h1>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-violet-50">
                            A starter AI tutor interface for students who want explanations, examples, safety reminders, and calculation help.
                        </p>
                    </div>
                    <Bot className="h-10 w-10 text-violet-100" />
                </div>
            </section>

            <AiTutor />
        </div>
    );
}

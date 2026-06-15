'use client';

import { FormEvent, useState } from 'react';
import { Bot, BookOpen, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';

type TutorMessage = {
    id: number;
    role: 'student' | 'assistant';
    text: string;
};

export function AiTutor() {
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<TutorMessage[]>([
        {
            id: 1,
            role: 'assistant',
            text: 'Ask me anything about AAS, centrifuge operation, calculations, SOPs, safety, or troubleshooting. I am connected to the Gemini API when GEMINI_API_KEY is configured.',
        },
    ]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedQuestion = question.trim();
        if (!trimmedQuestion) return;

        const studentMessage: TutorMessage = { id: Date.now(), role: 'student', text: trimmedQuestion };

        setMessages((currentMessages) => [...currentMessages, studentMessage]);
        setLoading(true);

        fetch('/api/ai-tutor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: trimmedQuestion }),
        })
            .then(async (response) => {
                const data = await response.json();
                return data;
            })
            .then((data) => {
                const assistantMessage: TutorMessage = { id: Date.now() + 1, role: 'assistant', text: data.answer ?? 'I could not get an answer. Try again.' };
                setMessages((currentMessages) => [...currentMessages, assistantMessage]);
            })
            .catch(() => {
                const assistantMessage: TutorMessage = { id: Date.now() + 1, role: 'assistant', text: 'Unable to contact the AI tutor. Check the API route and Gemini API key.' };
                setMessages((currentMessages) => [...currentMessages, assistantMessage]);
            })
            .finally(() => {
                setLoading(false);
                setQuestion('');
            });
    };

    const suggestedQuestions = [
        'What is Beer-Lambert law?',
        'How do I convert RPM to RCF?',
        'How do I balance centrifuge tubes?',
        'What causes unstable AAS absorbance?',
    ];

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">AI tutor</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">Ask and answer learning assistant</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                        This component asks your Next.js API route, and the API route calls Gemini on the server.
                    </p>
                </div>
                <Bot className="h-10 w-10 text-violet-600" />
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-violet-600" />
                        <h3 className="font-bold text-slate-950">Student questions</h3>
                    </div>
                    <div className="mt-4 space-y-3">
                        {messages.map((message) => (
                            <div key={message.id} className={`rounded-2xl p-4 text-sm leading-relaxed ${message.role === 'assistant' ? 'bg-white ring-1 ring-slate-200' : 'bg-violet-600 text-white'}`}>
                                <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide opacity-80">
                                    {message.role === 'assistant' ? <Bot className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                                    {message.role === 'assistant' ? 'Assistant' : 'Student'}
                                </div>
                                {message.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="rounded-2xl bg-white p-4 text-sm leading-relaxed text-slate-600 ring-1 ring-slate-200">
                                Gemini is thinking…
                            </div>
                        )}
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-violet-600" />
                        <h3 className="font-bold text-slate-950">Guided help</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <label className="block text-sm font-semibold text-slate-700">Ask a question</label>
                        <textarea value={question} onChange={(event) => setQuestion(event.target.value)} rows={4} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" placeholder="Example: Explain RCF and RPM in simple words" />
                        <button disabled={loading} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60">
                            {loading ? 'Thinking…' : 'Send question'}
                            <Send className="h-4 w-4" />
                        </button>
                    </form>

                    <div className="mt-5">
                        <p className="text-sm font-bold text-slate-700">Suggested questions</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {suggestedQuestions.map((suggestedQuestion) => (
                                <button key={suggestedQuestion} disabled={loading} onClick={() => setQuestion(suggestedQuestion)} className="rounded-xl bg-violet-50 px-3 py-2 text-xs font-bold text-violet-700 disabled:cursor-not-allowed disabled:opacity-60">
                                    {suggestedQuestion}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                            <p>Add <strong>GEMINI_API_KEY</strong> to <strong>.env.local</strong>, not .env. The API route keeps the key server-side.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

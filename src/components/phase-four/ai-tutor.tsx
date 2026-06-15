'use client';

import { FormEvent, useState } from 'react';
import { Bot, BookOpen, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';

type TutorMessage = {
    id: number;
    role: 'student' | 'assistant';
    text: string;
};

type QuestionBank = {
    keyword: string;
    answer: string;
};

const questionBank: QuestionBank[] = [
    {
        keyword: 'beer',
        answer: 'Beer-Lambert law says A = εbc. Absorbance increases when molar absorptivity, path length, or concentration increases. In AAS, it helps you estimate unknown concentration from a calibration relationship.',
    },
    {
        keyword: 'calibration',
        answer: 'A calibration curve uses standards with known concentrations to relate concentration to absorbance. A good curve should be linear, include a blank or low standard, and have a high R² value.',
    },
    {
        keyword: 'rcf',
        answer: 'RCF means relative centrifugal force. It is the effective g-force produced by a centrifuge. Use RCF = 1.118 × 10⁻⁵ × r × RPM², where r is rotor radius in centimeters.',
    },
    {
        keyword: 'rpm',
        answer: 'RPM means revolutions per minute. It describes rotor speed. To convert RCF to RPM, use RPM = √[RCF / (1.118 × 10⁻⁵ × r)].',
    },
    {
        keyword: 'balance',
        answer: 'Centrifuge tubes must be balanced by position and mass. Opposite tubes should have similar volume and mass. If vibration or abnormal noise occurs, stop the run safely and inspect the load.',
    },
    {
        keyword: 'absorbance',
        answer: 'Absorbance is how much light is absorbed by the sample at a selected wavelength. In AAS, unstable absorbance may come from flame instability, lamp warm-up, nebulizer problems, contamination, or calibration errors.',
    },
    {
        keyword: 'sop',
        answer: 'An SOP is a standard operating procedure. It gives approved step-by-step instructions, safety requirements, PPE, equipment checks, waste handling, and emergency actions.',
    },
    {
        keyword: 'safety',
        answer: 'Safety comes first. Use PPE, follow SOPs, check equipment before use, never exceed rotor limits, handle acids and gases carefully, and ask a qualified supervisor when unsure.',
    },
];

function generateAnswer(question: string): string {
    const lowerQuestion = question.toLowerCase();
    const matched = questionBank.find((item) => lowerQuestion.includes(item.keyword));

    if (matched) {
        return matched.answer;
    }

    if (lowerQuestion.includes('how') || lowerQuestion.includes('what') || lowerQuestion.includes('why')) {
        return 'Good question. Start by identifying the machine, the concept, and the safety rule involved. If it is AAS, think about wavelength, standards, absorbance, and calibration. If it is centrifuge, think about rotor radius, RCF, RPM, tube balance, and safe stopping.';
    }

    return 'I can help with AAS, centrifuge, calculations, SOP thinking, safety checks, quizzes, and troubleshooting. Try asking: “What is RCF?”, “How do I balance tubes?”, or “Explain Beer-Lambert law.”';
}

export function AiTutor() {
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState<TutorMessage[]>([
        {
            id: 1,
            role: 'assistant',
            text: 'Ask me anything about AAS, centrifuge operation, calculations, SOPs, safety, or troubleshooting. I will answer like a study assistant.',
        },
    ]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedQuestion = question.trim();
        if (!trimmedQuestion) return;

        const studentMessage: TutorMessage = { id: Date.now(), role: 'student', text: trimmedQuestion };
        const assistantMessage: TutorMessage = { id: Date.now() + 1, role: 'assistant', text: generateAnswer(trimmedQuestion) };

        setMessages((currentMessages) => [...currentMessages, studentMessage, assistantMessage]);
        setQuestion('');
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
                        This starter component lets students ask questions and receive guided answers. You can later connect it to a real AI API.
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
                        <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-violet-700">
                            Send question
                            <Send className="h-4 w-4" />
                        </button>
                    </form>

                    <div className="mt-5">
                        <p className="text-sm font-bold text-slate-700">Suggested questions</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {suggestedQuestions.map((suggestedQuestion) => (
                                <button key={suggestedQuestion} onClick={() => setQuestion(suggestedQuestion)} className="rounded-xl bg-violet-50 px-3 py-2 text-xs font-bold text-violet-700">
                                    {suggestedQuestion}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                            <p>For production, connect this to a secure backend API with authentication, rate limiting, prompt rules, and logging.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

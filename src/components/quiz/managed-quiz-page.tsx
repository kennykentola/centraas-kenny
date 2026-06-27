'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';
import { createClient } from '@/lib/supabase/client';
import { useLearningProgress } from '@/hooks/use-learning-progress';

export type ManagedQuizQuestion = {
    id?: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string | null;
};

type ManagedQuizPageProps = {
    module: MachineModule;
    title: string;
    menuHref: string;
    storageKey: string;
    fallbackQuestions: ManagedQuizQuestion[];
};

type PageState = 'quiz' | 'result' | 'review';

const QUESTIONS_PER_PAGE = 10;
const letterLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function questionKey(question: ManagedQuizQuestion) {
    return question.id ?? question.question;
}

function normalizeDbQuestion(row: any): ManagedQuizQuestion | null {
    const options = Array.isArray(row.options) ? row.options.filter((option: unknown) => typeof option === 'string') : [];
    const correctAnswer = Number(row.correct_answer);

    if (
        typeof row.question !== 'string' ||
        row.question.trim().length === 0 ||
        options.length < 2 ||
        !Number.isInteger(correctAnswer) ||
        correctAnswer < 0 ||
        correctAnswer >= options.length
    ) {
        return null;
    }

    return {
        id: row.id,
        question: row.question,
        options,
        correctAnswer,
        explanation: typeof row.explanation === 'string' ? row.explanation : null,
    };
}

export function ManagedQuizPage({ module, title, menuHref, storageKey, fallbackQuestions }: ManagedQuizPageProps) {
    const [questions, setQuestions] = useState<ManagedQuizQuestion[]>(fallbackQuestions);
    const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleArray(fallbackQuestions));
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [pageState, setPageState] = useState<PageState>('quiz');
    const [expandedReview, setExpandedReview] = useState<number | null>(null);
    const [loadingQuestions, setLoadingQuestions] = useState(true);
    const [attemptSaved, setAttemptSaved] = useState(false);
    const { actions } = useLearningProgress(module);

    useEffect(() => {
        let mounted = true;

        async function loadQuestions() {
            const supabase = createClient();

            if (!supabase) {
                setLoadingQuestions(false);
                return;
            }

            const { data, error } = await supabase
                .from('quiz_questions')
                .select('id, question, options, correct_answer, explanation')
                .eq('module', module)
                .eq('published', true)
                .order('created_at', { ascending: true });

            if (!mounted) return;

            const managedQuestions = error || !data ? [] : data.map(normalizeDbQuestion).filter(Boolean) as ManagedQuizQuestion[];
            const nextQuestions = managedQuestions.length > 0 ? managedQuestions : fallbackQuestions;
            setQuestions(nextQuestions);
            setShuffledQuestions(shuffleArray(nextQuestions));
            setLoadingQuestions(false);
        }

        loadQuestions();

        return () => {
            mounted = false;
        };
    }, [fallbackQuestions, module]);

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (!saved || questions.length === 0) return;

        try {
            const parsed = JSON.parse(saved);
            const savedKeys = Array.isArray(parsed.questionKeys) ? parsed.questionKeys : [];
            const byKey = new Map(questions.map((question) => [questionKey(question), question]));
            const restoredQuestions = savedKeys.map((key: string) => byKey.get(key)).filter(Boolean) as ManagedQuizQuestion[];

            if (restoredQuestions.length === questions.length) {
                setShuffledQuestions(restoredQuestions);
                setAnswers(parsed.answers ?? {});
                setCurrentPage(typeof parsed.currentPage === 'number' ? parsed.currentPage : 0);
                setPageState(parsed.pageState === 'result' ? 'result' : 'quiz');
            }
        } catch {
            localStorage.removeItem(storageKey);
        }
    }, [questions, storageKey]);

    useEffect(() => {
        if (pageState !== 'quiz') return;

        localStorage.setItem(storageKey, JSON.stringify({
            questionKeys: shuffledQuestions.map(questionKey),
            answers,
            currentPage,
            pageState,
        }));
    }, [answers, currentPage, pageState, shuffledQuestions, storageKey]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, pageState]);

    const pageQuestions = useMemo(() => {
        const start = currentPage * QUESTIONS_PER_PAGE;
        return shuffledQuestions.slice(start, start + QUESTIONS_PER_PAGE);
    }, [currentPage, shuffledQuestions]);

    const totalPages = Math.max(1, Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE));

    const totalCorrect = useMemo(() => {
        return Object.entries(answers).reduce((count, [qIndex, answerIndex]) => {
            return shuffledQuestions[Number(qIndex)]?.correctAnswer === answerIndex ? count + 1 : count;
        }, 0);
    }, [answers, shuffledQuestions]);

    const totalAnswered = Object.keys(answers).length;
    const percentage = shuffledQuestions.length > 0 ? Math.round((totalCorrect / shuffledQuestions.length) * 100) : 0;
    const passed = percentage >= 80;

    const handleSubmit = useCallback(() => {
        localStorage.removeItem(storageKey);
        setPageState('result');

        if (!attemptSaved) {
            actions.recordQuizAttempt({
                module,
                score: totalCorrect,
                total: shuffledQuestions.length,
                percentage,
                passed,
            });
            setAttemptSaved(true);
        }
    }, [actions, attemptSaved, module, passed, percentage, shuffledQuestions.length, storageKey, totalCorrect]);

    const handleRetake = () => {
        localStorage.removeItem(storageKey);
        setShuffledQuestions(shuffleArray(questions));
        setAnswers({});
        setCurrentPage(0);
        setPageState('quiz');
        setExpandedReview(null);
        setAttemptSaved(false);
    };

    const resultLabel = passed ? 'Passed' : percentage >= 50 ? 'Review recommended' : 'Needs revision';

    if (loadingQuestions) {
        return (
            <div className="mx-auto max-w-4xl px-4 py-10">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
                    Loading quiz...
                </section>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="mb-5 flex items-center justify-between gap-4">
                <Link href={menuHref} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <ArrowLeft className="h-4 w-4" />
                </Link>
                <div className="text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {shuffledQuestions.length} questions
                </div>
            </div>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Practical questions</p>
                <h1 className="mt-2 text-2xl font-black text-slate-950">{title}</h1>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Complete the assessment, review your answers, and save your result to your learning progress.
                </p>
            </section>

            {pageState === 'quiz' && (
                <section className="mt-5 space-y-4">
                    {pageQuestions.map((question, pageIndex) => {
                        const globalIndex = currentPage * QUESTIONS_PER_PAGE + pageIndex;
                        const selectedOption = answers[globalIndex];

                        return (
                            <article key={`${questionKey(question)}-${globalIndex}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h2 className="text-sm font-bold leading-relaxed text-slate-950">
                                    Q{globalIndex + 1}. {question.question}
                                </h2>
                                <div className="mt-4 space-y-2">
                                    {question.options.map((option, optionIndex) => {
                                        const selected = selectedOption === optionIndex;
                                        return (
                                            <button
                                                key={`${option}-${optionIndex}`}
                                                type="button"
                                                onClick={() => setAnswers((current) => ({ ...current, [globalIndex]: optionIndex }))}
                                                className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left text-sm transition ${selected ? 'border-indigo-500 bg-indigo-50 text-indigo-950' : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/50'}`}
                                            >
                                                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${selected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                                    {letterLabels[optionIndex] ?? optionIndex + 1}
                                                </span>
                                                <span className="leading-relaxed">{option}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}

                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <button
                            type="button"
                            disabled={currentPage === 0}
                            onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
                            className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Previous
                        </button>
                        <span className="text-sm font-semibold text-slate-500">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        {currentPage < totalPages - 1 ? (
                            <button
                                type="button"
                                onClick={() => setCurrentPage((page) => Math.min(totalPages - 1, page + 1))}
                                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </section>
            )}

            {pageState === 'result' && (
                <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Test result</p>
                    <p className="mt-3 text-5xl font-black text-slate-950">{percentage}%</p>
                    <p className="mt-2 text-sm font-bold text-slate-700">{resultLabel}</p>
                    <p className="mt-2 text-sm text-slate-600">
                        {totalCorrect} correct out of {shuffledQuestions.length}. {totalAnswered < shuffledQuestions.length ? `${shuffledQuestions.length - totalAnswered} unanswered.` : 'All questions answered.'}
                    </p>
                    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                        <button type="button" onClick={() => setPageState('review')} className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                            Review answers
                        </button>
                        <button type="button" onClick={handleRetake} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                            Retake test
                        </button>
                        <Link href={menuHref} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                            End test
                        </Link>
                    </div>
                </section>
            )}

            {pageState === 'review' && (
                <section className="mt-5 space-y-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-bold text-slate-950">Score: {percentage}%</p>
                                <p className="text-xs text-slate-500">{totalCorrect} correct, {Math.max(0, totalAnswered - totalCorrect)} wrong</p>
                            </div>
                            <button type="button" onClick={handleRetake} className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white">
                                Retake
                            </button>
                        </div>
                    </div>

                    {shuffledQuestions.map((question, index) => {
                        const userAnswer = answers[index];
                        const answered = userAnswer !== undefined;
                        const correct = answered && userAnswer === question.correctAnswer;
                        const expanded = expandedReview === index;

                        return (
                            <article key={`${questionKey(question)}-review-${index}`} className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${!answered ? 'border-slate-200' : correct ? 'border-emerald-200' : 'border-rose-200'}`}>
                                <button type="button" onClick={() => setExpandedReview(expanded ? null : index)} className="flex w-full items-start gap-3 p-4 text-left">
                                    <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black text-white ${!answered ? 'bg-slate-300' : correct ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                                        {!answered ? '-' : correct ? '✓' : '×'}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm font-bold leading-relaxed text-slate-950">Q{index + 1}. {question.question}</span>
                                        <span className="mt-1 block text-xs text-slate-500">
                                            {answered ? `Your answer: ${letterLabels[userAnswer] ?? userAnswer + 1}` : 'Not answered'} · Correct: {letterLabels[question.correctAnswer] ?? question.correctAnswer + 1}
                                        </span>
                                    </span>
                                    {expanded ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
                                </button>

                                {expanded && (
                                    <div className="border-t border-slate-100 p-4 pt-3">
                                        <div className="space-y-2">
                                            {question.options.map((option, optionIndex) => {
                                                const isCorrectAnswer = optionIndex === question.correctAnswer;
                                                const isUserAnswer = userAnswer === optionIndex;
                                                return (
                                                    <div key={`${option}-review-${optionIndex}`} className={`rounded-xl border px-3 py-2 text-sm ${isCorrectAnswer ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : isUserAnswer ? 'border-rose-300 bg-rose-50 text-rose-800' : 'border-slate-200 text-slate-700'}`}>
                                                        <strong>{letterLabels[optionIndex] ?? optionIndex + 1}.</strong> {option}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {question.explanation && (
                                            <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
                                                {question.explanation}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </section>
            )}
        </div>
    );
}

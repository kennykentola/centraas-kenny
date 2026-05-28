'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { centrifugeQuizQuestions } from '@/data/centrifuge-quiz';

const QUESTIONS_PER_PAGE = 10;
const POINTS_PER_QUESTION = 4;

type PageState = 'quiz' | 'result' | 'review';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CentrifugeQuizPage() {
  const [shuffledQuestions] = useState(() => shuffleArray(centrifugeQuizQuestions));
  const retakeCounter = useRef(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [pageState, setPageState] = useState<PageState>('quiz');
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  const pageQuestions = useMemo(() => {
    const start = currentPage * QUESTIONS_PER_PAGE;
    return shuffledQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [currentPage, shuffledQuestions]);

  const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => {
      const globalIndex = currentPage * QUESTIONS_PER_PAGE + questionIndex;
      return { ...prev, [globalIndex]: optionIndex };
    });
  };

  const getSelectedAnswer = (questionIndex: number) => {
    const globalIndex = currentPage * QUESTIONS_PER_PAGE + questionIndex;
    return answers[globalIndex] ?? null;
  };

  const handleSubmit = () => {
    setPageState('result');
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentPage(0);
    setPageState('quiz');
    setExpandedReview(null);
    retakeCounter.current += 1;
    window.location.href = '/centrifuge/quiz';
  };

  const handleReviewAnswers = () => {
    setPageState('review');
  };

  const totalCorrect = useMemo(() => {
    let count = 0;
    Object.entries(answers).forEach(([qIndex, aIndex]) => {
      if (shuffledQuestions[Number(qIndex)].correctAnswer === aIndex) {
        count++;
      }
    });
    return count;
  }, [answers, shuffledQuestions]);

  const totalScore = totalCorrect * POINTS_PER_QUESTION;
  const percentage = Math.round((totalScore / 100) * 100);
  const totalAnswered = Object.keys(answers).length;

  const getResultConfig = () => {
    if (percentage >= 90) {
      return {
        headline: 'Outstanding Performance!',
        message: "Congratulations! You've done well! Keep up the good work and don't relent.",
        color: '#10B981',
      };
    } else if (percentage >= 50) {
      return {
        headline: 'Good Job!',
        message: "You've demonstrated a good understanding of the material. Keep pushing!",
        color: '#F97316',
      };
    } else {
      return {
        headline: 'Keep Going!',
        message: "Don't be discouraged. This is a great opportunity to learn and improve. Review the questions, strengthen your understanding, and try again. You've got this!",
        color: '#EF4444',
      };
    }
  };

  const resultConfig = getResultConfig();
  const letterLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E8FF] via-[#EDE9FE] to-[#f0e6fa] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-8 right-6 w-28 h-28 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-32 left-4 w-20 h-20 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Sparkles className="absolute top-14 right-14 w-4 h-4 text-purple-400/25 animate-float" />
      <Star className="absolute top-28 left-12 w-2.5 h-2.5 text-yellow-400/30 animate-float-delayed" />
      <Star className="absolute bottom-32 right-20 w-2 h-2 text-purple-300/25 animate-float" />
      <Sparkles className="absolute top-1/2 right-8 w-3 h-3 text-indigo-300/20 animate-float-delayed" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Header */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/centrifuge/menu">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#4169E1] hover:text-[#1E3A8A] hover:shadow-lg transition-all duration-200 hover:-translate-x-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-5 sm:px-8 pt-3 pb-4"
      >
        {pageState === 'quiz' && (
          <>
            <h1 className="text-[#2E3A59] text-xl sm:text-2xl font-bold">Practical Questions</h1>
            <p className="text-[#666666] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              There are {shuffledQuestions.length} practical assessment questions in total to help evaluate and reinforce your knowledge and understanding of the equipment.
            </p>
          </>
        )}
        {pageState === 'result' && (
          <>
            <h1 className="text-[#2E3A59] text-xl sm:text-2xl font-bold">Test Result</h1>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">Each Question Carries {POINTS_PER_QUESTION} Points</p>
          </>
        )}
        {pageState === 'review' && (
          <>
            <h1 className="text-[#2E3A59] text-xl sm:text-2xl font-bold">Review All Answers</h1>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">Click on any question to view the explanation</p>
          </>
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 pb-12 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {/* ============ QUIZ STATE ============ */}
          {pageState === 'quiz' && (
            <motion.div
              key={`quiz-page-${currentPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Questions */}
              <div className="space-y-4 mb-8">
                {pageQuestions.map((q, qIndex) => {
                  const globalIndex = currentPage * QUESTIONS_PER_PAGE + qIndex;
                  const selectedOption = getSelectedAnswer(qIndex);

                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: qIndex * 0.04 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5"
                    >
                      <div className="mb-3">
                        <h3 className="text-[#2E3A59] font-bold text-sm sm:text-base leading-relaxed">
                          Q{globalIndex + 1}. {q.question}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {q.options.map((option, optIndex) => {
                          const isSelected = selectedOption === optIndex;
                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleSelectAnswer(qIndex, optIndex)}
                              className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                                isSelected
                                  ? 'bg-purple-50 border-[#8A5CF6] shadow-sm'
                                  : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isSelected ? 'border-[#8A5CF6]' : 'border-gray-300'
                              }`}>
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#8A5CF6]" />}
                              </div>
                              <span className={`text-sm sm:text-base leading-relaxed ${
                                isSelected ? 'text-[#2E3A59] font-semibold' : 'text-[#333333]'
                              }`}>
                                <span className="font-bold mr-1">{letterLabels[optIndex]}.</span>
                                {option}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Pagination & Navigation */}
              <div className="flex items-center justify-between mt-6 gap-3">
                <div>
                  {currentPage > 0 ? (
                    <button
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#E5E7EB] text-[#333333] text-xs sm:text-sm font-medium hover:bg-gray-300 transition-colors"
                    >
                      Previous
                    </button>
                  ) : <div />}
                </div>
                <span className="text-[#666666] text-xs sm:text-sm whitespace-nowrap">
                  {currentPage + 1} of {totalPages} pages
                </span>
                <div>
                  {currentPage < totalPages - 1 ? (
                    <button
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="px-5 sm:px-6 py-2.5 rounded-lg bg-[#8A5CF6] text-white text-xs sm:text-sm font-medium hover:bg-[#7C3AED] transition-colors shadow-sm"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-5 sm:px-6 py-2.5 rounded-lg bg-[#8A5CF6] text-white text-xs sm:text-sm font-medium hover:bg-[#7C3AED] transition-colors shadow-sm"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ RESULT STATE ============ */}
          {pageState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10 max-w-md mx-auto">
                {/* Circular Progress Ring */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                    <motion.circle
                      cx="60" cy="60" r="52"
                      fill="none"
                      stroke={resultConfig.color}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 52}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - percentage / 100) }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#2E3A59]">{percentage}%</span>
                  </div>
                </div>

                <h3 className="text-[#2E3A59] text-lg font-bold mb-1">{resultConfig.headline}</h3>
                <p className="text-[#333333] text-sm font-medium mb-3">Your score is {totalScore}/100</p>
                <p className="text-[#666666] text-sm leading-relaxed mb-8 max-w-sm mx-auto">{resultConfig.message}</p>

                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={handleReviewAnswers}
                    className="w-full px-6 py-2.5 rounded-lg bg-[#8A5CF6] text-white text-sm font-medium hover:bg-[#7C3AED] transition-colors"
                  >
                    Review Answers
                  </button>
                  <button
                    onClick={handleRetake}
                    className="w-full px-6 py-2.5 rounded-lg bg-[#8A5CF6] text-white text-sm font-medium hover:bg-[#7C3AED] transition-colors"
                  >
                    Retake Test
                  </button>
                  <Link
                    href="/centrifuge/menu"
                    className="w-full px-6 py-2.5 rounded-lg bg-[#E5E7EB] text-[#333333] text-sm font-medium hover:bg-gray-300 transition-colors text-center"
                  >
                    End Test
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ REVIEW STATE ============ */}
          {pageState === 'review' && (
            <motion.div
              key="review"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Score summary bar */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-[#2E3A59]">{totalScore}/100</p>
                      <p className="text-[#666666] text-xs">Score</p>
                    </div>
                    <div className="h-8 w-px bg-gray-200" />
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-emerald-500">{totalCorrect}</p>
                      <p className="text-[#666666] text-xs">Correct</p>
                    </div>
                    <div className="h-8 w-px bg-gray-200" />
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-red-400">{totalAnswered - totalCorrect}</p>
                      <p className="text-[#666666] text-xs">Wrong</p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleRetake}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#8A5CF6] text-white text-xs font-medium hover:bg-[#7C3AED] transition-colors"
                    >
                      Retake
                    </button>
                    <Link
                      href="/centrifuge/menu"
                      className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#E5E7EB] text-[#333333] text-xs font-medium hover:bg-gray-300 transition-colors text-center"
                    >
                      End Test
                    </Link>
                  </div>
                </div>
              </div>

              {/* All questions in review cards */}
              <div className="space-y-3">
                {shuffledQuestions.map((q, i) => {
                  const userAnswer = answers[i];
                  const isCorrect = userAnswer === q.correctAnswer;
                  const wasAnswered = userAnswer !== undefined;
                  const isExpanded = expandedReview === i;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min(i * 0.02, 0.5) }}
                      className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200 ${
                        !wasAnswered
                          ? 'border-gray-200'
                          : isCorrect
                          ? 'border-green-200 border-l-4 border-l-emerald-400'
                          : 'border-red-200 border-l-4 border-l-red-400'
                      }`}
                    >
                      {/* Collapsed header — always visible */}
                      <button
                        onClick={() => setExpandedReview(isExpanded ? null : i)}
                        className="w-full text-left p-4 flex items-start gap-3"
                      >
                        {/* Status icon */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          !wasAnswered ? 'bg-gray-300' : isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                        }`}>
                          <span className="text-white text-xs font-bold">
                            {!wasAnswered ? '-' : isCorrect ? '✓' : '✕'}
                          </span>
                        </div>

                        {/* Question text */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[#333333] text-sm font-medium leading-relaxed line-clamp-2">
                            Q{i + 1}. {q.question}
                          </p>
                          {/* Answer summary */}
                          <div className="flex items-center gap-3 mt-1.5">
                            {wasAnswered && (
                              <span className="text-xs">
                                <span className={isCorrect ? 'text-emerald-500' : 'text-red-500'}>
                                  Your answer: {letterLabels[userAnswer]}
                                </span>
                              </span>
                            )}
                            {!isCorrect && wasAnswered && (
                              <span className="text-xs text-emerald-600 font-medium">
                                Correct: {letterLabels[q.correctAnswer]}
                              </span>
                            )}
                            {!wasAnswered && (
                              <span className="text-xs text-gray-400">
                                Not answered — Correct: {letterLabels[q.correctAnswer]}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Expand chevron */}
                        <div className="flex-shrink-0 mt-1">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </button>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 ml-9">
                              <div className="h-px bg-gray-100 mb-3" />

                              {/* Full question text */}
                              <p className="text-[#333333] text-sm font-semibold mb-3 leading-relaxed">
                                {q.question}
                              </p>

                              {/* All options */}
                              <div className="space-y-2">
                                {q.options.map((option, optIndex) => {
                                  const isUserAnswer = wasAnswered && userAnswer === optIndex;
                                  const isCorrectAnswer = optIndex === q.correctAnswer;

                                  let optionStyle = 'border-gray-200 bg-white';
                                  if (isCorrectAnswer) {
                                    optionStyle = 'border-emerald-400 bg-emerald-50';
                                  } else if (isUserAnswer && !isCorrect) {
                                    optionStyle = 'border-red-400 bg-red-50';
                                  }

                                  return (
                                    <div
                                      key={optIndex}
                                      className={`flex items-center gap-3 p-2.5 rounded-lg border ${optionStyle}`}
                                    >
                                      {/* Radio indicator */}
                                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                        isCorrectAnswer ? 'border-emerald-500' :
                                        isUserAnswer ? 'border-red-500' : 'border-gray-300'
                                      }`}>
                                        {isCorrectAnswer && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                                        {isUserAnswer && !isCorrect && <div className="w-2 h-2 rounded-full bg-red-500" />}
                                      </div>
                                      <span className={`text-sm leading-relaxed ${
                                        isCorrectAnswer ? 'text-emerald-700 font-medium' :
                                        isUserAnswer ? 'text-red-500' : 'text-[#333333]'
                                      }`}>
                                        <span className="font-bold mr-1">{letterLabels[optIndex]}.</span>
                                        {option}
                                      </span>
                                      {isCorrectAnswer && (
                                        <span className="ml-auto text-emerald-500 text-xs font-bold">✓ Correct</span>
                                      )}
                                      {isUserAnswer && !isCorrect && (
                                        <span className="ml-auto text-red-400 text-xs font-bold">✕ Wrong</span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

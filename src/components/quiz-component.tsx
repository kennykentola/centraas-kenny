'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, Trophy } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizComponentProps {
  questions: QuizQuestion[];
  machine: 'aas' | 'centrifuge';
  title: string;
}

export default function QuizComponent({ questions, machine, title }: QuizComponentProps) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  // Restore state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(`quiz-${machine}`);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setCurrentQuestion(parsed.currentQuestion || 0);
        setAnswers(parsed.answers || new Array(questions.length).fill(null));
        setScore(parsed.score || 0);
        if (parsed.isComplete) {
          setIsComplete(true);
          router.push(`/${machine}/results`);
        }
      } catch {
        // ignore invalid saved state
      }
    }
  }, [machine, questions.length, router]);

  // Save state to localStorage
  useEffect(() => {
    const state = {
      currentQuestion,
      answers,
      score,
      isComplete,
    };
    localStorage.setItem(`quiz-${machine}`, JSON.stringify(state));
  }, [currentQuestion, answers, score, isComplete, machine]);

  const handleSelectAnswer = useCallback((index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    const isCorrect = index === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = index;
      return newAnswers;
    });
    setShowExplanation(true);
  }, [isAnswered, currentQuestion, questions]);

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      // Restore if already answered
      if (answers[currentQuestion + 1] !== null) {
        setSelectedAnswer(answers[currentQuestion + 1]!);
        setIsAnswered(true);
        setShowExplanation(true);
      }
    } else {
      // Quiz complete
      setIsComplete(true);
      router.push(`/${machine}/results`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setShowExplanation(false);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setCurrentQuestion((prev) => prev - 1);
      if (answers[currentQuestion - 1] !== null) {
        setSelectedAnswer(answers[currentQuestion - 1]!);
        setIsAnswered(true);
        setShowExplanation(true);
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const q = questions[currentQuestion];
  const letterLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f2937] to-[#111827]">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-[#1e3a5f]/90 backdrop-blur-sm">
        <div className="h-2 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
          <span className="text-white/70 text-xs sm:text-sm">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-white/70 text-xs sm:text-sm">
            Score: {score}/{questions.length}
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Question */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  {currentQuestion + 1}
                </span>
                <h2 className="text-white text-sm sm:text-lg font-semibold leading-relaxed">
                  {q.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-2 sm:space-y-3">
                {q.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === q.correctAnswer;
                  const showResult = isAnswered;

                  let bgClass = 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30';
                  if (showResult) {
                    if (isCorrect) {
                      bgClass = 'bg-green-500/20 border-green-500/50';
                    } else if (isSelected && !isCorrect) {
                      bgClass = 'bg-red-500/20 border-red-500/50';
                    } else {
                      bgClass = 'bg-white/5 border-white/10 opacity-60';
                    }
                  } else if (isSelected) {
                    bgClass = 'bg-purple-500/20 border-purple-500/50';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 ${bgClass} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold ${
                          showResult && isCorrect
                            ? 'bg-green-500 text-white'
                            : showResult && isSelected && !isCorrect
                            ? 'bg-red-500 text-white'
                            : 'bg-white/10 text-white/70'
                        }`}>
                          {showResult && isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : showResult && isSelected && !isCorrect ? (
                            <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            letterLabels[index]
                          )}
                        </span>
                        <span className={`text-sm sm:text-base ${
                          showResult && isCorrect
                            ? 'text-green-300 font-medium'
                            : showResult && isSelected && !isCorrect
                            ? 'text-red-300'
                            : 'text-white/90'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 sm:mb-6"
                >
                  <div className={`p-3 sm:p-5 rounded-xl border ${
                    selectedAnswer === q.correctAnswer
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-amber-500/10 border-amber-500/30'
                  }`}>
                    <p className={`text-xs sm:text-sm font-semibold mb-1 ${
                      selectedAnswer === q.correctAnswer ? 'text-green-400' : 'text-amber-400'
                    }`}>
                      {selectedAnswer === q.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{q.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between gap-3"
              >
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                    currentQuestion === 0
                      ? 'text-white/30 cursor-not-allowed'
                      : 'text-white bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs sm:text-sm font-medium hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/20"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>Next <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></>
                  ) : (
                    <>Finish <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

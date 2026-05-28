'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { centrifugeQuizQuestions } from '@/data/centrifuge-quiz';

export default function CentrifugeReviewPage() {
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedState = localStorage.getItem('quiz-centrifuge');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setAnswers(parsed.answers || []);
        setScore(parsed.score || 0);
      } catch {
        // ignore
      }
    }
  }, []);

  const letterLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E8FF] via-[#EDE9FE] to-[#f0e6fa] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-8 right-6 w-28 h-28 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-32 left-4 w-20 h-20 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full bg-purple-300/15 pointer-events-none animate-float" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Back button */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/centrifuge/quiz">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#4169E1] hover:text-[#1E3A8A] hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Title */}
      <div className="relative z-10 px-5 sm:px-8 pt-3 pb-4">
        <h1 className="text-[#2E3A59] text-xl sm:text-2xl font-bold">Review Answers</h1>
        <p className="text-[#666666] text-xs sm:text-sm mt-1">Centrifuge Assessment</p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 sm:space-y-4">
          {/* Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4 text-center">
            <p className="text-[#2E3A59] text-xs sm:text-sm">
              You scored <span className="font-bold text-[#8A5CF6]">{score}/{centrifugeQuizQuestions.length}</span> ({Math.round((score / centrifugeQuizQuestions.length) * 100)}%)
            </p>
          </div>

          {centrifugeQuizQuestions.map((q, qIndex) => {
            const userAnswer = answers[qIndex];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <motion.div
                key={qIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(qIndex * 0.02, 0.5) }}
                className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200 ${
                  isCorrect
                    ? 'border-green-200 border-l-4 border-l-emerald-400'
                    : 'border-red-200 border-l-4 border-l-red-400'
                }`}
              >
                <div className="p-3 sm:p-5">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center ${
                      isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </span>
                    <p className="text-[#333333] text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="text-[#999999] mr-1 sm:mr-2">Q{qIndex + 1}.</span>
                      {q.question}
                    </p>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 ml-8 sm:ml-10">
                    {q.options.map((option, oIndex) => {
                      const isUserChoice = userAnswer === oIndex;
                      const isCorrectOption = q.correctAnswer === oIndex;
                      let style = 'border-gray-200 bg-white';
                      if (isCorrectOption) style = 'border-emerald-400 bg-emerald-50';
                      else if (isUserChoice && !isCorrect) style = 'border-red-400 bg-red-50';

                      return (
                        <div key={oIndex} className={`p-2 sm:p-3 rounded-lg border ${style}`}>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded text-[10px] sm:text-xs font-bold flex items-center justify-center ${
                              isCorrectOption ? 'bg-emerald-500 text-white' :
                              isUserChoice && !isCorrect ? 'bg-red-500 text-white' :
                              'bg-gray-100 text-[#999999]'
                            }`}>
                              {isCorrectOption ? '✓' : isUserChoice && !isCorrect ? '✗' : letterLabels[oIndex]}
                            </span>
                            <span className={`text-xs sm:text-sm ${isCorrectOption ? 'text-emerald-700 font-medium' : isUserChoice && !isCorrect ? 'text-red-500' : 'text-[#333333]'}`}>
                              {option}
                            </span>
                            {isCorrectOption && <span className="ml-auto text-emerald-500 text-xs font-bold hidden sm:inline">✓ Correct</span>}
                            {isUserChoice && !isCorrect && <span className="ml-auto text-red-400 text-xs font-bold hidden sm:inline">✕ Wrong</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/centrifuge/quiz"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8A5CF6] text-white font-medium text-sm hover:bg-[#7C3AED] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </Link>
            <Link
              href="/centrifuge/menu"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E5E7EB] text-[#333333] font-medium text-sm hover:bg-gray-300 transition-colors"
            >
              Back to Study Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

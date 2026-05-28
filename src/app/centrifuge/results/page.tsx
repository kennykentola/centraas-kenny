'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, RotateCcw, Eye } from 'lucide-react';

export default function CentrifugeResultsPage() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(25);

  useEffect(() => {
    const savedState = localStorage.getItem('quiz-centrifuge');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setScore(parsed.score || 0);
      } catch {
        // ignore
      }
    }
  }, []);

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getFeedback = () => {
    if (percentage >= 90) return { message: 'Excellent! You have an outstanding understanding of centrifuges!', color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' };
    if (percentage >= 75) return { message: 'Great job! You have a solid understanding of centrifuge concepts.', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' };
    if (percentage >= 50) return { message: 'Good effort! Review the material to strengthen your knowledge.', color: 'text-amber-600', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' };
    return { message: 'Keep learning! Review the study materials and try again.', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
  };

  const feedback = getFeedback();

  const handleRetry = () => {
    localStorage.removeItem('quiz-centrifuge');
    router.push('/centrifuge/quiz');
  };

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
        <Link href="/centrifuge/menu">
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

      <div className="relative z-10 flex items-center justify-center px-4 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-6"
            >
              <Trophy className="w-10 h-10 text-yellow-500" />
            </motion.div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#2E3A59] mb-2">Quiz Complete!</h2>
            <p className="text-[#666666] text-xs sm:text-sm mb-6">Centrifuge Assessment</p>

            {/* Score Circle */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke={percentage >= 75 ? '#10B981' : percentage >= 50 ? '#F97316' : '#EF4444'}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(percentage / 100) * 326.73} 326.73`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#2E3A59]">{score}</span>
                  <span className="text-[#999999] text-base sm:text-lg">/{total}</span>
                </div>
              </div>
            </div>

            <p className="text-[#666666] text-xs sm:text-sm mb-2">Score: {percentage}%</p>

            {/* Feedback */}
            <div className={`${feedback.bgColor} border ${feedback.borderColor} rounded-xl p-3 sm:p-4 mb-6 sm:mb-8`}>
              <p className={`text-xs sm:text-sm ${feedback.color}`}>{feedback.message}</p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                href="/centrifuge/review"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#8A5CF6] text-white font-medium text-sm hover:bg-[#7C3AED] transition-colors"
              >
                <Eye className="w-4 h-4" />
                Review Answers
              </Link>
              <button
                onClick={handleRetry}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#8A5CF6] text-white font-medium text-sm hover:bg-[#7C3AED] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Retry Quiz
              </button>
              <Link
                href="/centrifuge/menu"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#E5E7EB] text-[#333333] font-medium text-sm hover:bg-gray-300 transition-colors"
              >
                Back to Study Menu
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

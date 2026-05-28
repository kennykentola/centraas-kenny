'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Sparkles, Star } from 'lucide-react';

export default function CentrifugeSOPPage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Centrifuge-Machine-SOP.pdf';
    link.download = 'Centrifuge-Machine-SOP.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 50%, #f0e6ff 100%)' }}>
      {/* Decorative star/blob shapes */}
      <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-purple-300/15 pointer-events-none" />
      <div className="absolute top-16 left-20 w-16 h-16 rounded-full bg-purple-400/10 pointer-events-none" />
      <div className="absolute top-12 right-24 w-24 h-24 rounded-full bg-blue-300/10 pointer-events-none" />
      <div className="absolute bottom-20 left-16 w-28 h-28 rounded-full bg-purple-200/15 pointer-events-none" />
      <div className="absolute bottom-12 left-40 w-14 h-14 rounded-full bg-blue-200/10 pointer-events-none" />
      <div className="absolute bottom-24 right-12 w-20 h-20 rounded-full bg-purple-300/12 pointer-events-none" />
      <div className="absolute bottom-40 right-32 w-12 h-12 rounded-full bg-indigo-200/10 pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-10 h-10 rounded-full bg-purple-400/8 pointer-events-none" />

      <Sparkles className="absolute top-20 right-16 w-5 h-5 text-purple-400/20 pointer-events-none" />
      <Sparkles className="absolute bottom-32 left-12 w-4 h-4 text-indigo-300/20 pointer-events-none" />
      <Star className="absolute top-32 right-40 w-3 h-3 text-purple-400/15 pointer-events-none" />
      <Star className="absolute bottom-48 right-20 w-2.5 h-2.5 text-blue-300/15 pointer-events-none" />

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#1e3a8a] via-[#a855f7] to-[#3b82f6]" />

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-5 sm:px-10 pt-5 sm:pt-6 pb-2">
          <Link href="/centrifuge/menu">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-9 h-9 rounded-full bg-white/60 shadow-md flex items-center justify-center text-[#374151] hover:text-[#1E3A8A] hover:shadow-lg transition-all duration-200 hover:-translate-x-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        {/* Main content — vertically centered */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-10 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl w-full text-center"
          >
            {/* Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#1e3a8a] text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12"
            >
              SOP For Centrifuge Machine
            </motion.h1>

            {/* WHAT IS SOP */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10"
            >
              <h2 className="text-[#1f2937] text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide mb-4 sm:mb-6">
                WHAT IS SOP?
              </h2>
              <p className="text-[#374151] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
                The Standard Operation Procedure for Centrifuge Machine gives the complete guide step by step on how to safely operate the centrifuge. This helps students to understand the proper procedures to follow when preparing, loading, operating, and shutting down the centrifuge machine.
              </p>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-[#1e3a8a] text-sm sm:text-base lg:text-lg font-semibold mb-6 sm:mb-8">
                Click the download button below to download the complete guide.
              </p>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl text-white text-sm sm:text-base font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)' }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

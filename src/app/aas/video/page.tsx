'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, Play, ExternalLink } from 'lucide-react';

export default function AASVideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1040] via-[#1e1650] to-[#0f0a2e] relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#4169E1]/6 rounded-full blur-[100px] pointer-events-none" />
      <Star className="absolute top-20 right-16 w-2 h-2 text-purple-400/30 animate-float" />
      <Star className="absolute top-40 left-20 w-1.5 h-1.5 text-blue-400/20 animate-float-delayed" />
      <Sparkles className="absolute top-12 right-32 w-3 h-3 text-purple-500/15 animate-float" />
      <Star className="absolute bottom-24 right-24 w-2 h-2 text-indigo-400/20 animate-float-delayed" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Header */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/aas/menu">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:border-white/20 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 px-5 sm:px-8 pt-6 pb-8 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10">
            <Play className="w-5 h-5 text-purple-300" />
          </div>
          <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Watch a Video
          </h1>
        </div>
        <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Watch this explanatory video to learn how to operate and use the AAS Machine effectively in the laboratory.
        </p>
      </motion.div>

      {/* Video Player — Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 px-3 sm:px-6 md:px-10 lg:px-16 pb-8"
      >
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10">
          {/* Glow effect behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-purple-500/20 rounded-2xl blur-sm pointer-events-none" />

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/2ZXTkkN0KiQ?rel=0&modestbranding=1"
              title="AAS Machine Tutorial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>

      {/* Video info bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 px-5 sm:px-8 md:px-16 pb-8"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium">AAS Machine Tutorial</p>
              <p className="text-white/40 text-xs">YouTube Video</p>
            </div>
          </div>

          <a
            href="https://youtu.be/2ZXTkkN0KiQ?si=1s5poRf2ULnKMMhT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/10 border border-white/10 text-white/70 text-sm hover:bg-white/15 hover:text-white transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Watch on YouTube
          </a>
        </div>
      </motion.div>

      {/* Centraas branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 text-center pb-8"
      >
        <p className="text-white/15 text-[10px] tracking-widest uppercase">
          Centraas
        </p>
      </motion.div>
    </div>
  );
}

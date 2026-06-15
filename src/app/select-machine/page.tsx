'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ShieldCheck, Star } from 'lucide-react';
import SafetyDisclaimer from '@/components/phase-one/safety-disclaimer';

const machines = [
  {
    name: 'AAS MACHINE',
    image: '/images/aas-machine.png',
    href: '/aas/menu',
  },
  {
    name: 'CENTRIFUGE MACHINE',
    image: '/images/centrifuge-machine.png',
    href: '/centrifuge/menu',
  },
];

export default function SelectMachinePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-6 left-6 w-28 h-28 rounded-full bg-purple-100/60 pointer-events-none" />
      <div className="absolute top-12 right-16 w-20 h-20 rounded-full bg-blue-100/50 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-24 left-12 w-24 h-24 rounded-full bg-purple-200/30 pointer-events-none animate-float" />
      <div className="absolute bottom-12 right-8 w-16 h-16 rounded-full bg-indigo-100/40 pointer-events-none" />
      <Star className="absolute top-8 left-1/3 w-2.5 h-2.5 text-purple-400 opacity-40 animate-float" />
      <Star className="absolute top-20 right-1/4 w-2 h-2 text-blue-400 opacity-30 animate-float-delayed" />

      {/* Top bar */}
      <div className="relative z-10 px-5 sm:px-8 pt-6">
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[#1E293B] hover:text-[#1E3A8A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Title */}
      <div className="relative z-10 px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#1E293B] text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
        >
          Select Machine to Learn
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600"
        >
          Choose a learning pathway with structured lessons, SOP guidance, quizzes, glossary support, and safety-first reminders.
        </motion.p>
      </div>

      {/* Machine cards */}
      <div className="relative z-10 px-5 sm:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {machines.map((machine, index) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <Link href={machine.href} className="block group">
                <div className="bg-white rounded-2xl border border-purple-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-purple-300 hover:scale-[1.02]">
                  {/* Machine image */}
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#F3E8FF] to-[#EDE7F6] overflow-hidden">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  {/* Machine name */}
                  <div className="px-4 py-3 text-center border-t border-purple-50">
                    <h2 className="text-[#1E293B] text-sm sm:text-base font-bold">
                      {machine.name}
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="relative z-10 px-5 sm:px-8 pb-10"
      >
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          <SafetyDisclaimer compact />
          <Link href="/glossary">
            <div className="flex h-full items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-100">
              <BookOpen className="h-5 w-5 shrink-0" />
              Open glossary and references
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

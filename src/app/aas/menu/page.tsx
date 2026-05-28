'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Star, Sparkles, BookOpen, FlaskConical, Layers,
  ClipboardList, Play, HelpCircle, Lightbulb, Home,
} from 'lucide-react';

const menuItems = [
  { title: 'Definition of AAS Machine', href: '/aas/overview', icon: BookOpen },
  { title: 'Advance AAS Machine Techniques', href: '/aas/techniques', icon: Lightbulb },
  { title: 'Parts and Component of AAS Machine', href: '/aas/parts', icon: Layers },
  { title: 'Practical Questions', href: '/aas/quiz', icon: HelpCircle },
  { title: 'Standard Operation Procedure for AAS Machine', href: '/aas/sop', icon: ClipboardList },
  { title: 'Watch a video', href: '/aas/video', icon: Play },
  { title: 'Types of AAS Machine and their Techniques', href: '/aas/types', icon: FlaskConical },
];

const menuImages = [
  { src: '/images/scientist-aas.png', alt: 'Scientist using AAS machine' },
  { src: '/images/scientists-group.png', alt: 'Group of scientists in laboratory' },
];

export default function AASMenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0e6fa] via-[#f3e8ff] to-[#e5d0f5] relative overflow-hidden">
      {/* Background decorative bubbles */}
      <div className="absolute top-8 right-6 w-32 h-32 rounded-full bg-purple-200/30 pointer-events-none animate-float" />
      <div className="absolute bottom-32 left-6 w-28 h-28 rounded-full bg-blue-200/25 pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/3 left-4 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none" />
      <div className="absolute bottom-1/3 right-8 w-24 h-24 rounded-full bg-indigo-200/20 pointer-events-none animate-float" />
      <div className="absolute top-[60%] left-1/4 w-14 h-14 rounded-full bg-pink-200/20 pointer-events-none animate-float-delayed" />
      <Sparkles className="absolute top-12 right-12 w-5 h-5 text-purple-400/25 animate-float" />
      <Star className="absolute top-24 left-10 w-3 h-3 text-yellow-400/30 animate-float-delayed" />
      <Star className="absolute bottom-40 right-16 w-2.5 h-2.5 text-purple-400/25 animate-float" />
      <Star className="absolute top-40 right-1/4 w-3.5 h-3.5 text-blue-300/20 animate-float-delayed" />
      <Sparkles className="absolute bottom-20 left-16 w-4 h-4 text-indigo-300/20 animate-float" />

      {/* Full-width content */}
      <div className="relative z-10 w-full">
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

        {/* Header */}
        <div className="px-5 sm:px-8 pt-5 pb-1">
          <Link href="/select-machine">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-[#4169E1] hover:text-[#1E3A8A] transition-all duration-200 hover:-translate-x-0.5 group"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors shadow-sm">
                <ArrowLeft className="w-4 h-4" />
              </div>
            </motion.button>
          </Link>
        </div>

        {/* Title section */}
        <div className="px-5 sm:px-8 pt-4 pb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#1a237e]/10 to-[#7C3AED]/10 flex items-center justify-center shadow-sm">
              <FlaskConical className="w-6 h-6 text-[#4169E1]" />
            </div>
            <h1 className="text-[#1a237e] text-2xl sm:text-3xl font-bold tracking-tight">
              AAS Machine Study Module
            </h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-purple-300" />
              <p className="text-black/50 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-medium">
                Pick from the menu to get started
              </p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-300" />
            </div>
          </motion.div>
        </div>

        {/* Menu Grid - full width */}
        <div className="px-4 sm:px-8 pb-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
              >
                <Link href={item.href} className="block group">
                  <div className="relative bg-white rounded-xl border border-purple-100 px-3 py-4 sm:px-4 sm:py-5 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/8 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/80 group-hover:to-blue-50/60 transition-all duration-300 rounded-xl" />
                    <div className="relative z-10 flex flex-col items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a237e]/8 to-[#7C3AED]/8 flex items-center justify-center group-hover:from-[#1a237e]/15 group-hover:to-[#7C3AED]/15 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-[#4169E1] group-hover:text-[#1a237e] transition-colors duration-300" />
                      </div>
                      <p className="text-black/80 text-[10px] sm:text-xs font-semibold leading-tight text-center group-hover:text-[#1a237e] transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Back to home page */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 + 7 * 0.05 }}
            >
              <Link href="/" className="block group">
                <div className="relative bg-white rounded-xl border border-red-100 px-3 py-4 sm:px-4 sm:py-5 hover:border-red-300 hover:shadow-lg hover:shadow-red-500/8 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-orange-50/0 group-hover:from-red-50/60 group-hover:to-orange-50/40 transition-all duration-300 rounded-xl" />
                  <div className="relative z-10 flex flex-col items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/8 to-orange-500/8 flex items-center justify-center group-hover:from-red-500/15 group-hover:to-orange-500/15 transition-all duration-300">
                      <Home className="w-5 h-5 text-red-400 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    <p className="text-red-400 text-[10px] sm:text-xs font-semibold leading-tight text-center group-hover:text-red-500 transition-colors duration-300">
                      Back to home page
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image cards at bottom - full width */}
        <div className="px-4 sm:px-8 pt-2 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {menuImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.6 + index * 0.1 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 48vw, 24vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            ))}

            {/* Extra image slots for wider layouts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.8 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 hidden sm:block"
            >
              <Image
                src="/images/scientist-microscope.png"
                alt="Scientist with microscope"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="24vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.9 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 hidden sm:block"
            >
              <Image
                src="/images/scientist-centrifuge.png"
                alt="Scientist with centrifuge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="24vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Bottom branding */}
        <div className="px-5 pb-6 text-center">
          <p className="text-black/20 text-[9px] tracking-widest uppercase">
            Centraas
          </p>
        </div>
      </div>
    </div>
  );
}

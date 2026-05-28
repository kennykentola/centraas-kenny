'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const welcomeImages = [
  { src: '/images/scientist-aas.png', alt: 'Scientist operating AAS machine' },
  { src: '/images/scientists-group.png', alt: 'Group of scientists in laboratory' },
  { src: '/images/scientist-microscope.png', alt: 'Scientist using microscope' },
  { src: '/images/scientist-centrifuge.png', alt: 'Scientist with centrifuge' },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT PANEL - Deep Blue */}
      <div className="relative w-full lg:w-[42%] min-h-[50vh] lg:min-h-screen bg-[#1E3A8A] flex flex-col justify-between px-6 sm:px-8 lg:px-10 py-8 lg:py-10 overflow-hidden">
        {/* Decorative stars */}
        <Star className="absolute top-6 left-6 w-3 h-3 text-yellow-400 opacity-40 animate-float" />
        <Star className="absolute top-20 right-8 w-2 h-2 text-yellow-400 opacity-30 animate-float-delayed" />
        <Star className="absolute bottom-24 left-10 w-2.5 h-2.5 text-purple-400 opacity-30 animate-float" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 -right-8 w-24 h-24 rounded-full bg-purple-500/10 pointer-events-none" />
        <div className="absolute bottom-1/3 -left-6 w-20 h-20 rounded-full bg-blue-400/10 pointer-events-none" />

        {/* Top content */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase"
          >
            WELCOME
          </motion.p>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-3">
              This is a Practical Guide on how to use
            </p>
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-6">
              Atomic Absorption Spectrophotometre and Centrifuge
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md"
            >
              This platform is designed to enhance students&apos; learning flexibility and deepen their understanding of how to operate laboratory equipment such as the Atomic Absorption Spectrophotometer (AAS) and the Centrifuge machine. It provides comprehensive explanations of how these machines function, alongside interactive learning materials. In addition, the platform includes practical assessment questions that help evaluate and reinforce students&apos; knowledge and understanding of the equipment.
            </motion.p>
          </motion.div>
        </div>

        {/* Continue button */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/select-machine">
              <button className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-sm sm:text-base font-medium hover:from-[#6D28D9] hover:to-[#5B21B6] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]">
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* RIGHT PANEL - Light Purple Gradient */}
      <div className="relative w-full lg:w-[58%] min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-[#EDE7F6] via-[#F3E8FF] to-[#E8D5F5] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-10 overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-purple-300/20 pointer-events-none animate-float" />
        <div className="absolute bottom-16 left-8 w-24 h-24 rounded-full bg-blue-300/15 pointer-events-none animate-float-delayed" />
        <div className="absolute top-1/3 left-4 w-16 h-16 rounded-full bg-purple-200/20 pointer-events-none" />
        <div className="absolute bottom-1/3 right-6 w-20 h-20 rounded-full bg-indigo-200/15 pointer-events-none animate-float" />

        {/* Image grid 2x2 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 max-w-lg w-full relative z-10">
          {welcomeImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 45vw, 25vw"
              />
              {/* White border overlay for clean look */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/50 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

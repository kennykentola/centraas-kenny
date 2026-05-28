'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles } from 'lucide-react';
import { centrifugeParts } from '@/data/centrifuge-parts';

export default function CentrifugePartsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-32 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute top-20 right-1/3 w-3 h-3 text-indigo-300/20 animate-float" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Back button */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/centrifuge/menu">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#4169E1] hover:text-[#1E3A8A] hover:shadow-lg transition-all duration-200 hover:-translate-x-0.5 group"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Title */}
      <div className="relative z-10 px-5 sm:px-8 pt-3 pb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1a237e] text-2xl sm:text-3xl font-bold"
        >
          Parts / Components of a Centrifuge Machine
        </motion.h1>
      </div>

      {/* Subheading banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 px-5 sm:px-8 mb-6"
      >
        <div className="bg-gradient-to-r from-[#4169E1]/10 to-[#7C3AED]/10 border border-[#4169E1]/20 rounded-xl px-4 py-3 text-center">
          <p className="text-[#1a237e] text-xs sm:text-sm font-semibold tracking-wide">
            FULL AND WELL LABELED DIAGRAM OF A CENTRIFUGE MACHINE
          </p>
        </div>
      </motion.div>

      {/* Labeled Diagram */}
      <div className="relative z-10 px-5 sm:px-8 pb-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-50"
        >
          <Image
            src="/images/centrifuge-parts-diagram.jpg"
            alt="Full and well labeled diagram of a centrifuge machine showing external view, internal view, and working principle"
            width={1400}
            height={800}
            className="w-full h-auto object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>
      </div>

      <div className="h-px bg-gray-200 mx-5 sm:mx-8 mb-8" />

      {/* Parts Grid Section */}
      <div className="relative z-10 px-5 sm:px-8 pb-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-6"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">
            PARTS OF THE CENTRIFUGE MACHINE
          </h2>
          <p className="text-black/50 text-xs sm:text-sm mt-2">
            Select any of the parts to learn more about it
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {centrifugeParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.35 + index * 0.04 }}
            >
              <Link href={`/centrifuge/parts/${part.id}`} className="block group">
                <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                  {/* Part Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    />
                    {/* Dark blue label at bottom */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e] via-[#1a237e]/90 to-transparent pt-8 pb-2 px-2">
                      <p className="text-white text-[10px] sm:text-xs font-semibold leading-tight text-center">
                        {part.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom branding */}
      <div className="relative z-10 px-5 pb-6 text-center">
        <p className="text-black/20 text-[9px] tracking-widest uppercase">
          Centraas
        </p>
      </div>
    </div>
  );
}

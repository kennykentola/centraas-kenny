'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, CircleDot, AlertTriangle } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function FloatingDecoration({ className, size = 20 }: { className: string; size?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full animate-float ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="rounded-full opacity-30"
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}

export default function BearingsDetail() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Decorative floating circles */}
      <FloatingDecoration className="top-24 left-6 bg-[#7C3AED]" size={40} />
      <FloatingDecoration className="top-56 right-10 bg-[#4169E1]" size={28} />
      <FloatingDecoration className="top-[420px] left-16 bg-[#1a237e]" size={18} />
      <FloatingDecoration className="top-[700px] right-8 bg-[#7C3AED]" size={34} />
      <FloatingDecoration className="top-[1100px] left-4 bg-[#4169E1]" size={24} />

      {/* Decorative stars */}
      <motion.div
        className="absolute top-32 right-20 text-[#7C3AED] opacity-40"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <Star size={18} />
      </motion.div>
      <motion.div
        className="absolute top-[480px] left-10 text-[#4169E1] opacity-30"
        animate={{ rotate: [0, -360], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <Star size={14} />
      </motion.div>
      <motion.div
        className="absolute top-[900px] right-16 text-[#1a237e] opacity-25"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <Star size={16} />
      </motion.div>

      {/* Floating back button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/centrifuge/parts"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <ArrowLeft className="text-[#1a237e]" size={22} />
        </Link>
      </motion.div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-12 pt-16">
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#1a237e] text-center tracking-wide mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          BEARINGS
        </motion.h1>

        {/* 1. Hero Image */}
        <motion.div
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/part-centrifuge-bearings.png"
              alt="Centrifuge Bearings"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* 2. Bearings Introduction */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="flex items-center gap-3 mb-4">
            <CircleDot className="text-[#1a237e]" size={28} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e]">BEARINGS</h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Bearings are mechanical devices that reduce friction between rotating parts. They
            support the rotating shaft and help ensure smooth operation.
          </p>
        </motion.section>

        {/* 3. Image Gallery */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/images/bearing-closeup.png', label: 'Ball Bearing Close-up' },
              { src: '/images/part-centrifuge-bearings.png', label: 'Bearing Assembly' },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-md group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Dark blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/80 via-[#1a237e]/20 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. Functions of Bearings */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-2">
            Functions of Bearings
          </h2>
          <p className="text-gray-600 mb-5">Bearings:</p>
          <motion.ul
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              'Reduce friction',
              'Support rotating components',
              'Minimize vibration',
              'Increase efficiency',
              'Reduce wear',
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-gray-700"
                variants={fadeInUp}
                custom={idx * 0.5}
              >
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#4169E1] flex-shrink-0" />
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* 5. How Bearings Work */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-4">
            How Bearings Work
          </h2>
          <div className="bg-blue-50 border-l-4 border-[#4169E1] rounded-r-xl p-5 sm:p-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Bearings use rolling elements or magnetic systems to reduce direct metal-to-metal
              contact. This allows smooth rotation with minimal resistance.
            </p>
          </div>
        </motion.section>

        {/* 6. Types of Bearings */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-6">
            Types of Bearings
          </h2>
          <div className="space-y-4">
            {[
              {
                letter: 'A',
                name: 'Ball Bearings',
                desc: 'Contain small metal balls.',
                advantages: ['Smooth operation', 'Common in laboratory centrifuges'],
              },
              {
                letter: 'B',
                name: 'Roller Bearings',
                desc: 'Use cylindrical rollers.',
                advantages: ['Handle heavier loads', 'Industrial applications'],
              },
              {
                letter: 'C',
                name: 'Magnetic Bearings',
                desc: 'Use magnetic fields instead of physical contact.',
                advantages: ['Extremely low friction', 'Very high-speed capability'],
              },
            ].map((type, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={idx * 0.6 + 6}
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#1a237e] to-[#4169E1] text-white flex items-center justify-center font-bold text-lg">
                    {type.letter}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a237e] mb-1">{type.name}</h3>
                    <p className="text-gray-600 mb-3">{type.desc}</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-700 mb-1.5">Advantages:</p>
                      <ul className="space-y-1">
                        {type.advantages.map((adv, advIdx) => (
                          <li key={advIdx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 7. Uses of Bearings */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={7}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-4">
            Uses of Bearings
          </h2>
          <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#4169E1]/10 border border-[#7C3AED]/20 rounded-xl p-5 sm:p-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Bearings are primarily used for ultracentrifuges where extremely high speeds demand
              minimal friction and maximum stability.
            </p>
          </div>
        </motion.section>

        {/* 8. Bearing Materials */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={8}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-5">
            Bearing Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Hardened steel', 'Ceramic materials', 'Hybrid composites'].map((material, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={idx * 0.5 + 8}
              >
                <p className="text-gray-800 font-semibold text-base">{material}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 9. Disadvantages of Bearings / Bearing Problems */}
        <motion.section
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={9}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-2">
            Disadvantages of Bearings / Bearing Problems
          </h2>
          <p className="text-gray-600 mb-5">Damaged bearings may cause:</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Loud noise', desc: 'Unusual grinding or squealing sounds during operation' },
              { title: 'Excessive vibration', desc: 'Noticeable shaking that can affect results' },
              { title: 'Heat buildup', desc: 'Elevated temperatures indicating excessive friction' },
              { title: 'Rotor instability', desc: 'Irregular spinning that compromises separation' },
            ].map((problem, idx) => (
              <motion.div
                key={idx}
                className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={idx * 0.5 + 9}
              >
                <AlertTriangle className="text-red-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <p className="text-red-800 font-semibold text-sm mb-0.5">{problem.title}</p>
                  <p className="text-red-600 text-xs leading-relaxed">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 10. Closing Banner */}
        <motion.section
          className="mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={10}
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Understanding Bearings
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Proper bearing selection and maintenance are critical for centrifuge performance,
              safety, and the quality of separation results.
            </p>
          </div>
        </motion.section>

        {/* 11. Bottom Branding */}
        <motion.div
          className="text-center pt-4 pb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={11}
        >
          <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
            Centraas
          </p>
        </motion.div>
      </div>
    </div>
  );
}

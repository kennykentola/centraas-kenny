'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, RotateCcw, ShieldCheck, Wrench, Beaker, Layers, ChevronRight } from 'lucide-react';

export default function RotorDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Back button */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/centrifuge/parts">
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
      <div className="relative z-10 px-5 sm:px-8 pt-3 pb-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1a237e] text-2xl sm:text-3xl font-bold"
        >
          THE ROTOR
        </motion.h1>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 pb-12 max-w-4xl mx-auto">

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          <Image
            src="/images/part-centrifuge-rotor.png"
            alt="Centrifuge rotor with sample tubes showing the main rotating component"
            fill
            className="object-cover"
            sizes="90vw"
          />
        </motion.div>

        {/* INTRODUCTION */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <RotateCcw className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold tracking-wide">THE ROTOR</h2>
          </div>
          <div className="space-y-4 text-black/80 text-sm sm:text-base leading-relaxed">
            <p>
              The rotor is the central rotating part of the centrifuge machine. It is the component responsible for holding the sample tubes and spinning them at high speed to generate centrifugal force. The rotor is often regarded as the heart of the centrifuge because the actual separation process occurs through its rotation.
            </p>
            <p>
              The rotor spins at extremely high speeds, creating centrifugal force that pushes denser materials outward and downward while lighter materials remain near the center or top.
            </p>
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/rotor-fixed-angle.png"
                alt="Fixed-angle rotor with angled tube slots"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Fixed-Angle Rotor</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/rotor-swinging-bucket.png"
                alt="Swinging-bucket rotor with horizontal buckets"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Swinging-Bucket Rotor</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/rotor-vertical.png"
                alt="Vertical rotor for ultracentrifugation"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Vertical Rotor</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHAT THE ROTOR DOES */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">What the Rotor Does</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The rotor performs the following major functions:
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              'Holds sample tubes securely',
              'Rotates the samples at high speed',
              'Creates centrifugal force',
              'Separates substances based on density',
              'Maintains balance during operation',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <p className="text-black/75 text-sm sm:text-base leading-relaxed">
              When the centrifuge begins operation, the motor rotates the rotor rapidly. As the rotor spins, centrifugal force pushes heavier particles outward toward the bottom or outer side of the tube while lighter substances remain closer to the center.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
            <h3 className="text-[#7C3AED] font-bold text-sm mb-2">Examples:</h3>
            <div className="space-y-2">
              {[
                'In blood separation, red blood cells move outward while plasma stays above',
                'In milk processing, cream separates from milk',
                'In laboratories, DNA and proteins separate according to density',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm italic leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* STRUCTURE OF THE ROTOR */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Structure of the Rotor</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The rotor is made up of several sections:
          </p>
          <div className="space-y-2.5 mb-4">
            {[
              'Rotor body',
              'Tube slots or cavities',
              'Bucket holders',
              'Central mounting hole',
              'Locking mechanism',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] font-bold">{i + 1}</span>
                </div>
                <span className="text-black/75 text-sm sm:text-base leading-relaxed pt-0.5">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-black/70 text-sm leading-relaxed">
              The rotor body is precisely engineered to ensure smooth spinning without vibration. Each component is manufactured to exacting tolerances so that the rotor can withstand the extreme forces generated during high-speed operation. The central mounting hole ensures a secure fit onto the drive shaft, while the locking mechanism prevents the rotor from detaching during operation.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* MATERIALS USED TO MAKE ROTORS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Materials Used to Make Rotors</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            Rotors are made from strong materials because they experience extremely high stress during spinning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Aluminum Alloy',
                color: 'from-blue-500/10 to-blue-600/5',
                border: 'border-blue-200',
                dot: 'bg-blue-500',
                points: ['Lightweight', 'Strong', 'Resistant to corrosion', 'Common in laboratory centrifuges'],
              },
              {
                name: 'Titanium',
                color: 'from-purple-500/10 to-purple-600/5',
                border: 'border-purple-200',
                dot: 'bg-purple-500',
                points: ['Extremely strong', 'Resistant to chemicals', 'Used in ultracentrifuges', 'Expensive but durable'],
              },
              {
                name: 'Stainless Steel',
                color: 'from-gray-500/10 to-gray-600/5',
                border: 'border-gray-300',
                dot: 'bg-gray-500',
                points: ['Heavy-duty', 'Resistant to rust', 'Common in industrial centrifuges', 'Very durable'],
              },
              {
                name: 'Carbon Fiber Composite',
                color: 'from-emerald-500/10 to-emerald-600/5',
                border: 'border-emerald-200',
                dot: 'bg-emerald-500',
                points: ['Very light', 'Extremely strong', 'High-speed capability', 'Reduces vibration'],
              },
            ].map((material, i) => (
              <div key={i} className={`bg-gradient-to-br ${material.color} rounded-xl p-4 border ${material.border}`}>
                <h3 className="text-[#1a237e] font-bold text-sm mb-3">{material.name}</h3>
                <ul className="space-y-1.5">
                  {material.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${material.dot} mt-1.5 flex-shrink-0`} />
                      <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* TYPES OF ROTORS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-6">Types of Rotors</h2>

          {/* A. Fixed-Angle Rotor */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Fixed-Angle Rotor</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">In this rotor:</p>
            <ul className="space-y-1.5 mb-4 ml-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm leading-relaxed">Tubes remain fixed at an angle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm leading-relaxed">Usually between 25 degrees and 45 degrees</span>
              </li>
            </ul>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">During spinning, particles move outward and downward</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Sediment forms along the side and bottom of the tube</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Faster sedimentation', 'High-speed operation', 'Suitable for small particles'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
              <h4 className="text-[#7C3AED] font-bold text-sm mb-2">Uses:</h4>
              <div className="flex flex-wrap gap-2">
                {['Cell harvesting', 'Protein separation', 'DNA extraction'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* B. Swinging-Bucket Rotor */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Swinging-Bucket Rotor</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              This rotor contains swinging buckets that move outward horizontally during spinning.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed"><strong>At rest:</strong> Tubes hang vertically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed"><strong>During spinning:</strong> Buckets swing outward horizontally</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Better layer separation', 'Excellent for blood separation', 'Suitable for density gradient centrifugation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
              <h4 className="text-[#7C3AED] font-bold text-sm mb-2">Uses:</h4>
              <div className="flex flex-wrap gap-2">
                {['Blood sample separation', 'Plasma isolation', 'Clinical laboratories'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* C. Vertical Rotor */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Vertical Rotor</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">In this rotor:</p>
            <ul className="space-y-1.5 mb-4 ml-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm leading-relaxed">Tubes remain vertical during spinning</span>
              </li>
            </ul>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Extremely fast separation', 'Short run time'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
              <h4 className="text-[#7C3AED] font-bold text-sm mb-2">Uses:</h4>
              <div className="flex flex-wrap gap-2">
                {['Ultracentrifugation', 'Molecular biology research'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* D. Near-Vertical Rotor */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Near-Vertical Rotor</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              This rotor is slightly tilted.
            </p>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Faster than fixed-angle rotor', 'Better separation efficiency'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* ROTOR SAFETY */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Rotor Safety</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Because rotors spin at very high speeds, safety is extremely important.
          </p>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Rotor problems include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Cracks', emoji: 'Crack' },
              { label: 'Corrosion', emoji: 'Rust' },
              { label: 'Imbalance', emoji: 'Uneven' },
              { label: 'Metal fatigue', emoji: 'Weak' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-700 font-bold text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <p className="text-red-800 text-sm font-bold leading-relaxed">
              WARNING: A damaged rotor can fail catastrophically and cause severe accidents. Always inspect the rotor before each use and follow manufacturer safety guidelines.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* ROTOR MAINTENANCE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Rotor Maintenance</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Proper maintenance includes:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Cleaning after use' },
              { step: '2', text: 'Inspecting for cracks' },
              { step: '3', text: 'Avoiding chemical corrosion' },
              { step: '4', text: 'Proper balancing' },
              { step: '5', text: 'Following speed limits' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white text-xs font-bold">{item.step}</span>
                </div>
                <p className="text-black/80 text-sm sm:text-base leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* FOOTER / CLOSING */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              The rotor is the most critical component of the centrifuge machine. Understanding its structure, types, materials, and maintenance requirements is essential for safe and effective operation in any laboratory setting.
            </p>
          </div>
        </motion.section>
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, ShieldCheck, Wrench, Layers, ChevronRight, Shield } from 'lucide-react';

export default function SafetyInterlockDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute top-60 right-20 w-3 h-3 text-indigo-300/20 animate-float" />
      <Sparkles className="absolute bottom-60 left-6 w-2.5 h-2.5 text-purple-400/20 animate-float-delayed" />

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
          SAFETY INTERLOCK SYSTEM
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
            src="/images/safety-interlock-hero.png"
            alt="Safety interlock system diagram showing the lid lock mechanism and sensors"
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
            <Shield className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold tracking-wide">SAFETY INTERLOCK SYSTEM</h2>
          </div>
          <div className="space-y-4 text-black/80 text-sm sm:text-base leading-relaxed">
            <p>
              The safety interlock system is the most critical safety feature of a centrifuge machine. It prevents the lid from being opened while the rotor is still spinning, protecting operators from serious injury caused by contact with the high-speed rotating assembly or flying debris from a tube failure.
            </p>
            <p>
              Modern safety interlock systems combine mechanical locks, electronic sensors, and microprocessor controls to provide multiple layers of protection. They continuously monitor rotor speed, lid position, and balance status, and can trigger automatic emergency shutdown if dangerous conditions are detected.
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
                src="/images/interlock-mechanical.png"
                alt="Mechanical lock mechanism for centrifuge safety interlock"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Mechanical Lock</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/interlock-electromagnetic.png"
                alt="Electromagnetic lock for centrifuge safety interlock system"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Electromagnetic Lock</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/interlock-imbalance.png"
                alt="Imbalance sensor for centrifuge safety interlock system"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Imbalance Sensor</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHAT THE SAFETY INTERLOCK DOES */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">What the Safety Interlock Does</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The safety interlock system performs the following major functions:
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              'Prevents lid opening during operation',
              'Detects rotor speed and position',
              'Monitors for weight imbalance',
              'Triggers automatic emergency shutdown',
              'Provides audible and visual alarms',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <p className="text-black/75 text-sm sm:text-base leading-relaxed">
              The interlock system detects danger by continuously monitoring multiple sensors. When the rotor is spinning, position sensors confirm the lid is securely closed, speed sensors verify the rotor is within safe limits, and vibration sensors detect any imbalance. If any parameter exceeds safe thresholds, the system immediately activates the lock and can trigger an emergency shutdown to protect the operator.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
            <h3 className="text-[#7C3AED] font-bold text-sm mb-2">Examples:</h3>
            <div className="space-y-2">
              {[
                'If the rotor is spinning at 10,000 RPM, the interlock prevents the lid from opening even if the operator pulls the latch',
                'If a tube breaks inside the rotor creating imbalance, the vibration sensors detect it and trigger automatic shutdown within milliseconds',
                'If the lid is not fully closed, the interlock prevents the motor from starting, avoiding accidental operation with an open chamber',
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

        {/* STRUCTURE OF THE SAFETY INTERLOCK */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Structure of the Safety Interlock</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The safety interlock system is made up of several sections:
          </p>
          <div className="space-y-2.5 mb-4">
            {[
              'Electromagnetic lock assembly',
              'Lid position sensors',
              'Rotor speed detector',
              'Imbalance detection sensors',
              'Control circuit board',
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
              The electromagnetic lock assembly physically secures the lid when engaged, while lid position sensors provide feedback to the control circuit board about whether the lid is fully closed. The rotor speed detector continuously monitors the spinning speed, and imbalance detection sensors measure vibration levels. All sensor data is processed by the control circuit board, which determines whether it is safe to allow lid release or if an emergency shutdown is required.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* MATERIALS USED TO MAKE SAFETY INTERLOCKS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Materials Used to Make Safety Interlocks</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            Safety interlocks are made from durable and reliable materials to ensure long-lasting protection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Stainless Steel',
                subtitle: 'Lock mechanism',
                color: 'from-blue-500/10 to-blue-600/5',
                border: 'border-blue-200',
                dot: 'bg-blue-500',
                points: ['Strong and durable', 'Corrosion-resistant', 'Long-lasting'],
              },
              {
                name: 'Electronic Components',
                subtitle: 'Sensors and circuit boards',
                color: 'from-purple-500/10 to-purple-600/5',
                border: 'border-purple-200',
                dot: 'bg-purple-500',
                points: ['Precise detection capability', 'Reliable operation', 'Fast response'],
              },
              {
                name: 'Reinforced Polycarbonate',
                subtitle: 'Sensor housings',
                color: 'from-gray-500/10 to-gray-600/5',
                border: 'border-gray-300',
                dot: 'bg-gray-500',
                points: ['Impact-resistant', 'Electrical insulator', 'Lightweight'],
              },
              {
                name: 'Copper Wiring',
                subtitle: 'Electrical connections',
                color: 'from-emerald-500/10 to-emerald-600/5',
                border: 'border-emerald-200',
                dot: 'bg-emerald-500',
                points: ['Excellent conductivity', 'Reliable signal transmission', 'Durable'],
              },
            ].map((material, i) => (
              <div key={i} className={`bg-gradient-to-br ${material.color} rounded-xl p-4 border ${material.border}`}>
                <h3 className="text-[#1a237e] font-bold text-sm mb-0.5">{material.name}</h3>
                <p className="text-black/50 text-xs mb-3">{material.subtitle}</p>
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

        {/* TYPES OF SAFETY INTERLOCKS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-6">Types of Safety Interlocks</h2>

          {/* A. Mechanical Lock */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Mechanical Lock</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">Physical latch mechanism.</p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">A metal latch physically prevents the lid from opening when engaged</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Simple and reliable', 'No power needed to remain locked', 'Failsafe design'].map((item, i) => (
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
                {['Basic centrifuges', 'Educational settings', 'Low-cost models'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* B. Electromagnetic Lock */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Electromagnetic Lock</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">Electrically controlled with monitoring.</p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">An electromagnet holds the lock closed while powered, releasing only when safe</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Fast response', 'Remote monitoring capability', 'Integration with control panel'].map((item, i) => (
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
                {['Modern laboratory centrifuges', 'Clinical centrifuges', 'Research-grade equipment'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* C. Imbalance Detection System */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Imbalance Detection System</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">Detects weight imbalance.</p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Vibration sensors detect imbalance and trigger automatic shutdown before dangerous speeds</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Prevents rotor damage', 'Protects samples', 'Reduces equipment wear'].map((item, i) => (
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
                {['High-speed centrifuges', 'Ultracentrifuges', 'Precision applications'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* D. Lid Sensor System */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Lid Sensor System</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">Verifies proper lid closure.</p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Optical or magnetic sensors verify the lid is fully closed before allowing the centrifuge to start</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Prevents accidental start', 'Easy to integrate', 'Low maintenance'].map((item, i) => (
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
                {['All modern centrifuges', 'Clinical diagnostics', 'Safety-critical applications'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* INTERLOCK SAFETY WARNINGS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Interlock Safety Warnings</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Because the safety interlock is the last line of defense, safety is extremely important.
          </p>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Safety interlock hazards include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Never Bypass' },
              { label: 'Rotor Contact' },
              { label: 'Flying Debris' },
              { label: 'Emergency Failures' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-700 font-bold text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <p className="text-red-800 text-sm font-bold leading-relaxed">
              WARNING: Never disable, bypass, or modify the safety interlock system under any circumstances. A disabled interlock can result in the lid opening while the rotor is spinning at high speed, exposing operators to catastrophic injury from rotating parts or flying debris. Always keep the interlock system fully functional and report any malfunctions immediately.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* MAINTENANCE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Maintenance</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Proper maintenance includes:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Test interlock function regularly' },
              { step: '2', text: 'Never bypass or modify the system' },
              { step: '3', text: 'Report malfunctions immediately' },
              { step: '4', text: 'Do not force open a locked lid' },
              { step: '5', text: 'Schedule professional inspection' },
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

        {/* CLOSING BANNER */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              The safety interlock system is the most critical safety component of the centrifuge machine. Understanding its structure, types, materials, and maintenance requirements is essential for protecting operators and ensuring safe operation in any laboratory setting. Always respect the interlock system and never attempt to bypass it.
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

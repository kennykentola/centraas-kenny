'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, ShieldCheck, Wrench, Layers, ChevronRight, Clock } from 'lucide-react';

export default function TimerDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute top-60 right-20 w-4 h-4 text-[#7C3AED]/20 animate-float" />
      <Star className="absolute bottom-60 left-6 w-2 h-2 text-indigo-300/20 animate-float" />

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
          THE TIMER
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
            src="/images/timer-hero.png"
            alt="Centrifuge timer system diagram showing the control component"
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
            <Clock className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold tracking-wide">THE TIMER</h2>
          </div>
          <div className="space-y-4 text-black/80 text-sm sm:text-base leading-relaxed">
            <p>
              The timer is a critical control component that determines the duration of the centrifugation run. It allows operators to set precise run times, ensuring reproducible results across multiple experiments and operators. The timer automatically stops the centrifuge when the set time has elapsed.
            </p>
            <p>
              Modern centrifuge timers are integrated with the control panel and offer digital precision, programmable protocols, and audible alarms. Some advanced timers also track cumulative run time for maintenance scheduling and Good Laboratory Practice (GLP) compliance.
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
                src="/images/timer-mechanical.png"
                alt="Mechanical Timer"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Mechanical Timer</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/timer-digital.png"
                alt="Digital Timer"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Digital Timer</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/timer-programmable.png"
                alt="Programmable Timer"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Programmable Timer</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHAT THE TIMER DOES */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">What the Timer Does</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The timer performs the following major functions:
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              'Controls the duration of centrifugation runs',
              'Ensures reproducible separation times',
              'Automatically stops the rotor when time elapses',
              'Provides countdown display during operation',
              'Alerts the operator when the run is complete',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <p className="text-black/75 text-sm sm:text-base leading-relaxed">
              When the timer counts down to zero, it sends a signal to the motor controller to begin deceleration. The rotor gradually slows to a stop, and the safety interlock releases the lid.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
            <h3 className="text-[#7C3AED] font-bold text-sm mb-2">Examples:</h3>
            <div className="space-y-2">
              {[
                'Blood separation typically takes 10-15 minutes',
                'DNA precipitation protocols may require 30+ minutes',
                'Cell pelleting usually needs 5-10 minutes',
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

        {/* STRUCTURE OF THE TIMER */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Structure of the Timer</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The timer is made up of several sections:
          </p>
          <div className="space-y-2.5 mb-4">
            {[
              'Timer display (digital or analog)',
              'Input controls (buttons, dial, or touchscreen)',
              'Microprocessor/controller',
              'Audible alarm/signal',
              'Integration circuit with motor controller',
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
              The timer display provides real-time feedback to the operator, showing the remaining time or elapsed time. The input controls allow the operator to set the desired run duration, while the microprocessor manages the countdown logic and communicates with the motor controller. The audible alarm provides an audible signal when the run is complete, and the integration circuit ensures the timer works seamlessly with the centrifuge&apos;s other control systems.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* MATERIALS USED TO MAKE TIMERS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Materials Used to Make Timers</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            Timers are constructed from a combination of electronic and structural materials.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Electronic Components',
                color: 'from-blue-500/10 to-blue-600/5',
                border: 'border-blue-200',
                dot: 'bg-blue-500',
                points: ['Microprocessors', 'Quartz crystals', 'LED displays', 'Precise timekeeping'],
              },
              {
                name: 'LCD/OLED Displays',
                color: 'from-purple-500/10 to-purple-600/5',
                border: 'border-purple-200',
                dot: 'bg-purple-500',
                points: ['Timer readout', 'Clear visibility', 'Backlit for dark environments', 'Touch capability'],
              },
              {
                name: 'Plastic Housing',
                color: 'from-gray-500/10 to-gray-600/5',
                border: 'border-gray-300',
                dot: 'bg-gray-500',
                points: ['Button housings', 'Panel mounting', 'Lightweight', 'Durable'],
              },
              {
                name: 'Stainless Steel',
                color: 'from-emerald-500/10 to-emerald-600/5',
                border: 'border-emerald-200',
                dot: 'bg-emerald-500',
                points: ['Mechanical timer parts', 'Dial components', 'Wear-resistant', 'Long-lasting'],
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

        {/* TYPES OF TIMERS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-6">Types of Timers</h2>

          {/* A. Mechanical Timer */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Mechanical Timer</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Spring-wound dial timer found in older centrifuges.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">A spring mechanism counts down through gear reduction</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Simple operation', 'No electrical dependency for timing', 'Reliable'].map((item, i) => (
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
                {['Older centrifuges', 'Educational settings', 'Backup timing'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* B. Digital Timer */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Digital Timer</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Electronic countdown with numeric display.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Quartz crystal oscillator provides precise timekeeping with digital display</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['High accuracy', 'Easy to read', 'Precise to the second'].map((item, i) => (
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
                {['Most modern centrifuges', 'Clinical laboratories', 'Research applications'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* C. Programmable Timer */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Programmable Timer</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Stores multiple time profiles.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Microprocessor stores multiple time settings for quick one-touch access to common protocols</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['One-touch operation', 'Protocol consistency', 'Reduces user error'].map((item, i) => (
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
                {['High-throughput labs', 'Repetitive protocols', 'Multi-user environments'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* D. Continuous Timer */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Continuous Timer</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Runs until manually stopped.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Counts up from zero, displaying elapsed time, with no automatic stop</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Flexible duration', 'Extended runs', 'Simple operation'].map((item, i) => (
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
                {['Unknown optimal times', 'Method development', 'Special protocols'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* TIMER SAFETY */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Timer Safety Considerations</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Because the timer controls run duration, accuracy and reliability are essential for safe operation.
          </p>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Timer-related problems include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Over-Centrifugation' },
              { label: 'Under-Centrifugation' },
              { label: 'Timer Malfunction' },
              { label: 'Unattended Operation' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-700 font-bold text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <p className="text-red-800 text-sm font-bold leading-relaxed">
              WARNING: Always verify timer accuracy before critical runs. A timer that runs too long or too short can compromise sample integrity, cause equipment damage, or create unsafe operating conditions.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* TIMER MAINTENANCE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Timer Maintenance</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Proper maintenance includes:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Verify timer accuracy periodically' },
              { step: '2', text: 'Do not repair internal components' },
              { step: '3', text: 'Report timing inconsistencies' },
              { step: '4', text: 'Keep display clean and readable' },
              { step: '5', text: 'Test alarm function regularly' },
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
              The timer is an essential control component that ensures precise, reproducible, and safe centrifugation runs. Understanding its types, structure, and maintenance requirements is critical for achieving consistent laboratory results and maintaining compliance with safety standards.
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, ShieldCheck, Wrench, Layers, ChevronRight } from 'lucide-react';

export default function ChamberDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute top-52 right-8 w-3 h-3 text-purple-400/20 animate-float" />
      <Sparkles className="absolute bottom-60 left-6 w-2.5 h-2.5 text-blue-400/20 animate-float-delayed" />

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
          THE CHAMBER / HOUSING
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
            src="/images/chamber-hero.png"
            alt="Chamber housing diagram showing the protective enclosure of a centrifuge"
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
            <Layers className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold tracking-wide">THE CHAMBER / HOUSING</h2>
          </div>
          <div className="space-y-4 text-black/80 text-sm sm:text-base leading-relaxed">
            <p>
              The chamber, also known as the housing, is the robust metal enclosure that surrounds the rotor assembly inside the centrifuge. It serves as a protective containment vessel that shields the operator and laboratory environment from potential hazards during operation, including flying debris from tube breakage and aerosol contamination.
            </p>
            <p>
              The chamber is engineered to withstand extreme forces generated during high-speed centrifugation. In refrigerated models, the chamber is insulated and contains cooling coils. In biohazard applications, the chamber may feature aerosol-tight seals and HEPA filtration to prevent the release of harmful biological agents.
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
                src="/images/chamber-standard.png"
                alt="Standard chamber for general-purpose centrifugation"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Standard Chamber</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/chamber-refrigerated.png"
                alt="Refrigerated chamber with integrated cooling insulation"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Refrigerated Chamber</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/chamber-aerosol.png"
                alt="Aerosol-tight chamber for biohazard containment"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Aerosol-tight Chamber</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHAT THE CHAMBER DOES */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">What the Chamber Does</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The chamber performs the following major functions:
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              'Contains the rotor assembly during operation',
              'Protects operator from flying debris',
              'Maintains temperature in refrigerated models',
              'Provides sound insulation',
              'Contains spills and aerosol contamination',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <p className="text-black/75 text-sm sm:text-base leading-relaxed">
              The chamber is the first line of defense if a tube breaks during centrifugation. It is designed to contain the spillage, prevent aerosol escape, and protect both the operator and the laboratory environment from potential hazards.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
            <h3 className="text-[#7C3AED] font-bold text-sm mb-2">Examples:</h3>
            <div className="space-y-2">
              {[
                'Clinical labs use sealed chambers for blood samples',
                'Biohazard labs require aerosol-tight containment',
                'Industrial centrifuges need reinforced chambers',
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

        {/* STRUCTURE OF THE CHAMBER */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Structure of the Chamber</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The chamber is made up of several sections:
          </p>
          <div className="space-y-2.5 mb-4">
            {[
              'Chamber body (heavy-gauge metal)',
              'Lid with safety lock',
              'Door seal/gasket',
              'Rotor mounting base',
              'Drain or cleanout port',
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
              The chamber body is constructed from heavy-gauge metal to withstand the extreme forces generated during centrifugation. The lid is secured with a safety lock mechanism that prevents accidental opening during operation. The door seal creates an airtight barrier, while the rotor mounting base provides a stable platform for the rotor assembly. A drain or cleanout port allows for easy cleaning and decontamination of the chamber interior.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* MATERIALS USED TO MAKE CHAMBERS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Materials Used to Make Chambers</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            Chambers are made from strong, durable materials designed to provide reliable containment and withstand extreme forces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Heavy-Gauge Steel',
                color: 'from-blue-500/10 to-blue-600/5',
                border: 'border-blue-200',
                dot: 'bg-blue-500',
                points: ['Primary chamber body', 'Extremely strong', 'Impact-resistant', 'Long service life'],
              },
              {
                name: 'Aluminum Alloy',
                color: 'from-purple-500/10 to-purple-600/5',
                border: 'border-purple-200',
                dot: 'bg-purple-500',
                points: ['Lightweight chambers', 'Good strength-to-weight ratio', 'Corrosion-resistant', 'Easy to manufacture'],
              },
              {
                name: 'Insulation Materials',
                color: 'from-gray-500/10 to-gray-600/5',
                border: 'border-gray-300',
                dot: 'bg-gray-500',
                points: ['Foam insulation in refrigerated models', 'Temperature stability', 'Energy efficient', 'Reduces condensation'],
              },
              {
                name: 'Rubber/Silicone Seals',
                color: 'from-emerald-500/10 to-emerald-600/5',
                border: 'border-emerald-200',
                dot: 'bg-emerald-500',
                points: ['Door gaskets', 'Air-tight sealing', 'Flexible and durable', 'Replaceable'],
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

        {/* TYPES OF CHAMBERS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-6">Types of Chambers</h2>

          {/* A. Standard Chamber */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Standard Chamber</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Basic containment for general-purpose centrifugation.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Simple metal enclosure with basic lid seal</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Simple design', 'Lower cost', 'Easy to maintain'].map((item, i) => (
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
                {['General laboratory work', 'Educational settings', 'Routine separations'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* B. Refrigerated Chamber */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Refrigerated Chamber</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Insulated with integrated cooling.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Double-walled construction with insulation between walls and cooling coils inside</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Temperature control', 'Prevents sample degradation', 'Enables long runs'].map((item, i) => (
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
                {['Biological sample processing', 'Protein purification', 'Enzyme studies'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* C. Aerosol-tight Chamber */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Aerosol-tight Chamber</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Sealed for biohazard containment.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Equipped with rubber gaskets creating a hermetic seal, often with HEPA filtration</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Biohazard containment', 'Prevents aerosol release', 'Meets safety standards'].map((item, i) => (
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
                {['Pathogen handling', 'Clinical microbiology', 'BSL-2 laboratories'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* D. Heavy-duty Chamber */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Heavy-duty Chamber</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Reinforced for ultracentrifuges.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Extra-thick metal construction designed to withstand extreme forces generated at ultra-high speeds</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Maximum strength', 'Handles extreme RCF', 'Ultimate safety'].map((item, i) => (
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
                {['Ultracentrifugation', 'High-speed applications', 'Industrial processing'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* CHAMBER SAFETY */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Chamber Safety Considerations</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Because the chamber is the primary containment vessel, safety is extremely important.
          </p>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Chamber hazards include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Tube Breakage' },
              { label: 'Aerosol Escape' },
              { label: 'Corrosion Damage' },
              { label: 'Structural Failure' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-700 font-bold text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <p className="text-red-800 text-sm font-bold leading-relaxed">
              WARNING: Never operate a centrifuge with a damaged or compromised chamber. A cracked, corroded, or improperly sealed chamber can fail catastrophically, causing serious injury. Always inspect the chamber before each use and replace any worn seals or gaskets immediately.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* CHAMBER MAINTENANCE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Chamber Maintenance</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Proper maintenance includes:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Clean chamber after any sample spill' },
              { step: '2', text: 'Inspect regularly for damage or corrosion' },
              { step: '3', text: 'Decontaminate after biohazardous use' },
              { step: '4', text: 'Check door seals for wear' },
              { step: '5', text: 'Never operate with compromised chamber' },
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
              The chamber is a critical safety and structural component of the centrifuge machine. It provides essential containment for the rotor assembly, protects operators from hazards, and enables specialized functions such as temperature control and biohazard containment. Understanding its construction, materials, types, and maintenance is essential for safe and effective laboratory operation.
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

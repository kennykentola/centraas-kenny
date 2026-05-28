'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, ShieldCheck, Wrench, Layers, ChevronRight, TestTube } from 'lucide-react';

export default function SampleContainersDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute top-52 right-20 w-3 h-3 text-purple-400/20 animate-float" />
      <Sparkles className="absolute bottom-60 left-8 w-2.5 h-2.5 text-blue-300/20 animate-float-delayed" />

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
          TUBE / SAMPLE CONTAINER
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
            src="/images/sample-containers-hero.png"
            alt="Centrifuge sample containers and tubes showing various types and sizes"
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
            <TestTube className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold tracking-wide">TUBE / SAMPLE CONTAINER</h2>
          </div>
          <div className="space-y-4 text-black/80 text-sm sm:text-base leading-relaxed">
            <p>
              Centrifuge tubes are specialized containers designed to hold samples during centrifugation. They are engineered to withstand high centrifugal forces without breaking or deforming. The tubes come in various materials, sizes, and designs to suit different types of samples and applications.
            </p>
            <p>
              Proper selection of sample containers is critical for both the success of the separation and the safety of the operator. Using the wrong type of tube can lead to tube failure, sample loss, contamination, or even equipment damage.
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
                src="/images/tube-polypropylene.png"
                alt="Polypropylene tubes for general laboratory centrifugation"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Polypropylene Tubes</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/tube-glass-polycarbonate.png"
                alt="Glass and polycarbonate tubes for chemical applications"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Glass &amp; Polycarbonate</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/tube-microcentrifuge.png"
                alt="Microcentrifuge tubes for small volume processing"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Microcentrifuge Tubes</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHAT SAMPLE CONTAINERS DO */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">What Sample Containers Do</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Sample containers perform the following major functions:
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              'Hold samples securely during centrifugation',
              'Withstand high centrifugal forces (RCF)',
              'Allow clear separation and pellet formation',
              'Enable safe handling of biological and chemical samples',
              'Provide graduated volume measurement',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <p className="text-black/75 text-sm sm:text-base leading-relaxed">
              During centrifugation, the tube contents experience a force proportional to the relative centrifugal force (RCF). Denser particles are driven toward the bottom of the tube, forming a pellet, while lighter components remain in the supernatant above. The tube design ensures that this separation occurs cleanly and predictably.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
            <h3 className="text-[#7C3AED] font-bold text-sm mb-2">Examples:</h3>
            <div className="space-y-2">
              {[
                'Blood collection tubes for clinical labs',
                'Conical tubes for cell culture processing',
                'Microcentrifuge tubes for DNA/RNA extraction',
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

        {/* STRUCTURE OF SAMPLE CONTAINERS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Structure of Sample Containers</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            A typical centrifuge tube is made up of several parts:
          </p>
          <div className="space-y-2.5 mb-4">
            {[
              'Tube body (cylindrical or conical)',
              'Graduation markings',
              'Sealing cap or closure',
              'Conical bottom (for pellet formation)',
              'Writing area for labeling',
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
              The tube body provides the primary containment for the sample. Graduation markings allow precise volume measurement. The sealing cap ensures a leak-proof closure during spinning, while the conical bottom concentrates the pellet into a small area for easy retrieval. The writing area allows operators to label tubes for sample identification.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* MATERIALS USED */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Materials Used</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            Sample containers are made from different materials depending on the application and chemical compatibility required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Polypropylene (PP)',
                color: 'from-blue-500/10 to-blue-600/5',
                border: 'border-blue-200',
                dot: 'bg-blue-500',
                points: ['Most common', 'Good chemical resistance', 'Autoclavable', 'Clear or translucent'],
              },
              {
                name: 'Polycarbonate (PC)',
                color: 'from-purple-500/10 to-purple-600/5',
                border: 'border-purple-200',
                dot: 'bg-purple-500',
                points: ['Crystal clear', 'Limited chemical resistance', 'High impact strength', 'Not autoclavable'],
              },
              {
                name: 'Glass',
                color: 'from-gray-500/10 to-gray-600/5',
                border: 'border-gray-300',
                dot: 'bg-gray-500',
                points: ['Excellent chemical compatibility', 'Reusable', 'Can be sterilized', 'Fragile'],
              },
              {
                name: 'Ultra-clear Polypropylene',
                color: 'from-emerald-500/10 to-emerald-600/5',
                border: 'border-emerald-200',
                dot: 'bg-emerald-500',
                points: ['Superior optical clarity', 'Chemical resistant', 'Autoclavable', 'Premium option'],
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

        {/* TYPES OF SAMPLE CONTAINERS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-6">Types of Sample Containers</h2>

          {/* A. Polypropylene Tubes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Polypropylene Tubes</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Most widely used centrifuge tubes. They are chemical resistant and autoclavable.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Molded from polypropylene resin with conical bottoms</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Chemical resistant', 'Inexpensive', 'Autoclavable'].map((item, i) => (
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
                {['General lab use', 'Cell culture', 'Clinical samples'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* B. Polycarbonate Tubes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Polycarbonate Tubes</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Crystal clear tubes ideal for visual monitoring of samples during and after centrifugation.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Injection-molded from polycarbonate for optical clarity</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Transparent', 'High strength', 'Good for visual monitoring'].map((item, i) => (
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
                {['Density gradient work', 'Colorimetric assays', 'Sample observation'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* C. Glass Tubes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Glass Tubes</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Used for applications involving aggressive chemical solvents.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Made from borosilicate or soda-lime glass</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Chemical inert', 'Reusable', 'Withstands organic solvents'].map((item, i) => (
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
                {['Organic solvent extraction', 'Chemical analysis', 'High-temperature applications'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* D. Microcentrifuge Tubes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Microcentrifuge Tubes</h3>
            </div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Small volume tubes (0.5–2.0 mL) for molecular biology applications.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">How It Works:</h4>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">Small conical tubes with snap-cap or screw-cap closures</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages:</h4>
              <ul className="space-y-1.5">
                {['Compact', 'High-speed rated', 'Convenient for small samples'].map((item, i) => (
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
                {['Molecular biology', 'PCR preparation', 'Protein analysis'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* SAMPLE CONTAINER SAFETY */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Sample Container Safety</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Because sample containers are subjected to extreme forces during centrifugation, safety is extremely important.
          </p>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Common tube-related hazards include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Tube Rupture' },
              { label: 'Chemical Spillage' },
              { label: 'Biohazard Exposure' },
              { label: 'RCF Overload' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-700 font-bold text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <p className="text-red-800 text-sm font-bold leading-relaxed">
              WARNING: Always check the tube&apos;s maximum RCF rating before use. Exceeding the rated RCF can cause tube failure, resulting in sample loss, equipment contamination, and potential injury to the operator.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* SAMPLE CONTAINER MAINTENANCE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Sample Container Maintenance</h2>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Proper maintenance and handling includes:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Inspect for cracks before each use' },
              { step: '2', text: 'Never exceed maximum RCF rating' },
              { step: '3', text: 'Use proper caps and seals' },
              { step: '4', text: 'Discard damaged tubes immediately' },
              { step: '5', text: 'Follow decontamination procedures for reusable tubes' },
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
              Proper selection and use of sample containers is essential for safe and effective centrifugation. Understanding the different materials, types, and safety considerations ensures reliable separation results and protects both the operator and the equipment.
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

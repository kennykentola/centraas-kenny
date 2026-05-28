'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles, ChevronRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function CentrifugeTechniquesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute top-52 right-8 w-3 h-3 text-blue-300/20 animate-float" />

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
          Techniques in Using a Centrifuge Machine
        </motion.h1>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-5 sm:px-8 pb-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/centrifuge-techniques-hero.png"
            alt="Scientists operating a centrifuge machine in a professional laboratory"
            fill
            className="object-cover"
            sizes="90vw"
            priority
          />
        </motion.div>
      </div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative z-10 px-5 sm:px-8 pb-8 max-w-4xl mx-auto"
      >
        <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
          <p className="text-black/80 text-sm sm:text-base leading-relaxed">
            The techniques used in operating a centrifuge machine refer to the different methods and procedures used to separate substances based on density, size, or mass through centrifugal force. These techniques are widely used in medical laboratories, biology, chemistry, microbiology, biochemistry, and industrial processing.
          </p>
        </div>
      </motion.div>

      {/* All Techniques */}
      <div className="relative z-10 px-5 sm:px-8 pb-8 max-w-4xl mx-auto">

        {/* TECHNIQUE 1: Differential Centrifugation */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Differential Centrifugation</h2>
          </div>

          {/* Technique Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4">
            <Image
              src="/images/centrifuge/technique-differential.png"
              alt="Differential centrifugation process showing separation of cellular components at different spin speeds"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 896px"
            />
          </div>

          <div className="bg-blue-50/60 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">Definition</h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed italic">
              Differential centrifugation is a technique where particles are separated according to their size and density by spinning samples at different speeds and durations. It is the most commonly used centrifugation method in biological laboratories for separating organelles, membranes, and other cellular components from homogenized cell samples.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">How It Works</h3>
            <div className="space-y-2">
              {[
                'A sample (such as homogenized cells) is placed inside centrifuge tubes',
                'The centrifuge spins at a low speed first, causing the heaviest particles to settle at the bottom forming a pellet',
                'The liquid above the pellet (supernatant) is carefully removed and transferred to a fresh tube',
                'The supernatant is then spun again at a higher speed to separate lighter particles',
                'This process continues at progressively higher speeds until different components are fully separated',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#7C3AED] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4">
              <h3 className="text-emerald-700 font-bold text-sm mb-2">Advantages</h3>
              <ul className="space-y-1.5">
                {['Simple and widely used', 'Fast separation process', 'Suitable for large samples', 'Requires standard equipment'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/60 border-l-4 border-red-300 rounded-r-lg p-4">
              <h3 className="text-red-700 font-bold text-sm mb-2">Disadvantages</h3>
              <ul className="space-y-1.5">
                {['Separation may not be highly pure', 'Similar-sized particles may mix together', 'Multiple steps can cause sample loss', 'Cross-contamination risk between steps'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-10" />

        {/* TECHNIQUE 2: Density Gradient Centrifugation */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Density Gradient Centrifugation</h2>
          </div>

          {/* Technique Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4">
            <Image
              src="/images/centrifuge/technique-density-gradient.png"
              alt="Density gradient centrifugation showing separated bands in a gradient medium"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 896px"
            />
          </div>

          <div className="bg-blue-50/60 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">Definition</h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed italic">
              Density gradient centrifugation uses a medium with a varying density (a gradient) to separate particles based on their buoyant density. Particles move through the gradient until they reach a point where their density matches the surrounding medium, forming distinct bands at different levels.
            </p>
          </div>

          {/* Sub-types */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">A</span>
              </div>
              <h3 className="text-[#1a237e] text-base font-bold">Rate-Zonal Centrifugation</h3>
            </div>
            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <p className="text-black/75 text-sm leading-relaxed mb-2">
                In rate-zonal centrifugation, separation depends on particle size and mass. The sample is layered on top of a pre-formed density gradient and centrifuged for a defined period. Particles of different sizes and masses sediment at different rates, forming distinct bands at different levels in the gradient tube.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['DNA separation', 'RNA isolation', 'Virus purification', 'Subcellular fractionation'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">B</span>
              </div>
              <h3 className="text-[#1a237e] text-base font-bold">Isopycnic Centrifugation</h3>
            </div>
            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
              <p className="text-black/75 text-sm leading-relaxed mb-2">
                In isopycnic centrifugation, separation depends only on particle density, not size or mass. The sample is mixed with the gradient medium and centrifuged at high speed for an extended period. Particles migrate through the gradient until they reach the position where their density matches the medium, at which point they stop moving and form stable bands.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Lipoprotein analysis', 'Nucleic acid separation', 'Plasmid DNA purification', 'Membrane fractionation'].map((item, i) => (
                  <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-purple-100 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-10" />

        {/* TECHNIQUE 3: Ultracentrifugation */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#0891b2] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Ultracentrifugation</h2>
          </div>

          {/* Technique Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4">
            <Image
              src="/images/centrifuge/technique-ultra.png"
              alt="Ultracentrifuge machine for high-speed molecular level separation"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 896px"
            />
          </div>

          <div className="bg-blue-50/60 border-l-4 border-[#0891b2] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">Definition</h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed italic">
              Ultracentrifugation uses extremely high rotational speeds, usually above 100,000 RPM, to separate very tiny particles such as viruses, ribosomes, and macromolecules. It operates in a vacuum chamber to eliminate air resistance and friction, enabling the extremely high speeds needed for molecular-level separations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2 mb-3 sm:mb-0">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#0891b2] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">A</span>
              </div>
              <div>
                <h3 className="text-[#1a237e] text-sm font-bold mb-1">Analytical Ultracentrifugation</h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  Used to study the physical and chemical properties of particles in solution. It monitors sedimentation in real-time using optical detection systems to determine molecular weight, shape, and interaction of macromolecules without the need for separation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#0891b2] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">B</span>
              </div>
              <div>
                <h3 className="text-[#1a237e] text-sm font-bold mb-1">Preparative Ultracentrifugation</h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  Used to isolate and collect specific particles or molecules from complex mixtures in sufficient quantities for downstream analysis. It focuses on actually separating and purifying the target material rather than measuring its properties.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mt-4">
            <p className="text-black/70 text-sm leading-relaxed">
              <strong className="text-[#1a237e]">Speed Range:</strong> Ultracentrifuges typically operate at speeds exceeding 100,000 RPM, generating centrifugal forces over 1,000,000 times gravity. This extreme force enables the separation of particles at the molecular level, including proteins, nucleic acids, and entire viral particles.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-10" />

        {/* TECHNIQUE 4: Microcentrifugation */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#dc2626] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">4</span>
            </div>
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Microcentrifugation</h2>
          </div>

          {/* Technique Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4">
            <Image
              src="/images/centrifuge/technique-micro.png"
              alt="Microcentrifuge on laboratory benchtop for small volume sample processing"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 896px"
            />
          </div>

          <div className="bg-blue-50/60 border-l-4 border-[#dc2626] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">Definition</h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed italic">
              Microcentrifugation uses small, compact centrifuges designed for processing very tiny sample volumes, usually between 0.2 mL and 2.0 mL. It is extensively used in molecular biology, biochemistry, and genetics laboratories for rapid separation and pelleting of small biological samples.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">How It Works</h3>
            <div className="space-y-2">
              {[
                'Small sample volumes (0.2 to 2.0 mL) are loaded into microcentrifuge tubes',
                'The microcentrifuge spins at very high speeds, often up to 15,000 RPM or more',
                'Denser particles such as cells or cell debris rapidly pellet at the bottom of the tube',
                'The supernatant containing the desired biomolecules remains at the top for easy collection',
                'The entire process typically takes only one to five minutes',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#7C3AED] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4">
              <h3 className="text-emerald-700 font-bold text-sm mb-2">Advantages</h3>
              <ul className="space-y-1.5">
                {['Extremely fast processing', 'Compact and portable', 'Ideal for small sample volumes', 'Simple operation with minimal training'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/60 border-l-4 border-red-300 rounded-r-lg p-4">
              <h3 className="text-red-700 font-bold text-sm mb-2">Disadvantages</h3>
              <ul className="space-y-1.5">
                {['Limited to very small volumes', 'Not suitable for large-scale processing', 'Limited temperature control options', 'Basic models lack programmability'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-10" />

        {/* TECHNIQUE 5: Refrigerated Centrifugation */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#0d9488] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">5</span>
            </div>
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Refrigerated Centrifugation</h2>
          </div>

          {/* Technique Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4">
            <Image
              src="/images/centrifuge/technique-refrigerated.png"
              alt="Refrigerated centrifuge with temperature control for sensitive biological samples"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 896px"
            />
          </div>

          <div className="bg-blue-50/60 border-l-4 border-[#0d9488] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">Definition</h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed italic">
              Refrigerated centrifugation is a technique that uses temperature-controlled centrifuges to maintain low temperatures, usually between -20 degrees Celsius and +4 degrees Celsius, during the centrifugation process. This prevents heat damage to sensitive biological samples that could degrade or become inactive due to the heat generated by high-speed spinning.
            </p>
          </div>

          <div className="bg-orange-50/80 border-l-4 border-[#ea580c] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#ea580c] font-bold text-sm mb-2">Why Temperature Control Matters</h3>
            <p className="text-black/75 text-sm leading-relaxed">
              High-speed spinning generates significant heat through friction and motor operation. This heat can denature proteins, activate enzymes, degrade nucleic acids, or otherwise alter the properties of temperature-sensitive biological materials. Refrigerated centrifugation maintains a consistent low temperature throughout the run, ensuring that samples remain intact and biologically active throughout the separation process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4">
              <h3 className="text-emerald-700 font-bold text-sm mb-2">Advantages</h3>
              <ul className="space-y-1.5">
                {['Protects temperature-sensitive samples', 'Enables long-duration runs', 'Prevents protein denaturation', 'Essential for biological materials'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/60 border-l-4 border-red-300 rounded-r-lg p-4">
              <h3 className="text-red-700 font-bold text-sm mb-2">Disadvantages</h3>
              <ul className="space-y-1.5">
                {['More expensive than standard centrifuges', 'Higher energy consumption', 'Requires regular cooling system maintenance', 'Heavier and less portable'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-10" />

        {/* TECHNIQUE 6: Continuous Flow Centrifugation */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4f46e5] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">6</span>
            </div>
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Continuous Flow Centrifugation</h2>
          </div>

          {/* Technique Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4">
            <Image
              src="/images/centrifuge/technique-continuous.png"
              alt="Continuous flow centrifugation process for industrial large-scale separation"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 896px"
            />
          </div>

          <div className="bg-blue-50/60 border-l-4 border-[#4f46e5] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">Definition</h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed italic">
              In continuous flow centrifugation, samples continuously enter and exit the centrifuge during operation. Unlike batch centrifugation where a fixed volume is loaded, spun, and unloaded, this technique allows for the ongoing processing of large volumes of material without the need to stop and restart the machine between cycles.
            </p>
          </div>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
            <h3 className="text-[#1a237e] font-bold text-sm mb-2">How It Works</h3>
            <div className="space-y-2">
              {[
                'The sample continuously flows into the spinning rotor through an inlet port',
                'Inside the rotor, centrifugal force separates the components as they travel through the spinning chamber',
                'Separated materials are collected separately through different outlet ports based on their density',
                'The process continues uninterrupted, allowing for the processing of very large volumes over time',
                'Flow rate and rotor speed can be adjusted to optimize separation efficiency for different sample types',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#7C3AED] mt-1 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-4">
              <h3 className="text-emerald-700 font-bold text-sm mb-2">Advantages</h3>
              <ul className="space-y-1.5">
                {['Processes large volumes continuously', 'No need to stop between runs', 'High throughput capacity', 'Efficient for industrial applications'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/60 border-l-4 border-red-300 rounded-r-lg p-4">
              <h3 className="text-red-700 font-bold text-sm mb-2">Disadvantages</h3>
              <ul className="space-y-1.5">
                {['Complex setup and operation', 'Expensive equipment', 'Requires skilled operators', 'Limited to specific applications'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-10" />

        {/* SAFETY SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#ea580c]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold">Safety Techniques During Centrifuge Operation</h2>
          </div>

          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-6">
            Proper safety techniques are essential to prevent accidents, equipment damage, and sample contamination. Always follow these safety procedures when operating a centrifuge machine.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Before Operation */}
            <div className="bg-orange-50/80 border-l-4 border-[#ea580c] rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-[#ea580c]" />
                <h3 className="text-[#ea580c] font-bold text-sm">Before Operation</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Inspect rotor for cracks or corrosion',
                  'Ensure the lid is properly locked before starting',
                  'Check all tubes for cracks or defects',
                  'Balance samples properly by weight',
                  'Verify rotor compatibility with speed settings',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* During Operation */}
            <div className="bg-red-50/80 border-l-4 border-red-500 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <h3 className="text-red-600 font-bold text-sm">During Operation</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Never open the lid while the rotor is spinning',
                  'Do not move or vibrate the centrifuge while running',
                  'Monitor for unusual sounds or vibrations',
                  'Stay within the rated speed limits at all times',
                  'Keep clear of the centrifuge during operation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Operation */}
            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#4169E1]" />
                <h3 className="text-[#4169E1] font-bold text-sm">After Operation</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Wait for the rotor to stop completely before opening',
                  'Clean any spills or breakage immediately',
                  'Disinfect the chamber after biohazardous use',
                  'Remove samples carefully to avoid disturbing pellets',
                  'Log the run details for maintenance tracking',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 mt-4">
            <p className="text-red-800 text-sm font-bold leading-relaxed">
              WARNING: A centrifuge rotor spinning at high speed contains enormous kinetic energy. Opening the lid during operation, using cracked tubes, or operating an unbalanced load can cause catastrophic failure resulting in serious injury. Always follow manufacturer safety guidelines and never bypass safety interlocks.
            </p>
          </div>
        </motion.section>

        {/* Closing Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Centrifuge techniques are essential methods used to separate substances efficiently in laboratories and industries. Different techniques such as differential centrifugation, density gradient centrifugation, ultracentrifugation, microcentrifugation, refrigerated centrifugation, and continuous flow centrifugation are chosen depending on the type of sample and desired result. Proper balancing, speed selection, rotor choice, and safety procedures are very important for effective and safe centrifuge operation.
            </p>
          </div>
        </motion.div>
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Sparkles } from 'lucide-react';

const aasTypes = [
  {
    title: 'Flame AAS (FAAS)',
    subtitle: 'Most Common Method',
    image: '/images/type-faas.png',
    imageAlt: 'Flame Atomic Absorption Spectroscopy instrument',
    content: 'Flame Atomic Absorption Spectroscopy uses a flame to atomize the sample. A pneumatic nebulizer converts the liquid sample into an aerosol, which is then introduced into the flame. The high temperature of the flame (2000-3000°C) breaks down chemical bonds and produces free atoms that absorb light.',
    details: [
      'Air-Acetylene Flame (~2300°C): Used for most elements like Cu, Zn, Fe, Ca, Mg.',
      'Nitrous Oxide-Acetylene Flame (~2900°C): Used for refractory elements like Al, Si, Ti.',
      'Detection limits typically in the ppm (parts per million) range.',
      'High sample throughput — can analyze hundreds of samples per day.',
    ],
    advantages: [
      'Simple and easy to operate',
      'Fast analysis time per sample',
      'Low cost per analysis',
      'Wide range of elements can be analyzed',
    ],
    limitations: [
      'Lower sensitivity compared to furnace AAS',
      'Requires relatively large sample volumes (2-5 mL)',
      'Chemical interferences can occur in the flame',
      'Not suitable for ultra-trace analysis',
    ],
  },
  {
    title: 'Graphite Furnace AAS (GFAAS)',
    subtitle: 'Higher Sensitivity',
    image: '/images/type-gfaas.png',
    imageAlt: 'Graphite Furnace AAS instrument with atomizer',
    content: 'Graphite Furnace AAS, also known as Electrothermal AAS (ETAAS), uses a graphite tube that is electrically heated to atomize the sample. The sample is introduced into the tube in microliter volumes and heated through a programmed temperature cycle for highly sensitive analysis.',
    details: [
      'Temperature programmed in stages: Drying → Ashing → Atomization → Cleaning.',
      'Detection limits in the ppb (parts per billion) range — 100-1000x more sensitive than FAAS.',
      'Small sample volumes required (5-50 μL).',
      'Lower sample throughput due to longer analysis time per sample.',
    ],
    advantages: [
      'Extremely high sensitivity (ppb level)',
      'Requires very small sample volumes',
      'Can analyze solid samples directly',
      'Minimal sample preparation for some matrices',
    ],
    limitations: [
      'Slower analysis than flame AAS',
      'More expensive to operate',
      'Requires skilled operators',
      'Matrix effects can be significant',
    ],
  },
  {
    title: 'Cold Vapor AAS (CVAAS)',
    subtitle: 'For Mercury Analysis',
    image: '/images/type-cvaas.png',
    imageAlt: 'Cold Vapor AAS mercury analysis system',
    content: 'Cold Vapor AAS is a specialized technique exclusively used for the determination of mercury. Mercury is reduced to its elemental form by a chemical reducing agent (typically tin(II) chloride or sodium borohydride), and the mercury vapor is swept into an absorption cell at room temperature.',
    details: [
      'No flame or furnace needed — mercury is measured at room temperature.',
      'Extremely low detection limits (< 0.1 ng/mL for mercury).',
      'Uses UV absorption at 253.7 nm (mercury resonance line).',
      'Commonly used for environmental water and soil analysis.',
    ],
    advantages: [
      'Ultra-trace detection of mercury',
      'Simple and reliable technique',
      'No high-temperature atomization needed',
      'Excellent selectivity for mercury',
    ],
    limitations: [
      'Only suitable for mercury analysis',
      'Chemical interferences from other elements',
      'Requires careful sample digestion',
      'Memory effects can occur between samples',
    ],
  },
  {
    title: 'Hydride Generation AAS (HGAAS)',
    subtitle: 'For Volatile Elements',
    image: '/images/type-hgaas.png',
    imageAlt: 'Hydride Generation AAS system',
    content: 'Hydride Generation AAS is used for elements that form volatile hydrides, such as arsenic (As), selenium (Se), antimony (Sb), bismuth (Bi), and tellurium (Te). The sample reacts with sodium borohydride to form the gaseous hydride, which is then swept into a heated absorption cell.',
    details: [
      'Elements analyzed: As, Se, Sb, Bi, Te, Sn, Ge, Pb (as plumbane).',
      'High transport efficiency — nearly 100% of analyte reaches the cell.',
      'Detection limits in the low ppb range.',
      'Reduces matrix interferences compared to direct nebulization.',
    ],
    advantages: [
      'Very high sensitivity for hydride-forming elements',
      'Separation of analyte from sample matrix',
      'Low detection limits (ppb range)',
      'Minimal spectral interferences',
    ],
    limitations: [
      'Limited to elements that form volatile hydrides',
      'Requires careful control of reaction conditions',
      'Interferences from transition metals',
      'Additional reagent preparation needed',
    ],
  },
];

export default function AASTypesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-20 h-20 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-32 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <Sparkles className="absolute bottom-20 right-10 w-3 h-3 text-purple-400/15 animate-float" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Header */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/aas/menu">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#4169E1] hover:text-[#1E3A8A] hover:shadow-lg transition-all duration-200 hover:-translate-x-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Title */}
      <div className="relative z-10 px-5 sm:px-8 pt-3 pb-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1a237e] text-2xl sm:text-3xl font-bold"
        >
          Types of AAS Machine and their Techniques
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-black/60 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed"
        >
          There are several types of AAS, each utilizing a different method for atomizing the sample. The choice of technique depends on the elements to be analyzed, the required sensitivity, and the sample matrix.
        </motion.p>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 pb-12 max-w-4xl mx-auto">
        {aasTypes.map((type, index) => (
          <motion.section
            key={type.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="mb-10"
          >
            {/* Type Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image
                src={type.image}
                alt={type.imageAlt}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center">
                    <span className="text-white text-[10px] sm:text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="text-[#1a237e] text-xs sm:text-sm font-bold truncate">{type.title}</span>
                  <span className="text-black/40 text-[10px] sm:text-xs hidden sm:inline">— {type.subtitle}</span>
                </span>
              </div>
            </div>

            {/* Definition */}
            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
              <h3 className="text-[#1a237e] font-bold text-base sm:text-lg mb-2">{type.title}</h3>
              <p className="text-black/70 text-sm leading-relaxed">{type.content}</p>
            </div>

            {/* Key Details */}
            <div className="mb-4">
              <h4 className="text-black font-bold text-sm mb-3">Key Details</h4>
              <ul className="space-y-2">
                {type.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                    <span className="text-black/75 text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-green-50/80 border-l-4 border-emerald-500 rounded-r-lg p-4 mb-4">
              <h4 className="text-emerald-700 font-bold text-sm mb-2">Advantages</h4>
              <ul className="space-y-1.5">
                {type.advantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-black font-bold text-sm mb-2">Limitations</h4>
              <ul className="space-y-1.5">
                {type.limitations.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-black/65 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider between types */}
            {index < aasTypes.length - 1 && (
              <div className="h-px bg-gray-200 mt-10" />
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import LearningObjectives from '@/components/phase-one/learning-objectives';

export default function AASOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-20 h-20 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-32 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Header */}
      <div className="relative z-10 px-5 sm:px-8 pt-5 pb-2">
        <Link href="/aas/menu">
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
      <div className="relative z-10 px-5 sm:px-8 pt-3 pb-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1a237e] text-2xl sm:text-3xl font-bold"
        >
          What is AAS Machine?
        </motion.h1>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 pb-12 max-w-4xl mx-auto">
        <LearningObjectives
          estimatedTime="10-15 minutes"
          objectives={[
            'Define AAS and distinguish it from the AAS instrument.',
            'Explain why free atoms absorb element-specific wavelengths.',
            'Identify common fields where AAS is used.',
            'Recognize that practical AAS work requires SOPs and supervision.',
          ]}
        />

        {/* First image - full width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          <Image
            src="/images/aas-definition-1.png"
            alt="AAS Machine setup with lab technicians performing sample preparation and analysis"
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
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 tracking-wide">INTRODUCTION</h2>
          <div className="space-y-4 text-black/80 text-sm sm:text-base leading-relaxed">
            <p>
              Atomic Absorption Spectroscopy (AAS) is an analytical technique used in laboratories to determine the concentration of specific metal elements in a sample. It is widely used in fields such as pharmacy, chemistry, environmental science, food analysis, and medical research.
            </p>
            <p>
              The AAS machine works by measuring the amount of light absorbed by free atoms of an element in the gaseous state. Since every element absorbs light at a unique wavelength, the machine can identify and measure the amount of that element present in a sample.
            </p>
            <p>
              For pharmacy students and laboratory scientists, AAS is important because it helps in the analysis of trace metals in drugs, biological samples, and environmental samples.
            </p>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* DEFINITIONS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-6 tracking-wide">DEFINITIONS</h2>

          {/* Definition 1 */}
          <div className="mb-8">
            <h3 className="text-black font-bold text-base sm:text-lg mb-3">
              1. Atomic Absorption Spectroscopy (AAS)
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
              Atomic Absorption Spectroscopy (AAS) is an analytical technique used to determine the concentration of metallic elements in a sample by measuring the amount of light absorbed by free atoms in the gaseous state.
            </p>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
              The technique is based on the principle that atoms of different elements absorb light at specific wavelengths. When a beam of light passes through a cloud of atoms of the element being analyzed, some of the light is absorbed. The amount of absorbed light is proportional to the concentration of that element in the sample.
            </p>

            {/* Explanation callout */}
            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Explanation</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Atomic Absorption Spectroscopy refers specifically to the scientific technique or method used to analyze metals. It describes the concept and theoretical approach used for elemental analysis. The term &quot;spectroscopy&quot; refers to the study of how matter interacts with electromagnetic radiation. In AAS, the interaction involves absorption of light by atoms.
              </p>
            </div>

            {/* Example */}
            <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
              <h4 className="text-[#7C3AED] font-bold text-sm mb-2">Example of Use</h4>
              <p className="text-black/70 text-sm leading-relaxed italic">
                In pharmaceutical laboratories, Atomic Absorption Spectroscopy can be used to determine the amount of iron, zinc, calcium, lead, or cadmium present in a drug sample.
              </p>
            </div>

            {/* Key Characteristics */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-black font-bold text-sm mb-3">Key Characteristics</h4>
              <ul className="space-y-2">
                {[
                  'It is a technique or analytical method.',
                  'Used for detecting trace metals in samples.',
                  'Based on light absorption by free atoms.',
                  'Used in pharmaceutical, environmental, clinical, and food laboratories.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Definition 2 */}
          <div className="mb-8">
            <h3 className="text-black font-bold text-base sm:text-lg mb-3">
              2. Atomic Absorption Spectrophotometer (AAS)
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
              An Atomic Absorption Spectrophotometer (AAS) is a highly sensitive analytical instrument/device/equipment used to determine the concentration of specific metal elements in a sample. It operates by atomizing samples (using flame or graphite furnace) and measuring the amount of light absorbed by ground-state atoms, which is proportional to the concentration of the analyte.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Explanation</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                While Atomic Absorption Spectroscopy describes the technique, the Atomic Absorption Spectrophotometer is the device that carries out the technique.
              </p>
            </div>

            <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
              <h4 className="text-[#7C3AED] font-bold text-sm mb-2">Example</h4>
              <p className="text-black/70 text-sm leading-relaxed italic">
                When a laboratory technician places a sample into the machine and runs an analysis, the Atomic Absorption Spectrophotometer is the equipment performing the measurement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-black font-bold text-sm mb-3">Key Characteristics</h4>
              <ul className="space-y-2">
                {[
                  'It is a physical instrument.',
                  'It performs the Atomic Absorption Spectroscopy technique.',
                  'It measures light absorption and converts it to concentration data.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Definition 3 */}
          <div className="mb-8">
            <h3 className="text-black font-bold text-base sm:text-lg mb-3">
              3. Atomic Absorption Spectrometry
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
              Atomic Absorption Spectrometry refers to the analytical measurement process or quantitative determination of elements using atomic absorption techniques. It is the overall analytical procedure that includes sample preparation, measurement of absorption, calibration, and calculation of element concentration.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Explanation</h4>
              <p className="text-black/70 text-sm leading-relaxed mb-3">
                The term spectrometry emphasizes the measurement aspect of spectroscopy. While spectroscopy focuses on the interaction between light and atoms, spectrometry focuses on the quantitative measurement of that interaction.
              </p>
              <div className="space-y-1.5 mt-3">
                <p className="text-black/70 text-sm"><span className="font-semibold text-[#1a237e]">Spectroscopy</span> → Study of interaction between light and matter</p>
                <p className="text-black/70 text-sm"><span className="font-semibold text-[#1a237e]">Spectrometry</span> → Measurement and quantification of that interaction</p>
                <p className="text-black/70 text-sm"><span className="font-semibold text-[#1a237e]">Spectrophotometer</span> → The equipment (Machine) used for Spectroscopy and Spectrometry</p>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
              Atomic Absorption Spectrometry therefore refers to the practical analytical method used to measure elemental concentration using the AAS technique and instrument.
            </p>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-black font-bold text-sm mb-3">Key Characteristics</h4>
              <ul className="space-y-2">
                {[
                  'Focuses on quantitative measurement of elements.',
                  'Includes calibration and concentration determination.',
                  'Used in analytical laboratories for precise elemental analysis.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* Second image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          <Image
            src="/images/aas-definition-2.png"
            alt="Lab technician inserting sample into AAS machine with monitor showing absorption spectrum"
            fill
            className="object-cover"
            sizes="90vw"
          />
        </motion.div>

        {/* PRINCIPLE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Principle of Atomic Absorption Spectroscopy</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            The working principle of AAS is based on the Beer-Lambert Law, which states that the amount of light absorbed by a substance is proportional to its concentration.
          </p>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5">
            The principle can be explained in the following steps:
          </p>

          <div className="space-y-4 mb-6">
            {[
              { step: '1', text: 'The sample is first converted into free atoms in gaseous form using heat.' },
              { step: '2', text: 'A light source specific to the element being tested passes light through these atoms.' },
              { step: '3', text: 'The atoms absorb part of the light.' },
              { step: '4', text: 'The detector measures how much light is absorbed.' },
              { step: '5', text: 'The machine converts the absorbed light into a concentration value.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white text-xs font-bold">{item.step}</span>
                </div>
                <p className="text-black/80 text-sm sm:text-base leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            Each element absorbs light at a specific wavelength, which allows the instrument to determine the exact element present.
          </p>

          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
            <h4 className="text-[#7C3AED] font-bold text-sm mb-2">Example:</h4>
            <ul className="space-y-1.5">
              {[
                'Calcium absorbs light at a specific wavelength.',
                'Iron absorbs at another wavelength.',
                'Zinc absorbs at another wavelength.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* LABELED DIAGRAM */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 text-center">A Well Labeled AAS Machine</h2>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-50">
            <Image
              src="/images/aas-labeled-diagram.png"
              alt="A well labeled AAS Machine diagram"
              fill
              className="object-contain p-4"
              sizes="90vw"
            />
          </div>
          {/* Component labels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {[
              'Hollow Cathode Lamp',
              'Atomizer (Flame/Graphite Furnace)',
              'Monochromator (Wavelength Selector)',
              'Detector',
              'Exhaust System',
              'Gas Controls (Fuel Gas, Oxidant Gas)',
              'Sample Compartment',
              'Nebulizer & Spray Chamber',
              'Waste Container',
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#4169E1] flex-shrink-0" />
                <span className="text-black/70 text-xs sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

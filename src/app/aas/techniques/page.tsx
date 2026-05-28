'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';

function SectionBox({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <h3 className="text-black font-bold text-base sm:text-lg mb-3">{title}</h3>
      {children}
    </motion.section>
  );
}

function CalloutBox({ label, color, children }: { label: string; color: 'blue' | 'purple' | 'gray'; children: React.ReactNode }) {
  const styles = {
    blue: 'bg-blue-50/80 border-[#4169E1]',
    purple: 'bg-purple-50/80 border-[#7C3AED]',
    gray: 'bg-gray-50 border-gray-200',
  };
  const labelColor = { blue: 'text-[#1a237e]', purple: 'text-[#7C3AED]', gray: 'text-black' };
  return (
    <div className={`${styles[color]} border-l-4 rounded-r-lg p-4 mb-4`}>
      {label && <h4 className={`${labelColor[color]} font-bold text-sm mb-2`}>{label}</h4>}
      {children}
    </div>
  );
}

export default function AASTechniquesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorations */}
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
          Advance AAS Machine Techniques
        </motion.h1>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 pb-12 max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4">Advanced Techniques Related to Atomic Absorption Spectroscopy</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            To overcome the limitations of traditional AAS, more advanced analytical techniques have been developed. Among the most important advanced techniques are:
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
              <span className="text-black/80 text-sm sm:text-base leading-relaxed"><strong>1.</strong> Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
              <span className="text-black/80 text-sm sm:text-base leading-relaxed"><strong>2.</strong> Inductively Coupled Plasma Mass Spectrometry (ICP-MS)</span>
            </div>
          </div>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed">
            Both techniques use inductively coupled plasma (ICP) as the atomization and excitation source. Plasma is an extremely hot ionized gas that can reach temperatures of 6,000–10,000 K, which is significantly higher than the temperature of a flame used in AAS. Because of this high temperature, ICP-based techniques provide better atomization, higher sensitivity, and multi-element analysis capability.
          </p>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* Section 1: ICP-OES */}
        <SectionBox title="1. Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES)" delay={0.2}>
          {/* ICP-OES Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-6"
          >
            <Image
              src="/images/icp-oes-lab.png"
              alt="ICP-OES instrument in laboratory setting"
              fill
              className="object-cover"
              sizes="90vw"
            />
          </motion.div>

          <CalloutBox label="Definition" color="blue">
            <p className="text-black/70 text-sm leading-relaxed">
              Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES), also known as ICP-AES (Atomic Emission Spectroscopy), is an advanced analytical technique used to detect and measure multiple elements in a sample by analyzing the light emitted by excited atoms and ions in a plasma. Unlike AAS, which measures light absorption, ICP-OES measures light emission from excited atoms.
            </p>
          </CalloutBox>

          <CalloutBox label="Principle" color="purple">
            <p className="text-black/70 text-sm leading-relaxed">
              The working principle of ICP-OES is based on atomic emission spectroscopy. When atoms are exposed to very high temperatures in the plasma, they become excited and move to higher energy levels. When these excited atoms return to their ground state, they emit light at specific wavelengths characteristic of each element. The intensity of the emitted light is proportional to the concentration of the element in the sample.
            </p>
          </CalloutBox>

          {/* Components */}
          <h4 className="text-black font-bold text-sm mb-3">Components of an ICP-OES Instrument</h4>
          <p className="text-black/70 text-sm leading-relaxed mb-3">An ICP-OES instrument consists of several key components:</p>
          <div className="space-y-2.5 mb-5">
            {[
              { num: '1', title: 'Sample Introduction System', desc: 'Includes the nebulizer and spray chamber, which convert the liquid sample into a fine aerosol.' },
              { num: '2', title: 'Plasma Torch', desc: 'The plasma torch is where the plasma is generated using argon gas and radio-frequency energy.' },
              { num: '3', title: 'Radio Frequency (RF) Generator', desc: 'The RF generator provides electromagnetic energy to maintain the plasma.' },
              { num: '4', title: 'Spectrometer', desc: 'The spectrometer separates the emitted light into its individual wavelengths.' },
              { num: '5', title: 'Detector', desc: 'The detector measures the intensity of emitted light from the elements.' },
              { num: '6', title: 'Data Processing System', desc: 'The computer processes the signals and calculates element concentrations.' },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold">{item.num}</span>
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{item.title}</p>
                  <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <h4 className="text-black font-bold text-sm mb-3">How ICP-OES Works</h4>
          <p className="text-black/70 text-sm leading-relaxed mb-3">The analysis process involves several steps:</p>
          <div className="space-y-2 mb-5">
            {[
              'The liquid sample is introduced into the nebulizer.',
              'The nebulizer converts the liquid into a fine aerosol.',
              'The aerosol enters the plasma torch.',
              'Argon plasma at very high temperature excites the atoms.',
              'Excited atoms emit light at characteristic wavelengths.',
              'The spectrometer separates the emitted light.',
              'The detector measures the intensity of each wavelength.',
              'The computer calculates the concentration of elements.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4169E1] text-[10px] font-bold">{i + 1}</span>
                </div>
                <p className="text-black/70 text-sm leading-relaxed pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          {/* Applications */}
          <CalloutBox label="Applications of ICP-OES" color="gray">
            <p className="text-black/70 text-sm leading-relaxed mb-2">ICP-OES is widely used in many fields including:</p>
            <ul className="space-y-1.5">
              {['Environmental monitoring (water and soil analysis)', 'Pharmaceutical quality control', 'Food and beverage analysis', 'Geological analysis', 'Industrial metal analysis'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>

          {/* Advantages */}
          <CalloutBox label="Advantages of ICP-OES" color="blue">
            <ul className="space-y-1.5">
              {['Ability to analyze multiple elements simultaneously', 'High sensitivity and accuracy', 'Wide dynamic range', 'Faster analysis compared to AAS', 'High plasma temperature reduces chemical interference'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>

          {/* Disadvantages */}
          <CalloutBox label="Disadvantages of ICP-OES" color="purple">
            <ul className="space-y-1.5">
              {['Expensive instrumentation', 'Requires skilled operators', 'High operating cost due to argon gas consumption'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>

          {/* Limitations */}
          <CalloutBox label="Limitations" color="gray">
            <ul className="space-y-1.5">
              {['Higher maintenance requirements', 'Complex instrument setup', 'Not as sensitive as ICP-MS for ultra-trace analysis'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>
        </SectionBox>

        <div className="h-px bg-gray-200 mb-8" />

        {/* Section 2: ICP-MS */}
        <SectionBox title="2. Inductively Coupled Plasma Mass Spectrometry (ICP-MS)" delay={0.3}>
          {/* ICP-MS Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-6"
          >
            <Image
              src="/images/icp-ms-lab.png"
              alt="ICP-MS instrument in laboratory setting"
              fill
              className="object-cover"
              sizes="90vw"
            />
          </motion.div>

          <CalloutBox label="Definition" color="blue">
            <p className="text-black/70 text-sm leading-relaxed">
              Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is a highly sensitive analytical technique used to detect and quantify trace and ultra-trace elements by measuring the mass-to-charge ratio of ions. It is considered one of the most powerful techniques for elemental analysis.
            </p>
          </CalloutBox>

          <CalloutBox label="Principle" color="purple">
            <p className="text-black/70 text-sm leading-relaxed">
              ICP-MS works by ionizing atoms in a plasma and then separating the ions based on their mass-to-charge ratio (m/z) using a mass spectrometer. The number of ions detected corresponds to the concentration of the element in the sample.
            </p>
          </CalloutBox>

          {/* Components */}
          <h4 className="text-black font-bold text-sm mb-3">Components of an ICP-MS Instrument</h4>
          <p className="text-black/70 text-sm leading-relaxed mb-3">The major components include:</p>
          <div className="space-y-2.5 mb-5">
            {[
              { num: '1', title: 'Sample Introduction System', desc: 'Includes nebulizer and spray chamber.' },
              { num: '2', title: 'Plasma Torch', desc: 'Generates argon plasma to ionize the sample.' },
              { num: '3', title: 'Interface System', desc: 'Transfers ions from the plasma into the mass spectrometer.' },
              { num: '4', title: 'Ion Optics', desc: 'Focuses and directs ions into the mass analyzer.' },
              { num: '5', title: 'Mass Analyzer', desc: 'Separates ions according to their mass-to-charge ratio.' },
              { num: '6', title: 'Detector', desc: 'Detects ions and converts them into electrical signals.' },
              { num: '7', title: 'Data Processing System', desc: 'Calculates elemental concentrations.' },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold">{item.num}</span>
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{item.title}</p>
                  <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <h4 className="text-black font-bold text-sm mb-3">How ICP-MS Works</h4>
          <p className="text-black/70 text-sm leading-relaxed mb-3">The process occurs in several stages:</p>
          <div className="space-y-2 mb-5">
            {[
              'Sample is introduced as an aerosol.',
              'Aerosol enters the plasma torch.',
              'Plasma ionizes the atoms into positively charged ions.',
              'Ions pass through the interface region.',
              'Ion optics focus the ion beam.',
              'The mass analyzer separates ions based on mass.',
              'The detector counts the ions.',
              'The computer calculates the concentration.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#7C3AED] text-[10px] font-bold">{i + 1}</span>
                </div>
                <p className="text-black/70 text-sm leading-relaxed pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          {/* Applications */}
          <CalloutBox label="Applications of ICP-MS" color="gray">
            <p className="text-black/70 text-sm leading-relaxed mb-2">ICP-MS is used in:</p>
            <ul className="space-y-1.5">
              {['Trace metal analysis', 'Environmental monitoring', 'Pharmaceutical research', 'Clinical toxicology', 'Geological exploration', 'Food safety analysis', 'Isotope analysis'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>

          {/* Advantages */}
          <CalloutBox label="Advantages of ICP-MS" color="blue">
            <ul className="space-y-1.5">
              {['Extremely high sensitivity', 'Ability to detect ultra-trace elements (parts per trillion)', 'Multi-element analysis', 'Fast analysis time', 'Isotope ratio measurement capability'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>

          {/* Disadvantages */}
          <CalloutBox label="Disadvantages of ICP-MS" color="purple">
            <ul className="space-y-1.5">
              {['Very expensive instrumentation', 'High operating and maintenance cost', 'Requires highly trained personnel', 'Sensitive to contamination'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>

          {/* Limitations */}
          <CalloutBox label="Limitations" color="gray">
            <ul className="space-y-1.5">
              {['Spectral interference may occur', 'Requires clean laboratory conditions', 'Complex instrument calibration'].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CalloutBox>
        </SectionBox>
      </div>
    </div>
  );
}

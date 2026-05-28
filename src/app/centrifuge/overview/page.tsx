'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';

export default function CentrifugeOverviewPage() {
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
      <div className="relative z-10 px-5 sm:px-8 pt-3 pb-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1a237e] text-2xl sm:text-3xl font-bold"
        >
          Comprehensive Overview of Centrifuge Machine
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
            src="/images/centrifuge-hero.png"
            alt="Laboratory centrifuge machine with lid open showing sample tubes"
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
              The centrifuge machine is one of the most important and widely used laboratory and industrial instruments in the world. Its origins date back to the late 17th century, but modern centrifuge technology has evolved into a sophisticated piece of equipment that plays a critical role across multiple fields — from medicine and biology to food processing, chemical engineering, and even aerospace research.
            </p>
            <p>
              The fundamental principle behind a centrifuge is deceptively simple: Spin things fast enough, and differences in density or mass will cause components to separate. This principle, known as <strong>centrifugation</strong>, mimics and amplifies the effect of gravity, making it possible to separate substances that would otherwise take days (or might never separate) under normal gravitational conditions.
            </p>
            <p>
              At its core, the centrifuge was born out of necessity. Scientists and engineers needed a faster, more efficient way to separate mixtures — whether blood components for medical diagnosis, cream from milk in the dairy industry, or uranium isotopes for nuclear applications. Today, centrifuges range from tiny microcentrifuges that fit on a laboratory bench to massive industrial centrifuges the size of a room.
            </p>
          </div>
        </motion.section>

        {/* Key Applications */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <h3 className="text-black font-bold text-base sm:text-lg mb-3">Key Applications</h3>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
            The centrifuge has become indispensable in:
          </p>
          <div className="space-y-2.5">
            {[
              'Medicine — separating blood into plasma, platelets, and red cells',
              'Biochemistry & Molecular Biology — isolating DNA, proteins, and cell organelles',
              'Food & Beverage Industry — clarifying juices, separating cream',
              'Pharmaceuticals — purifying drugs and vaccines',
              'Environmental Science — wastewater treatment',
              'Nuclear Industry — uranium enrichment',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                <span className="text-black/75 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* DEFINITION */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 tracking-wide">DEFINITION OF THE CENTRIFUGE MACHINE</h2>
          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
            <p className="text-black/80 text-sm leading-relaxed mb-4">
              A centrifuge machine is a mechanical device that uses centrifugal force generated by rapid rotation around a fixed axis to separate components of a mixture based on differences in their density, size, shape, or mass.
            </p>
            <p className="text-black/80 text-sm leading-relaxed">
              When a mixture is placed in a centrifuge and spun at high speed, denser or heavier particles experience a greater outward centrifugal force and move toward the bottom or periphery of the container (called the <strong>pellet</strong>), while lighter or less dense materials remain near the top or center (called the <strong>supernatant</strong>).
            </p>
          </div>
        </motion.section>

        {/* KEY FORMULA */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <h3 className="text-black font-bold text-base sm:text-lg mb-3">Key Formula</h3>
          <p className="text-black/80 text-sm leading-relaxed mb-4">
            The centrifugal force generated is expressed as:
          </p>
          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-5 mb-4 text-center">
            <p className="text-[#1a237e] text-xl sm:text-2xl font-bold mb-3">F = m&#969;&#178;r</p>
            <div className="space-y-1.5 text-left text-sm text-black/70">
              <p><span className="font-bold text-[#1a237e]">F</span> = Centrifugal force</p>
              <p><span className="font-bold text-[#1a237e]">m</span> = Mass of the particle</p>
              <p><span className="font-bold text-[#1a237e]">&#969;</span> = Angular velocity (radians per second)</p>
              <p><span className="font-bold text-[#1a237e]">r</span> = Radius of rotation</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-black/70 text-sm leading-relaxed">
              The effectiveness of a centrifuge is often expressed as <strong>Relative Centrifugal Force (RCF)</strong> or &quot;g-force&quot;, which compares the centrifugal acceleration to standard gravitational acceleration (9.8 m/s&#178;). Modern ultracentrifuges can generate forces exceeding <strong>1,000,000 x g</strong>.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* TYPES OF CENTRIFUGES TABLE */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 tracking-wide">TYPES OF CENTRIFUGES (BY FUNCTION)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Speed Range</th>
                  <th className="text-left px-4 py-3 font-semibold">Common Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Low-speed centrifuge', 'Up to 5,000 RPM', 'Separating cells, blood'],
                  ['High-speed centrifuge', '5,000 - 30,000 RPM', 'Bacteria, cell debris'],
                  ['Ultracentrifuge', '30,000 - 150,000 RPM', 'Viruses, DNA, proteins'],
                  ['Microcentrifuge', 'Up to 15,000 RPM', 'Small sample volumes'],
                  ['Industrial centrifuge', 'Varies', 'Food, chemical, wastewater'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-black/80">{row[0]}</td>
                    <td className="px-4 py-3 text-black/60">{row[1]}</td>
                    <td className="px-4 py-3 text-black/60">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* CHARACTERISTICS */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 tracking-wide">CHARACTERISTICS OF THE CENTRIFUGE MACHINE</h2>

          {/* A. Structural Components */}
          <div className="mb-6">
            <h3 className="text-black font-bold text-base sm:text-lg mb-3">A. Structural Components</h3>
            <div className="space-y-2.5">
              {[
                { name: 'Rotor', desc: 'The rotating element that holds the sample containers. It is the heart of the centrifuge and comes in different designs (fixed-angle, swinging-bucket, vertical, etc.).' },
                { name: 'Motor', desc: 'Drives the rotor at specified speeds; can be electric or air-driven in some models.' },
                { name: 'Chamber/Bowl', desc: 'The enclosed space where the rotor spins, often vacuum-sealed in ultracentrifuges.' },
                { name: 'Drive Shaft', desc: 'Connects the motor to the rotor.' },
                { name: 'Control Panel', desc: 'Allows the operator to set speed (RPM), time, temperature, and acceleration/deceleration rates.' },
                { name: 'Lid & Safety Lock', desc: 'Prevents opening during operation for safety.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-black/80 font-semibold text-sm">{item.name}</p>
                    <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B. Operational Characteristics */}
          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-6">
            <h3 className="text-[#1a237e] font-bold text-sm mb-3">B. Operational Characteristics</h3>
            <div className="space-y-2">
              {[
                'Speed (RPM): Centrifuges can range from a few hundred RPM to over 150,000 RPM in ultracentrifuges.',
                'G-Force Generation: Can generate from simple 100xg to over 1,000,000xg.',
                'Temperature Control: Refrigerated centrifuges maintain low temperatures (often 4°C) to preserve biological samples.',
                'Separation Efficiency: Highly efficient — capable of separating particles as small as a few nanometers.',
                'Run Time: Can be programmed for precise durations, from seconds to hours.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* C. Physical Characteristics */}
          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-6">
            <h3 className="text-[#7C3AED] font-bold text-sm mb-3">C. Physical Characteristics</h3>
            <div className="space-y-2">
              {[
                'Balance Sensitivity: Samples must be balanced opposite each other; an imbalanced rotor can cause dangerous vibrations.',
                'Rotor Geometry: Fixed-angle rotors keep tubes at a set angle; swinging-bucket rotors allow tubes to swing outward horizontally during spinning.',
                'Vibration Dampening: High-quality centrifuges have built-in dampening systems to reduce vibration and noise.',
                'Material Durability: Rotors are typically made of aluminum, titanium, or carbon fiber to withstand high centrifugal stress.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* D. Safety Characteristics */}
          <div className="bg-green-50/80 border-l-4 border-emerald-500 rounded-r-lg p-4">
            <h3 className="text-emerald-700 font-bold text-sm mb-3">D. Safety Characteristics</h3>
            <div className="space-y-2">
              {[
                'Imbalance Detection: Automatic shutdown if imbalance is detected.',
                'Over-speed Protection: Prevents the rotor from exceeding safe RPM limits.',
                'Lid Interlock: Ensures the lid cannot be opened while the rotor is spinning.',
                'Refrigeration Systems: Prevents heat buildup during prolonged high-speed runs.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* ADVANTAGES */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 tracking-wide">ADVANTAGES OF THE CENTRIFUGE MACHINE</h2>
          <div className="space-y-3">
            {[
              { title: 'High Separation Efficiency', desc: 'Centrifuges can separate particles that cannot be separated by filtration or sedimentation alone — even at the nanoscale level.' },
              { title: 'Speed', desc: 'Separation that would take hours or days under gravity takes only minutes in a centrifuge.' },
              { title: 'Versatility', desc: 'Used across medicine, biology, food processing, chemistry, and industry — applicable to liquids, semi-solids, and even gases.' },
              { title: 'Handles Small Sample Volumes', desc: 'Microcentrifuges can work with volumes as small as 0.2 mL, ideal for precious or rare biological samples.' },
              { title: 'Preservation of Sample Integrity', desc: 'Refrigerated centrifuges keep temperature-sensitive biological samples (enzymes, proteins, DNA) stable during separation.' },
              { title: 'Automation & Precision', desc: 'Modern centrifuges offer programmable settings for speed, time, temperature, and g-force, ensuring reproducible, precise results.' },
              { title: 'Continuous Operation', desc: 'Industrial centrifuges can operate continuously, making large-scale processing possible in manufacturing.' },
              { title: 'Non-destructive Separation', desc: 'Many centrifugation methods separate components without chemically altering them, preserving their biological or chemical activity.' },
              { title: 'Wide Speed Range', desc: 'The broad range from low-speed to ultracentrifugation means one lab can own multiple centrifuges tailored to specific tasks.' },
              { title: 'Cost-effective Long-term', desc: 'Despite the initial cost, centrifuges reduce the need for expensive reagents used in alternative separation techniques.' },
            ].map((item, i) => (
              <div key={i} className="bg-green-50/60 border-l-4 border-emerald-400 rounded-r-lg p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-emerald-800 font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* DISADVANTAGES */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-4 tracking-wide">DISADVANTAGES OF THE CENTRIFUGE MACHINE</h2>
          <div className="space-y-3">
            {[
              { title: 'High Initial Cost', desc: 'Quality centrifuges — especially ultracentrifuges — are expensive to purchase, with some models costing tens of thousands of dollars.' },
              { title: 'Maintenance Requirements', desc: 'Rotors and seals require regular inspection, cleaning, and replacement to avoid mechanical failure.' },
              { title: 'Risk of Aerosol Generation', desc: 'If a tube breaks inside the centrifuge (especially with infectious samples), dangerous aerosols can be released.' },
              { title: 'Rotor Imbalance Hazard', desc: 'Improper loading causes imbalance, which can lead to violent vibrations, rotor failure, or serious injury.' },
              { title: 'Heat Generation', desc: 'High-speed spinning generates heat, which can degrade temperature-sensitive samples unless refrigeration is used.' },
              { title: 'Limited to Density-Based Separation', desc: 'Centrifugation works best when components differ in density; mixtures with similar densities are difficult to separate.' },
              { title: 'Skilled Operation Required', desc: 'Improper use — wrong speed, wrong rotor, incorrect balance — can ruin experiments or damage the machine.' },
              { title: 'Not Suitable for All Sample Types', desc: 'Some delicate biological structures (e.g., fragile cell membranes) can be damaged or disrupted by the high forces.' },
              { title: 'Energy Consumption', desc: 'High-speed and ultracentrifuges consume significant electrical energy, especially during prolonged runs.' },
              { title: 'Batch Limitations', desc: 'Most laboratory centrifuges process limited sample volumes per run, which can be a bottleneck for high-throughput workflows.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-black font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-black/65 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* DIAGRAM SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-2 text-center">CENTRIFUGE MACHINE DIAGRAM</h2>
          <p className="text-black/60 text-xs sm:text-sm text-center mb-4">External View &bull; Internal Cross-Section &bull; Working Principle</p>

          {/* Comprehensive Labeled Diagram */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-50">
            <Image
              src="/images/centrifuge-diagram.png"
              alt="Centrifuge machine diagram showing external view, internal cross-section, and working principle"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Component labels - External Parts */}
          <h3 className="text-[#1a237e] font-bold text-sm sm:text-base mb-3">External Components</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {[
              'Lid Latch & Safety Interlock',
              'Lid Gasket (Cooling System)',
              'Centrifuge Housing',
              'Control Panel (Display Screen)',
              'Operation Buttons',
              'Status LEDs',
              'Power Switch',
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#4169E1] flex-shrink-0" />
                <span className="text-black/70 text-xs sm:text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Component labels - Internal Parts */}
          <h3 className="text-[#1a237e] font-bold text-sm sm:text-base mb-3">Internal Components</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {[
              'Motor & Central Drive',
              'Rotor Hub & Drive Shaft',
              'Bucket / Adaptor',
              'Centrifuge Tube (15mL Conical)',
              'Centrifugation Chamber',
              'Refrigeration Coil (Cool System)',
              'Imbalance Sensor',
              'Central Shaft',
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0" />
                <span className="text-black/70 text-xs sm:text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Working Principle Summary */}
          <h3 className="text-[#1a237e] font-bold text-sm sm:text-base mb-3">Working Principle</h3>
          <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4 mb-4">
            <div className="space-y-3">
              {[
                { step: '1', title: 'Before Spinning', text: 'Sample tube contains a homogeneous mixture of substances.' },
                { step: '2', title: 'During Spinning', text: 'Centrifugal force (Fc) acts on the sample, causing sedimentation — denser particles are pushed outward.' },
                { step: '3', title: 'After Spinning', text: 'Components separate into layers: Supernatant (Plasma) on top, Buff Coat (WBCs) in the middle, and Pellet (RBCs) at the bottom.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white text-xs font-bold">{item.step}</span>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[#1a237e] font-bold text-sm">{item.title}</p>
                    <p className="text-black/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Formula Reminder */}
          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
            <p className="text-black/70 text-sm leading-relaxed">
              <span className="font-bold text-[#1a237e]">Remember:</span> The centrifugal force is calculated as <span className="font-bold text-[#1a237e]">F = m&#969;&#178;r</span>, where <strong>m</strong> is mass, <strong>&#969;</strong> is angular velocity, and <strong>r</strong> is the radius of rotation. The effectiveness is measured as <strong>Relative Centrifugal Force (RCF)</strong> or g-force.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* FOOTER / CLOSING */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              The centrifuge machine remains one of the cornerstone tools of modern science and industry. Its ability to rapidly and precisely separate complex mixtures has made it irreplaceable in laboratories and factories worldwide. Understanding its characteristics, benefits, and limitations is essential for anyone working in the life sciences, engineering, or industrial processing fields.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

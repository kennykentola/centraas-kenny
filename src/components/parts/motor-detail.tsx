'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowLeft, Star, Zap, ShieldCheck, AlertTriangle } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function MotorDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* ── Top accent bar ── */}
      <div className="h-2 w-full bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* ── Floating back button ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/centrifuge/parts"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowLeft className="w-5 h-5 text-[#1a237e]" />
        </Link>
      </motion.div>

      {/* ── Decorative floating circles ── */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#7C3AED]/10 animate-float pointer-events-none" />
      <div className="absolute top-60 left-6 w-20 h-20 rounded-full bg-[#4169E1]/10 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 right-16 w-24 h-24 rounded-full bg-[#7C3AED]/8 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* ── Decorative stars ── */}
      <Star className="absolute top-28 left-1/4 w-4 h-4 text-[#7C3AED]/30 animate-float" />
      <Star className="absolute top-44 right-1/3 w-3 h-3 text-[#4169E1]/25 animate-float" style={{ animationDelay: '0.5s' }} />
      <Star className="absolute top-72 left-[15%] w-5 h-5 text-[#7C3AED]/20 animate-float" style={{ animationDelay: '1.5s' }} />
      <Star className="absolute bottom-60 right-[10%] w-4 h-4 text-[#4169E1]/20 animate-float" style={{ animationDelay: '2.5s' }} />

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-12 pt-24 relative z-10">
        {/* ── Title ── */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a237e] tracking-tight text-center"
          >
            ELECTRIC MOTOR
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-sm sm:text-base text-gray-500 text-center mt-2"
          >
            Centrifuge Part Detail
          </motion.p>
        </motion.div>

        {/* ════════════════════════════════════════════
            1. HERO IMAGE
        ════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-8"
        >
          <motion.div variants={fadeUp} custom={0} className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/part-centrifuge-motor.png"
              alt="Electric Motor"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════════
            2. ELECTRIC MOTOR OVERVIEW
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#4169E1]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a237e]">ELECTRIC MOTOR</h2>
          </motion.div>

          <motion.p variants={fadeUp} custom={1} className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
            The motor provides the rotational power needed to spin the rotor. The motor is the
            power unit that drives the rotor and generates the rotational energy needed for
            centrifugation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-4 rounded-xl bg-blue-50 border-l-4 border-[#4169E1] p-4 sm:p-5"
          >
            <p className="text-xs sm:text-sm font-semibold text-[#1a237e] mb-1">What it does:</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              It converts electrical energy into mechanical rotational energy, spinning the rotor
              at the precise speed set by the operator.
            </p>
          </motion.div>
        </motion.section>

        {/* ════════════════════════════════════════════
            3. IMAGE GALLERY
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Image Gallery
          </motion.h2>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: '/images/motor-brushed.png', label: 'Brushed Motor' },
              { src: '/images/motor-brushless.png', label: 'Brushless Motor' },
              { src: '/images/motor-housing.png', label: 'Motor Housing' },
            ].map((img, i) => (
              <motion.div key={img.label} variants={fadeUp} custom={i + 1} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 896px) 33vw, 280px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent p-2 sm:p-3">
                  <p className="text-white text-xs sm:text-sm font-semibold">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            4. MAIN FUNCTIONS OF THE MOTOR
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Main Functions of the Motor
          </motion.h2>

          <motion.ul variants={staggerContainer} className="space-y-3">
            {[
              'Spins the rotor at controlled speeds',
              'Controls speed precisely through electronic regulation',
              'Maintains steady rotation for consistent separation results',
              'Provides acceleration and deceleration for safe operation',
              'Supplies torque to handle varying sample loads',
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
              >
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#4169E1] shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* ════════════════════════════════════════════
            5. HOW THE MOTOR WORKS
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            How the Motor Works
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-xl bg-blue-50 border border-blue-100 p-4 sm:p-5 mb-6"
          >
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The motor works through <strong>electromagnetic principles</strong>. When electric
              current flows through the motor windings, it generates magnetic fields that produce
              rotational motion.
            </p>
          </motion.div>

          <motion.ol variants={staggerContainer} className="space-y-4">
            {[
              'Electrical current enters the motor',
              'Magnetic fields are produced',
              'Interaction between magnetic fields causes rotation',
              'The shaft rotates',
              'The rotor spins',
            ].map((step, i) => (
              <motion.li key={i} variants={fadeUp} custom={i + 2} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] text-white text-xs sm:text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">{step}</p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.p
            variants={fadeUp}
            custom={8}
            className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed"
          >
            The speed of the motor determines the centrifuge <strong>RPM</strong> (Revolutions Per
            Minute). Higher RPM values produce stronger centrifugal force, which leads to more
            effective separation of sample components.
          </motion.p>
        </motion.section>

        {/* ════════════════════════════════════════════
            6. MOTOR COMPONENTS
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Motor Components
          </motion.h2>

          <motion.div variants={staggerContainer} className="space-y-4">
            {[
              { letter: 'A', name: 'Rotor', desc: 'The rotating part of the motor that connects to the centrifuge shaft and spins the rotor assembly.' },
              { letter: 'B', name: 'Stator', desc: 'The stationary part of the motor that contains the electromagnetic windings to generate the magnetic field.' },
              { letter: 'C', name: 'Shaft', desc: 'A solid cylindrical rod that transfers rotational energy from the motor to the centrifuge rotor.' },
              { letter: 'D', name: 'Bearings', desc: 'Precision mechanical components that reduce friction and support the shaft during high-speed rotation.' },
              { letter: 'E', name: 'Cooling Fan', desc: 'A built-in fan that dissipates heat generated during operation to prevent overheating.' },
            ].map((comp, i) => (
              <motion.div
                key={comp.letter}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/70 shadow-sm"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4169E1] text-white text-sm font-bold shrink-0">
                  {comp.letter}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#1a237e]">{comp.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{comp.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ════════════════════════════════════════════
            7. TYPES OF MOTORS
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Types of Motors
          </motion.h2>

          {/* ── 1. Brushed Motor ── */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] text-white text-xs font-bold">1</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1a237e]">Brushed Motor</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              A brushed motor uses physical carbon brushes to transfer electrical current to the
              rotating commutator. This is a traditional motor design commonly found in older
              centrifuge models.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-xs sm:text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Advantages
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />Simple design</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />Affordable</li>
                </ul>
              </div>
              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-xs sm:text-sm font-semibold text-red-600 mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" /> Disadvantages
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />Brushes wear out</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />Requires maintenance</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />Generates sparks</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── 2. Brushless Motor ── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] text-white text-xs font-bold">2</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1a237e]">Brushless Motor</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              A brushless motor uses electronic commutation instead of physical brushes. This
              provides smoother operation, longer lifespan, and better speed control, making it
              ideal for precision centrifugation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-xs sm:text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Advantages
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />Quiet operation</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />Long lifespan</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />High efficiency</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />Low maintenance</li>
                </ul>
              </div>
              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-xs sm:text-sm font-semibold text-red-600 mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" /> Disadvantages
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />More expensive</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
              <p className="text-xs sm:text-sm text-purple-800 font-medium">
                💡 Modern centrifuges mostly use brushless motors.
              </p>
            </div>
          </motion.div>

          {/* ── 3. Induction Motor ── */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] text-white text-xs font-bold">3</span>
              <h3 className="text-base sm:text-lg font-bold text-[#1a237e]">Induction Motor</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              An induction motor uses electromagnetic induction to generate motion without brushes
              or permanent magnets. These motors are robust and reliable, often used in large-scale
              industrial centrifuges.
            </p>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs sm:text-sm font-semibold text-[#1a237e] mb-2">Key Features</p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#4169E1] shrink-0" />Heavy-duty performance</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#4169E1] shrink-0" />Durable construction</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#4169E1] shrink-0" />Handles large loads</li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* ════════════════════════════════════════════
            8. MOTOR SPEED CONTROL
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Motor Speed Control
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-2xl bg-blue-50 border border-blue-100 p-5 sm:p-6"
          >
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                <strong className="text-[#1a237e]">RPM (Revolutions Per Minute)</strong> measures
                how many times the rotor completes a full rotation each minute. Typical centrifuge
                speeds range from 1,000 to 30,000 RPM.
              </p>
              <p>
                <strong className="text-[#1a237e]">RCF (Relative Centrifugal Force)</strong> — also
                known as g-force — measures the actual force applied to the sample. It depends on
                both the RPM and the rotor radius.
              </p>
              <div className="rounded-xl bg-white p-4 mt-2">
                <p className="text-xs sm:text-sm font-semibold text-[#1a237e] mb-3">Common Speed Ranges</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Low Speed', range: '1,000 – 6,000 RPM', use: 'Cell culture, blood separation' },
                    { label: 'High Speed', range: '12,000 – 25,000 RPM', use: 'Bacterial pelleting, nucleic acids' },
                    { label: 'Ultra Speed', range: '25,000 – 100,000+ RPM', use: 'Subcellular fractionation, viruses' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg bg-gradient-to-br from-[#1a237e]/5 to-[#4169E1]/5 p-3">
                      <p className="text-xs sm:text-sm font-semibold text-[#1a237e]">{s.label}</p>
                      <p className="text-xs sm:text-sm text-[#4169E1] font-medium">{s.range}</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{s.use}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ════════════════════════════════════════════
            9. MOTOR COOLING
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Motor Cooling
          </motion.h2>

          <motion.ul variants={staggerContainer} className="space-y-3">
            {[
              { title: 'Air cooling', desc: 'Passive airflow through vents in the motor housing dissipates heat naturally during operation.' },
              { title: 'Fan cooling', desc: 'An integrated fan actively blows air across the motor windings and components to remove excess heat.' },
              { title: 'Refrigeration systems', desc: 'Advanced centrifuges use built-in refrigeration coils to maintain low temperatures during high-speed runs.' },
            ].map((method, i) => (
              <motion.li key={method.title} variants={fadeUp} custom={i + 1} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#4169E1] shrink-0" />
                <div>
                  <strong className="text-[#1a237e]">{method.title}</strong> — {method.desc}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* ════════════════════════════════════════════
            10. MOTOR PROBLEMS
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6">
            Motor Problems
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Overheating',
                desc: 'Excessive heat buildup can damage motor windings and reduce performance. Often caused by prolonged high-speed operation or blocked ventilation.',
              },
              {
                title: 'Bearing Wear',
                desc: 'Over time, bearings degrade leading to increased friction, noise, and vibration. Worn bearings must be replaced promptly.',
              },
              {
                title: 'Electrical Failure',
                desc: 'Faulty wiring, blown capacitors, or damaged circuits can cause the motor to fail entirely or operate erratically.',
              },
              {
                title: 'Speed Instability',
                desc: 'Inconsistent RPM readings indicate issues with the speed controller, sensor, or motor drive electronics.',
              },
              {
                title: 'Excessive Vibration',
                desc: 'Unusual vibrations suggest imbalanced loads, worn bearings, or misaligned components that need immediate attention.',
              },
            ].map((problem, i) => (
              <motion.div
                key={problem.title}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-xl bg-red-50 border border-red-200 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  <h3 className="text-sm sm:text-base font-semibold text-red-700">{problem.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ════════════════════════════════════════════
            11. CLOSING BANNER
        ════════════════════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-14"
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#1a237e] to-[#4169E1] p-6 sm:p-8 text-center">
            <Zap className="w-8 h-8 text-white/80 mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Keep the Motor Running Smoothly</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto">
              Regular maintenance and proper operation of the electric motor ensure reliable
              centrifuge performance and extend the lifespan of your equipment.
            </p>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════
            12. BOTTOM BRANDING
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Centraas</p>
        </motion.div>
      </div>
    </div>
  )
}

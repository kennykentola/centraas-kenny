'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Settings, AlertTriangle, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function ShaftDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Top Accent Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Decorative floating elements */}
      <div className="absolute top-24 left-8 w-16 h-16 rounded-full bg-purple-300/30 animate-float blur-sm" />
      <div className="absolute top-44 right-12 w-10 h-10 rounded-full bg-blue-400/25 animate-float blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute top-72 left-16 w-6 h-6 rounded-full bg-indigo-300/30 animate-float blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-20 w-14 h-14 rounded-full bg-purple-200/30 animate-float blur-sm" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-96 right-32 w-5 h-5 rounded-full bg-blue-300/30 animate-float blur-sm" style={{ animationDelay: '3s' }} />

      {/* Decorative Star icons */}
      <Star className="absolute top-32 right-6 w-4 h-4 text-purple-400/40 animate-float" style={{ animationDelay: '0.5s' }} />
      <Star className="absolute top-60 left-4 w-3 h-3 text-blue-400/40 animate-float" style={{ animationDelay: '2.5s' }} />
      <Star className="absolute top-[500px] right-8 w-5 h-5 text-indigo-400/30 animate-float" style={{ animationDelay: '1.8s' }} />

      {/* Floating Back Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-8 left-6 z-40"
      >
        <Link
          href="/centrifuge/parts"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft className="w-5 h-5 text-[#1a237e]" />
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-12 pt-16">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="text-center mt-8 mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a237e] tracking-wide">
            DRIVE SHAFT / SPINDLE
          </h1>
        </motion.div>

        {/* 1. Hero Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mb-10"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/part-centrifuge-driveshaft.png"
              alt="Drive Shaft / Spindle"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* 2. Drive Shaft Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a237e]">DRIVE SHAFT OR SPINDLE</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-5">
            The shaft is the mechanical component connecting the motor to the rotor. It transfers rotational motion from the motor to the rotor. The drive shaft, also called the spindle, is the mechanical link between the motor and the rotor.
          </p>

          {/* What it does callout */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 mb-4">
            <p className="text-sm font-semibold text-blue-800 mb-1">What it does:</p>
            <p className="text-blue-700">
              It transmits the rotational force from the motor to the rotor, enabling the rotor to spin.
            </p>
          </div>

          {/* What it is made of callout */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-4">
            <p className="text-sm font-semibold text-purple-800 mb-1">What it is made of:</p>
            <ul className="text-purple-700 list-disc list-inside space-y-1">
              <li>High-grade stainless steel or hardened alloy steel</li>
              <li>Must be precision-engineered to minimize wobble and vibration</li>
            </ul>
          </div>
        </motion.div>

        {/* 3. Image Gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">IMAGE GALLERY</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/shaft-closeup.png"
                alt="Shaft Close-up"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Shaft Close-up</span>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/part-centrifuge-rotor.png"
                alt="Rotor Connection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Rotor Connection</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Functions of the Shaft */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Functions of the Shaft</h2>
          <p className="text-gray-600 mb-4">The shaft:</p>
          <ul className="space-y-3">
            {[
              'Transfers power from the motor to the rotor',
              'Supports rotor movement during high-speed spinning',
              'Maintains alignment between motor and rotor',
              'Stabilizes spinning to prevent dangerous vibration',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 5. How the Shaft Works */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">How the Shaft Works</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="font-semibold text-blue-800 mb-3">When the motor rotates:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-blue-700">The shaft rotates simultaneously</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-blue-700">The rotor attached to the shaft spins</span>
              </li>
            </ul>
            <p className="text-blue-800 font-medium">
              The shaft must remain perfectly balanced and aligned.
            </p>
          </div>
        </motion.div>

        {/* 6. Materials Used */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={6}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Materials Used</h2>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <p className="font-semibold text-purple-800 mb-3">
              Because the shaft experiences enormous stress, it is made from:
            </p>
            <ul className="space-y-2">
              {['Hardened steel', 'Stainless steel', 'Titanium'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <span className="text-purple-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 7. Characteristics of a Good Shaft */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={7}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-5">Characteristics of a Good Shaft</h2>
          <div className="space-y-4">
            {[
              'Be strong',
              'Resist bending',
              'Resist corrosion',
              'Reduce vibration',
              'Maintain precision alignment',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate="visible"
                custom={idx}
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center text-white text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 8. Shaft Problems */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={8}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-5">Shaft Problems</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            {[
              { name: 'Bending', icon: '⚠️' },
              { name: 'Misalignment', icon: '⚠️' },
              { name: 'Cracking', icon: '⚠️' },
              { name: 'Wear', icon: '⚠️' },
            ].map((problem, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate="visible"
                custom={idx}
                variants={fadeUp}
                className="bg-red-50 border border-red-200 rounded-xl p-4 text-center hover:shadow-md hover:border-red-300 transition-all duration-300"
              >
                <span className="text-2xl mb-2 block">{problem.icon}</span>
                <p className="text-red-800 font-medium text-sm">{problem.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Warning callout */}
          <div className="bg-red-500 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
            <p className="text-white font-medium">
              Misalignment can cause dangerous vibration.
            </p>
          </div>
        </motion.div>

        {/* 9. Closing Banner */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={9}
          variants={fadeUp}
          className="mb-10"
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-8 text-center">
            <ShieldCheck className="w-10 h-10 text-white/80 mx-auto mb-3" />
            <h3 className="text-white text-xl font-bold mb-2">Keep Your Shaft in Top Condition</h3>
            <p className="text-white/80 text-sm max-w-lg mx-auto">
              Regular inspection and maintenance of the drive shaft ensures safe and efficient centrifuge operation. Always follow manufacturer guidelines for shaft care and replacement.
            </p>
          </div>
        </motion.div>

        {/* 10. Bottom Branding */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={10}
          variants={fadeUp}
          className="text-center pt-6 pb-4"
        >
          <p className="text-sm text-gray-400 font-medium tracking-wider uppercase">
            Centraas
          </p>
        </motion.div>
      </div>
    </div>
  );
}

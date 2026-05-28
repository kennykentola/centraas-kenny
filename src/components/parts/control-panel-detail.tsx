'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Star,
  MonitorPlay,
  ShieldCheck,
  AlertTriangle,
  Thermometer,
  Clock,
  Gauge,
  Lock,
  Eye,
} from 'lucide-react';

export default function ControlPanelDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-6 w-24 h-24 rounded-full bg-purple-200/20 pointer-events-none animate-float" />
      <div className="absolute top-40 left-4 w-16 h-16 rounded-full bg-blue-200/15 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-purple-300/15 pointer-events-none animate-float" />
      <Star className="absolute top-16 right-14 w-2.5 h-2.5 text-blue-400/30 animate-float" />
      <Star className="absolute top-28 left-12 w-2 h-2 text-purple-300/25 animate-float-delayed" />
      <div className="absolute top-60 right-20 w-10 h-10 rounded-full bg-blue-300/10 pointer-events-none animate-float" />
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
          className="text-[#1a237e] text-xl sm:text-3xl font-bold"
        >
          CONTROL PANEL AND CONTROL SYSTEM
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
            src="/images/part-centrifuge-controlpanel.png"
            alt="Centrifuge control panel and control system with digital display and buttons"
            fill
            className="object-cover"
            sizes="90vw"
          />
        </motion.div>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/part-centrifuge-controlpanel.png"
                alt="Control Panel Display showing speed, time, and temperature settings"
                fill
                className="object-cover"
                sizes="45vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Control Panel Display</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-gray-50">
              <Image
                src="/images/control-system-pcb.png"
                alt="Control System PCB circuit board with electronic components"
                fill
                className="object-cover"
                sizes="45vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent pt-6 pb-1.5 px-2">
                <p className="text-white text-[9px] sm:text-[10px] font-semibold text-center">Control System PCB</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTROL PANEL AND CONTROL SYSTEM */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <MonitorPlay className="w-5 h-5 text-[#4169E1]" />
            <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold tracking-wide">CONTROL PANEL AND CONTROL SYSTEM</h2>
          </div>
          <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              The control panel and control system of a centrifuge is one of the most important parts of the machine. It acts as the brain and command center of the centrifuge because it controls, monitors, and coordinates all machine operations. Without the control system, the centrifuge cannot operate properly, safely, or accurately. It ensures that the machine runs at the correct speed, temperature, and time while also protecting the machine and the user from damage or accidents. Modern centrifuges use advanced electronic and computerized control systems to provide high precision, automation, and safety.
            </p>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* FUNCTIONS OF THE CONTROL SYSTEM */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-3">FUNCTIONS OF THE CONTROL SYSTEM</h2>
          <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-6">
            The control system performs several important functions in the centrifuge.
          </p>

          {/* Function 1: Controls Speed */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Controls Speed</h3>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              The speed of the centrifuge is measured in <strong>RPM</strong> (Revolutions Per Minute) or <strong>RCF</strong> (Relative Centrifugal Force). The control system allows the operator to:
            </p>
            <div className="space-y-2 ml-1 mb-4">
              {[
                'Increase speed to reach the required level',
                'Reduce speed when needed',
                'Maintain a constant speed during operation',
                'Select specific speed settings for different applications',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Different applications require different speeds. For example:
            </p>
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                <p className="text-blue-800 font-bold text-[10px] sm:text-xs mb-1">Blood Separation</p>
                <p className="text-black/60 text-[9px] sm:text-xs">Moderate speed</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
                <p className="text-purple-800 font-bold text-[10px] sm:text-xs mb-1">DNA Extraction</p>
                <p className="text-black/60 text-[9px] sm:text-xs">Very high speed</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                <p className="text-green-800 font-bold text-[10px] sm:text-xs mb-1">Delicate Samples</p>
                <p className="text-black/60 text-[9px] sm:text-xs">Low speed</p>
              </div>
            </div>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-3">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Importance of Speed Control</h4>
              <ul className="space-y-1.5">
                {[
                  'Prevents damage to samples',
                  'Ensures accurate separation',
                  'Maintains experimental consistency',
                  'Protects motor and rotor from damage',
                  'Prevents overspeed accidents',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
              <p className="text-black/70 text-sm leading-relaxed italic">
                <strong>Note:</strong> Modern centrifuges use electronic speed regulators and sensors to maintain precise and consistent speed throughout the operation.
              </p>
            </div>
          </div>

          {/* Function 2: Controls Time */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Controls Time</h3>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              The control system includes a timer that allows the operator to set how long the centrifuge will run. The timer can be set for:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['1 min', '10 min', '30 min', 'Several hours'].map((item, i) => (
                <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-blue-100 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              After the set time elapses, the control system:
            </p>
            <div className="space-y-2 ml-1 mb-4">
              {[
                'Stops the spinning automatically',
                'Slows the rotor down safely',
                'Alerts the operator that the cycle is complete',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                  <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Importance of Time Control</h4>
              <ul className="space-y-1.5">
                {[
                  'Too little time = incomplete separation of samples',
                  'Too much time = may damage delicate samples',
                  'Accurate timing improves experimental results',
                  'Automatic timing reduces human error',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Function 3: Controls Temperature */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Controls Temperature</h3>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              During high-speed spinning, the motor activity, friction, and air resistance generate heat. This heat can affect sensitive samples and must be controlled. Sensitive samples include:
            </p>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {['Blood', 'Enzymes', 'Proteins', 'DNA', 'RNA'].map((item, i) => (
                <div key={i} className="bg-orange-50 border border-orange-200 rounded-xl p-2 text-center">
                  <p className="text-orange-800 font-bold text-[9px] sm:text-xs">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              Common temperature settings in refrigerated centrifuges:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['4\u00B0C', '20\u00B0C', '-10\u00B0C'].map((item, i) => (
                <span key={i} className="bg-blue-100 rounded-lg px-3 py-1.5 text-xs text-blue-800 font-semibold shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Functions of Temperature Control</h4>
              <ul className="space-y-1.5">
                {[
                  'Activates cooling system when temperature rises',
                  'Monitors temperature continuously during operation',
                  'Prevents overheating of the chamber',
                  'Maintains sample stability at the required temperature',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Function 4: Detects Imbalance */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Detects Imbalance</h3>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              The control system monitors the balance of the rotor during operation. Imbalance can be caused by:
            </p>
            <div className="space-y-2 ml-1 mb-4">
              {[
                'Unevenly loaded tubes in the rotor',
                'Different sample weights in opposite positions',
                'Incorrect rotor loading technique',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span className="text-black/75 text-sm sm:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 mb-3">
              <h4 className="text-red-800 font-bold text-sm mb-2">Consequences of Imbalance</h4>
              <ul className="space-y-1.5">
                {[
                  'Strong vibration during operation',
                  'Excessive noise',
                  'Rotor damage',
                  'Machine failure',
                  'Accidents and safety hazards',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/80 border-l-4 border-red-400 rounded-r-lg p-4 mb-3">
              <h4 className="text-red-700 font-bold text-sm mb-2">How the System Detects Imbalance</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                The control system uses sensors that monitor rotor movement, vibrations, and weight distribution. When an imbalance is detected, the system:
              </p>
              <ul className="space-y-1.5 mt-2">
                {[
                  'Stops the machine immediately',
                  'Reduces speed gradually to prevent damage',
                  'Displays an error warning on the panel',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/60 border-l-4 border-red-300 rounded-r-lg p-4">
              <h4 className="text-red-700 font-bold text-sm mb-2">Importance</h4>
              <ul className="space-y-1.5">
                {[
                  'Protects users from injury',
                  'Prevents rotor breakage',
                  'Extends machine lifespan',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Function 5: Displays Operating Data */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">5</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Displays Operating Data</h3>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-3">
              The control panel display shows important information about the current operation, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
              {[
                { label: 'Current Speed (RPM)', color: 'bg-blue-50 border-blue-200 text-blue-800' },
                { label: 'Set Speed', color: 'bg-blue-50 border-blue-200 text-blue-800' },
                { label: 'Remaining Time', color: 'bg-purple-50 border-purple-200 text-purple-800' },
                { label: 'Temperature', color: 'bg-orange-50 border-orange-200 text-orange-800' },
                { label: 'Rotor Type', color: 'bg-green-50 border-green-200 text-green-800' },
                { label: 'Error Messages', color: 'bg-red-50 border-red-200 text-red-800' },
                { label: 'System Status', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} border rounded-xl p-2.5 text-center`}>
                  <p className="font-bold text-[9px] sm:text-[11px]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4 mb-4">
              <h4 className="text-[#1a237e] font-bold text-sm mb-2">Benefits</h4>
              <ul className="space-y-1.5">
                {[
                  'Helps the operator monitor the operation at all times',
                  'Improves accuracy by providing real-time feedback',
                  'Provides clear information about errors or warnings',
                  'Makes operation easier and more user-friendly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                    <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-2">
              Modern centrifuges use different types of displays:
            </p>
            <div className="flex flex-wrap gap-2">
              {['LED Displays', 'LCD Screens', 'Digital Touchscreens'].map((item, i) => (
                <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-xs text-black/70 border border-blue-100 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Function 6: Controls Safety Systems */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-[#1a237e] text-base sm:text-lg font-bold">Controls Safety Systems</h3>
              </div>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-4">
              The control system manages several critical safety features:
            </p>

            {/* 6a: Lid Lock Control */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <h4 className="text-emerald-800 font-bold text-sm sm:text-base">a. Lid Lock Control</h4>
              </div>
              <div className="bg-green-50/80 border-l-4 border-emerald-400 rounded-r-lg p-3.5">
                <p className="text-black/75 text-sm leading-relaxed">
                  Prevents the lid from being opened while the centrifuge is spinning. This protects the operator from exposure to high-speed rotating parts and flying debris.
                </p>
              </div>
            </div>

            {/* 6b: Overspeed Protection */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <h4 className="text-emerald-800 font-bold text-sm sm:text-base">b. Overspeed Protection</h4>
              </div>
              <div className="bg-green-50/80 border-l-4 border-emerald-400 rounded-r-lg p-3.5">
                <p className="text-black/75 text-sm leading-relaxed">
                  Prevents the centrifuge from exceeding safe speed limits. The system automatically limits or reduces speed if the set value is too high for the rotor or sample type being used.
                </p>
              </div>
            </div>

            {/* 6c: Overheating Protection */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <h4 className="text-emerald-800 font-bold text-sm sm:text-base">c. Overheating Protection</h4>
              </div>
              <div className="bg-green-50/80 border-l-4 border-emerald-400 rounded-r-lg p-3.5">
                <p className="text-black/75 text-sm leading-relaxed">
                  Monitors the internal temperature and automatically reduces speed or shuts down the machine if the temperature exceeds safe limits, protecting both the samples and the equipment.
                </p>
              </div>
            </div>

            {/* 6d: Emergency Shutdown */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-md bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                </div>
                <h4 className="text-red-700 font-bold text-sm sm:text-base">d. Emergency Shutdown</h4>
              </div>
              <div className="bg-red-50/80 border-l-4 border-red-400 rounded-r-lg p-3.5">
                <p className="text-black/75 text-sm leading-relaxed mb-2">
                  The control system can immediately stop the centrifuge in case of:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Rotor imbalance',
                    'Motor failure',
                    'Electrical fault',
                    'Excessive vibration',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      <span className="text-black/70 text-xs sm:text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gray-200 mb-8" />

        {/* Closing Banner */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#4169E1] rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              The control panel and control system is the brain of the centrifuge machine. It ensures safe, accurate, and efficient operation by controlling speed, time, temperature, monitoring balance, displaying data, and managing all safety systems. Understanding these functions is essential for proper operation and maintenance in any laboratory setting.
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

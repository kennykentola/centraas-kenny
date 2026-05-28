'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const parts = [
  {
    id: 'hollow-cathode-lamp',
    name: 'Light Source (Hollow Cathode Lamp (HCL))',
    image: '/images/part-hcl.png',
    content: {
      definition:
        'The light source in an Atomic Absorption Spectroscopy (AAS) machine is responsible for producing the radiation that passes through the atomized sample. This radiation is absorbed by atoms of the element being analyzed. It is a critical component because AAS is based on the measurement of how much light is absorbed by free atoms.',
      description:
        'In AAS, the light source must emit radiation at a specific wavelength that corresponds to the element being analyzed. This is because each element absorbs light at a unique wavelength (resonance wavelength). Therefore, a different lamp is usually required for different elements, making the technique highly selective and specific.',
      emphasis: 'The most commonly used light source in AAS is the Hollow Cathode Lamp (HCL).',
      components: [
        'A cathode made of the element being analyzed',
        'An anode',
        'A glass envelope - protects internal components',
        'A quartz window - allows light to pass out of the lamp',
        'Inert gas (Neon or Argon) inside the lamp',
      ],
      workingPrinciple: [
        'The inert gas becomes ionized.',
        'Gas ions are accelerated toward the cathode.',
        'The ions strike the cathode surface, causing metal atoms to be ejected.',
        'These atoms become excited.',
        'As they return to their ground state, they emit light at characteristic wavelengths of the element.',
      ],
      otherSources: {
        title: 'Electrodeless Discharge Lamp (EDL)',
        points: [
          'Uses radio-frequency energy instead of electrodes',
          'Provides higher intensity radiation',
          'Used for elements that require higher sensitivity',
        ],
      },
      functions: [
        'To produce element-specific radiation',
        'To provide stable and consistent light intensity',
        'To ensure accurate measurement of light absorption',
        'To supply radiation that matches the absorption wavelength of the analyte',
      ],
      importance: [
        'It determines the selectivity of the analysis',
        'It ensures that only the target element absorbs the radiation',
        'It directly affects the accuracy and sensitivity of the results',
      ],
      importanceNote:
        'Without a suitable light source, the instrument cannot measure atomic absorption because the atoms must absorb light at their specific resonance wavelength.',
      factors: [
        'Lamp alignment',
        'Stability of power supply',
        'Lamp age (intensity decreases over time)',
        'Purity of inert gas',
        'Proper wavelength selection',
      ],
      limitations: [
        'Requires different lamps for different elements',
        'Lamps have limited lifespan',
        'Warm-up time is needed before stable operation',
      ],
    },
  },
  {
    id: 'atomizer',
    name: 'Atomizer (Flame / Graphite Furnace)',
    image: '/images/part-atomizer.png',
    content: {
      definition:
        'The atomizer is the component responsible for converting the liquid sample into free atoms in the ground state. This is the most critical step in AAS analysis because atomic absorption can only occur when the sample exists as free atoms in the gaseous state.',
      description:
        'In AAS, the atomizer converts the sample from liquid or solid form into a cloud of free, ground-state atoms. The two main types of atomizers are flame atomizers and electrothermal (graphite furnace) atomizers. Each has advantages depending on the application and required sensitivity. The atomizer is where the actual absorption measurement takes place.',
      emphasis:
        'Efficient atomization is crucial for achieving good sensitivity and low detection limits.',
      components: [
        'Burner head (in flame AAS)',
        'Graphite tube (in furnace AAS)',
        'Temperature control system',
        'Gas inlet/outlet ports',
        'Sample injection port',
      ],
      workingPrinciple: [
        'The sample is introduced into the atomizer in liquid form.',
        'In flame AAS, the sample is aspirated into a flame (2000-3000 C).',
        'In graphite furnace AAS, the sample is heated through stages (drying, ashing, atomization).',
        'High temperature breaks down chemical bonds and converts the sample into free atoms.',
        'The transient cloud of atoms absorbs light at their characteristic wavelengths.',
      ],
      otherSources: {
        title: 'Types of Atomizers',
        points: [
          'Flame Atomizer: Uses air-acetylene or nitrous oxide-acetylene flames',
          'Graphite Furnace Atomizer: Electrically heated graphite tube for higher sensitivity',
          'Hydride Generation: For elements forming volatile hydrides',
          'Cold Vapor Atomizer: Specifically for mercury determination',
        ],
      },
      functions: [
        'To convert sample into free ground-state atoms',
        'To provide the optimal temperature for atomization',
        'To ensure efficient and reproducible atom production',
      ],
      importance: [
        'The atomizer is where the actual absorption measurement takes place',
        'Incomplete atomization leads to poor precision and inaccurate results',
        'The choice of atomizer determines detection limits and sample throughput',
      ],
      importanceNote:
        'The efficiency of atomization directly impacts the sensitivity and accuracy of the entire AAS analysis.',
      factors: [
        'Temperature must be optimal for complete atomization',
        'Fuel-to-oxidant ratio in flame atomizers',
        'Sample flow rate and nebulization efficiency',
        'Heating program in graphite furnace',
        'Use of chemical modifiers',
      ],
      limitations: [
        'Flame atomizers have lower sensitivity than furnace',
        'Graphite furnace requires longer analysis time per sample',
        'Some elements form refractory compounds difficult to atomize',
      ],
    },
  },
  {
    id: 'sample-introduction-system',
    name: 'Sample Introduction System (Nebulizer & Spray Chamber)',
    image: '/images/part-nebulizer.png',
    content: {
      definition:
        'The sample introduction system is responsible for delivering the liquid sample to the atomizer in a consistent and reproducible manner. It typically consists of a nebulizer and a spray chamber that work together to create a fine aerosol from the liquid sample.',
      description:
        'The nebulizer converts the liquid sample into a fine mist (aerosol), and the spray chamber selects only the finest droplets for introduction into the atomizer. Larger droplets are drained away to waste. This ensures consistent sample delivery and prevents large droplets from causing fluctuations in the signal. Only about 5-15% of the sample actually reaches the flame in a typical pneumatic nebulizer system.',
      emphasis:
        'A well-maintained sample introduction system ensures consistent droplet size and delivery rate, leading to stable absorption signals.',
      components: [
        'Nebulizer (pneumatic or ultrasonic)',
        'Spray chamber (impact bead or cyclone type)',
        'Capillary tube for sample uptake',
        'Drain system for waste removal',
        'Mixing chamber',
      ],
      workingPrinciple: [
        'The pneumatic nebulizer uses the Venturi effect to draw liquid sample through a capillary tube.',
        'The high-speed gas stream breaks the liquid into fine droplets (aerosol).',
        'The aerosol enters the spray chamber where larger droplets impact the walls.',
        'Only fine droplets (less than 10 micrometers) reach the atomizer.',
        'Larger droplets drain to waste through the drain system.',
      ],
      otherSources: {
        title: 'Types of Nebulizers',
        points: [
          'Pneumatic Nebulizer: Most common, uses gas flow to create aerosol',
          'Ultrasonic Nebulizer: Creates finer, more uniform aerosol with higher transport efficiency',
          'Flow Injection System: For automated sample introduction',
          'Autosampler: Handles multiple samples sequentially',
        ],
      },
      functions: [
        'To convert liquid sample into fine aerosol',
        'To select only the finest droplets for atomization',
        'To ensure consistent and reproducible sample delivery',
        'To prevent large droplets from reaching the atomizer',
      ],
      importance: [
        'The efficiency of sample introduction directly affects precision and accuracy',
        'Poor nebulization leads to noisy, unstable signals',
        'Reproducible sample delivery is essential for reliable quantitative analysis',
      ],
      importanceNote:
        'The sample introduction system is a major source of noise in AAS measurements, so proper maintenance is critical.',
      factors: [
        'Sample uptake rate and consistency',
        'Gas flow rate through the nebulizer',
        'Sample viscosity and surface tension',
        'Nebulizer alignment with spray chamber',
        'Spray chamber temperature and design',
      ],
      limitations: [
        'Only 5-15% of the sample reaches the flame',
        'High dissolved solids content can clog the nebulizer',
        'Viscous samples may be difficult to nebulize efficiently',
      ],
    },
  },
  {
    id: 'monochromator',
    name: 'Monochromator (Wavelength Selector)',
    image: '/images/part-monochromator.png',
    content: {
      definition:
        'The monochromator is an optical device that isolates and selects a specific wavelength of light for detection. It ensures that only the analytical wavelength (the resonance line of the element being analyzed) reaches the detector while blocking all other wavelengths.',
      description:
        'The monochromator in AAS separates the broad spectrum of light from the source into individual wavelengths and selects the analytical wavelength. It typically uses a diffraction grating as the dispersing element and adjustable slits to control the bandwidth of light reaching the detector. This selectivity is crucial for eliminating spectral interferences and ensuring accurate measurements.',
      emphasis:
        'Proper selection of slit width (bandwidth) is a balance between resolution and signal intensity.',
      components: [
        'Entrance slit - controls light entering the monochromator',
        'Diffraction grating - disperses light into component wavelengths',
        'Exit slit - selects the specific wavelength for detection',
        'Mirrors/lenses - direct light path',
        'Wavelength drive mechanism',
      ],
      workingPrinciple: [
        'Light from the atomizer passes through the entrance slit.',
        'The light strikes the diffraction grating.',
        'The grating disperses the light into its component wavelengths.',
        'By rotating the grating, different wavelengths are directed toward the exit slit.',
        'Only the specific wavelength of interest passes through to the detector.',
      ],
      otherSources: {
        title: 'Types of Monochromators',
        points: [
          'Grating Monochromator: Uses diffraction grating, most common in modern AAS',
          'Prism Monochromator: Uses glass or quartz prism, less common',
          'Double Monochromator: Two dispersive elements for better resolution',
          'Echelle Monochromator: High-resolution for multi-element capability',
        ],
      },
      functions: [
        'To isolate the specific wavelength at which the analyte absorbs',
        'To reject other wavelengths that could cause spectral interference',
        'To control the spectral bandwidth for optimal resolution',
        'To scan across wavelengths when needed for analysis',
      ],
      importance: [
        'The monochromator is essential for selectivity in AAS',
        'It prevents spectral interference from other elements or matrix components',
        'Proper wavelength selection ensures accurate quantification',
      ],
      importanceNote:
        'Without a monochromator, the detector would receive all wavelengths and no specific element measurement would be possible.',
      factors: [
        'Spectral bandwidth (slit width) affects resolution and light throughput',
        'Grating efficiency and resolution',
        'Stray light levels can affect accuracy at high absorbance',
        'Proper wavelength calibration',
        'Alignment of optical components',
      ],
      limitations: [
        'Stray light can cause errors at high absorbance values',
        'Limited resolution may not separate closely spaced spectral lines',
        'Requires regular calibration for accurate wavelength positioning',
      ],
    },
  },
  {
    id: 'detector',
    name: 'Detector (Photomultiplier Tube)',
    image: '/images/part-detector.png',
    content: {
      definition:
        'The detector converts the intensity of light that passes through the atomized sample into an electrical signal for measurement and processing. In most AAS instruments, the detector is a photomultiplier tube (PMT), which is a highly sensitive device.',
      description:
        'The amount of light reaching the detector is inversely proportional to the concentration of the analyte element in the sample. The more atoms absorbing light, the less light reaches the detector, resulting in a higher absorbance reading. The PMT amplifies this light signal through a cascade of electron emissions, producing a measurable electrical current.',
      emphasis:
        'The detector is crucial for translating the optical signal into a measurable quantity.',
      components: [
        'Photocathode - converts photons to electrons',
        'Series of dynodes - amplifies the electron signal',
        'Anode - collects the amplified electron current',
        'Glass envelope - vacuum sealed container',
        'Electrical connections for power supply',
      ],
      workingPrinciple: [
        'Photons from the monochromator strike the photocathode.',
        'The photoelectric effect releases electrons from the photocathode.',
        'Electrons are accelerated toward the first dynode.',
        'Each collision with a dynode releases more electrons (cascade amplification).',
        'The amplified electron current collected at the anode is proportional to light intensity.',
      ],
      otherSources: {
        title: 'Types of Detectors',
        points: [
          'Photomultiplier Tube (PMT): Most common, high sensitivity and wide dynamic range',
          'Solid-State Detector: CCD or photodiode array for multi-wavelength capability',
          'Photodiode: Less sensitive but more compact and durable',
          'Silicon Photodiode: Optimized for specific wavelength ranges',
        ],
      },
      functions: [
        'To convert light intensity into an electrical signal',
        'To amplify weak signals for accurate measurement',
        'To provide a linear response over a wide range of concentrations',
        'To enable real-time monitoring of absorption signals',
      ],
      importance: [
        'The detector performance directly impacts detection limits',
        'High sensitivity enables trace and ultra-trace analysis',
        'Low noise ensures accurate measurement of small signals',
      ],
      importanceNote:
        'The quality of the detector determines the lowest concentration that can be reliably measured by the instrument.',
      factors: [
        'Detector sensitivity and gain settings',
        'Dark current (noise when no light is present)',
        'Linearity of response over the working concentration range',
        'Wavelength sensitivity range',
        'Temperature stability',
      ],
      limitations: [
        'PMTs can be damaged by excessive light exposure',
        'Dark current increases with age',
        'Limited lifetime of photocathode',
        'Temperature sensitive - requires stable operating conditions',
      ],
    },
  },
  {
    id: 'gas-supply-system',
    name: 'Gas Supply System',
    image: '/images/part-gas-supply.png',
    content: {
      definition:
        'The gas supply system provides the necessary gases for flame generation and sample atomization in AAS. This includes both fuel gas (typically acetylene) and oxidant gas (air or nitrous oxide), along with all the regulators, flow meters, and safety devices needed for safe operation.',
      description:
        'The gas supply system delivers the fuel and oxidant gases needed to sustain the flame in FAAS. It includes gas cylinders, regulators, pressure gauges, flow meters, and safety devices. The proper mixture and flow rate of these gases determine flame temperature and characteristics, which directly affect atomization efficiency and analytical performance.',
      emphasis:
        'Proper gas supply is critical for safe and efficient operation. Incorrect gas mixtures can cause poor atomization, flame instability, or even explosions.',
      components: [
        'Fuel gas cylinder (acetylene)',
        'Oxidant gas supply (air compressor or nitrous oxide cylinder)',
        'Pressure regulators',
        'Flow meters / flow controllers',
        'Gas mixing chamber',
        'Safety shut-off valves',
      ],
      workingPrinciple: [
        'Gases are stored in high-pressure cylinders.',
        'Regulators reduce gas pressure to safe working levels.',
        'Flow meters control the rate at which each gas enters the burner.',
        'Fuel and oxidant gases mix at the burner head.',
        'Ignition produces a stable flame with specific temperature characteristics.',
      ],
      otherSources: {
        title: 'Gas Combinations and Flame Types',
        points: [
          'Air-Acetylene (~2300 C): Suitable for most elements',
          'Nitrous Oxide-Acetylene (~2900 C): For refractory elements forming stable oxides',
          'Argon Supply: Used in graphite furnace as purge and protective gas',
          'Argon-Hydrogen: For hydride generation techniques',
        ],
      },
      functions: [
        'To provide fuel and oxidant gases for flame generation',
        'To control gas flow rates for optimal flame conditions',
        'To maintain safe operating pressure levels',
        'To ensure consistent and stable flame characteristics',
      ],
      importance: [
        'Gas purity is essential for trace analysis',
        'Gas flow rates directly affect atomization efficiency',
        'Safety is paramount - gas leaks can be extremely dangerous',
      ],
      importanceNote:
        'Gas impurities can cause background absorption and spectral interferences that affect result accuracy.',
      factors: [
        'Gas purity levels',
        'Proper flow rates and fuel-to-oxidant ratios',
        'Regulator accuracy and calibration',
        'Regular leak detection for safety',
        'Cylinder pressure monitoring',
      ],
      limitations: [
        'Acetylene is highly flammable and requires careful handling',
        'Nitrous oxide requires special handling due to oxidizing properties',
        'Running out of gas during analysis ruins the analytical run',
        'Gas purity requirements increase cost of operation',
      ],
    },
  },
  {
    id: 'signal-processing-system',
    name: 'Signal Processing System',
    image: '/images/part-signal-processing.png',
    content: {
      definition:
        'The signal processing system amplifies, processes, and displays the electrical signal from the detector, converting it into meaningful analytical results. It is essentially the "brain" of the AAS instrument that transforms raw signals into concentration data.',
      description:
        'The signal processing system takes the weak electrical signal from the detector and processes it to produce meaningful analytical results. It includes amplifiers, analog-to-digital converters (ADC), and computer software. The system performs background correction, calculates absorption values, constructs calibration curves, and determines the concentration of elements in the sample.',
      emphasis:
        'Modern signal processing systems can handle complex data analysis including multi-element analysis, quality control charts, and automated report generation.',
      components: [
        'Preamplifier - amplifies the weak detector signal',
        'Analog-to-digital converter (ADC)',
        'Computer with dedicated analytical software',
        'Display monitor for real-time data visualization',
        'Data storage system',
      ],
      workingPrinciple: [
        'The electrical signal from the detector is first amplified by a preamplifier.',
        'An ADC converts the analog signal into digital data.',
        'Software applies mathematical corrections (background correction, signal smoothing).',
        'Calibration curves are used to convert absorption signals into concentration values.',
        'Results are displayed on screen and can be exported for reporting.',
      ],
      otherSources: {
        title: 'Background Correction Methods',
        points: [
          'Deuterium Arc Correction: Uses a broad-band deuterium lamp for background measurement',
          'Zeeman Correction: Uses magnetic field splitting for precise background correction',
          'Smith-Hieftje Correction: Uses self-reversal of the HCL emission line',
        ],
      },
      functions: [
        'To amplify weak detector signals',
        'To convert analog signals to digital data',
        'To apply background correction algorithms',
        'To calculate concentrations from calibration curves',
        'To display and store analytical results',
      ],
      importance: [
        'Accurate signal processing ensures reliable quantitative results',
        'The quality of data processing directly affects result accuracy',
        'Modern software enables automated analysis and quality control',
      ],
      importanceNote:
        'Without proper signal processing, the raw detector signal would be meaningless and no concentration data could be obtained.',
      factors: [
        'Amplifier gain and noise levels',
        'ADC resolution (bit depth) determines measurement precision',
        'Data processing algorithms influence accuracy',
        'Calibration curve fitting methods',
        'Background correction effectiveness',
      ],
      limitations: [
        'Complex matrices may require advanced correction algorithms',
        'Software bugs or errors can lead to incorrect results',
        'Requires regular calibration verification with standards',
        'Data processing speed can limit sample throughput',
      ],
    },
  },
];

export default function AASPartsPage() {
  const [selectedPart, setSelectedPart] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f0ff] via-[#f0e6ff] to-[#ffe6f2]">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1a237e] via-[#4169E1] to-[#7C3AED]" />

      {/* Back button */}
      <div className="px-4 sm:px-6 pt-4">
        <Link href="/aas/menu">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#4169E1] hover:text-[#1E3A8A] hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4 sm:px-6 pt-4 pb-2"
      >
        <h1 className="text-[#1a237e] text-xl sm:text-3xl font-bold mb-2">
          Major Parts and Components of AAS Machine
        </h1>
        <p className="text-black/60 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
          An AAS machine consists of several important parts that work together to analyze samples. Select any of the image from the side menu to see and read about each component.
        </p>
      </motion.div>

      {/* Main Content: Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Sidebar - Thumbnail Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-[160px] flex-shrink-0"
          >
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden overflow-x-auto pb-2">
              <div className="flex gap-3">
                {parts.map((part, index) => (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPart(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                      selectedPart === index
                        ? 'border-[#ff69b4] shadow-lg shadow-pink-300/40 scale-105'
                        : 'border-white shadow-md hover:border-blue-300'
                    }`}
                  >
                    <Image
                      src={part.image}
                      alt={part.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: vertical column */}
            <div className="hidden lg:flex flex-col gap-3 bg-[#1e3a8a] rounded-2xl p-3">
              {parts.map((part, index) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(index)}
                  className={`w-full aspect-square rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                    selectedPart === index
                      ? 'border-[#ff69b4] shadow-lg shadow-pink-400/40 scale-105'
                      : 'border-white/60 hover:border-white'
                  }`}
                >
                  <Image
                    src={part.image}
                    alt={part.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 min-w-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-5 sm:p-8"
              >
                {/* Section Title */}
                <h2 className="text-[#1a237e] text-lg sm:text-xl font-bold mb-2">
                  {parts[selectedPart].name}
                </h2>

                {/* Main Image */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-6 bg-gray-50">
                  <Image
                    src={parts[selectedPart].image}
                    alt={parts[selectedPart].name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                </div>

                {/* Content */}
                <div className="space-y-5 text-sm sm:text-base">
                  {/* Definition */}
                  <div>
                    <p className="text-black/80 leading-relaxed mb-3">
                      {parts[selectedPart].content.definition}
                    </p>
                    <p className="text-black/80 leading-relaxed mb-3">
                      {parts[selectedPart].content.description}
                    </p>
                    <p className="text-black/70 leading-relaxed italic">
                      {parts[selectedPart].content.emphasis}
                    </p>
                  </div>

                  {/* Components */}
                  <div>
                    <h3 className="text-[#1a237e] font-bold mb-2">
                      The {parts[selectedPart].name.split('(')[0].trim()} consists of:
                    </h3>
                    <ul className="space-y-1.5">
                      {parts[selectedPart].content.components.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                          <span className="text-black/75 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Working Principle */}
                  <div>
                    <h3 className="text-[#1a237e] font-bold mb-2">Working Principle:</h3>
                    <div className="space-y-2">
                      {parts[selectedPart].content.workingPrinciple.map((step, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#1a237e] to-[#4169E1] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-[10px] font-bold">{i + 1}</span>
                          </div>
                          <p className="text-black/75 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Sources / Types */}
                  <div className="bg-blue-50/80 border-l-4 border-[#4169E1] rounded-r-lg p-4">
                    <h3 className="text-[#1a237e] font-bold text-sm mb-2">
                      {parts[selectedPart].content.otherSources.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {parts[selectedPart].content.otherSources.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                          <span className="text-black/70 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Functions */}
                  <div>
                    <h3 className="text-[#1a237e] font-bold mb-2">Functions:</h3>
                    <ul className="space-y-1.5">
                      {parts[selectedPart].content.functions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                          <span className="text-black/75 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Importance */}
                  <div className="bg-purple-50/80 border-l-4 border-[#7C3AED] rounded-r-lg p-4">
                    <h3 className="text-[#7C3AED] font-bold text-sm mb-2">Importance:</h3>
                    <ul className="space-y-1.5">
                      {parts[selectedPart].content.importance.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                          <span className="text-black/70 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-black/70 text-sm leading-relaxed italic mt-2">
                      {parts[selectedPart].content.importanceNote}
                    </p>
                  </div>

                  {/* Factors */}
                  <div>
                    <h3 className="text-[#1a237e] font-bold mb-2">Factors Affecting Performance:</h3>
                    <ul className="space-y-1.5">
                      {parts[selectedPart].content.factors.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-2 flex-shrink-0" />
                          <span className="text-black/75 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="text-black font-bold text-sm mb-2">Limitations:</h3>
                    <ul className="space-y-1.5">
                      {parts[selectedPart].content.limitations.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          <span className="text-black/65 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export interface PartData {
  id: string;
  name: string;
  icon: string;
  definition: string;
  description: string;
  workingPrinciple: string;
  types: string;
  importance: string;
  factors: string;
  maintenance: string;
}

export const aasParts: PartData[] = [
  {
    id: "hollow-cathode-lamp",
    name: "Light Source (HCL)",
    icon: "Lightbulb",
    definition:
      "The Hollow Cathode Lamp (HCL) is the primary light source in an Atomic Absorption Spectrophotometer. It is a specialized lamp that emits light at wavelengths specific to the element being analyzed.",
    description:
      "The HCL consists of a glass tube filled with an inert gas (neon or argon) at low pressure, with a cathode made of the analyte element. When an electric current passes through the lamp, the inert gas is ionized and bombards the cathode, causing atoms of the analyte element to be excited and emit characteristic radiation. This radiation is at the exact wavelength that the target element will absorb.",
    workingPrinciple:
      "When a voltage is applied across the electrodes of the HCL, the inert gas ionizes and accelerates toward the cathode. The cathode, made of the element to be analyzed, sputters atoms into the gas phase. These atoms are then excited by collisions with gas ions and emit light at the characteristic wavelength of that element as they return to the ground state. This process produces a narrow, intense line spectrum ideal for absorption measurements.",
    types: "1. Single-element HCL: Designed for one specific element, providing the best sensitivity and intensity.\n2. Multi-element HCL: Can contain multiple elements on the cathode, useful for multi-element analysis but with lower intensity per element.\n3. Electrodeless Discharge Lamps (EDL): Higher intensity than HCL, used for volatile elements like As, Se, and Te. They use a sealed quartz tube with the element and an inert gas, excited by microwave energy.",
    importance:
      "The light source is fundamental to AAS because it provides the specific wavelength of light needed for absorption measurements. Without a proper light source, accurate quantification of elements would be impossible. The quality of the HCL directly affects the sensitivity, precision, and detection limits of the analysis. A stable, intense light source ensures reliable and reproducible results.",
    factors: "1. Lamp current: Higher current increases intensity but may cause self-absorption and spectral line broadening.\n2. Warm-up time: Lamps need 15-30 minutes to stabilize before measurements.\n3. Lamp age: Older lamps may have reduced intensity and stability.\n4. Proper element selection for the cathode to match the analyte.\n5. Operating voltage must be within manufacturer specifications.",
    maintenance:
      "1. Store lamps in proper packaging when not in use to prevent damage.\n2. Allow proper warm-up time before making measurements.\n3. Handle with care to avoid breakage or damage to the glass envelope.\n4. Replace lamps when intensity drops significantly below acceptable levels.\n5. Keep lamp sockets clean and free of corrosion for good electrical contact.",
  },
  {
    id: "atomizer",
    name: "Atomizer",
    icon: "Flame",
    definition:
      "The atomizer is the component responsible for converting the liquid sample into free atoms in the ground state, which is the most critical step in AAS analysis.",
    description:
      "In AAS, the atomizer converts the sample from liquid or solid form into a cloud of free, ground-state atoms. This is essential because atomic absorption can only occur when the sample exists as free atoms. The two main types of atomizers are flame atomizers and electrothermal (graphite furnace) atomizers. Each has advantages depending on the application and required sensitivity.",
    workingPrinciple:
      "In flame AAS, the sample is aspirated into a flame where the high temperature (2000-3000°C) breaks down chemical bonds and converts the sample into free atoms. In graphite furnace AAS, the sample is placed in a graphite tube that is heated electrically through several temperature stages — drying (removing solvent), ashing (removing matrix), and atomization (producing free atoms). The atomization stage produces a transient cloud of atoms whose absorption is measured.",
    types: "1. Flame Atomizer: Uses air-acetylene (~2300°C) or nitrous oxide-acetylene (~2900°C) flames. Suitable for most elements.\n2. Graphite Furnace Atomizer: Electrically heated graphite tube (up to 3000°C). Offers higher sensitivity and lower detection limits.\n3. Hydride Generation Atomizer: For elements forming volatile hydrides like As, Se, Sb, and Bi.\n4. Cold Vapor Atomizer: Specifically for mercury determination using chemical reduction.",
    importance:
      "The atomizer is where the actual absorption measurement takes place. Efficient atomization is crucial for achieving good sensitivity and low detection limits. Incomplete atomization leads to poor precision and inaccurate results. The choice of atomizer determines the detection limit, sample throughput, and the types of samples that can be analyzed.",
    factors: "1. Temperature must be optimal for complete atomization of the target element.\n2. Fuel-to-oxidant ratio in flame atomizers affects flame characteristics.\n3. Sample flow rate and nebulization efficiency in flame atomizers.\n4. Heating program optimization in graphite furnace analysis.\n5. Use of chemical modifiers in graphite furnace to improve atomization.",
    maintenance:
      "1. Clean burner head regularly to prevent clogging in flame AAS.\n2. Replace graphite tubes when they show signs of wear or degradation.\n3. Check gas connections for leaks before each use.\n4. Drain the nebulizer and spray chamber after each use.\n5. Align the burner head properly for optimal light path through the flame.",
  },
  {
    id: "sample-introduction-system",
    name: "Sample Introduction System",
    icon: "Beaker",
    definition:
      "The sample introduction system is responsible for delivering the liquid sample to the atomizer in a consistent and reproducible manner, typically via nebulization.",
    description:
      "The sample introduction system in AAS consists of a nebulizer and a spray chamber. The nebulizer converts the liquid sample into a fine mist (aerosol), and the spray chamber selects only the finest droplets for introduction into the atomizer. Larger droplets are drained away to waste. This ensures consistent sample delivery and prevents large droplets from causing fluctuations in the signal.",
    workingPrinciple:
      "The pneumatic nebulizer uses the Venturi effect created by the flow of a gas (usually the oxidant gas) to draw the liquid sample up through a capillary tube and break it into fine droplets. The aerosol then enters the spray chamber where larger droplets are removed by impaction on the walls, allowing only fine droplets (typically less than 10 μm) to reach the flame. This selection process ensures a steady, consistent flow of sample to the atomizer.",
    types: "1. Pneumatic Nebulizer: Most common type, uses gas flow to create aerosol. Simple and reliable.\n2. Ultrasonic Nebulizer: Uses ultrasonic vibrations to create a finer, more uniform aerosol with higher transport efficiency.\n3. Flow Injection System: For automated, reproducible sample introduction with minimal operator intervention.\n4. Autosampler: Automated system for handling multiple samples sequentially.",
    importance:
      "The efficiency and reproducibility of sample introduction directly affect the precision and accuracy of the analysis. Only about 5-15% of the sample actually reaches the flame in a typical pneumatic nebulizer system. A well-maintained sample introduction system ensures consistent droplet size and delivery rate, leading to stable absorption signals.",
    factors: "1. Sample uptake rate and consistency.\n2. Gas flow rate through the nebulizer affects aerosol generation.\n3. Sample viscosity and surface tension can affect nebulization efficiency.\n4. Nebulizer alignment with the spray chamber.\n5. Spray chamber temperature and design.",
    maintenance:
      "1. Clean the nebulizer regularly with deionized water and appropriate solvents.\n2. Check the capillary tube for clogs or blockages.\n3. Replace worn nebulizer components such as O-rings and capillaries.\n4. Clean the spray chamber and drain to prevent buildup.\n5. Use appropriate sample dilution to prevent clogging and matrix effects.",
  },
  {
    id: "monochromator",
    name: "Monochromator",
    icon: "Eye",
    definition:
      "The monochromator is an optical device that isolates and selects a specific wavelength of light for detection, ensuring only the analytical wavelength reaches the detector.",
    description:
      "The monochromator in AAS separates the broad spectrum of light from the source into individual wavelengths and selects the analytical wavelength (the resonance line of the element being analyzed). It typically uses a diffraction grating as the dispersing element and adjustable slits to control the bandwidth of light reaching the detector. This selectivity is crucial for eliminating spectral interferences.",
    workingPrinciple:
      "Light from the atomizer passes through the entrance slit of the monochromator and strikes the diffraction grating. The grating disperses the light into its component wavelengths through constructive and destructive interference. By rotating the grating, different wavelengths can be directed toward the exit slit. Only the specific wavelength of interest passes through to the detector while all others are blocked.",
    types: "1. Grating Monochromator: Uses a diffraction grating as the dispersing element. Most common in modern AAS instruments.\n2. Prism Monochromator: Uses a glass or quartz prism for dispersion. Less common in modern instruments.\n3. Double Monochromator: Two dispersive elements in series for better resolution and lower stray light.\n4. Echelle Monochromator: High-resolution echelle grating with a cross-disperser for multi-element capability.",
    importance:
      "The monochromator is essential for selectivity in AAS. It isolates the specific wavelength at which the analyte element absorbs, rejecting other wavelengths that could cause spectral interference and inaccurate results. Proper selection of slit width (bandwidth) is a balance between resolution and signal intensity.",
    factors: "1. Spectral bandwidth (slit width) affects both resolution and light throughput.\n2. Grating efficiency and resolution determine the quality of wavelength separation.\n3. Stray light levels can affect accuracy at high absorbance values.\n4. Proper wavelength calibration is essential for accurate positioning.\n5. Alignment of optical components affects light throughput.",
    maintenance:
      "1. Keep optical surfaces clean and free of dust.\n2. Never touch optical components with bare hands.\n3. Calibrate wavelength regularly using standard lamps or known absorption lines.\n4. Protect the monochromator from moisture and corrosive environments.\n5. Have the monochromator serviced by qualified technicians periodically.",
  },
  {
    id: "detector",
    name: "Detector",
    icon: "Zap",
    definition:
      "The detector converts the intensity of light that passes through the atomized sample into an electrical signal for measurement and processing.",
    description:
      "The detector in AAS is typically a photomultiplier tube (PMT), which is a highly sensitive device that amplifies the light signal and converts it into a measurable electrical current. The amount of light reaching the detector is inversely proportional to the concentration of the analyte element in the sample — the more atoms absorbing light, the less light reaches the detector, resulting in a higher absorbance reading.",
    workingPrinciple:
      "When photons from the monochromator strike the photocathode of the PMT, they release electrons through the photoelectric effect. These electrons are accelerated through a series of dynodes, where each collision releases more electrons in a cascade effect (amplification). The final electron current collected at the anode is proportional to the light intensity. This amplified signal is then processed by the signal processing system.",
    types: "1. Photomultiplier Tube (PMT): Most common, offers high sensitivity and wide dynamic range.\n2. Solid-State Detector: CCD or photodiode array, offers multi-wavelength capability.\n3. Photodiode: Less sensitive but more compact and durable.\n4. Silicon Photodiode: Optimized for specific wavelength ranges, used in some portable AAS instruments.",
    importance:
      "The detector is crucial for translating the optical signal into a measurable quantity. High sensitivity, low noise, and wide dynamic range are essential characteristics for accurate quantitative analysis at trace and ultra-trace levels. The detector's performance directly impacts the detection limit and linear range of the instrument.",
    factors: "1. Detector sensitivity and gain settings affect signal strength and noise.\n2. Dark current (noise when no light is present) limits detection capability.\n3. Linearity of response over the working concentration range.\n4. Wavelength sensitivity range must match the analytical requirements.\n5. Temperature stability affects detector noise and baseline drift.",
    maintenance:
      "1. Protect the detector from excessive light exposure to prevent damage.\n2. Allow proper warm-up time for stable operation.\n3. Do not operate at voltages exceeding manufacturer specifications.\n4. Store the instrument in a cool, dry environment when not in use.\n5. Replace the detector when sensitivity degrades significantly below specifications.",
  },
  {
    id: "gas-supply-system",
    name: "Gas Supply System",
    icon: "Wind",
    definition:
      "The gas supply system provides the necessary gases for flame generation and sample atomization in AAS, including fuel and oxidant gases.",
    description:
      "The gas supply system in AAS delivers the fuel gas (typically acetylene) and oxidant gas (air or nitrous oxide) needed to sustain the flame in FAAS. It includes gas cylinders, regulators, pressure gauges, flow meters, and safety devices. The proper mixture and flow rate of these gases determine flame temperature and characteristics, which directly affect atomization efficiency and analytical performance.",
    workingPrinciple:
      "Gases are stored in high-pressure cylinders and reduced to working pressure by regulators. Flow meters control the rate at which each gas enters the burner. The fuel and oxidant gases mix at the burner head, where they are ignited to produce a stable flame. Different gas combinations produce different flame temperatures: air-acetylene (~2300°C) is suitable for most elements, while nitrous oxide-acetylene (~2900°C) is needed for refractory elements.",
    types: "1. Air-Acetylene System: ~2300°C, suitable for most elements with relatively low atomization temperatures.\n2. Nitrous Oxide-Acetylene System: ~2900°C, for refractory elements that form stable oxides.\n3. Argon Supply: Used in graphite furnace as purge and protective gas.\n4. Argon-Hydrogen System: For hydride generation techniques and certain specialized applications.",
    importance:
      "Proper gas supply is critical for safe and efficient operation. Incorrect gas mixtures can cause poor atomization, flame instability, or even explosions. The gas system must be maintained and checked regularly for safety. Gas purity is also important as impurities can cause background absorption and spectral interferences.",
    factors: "1. Gas purity levels — high-purity gases are essential for trace analysis.\n2. Proper flow rates and fuel-to-oxidant ratios for optimal flame conditions.\n3. Regulator accuracy and calibration.\n4. Regular leak detection to ensure safety.\n5. Cylinder pressure monitoring to avoid running out during analysis.",
    maintenance:
      "1. Check all connections for leaks regularly using soap solution or electronic leak detectors.\n2. Replace regulators and hoses according to manufacturer's recommended schedule.\n3. Never use oil or grease on gas fittings — these can react with some gases.\n4. Store gas cylinders properly in a secured, ventilated area away from heat sources.\n5. Always turn off gas supply at the cylinder valve when not in use.",
  },
  {
    id: "signal-processing-system",
    name: "Signal Processing System",
    icon: "Cog",
    definition:
      "The signal processing system amplifies, processes, and displays the electrical signal from the detector, converting it into meaningful analytical results.",
    description:
      "The signal processing system takes the weak electrical signal from the detector and processes it to produce meaningful analytical results. It includes amplifiers, analog-to-digital converters (ADC), and computer software. The system performs background correction, calculates absorption values, constructs calibration curves, and determines the concentration of elements in the sample using established relationships.",
    workingPrinciple:
      "The electrical signal from the detector is first amplified to a usable level by a preamplifier. An analog-to-digital converter changes the analog signal into digital data that the computer can process. The software applies mathematical corrections (background correction, signal smoothing, statistical analysis) and uses calibration curves to convert the absorption signal into concentration values. Results are displayed and can be exported for reporting.",
    types: "1. Analog Processing: Older systems using analog circuitry for basic signal handling.\n2. Digital Processing: Modern systems with computer control for advanced data analysis.\n3. Dual-beam Processing: Simultaneous measurement of reference and sample beams for improved stability.\n4. Background Correction Methods: Deuterium arc correction, Zeeman correction, and Smith-Hieftje correction.",
    importance:
      "The signal processing system is the 'brain' of the AAS instrument. Accurate signal processing ensures reliable quantitative results. Modern systems can handle complex data processing including multi-element analysis, quality control charts, method validation, and automated report generation. The quality of data processing directly affects result accuracy.",
    factors: "1. Amplifier gain and noise levels affect signal quality.\n2. ADC resolution (bit depth) determines measurement precision.\n3. Data processing algorithms influence accuracy and detection limits.\n4. Calibration curve fitting methods (linear, quadratic, etc.).\n5. Background correction effectiveness for complex matrices.",
    maintenance:
      "1. Keep software updated to the latest version from the manufacturer.\n2. Regularly verify calibration using certified reference materials.\n3. Check electronic connections and cables for damage.\n4. Back up data, methods, and calibration files regularly.\n5. Perform system diagnostics and self-tests as recommended by the manufacturer.",
  },
];

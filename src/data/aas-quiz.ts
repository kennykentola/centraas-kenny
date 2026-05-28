export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const aasQuizQuestions: QuizQuestion[] = [
  // Page 1: Q1-Q10
  {
    question: "Atomic Absorption Spectroscopy is primarily used to determine the concentration of which type of elements?",
    options: ["Non-metals", "Metals", "Organic compounds", "Proteins"],
    correctAnswer: 1,
  },
  {
    question: "Atomic Absorption Spectroscopy works based on the principle that atoms absorb:",
    options: ["Infrared radiation", "Ultraviolet radiation only", "Light at specific characteristic wavelengths", "All wavelengths of visible light equally"],
    correctAnswer: 2,
  },
  {
    question: "The law that explains the relationship between absorbance and concentration is:",
    options: ["Newton's Law", "Ohm's Law", "Beer-Lambert Law", "Boyle's Law"],
    correctAnswer: 2,
  },
  {
    question: "In AAS, the amount of light absorbed is proportional to:",
    options: ["The volume of the sample", "The concentration of the element", "The temperature of the flame", "The size of the instrument"],
    correctAnswer: 1,
  },
  {
    question: "In AAS analysis, atoms must be in which state to absorb radiation?",
    options: ["Solid state", "Liquid state", "Gaseous state (free atoms)", "Plasma state"],
    correctAnswer: 2,
  },
  {
    question: "The most commonly used light source in AAS is:",
    options: ["Tungsten lamp", "Hollow Cathode Lamp", "LED lamp", "Mercury arc lamp"],
    correctAnswer: 1,
  },
  {
    question: "The hollow cathode lamp emits:",
    options: ["White light", "Light at wavelengths specific to the element in the cathode", "Only ultraviolet light", "Infrared radiation"],
    correctAnswer: 1,
  },
  {
    question: "The cathode of a hollow cathode lamp is made of:",
    options: ["Tungsten", "The element being analyzed", "Glass", "Steel"],
    correctAnswer: 1,
  },
  {
    question: "The inert gas used inside a hollow cathode lamp is usually:",
    options: ["Oxygen", "Carbon dioxide", "Neon or Argon", "Nitrogen"],
    correctAnswer: 2,
  },
  {
    question: "The function of the light source in AAS is to:",
    options: ["Atomize the sample", "Produce element-specific radiation for absorption measurement", "Detect the concentration of elements", "Cool the instrument"],
    correctAnswer: 1,
  },
  // Page 2: Q11-Q20
  {
    question: "The atomizer converts the sample into:",
    options: ["A solid residue", "Free atoms in the gaseous state", "A colored solution", "A gas mixture"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a common atomization method?",
    options: ["Electrophoresis", "Centrifugation", "Flame atomization", "Titration"],
    correctAnswer: 2,
  },
  {
    question: "A flame atomizer typically uses:",
    options: ["Hydrogen and oxygen", "Acetylene and air", "Methane and nitrogen", "Propane and helium"],
    correctAnswer: 1,
  },
  {
    question: "Graphite furnace AAS atomizes the sample using:",
    options: ["A chemical reaction", "Electrical heating of a graphite tube", "Laser beam", "Sound waves"],
    correctAnswer: 1,
  },
  {
    question: "The graphite furnace atomization process includes:",
    options: ["Only drying stage", "Drying, ashing, and atomization stages", "Only atomization stage", "Washing and rinsing stages"],
    correctAnswer: 1,
  },
  {
    question: "The component that converts liquid sample into aerosol is the:",
    options: ["Monochromator", "Nebulizer", "Detector", "Light source"],
    correctAnswer: 1,
  },
  {
    question: "The spray chamber is used to:",
    options: ["Store the sample", "Select fine droplets and remove large ones", "Ignite the flame", "Measure light intensity"],
    correctAnswer: 1,
  },
  {
    question: "The main function of the sample introduction system is to:",
    options: ["Detect elements", "Deliver the sample to the atomizer consistently", "Produce light for absorption", "Amplify signals"],
    correctAnswer: 1,
  },
  {
    question: "The aerosol produced in the nebulizer enters the:",
    options: ["Detector directly", "Spray chamber", "Light source", "Signal processor"],
    correctAnswer: 1,
  },
  {
    question: "Large droplets removed in the spray chamber go to the:",
    options: ["Detector", "Waste container", "Atomizer", "Monochromator"],
    correctAnswer: 1,
  },
  // Page 3: Q21-Q30
  {
    question: "The monochromator separates light based on:",
    options: ["Intensity only", "Wavelength", "Color temperature", "Amplitude"],
    correctAnswer: 1,
  },
  {
    question: "The main function of the monochromator is to:",
    options: ["Amplify signals", "Isolate the specific analytical wavelength", "Atomize the sample", "Produce light"],
    correctAnswer: 1,
  },
  {
    question: "Common monochromator components include:",
    options: ["Fuel gas and oxidant", "Entrance slit, diffraction grating, and exit slit", "Nebulizer and spray chamber", "Photocathode and anode"],
    correctAnswer: 1,
  },
  {
    question: "The entrance slit of a monochromator allows:",
    options: ["Sample to enter", "Light from the atomizer to enter the monochromator", "Gas to flow through", "Electrical current to pass"],
    correctAnswer: 1,
  },
  {
    question: "The monochromator improves:",
    options: ["Flame temperature", "Selectivity by isolating specific wavelengths", "Nebulization efficiency", "Gas flow rate"],
    correctAnswer: 1,
  },
  {
    question: "The detector measures:",
    options: ["Sample volume", "The intensity of light reaching it", "Gas pressure", "Flame temperature"],
    correctAnswer: 1,
  },
  {
    question: "The most common detector used in AAS is:",
    options: ["Thermocouple", "Photomultiplier tube (PMT)", "Barometer", "pH meter"],
    correctAnswer: 1,
  },
  {
    question: "The detector converts light energy into:",
    options: ["Heat energy", "Electrical signal", "Mechanical energy", "Sound energy"],
    correctAnswer: 1,
  },
  {
    question: "Detector sensitivity is important for measuring:",
    options: ["Large concentrations only", "Trace and ultra-trace concentrations", "Temperature changes", "Gas flow rates"],
    correctAnswer: 1,
  },
  {
    question: "The signal from the detector is sent to the:",
    options: ["Nebulizer", "Signal processing system", "Atomizer", "Gas supply"],
    correctAnswer: 1,
  },
  // Page 4: Q31-Q40
  {
    question: "The gas supply system provides:",
    options: ["Electrical power", "Fuel and oxidant gases for the flame", "Sample for analysis", "Cooling water"],
    correctAnswer: 1,
  },
  {
    question: "Which gas is commonly used as fuel in FAAS?",
    options: ["Oxygen", "Acetylene", "Helium", "Nitrogen"],
    correctAnswer: 1,
  },
  {
    question: "Nitrous oxide-acetylene flame is used for:",
    options: ["All elements equally", "Refractory elements that form stable oxides", "Only organic samples", "Only liquid samples"],
    correctAnswer: 1,
  },
  {
    question: "The approximate temperature of air-acetylene flame is:",
    options: ["500 C", "2300 C", "5000 C", "10000 C"],
    correctAnswer: 1,
  },
  {
    question: "Gas purity is important because impurities can cause:",
    options: ["Better sensitivity", "Background absorption and spectral interferences", "Higher temperature", "Faster analysis"],
    correctAnswer: 1,
  },
  {
    question: "The signal processing system converts detector output into:",
    options: ["Gas flow", "Concentration data using calibration curves", "Temperature readings", "Pressure values"],
    correctAnswer: 1,
  },
  {
    question: "Background correction in AAS is used to:",
    options: ["Increase the flame temperature", "Correct for non-specific absorption and matrix effects", "Change the sample volume", "Replace the light source"],
    correctAnswer: 1,
  },
  {
    question: "A calibration curve in AAS relates:",
    options: ["Temperature to gas flow", "Absorbance to concentration of the analyte", "Wavelength to temperature", "Time to sample volume"],
    correctAnswer: 1,
  },
  {
    question: "The most sensitive AAS technique is:",
    options: ["Flame AAS", "Graphite furnace AAS", "Cold vapor AAS", "They all have the same sensitivity"],
    correctAnswer: 1,
  },
  {
    question: "ICP-OES differs from AAS because ICP-OES measures:",
    options: ["Light absorption", "Light emission from excited atoms", "Mass-to-charge ratio", "Electrical conductivity"],
    correctAnswer: 1,
  },
  // Page 5: Q41-Q50
  {
    question: "ICP-MS can detect elements at concentrations as low as:",
    options: ["Parts per hundred", "Parts per million", "Parts per trillion", "Parts per thousand"],
    correctAnswer: 2,
  },
  {
    question: "The plasma temperature in ICP techniques can reach:",
    options: ["500-1000 K", "6000-10000 K", "100-500 K", "20000-50000 K"],
    correctAnswer: 1,
  },
  {
    question: "AAS is widely used in which of the following fields?",
    options: ["Only geology", "Pharmacy, environmental science, food analysis", "Only chemistry", "Only physics"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following elements can be analyzed using AAS?",
    options: ["Carbon only", "Iron, zinc, calcium, lead, cadmium", "Hydrogen and oxygen only", "Only noble gases"],
    correctAnswer: 1,
  },
  {
    question: "Each element absorbs light at a unique wavelength. This property is called:",
    options: ["Universal absorption", "Characteristic absorption wavelength", "Random absorption", "Thermal absorption"],
    correctAnswer: 1,
  },
  {
    question: "In AAS, the Beer-Lambert Law states that absorbance is:",
    options: ["Inversely proportional to concentration", "Directly proportional to concentration", "Unrelated to concentration", "Equal to the temperature"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is an advantage of AAS?",
    options: ["Can analyze all elements simultaneously", "High selectivity for specific elements", "No sample preparation needed", "Extremely low cost"],
    correctAnswer: 1,
  },
  {
    question: "A limitation of traditional AAS compared to ICP techniques is:",
    options: ["Higher sensitivity", "Single-element analysis at a time", "Lower cost", "Simpler operation"],
    correctAnswer: 1,
  },
  {
    question: "The waste container in the sample introduction system collects:",
    options: ["Used light sources", "Large droplets that were not sent to the atomizer", "Used detectors", "Empty gas cylinders"],
    correctAnswer: 1,
  },
  {
    question: "Which type of AAS is specifically used for mercury determination?",
    options: ["Flame AAS", "Cold vapor AAS", "Graphite furnace AAS", "ICP-MS"],
    correctAnswer: 1,
  },
];

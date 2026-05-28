export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const centrifugeQuizQuestions: QuizQuestion[] = [
  // Page 1: Q1-Q10
  {
    question: "What is the primary function of a centrifuge machine?",
    options: ["Heating samples", "Separating substances based on density", "Mixing chemicals", "Cooling liquids"],
    correctAnswer: 1,
  },
  {
    question: "The spinning part of a centrifuge machine is called the:",
    options: ["Chamber", "Rotor", "Shaft", "Lid"],
    correctAnswer: 1,
  },
  {
    question: "Which force is responsible for separation in a centrifuge?",
    options: ["Magnetic Force", "Frictional Force", "Centrifugal Force", "Gravitational Force"],
    correctAnswer: 2,
  },
  {
    question: "Which centrifuge is mainly used for very small sample volumes?",
    options: ["Industrial Centrifuge", "Clinical Centrifuge", "Microcentrifuge", "Basket Centrifuge"],
    correctAnswer: 2,
  },
  {
    question: "What is the function of the centrifuge chamber?",
    options: ["To Cool The Motor", "To Contain The Spinning Rotor Safely", "To Increase Sample Volume", "To Measure Speed"],
    correctAnswer: 1,
  },
  {
    question: "What material is commonly used for centrifuge chambers because of corrosion resistance?",
    options: ["Wood", "Stainless Steel", "Rubber", "Paper"],
    correctAnswer: 1,
  },
  {
    question: "The device that prevents the centrifuge lid from opening during operation is called:",
    options: ["Timer", "Rotor", "Safety interlock system", "Speed knob"],
    correctAnswer: 2,
  },
  {
    question: "What is the major function of the centrifuge motor?",
    options: ["To Hold Samples", "To Generate Rotational Force To Spin The Rotor", "To Cool The Machine", "To Measure Temperature"],
    correctAnswer: 1,
  },
  {
    question: "Which centrifuge type is designed to maintain low temperatures during operation?",
    options: ["Hematocrit Centrifuge", "Refrigerated Centrifuge", "Hand Centrifuge", "Clinical Centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "RPM in centrifugation means:",
    options: ["Rotation Per Meter", "Revolutions Per Minute", "Rotor Power Measurement", "Rotation Pressure Meter"],
    correctAnswer: 1,
  },
  // Page 2: Q11-Q20
  {
    question: "What happens if centrifuge tubes are not balanced properly?",
    options: ["Faster Separation", "Machine Vibration And Possible Damage", "Better Cooling", "Increased Sample Size"],
    correctAnswer: 1,
  },
  {
    question: "Which part supports the rotating shaft and reduces friction?",
    options: ["Bearings", "Timer", "Lid", "Chamber"],
    correctAnswer: 0,
  },
  {
    question: "Which centrifuge is commonly used for blood testing in hospitals?",
    options: ["Industrial Centrifuge", "Clinical Centrifuge", "Basket Centrifuge", "Gas Centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of centrifuge tubes?",
    options: ["To Generate Heat", "To Hold Samples During Spinning", "To Reduce Speed", "To Power The Motor"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a safety precaution when using a centrifuge?",
    options: ["Open The Lid While Spinning", "Overload The Rotor", "Balance All Tubes Properly", "Use Cracked Tubes"],
    correctAnswer: 2,
  },
  {
    question: "Which component allows the user to set speed and time?",
    options: ["Chamber", "Rotor", "Control Panel", "Bearing"],
    correctAnswer: 2,
  },
  {
    question: "Which centrifuge type operates at extremely high speeds for molecular studies?",
    options: ["Clinical centrifuge", "Ultracentrifuge", "Hand centrifuge", "Low-speed centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "What is the function of the centrifuge lid?",
    options: ["To Increase Sample Density", "To Prevent Sample Spillage And Improve Safety", "To Rotate The Rotor", "To Cool The Samples"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is commonly used to make centrifuge tubes?",
    options: ["Polypropylene", "Glass", "Leather", "Ceramic"],
    correctAnswer: 0,
  },
  {
    question: "A centrifuge used for separating blood components is called:",
    options: ["Microcentrifuge", "Refrigerated Centrifuge", "Hematocrit Centrifuge", "Industrial Centrifuge"],
    correctAnswer: 2,
  },
  // Page 3: Q21-Q25
  {
    question: "What is the purpose of a timer in a centrifuge machine?",
    options: ["To Increase Temperature", "To Monitor Operation Duration", "To Hold Tubes", "To Lock The Rotor"],
    correctAnswer: 1,
  },
  {
    question: "Which centrifuge component connects the motor to the rotor?",
    options: ["Chamber", "Drive Shaft", "Timer", "Lid"],
    correctAnswer: 1,
  },
  {
    question: "Why is regular cleaning of a centrifuge important?",
    options: ["To Make It Heavier", "To Improve Appearance Only", "To Prevent Contamination And Damage", "To Increase Vibration"],
    correctAnswer: 2,
  },
  {
    question: "Which centrifuge type is commonly used in industries for large-scale separation?",
    options: ["Industrial Centrifuge", "Clinical Centrifuge", "Microcentrifuge", "Hematocrit Centrifuge"],
    correctAnswer: 0,
  },
  {
    question: "What should be done before starting a centrifuge?",
    options: ["Open The Lid", "Remove All Tubes", "Ensure Samples Are Balanced Correctly", "Reduce Chamber Size"],
    correctAnswer: 2,
  },
];

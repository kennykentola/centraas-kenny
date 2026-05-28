export interface PartData {
  id: string;
  name: string;
  icon: string;
  image: string;
  definition: string;
  description: string;
  workingPrinciple: string;
  types: string;
  importance: string;
  factors: string;
  maintenance: string;
}

export const centrifugeParts: PartData[] = [
  {
    id: "rotor",
    name: "The Rotor",
    icon: "RotateCcw",
    image: "/images/part-centrifuge-rotor.png",
    definition:
      "The rotor is the rotating assembly of a centrifuge that holds sample containers and spins them at high speeds to generate centrifugal force.",
    description:
      "The rotor is the central component of any centrifuge. It is attached to the drive shaft and rotates at high speeds, generating centrifugal force that separates components of different densities within the sample. Rotors come in various designs optimized for different applications, sample volumes, and speed requirements. Selecting the correct rotor is essential for achieving the desired separation.",
    workingPrinciple:
      "When the motor spins the rotor, centrifugal force pushes particles outward, away from the axis of rotation. Denser particles sediment faster and accumulate at the bottom of the tube, while lighter particles remain closer to the top. The relative centrifugal force (RCF) depends on the rotor speed (RPM) and the radius of rotation. RCF = 1.118 × 10⁻⁵ × r × N², where r is the radius in cm and N is the speed in RPM.",
    types: "1. Fixed-Angle Rotor: Tubes held at a fixed angle (typically 25-45°). Best for pelleting applications.\n2. Swinging-Bucket Rotor: Buckets swing to horizontal during operation. Ideal for density gradient separations.\n3. Vertical Rotor: Tubes vertical during spin, excellent for isopycnic separations.\n4. Near-Vertical Rotor: Hybrid between fixed-angle and vertical, shorter run times.",
    importance:
      "The rotor is essential because it directly determines the centrifugal force applied to samples. Rotor selection affects separation efficiency, resolution, and the types of separations that can be performed. Using the wrong rotor can result in poor separation or damage to samples.",
    factors: "1. Maximum speed rating (RPM and RCF) — never exceed these limits.\n2. Number and capacity of sample positions.\n3. Rotor material and corrosion resistance.\n4. Compatibility with specific sample tubes.\n5. Proper balance and alignment during loading.",
    maintenance:
      "1. Inspect for cracks, corrosion, or damage before each use.\n2. Clean thoroughly after every use.\n3. Never exceed maximum rated speed.\n4. Autoclave rotors only if rated for autoclaving by the manufacturer.\n5. Replace after the manufacturer's recommended service life or cycles.",
  },
  {
    id: "electric-motor",
    name: "Electric Motor",
    icon: "Zap",
    image: "/images/part-centrifuge-motor.png",
    definition:
      "The electric motor provides the rotational power needed to spin the rotor at high speeds, converting electrical energy into mechanical energy.",
    description:
      "The electric motor is the power source of the centrifuge. It converts electrical energy into mechanical rotational energy, driving the rotor to achieve the required speeds for sample separation. Modern centrifuge motors are typically brushless DC motors or induction motors that offer smooth, quiet operation with precise speed control and minimal vibration.",
    workingPrinciple:
      "The motor uses electromagnetic principles to generate rotation. When electric current flows through the motor windings, it creates a magnetic field that interacts with permanent magnets or a rotor to produce torque. Electronic speed controllers regulate the current to maintain precise RPM settings and provide smooth acceleration and deceleration profiles, protecting both the motor and samples.",
    types: "1. Brushed DC Motor: Traditional design but requires periodic brush replacement.\n2. Brushless DC Motor: More reliable, longer life, less maintenance. Most common in modern centrifuges.\n3. Induction Motor: Very durable, used in heavy-duty and industrial centrifuges.\n4. Stepper Motor: Provides precise speed control, used in specialized applications.",
    importance:
      "The motor is the heart of the centrifuge's mechanical system. Its performance directly affects speed accuracy, reproducibility, and the centrifuge's ability to achieve the required RCF for effective separation. Motor quality determines the smoothness of acceleration and deceleration, which affects sample integrity.",
    factors: "1. Power output and torque characteristics.\n2. Speed range and accuracy of speed control.\n3. Heat generation during extended runs.\n4. Vibration levels at operating speed.\n5. Noise output during operation.",
    maintenance:
      "1. Keep motor vents clean and unobstructed for proper cooling.\n2. Do not overload the motor by exceeding maximum rotor capacity.\n3. Report unusual noises or vibrations immediately.\n4. Ensure proper ventilation around the centrifuge.\n5. Have motors serviced by qualified technicians at recommended intervals.",
  },
  {
    id: "drive-shaft",
    name: "Drive Shaft",
    icon: "Settings",
    image: "/images/part-centrifuge-driveshaft.png",
    definition:
      "The drive shaft connects the electric motor to the rotor, transmitting rotational energy from the motor to the rotor assembly.",
    description:
      "The drive shaft is a cylindrical metal rod that links the motor to the rotor assembly. It must be precisely machined and balanced to ensure smooth, vibration-free operation at high speeds. The drive shaft often incorporates a flexible coupling to absorb minor misalignments and reduce vibration transmission between the motor and rotor.",
    workingPrinciple:
      "The motor rotates the drive shaft, which in turn rotates the rotor. The shaft must efficiently transfer the motor's torque to the rotor while maintaining precise alignment. Any imbalance or misalignment can cause excessive vibration, noise, and potential damage to bearings and other components. The shaft is designed to handle the high rotational stresses encountered during operation.",
    types: "1. Flexible Coupling Shaft: Uses a flexible coupling to absorb minor misalignment and reduce vibration.\n2. Direct-Drive Shaft: Direct motor-to-rotor connection, no intermediate coupling.\n3. Belt-Driven Shaft: Uses belts for speed variation and vibration isolation.\n4. Gear-Driven Shaft: Uses gears for precise speed control and power transmission.",
    importance:
      "The drive shaft is critical for efficient power transmission and smooth operation. A faulty or worn drive shaft can cause vibration, noise, premature bearing wear, and ultimately centrifuge failure. The integrity of the shaft is essential for safe operation at high speeds.",
    factors: "1. Material strength and rigidity to withstand rotational forces.\n2. Balance and alignment precision during manufacturing.\n3. Coupling flexibility to absorb minor misalignments.\n4. Corrosion resistance for long-term durability.\n5. Wear resistance under continuous operation.",
    maintenance:
      "1. Check for alignment regularly using appropriate tools.\n2. Inspect for signs of wear, bending, or fatigue.\n3. Lubricate bearings and couplings according to manufacturer instructions.\n4. Replace immediately if bent or showing signs of fatigue failure.\n5. Keep the shaft area clean and free of debris.",
  },
  {
    id: "bearings",
    name: "Bearings",
    icon: "CircleDot",
    image: "/images/part-centrifuge-bearings.png",
    definition:
      "Bearings are mechanical components that reduce friction between rotating and stationary parts of the centrifuge, enabling smooth high-speed rotation.",
    description:
      "Bearings support the drive shaft and rotor assembly, allowing them to rotate smoothly with minimal friction. They absorb radial and axial loads generated during high-speed rotation and are critical for the centrifuge's stability, precision, and longevity. Quality bearings are essential for quiet, vibration-free operation at high speeds.",
    workingPrinciple:
      "Bearings use rolling elements (balls or rollers) between an inner and outer race to minimize the surface area in contact during rotation. This dramatically reduces friction compared to sliding contact, allowing the shaft to rotate freely even under heavy loads. The rolling elements are typically lubricated with grease or oil to further reduce friction and wear.",
    types: "1. Ball Bearings: Most common type, good for radial and axial loads.\n2. Roller Bearings: Better for heavy radial loads, used in larger centrifuges.\n3. Ceramic Bearings: Lower friction, longer life, used in high-performance centrifuges.\n4. Magnetic Bearings: No physical contact, used in ultracentrifuges for extremely high speeds.",
    importance:
      "Without bearings, the friction between rotating parts would be enormous, causing excessive heat, wear, and energy consumption. Good bearings are essential for achieving the high speeds required for effective separation while maintaining sample integrity through smooth operation.",
    factors: "1. Load capacity (both radial and axial) for the specific application.\n2. Speed rating must match or exceed maximum operating speed.\n3. Lubrication quality and adequacy.\n4. Sealing effectiveness to prevent contamination.\n5. Operating temperature range.",
    maintenance:
      "1. Monitor for unusual noise or vibration during operation.\n2. Ensure proper lubrication at recommended intervals.\n3. Keep sealed bearings protected from moisture and contamination.\n4. Replace at manufacturer's recommended service intervals.\n5. Never operate the centrifuge at speeds exceeding the bearing rating.",
  },
  {
    id: "control-panel",
    name: "Control Panel",
    icon: "MonitorPlay",
    image: "/images/part-centrifuge-controlpanel.png",
    definition:
      "The control panel is the user interface that allows operators to set and monitor centrifuge operating parameters such as speed, time, and temperature.",
    description:
      "The control panel provides the interface for setting and adjusting all centrifuge operating parameters including speed (RPM or RCF), time, temperature, and acceleration/deceleration profiles. Modern control panels feature digital displays, touch screens, and programmable settings for storing frequently used protocols, making operation more efficient and reproducible.",
    workingPrinciple:
      "The control panel sends electronic signals to the motor controller and other subsystems based on user inputs. Microprocessors process the commands and provide real-time feedback on operating parameters. Safety interlocks are integrated into the control system to prevent unsafe operation, and error codes help diagnose problems.",
    types: "1. Analog Control Panel: Simple dial-type controls, found in older centrifuges.\n2. Digital LED Panel: Numeric displays with button controls for basic parameters.\n3. LCD/Touch Screen Panel: Modern programmable interface with visual feedback.\n4. Remote Control: Computer-controlled operation for integration with lab automation systems.",
    importance:
      "The control panel is the operator's primary means of interacting with the centrifuge. A well-designed control panel makes operation intuitive, reduces the risk of errors, and enhances safety. Clear displays and logical controls help prevent user mistakes that could damage equipment or samples.",
    factors: "1. Ease of use and display readability under various lighting conditions.\n2. Programming capabilities for storing custom protocols.\n3. Accuracy of speed and time settings.\n4. Integration with safety interlock systems.\n5. Data logging capabilities for Good Laboratory Practice (GLP).",
    maintenance:
      "1. Keep the panel clean and dry, protect from chemical spills.\n2. Do not press buttons with excessive force.\n3. Report any display malfunctions or erratic behavior immediately.\n4. Follow the manufacturer's calibration schedule for speed verification.\n5. Protect touch screens from scratches by using appropriate cleaning methods.",
  },
  {
    id: "refrigeration-system",
    name: "Refrigeration System",
    icon: "Snowflake",
    image: "/images/part-centrifuge-refrigeration.png",
    definition:
      "The refrigeration system maintains low temperatures within the centrifuge chamber during operation to prevent sample degradation.",
    description:
      "The refrigeration system in a refrigerated centrifuge uses a compressor and cooling coils to maintain the temperature of the rotor chamber, typically between -20°C and +40°C. This prevents heat-generated degradation of temperature-sensitive samples during high-speed centrifugation, which is essential for biological samples, enzymes, proteins, and other labile materials.",
    workingPrinciple:
      "A refrigerant gas is compressed by the compressor, raising its temperature. The hot gas passes through condenser coils where it releases heat to the environment and condenses into a liquid. The liquid refrigerant then passes through expansion valves into evaporator coils inside the centrifuge chamber, where it absorbs heat and cools the chamber to the set temperature.",
    types: "1. Compressor-based: Most common, uses refrigerant gas for effective cooling.\n2. Peltier (thermoelectric): Solid-state cooling, no compressor, quieter operation.\n3. Liquid-cooled: Uses circulating coolant for precise temperature control.\n4. Cryogenic: For ultra-low temperature applications below -20°C.",
    importance:
      "Temperature control is critical for many biological and chemical applications. Heat generated during centrifugation can denature proteins, activate enzymes, or otherwise alter sample properties. The refrigeration system ensures sample integrity by maintaining consistent low temperatures throughout the run.",
    factors: "1. Cooling capacity and speed of temperature attainment.\n2. Temperature range and accuracy of control.\n3. Refrigerant type and environmental impact.\n4. Energy efficiency and power consumption.\n5. Noise level during operation.",
    maintenance:
      "1. Clean condenser coils regularly to maintain cooling efficiency.\n2. Check refrigerant levels and report any decline.\n3. Ensure proper ventilation around the centrifuge for heat dissipation.\n4. Report any cooling performance issues or unusual sounds promptly.\n5. Have the system serviced annually by qualified refrigeration technicians.",
  },
  {
    id: "tube-sample-container",
    name: "Tube / Sample Container",
    icon: "TestTube",
    image: "/images/part-centrifuge-tubes.png",
    definition:
      "Centrifuge tubes are specialized containers designed to hold samples during centrifugation, capable of withstanding high centrifugal forces.",
    description:
      "Centrifuge tubes are designed to withstand the high centrifugal forces generated during operation. They come in various materials, sizes, and designs to accommodate different sample types and volumes. Proper selection and use of centrifuge tubes is essential for sample integrity and operator safety. Using incorrect or damaged tubes can lead to sample loss or tube failure.",
    workingPrinciple:
      "The tube holds the sample while the centrifugal force pushes denser components to the bottom. The tube material must be strong enough to resist deformation or rupture at the operating speed. Tubes often have graduated markings for volume measurement and conical bottoms for efficient pellet formation. Sealing mechanisms prevent leakage during rotation.",
    types: "1. Polypropylene (PP): Most common, good chemical resistance, autoclavable.\n2. Polycarbonate (PC): Clear for visual monitoring, limited chemical resistance.\n3. Polyethylene (PE): For light-duty, low-speed applications.\n4. Glass: For chemical compatibility with aggressive solvents.\n5. Ultra-clear: Special grade polypropylene for optimal visibility.",
    importance:
      "Tube failure during centrifugation can be dangerous and can ruin both the sample and the centrifuge. Choosing the correct tube type for the application and properly sealing tubes are critical for safe and effective centrifugation. Always verify tube RCF ratings match the intended operating conditions.",
    factors: "1. Maximum RCF rating must exceed the centrifuge's maximum speed.\n2. Chemical compatibility with the sample being centrifuged.\n3. Sterilization requirements (autoclavable or not).\n4. Volume capacity appropriate for the sample.\n5. Cap/closure type for proper sealing.",
    maintenance:
      "1. Inspect tubes for cracks or defects before each use.\n2. Never exceed the maximum RCF rating of the tubes.\n3. Use appropriate caps or seals to prevent leakage.\n4. Discard any damaged or deformed tubes immediately.\n5. Follow proper decontamination procedures for reusable tubes.",
  },
  {
    id: "safety-interlock",
    name: "Safety Interlock",
    icon: "Shield",
    image: "/images/part-centrifuge-interlock.png",
    definition:
      "The safety interlock is a critical safety mechanism that prevents the centrifuge lid from being opened while the rotor is spinning, protecting operators from injury.",
    description:
      "The safety interlock system ensures that the centrifuge cannot be opened during operation, protecting the operator from the spinning rotor and potential projectile hazards. It typically consists of mechanical locks and electronic sensors that detect lid position and rotor speed. Modern interlocks also include imbalance detection and automatic emergency shutdown capabilities.",
    workingPrinciple:
      "An electromechanical lock engages when the centrifuge starts and only releases when the rotor has completely stopped. Sensors continuously monitor rotor speed and lid position. If an imbalance is detected, the interlock triggers an automatic shutdown to prevent damage. The system prevents the lid from opening even if power is interrupted mid-run.",
    types: "1. Mechanical Lock: Physical latch mechanism that physically prevents lid opening.\n2. Electromagnetic Lock: Electrically controlled lock with electronic monitoring.\n3. Imbalance Sensor: Detects weight imbalance and triggers automatic shutdown.\n4. Lid Sensor: Detects proper lid closure before allowing centrifuge to start.",
    importance:
      "The safety interlock is the most important safety feature of a centrifuge. Opening a spinning centrifuge can cause serious injury or death from contact with the rotor or flying debris. Never bypass, disable, or attempt to defeat the interlock system under any circumstances.",
    factors: "1. Response time and reliability of the locking mechanism.\n2. Imbalance detection sensitivity and thresholds.\n3. Emergency stop functionality and accessibility.\n4. Visual and audible alarms for warning conditions.\n5. Lock release mechanism after safe rotor stop.",
    maintenance:
      "1. Never bypass, disable, or modify the interlock system.\n2. Test interlock function regularly as part of routine maintenance.\n3. Report any malfunctions immediately and take the centrifuge out of service.\n4. Do not force open a locked lid — wait for the rotor to stop completely.\n5. Have the system inspected during all scheduled maintenance intervals.",
  },
  {
    id: "timer",
    name: "Timer",
    icon: "Timer",
    image: "/images/part-centrifuge-timer.png",
    definition:
      "The timer controls the duration of the centrifugation run, allowing operators to set precise timing for reproducible separations.",
    description:
      "The timer is a critical control feature that allows the operator to set the exact duration of centrifugation. It works in conjunction with the motor controller to automatically stop the centrifuge after the set time has elapsed. Modern timers offer precise digital timing with programmable features, allowing storage of commonly used time settings.",
    workingPrinciple:
      "The timer counts down from the set time while the centrifuge operates. When the timer reaches zero, it sends a signal to the motor controller to begin deceleration and stop the rotor. The timer is typically integrated with the control panel and displays the remaining time. Some advanced timers also track total run time for maintenance scheduling.",
    types: "1. Mechanical Timer: Spring-wound dial timer, found in older centrifuges.\n2. Digital Timer: Electronic countdown timer with precise accuracy.\n3. Programmable Timer: Multiple time settings stored for quick access.\n4. Continuous Timer: Runs until manually stopped, with elapsed time display.",
    importance:
      "Precise timing ensures reproducible separations between runs. Over-centrifugation can cause sample damage or hard-to-resuspend pellets, while under-centrifugation may result in incomplete separation. The timer is essential for achieving consistent, reliable results across multiple runs and operators.",
    factors: "1. Timing accuracy over short and long durations.\n2. Display readability and visibility.\n3. Programming capabilities for frequently used protocols.\n4. Integration with other control parameters.\n5. Audible alarm at completion for operator notification.",
    maintenance:
      "1. Verify timer accuracy periodically using a reference timer.\n2. Do not attempt to repair internal timer components.\n3. Report any timing inconsistencies or display issues.\n4. Keep the timer display clean and free of obstructions.\n5. Test the alarm function regularly to ensure it is audible.",
  },
  {
    id: "chamber-housing",
    name: "Chamber / Housing",
    icon: "Layers",
    image: "/images/part-centrifuge-chamber.png",
    definition:
      "The chamber/housing is the robust enclosure that contains the rotor and provides a protective barrier during centrifugation.",
    description:
      "The centrifuge chamber is a robust metal enclosure that surrounds the rotor assembly. It serves multiple purposes: containing any sample that might escape from tubes, providing sound insulation, maintaining temperature (in refrigerated models), and protecting operators from the rotating rotor. The chamber is typically made of heavy-gauge steel or aluminum alloy for maximum strength.",
    workingPrinciple:
      "The chamber is designed to be a sealed, reinforced enclosure that can withstand the forces generated during centrifugation. In case of tube breakage, the chamber contains the spillage and prevents contamination. In refrigerated models, the chamber is insulated and contains cooling coils to maintain the set temperature throughout the run.",
    types: "1. Standard Chamber: Basic containment for general-purpose centrifugation.\n2. Refrigerated Chamber: Insulated with integrated cooling coils.\n3. Aerosol-tight Chamber: Sealed for biohazard containment and sterile work.\n4. Heavy-duty Chamber: Reinforced for high-speed ultracentrifuges.",
    importance:
      "The chamber provides essential protection for the operator and the laboratory environment. It contains potential hazards (broken tubes, aerosols, chemical spills) and provides the structural integrity needed for safe high-speed operation. The chamber also contributes to noise reduction and temperature stability.",
    factors: "1. Material strength and thickness for containment at maximum speed.\n2. Seal integrity for temperature maintenance and containment.\n3. Ease of cleaning and decontamination.\n4. Corrosion resistance for long-term durability.\n5. Insulation quality in refrigerated models.",
    maintenance:
      "1. Clean the chamber immediately after any sample spill or breakage.\n2. Inspect regularly for damage, corrosion, or wear.\n3. Decontaminate regularly, especially after biohazardous use.\n4. Check door seals for wear or damage that could compromise the seal.\n5. Never operate the centrifuge with a damaged or compromised chamber.",
  },
];

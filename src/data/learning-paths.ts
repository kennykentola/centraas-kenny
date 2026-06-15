export type MachineModule = 'aas' | 'centrifuge';

export type LessonStatus = 'not-started' | 'in-progress' | 'completed';

export interface LearningLesson {
    id: string;
    title: string;
    description: string;
    href: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    estimatedMinutes: number;
    prerequisites: string[];
    objectives: string[];
    summary: string[];
    safetyNotes: string[];
    worksheetTitle: string;
    worksheetTasks: string[];
}

export interface LearningPath {
    module: MachineModule;
    title: string;
    description: string;
    estimatedMinutes: number;
    passingScore: number;
    lessons: LearningLesson[];
}

export const learningPaths: LearningPath[] = [
    {
        module: 'aas',
        title: 'Atomic Absorption Spectroscopy Learning Path',
        description: 'Guided AAS training from basic principles through calibration, operation, safety, and troubleshooting.',
        estimatedMinutes: 165,
        passingScore: 80,
        lessons: [
            {
                id: 'aas-principles',
                title: 'AAS Principles and Measurement Theory',
                description: 'Understand what AAS measures, why metals absorb characteristic light, and how Beer-Lambert law supports quantitative analysis.',
                href: '/aas/overview',
                difficulty: 'Beginner',
                estimatedMinutes: 20,
                prerequisites: ['Basic chemistry', 'Concentration and solution concepts'],
                objectives: ['Explain the purpose of AAS', 'Describe atomization and characteristic absorption', 'Relate absorbance to concentration'],
                summary: ['AAS is mainly used for quantitative metal analysis.', 'Free atoms absorb light at element-specific wavelengths.', 'Beer-Lambert law supports calibration and unknown concentration estimation.'],
                safetyNotes: ['Do not operate AAS without supervision.', 'Treat acid-digested samples as hazardous waste.'],
                worksheetTitle: 'AAS principles worksheet',
                worksheetTasks: ['Define absorbance, atomization, and calibration curve.', 'Write the Beer-Lambert relationship in your own words.', 'List two metals commonly analyzed by AAS.'],
            },
            {
                id: 'aas-parts',
                title: 'AAS Parts and Functions',
                description: 'Identify the hollow cathode lamp, atomizer, monochromator, detector, gas system, and control panel.',
                href: '/aas/parts',
                difficulty: 'Beginner',
                estimatedMinutes: 25,
                prerequisites: ['AAS principles'],
                objectives: ['Identify major AAS components', 'Explain each component function', 'Recognize common failure signs'],
                summary: ['The hollow cathode lamp provides element-specific radiation.', 'The atomizer converts the sample into free atoms.', 'The monochromator isolates the analytical wavelength.'],
                safetyNotes: ['Check gas connections before ignition.', 'Never bypass interlocks or ventilation requirements.'],
                worksheetTitle: 'AAS parts inspection worksheet',
                worksheetTasks: ['Label the lamp, atomizer, monochromator, and detector.', 'Write the function of each part.', 'List two pre-use checks before AAS operation.'],
            },
            {
                id: 'aas-techniques',
                title: 'AAS Techniques and Calibration',
                description: 'Compare flame AAS, graphite furnace AAS, hydride generation, and cold vapor mercury analysis.',
                href: '/aas/techniques',
                difficulty: 'Intermediate',
                estimatedMinutes: 30,
                prerequisites: ['AAS principles', 'AAS parts'],
                objectives: ['Compare major AAS techniques', 'Explain calibration standards and blanks', 'Recognize interference sources'],
                summary: ['Flame AAS is suitable for many routine metal analyses.', 'Graphite furnace AAS improves sensitivity for trace metals.', 'Calibration quality controls analytical reliability.'],
                safetyNotes: ['Use proper ventilation for flames and furnace operations.', 'Handle acids and metal waste according to institutional SOPs.'],
                worksheetTitle: 'AAS technique comparison worksheet',
                worksheetTasks: ['Compare flame AAS and graphite furnace AAS.', 'Define blank correction.', 'Identify two sources of interference.'],
            },
            {
                id: 'aas-sop',
                title: 'AAS SOP and Safety Workflow',
                description: 'Review pre-use checks, operation sequence, shutdown, waste handling, and emergency response.',
                href: '/aas/sop',
                difficulty: 'Advanced',
                estimatedMinutes: 30,
                prerequisites: ['AAS parts', 'AAS techniques'],
                objectives: ['Follow a safe AAS workflow', 'Perform pre-use checks', 'Respond to gas, flame, and spill hazards'],
                summary: ['Safety checks must precede operation.', 'Gas and flame procedures require supervision.', 'Heavy metal waste must be segregated and labelled.'],
                safetyNotes: ['Check acetylene and oxidant flow.', 'Know emergency shutdown steps.', 'Dispose of metal waste in approved containers.'],
                worksheetTitle: 'AAS pre-use safety checklist',
                worksheetTasks: ['Confirm gas leak checks.', 'Confirm PPE and ventilation.', 'Record shutdown and waste steps.'],
            },
            {
                id: 'aas-quiz-review',
                title: 'AAS Assessment and Review Summary',
                description: 'Complete the AAS quiz, review missed questions, and generate a certificate if the passing score is reached.',
                href: '/aas/quiz',
                difficulty: 'Advanced',
                estimatedMinutes: 45,
                prerequisites: ['AAS SOP and safety workflow'],
                objectives: ['Demonstrate AAS knowledge', 'Review incorrect answers', 'Identify topics for revision'],
                summary: ['Assessment confirms readiness for supervised practical training.', 'Review summaries show strengths and gaps.', 'Certificates should be issued only after meeting the required score.'],
                safetyNotes: ['A passing quiz does not replace practical supervision.', 'Always follow institutional SOPs and manufacturer manuals.'],
                worksheetTitle: 'AAS assessment reflection',
                worksheetTasks: ['Record your quiz score.', 'List three concepts to revise.', 'Write one safety action you will always follow.'],
            },
        ],
    },
    {
        module: 'centrifuge',
        title: 'Centrifuge Learning Path',
        description: 'Guided centrifuge training from separation principles through rotor safety, calculations, SOP, and troubleshooting.',
        estimatedMinutes: 180,
        passingScore: 80,
        lessons: [
            {
                id: 'centrifuge-principles',
                title: 'Centrifugation Principles',
                description: 'Understand density-based separation, relative centrifugal force, RPM, radius, and sample preparation.',
                href: '/centrifuge/overview',
                difficulty: 'Beginner',
                estimatedMinutes: 25,
                prerequisites: ['Basic physics', 'Density and mass concepts'],
                objectives: ['Explain how centrifugation separates samples', 'Define RCF and RPM', 'Describe pellet and supernatant'],
                summary: ['Centrifuges separate materials by density under rotational force.', 'RCF is more meaningful than RPM alone.', 'Balanced tubes protect the rotor and chamber.'],
                safetyNotes: ['Never exceed rotor speed limits.', 'Never open the lid until the rotor stops.'],
                worksheetTitle: 'Centrifugation principles worksheet',
                worksheetTasks: ['Define RCF, RPM, pellet, and supernatant.', 'Explain why balanced tubes matter.', 'List two samples commonly separated by centrifugation.'],
            },
            {
                id: 'centrifuge-parts',
                title: 'Centrifuge Parts and Rotor Safety',
                description: 'Identify rotor, chamber, motor, lid interlock, timer, refrigeration, and control panel functions.',
                href: '/centrifuge/parts',
                difficulty: 'Beginner',
                estimatedMinutes: 25,
                prerequisites: ['Centrifugation principles'],
                objectives: ['Identify major centrifuge components', 'Explain rotor safety limits', 'Recognize damage or imbalance signs'],
                summary: ['The rotor holds samples and has maximum speed limits.', 'The lid interlock prevents unsafe opening during operation.', 'Abnormal vibration requires immediate shutdown.'],
                safetyNotes: ['Inspect tubes for cracks.', 'Use compatible tubes and rotors.', 'Stop immediately if vibration or noise occurs.'],
                worksheetTitle: 'Centrifuge pre-use inspection worksheet',
                worksheetTasks: ['Inspect rotor seating.', 'Check tube compatibility.', 'Record balance and lid interlock checks.'],
            },
            {
                id: 'centrifuge-techniques',
                title: 'Centrifuge Techniques and Protocols',
                description: 'Compare differential, density-gradient, refrigerated, ultra, micro, and clinical centrifugation methods.',
                href: '/centrifuge/techniques',
                difficulty: 'Intermediate',
                estimatedMinutes: 35,
                prerequisites: ['Centrifuge parts'],
                objectives: ['Compare centrifuge techniques', 'Select protocols by sample goal', 'Explain temperature and time considerations'],
                summary: ['Differential centrifugation separates by size and density.', 'Density gradients improve resolution.', 'Refrigeration protects temperature-sensitive samples.'],
                safetyNotes: ['Confirm rotor temperature compatibility.', 'Seal biohazard samples according to SOP.'],
                worksheetTitle: 'Centrifuge protocol planning worksheet',
                worksheetTasks: ['Choose a technique for a sample type.', 'Write speed, time, and temperature parameters.', 'List safety checks before starting.'],
            },
            {
                id: 'centrifuge-sop',
                title: 'Centrifuge SOP and Emergency Response',
                description: 'Review loading, balancing, acceleration, stopping, unloading, cleaning, and emergency actions.',
                href: '/centrifuge/sop',
                difficulty: 'Advanced',
                estimatedMinutes: 35,
                prerequisites: ['Centrifuge parts', 'Centrifuge techniques'],
                objectives: ['Follow safe loading and balancing steps', 'Apply emergency shutdown actions', 'Document centrifuge incidents'],
                summary: ['Balanced loading is essential.', 'Abnormal vibration or noise requires shutdown.', 'Cleaning and incident reporting protect future users.'],
                safetyNotes: ['Balance tubes by mass and position.', 'Do not open the lid during spin.', 'Report cracks, leaks, or abnormal vibration.'],
                worksheetTitle: 'Centrifuge safety checklist',
                worksheetTasks: ['Confirm tube balance.', 'Confirm rotor speed limit.', 'Record emergency stop procedure.'],
            },
            {
                id: 'centrifuge-quiz-review',
                title: 'Centrifuge Assessment and Review Summary',
                description: 'Complete the centrifuge quiz, review missed questions, and generate a certificate if the passing score is reached.',
                href: '/centrifuge/quiz',
                difficulty: 'Advanced',
                estimatedMinutes: 45,
                prerequisites: ['Centrifuge SOP and emergency response'],
                objectives: ['Demonstrate centrifuge knowledge', 'Review incorrect answers', 'Identify safety gaps before practical work'],
                summary: ['Assessment supports readiness for supervised training.', 'Review summaries highlight areas for improvement.', 'Certificates should be issued only after meeting the required score.'],
                safetyNotes: ['A passing quiz does not replace practical supervision.', 'Always follow institutional SOPs and manufacturer manuals.'],
                worksheetTitle: 'Centrifuge assessment reflection',
                worksheetTasks: ['Record your quiz score.', 'List three concepts to revise.', 'Write one safety action you will always follow.'],
            },
        ],
    },
];

export function getLearningPath(module: MachineModule) {
    return learningPaths.find((path) => path.module === module);
}

export function getMachineLabel(module: MachineModule) {
    return module === 'aas' ? 'AAS' : 'Centrifuge';
}

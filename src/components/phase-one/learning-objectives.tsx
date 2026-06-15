import { CheckCircle2, Clock, Target } from 'lucide-react';

type LearningObjectivesProps = {
    title?: string;
    objectives: string[];
    estimatedTime?: string;
};

export default function LearningObjectives({
    title = 'Learning objectives',
    objectives,
    estimatedTime,
}: LearningObjectivesProps) {
    return (
        <section className="mb-6 rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <div className="flex items-center gap-2 text-blue-700">
                        <Target className="h-4 w-4" />
                        <h2 className="text-sm font-bold uppercase tracking-wide">{title}</h2>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                        By the end of this module, learners should be able to:
                    </p>
                </div>
                {estimatedTime && (
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        <Clock className="h-4 w-4" />
                        {estimatedTime}
                    </div>
                )}
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {objectives.map((objective) => (
                    <li key={objective} className="flex gap-2 rounded-2xl bg-blue-50/70 p-3 text-sm leading-relaxed text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span>{objective}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

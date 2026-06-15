import { Metadata } from 'next';
import { LearningPathTimeline } from '@/components/phase-two/learning-path-timeline';
import { ProgressCard } from '@/components/phase-two/progress-card';

export const metadata: Metadata = {
    title: 'AAS Learning Path | Centraas',
    description: 'Guided Atomic Absorption Spectroscopy learning path with objectives, safety notes, worksheets, and progress tracking.',
};

export default function AASLearningPathPage() {
    return (
        <div className="space-y-6">
            <ProgressCard module="aas" />
            <LearningPathTimeline module="aas" />
        </div>
    );
}

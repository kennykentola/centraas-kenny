import { Metadata } from 'next';
import { LearningPathTimeline } from '@/components/phase-two/learning-path-timeline';
import { ProgressCard } from '@/components/phase-two/progress-card';

export const metadata: Metadata = {
    title: 'Centrifuge Learning Path | Centraas',
    description: 'Guided centrifuge learning path with objectives, safety notes, worksheets, and progress tracking.',
};

export default function CentrifugeLearningPathPage() {
    return (
        <div className="space-y-6">
            <ProgressCard module="centrifuge" />
            <LearningPathTimeline module="centrifuge" />
        </div>
    );
}

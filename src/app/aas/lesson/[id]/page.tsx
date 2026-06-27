import { ManagedLessonPage } from '@/components/lessons/ManagedLessonPage';
import { notFound } from 'next/navigation';

export const metadata = {
    title: 'Lesson | AAS Machine',
    description: 'Study a lesson for the AAS machine.',
};

export default function AASLessonPage({ params }: { params: { id: string } }) {
    if (!params.id) {
        notFound();
    }
    return <ManagedLessonPage module="aas" lessonId={params.id} />;
}

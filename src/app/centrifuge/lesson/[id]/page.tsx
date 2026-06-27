import { ManagedLessonPage } from '@/components/lessons/ManagedLessonPage';
import { notFound } from 'next/navigation';

export const metadata = {
    title: 'Lesson | Centrifuge Machine',
    description: 'Study a lesson for the Centrifuge machine.',
};

export default function CentrifugeLessonPage({ params }: { params: { id: string } }) {
    if (!params.id) {
        notFound();
    }
    return <ManagedLessonPage module="centrifuge" lessonId={params.id} />;
}

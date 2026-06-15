import { Metadata } from 'next';
import { InstructorDashboard } from '@/components/phase-two/instructor-dashboard';

export const metadata: Metadata = {
    title: 'Instructor Dashboard | Centraas',
    description: 'Instructor overview for Centraas learning progress, quiz scores, certificate readiness, and safety checklist completion.',
};

export default function InstructorPage() {
    return <InstructorDashboard />;
}

import { ManagedAssignmentsPage } from '@/components/assignments/ManagedAssignmentsPage';

export const metadata = {
    title: 'Centrifuge Assignments | Centraas',
    description: 'View assignments for the Centrifuge module.',
};

export default function CentrifugeAssignmentsPage() {
    return <ManagedAssignmentsPage module="centrifuge" />;
}

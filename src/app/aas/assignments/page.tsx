import { ManagedAssignmentsPage } from '@/components/assignments/ManagedAssignmentsPage';

export const metadata = {
    title: 'AAS Assignments | Centraas',
    description: 'View assignments for the AAS module.',
};

export default function AASAssignmentsPage() {
    return <ManagedAssignmentsPage module="aas" />;
}

import { Metadata } from 'next';
import { CertificateGenerator } from '@/components/phase-two/certificate-generator';

export const metadata: Metadata = {
    title: 'AAS Certificate | Centraas',
    description: 'Generate an AAS module completion certificate after completing lessons and passing the quiz.',
};

export default function AASCertificatePage() {
    return <CertificateGenerator module="aas" />;
}

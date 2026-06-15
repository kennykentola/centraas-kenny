import { Metadata } from 'next';
import { CertificateGenerator } from '@/components/phase-two/certificate-generator';

export const metadata: Metadata = {
    title: 'Centrifuge Certificate | Centraas',
    description: 'Generate a centrifuge module completion certificate after completing lessons and passing the quiz.',
};

export default function CentrifugeCertificatePage() {
    return <CertificateGenerator module="centrifuge" />;
}

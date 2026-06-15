import { Metadata } from 'next';
import { CertificateGenerator } from '@/components/phase-two/certificate-generator';

export const metadata: Metadata = {
    title: 'Certificates | Centraas',
    description: 'Generate AAS and centrifuge educational completion certificates.',
};

export default function CertificatesPage() {
    return (
        <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Certificates</p>
                <h1 className="mt-2 text-3xl font-black text-slate-950">Module completion certificates</h1>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                    Generate a certificate for each module after completing lessons and passing the required quiz score.
                </p>
            </section>
            <CertificateGenerator module="aas" />
            <CertificateGenerator module="centrifuge" />
        </div>
    );
}

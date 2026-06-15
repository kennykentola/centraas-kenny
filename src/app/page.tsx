'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Calculator, ClipboardCheck, FlaskConical, GraduationCap, RotateCcw, ShieldCheck, Star, Stethoscope } from 'lucide-react';
import LearningObjectives from '@/components/phase-one/learning-objectives';
import SafetyDisclaimer from '@/components/phase-one/safety-disclaimer';

const welcomeImages = [
  { src: '/images/scientist-aas.png', alt: 'Scientist operating AAS machine' },
  { src: '/images/scientists-group.png', alt: 'Group of scientists in laboratory' },
  { src: '/images/scientist-microscope.png', alt: 'Scientist using microscope' },
  { src: '/images/scientist-centrifuge.png', alt: 'Scientist with centrifuge' },
];

const learningPathways = [
  {
    title: 'AAS Machine',
    description: 'Learn atomic absorption principles, parts, techniques, calibration thinking, SOP workflow, and safety precautions.',
    href: '/aas/menu',
    icon: FlaskConical,
    accent: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Centrifuge Machine',
    description: 'Learn centrifugation principles, rotor selection, balancing, RCF/RPM thinking, SOP workflow, and safety precautions.',
    href: '/centrifuge/menu',
    icon: RotateCcw,
    accent: 'from-purple-600 to-indigo-600',
  },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="mx-auto grid min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-10">
          <section className="relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100"
            >
              <ShieldCheck className="h-4 w-4" />
              Safety-first laboratory learning
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-700">
                Centraas learning platform
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Practical training for AAS and Centrifuge machines
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A structured educational platform that helps students and laboratory trainees understand equipment principles,
                operating procedures, safety checks, quizzes, glossary terms, and references before practical laboratory work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/select-machine">
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto">
                  Start learning
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/glossary">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:-translate-y-0.5 sm:w-auto">
                  <BookOpen className="h-4 w-4" />
                  View glossary
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8"
            >
              <LearningObjectives
                title="Platform learning goals"
                estimatedTime="Self-paced"
                objectives={[
                  'Understand the working principles of AAS and centrifuge machines.',
                  'Identify major components and explain their functions.',
                  'Recognize safety checks, SOP workflow, and common hazards.',
                  'Practice knowledge with quizzes, review, glossary, and references.',
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6"
            >
              <SafetyDisclaimer />
            </motion.div>
          </section>

          <section className="relative z-10 mt-10 flex flex-col justify-center lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {welcomeImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                  className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 28vw"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 grid gap-3 sm:grid-cols-2"
            >
              {learningPathways.map((pathway) => {
                const Icon = pathway.icon;
                return (
                  <Link key={pathway.title} href={pathway.href} className="group">
                    <div className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pathway.accent} text-white shadow-md`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-lg font-bold text-slate-950">{pathway.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{pathway.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-700">
                        Enter module
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </section>
        </div>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Phase 2 learning system</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">Track progress, worksheets, certificates, and review summaries</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  Continue your learning path from one dashboard, then use instructor tools for class-level overview.
                </p>
              </div>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                Open dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              <Link href="/dashboard" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-indigo-200">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
                <h3 className="mt-3 font-bold text-slate-950">Dashboard</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Progress overview for both modules.</p>
              </Link>
              <Link href="/worksheets" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-emerald-200">
                <ClipboardCheck className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-3 font-bold text-slate-950">Worksheets</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Download practical lab worksheets.</p>
              </Link>
              <Link href="/certificates" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-amber-200">
                <Award className="h-6 w-6 text-amber-600" />
                <h3 className="mt-3 font-bold text-slate-950">Certificates</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Generate completion certificates.</p>
              </Link>
              <Link href="/instructor" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-cyan-200">
                <BookOpen className="h-6 w-6 text-cyan-600" />
                <h3 className="mt-3 font-bold text-slate-950">Instructor</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">View demo class performance.</p>
              </Link>
              <Link href="/troubleshooting" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-rose-200">
                <Stethoscope className="h-6 w-6 text-rose-600" />
                <h3 className="mt-3 font-bold text-slate-950">Troubleshooting</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Decision trees for common AAS and centrifuge issues.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Phase 3 tools</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">Calculators and troubleshooting</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  Practice analytical and engineering calculations with guided learning tools.
                </p>
              </div>
              <Link href="/aas/calculators" className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
                Open calculators
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <Link href="/aas/calculators" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-indigo-200">
                <Calculator className="h-6 w-6 text-indigo-600" />
                <h3 className="mt-3 font-bold text-slate-950">AAS calculations</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Beer-Lambert law and calibration curve tools.</p>
              </Link>
              <Link href="/centrifuge/calculators" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-emerald-200">
                <Calculator className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-3 font-bold text-slate-950">Centrifuge calculations</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">RCF/RPM converter and tube balance checker.</p>
              </Link>
              <Link href="/troubleshooting" className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-amber-200">
                <Stethoscope className="h-6 w-6 text-amber-600" />
                <h3 className="mt-3 font-bold text-slate-950">Troubleshooting trees</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Guided checks for AAS and centrifuge issues.</p>
              </Link>
            </div>
          </div>
        </section>

        <Star className="absolute left-10 top-20 h-3 w-3 text-yellow-400 opacity-50" />
        <Star className="absolute right-16 top-32 h-2.5 w-2.5 text-purple-400 opacity-40" />
        <Star className="absolute bottom-28 left-1/4 h-2.5 w-2.5 text-blue-400 opacity-40" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      </div>
    </div>
  );
}

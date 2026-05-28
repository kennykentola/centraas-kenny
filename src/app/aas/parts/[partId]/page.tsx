'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Flame, Beaker, Eye, Zap, Wind, Cog } from 'lucide-react';
import { aasParts, type PartData } from '@/data/aas-parts';
import Header from '@/components/header';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Flame, Beaker, Eye, Zap, Wind, Cog,
};

const tabs = [
  { key: 'definition', label: 'Definition' },
  { key: 'workingPrinciple', label: 'Working Principle' },
  { key: 'types', label: 'Types' },
  { key: 'importance', label: 'Importance' },
  { key: 'factors', label: 'Factors Affecting' },
  { key: 'maintenance', label: 'Maintenance' },
];

export default function AASPartDetailPage({ params }: { params: Promise<{ partId: string }> }) {
  const { partId } = use(params);
  const part = aasParts.find((p) => p.id === partId);

  if (!part) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1f2937] to-[#111827] flex items-center justify-center">
        <p className="text-white/50 text-lg">Part not found</p>
      </div>
    );
  }

  const IconComponent = iconMap[part.icon] || Cog;
  const partIndex = aasParts.findIndex((p) => p.id === part.id);
  const prevPart = partIndex > 0 ? aasParts[partIndex - 1] : null;
  const nextPart = partIndex < aasParts.length - 1 ? aasParts[partIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f2937] to-[#111827]">
      <Header title={part.name} backHref="/aas/parts" />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          {/* Part header */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{part.name}</h2>
              <p className="text-white/50 text-sm">AAS Machine Component</p>
            </div>
          </div>

          {/* Content sections */}
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                {tab.label}
              </h3>
              {tab.key === 'definition' ? (
                <div>
                  <p className="text-purple-200/80 text-sm sm:text-base font-medium leading-relaxed mb-3">{part.definition}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{part.description}</p>
                </div>
              ) : (
                <div className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                  {part[tab.key as keyof PartData] as string}
                </div>
              )}
            </motion.div>
          ))}

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4 pt-2">
            {prevPart ? (
              <a href={`/aas/parts/${prevPart.id}`} className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm">← {prevPart.name}</a>
            ) : <div />}
            {nextPart ? (
              <a href={`/aas/parts/${nextPart.id}`} className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm">{nextPart.name} →</a>
            ) : <div />}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

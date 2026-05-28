'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, Flame, Beaker, Eye, Zap, Wind, Cog, RotateCcw, Settings, CircleDot, MonitorPlay, Snowflake, TestTube, Shield, Timer, Layers } from 'lucide-react';
import type { PartData } from '@/data/aas-parts';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Flame, Beaker, Eye, Zap, Wind, Cog,
  RotateCcw, Settings, CircleDot, MonitorPlay, Snowflake,
  TestTube, Shield, Timer, Layers,
};

interface PartCardProps {
  part: PartData;
  basePath: string;
  index: number;
}

export default function PartCard({ part, basePath, index }: PartCardProps) {
  const IconComponent = iconMap[part.icon] || Cog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`${basePath}/${part.id}`}>
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer h-full">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
              <IconComponent className="w-7 h-7 text-purple-300" />
            </div>
            <h3 className="text-white font-medium text-sm leading-tight">{part.name}</h3>
            <p className="text-gray-400 text-xs line-clamp-2">{part.definition}</p>
          </div>
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/30 transition-colors pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}

'use client';

import { use } from 'react';
import dynamic from 'next/dynamic';

const RotorDetail = dynamic(() => import('@/components/parts/rotor-detail'), { ssr: false });
const MotorDetail = dynamic(() => import('@/components/parts/motor-detail'), { ssr: false });
const ShaftDetail = dynamic(() => import('@/components/parts/shaft-detail'), { ssr: false });
const BearingsDetail = dynamic(() => import('@/components/parts/bearings-detail'), { ssr: false });
const ControlPanelDetail = dynamic(() => import('@/components/parts/control-panel-detail'), { ssr: false });
const RefrigerationDetail = dynamic(() => import('@/components/parts/refrigeration-detail'), { ssr: false });
const SampleContainersDetail = dynamic(() => import('@/components/parts/sample-containers-detail'), { ssr: false });
const SafetyInterlockDetail = dynamic(() => import('@/components/parts/safety-interlock-detail'), { ssr: false });
const TimerDetail = dynamic(() => import('@/components/parts/timer-detail'), { ssr: false });
const ChamberDetail = dynamic(() => import('@/components/parts/chamber-detail'), { ssr: false });

const partComponentMap: Record<string, React.ComponentType> = {
  rotor: RotorDetail,
  'electric-motor': MotorDetail,
  'drive-shaft': ShaftDetail,
  bearings: BearingsDetail,
  'control-panel': ControlPanelDetail,
  'refrigeration-system': RefrigerationDetail,
  'tube-sample-container': SampleContainersDetail,
  'safety-interlock': SafetyInterlockDetail,
  timer: TimerDetail,
  'chamber-housing': ChamberDetail,
};

const partNames: Record<string, string> = {
  rotor: 'The Rotor',
  'electric-motor': 'Electric Motor',
  'drive-shaft': 'Drive Shaft / Spindle',
  bearings: 'Bearings',
  'control-panel': 'Control Panel and Control System',
  'refrigeration-system': 'Refrigeration System',
  'tube-sample-container': 'Tube / Sample Container',
  'safety-interlock': 'Safety Interlock',
  timer: 'Timer',
  'chamber-housing': 'Chamber / Housing',
};

export default function CentrifugePartDetailPage({ params }: { params: Promise<{ partId: string }> }) {
  const { partId } = use(params);
  const Component = partComponentMap[partId];

  if (Component) {
    return <Component />;
  }

  // Fallback for parts that don't have dedicated pages yet
  const { centrifugeParts } = require('@/data/centrifuge-parts');
  const part = centrifugeParts.find((p: { id: string }) => p.id === partId);

  if (!part) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-black/50 text-lg mb-4">Part not found</p>
          <a href="/centrifuge/parts" className="text-[#4169E1] hover:text-[#1a237e] underline">
            Back to Parts
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6E1FF] via-[#f3e8ff] to-white">
      <div className="px-6 py-12 max-w-2xl mx-auto text-center">
        <h1 className="text-[#1a237e] text-2xl font-bold mb-2">{partNames[partId] || part.name}</h1>
        <p className="text-black/50 text-sm mb-6">Coming soon</p>
        <a href="/centrifuge/parts" className="inline-block bg-[#4169E1] text-white px-6 py-2 rounded-lg hover:bg-[#1a237e] transition-colors text-sm">
          Back to Parts
        </a>
      </div>
    </div>
  );
}

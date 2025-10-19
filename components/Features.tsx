
import React from 'react';
import { DatabaseIcon, LayersIcon, MessageSquareIcon, BarChartIcon, CheckCircleIcon, UsersIcon } from './Icons';

const FEATURES = [
  {
    icon: <DatabaseIcon />,
    title: 'Warehouse-native BI',
    description: 'BigQuery, Redshift, Postgres, files',
  },
  {
    icon: <LayersIcon />,
    title: 'Semantic metrics layer',
    description: 'Define measures once; govern access with roles',
  },
  {
    icon: <MessageSquareIcon />,
    title: 'Chat to your data',
    description: 'Natural language + inspectable queries',
  },
  {
    icon: <BarChartIcon />,
    title: 'Diagnostic & forecasting',
    description: 'Contribution, root-cause, anomalies, time-series',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Grounded answers',
    description: 'Citation-first responses',
  },
  {
    icon: <UsersIcon />,
    title: 'Collaboration & permissions',
    description: 'Realtime docs/dashboards, fine-grained controls',
  },
];

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-4 p-6 bg-[--panel] border border-white/10 rounded-lg">
    <div className="text-[--accent]">{icon}</div>
    <h3 className="text-xl font-bold font-heading text-[--text]">{title}</h3>
    <p className="text-[--muted]">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[--panel]/50">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col gap-12">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold font-heading">A better workflow for BI & Research</h2>
          <p className="text-lg text-[--muted] max-w-2xl">From raw data to published insight, PROMVIS provides the tools you need to work faster and with more confidence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

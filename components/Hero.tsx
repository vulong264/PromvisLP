
import React from 'react';
import Button from './Button';
import CodePreview from './CodePreview';

const ValuePill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-[--panel] border border-white/10 rounded-full text-sm text-[--muted]">
    <span className="w-2 h-2 rounded-full bg-[--accent]"></span>
    {children}
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-[--accent]">AI BI + Deep Research on your warehouse</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-[--text]">BI you can interrogate. Research that cites itself.</h1>
            <p className="text-lg text-[--muted] max-w-xl">
              PROMVIS connects to your data warehouse and market data. Ask in plain English, build dashboards, and publish source-backed notes in minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button variant="primary">Book a demo</Button>
            <Button variant="secondary" onClick={() => document.getElementById('features')?.scrollIntoView()}>See features</Button>
          </div>
          <p className="text-sm text-[--muted]">English UI. Vietnamese data supported.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <ValuePill>Zero hallucinations</ValuePill>
            <ValuePill>Full governance</ValuePill>
            <ValuePill>Enterprise-scale</ValuePill>
          </div>
        </div>
        <div className="hidden lg:block">
          <CodePreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;

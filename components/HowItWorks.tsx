
import React from 'react';
import Button from './Button';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative flex-1 p-8 bg-[--panel] border border-white/10 rounded-lg">
    <div className="absolute -top-5 -left-5 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[--accent] to-[--accent2] text-[--bg] rounded-full text-2xl font-bold font-heading">
      {number}
    </div>
    <h3 className="text-xl font-bold font-heading text-[--text] mt-4">{title}</h3>
    <p className="text-[--muted] mt-2">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col items-center gap-12">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold font-heading">Get started in minutes</h2>
          <p className="text-lg text-[--muted] max-w-2xl">Three simple steps to connect your data and start asking questions.</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-16 md:gap-8 mt-8">
          <Step number="1" title="Connect" description="Point PROMVIS to your warehouse and files" />
          <Step number="2" title="Model" description="Metrics, dimensions, permissions" />
          <Step number="3" title="Analyze & publish" description="Ask, visualize, export with citations" />
        </div>
        <div className="mt-8">
          <Button variant="primary">Request access</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


import React, { useState } from 'react';

type Tab = 'securities' | 'retail' | 'more';

const Pill: React.FC<{ text: string, variant: 'now' | 'pilot' }> = ({ text, variant }) => {
  const baseClasses = "text-xs font-semibold px-2 py-0.5 rounded-full ml-2";
  const variantClasses = {
    now: "bg-[--accent]/20 text-[--accent]",
    pilot: "bg-[--accent2]/20 text-[--accent2]",
  }
  return <span className={`${baseClasses} ${variantClasses[variant]}`}>{text}</span>
}

const TabButton: React.FC<{ isActive: boolean; onClick: () => void; children: React.ReactNode }> = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive ? 'bg-[--panel] text-[--text]' : 'text-[--muted] hover:bg-[--panel]/50'}`}
  >
    {children}
  </button>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <svg className="w-5 h-5 mt-1 text-[--accent] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    <span className="text-[--muted]">{children}</span>
  </li>
)

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('securities');

  return (
    <section id="use-cases" className="py-20 bg-[--panel]/50">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col items-center gap-12">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold font-heading">Built for your industry</h2>
          <p className="text-lg text-[--muted] max-w-2xl">Start with pre-built models for your vertical, or build your own semantic layer from scratch.</p>
        </div>

        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="p-1 bg-black/20 border border-white/10 rounded-lg flex space-x-1 overflow-x-auto">
            <TabButton isActive={activeTab === 'securities'} onClick={() => setActiveTab('securities')}>
              Securities <Pill text="Now" variant="now" />
            </TabButton>
            <TabButton isActive={activeTab === 'retail'} onClick={() => setActiveTab('retail')}>
              Retail <Pill text="Pilot" variant="pilot" />
            </TabButton>
            <TabButton isActive={activeTab === 'more'} onClick={() => setActiveTab('more')}>
              More industries
            </TabButton>
          </div>
          
          <div className="w-full mt-8 p-8 bg-[--panel] border border-white/10 rounded-lg">
            {activeTab === 'securities' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[--text] mb-4">For Securities Analysts</h3>
                   <ul className="space-y-3">
                    <ListItem>Earnings packs & tear sheets</ListItem>
                    <ListItem>Sector dashboards & KPI trackers</ListItem>
                    <ListItem>IPO/bond/watchlist monitoring</ListItem>
                    <ListItem>Risk flags & exposures</ListItem>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--text] mb-4">Why PROMVIS?</h3>
                   <ul className="space-y-3">
                    <ListItem>Runs on your verified metrics</ListItem>
                    <ListItem>Deep Research with citations</ListItem>
                    <ListItem>Familiar BI workflow with better UX</ListItem>
                    <ListItem>Fast pilot. No vendor lock-in.</ListItem>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'retail' && (
              <div>
                <h3 className="text-xl font-bold text-[--text] mb-4">For Sales Managers</h3>
                 <ul className="space-y-3">
                    <ListItem>Performance & conversion</ListItem>
                    <ListItem>Store/region diagnostics</ListItem>
                    <ListItem>Promo ROI</ListItem>
                    <ListItem>Alerts</ListItem>
                  </ul>
                <p className="mt-6 text-center text-[--accent2] bg-[--accent2]/10 p-3 rounded-md">In pilot with select clients</p>
              </div>
            )}
            {activeTab === 'more' && (
              <div className="text-center">
                <h3 className="text-xl font-bold text-[--text]">More industries coming soon</h3>
                <p className="text-[--muted] mt-2">Our roadmap includes solutions for manufacturing, logistics, and banking.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

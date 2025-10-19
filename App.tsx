
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[--bg] text-[--text] font-body">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
};

export default App;

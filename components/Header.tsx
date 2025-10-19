
import React, { useState, useEffect } from 'react';
import Button from './Button';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Use cases', href: '#use-cases' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold font-heading text-[--text]">
            PROMVIS
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-base text-[--muted] hover:text-[--text] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="primary" className="px-5 py-2">Book a demo</Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

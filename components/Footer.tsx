
import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-[1120px] mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[--muted]">&copy; 2025 PROMVIS</p>
          <Button variant="secondary" className="px-5 py-2">Book a demo</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[--bg] focus:ring-[--accent2]';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[--accent] to-[--accent2] text-[--bg] hover:shadow-[0_0_20px_rgba(94,230,168,0.4)] hover:-translate-y-0.5',
    secondary: 'bg-transparent border border-[--muted] text-[--text] hover:bg-[--panel] hover:border-[--text]',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

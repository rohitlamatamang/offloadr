import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Logo = ({ className = 'h-12 w-12' }) => (
  <svg
    viewBox="0 0 600 600"
    role="img"
    aria-label="Offloadr logo"
    className={`select-none ${className}`}
  >
    <g transform="translate(100,50)">
      <rect x="0" y="0" width="140" height="140" fill="#1A1A1A" />
      <rect x="155" y="0" width="160" height="70" fill="#FF4D28" />
      <rect x="155" y="80" width="250" height="190" fill="#FF4D28" />
      <rect x="-70" y="150" width="210" height="210" fill="#1A1A1A" />
      <rect x="-9" y="370" width="150" height="80" fill="#1A1A1A" />
      <rect x="155" y="280" width="150" height="150" fill="#FF4D28" />
    </g>
  </svg>
);

export const NavLink = ({ children, href = '#', light = false }) => (
  <a
    href={href}
    className={`flex items-center gap-1 font-medium text-sm ${light ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-black'} transition-colors`}
  >
    {children}
  </a>
);

const baseButton = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 text-sm';
const buttonVariants = {
  primary: 'bg-black text-white',
  orange: 'bg-[#FF4D28] text-white',
  outline: 'border border-gray-200 bg-white text-black hover:border-gray-400',
  white: 'bg-white text-black',
};

export const Button = ({ children, variant = 'primary', className = '', onClick }) => (
  <button onClick={onClick} className={`${baseButton} ${buttonVariants[variant]} ${className}`}>
    {children}
    <div className="bg-white/20 rounded-full p-1">
      <ArrowRight size={14} className={variant === 'white' ? 'text-black' : 'text-white'} />
    </div>
  </button>
);

export const SectionBadge = ({ number, text, color = 'bg-black', textColor = 'text-white' }) => (
  <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full pr-4 py-1 pl-1 mb-8">
    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${color} ${textColor}`}>
      {number}
    </span>
    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">{text}</span>
  </div>
);

export const Tag = ({ text }) => (
  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors cursor-default">
    {text}
  </span>
);

export const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
      {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
};

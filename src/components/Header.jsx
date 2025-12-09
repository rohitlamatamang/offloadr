import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button, Logo, TimeDisplay } from './ui.jsx';

const Header = ({ onMenuToggle, isMenuOpen, onNavigateHome, onNavigateToAbout, currentPage }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md py-4 md:py-6 px-6 md:px-12 flex items-center justify-between border-b border-transparent transition-all duration-300">
      <div className="flex items-center gap-0 cursor-pointer" onClick={onNavigateHome}>
        <Logo className="h-14 w-14" />
        <span className="text-2xl font-bold tracking-[0.25em] text-[#1A1A1A] uppercase" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>OFFLOADR</span>
      </div>

      <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="flex items-center gap-1 font-medium text-sm text-gray-800 hover:text-black transition-colors cursor-pointer">
          Our Work
        </a>
        
        <div className="relative group">
          <button className="flex items-center gap-1 font-medium text-sm text-gray-800 hover:text-black transition-colors">
            Services <ChevronDown size={14} />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="p-2">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Digital Marketing
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Virtual Assistant
              </a>
            </div>
          </div>
        </div>

        <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToAbout(); }} className="flex items-center gap-1 font-medium text-sm text-gray-800 hover:text-black transition-colors cursor-pointer">
          About
        </a>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-gray-500">London</span>
          <TimeDisplay />
        </div>
        <Button variant="primary" onClick={() => scrollToSection('contact')}>Get in touch</Button>
      </div>

      <button className="lg:hidden text-black" onClick={onMenuToggle}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
};

export default Header;

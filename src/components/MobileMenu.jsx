import { ChevronDown, ArrowRight, Briefcase, Users, MessageCircle } from 'lucide-react';
import { Button, Logo } from './ui.jsx';
import { useState } from 'react';

const MobileMenu = ({ isOpen, onNavigateHome, onNavigateToAbout, currentPage, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!isOpen) return null;

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
    onClose();
  };

  const handleAboutClick = () => {
    onNavigateToAbout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#FAFAFA] lg:hidden overflow-y-auto">

      <div className="relative pt-28 pb-12 px-8">
        {/* Navigation Links */}
        <nav className="space-y-2 mb-12">
          {/* Our Work */}
          <a 
            href="#case-studies" 
            onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} 
            className="group flex items-center justify-between p-5 rounded-2xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF4D28] to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#FF4D28] transition-colors">Our Work</span>
            </div>
            <ArrowRight size={24} className="text-gray-400 group-hover:text-[#FF4D28] group-hover:translate-x-1 transition-all" />
          </a>

          {/* Services Dropdown */}
          <div className="rounded-2xl border border-transparent hover:border-gray-100 bg-white/40 hover:bg-white/80 transition-all duration-300">
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="group w-full flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#FF4D28] transition-colors">Services</span>
              </div>
              <ChevronDown 
                size={24} 
                className={`text-gray-400 group-hover:text-[#FF4D28] transition-all duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {servicesOpen && (
              <div className="px-5 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-300">
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200 border border-gray-100 hover:border-[#FF4D28]/30"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF4D28]"></div>
                  <span className="text-lg font-medium text-gray-700 hover:text-[#FF4D28]">Digital Marketing</span>
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200 border border-gray-100 hover:border-[#FF4D28]/30"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF4D28]"></div>
                  <span className="text-lg font-medium text-gray-700 hover:text-[#FF4D28]">Virtual Assistant</span>
                </a>
              </div>
            )}
          </div>

          {/* About */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleAboutClick(); }} 
            className="group flex items-center justify-between p-5 rounded-2xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-[#1A1A1A] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#FF4D28] transition-colors">About Us</span>
            </div>
            <ArrowRight size={24} className="text-gray-400 group-hover:text-[#FF4D28] group-hover:translate-x-1 transition-all" />
          </a>
        </nav>

        {/* CTA Button */}
        <div className="px-2">
          <Button 
            variant="primary" 
            className="w-full justify-center text-lg py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300" 
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-2">Ready to transform your business?</p>
          <p className="text-xs text-gray-400">London • Digital Agency</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

import { useState, useEffect } from 'react';
import { Button, SectionBadge } from './ui.jsx';

const RotatingText = () => {
  const words = ['productive.', 'organized.', 'focused on growth.', 'stress-free.'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center px-4">
      <p className="text-white text-[10px] md:text-lg font-medium mb-1 md:mb-2">
        We help you stay
      </p>
      <div className="h-6 md:h-12 flex items-center justify-center">
        <p 
          key={currentWord}
          className="text-white text-base md:text-2xl lg:text-3xl font-bold animate-fade-slide-up"
        >
          {words[currentWord]}
        </p>
      </div>
    </div>
  );
};

const CountingNumber = ({ target, suffix = '', trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); // Reset to 0
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, trigger]);

  return <>{count}{suffix}</>;
};

const Intro = ({ onNavigateToAbout }) => {
  const [animationTrigger, setAnimationTrigger] = useState(0);

  const handleCardClick = () => {
    setAnimationTrigger(prev => prev + 1);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 px-6 md:px-12 border-t border-gray-200">
      <SectionBadge number="1" text="WHY BUSINESSES CHOOSE US" />

    <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 md:mb-8 max-w-4xl">
      Your growth partner for marketing and business operations.
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start mt-8 md:mt-10 lg:mt-12">
      {/* LEFT IMAGE BLOCK - VA Support */}
      <div className="lg:col-span-4 relative group">
        <div className="overflow-hidden rounded-[16px] lg:rounded-[24px] shadow-lg">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] w-full aspect-[16/5] lg:aspect-[3/2] xl:aspect-[4/3] relative transition-all duration-500 group-hover:from-[#000000] group-hover:to-[#1A1A1A]">
            
            {/* Top Label */}
            <div className="absolute top-2 md:top-6 left-3 md:left-6 right-3 md:right-6">
              <p className="text-white/90 text-[8px] md:text-xs font-medium tracking-wide leading-tight">
                Virtual assistants that actually make your day easier.
              </p>
            </div>

            {/* Center Rotating Text */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
              <RotatingText />
            </div>

            {/* Hover Text */}
            <div className="absolute bottom-2 md:bottom-6 left-3 md:left-6 right-3 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
              <p className="text-white text-xs md:text-sm font-medium leading-tight">
                Save 20+ hours every week with expert VA support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="lg:col-span-4 flex flex-col justify-center py-4 md:py-6 lg:py-8">
        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 mb-6 md:mb-8">
          We blend digital marketing expertise with reliable virtual assistance, helping your business grow faster, stay consistent, and operate smoothly.
        </p>
        <div>
          <Button variant="orange" onClick={onNavigateToAbout}>Learn More About Us</Button>
        </div>
      </div>

      {/* RIGHT IMAGE BLOCK - Marketing Stats */}
      <div className="lg:col-span-4 relative group mt-6 md:mt-8 lg:mt-0">
        <div className="overflow-hidden rounded-[16px] lg:rounded-[24px] shadow-lg">
          <div 
            onClick={handleCardClick}
            className="bg-gradient-to-br from-[#FF4D28] to-[#FF6B47] w-full aspect-[16/5] lg:aspect-[3/2] xl:aspect-[4/3] relative transition-all duration-500 group-hover:from-[#e04320] group-hover:to-[#FF4D28] cursor-pointer"
          >
            
            {/* Top Label */}
            <div className="absolute top-2 md:top-6 left-3 md:left-6 right-3 md:right-6">
              <p className="text-white/90 text-[8px] md:text-xs font-medium tracking-wide leading-tight">
                Trusted by growing businesses
              </p>
            </div>

            {/* Stats Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-3 md:px-6">
              <div className="grid grid-cols-3 gap-1 md:gap-4 w-full animate-fade-up">
                <div className="text-center">
                  <p className="text-white text-lg md:text-3xl lg:text-4xl font-bold mb-0.5 md:mb-1">
                    <CountingNumber target={20} suffix="+" trigger={animationTrigger} />
                  </p>
                  <p className="text-white/90 text-[7px] md:text-xs font-medium leading-tight">Active<br className="md:hidden" /> Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-lg md:text-3xl lg:text-4xl font-bold mb-0.5 md:mb-1">
                    <CountingNumber target={1500} suffix="+" trigger={animationTrigger} />
                  </p>
                  <p className="text-white/90 text-[7px] md:text-xs font-medium leading-tight">Tasks<br className="md:hidden" /> Done</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-lg md:text-3xl lg:text-4xl font-bold mb-0.5 md:mb-1">
                    <CountingNumber target={4} suffix="+" trigger={animationTrigger} />
                  </p>
                  <p className="text-white/90 text-[7px] md:text-xs font-medium leading-tight">Years<br className="md:hidden" /> Exp.</p>
                </div>
              </div>
            </div>

            {/* Hover Text */}
            <div className="absolute bottom-2 md:bottom-6 left-3 md:left-6 right-3 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 hidden lg:block">
              <p className="text-white text-xs md:text-sm font-medium leading-tight">
                Grow your online presence with data-driven digital marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Intro;

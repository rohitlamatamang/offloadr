import { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Intro from './components/Intro';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Preloader from './components/Preloader';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showPreloader, setShowPreloader] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('about');
      scrollToTop();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }, 100);
  };

  const navigateToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('home');
      scrollToTop();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }, 100);
  };

  const navigateToProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('projects');
      scrollToTop();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }, 100);
  };

  return (
    <>
      {(showPreloader || isTransitioning) && (
        <Preloader onLoadComplete={() => setShowPreloader(false)} />
      )}
      
      <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1A1A1A] selection:bg-[#FF4D28] selection:text-white overflow-x-hidden">
        <Header
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          onNavigateHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          currentPage={currentPage}
        />

        <MobileMenu 
          isOpen={isMenuOpen}
          onNavigateHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          currentPage={currentPage}
          onClose={() => setIsMenuOpen(false)}
        />

      {currentPage === 'home' ? (
        <>
          <Hero />
          <main className="max-w-[1600px] mx-auto">
            <Intro onNavigateToAbout={navigateToAbout} />
            <CaseStudies onNavigateToProjects={navigateToProjects} />
            <Services />
          </main>

          <Contact />
          <Footer />
        </>
      ) : currentPage === 'projects' ? (
        <>
          <Projects />
          <Footer />
        </>
      ) : (
        <>
          <div className="pt-32">
            <About />
          </div>
          <Footer />
        </>
      )}
      </div>
    </>
  );
}
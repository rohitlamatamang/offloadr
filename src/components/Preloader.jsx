import { useState, useEffect } from 'react';

const Preloader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadComplete();
      }, 500); // Wait for fade out animation
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FAFAFA] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Floating SVG Logo */}
      <div
        className="mb-8"
        style={{
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-32 h-32 md:w-40 md:h-40"
          role="img"
          aria-label="Offloadr logo"
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
      </div>

      {/* Loading Text */}
      <h2
        className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#1A1A1A] uppercase mb-4"
        style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
      >
        OFFLOADR
      </h2>

      <p className="text-lg text-gray-600 animate-pulse">Loading your experience...</p>

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#1A1A1A] via-[#FF4D28] to-[#1A1A1A] animate-loading-bar"
          style={{
            animation: 'loading-bar 2s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;

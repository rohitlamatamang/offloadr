import { useState } from 'react';
import { Button } from './ui.jsx';

const InteractiveBlock = ({ x, y, width, height, label, isRightSide = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={isRightSide ? "#FF4D28" : "#1A1A1A"}
        rx="8"
        style={{
          opacity: isHovered ? 0 : 1,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isRightSide ? "#FF4D28" : "#1A1A1A"}
        fontSize="24"
        fontWeight="700"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: 'none',
          textTransform: 'uppercase',
        }}
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
};

const FloatingLogo = () => (
  <div
    className="absolute top-1/2 right-[8%] transform -translate-y-1/2 hidden lg:block"
    style={{
      animation: 'float 4s ease-in-out infinite',
    }}
  >
    <svg viewBox="0 0 400 450" className="w-64 h-72">
      <InteractiveBlock x={0} y={0} width={140} height={140} label="SEO" />
      <InteractiveBlock x={155} y={0} width={160} height={70} label="Branding" />
      <InteractiveBlock x={155} y={80} width={250} height={190} label="Digital Ads" />
      <InteractiveBlock x={-70} y={150} width={210} height={210} label="Automation" />
      <InteractiveBlock x={-9} y={370} width={150} height={80} label="Web Design" />
      <InteractiveBlock x={155} y={280} width={150} height={150} label="Virtual Assistant" />
    </svg>
  </div>
);

const Hero = () => (
  <section className="relative flex flex-col justify-start md:justify-center md:min-h-[80vh] pt-[160px] md:pt-36 lg:pt-40 pb-24 md:pb-24 lg:pb-32 px-6 md:px-12">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF4D28]/20 to-transparent opacity-60 blur-3xl -z-10 pointer-events-none" />
    <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-[#FF4D28] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse -z-10" />

    <div className="flex items-center gap-8 lg:gap-16">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.1] tracking-tight mb-8">
          Digital Growth. Virtual Support. <span className="inline-block bg-gradient-to-r from-[#1A1A1A] via-[#FF4D28] to-[#1A1A1A] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">One Powerful Team.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          From social media to admin tasks we take the weight off your plate so you can scale faster.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium">Marketing</span>
          <span className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium">Virtual Assistance</span>
          <span className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium">Branding</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button variant="orange">Start Today</Button>
          <Button variant="outline">Explore Services</Button>
        </div>
      </div>

      <div className="hidden lg:block flex-shrink-0">
        <div
          style={{
            animation: 'float 4s ease-in-out infinite',
          }}
        >
          <svg viewBox="-70 0 475 450" className="w-64 h-72" style={{ overflow: 'visible' }}>
            <InteractiveBlock x={0} y={0} width={140} height={140} label="SEO" />
            <InteractiveBlock x={155} y={0} width={160} height={70} label="Branding" isRightSide={true} />
            <InteractiveBlock x={155} y={80} width={250} height={190} label="Digital Ads" isRightSide={true} />
            <InteractiveBlock x={-70} y={150} width={210} height={210} label="Automation" />
            <InteractiveBlock x={-9} y={370} width={150} height={80} label="Web Design" />
            <InteractiveBlock x={155} y={280} width={150} height={150} label="VA" isRightSide={true} />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

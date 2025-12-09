import { Button } from './UI.jsx';

const Footer = () => (
  <footer className="bg-[#FF4D28] text-white pt-16 px-6 md:px-12 pb-0 overflow-hidden relative">
    <div className="max-w-[1600px] mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row justify-between gap-16 mb-32">
        <div className="max-w-lg">
          <p className="text-lg opacity-80 mb-6 font-medium">Work with us</p>
          <h3 className="text-3xl font-medium mb-8 leading-snug">
            Looking to level-up your website or move over to Webflow? Let's start with a free consultation.
          </h3>
          <Button variant="primary" className="bg-black text-white border-none">Free consultation call</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm font-medium">
          <div className="space-y-4">
            <h4 className="opacity-60 mb-4">Explore</h4>
            <a href="#" className="block hover:opacity-70">Home</a>
            <a href="#" className="block hover:opacity-70">Work</a>
            <div className="flex items-center gap-2">
              <a href="#" className="block hover:opacity-70">Flow Growth</a>
              <span className="bg-white text-[#FF4D28] text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="opacity-60 mb-4">About Offloadr</h4>
            <a href="#" className="block hover:opacity-70">About</a>
            <a href="#" className="block hover:opacity-70">Studio Feed</a>
            <a href="#" className="block hover:opacity-70">Contact</a>
          </div>

          <div className="space-y-4">
            <h4 className="opacity-60 mb-4">Case studies</h4>
            <a href="#" className="block hover:opacity-70">Forest</a>
            <a href="#" className="block hover:opacity-70">Typeform</a>
            <a href="#" className="block hover:opacity-70">London & Country</a>
            <a href="#" className="block hover:opacity-70">Metomic</a>
          </div>

          <div className="space-y-4">
            <h4 className="opacity-60 mb-4">Services</h4>
            <a href="#" className="block hover:opacity-70">Web design</a>
            <a href="#" className="block hover:opacity-70">Webflow development</a>
            <a href="#" className="block hover:opacity-70">Branding</a>
          </div>
        </div>
      </div>

      <div className="text-[12vw] md:text-[16vw] font-bold leading-none tracking-tighter text-white opacity-100 select-none pointer-events-none translate-y-[20%]">
        OFF
      </div>
      <div className="text-[12vw] md:text-[16vw] font-bold leading-none tracking-tighter text-white opacity-100 select-none pointer-events-none translate-y-[0%]">
        LOADR
      </div>
    </div>
  </footer>
);

export default Footer;

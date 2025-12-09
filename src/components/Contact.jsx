import { Button } from './ui.jsx';

const Contact = () => (
  <section id="contact" className="bg-black text-white pt-16 md:pt-24 lg:pt-[140px] pb-16 md:pb-24 lg:pb-[140px] px-6 md:px-12">
    <div className="max-w-[1600px] mx-auto">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-16 max-w-5xl">
        Overwhelmed with tasks or marketing? <br />
        Let's offload the workload <span className="text-[#FF4D28]">together</span>.
      </h2>

      <div className="bg-[#1A1A1A] rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">How can we help?</label>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="px-6 py-3 rounded-full bg-[#FF4D28] text-white font-medium hover:bg-[#e04320] transition-colors">Digital Marketing</button>
              <button type="button" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors">Virtual Assistant Support</button>
              <button type="button" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors">Something Else</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Full name</label>
              <input type="text" placeholder="What's your name?" className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-[#FF4D28] transition-colors placeholder:text-gray-600" />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email address*</label>
              <input type="email" placeholder="Your email address" className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-[#FF4D28] transition-colors placeholder:text-gray-600" />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Message</label>
            <textarea rows="3" placeholder="Tell us what you need help with — marketing, virtual assistance, or both." className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-[#FF4D28] transition-colors placeholder:text-gray-600 resize-none" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Button variant="orange" className="py-4 px-8 text-lg">Let's Talk</Button>
            <p className="text-sm text-gray-500">By sending this form, you agree to our <a href="#" className="text-[#FF4D28] hover:underline">privacy policy</a>.</p>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;

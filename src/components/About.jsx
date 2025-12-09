import { Button, SectionBadge } from './ui.jsx';
import { CheckCircle2, Target, Users, TrendingUp } from 'lucide-react';

const About = () => (
  <div className="bg-[#FAFAFA]">
    {/* Section 1: Who We Are */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <SectionBadge number="1" text="WHO WE ARE" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 max-w-4xl">
        About Offloadr
      </h1>
      <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl">
        We're a team of digital marketers, designers, and virtual assistants dedicated to helping businesses grow, stay consistent, and operate smoothly. Our mission is to take the workload off your plate so you can focus on scaling.
      </p>
    </section>

    {/* Section 2: Our Mission */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Target size={48} className="mx-auto mb-6 text-[#FF4D28]" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Our Mission
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
          Our mission is to empower businesses with high-quality marketing support and reliable virtual assistance — helping them save time, reduce stress, and boost results.
        </p>
      </div>
    </section>

    {/* Section 3: What Makes Us Different */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <SectionBadge number="2" text="WHAT MAKES US DIFFERENT" />
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12">
        Why Choose Offloadr
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'All-in-one digital support', desc: 'Marketing, design, and VA services under one roof' },
          { title: 'Fast communication', desc: 'Quick response times and real-time updates' },
          { title: 'Affordable & flexible plans', desc: 'Packages that scale with your business needs' },
          { title: 'Dedicated assistants', desc: 'Each client gets a dedicated team member' },
          { title: 'Quality-focused execution', desc: 'We deliver results, not just tasks' },
          { title: 'Data-driven approach', desc: 'Every decision backed by analytics and insights' },
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
            <CheckCircle2 size={32} className="text-[#FF4D28] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 4: Our Process */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <SectionBadge number="3" text="OUR PROCESS" />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Discover', desc: 'Understand your goals, challenges, and vision' },
            { step: '02', title: 'Plan', desc: 'Build a custom marketing + VA strategy tailored for you' },
            { step: '03', title: 'Execute & Support', desc: 'Deliver results with weekly updates and continuous optimization' },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-bold text-[#FF4D28] opacity-20 mb-4">{item.step}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 5: Meet the Team */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <SectionBadge number="4" text="MEET THE TEAM" />
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12">
        The People Behind Offloadr
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          'Digital Marketing Lead',
          'Social Media Manager',
          'Virtual Assistant Team Lead',
          'Content Creator',
          'Web Designer',
        ].map((role, idx) => (
          <div key={idx} className="text-center">
            <div className="w-full aspect-square bg-gradient-to-br from-[#FF4D28] to-[#1A1A1A] rounded-2xl mb-4 flex items-center justify-center">
              <Users size={48} className="text-white" />
            </div>
            <h3 className="font-semibold text-lg">{role}</h3>
          </div>
        ))}
      </div>
    </section>

    {/* Section 6: Statistics */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-[#FF4D28] text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { number: '50+', label: 'Projects Completed' },
          { number: '20+', label: 'Active Clients' },
          { number: '3', label: 'Years of Experience' },
          { number: '95%', label: 'Client Satisfaction' },
        ].map((stat, idx) => (
          <div key={idx}>
            <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
            <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Section 7: Testimonials */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <SectionBadge number="5" text="CLIENT TESTIMONIALS" />
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { quote: 'They handle everything from social media to daily tasks — life saver!', author: 'Sarah M., E-commerce Founder' },
          { quote: 'Best decision we made. Our marketing is now consistent and professional.', author: 'Mike T., SaaS Startup' },
          { quote: 'Fast, reliable, and always available. Highly recommend!', author: 'Jessica L., Digital Agency Owner' },
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-700 mb-4 italic">"{item.quote}"</p>
            <p className="font-semibold text-[#FF4D28]">— {item.author}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-[1600px] mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-medium mb-6">
        Ready to Offload & Grow?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Let's talk about how we can help your business scale faster with less stress.
      </p>
      <Button variant="orange">Get Started Today</Button>
    </section>
  </div>
);

export default About;

import { SectionBadge, Tag } from './ui.jsx';

const Services = () => (
  <section id="services" className="py-12 md:py-16 lg:py-24 px-6 md:px-12 border-t border-gray-200">
    <SectionBadge number="4" text="Our services" />

    <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12 max-w-5xl">
      We bring together strategy, creativity, and reliable support to help businesses grow in two major areas.
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <div>
        <h3 className="text-3xl md:text-4xl font-medium mb-4">Digital Marketing Services</h3>
        <p className="text-gray-600 mb-6 text-lg">Drive growth with data-driven marketing strategies</p>
        <div className="flex flex-wrap gap-3">
          <Tag text="Social Media Management" />
          <Tag text="Content Creation" />
          <Tag text="SEO Optimization" />
          <Tag text="Meta Ads" />
          <Tag text="Google Ads" />
          <Tag text="Branding & Graphics" />
          <Tag text="Website Content" />
          <Tag text="Video/Reels Editing" />
          <Tag text="Marketing Strategy" />
        </div>
      </div>

      <div>
        <h3 className="text-3xl md:text-4xl font-medium mb-4">Virtual Assistant Services</h3>
        <p className="text-gray-600 mb-6 text-lg">Virtual Assistance & Business Support</p>
        <div className="flex flex-wrap gap-3">
          <Tag text="Admin Support" />
          <Tag text="Email Management" />
          <Tag text="Calendar Scheduling" />
          <Tag text="Customer Support" />
          <Tag text="Data Entry" />
          <Tag text="CRM Management" />
          <Tag text="Lead Generation" />
          <Tag text="Research Tasks" />
          <Tag text="E-commerce Support" />
        </div>
      </div>
    </div>
  </section>
);

export default Services;

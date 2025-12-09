import { ArrowUpRight } from 'lucide-react';
import { Button, SectionBadge } from './UI.jsx';

const ProjectCard = ({ color, title, subtitle, description, children }) => (
  <div className="group cursor-pointer pb-8 md:pb-10 lg:pb-0 border-b border-gray-200 lg:border-0">
    <div className={`${color} p-8 rounded-2xl aspect-[4/3] relative overflow-hidden mb-6 shadow-md transition-transform duration-300 group-hover:-translate-y-2`}>
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white z-10">
        <ArrowUpRight size={20} />
      </div>
      {children}
    </div>
    <h3 className="text-lg font-medium text-gray-500 mb-1">{description}</h3>
    <h4 className="text-xl font-semibold">{title}</h4>
    {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
  </div>
);

const CaseStudies = ({ onNavigateToProjects }) => (
  <section id="case-studies" className="py-12 md:py-16 lg:py-24 px-6 md:px-12">
    <div className="flex items-center justify-between mb-12">
      <SectionBadge number="2" text="Case studies" />
      <Button variant="primary" className="hidden md:inline-flex" onClick={onNavigateToProjects}>See all projects</Button>
    </div>

    <h2 className="text-5xl md:text-7xl font-medium mb-16">Our work</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-8">
      <ProjectCard
        color="bg-[#9146FF]"
        title="Typeform"
        description="Seamlessly migrating a SaaS leader to Webflow"
      >
        <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Typeform</h3>
          <p className="text-gray-500 text-sm">Get to know your customers with forms worth filling out</p>
        </div>
      </ProjectCard>

      <ProjectCard
        color="bg-[#00684A]"
        title="Forest"
        description="A funky new website for this eco-friendly e-bike company"
      >
        <div className="flex justify-center gap-4 h-full items-end">
          <div className="w-24 h-40 bg-white rounded-t-xl shadow-lg border-4 border-gray-800 border-b-0" />
          <div className="w-24 h-48 bg-white rounded-t-xl shadow-lg border-4 border-gray-800 border-b-0 mb-[-10px]" />
          <div className="w-24 h-32 bg-white rounded-t-xl shadow-lg border-4 border-gray-800 border-b-0" />
        </div>
      </ProjectCard>

      <ProjectCard
        color="bg-[#FBE0EA]"
        title="Typeform - Get Real"
        description="Distilling 1,300+ influencer opinions into an interactive report"
      >
        <div className="bg-white rounded-lg shadow-lg p-4 h-full w-full flex flex-col">
          <div className="h-4 w-20 bg-purple-200 rounded mb-4" />
          <div className="text-2xl font-serif text-purple-900 mb-2">The data on influencer marketing</div>
          <div className="flex-1 bg-purple-50 rounded-md" />
        </div>
      </ProjectCard>
    </div>

    <div className="mt-8 text-center md:hidden">
      <Button variant="primary" className="text-sm py-2.5 px-5" onClick={onNavigateToProjects}>See all projects</Button>
    </div>
  </section>
);

export default CaseStudies;

import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui.jsx';

const ProjectCard = ({ color, title, subtitle, description, children, year, category }) => (
  <div className="group cursor-pointer pb-8 md:pb-10 lg:pb-0 border-b border-gray-200 lg:border-0">
    <div className={`${color} p-8 rounded-2xl aspect-[4/3] relative overflow-hidden mb-6 shadow-md transition-transform duration-300 group-hover:-translate-y-2`}>
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white z-10">
        <ArrowUpRight size={20} />
      </div>
      {children}
    </div>
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{category}</span>
      <span className="text-xs text-gray-400">•</span>
      <span className="text-xs text-gray-400">{year}</span>
    </div>
    <h3 className="text-lg font-medium text-gray-500 mb-1">{description}</h3>
    <h4 className="text-xl font-semibold">{title}</h4>
    {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
  </div>
);

const Projects = () => (
  <div className="bg-[#FAFAFA] pt-32 pb-16 px-6 md:px-12">
    <div className="max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6">All Projects</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
          Explore our portfolio of successful digital marketing campaigns, website projects, and virtual assistance solutions.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-200">
        <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">All Projects</button>
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">Digital Marketing</button>
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">Web Design</button>
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">Branding</button>
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">E-commerce</button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-8">
        <ProjectCard
          color="bg-[#9146FF]"
          title="Typeform"
          description="Seamlessly migrating a SaaS leader to Webflow"
          year="2024"
          category="Web Design"
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
          year="2024"
          category="E-commerce"
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
          year="2024"
          category="Digital Marketing"
        >
          <div className="bg-white rounded-lg shadow-lg p-4 h-full w-full flex flex-col">
            <div className="h-4 w-20 bg-purple-200 rounded mb-4" />
            <div className="text-2xl font-serif text-purple-900 mb-2">The data on influencer marketing</div>
            <div className="flex-1 bg-purple-50 rounded-md" />
          </div>
        </ProjectCard>

        <ProjectCard
          color="bg-[#FF6B6B]"
          title="TechStart Solutions"
          description="Complete rebrand and website for a SaaS startup"
          year="2023"
          category="Branding"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">TechStart</h3>
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          color="bg-[#4ECDC4]"
          title="GreenLeaf Organics"
          description="E-commerce store driving 200% growth in online sales"
          year="2023"
          category="E-commerce"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col justify-center">
            <div className="space-y-3">
              <div className="h-12 bg-teal-100 rounded-lg" />
              <div className="h-12 bg-teal-50 rounded-lg" />
              <div className="h-12 bg-teal-100 rounded-lg" />
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          color="bg-[#FFD93D]"
          title="Sunshine Cafe"
          description="Social media management boosting engagement by 300%"
          year="2023"
          category="Digital Marketing"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">☕</div>
              <h3 className="text-xl font-bold text-gray-900">Sunshine Cafe</h3>
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          color="bg-[#A8DADC]"
          title="FinanceFlow"
          description="Web app design for financial planning tool"
          year="2023"
          category="Web Design"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col justify-center">
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="flex-1 h-16 bg-blue-100 rounded-lg" />
                <div className="flex-1 h-16 bg-blue-200 rounded-lg" />
              </div>
              <div className="h-20 bg-blue-50 rounded-lg" />
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          color="bg-[#E63946]"
          title="FitLife Gym"
          description="Brand identity and marketing materials"
          year="2023"
          category="Branding"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">💪</div>
              <h3 className="text-2xl font-bold text-gray-900">FitLife</h3>
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          color="bg-[#B5838D]"
          title="Luxury Interiors"
          description="Portfolio website showcasing high-end interior design"
          year="2023"
          category="Web Design"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl h-full">
            <div className="grid grid-cols-2 gap-2 h-full">
              <div className="bg-pink-100 rounded-lg" />
              <div className="bg-pink-200 rounded-lg" />
              <div className="bg-pink-200 rounded-lg" />
              <div className="bg-pink-100 rounded-lg" />
            </div>
          </div>
        </ProjectCard>
      </div>

      {/* Load More */}
      <div className="mt-16 text-center">
        <Button variant="primary">Load More Projects</Button>
      </div>
    </div>
  </div>
);

export default Projects;

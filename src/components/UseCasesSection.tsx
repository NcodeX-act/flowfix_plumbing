import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const tags = [
    'Drain Cleaning',
    'Water Heaters',
    'Leak Detection',
    'Pipe Repairs',
    'Sewer Lines',
    'Water Filtration',
    'Commercial Plumbing',
    'Fixture Installs',
    'Gas Line Service',
    'Sump Pumps',
  ];

  const residentialFeatures = [
    {
      title: 'Emergency Repairs',
      desc: 'Burst pipes, active water leaks, clogged drains, and overflow events handled immediately.',
    },
    {
      title: 'System Installation',
      desc: 'High-efficiency water heaters, smart leak detection valves, and water softener systems.',
    },
    {
      title: 'Diagnostics & Safety',
      desc: 'Detailed sewer camera inspections, pressure test diagnostics, and comprehensive pipe health audits.',
    },
  ];

  const [activeTag, setActiveTag] = useState<string>('Drain Cleaning');

  return (
    <section id="emergency" className="py-24 sm:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-flow-teal font-bold uppercase tracking-wider text-xs mb-3">How We Help</p>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-flow-ink tracking-tight">
              Full-service plumbing, mastered.
            </h2>
          </div>
          <p className="text-flow-ink/60 text-base md:text-lg max-w-md">
            Whether it's an urgent middle-of-the-night emergency or a planned kitchen upgrade, our crew handles it with precision.
          </p>
        </div>

        {/* Tag Grid */}
        <div className="flex flex-wrap gap-3 mb-16">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-premium border ${
                activeTag === tag
                  ? 'bg-flow-teal border-flow-teal text-white shadow-md shadow-flow-teal/10'
                  : 'bg-white border-black/5 text-flow-ink/75 hover:border-flow-teal/30 hover:bg-flow-teal/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Feature Panel */}
        <div className="bg-flow-deep rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Video backed panel */}
          <div className="relative lg:col-span-7 min-h-[350px] lg:min-h-[550px] flex flex-col justify-between p-8 sm:p-12">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-plumber-tightening-a-pipe-fitting-42031-large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-flow-deep via-flow-deep/80 to-transparent" />
            </div>

            {/* Badge Overlay */}
            <div className="relative z-10 self-start bg-flow-amber text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Residential Division
            </div>

            {/* Core Text overlay */}
            <div className="relative z-10 max-w-md mt-auto">
              <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Residential Plumbing Services
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Keeping your household running seamlessly. From fast drain sweeps to complete water line repiping, we minimize disruption.
              </p>
            </div>
          </div>

          {/* Right: Residential features list */}
          <div className="lg:col-span-5 bg-flow-deep p-8 sm:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-8">Service Focus Areas</h4>
            <div className="flex flex-col gap-8">
              {residentialFeatures.map((feat, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 size={20} className="text-flow-teal shrink-0 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base mb-1.5 group-hover:text-flow-teal transition-colors">
                      {feat.title}
                    </h5>
                    <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 text-flow-amber hover:text-flow-amber/80 font-bold text-sm transition-colors group"
              >
                <span>Book a Residential Expert</span>
                <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UseCasesSection;

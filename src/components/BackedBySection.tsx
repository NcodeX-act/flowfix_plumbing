import React from 'react';

export const BackedBySection: React.FC = () => {
  const stats = [
    { value: '15,000+', label: 'Homes Serviced' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '45 Min', label: 'Response Time' },
    { value: '100%', label: 'Satisfaction' },
    { value: 'Zero', label: 'Overtime Fees' },
    { value: '24/7', label: 'Live Support' },
  ];

  return (
    <section id="why-us" className="bg-flow-ink py-16 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-flow-teal font-bold uppercase tracking-wider text-xs mb-2">Backed By Excellence</p>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white">
            Performance you can measure.
          </h2>
        </div>
        <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
          From fast response times to certified workmanship, we build trust through transparency and quality service.
        </p>
      </div>

      <div className="relative flex overflow-hidden py-4 bg-flow-deep/40">
        <div className="hover-pause flex overflow-hidden">
          {/* Double list to create continuous infinite loop */}
          <div className="animate-marquee flex gap-12 pr-12 items-center">
            {stats.map((stat, idx) => (
              <div
                key={`s1-${idx}`}
                className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 whitespace-nowrap min-w-[260px]"
              >
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-flow-teal to-flow-amber">
                  {stat.value}
                </span>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{stat.label}</span>
                  <span className="text-white/50 text-xs uppercase tracking-wider">Verified Stat</span>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-marquee flex gap-12 pr-12 items-center" aria-hidden="true">
            {stats.map((stat, idx) => (
              <div
                key={`s2-${idx}`}
                className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 whitespace-nowrap min-w-[260px]"
              >
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-flow-teal to-flow-amber">
                  {stat.value}
                </span>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{stat.label}</span>
                  <span className="text-white/50 text-xs uppercase tracking-wider">Verified Stat</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedBySection;

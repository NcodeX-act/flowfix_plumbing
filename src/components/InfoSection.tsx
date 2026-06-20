import React from 'react';
import { DollarSign, UserCheck, Clock, ShieldAlert } from 'lucide-react';

export const InfoSection: React.FC = () => {
  const highlights = [
    {
      icon: <DollarSign className="text-flow-teal" size={24} />,
      title: 'Transparent Pricing',
      description: 'Zero guesswork. We provide all-inclusive, fixed-rate quotes before any work begins, so you never see surprises.'
    },
    {
      icon: <UserCheck className="text-flow-teal" size={24} />,
      title: 'Elite Technicians',
      description: 'Fully background-checked, drug-tested, and certified master plumbers who treat your home with absolute respect.'
    },
    {
      icon: <Clock className="text-flow-teal" size={24} />,
      title: 'On-Time Dispatch',
      description: 'We respect your schedule. Real-time technician tracking means you know exactly when we arrive, down to the minute.'
    },
    {
      icon: <ShieldAlert className="text-flow-teal" size={24} />,
      title: 'Lifetime Guarantee',
      description: 'We stand by our work. Every repair and installation is backed by our comprehensive materials and labor warranty.'
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-flow-teal font-bold uppercase tracking-wider text-xs mb-3">Meet FlowFix</p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-flow-ink tracking-tight mb-6">
            Plumbing without the stress.
          </h2>
          <p className="text-flow-ink/70 text-lg leading-relaxed">
            We believe that getting your plumbing fixed should be simple, transparent, and prompt. By combining top-tier technical expertise with modern customer service, we keep your home running smoothly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Large Photo Showcase Card */}
          <div className="relative group col-span-1 lg:col-span-1 rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-end p-8 shadow-xl shadow-black/5">
            {/* Background Image */}
            <img
              src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional plumbing work"
              className="absolute inset-0 w-full h-full object-cover transition-premium duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-flow-deep via-flow-deep/60 to-transparent" />

            {/* Content overlay */}
            <div className="relative z-10">
              <span className="bg-flow-amber text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
                The Gold Standard
              </span>
              <h3 className="font-sans font-bold text-2xl text-white mb-3">
                No mess, no stress. That is our promise.
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our technicians wear shoe covers, use protective mats, and clean up completely before leaving. We leave your home cleaner than we found it.
              </p>
            </div>
          </div>

          {/* Right 2x2 Grid of Feature Cards */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-black/5 hover:border-flow-teal/20 shadow-md hover:shadow-xl transition-premium group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-flow-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-premium">
                    {item.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xl text-flow-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-flow-ink/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Small indicator arrow */}
                <div className="mt-8 text-flow-teal/40 group-hover:text-flow-teal flex items-center gap-1.5 text-sm font-semibold transition-colors">
                  <span>Learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default InfoSection;

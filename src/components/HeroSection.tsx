import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const trustBadges = [
    'Licensed & Insured',
    'IAPMO Certified',
    'PHCC Member',
    'Google Guaranteed 5★',
    'HomeAdvisor Screened',
    'BBB Accredited A+',
    'EPA Lead-Safe Certified',
    '100% Satisfaction Guarantee'
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-plumber-working-on-a-pipe-42028-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Deep, premium dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#13202B]/85 via-[#13202B]/75 to-[#F5F5F5]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center max-w-7xl mx-auto px-6 pt-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} className="text-flow-teal" />
            <span>24/7 Expert Emergency Service</span>
          </div>

          {/* Headline */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl text-white leading-tight tracking-tight mb-6">
            Plumbing Redefined.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flow-teal via-flow-teal to-flow-amber">
              Engineered for Flow.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed mb-10">
            Fast, transparent, and ultra-reliable plumbing solutions for your home and business. We solve the issues right the first time, backed by fixed upfront pricing.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#schedule"
              className="group bg-flow-amber hover:bg-flow-amber/90 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-premium shadow-lg shadow-flow-amber/20 hover:shadow-flow-amber/35 transform hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              <span>Schedule Visit</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+18005553569"
              className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:border-white/30 flex items-center justify-center gap-3 backdrop-blur-sm transition-premium transform hover:-translate-y-0.5"
            >
              <Phone size={18} className="text-flow-teal" />
              <span>Call Now (24/7)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust-Indicator Marquee */}
      <div className="relative z-10 bg-flow-deep border-t border-white/5 py-5 overflow-hidden">
        <div className="hover-pause flex overflow-hidden">
          {/* Double list to create continuous infinite loop */}
          <div className="animate-marquee flex gap-16 pr-16 text-white/50 text-sm font-semibold tracking-wider uppercase items-center">
            {trustBadges.map((badge, idx) => (
              <span key={`b1-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-flow-teal" />
                {badge}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex gap-16 pr-16 text-white/50 text-sm font-semibold tracking-wider uppercase items-center" aria-hidden="true">
            {trustBadges.map((badge, idx) => (
              <span key={`b2-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-flow-teal" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState, useEffect } from 'react';
import LogoIcon from './LogoIcon';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-premium ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-black/5 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <LogoIcon size={32} className="transition-premium group-hover:rotate-12" />
          <span
            className={`font-sans font-bold text-xl tracking-tight transition-premium ${
              isScrolled ? 'text-flow-ink' : 'text-white'
            }`}
          >
            FlowFix<span className="text-flow-teal">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Why Us', 'Emergency', 'Reviews'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium transition-colors hover:text-flow-teal text-sm ${
                isScrolled ? 'text-flow-ink/80' : 'text-white/80'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18005553569"
            className={`flex items-center gap-2 font-semibold text-sm transition-colors ${
              isScrolled ? 'text-flow-deep hover:text-flow-teal' : 'text-white hover:text-flow-teal'
            }`}
          >
            <Phone size={16} className="text-flow-amber" />
            <span>(800) 555-FLOW</span>
          </a>
          <a
            href="#schedule"
            className="bg-flow-deep hover:bg-flow-teal text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-premium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Service
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-flow-ink hover:bg-black/5' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-xl px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          {['Services', 'Why Us', 'Emergency', 'Reviews'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-flow-ink font-semibold text-lg hover:text-flow-teal transition-colors"
            >
              {item}
            </a>
          ))}
          <hr className="border-black/5" />
          <div className="flex flex-col gap-4">
            <a
              href="tel:+18005553569"
              className="flex items-center justify-center gap-2 font-bold text-flow-deep border border-black/10 py-3 rounded-full hover:bg-black/5 transition-colors"
            >
              <Phone size={18} className="text-flow-amber" />
              <span>(800) 555-FLOW</span>
            </a>
            <a
              href="#schedule"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-flow-deep hover:bg-flow-teal text-white text-center font-bold py-3 rounded-full shadow-lg transition-premium"
            >
              Book Service
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

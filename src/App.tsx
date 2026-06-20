import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BackedBySection from './components/BackedBySection';
import UseCasesSection from './components/UseCasesSection';
import LogoIcon from './components/LogoIcon';
import { Calendar, CheckCircle, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Drain Cleaning',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const reviews = [
    {
      name: 'Sarah Jenkins',
      location: 'Lincoln Park',
      rating: 5,
      comment: 'FlowFix saved us! Had a burst pipe at 11 PM on a Friday. The tech arrived in 30 minutes, gave us a fixed price, and fixed it perfectly. Incredibly clean and professional.',
    },
    {
      name: 'Michael Chen',
      location: 'River North',
      rating: 5,
      comment: 'Super transparent pricing. No hourly rate games. They gave me a flat quote for our tankless water heater installation and stuck to it. Best experience with a plumber by far.',
    },
    {
      name: 'Elena Rostova',
      location: 'Lakeview',
      rating: 5,
      comment: 'Highly recommend FlowFix. The plumber wore shoe covers, explained exactly what was causing the drain clog, and offered a lifetime warranty. Exceptional standard of service.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans antialiased text-flow-ink selection:bg-flow-teal/20 selection:text-flow-deep">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Info Section */}
        <InfoSection />

        {/* Stats Section */}
        <BackedBySection />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Reviews Section */}
        <section id="reviews" className="py-24 sm:py-32 bg-white border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-flow-teal font-bold uppercase tracking-wider text-xs mb-3">Customer Stories</p>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-flow-ink tracking-tight mb-6">
                Loved by homeowners.
              </h2>
              <p className="text-flow-ink/60 text-lg">
                See why thousands of clients trust FlowFix to keep their water flowing and their homes dry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-[#F5F5F5] border border-black/5 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-premium"
                >
                  <p className="text-flow-ink/75 text-sm sm:text-base leading-relaxed italic mb-8">
                    "{rev.comment}"
                  </p>
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="text-flow-amber text-lg">★</span>
                      ))}
                    </div>
                    <h4 className="font-bold text-flow-ink text-base">{rev.name}</h4>
                    <span className="text-flow-ink/40 text-xs font-semibold uppercase tracking-wider">
                      {rev.location} — Verified Client
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Visit Booking Form Section */}
        <section id="schedule" className="py-24 sm:py-32 bg-[#F5F5F5] relative overflow-hidden">
          {/* Subtle background graphic */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-flow-teal/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-flow-amber/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Form text details */}
              <div className="lg:col-span-5">
                <p className="text-flow-teal font-bold uppercase tracking-wider text-xs mb-3">Book Online</p>
                <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-flow-ink tracking-tight mb-6">
                  Schedule your service in minutes.
                </h2>
                <p className="text-flow-ink/70 leading-relaxed mb-8">
                  Fill out our quick service booking request. A dispatcher will reach out immediately to confirm your appointment window. For urgent emergencies, call us directly.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5">
                    <div className="w-10 h-10 rounded-xl bg-flow-teal/10 flex items-center justify-center text-flow-teal shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-flow-ink/40 font-bold uppercase">24/7 Hotline</span>
                      <p className="text-flow-ink font-bold text-sm sm:text-base">(800) 555-FLOW</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5">
                    <div className="w-10 h-10 rounded-xl bg-flow-teal/10 flex items-center justify-center text-flow-teal shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-flow-ink/40 font-bold uppercase">Email Dispatch</span>
                      <p className="text-flow-ink font-bold text-sm sm:text-base">dispatch@flowfixplumbing.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Card Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-black/5">
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-flow-teal/15 flex items-center justify-center text-flow-teal mb-6">
                      <CheckCircle size={36} />
                    </div>
                    <h3 className="font-sans font-bold text-2xl text-flow-ink mb-3">Appointment Requested!</h3>
                    <p className="text-flow-ink/65 text-sm sm:text-base max-w-sm leading-relaxed mb-6">
                      Thank you for choosing FlowFix. A live dispatcher is reviewing your request and will call you within 15 minutes to confirm.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-flow-teal hover:underline text-sm font-semibold"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold text-flow-ink/60 uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="px-4 py-3 rounded-xl border border-black/10 focus:border-flow-teal focus:ring-1 focus:ring-flow-teal outline-none transition-colors text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-bold text-flow-ink/60 uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="px-4 py-3 rounded-xl border border-black/10 focus:border-flow-teal focus:ring-1 focus:ring-flow-teal outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-flow-ink/60 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="px-4 py-3 rounded-xl border border-black/10 focus:border-flow-teal focus:ring-1 focus:ring-flow-teal outline-none transition-colors text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-xs font-bold text-flow-ink/60 uppercase">
                        Service Required
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-black/10 focus:border-flow-teal focus:ring-1 focus:ring-flow-teal outline-none transition-colors text-sm bg-white"
                      >
                        <option>Drain Cleaning</option>
                        <option>Water Heaters</option>
                        <option>Leak Detection</option>
                        <option>Pipe Repairs</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="notes" className="text-xs font-bold text-flow-ink/60 uppercase">
                        Brief Problem Description
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Please describe the issue..."
                        className="px-4 py-3 rounded-xl border border-black/10 focus:border-flow-teal focus:ring-1 focus:ring-flow-teal outline-none transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-flow-deep hover:bg-flow-teal text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-premium shadow-md shadow-flow-deep/10 hover:shadow-lg mt-2"
                    >
                      <Calendar size={18} />
                      <span>Request Appointment</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-flow-ink text-white/50 border-t border-white/5 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3">
              <LogoIcon size={32} />
              <span className="font-sans font-bold text-xl text-white tracking-tight">
                FlowFix<span className="text-flow-teal">.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Premium plumbing solutions for residential and commercial customers. Fast dispatch, transparent pricing, and elite technicians.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href="#services" className="hover:text-flow-teal transition-colors">Services</a>
              <a href="#why-us" className="hover:text-flow-teal transition-colors">Why Choose Us</a>
              <a href="#emergency" className="hover:text-flow-teal transition-colors">Emergency Services</a>
              <a href="#reviews" className="hover:text-flow-teal transition-colors">Customer Reviews</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">Legal & Rules</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href="#" className="hover:text-flow-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-flow-teal transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-flow-teal transition-colors">License #PL-88942-A</a>
              <a href="#" className="hover:text-flow-teal transition-colors">Liability & Insured Bonds</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">Service Area</h4>
            <div className="flex gap-3 text-sm leading-relaxed">
              <MapPin size={18} className="text-flow-teal shrink-0 mt-1" />
              <p>
                Greater Chicago Metro Area, Lincoln Park, River North, Lakeview, Loop, and surrounding suburbs.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-wide uppercase">
          <p>© {new Date().getFullYear()} FlowFix Plumbing LLC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-flow-teal" />
            <span>Fully Licensed, Bonded & Insured</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

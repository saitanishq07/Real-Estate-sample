import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-alabaster-50">
      {/* Hero Header */}
      <section className="bg-brand-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-brand-800 px-3.5 py-1.5 rounded-full border border-brand-700 inline-block">
            About Vistara Estates
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Pioneering Thoughtful Land Development.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Founded with a vision to revolutionize land investment in India, Vistara Estates builds legal-first, master-planned plotted communities that empower families to construct their dream homes.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-alabaster-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
                Building Communities Where Planning Meets Opportunity.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Historically, land buyers faced uncertainties regarding legal titles, layout approvals, and essential utility infrastructure. Vistara Estates was established to eliminate these ambiguities.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We acquire strategic land parcels along primary economic corridors, secure 100% HMDA / DTCP approvals prior to customer launch, and install subterranean electricity, drainage, and blacktop roads.
              </p>

              <div className="p-6 bg-alabaster-100 rounded-3xl border-l-4 border-gold-400 italic text-brand-900 font-serif text-lg">
                "Our promise is simple: when you buy a plot at Vistara, you receive clear titles, completed infrastructure, and a community designed to appreciate for generations."
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Vistara Master Layout"
                className="rounded-3xl shadow-2xl border border-alabaster-200"
              />
            </div>
          </div>

          {/* Mission, Vision & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-alabaster-200 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-900 text-gold-400 flex items-center justify-center font-bold font-serif text-xl">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Our Mission</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                To deliver master-planned plotted developments with 100% legal clarity, superior physical infrastructure, and long-term value creation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-alabaster-200 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-900 text-gold-400 flex items-center justify-center font-bold font-serif text-xl">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Our Vision</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                To be India's most trusted real estate plotted developer, recognized for setting benchmark standards in community infrastructure and buyer satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-alabaster-200 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-900 text-gold-400 flex items-center justify-center font-bold font-serif text-xl">
                03
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Core Values</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Legal integrity, infrastructure-first execution, radical pricing transparency, and customer-first partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-alabaster-100 border-y border-alabaster-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
              Executive Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
              Guidance & Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-alabaster-200 text-center space-y-4 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                alt="Rajesh Varma"
                className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-gold-400"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-900">Rajesh Varma</h3>
                <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest mt-0.5">Founder & Managing Director</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Over 22 years of real estate land acquisition expertise across major economic corridors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-alabaster-200 text-center space-y-4 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Ananya Nambiar"
                className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-gold-400"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-900">Ananya Nambiar</h3>
                <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest mt-0.5">Head of Urban Planning</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Specialist in sustainable township design, subterranean utility grids, and green space allocation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-alabaster-200 text-center space-y-4 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                alt="Siddharth Reddy"
                className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-gold-400"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-900">Siddharth Reddy</h3>
                <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest mt-0.5">Chief Legal Counsel</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ensures 100% legal verification, title clearance, and bank tie-ups for all Vistara projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">Ready to Partner with Vistara?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book a private site visit to inspect our land layout and speak directly with our relationship officers.
          </p>
          <Link
            to="/site-visit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-brand-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gold-500 transition-colors shadow-lg"
          >
            <span>Book a Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

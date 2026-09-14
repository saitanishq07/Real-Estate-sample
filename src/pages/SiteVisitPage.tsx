import React from 'react';
import { SiteVisitForm } from '../components/forms/SiteVisitForm';
import { Calendar, Compass, ShieldCheck, Car } from 'lucide-react';

export const SiteVisitPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-brand-800 px-3 py-1 rounded-full border border-brand-700 inline-block">
            VIP Layout Tour
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Schedule a Private Site Visit
          </h1>
          <p className="text-slate-300 text-base max-w-2xl">
            Inspect Vistara Greenfields in person with a dedicated relationship officer. Explore our finished blacktop roads, central botanical gardens, and individual plot demarcations.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <SiteVisitForm />
      </div>
    </div>
  );
};

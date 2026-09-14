import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Compass, Send } from 'lucide-react';
import { EnquiryForm } from '../components/forms/EnquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-brand-800 px-3 py-1 rounded-full border border-brand-700 inline-block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Contact Vistara Estates
          </h1>
          <p className="text-slate-300 text-base max-w-2xl">
            Our real estate relationship advisors are available 7 days a week to answer your legal, layout, and pricing queries.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-card space-y-6">
                <h3 className="font-serif text-2xl font-bold text-brand-900 border-b border-cream-200 pb-4">
                  Corporate Sales Office
                </h3>

                <ul className="space-y-5 text-sm text-slate-700">
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-brand-900 text-gold-400 rounded-xl">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Sales Line</span>
                      <a href="tel:+919000000000" className="font-serif text-lg font-bold text-brand-900 hover:text-gold-600">
                        +91 90000 00000
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-brand-900 text-gold-400 rounded-xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Official Email</span>
                      <a href="mailto:sales@vistaraestates.example" className="font-serif text-base font-bold text-brand-900 hover:text-gold-600">
                        sales@vistaraestates.example
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-brand-900 text-gold-400 rounded-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Headquarters</span>
                      <p className="text-sm font-medium text-slate-800">
                        Vistara Tower, Financial District, Hyderabad, Telangana 500032, India
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-brand-900 text-gold-400 rounded-xl">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Business Hours</span>
                      <p className="text-sm font-medium text-slate-800">
                        Monday – Sunday: 9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Instant WhatsApp Quick Link */}
                <div className="pt-4 border-t border-cream-200">
                  <a
                    href="https://wa.me/919000000000?text=Hi%20Vistara%20Estates,%20I%20want%20to%20enquire%20about%20plots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-cream-200 shadow-card">
              <EnquiryForm title="Send Us a Message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-slate-300 pt-20 pb-10 border-t border-brand-900 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-dark-800">
          {/* Brand Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-11 h-11 rounded-xl bg-brand-900 border border-gold-500/40 text-gold-400 flex items-center justify-center shadow-glow-gold">
                <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white block">
                  VISTARA
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase font-semibold text-gold-400 block mt-0.5">
                  ESTATES
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Creating thoughtfully planned spaces for modern living and long-term value. Premium plotted developments engineered with legal clarity and high investment growth.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-950/80 border border-brand-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% HMDA / DTCP Approved Layouts</span>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-bold text-lg tracking-wide border-b border-dark-800 pb-2">
              Company
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-gold-400 transition-colors">
                  About Vistara
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Location Advantages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Careers & Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Projects */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-bold text-lg tracking-wide border-b border-dark-800 pb-2">
              Projects
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link to="/projects/vistara-greenfields" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Vistara Greenfields
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Upcoming Projects
                </Link>
              </li>
              <li>
                <Link to="/plot-explorer" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Plot Explorer
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Master Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-bold text-lg tracking-wide border-b border-dark-800 pb-2">
              Contact & Sales
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a href="tel:+919000000000" className="hover:text-gold-400 transition-colors font-medium">
                  +91 90000 00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a href="mailto:sales@vistaraestates.example" className="hover:text-gold-400 transition-colors font-medium">
                  sales@vistaraestates.example
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">
                  Vistara Tower, Financial District, Hyderabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 Vistara Estates. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>

          <div className="text-slate-400 font-medium tracking-wider">
            Designed & Developed by <span className="text-gold-400 font-semibold">TanovaX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

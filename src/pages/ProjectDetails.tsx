import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Compass, MapPin, Layers, ShieldCheck, CheckCircle2, ArrowRight, Eye, Calendar, HelpCircle
} from 'lucide-react';
import { FEATURED_PROJECT, AMENITIES_LIST, LOCATION_LANDMARKS, FAQS_LIST, GALLERY_ITEMS } from '../data/mockData';
import { PlotExplorer } from '../components/plot/PlotExplorer';
import { Lightbox } from '../components/ui/Lightbox';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // In demo mode, fallback to FEATURED_PROJECT
  const project = FEATURED_PROJECT;

  return (
    <div className="pt-20 pb-20">
      {/* 1. HERO OVERVIEW */}
      <section className="relative min-h-[60vh] flex items-center py-16 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/75 to-dark-950/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
            <span>{project.status}</span> • <span>{project.location}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white max-w-3xl leading-tight">
            {project.name}
          </h1>

          <p className="text-slate-200 text-lg max-w-2xl font-normal">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/site-visit"
              className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-brand-950 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Private Site Visit</span>
            </Link>

            <a
              href="#master-plan"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/30 transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Master Plan</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS BANNER */}
      <section className="bg-brand-900 text-white py-8 border-y border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 block font-medium">Layout Extent</span>
              <span className="font-serif text-3xl font-bold text-white">{project.totalAcres} Acres</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 block font-medium">Total Plots</span>
              <span className="font-serif text-3xl font-bold text-white">{project.totalPlots}+ Plots</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 block font-medium">Plot Options</span>
              <span className="font-serif text-3xl font-bold text-white">{project.plotSizesRange}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 block font-medium">Road Network</span>
              <span className="font-serif text-3xl font-bold text-white">{project.roadsWidth}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT OVERVIEW */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Master Development Overview
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
                Thoughtfully Engineered for Generations.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {project.longDescription}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-brand-900 text-xl">Key Project Approvals & Specs:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 relative" id="master-plan">
              <div className="bg-white p-4 rounded-3xl border border-cream-200 shadow-2xl">
                <img
                  src={project.masterPlanImage}
                  alt="Vistara Master Plan"
                  className="rounded-2xl w-full h-[380px] object-cover"
                />
                <div className="p-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-brand-900 font-bold block">
                    HMDA / DTCP Approved Layout Blueprint
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMBEDDED PLOT EXPLORER */}
      <section className="py-20 bg-cream-100 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 bg-gold-100 px-3 py-1 rounded-full border border-gold-300">
              Real-time Availability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-900">
              Interactive Layout & Plot Selector
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Inspect availability across Block A, B, C, and D. Click any plot to view specs, facing, and pricing.
            </p>
          </div>

          <PlotExplorer />
        </div>
      </section>

      {/* 5. FAQS SECTION */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 bg-gold-100 px-3 py-1 rounded-full border border-gold-300">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-900">
              Buyer & Legal Clarifications
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_LIST.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-subtle"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-lg text-brand-900 flex items-center justify-between hover:bg-cream-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-gold-600 text-xl">{openFaq === idx ? '−' : '+'}</span>
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-cream-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, Layers, TrendingUp, Trees, Building2, MapPin,
  CheckCircle2, Eye, Sparkles, Award, Search, Calendar, ChevronRight, PhoneCall
} from 'lucide-react';

import { FEATURED_PROJECT, AMENITIES_LIST, LOCATION_LANDMARKS, TESTIMONIALS_LIST, GALLERY_ITEMS } from '../data/mockData';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { PlotExplorer } from '../components/plot/PlotExplorer';
import { EMICalculator } from '../components/calculator/EMICalculator';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { Lightbox } from '../components/ui/Lightbox';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Hero Quick Explorer State
  const [heroSize, setHeroSize] = useState('ALL');
  const [heroFacing, setHeroFacing] = useState('ALL');

  const buyerBenefits = [
    {
      icon: ShieldCheck,
      title: '100% Clear Titles',
      description: 'HMDA & DTCP approved layouts with verified legal documentation and pre-approved bank loans.'
    },
    {
      icon: Layers,
      title: 'Planned Infrastructure',
      description: '30 & 40 ft bitumen roads, subterranean electricity lines, storm drainage, and water network.'
    },
    {
      icon: MapPin,
      title: 'Strategic Connectivity',
      description: 'Direct Bangalore Highway frontage placing airports, tech corridors, and schools within easy reach.'
    },
    {
      icon: TrendingUp,
      title: 'High Capital Growth',
      description: 'Positioned in prime high-growth economic corridors engineered for sustained long-term land equity.'
    },
    {
      icon: Trees,
      title: '25%+ Open Greenery',
      description: 'Thematic botanical parks, fruit orchards, reflexology walking tracks, and open horizons.'
    },
    {
      icon: Building2,
      title: 'Gated Community Living',
      description: '24/7 compound security, perimeter walls, CCTV surveillance, and 15,000 sq. ft. resident clubhouse.'
    }
  ];

  const whyInvestCards = [
    {
      title: 'Strategic Locations',
      description: 'Handpicked locations positioned directly along major economic growth and highway corridors.'
    },
    {
      title: 'Planned Communities',
      description: 'Infrastructure engineered prior to layout launch — wide blacktop roads, underground utilities, and water.'
    },
    {
      title: 'Transparent Process',
      description: 'Clear plot demarcations, straightforward pricing, and open communication at every phase.'
    },
    {
      title: 'Long-Term Equity',
      description: 'Plotted developments designed with future community value and multi-generational security in mind.'
    }
  ];

  const handleHeroQuickSearch = () => {
    navigate('/plot-explorer');
  };

  return (
    <div className="w-full bg-alabaster-50">
      {/* 1. HERO SECTION WITH FLOATING QUICK SEARCH BAR */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Parallax Image & Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Vistara Greenfields Plotted Community"
            className="w-full h-full object-cover scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/92 via-dark-950/80 to-dark-950/65" />
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full space-y-8">
          <div className="max-w-3xl space-y-6">
            {/* Live Ticker Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Phase 1 Open • 100% HMDA & DTCP Approved</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              Find a Place Worth Calling Your Own.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Premium plotted developments thoughtfully planned for modern living, long-term value and a better tomorrow.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/plot-explorer"
                className="px-8 py-4 bg-gold-400 hover:bg-gold-500 text-brand-950 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-glow-gold hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 border border-gold-300"
              >
                <span>Explore Plots</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/site-visit"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-widest rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book a Site Visit</span>
              </Link>
            </div>
          </div>

          {/* Floating Luxury Quick Explorer Bar */}
          <div className="mt-8 bg-brand-950/90 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-gold-500/30 shadow-2xl max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-400 font-bold mb-1">
                  Location
                </label>
                <div className="text-xs font-bold text-white">Bangalore Highway (NH-44)</div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-400 font-bold mb-1">
                  Plot Size Range
                </label>
                <select
                  value={heroSize}
                  onChange={(e) => setHeroSize(e.target.value)}
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                >
                  <option value="ALL">All Plot Sizes</option>
                  <option value="150">150 Sq. Yds</option>
                  <option value="200">200 Sq. Yds</option>
                  <option value="250">250 Sq. Yds</option>
                  <option value="300+">300+ Sq. Yds</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold-400 font-bold mb-1">
                  Facing
                </label>
                <select
                  value={heroFacing}
                  onChange={(e) => setHeroFacing(e.target.value)}
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                >
                  <option value="ALL">All Facings</option>
                  <option value="East">East Facing</option>
                  <option value="West">West Facing</option>
                  <option value="North">North Facing</option>
                </select>
              </div>

              <div>
                <button
                  onClick={handleHeroQuickSearch}
                  className="w-full py-3 px-4 bg-gold-400 hover:bg-gold-500 text-brand-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Layout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / STATISTICS SECTION */}
      <section className="bg-brand-900 text-white py-14 border-y border-brand-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-800">
            <div className="pt-4 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-400">
                <AnimatedCounter value={120} suffix="+" />
              </div>
              <p className="text-xs uppercase tracking-architectural text-slate-300 mt-2 font-semibold">
                Acres Developed
              </p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-400">
                <AnimatedCounter value={850} suffix="+" />
              </div>
              <p className="text-xs uppercase tracking-architectural text-slate-300 mt-2 font-semibold">
                Plots Planned
              </p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-400">
                150–300
              </div>
              <p className="text-xs uppercase tracking-architectural text-slate-300 mt-2 font-semibold">
                Sq. Yards Options
              </p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-400">
                30–40 ft
              </div>
              <p className="text-xs uppercase tracking-architectural text-slate-300 mt-2 font-semibold">
                Wide Internal Roads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT VISTARA SECTION */}
      <section className="py-24 bg-alabaster-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-alabaster-200">
                <img
                  src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Vistara Community Lifestyle"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-brand-900 text-white p-6 rounded-3xl border border-gold-500/40 shadow-2xl max-w-xs">
                <Award className="w-8 h-8 text-gold-400 mb-2" />
                <p className="font-serif text-xl font-bold text-white">100% Clear Title Assurance</p>
                <p className="text-xs text-slate-300 mt-1">
                  Legally verified master plans with instant bank loan pre-approvals.
                </p>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
                About Vistara Estates
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900 leading-tight">
                More Than Land. A Better Way Forward.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Since our beginning, we've focused on creating plotted communities where thoughtful planning meets opportunity. We believe land ownership should represent security, freedom, and generational prosperity.
              </p>

              {/* Three Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-alabaster-200 shadow-subtle">
                  <h4 className="font-serif font-bold text-brand-900 text-lg mb-1">Thoughtful Planning</h4>
                  <p className="text-xs text-slate-500">Master-engineered layouts with optimal ventilation and solar facing.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-alabaster-200 shadow-subtle">
                  <h4 className="font-serif font-bold text-brand-900 text-lg mb-1">Quality Infrastructure</h4>
                  <p className="text-xs text-slate-500">Built-first bitumen roads, drainage, water supply, and LED grids.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-alabaster-200 shadow-subtle">
                  <h4 className="font-serif font-bold text-brand-900 text-lg mb-1">Long-Term Value</h4>
                  <p className="text-xs text-slate-500">High-growth economic corridors for rapid capital appreciation.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 border-b-2 border-brand-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
                >
                  <span>Discover Vistara Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT SECTION */}
      <section className="py-24 bg-alabaster-100 border-y border-alabaster-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
              Flagship Community
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
              Featured Project Showcase
            </h2>
            <p className="text-slate-600 text-sm">
              Explore our landmark 120-acre plotted development engineered for modern villa construction.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-alabaster-200 shadow-luxury grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[380px]">
              <img
                src={FEATURED_PROJECT.heroImage}
                alt={FEATURED_PROJECT.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-brand-900/95 backdrop-blur-md text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gold-500/40">
                {FEATURED_PROJECT.status} • {FEATURED_PROJECT.location}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-2">
                  {FEATURED_PROJECT.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-4">
                  {FEATURED_PROJECT.tagline}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {FEATURED_PROJECT.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-alabaster-200">
                  <div className="p-3 bg-alabaster-50 rounded-xl border border-alabaster-200">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-semibold">Total Extent</span>
                    <span className="font-serif text-lg font-bold text-brand-900">120 Acres</span>
                  </div>
                  <div className="p-3 bg-alabaster-50 rounded-xl border border-alabaster-200">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-semibold">Planned Plots</span>
                    <span className="font-serif text-lg font-bold text-brand-900">850+ Plots</span>
                  </div>
                  <div className="p-3 bg-alabaster-50 rounded-xl border border-alabaster-200">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-semibold">Plot Sizes</span>
                    <span className="font-serif text-lg font-bold text-brand-900">150–300 Sq.Yd</span>
                  </div>
                  <div className="p-3 bg-alabaster-50 rounded-xl border border-alabaster-200">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-semibold">Avenue Roads</span>
                    <span className="font-serif text-lg font-bold text-brand-900">30–40 ft Roads</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to={`/projects/${FEATURED_PROJECT.slug}`}
                  className="flex-1 py-4 px-5 bg-brand-900 hover:bg-brand-800 text-gold-300 text-xs font-bold uppercase tracking-widest rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/plot-explorer"
                  className="py-4 px-5 border border-brand-900 text-brand-900 hover:bg-alabaster-100 text-xs font-bold uppercase tracking-widest rounded-xl transition-all text-center flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Master Plan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLOT EXPLORER SECTION */}
      <section className="py-24 bg-alabaster-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
              Interactive Master Blueprint
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
              Choose Your Plot.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore plot availability and find the exact location that fits your construction plans. Click any plot cell to inspect dimensions, facing orientation, and pricing.
            </p>
          </div>

          <PlotExplorer />
        </div>
      </section>

      {/* 6. PROPERTY DETAILS / BUYER BENEFITS */}
      <section className="py-24 bg-brand-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-brand-800 px-3.5 py-1.5 rounded-full border border-brand-700 inline-block">
              Buyer Assurance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              What Vistara Buyers Receive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerBenefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-950/90 p-8 rounded-3xl border border-brand-800 hover:border-gold-500/40 transition-all duration-300 group space-y-4 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-800 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">{b.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. AMENITIES SECTION */}
      <section className="py-24 bg-alabaster-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
              Community Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
              Designed Around Better Living.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_LIST.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-white rounded-3xl overflow-hidden border border-alabaster-200 shadow-subtle group hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-900/90 text-gold-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-gold-500/20">
                    {amenity.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h4 className="font-serif font-bold text-xl text-brand-900">{amenity.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <section className="py-24 bg-alabaster-100 border-y border-alabaster-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
              Strategic Corridor
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
              Connected to What Matters.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 bg-brand-900 text-white p-8 sm:p-10 rounded-3xl border border-brand-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-brand-800 pb-4">
                <div>
                  <span className="text-xs text-gold-400 font-bold uppercase tracking-widest block">
                    Location Matrix
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">Bangalore Highway Access</h3>
                </div>
                <MapPin className="w-8 h-8 text-gold-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LOCATION_LANDMARKS.map((lm) => (
                  <div key={lm.id} className="p-4 rounded-2xl bg-brand-950/90 border border-brand-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-200 font-semibold block">{lm.name}</span>
                      <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">{lm.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-lg font-bold text-white block">{lm.travelTimeMinutes} mins</span>
                      <span className="text-[10px] text-slate-400">{lm.distanceKm} km</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-alabaster-200 shadow-card space-y-4">
                <h3 className="font-serif text-2xl font-bold text-brand-900">
                  Highway Growth Potential
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The Bangalore Highway corridor is widely recognized as one of the fastest-growing industrial and residential belts with rapid infrastructure expansions driving land valuations.
                </p>

                <div className="pt-4">
                  <Link
                    to="/location"
                    className="w-full py-4 px-5 bg-brand-900 hover:bg-brand-800 text-gold-300 text-xs font-bold uppercase tracking-widest rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View Location & Travel Matrix</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY INVEST SECTION */}
      <section className="py-24 bg-alabaster-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
              The Vistara Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
              Why Vistara?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvestCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-alabaster-200 shadow-subtle hover:shadow-card transition-all space-y-3"
              >
                <div className="font-serif text-3xl font-bold text-gold-500">0{idx + 1}</div>
                <h3 className="font-serif text-2xl font-bold text-brand-900">{card.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. EMI CALCULATOR SECTION */}
      <section className="py-24 bg-alabaster-100 border-y border-alabaster-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMICalculator />
        </div>
      </section>

      {/* 11. GALLERY PREVIEW SECTION */}
      <section className="py-24 bg-alabaster-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300 inline-block">
                Visual Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900">
                Project Gallery
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 hover:text-gold-600 transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-subtle border border-alabaster-200"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold line-clamp-1">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      </section>

      {/* 12. TESTIMONIALS SECTION */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-brand-800 px-3.5 py-1.5 rounded-full border border-brand-700 inline-block">
              Buyer Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Trusted by Investors & Home Builders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_LIST.map((t) => (
              <div
                key={t.id}
                className="bg-brand-950 p-8 rounded-3xl border border-brand-800 shadow-xl flex flex-col justify-between space-y-6"
              >
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-brand-800">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/40"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-gold-400 font-semibold">{t.role}</p>
                    {t.plotPurchased && (
                      <p className="text-[10px] text-slate-400 mt-0.5">{t.plotPurchased}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. SITE VISIT CTA SECTION */}
      <section className="py-20 bg-gold-400 text-brand-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-brand-900 text-gold-300 inline-block">
            Experience In Person
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            See Your Future in Person.
          </h2>
          <p className="text-brand-950/85 text-base max-w-2xl mx-auto font-medium">
            Book a private site visit and experience the project, location, internal blacktop roads, and serene surroundings for yourself.
          </p>
          <div className="pt-2">
            <Link
              to="/site-visit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 hover:bg-brand-800 text-gold-300 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-xl hover:-translate-y-0.5"
            >
              <span>Book a Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. ENQUIRY FORM SECTION */}
      <section className="py-24 bg-alabaster-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-alabaster-200 shadow-card">
            <EnquiryForm title="Request Legal Pricing Sheet & Site Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
};

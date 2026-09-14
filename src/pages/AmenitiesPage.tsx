import React, { useState } from 'react';
import { AMENITIES_LIST } from '../data/mockData';
import { ShieldCheck, Building2, Trees, Zap, Droplets, Footprints, Lock, Smile, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AmenitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Security & Greenery', 'Recreation', 'Infrastructure', 'Wellness'];

  const filteredAmenities = AMENITIES_LIST.filter((a) => {
    if (selectedCategory === 'ALL') return true;
    return a.category === selectedCategory;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-brand-800 px-3 py-1 rounded-full border border-brand-700 inline-block">
            Master Community Infrastructure
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Designed Around Better Living.
          </h1>
          <p className="text-slate-300 text-base max-w-2xl">
            At Vistara Estates, amenities are not an afterthought — they are master-planned before plot release to ensure an elevated suburban lifestyle.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter */}
          <div className="flex items-center gap-2 border-b border-cream-200 pb-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-900 text-gold-300 shadow-sm'
                    : 'text-slate-600 hover:bg-cream-100 hover:text-brand-900'
                }`}
              >
                {cat === 'ALL' ? 'All Amenities' : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAmenities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-900/90 text-gold-300 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-500/20">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-brand-900">{item.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Visit Callout */}
      <section className="py-16 bg-cream-100 border-t border-cream-200 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-serif text-3xl font-bold text-brand-900">Experience the Infrastructure First-Hand</h3>
          <p className="text-slate-600 text-sm">
            Visit Vistara Greenfields to see finished 40 ft blacktop roads, landscaped gardens, and underground utility connections in person.
          </p>
          <Link
            to="/site-visit"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-brand-950 font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md"
          >
            <span>Book Private Tour</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

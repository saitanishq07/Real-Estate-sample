import React from 'react';
import { MapPin, Navigation, Plane, Briefcase, GraduationCap, Activity, ShoppingBag, ArrowRight } from 'lucide-react';
import { LOCATION_LANDMARKS } from '../data/mockData';
import { Link } from 'react-router-dom';

export const LocationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-brand-800 px-3 py-1 rounded-full border border-brand-700 inline-block">
            High Growth Corridor
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Connected to What Matters.
          </h1>
          <p className="text-slate-300 text-base max-w-2xl">
            Vistara Greenfields is strategically situated right along the Bangalore Highway (NH-44), placing top economic hubs, international schools, and airports within easy driving distance.
          </p>
        </div>
      </section>

      {/* Connectivity Table & Map Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Map Representation Box */}
          <div className="bg-brand-900 text-white p-8 sm:p-12 rounded-3xl border border-brand-800 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-800 pb-6">
              <div>
                <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block mb-1">
                  Location Matrix & Travel Times
                </span>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Bangalore Highway Corridor Advantages
                </h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-brand-800 rounded-xl text-xs text-gold-300 border border-gold-500/20">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Direct Highway Access</span>
              </div>
            </div>

            {/* Landmarks Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATION_LANDMARKS.map((lm) => (
                <div
                  key={lm.id}
                  className="bg-brand-950 p-6 rounded-2xl border border-brand-800 hover:border-gold-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gold-400 uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                      {lm.category}
                    </span>
                    <span className="text-xs text-slate-400">{lm.distanceKm} km</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white">{lm.name}</h3>

                  <div className="pt-2 border-t border-brand-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Estimated Drive Time</span>
                    <span className="font-serif font-bold text-lg text-gold-400">{lm.travelTimeMinutes} Mins</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              * Demonstration content representing planned infrastructure access along NH-44.
            </p>
          </div>

          {/* Location Advantages Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-card space-y-3">
              <div className="font-serif text-2xl font-bold text-brand-900">01. Highway Access</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Direct frontage on NH-44 eliminates inner-city traffic bottlenecks, providing smooth transit to commercial zones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-card space-y-3">
              <div className="font-serif text-2xl font-bold text-brand-900">02. Economic Expansion</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Surrounding electronic hardware parks, pharma hubs, and logistics corridors ensure sustained rental and resale demand.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-card space-y-3">
              <div className="font-serif text-2xl font-bold text-brand-900">03. Social Infrastructure</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Top-tier international schools, multispeciality hospitals, and retail malls within a 15-minute drive radius.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

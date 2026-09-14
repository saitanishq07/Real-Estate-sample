import React from 'react';
import { PlotExplorer } from '../components/plot/PlotExplorer';
import { Compass, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlotExplorerPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-900 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold uppercase tracking-widest">
            <Link to="/projects/vistara-greenfields" className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Vistara Greenfields
            </Link>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Interactive Plot Selection System
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Filter plots by block, size, facing, and budget. Click any plot cell to inspect dimensions, road width, facing orientation, and pricing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Real-time synchronization active for Block A, B, C, & D. Click available plots to request instant legal pricing sheets.
            </span>
          </div>
        </div>

        <PlotExplorer />
      </div>
    </div>
  );
};

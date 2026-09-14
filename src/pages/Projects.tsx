import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { PROJECTS_LIST } from '../data/mockData';
import { Badge } from '../components/ui/Badge';

export const Projects: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');

  const filteredProjects = PROJECTS_LIST.filter((p) => {
    if (filterStatus === 'ALL') return true;
    return p.status.toUpperCase() === filterStatus;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-brand-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-brand-800 px-3 py-1 rounded-full border border-brand-700 inline-block">
            Our Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Vistara Plotted Communities
          </h1>
          <p className="text-slate-300 text-base max-w-2xl">
            Explore our flagship ongoing project and upcoming plotted developments along high-growth economic corridors.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Status Filter */}
          <div className="flex items-center gap-2 border-b border-cream-200 pb-4">
            {['ALL', 'ONGOING', 'UPCOMING'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  filterStatus === status
                    ? 'bg-brand-900 text-gold-300 shadow-sm'
                    : 'text-slate-600 hover:bg-cream-100 hover:text-brand-900'
                }`}
              >
                {status === 'ALL' ? 'All Projects' : status}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-card flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur-md text-gold-300 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-500/30">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-brand-900">{project.name}</h3>
                      <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider mt-0.5">
                        {project.location}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats List */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-cream-200 text-xs">
                      <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Acres</span>
                        <span className="font-serif font-bold text-brand-900 text-base">{project.totalAcres} Acres</span>
                      </div>

                      <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Plots</span>
                        <span className="font-serif font-bold text-brand-900 text-base">{project.totalPlots}+ Plots</span>
                      </div>

                      <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Plot Sizes</span>
                        <span className="font-serif font-bold text-brand-900 text-sm">{project.plotSizesRange}</span>
                      </div>

                      <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Starting Price</span>
                        <span className="font-serif font-bold text-brand-900 text-sm">₹{project.startingPriceLakhs} Lakhs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="w-full py-3 px-4 bg-brand-900 hover:bg-brand-800 text-gold-300 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

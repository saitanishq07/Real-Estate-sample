import React, { useState, useMemo } from 'react';
import { Search, Filter, Compass, Maximize2, CheckCircle2, AlertCircle, XCircle, ArrowRight, Sparkles, Trees } from 'lucide-react';
import { MOCK_PLOTS } from '../../data/mockData';
import { Plot, PlotFilterState } from '../../types';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { EnquiryForm } from '../forms/EnquiryForm';
import { useNavigate } from 'react-router-dom';

interface PlotExplorerProps {
  initialBlock?: string;
  compactView?: boolean;
}

export const PlotExplorer: React.FC<PlotExplorerProps> = ({ initialBlock = 'ALL' }) => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<PlotFilterState>({
    block: initialBlock,
    status: 'ALL',
    sizeSqYd: 'ALL',
    facing: 'ALL',
    maxPriceLakhs: 60,
    searchQuery: '',
  });

  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [enquiryPlot, setEnquiryPlot] = useState<Plot | null>(null);

  const filteredPlots = useMemo(() => {
    return MOCK_PLOTS.filter((plot) => {
      if (filters.block !== 'ALL' && plot.block !== filters.block) return false;
      if (filters.status !== 'ALL' && plot.status !== filters.status) return false;
      if (filters.sizeSqYd !== 'ALL') {
        const targetSize = parseInt(filters.sizeSqYd);
        if (filters.sizeSqYd === '300+' && plot.sizeSqYd < 300) return false;
        if (filters.sizeSqYd !== '300+' && plot.sizeSqYd !== targetSize) return false;
      }
      if (filters.facing !== 'ALL' && plot.facing !== filters.facing) return false;
      if (plot.priceLakhs > filters.maxPriceLakhs) return false;
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesNum = plot.number.toLowerCase().includes(q);
        const matchesBlock = plot.block.toLowerCase().includes(q);
        if (!matchesNum && !matchesBlock) return false;
      }
      return true;
    });
  }, [filters]);

  const stats = useMemo(() => {
    const total = filteredPlots.length;
    const available = filteredPlots.filter((p) => p.status === 'AVAILABLE').length;
    const reserved = filteredPlots.filter((p) => p.status === 'RESERVED').length;
    const sold = filteredPlots.filter((p) => p.status === 'SOLD').length;
    return { total, available, reserved, sold };
  }, [filteredPlots]);

  const handleResetFilters = () => {
    setFilters({
      block: 'ALL',
      status: 'ALL',
      sizeSqYd: 'ALL',
      facing: 'ALL',
      maxPriceLakhs: 60,
      searchQuery: '',
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Blueprint Control Panel Header */}
      <div className="bg-alabaster-100 p-6 rounded-3xl border border-alabaster-200 shadow-card space-y-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Block Selector Tabs */}
          <div className="flex items-center bg-alabaster-200/80 p-1.5 rounded-2xl overflow-x-auto no-scrollbar border border-alabaster-300/60">
            {['ALL', 'A', 'B', 'C', 'D'].map((b) => (
              <button
                key={b}
                onClick={() => setFilters({ ...filters, block: b })}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                  filters.block === b
                    ? 'bg-brand-900 text-gold-300 shadow-md font-bold'
                    : 'text-slate-700 hover:text-brand-900 hover:bg-alabaster-100'
                }`}
              >
                {b === 'ALL' ? 'All Blocks' : `Block ${b}`}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search plot number (e.g. A01, B12)..."
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              className="w-full pl-11 pr-4 py-2.5 text-xs font-medium bg-white border border-alabaster-200 rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-800 shadow-sm"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters({ ...filters, searchQuery: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-4 border-t border-alabaster-200">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full text-xs bg-white border border-alabaster-200 rounded-xl px-3 py-2 font-semibold text-brand-900 focus:ring-1 focus:ring-brand-800"
            >
              <option value="ALL">All Statuses</option>
              <option value="AVAILABLE">Available</option>
              <option value="RESERVED">Reserved</option>
              <option value="SOLD">Sold</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
              Plot Size
            </label>
            <select
              value={filters.sizeSqYd}
              onChange={(e) => setFilters({ ...filters, sizeSqYd: e.target.value })}
              className="w-full text-xs bg-white border border-alabaster-200 rounded-xl px-3 py-2 font-semibold text-brand-900 focus:ring-1 focus:ring-brand-800"
            >
              <option value="ALL">All Sizes</option>
              <option value="150">150 Sq. Yds</option>
              <option value="200">200 Sq. Yds</option>
              <option value="250">250 Sq. Yds</option>
              <option value="300+">300+ Sq. Yds</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
              Facing
            </label>
            <select
              value={filters.facing}
              onChange={(e) => setFilters({ ...filters, facing: e.target.value })}
              className="w-full text-xs bg-white border border-alabaster-200 rounded-xl px-3 py-2 font-semibold text-brand-900 focus:ring-1 focus:ring-brand-800"
            >
              <option value="ALL">All Facings</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
            </select>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
              <span>Max Price</span>
              <span className="text-brand-900 font-bold">₹{filters.maxPriceLakhs} L</span>
            </div>
            <input
              type="range"
              min="24"
              max="60"
              step="1"
              value={filters.maxPriceLakhs}
              onChange={(e) => setFilters({ ...filters, maxPriceLakhs: parseFloat(e.target.value) })}
              className="w-full accent-brand-800 cursor-pointer h-2 bg-alabaster-200 rounded-lg"
            />
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-end">
            <button
              onClick={handleResetFilters}
              className="w-full text-xs font-semibold uppercase tracking-wider py-2.5 px-3 text-slate-600 hover:text-brand-900 border border-slate-300 hover:border-brand-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <Filter className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Legend and Counter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-5 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600 shadow-sm" />
            <span className="text-slate-800">Available ({stats.available})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 border border-amber-600 shadow-sm" />
            <span className="text-slate-800">Reserved ({stats.reserved})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-slate-400 border border-slate-500 shadow-sm" />
            <span className="text-slate-600">Sold ({stats.sold})</span>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing <span className="font-bold text-brand-900">{filteredPlots.length}</span> of {MOCK_PLOTS.length} Master Plots
        </div>
      </div>

      {/* Plot Grid Display */}
      {filteredPlots.length === 0 ? (
        <div className="bg-alabaster-100 rounded-3xl p-12 text-center border border-alabaster-200">
          <AlertCircle className="w-10 h-10 text-amber-600 mx-auto mb-3" />
          <h4 className="font-serif text-2xl font-bold text-brand-900">No matching plots found</h4>
          <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
            Try adjusting your budget slider or clearing size and facing filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 px-5 py-2.5 bg-brand-900 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-brand-800"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto pb-2 no-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 min-w-[320px]">
            {filteredPlots.map((plot) => {
              const isAvailable = plot.status === 'AVAILABLE';
              const isReserved = plot.status === 'RESERVED';

              return (
                <button
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group flex flex-col justify-between ${
                    isAvailable
                      ? 'plot-available'
                      : isReserved
                      ? 'plot-reserved'
                      : 'plot-sold'
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold tracking-tight">
                      Plot {plot.number}
                    </span>
                    <Badge status={plot.status} className="text-[9px] px-2 py-0.5" />
                  </div>

                  {/* Details */}
                  <div className="space-y-1 my-1">
                    <p className="font-serif text-base font-bold">{plot.sizeSqYd} Sq. Yds</p>
                    <p className="text-[11px] opacity-75 font-medium">{plot.facing} Facing • {plot.roadWidthFt}ft Road</p>
                  </div>

                  {/* Corner / Park Indicator */}
                  {(plot.cornerPlot || plot.parkFacing) && (
                    <div className="flex items-center gap-1 my-1">
                      {plot.cornerPlot && (
                        <span className="text-[9px] font-bold text-gold-700 bg-gold-100 px-1.5 py-0.5 rounded border border-gold-300">
                          Corner
                        </span>
                      )}
                      {plot.parkFacing && (
                        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">
                          Park
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer Price */}
                  <div className="mt-3 pt-2.5 border-t border-current/10 flex items-center justify-between">
                    <span className="font-serif font-bold text-base">₹{plot.priceLakhs} L</span>
                    <Maximize2 className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Plot Inspection Modal */}
      <Modal
        isOpen={!!selectedPlot}
        onClose={() => setSelectedPlot(null)}
        title={selectedPlot ? `Plot Inspection — ${selectedPlot.number}` : ''}
        subtitle={selectedPlot ? `Block ${selectedPlot.block} | Vistara Greenfields Master Blueprint` : ''}
      >
        {selectedPlot && (
          <div className="space-y-6">
            <div
              className={`p-4 rounded-2xl flex items-center justify-between ${
                selectedPlot.status === 'AVAILABLE'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                  : selectedPlot.status === 'RESERVED'
                  ? 'bg-amber-50 border border-amber-200 text-amber-950'
                  : 'bg-slate-100 border border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                {selectedPlot.status === 'AVAILABLE' && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                {selectedPlot.status === 'RESERVED' && <AlertCircle className="w-6 h-6 text-amber-600" />}
                {selectedPlot.status === 'SOLD' && <XCircle className="w-6 h-6 text-slate-500" />}
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider block">
                    Status: {selectedPlot.status}
                  </span>
                  <p className="text-xs opacity-90">
                    {selectedPlot.status === 'AVAILABLE'
                      ? 'Ready for immediate booking and clear title registration.'
                      : selectedPlot.status === 'RESERVED'
                      ? 'Token deposit submitted. Enquire for fallback waitlist.'
                      : 'This plot has been registered by another investor.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Matrix */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-alabaster-100 p-4 rounded-2xl border border-alabaster-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">
                  Plot Extent
                </span>
                <span className="font-serif text-2xl font-bold text-brand-900">
                  {selectedPlot.sizeSqYd} Sq. Yards
                </span>
                <span className="text-xs text-slate-500 block">({(selectedPlot.sizeSqYd * 9).toLocaleString()} sq. ft.)</span>
              </div>

              <div className="bg-alabaster-100 p-4 rounded-2xl border border-alabaster-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">
                  Frontage × Depth
                </span>
                <span className="font-serif text-2xl font-bold text-brand-900">
                  {selectedPlot.dimensions}
                </span>
                <span className="text-xs text-slate-500 block">Precision Demarcated</span>
              </div>

              <div className="bg-alabaster-100 p-4 rounded-2xl border border-alabaster-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">
                  Facing Direction
                </span>
                <span className="font-serif text-2xl font-bold text-brand-900 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-gold-600" />
                  {selectedPlot.facing}
                </span>
              </div>

              <div className="bg-alabaster-100 p-4 rounded-2xl border border-alabaster-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">
                  Avenue Access
                </span>
                <span className="font-serif text-2xl font-bold text-brand-900">
                  {selectedPlot.roadWidthFt} ft Road
                </span>
                <span className="text-xs text-slate-500 block">Bitumen Blacktop</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-brand-900 text-white p-6 rounded-3xl flex items-center justify-between border border-brand-800 shadow-xl">
              <div>
                <span className="text-xs text-gold-300 uppercase tracking-widest font-semibold block mb-1">
                  Total Investment Value
                </span>
                <span className="font-serif text-3xl font-bold text-gold-400">
                  ₹{selectedPlot.priceLakhs.toFixed(2)} Lakhs
                </span>
              </div>
              <div className="text-right text-xs text-slate-300">
                <span>≈ ₹{Math.round((selectedPlot.priceLakhs * 100000) / selectedPlot.sizeSqYd).toLocaleString()} / Sq. Yd</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {selectedPlot.status === 'AVAILABLE' ? (
                <>
                  <button
                    onClick={() => {
                      const plotToEnquire = selectedPlot;
                      setSelectedPlot(null);
                      setEnquiryPlot(plotToEnquire);
                    }}
                    className="flex-1 py-4 px-5 bg-gold-400 hover:bg-gold-500 text-brand-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Enquire About Plot {selectedPlot.number}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedPlot(null);
                      navigate('/site-visit');
                    }}
                    className="py-4 px-6 border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book Site Visit</span>
                  </button>
                </>
              ) : (
                <button
                  disabled
                  className="w-full py-4 px-5 bg-slate-200 text-slate-500 cursor-not-allowed font-bold text-xs uppercase tracking-widest rounded-xl"
                >
                  This plot is {selectedPlot.status.toLowerCase()}
                </button>
              )}
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={!!enquiryPlot}
        onClose={() => setEnquiryPlot(null)}
        title={`Express Interest in Plot ${enquiryPlot?.number}`}
        subtitle={`Vistara Greenfields | Block ${enquiryPlot?.block} — ₹${enquiryPlot?.priceLakhs} Lakhs`}
      >
        {enquiryPlot && (
          <EnquiryForm
            prefilledPlot={enquiryPlot.number}
            onSuccess={() => setEnquiryPlot(null)}
          />
        )}
      </Modal>
    </div>
  );
};

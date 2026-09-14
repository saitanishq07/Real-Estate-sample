import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { Lightbox } from '../components/ui/Lightbox';
import { Eye } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'Master Plan', 'Infrastructure', 'Amenities', 'Landscape', 'Lifestyle'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-brand-800 px-3 py-1 rounded-full border border-brand-700 inline-block">
            Visual Exploration
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold">
            Project Photography Gallery
          </h1>
          <p className="text-slate-300 text-base max-w-2xl">
            Browse high-resolution photographs of master layouts, road infrastructure, botanical parks, and clubhouse amenities.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Categories */}
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
                {cat === 'ALL' ? 'All Photographs' : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-subtle border border-cream-200"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 p-2.5 bg-dark-900/80 backdrop-blur-md rounded-full text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};

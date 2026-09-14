import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prev);
      }
      if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % items.length;
        onNavigate(next);
      }
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/90 backdrop-blur-md p-4 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 text-white/70 hover:text-white bg-dark-900/60 hover:bg-dark-800 rounded-full border border-white/10 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation - Prev */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-20 p-3 text-white/70 hover:text-white bg-dark-900/60 hover:bg-dark-800 rounded-full border border-white/10 transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation - Next */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-20 p-3 text-white/70 hover:text-white bg-dark-900/60 hover:bg-dark-800 rounded-full border border-white/10 transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Area */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl w-full flex flex-col items-center justify-center max-h-[90vh]"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-dark-900">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>

          <div className="mt-4 text-center text-cream-50 max-w-2xl px-4">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold px-2.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/20 inline-block mb-2">
              {currentItem.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              {currentItem.title}
            </h3>
            <p className="text-sm text-slate-300">{currentItem.caption}</p>
            <p className="text-xs text-slate-500 mt-2">
              {currentIndex + 1} of {items.length}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

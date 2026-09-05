import React, { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGalleryItemWhatsAppUrl } from '../utils/whatsapp';
import { 
  Sparkles, Eye, X, ChevronLeft, ChevronRight, MessageCircle, 
  Maximize2, CheckCircle2 
} from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // Filter items based on activeCategory
  const filteredItems = activeCategory === 'All'
    ? siteConfig.galleryItems
    : siteConfig.galleryItems.filter(item => item.category === activeCategory);

  const activeItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Next & Previous Navigation in Lightbox
  const handlePrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handleClose = () => setSelectedItemIndex(null);

  // Keyboard controls for Lightbox (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-ivory-50 relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-maroon-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Our Decoration Portfolio
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Take a look at our curated decoration work across mandaps, receptions, haldi ceremonies, and milestone celebrations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {siteConfig.galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedItemIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  isActive
                    ? 'bg-maroon-900 text-gold-300 shadow-md scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Aspect Ratio Image Container */}
              <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Permanent Bottom Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-300 border border-gold-400/30 text-xs font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Hover Overlay with Action Button */}
              <div className="absolute inset-0 bg-maroon-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="self-end">
                  <span className="p-2.5 rounded-full bg-white/20 text-white hover:bg-gold-500 hover:text-maroon-950 transition-colors inline-block">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gold-400 mb-1 block">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300">
                    <Eye className="w-4 h-4" />
                    <span>Click to Expand & Enquire</span>
                  </div>
                </div>
              </div>

              {/* Visible Info on Non-Hover (Mobile Friendly) */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-[11px] uppercase tracking-wider text-gold-400 font-medium">
                  {item.tag}
                </p>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-gold-400/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-stone-700 text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              All setups can be customized in terms of color theme, flower varieties, and stage dimensions.
            </span>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-maroon-900 hover:bg-maroon-800 text-gold-300 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <span>Request Portfolio Catalog</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Modal Container */}
          <div 
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold">
                  {activeItem.category}
                </span>
                <span className="text-xs text-stone-400">
                  {selectedItemIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[55vh] sm:max-h-[60vh] overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 transition-transform active:scale-95 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 transition-transform active:scale-95 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Footer / Details */}
            <div className="p-6 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-stone-300 max-w-xl">
                  {activeItem.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={getGalleryItemWhatsAppUrl(activeItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire This Setup</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Quote, Info, MessageCircle, Star } from 'lucide-react';

export default function TestimonialArea() {
  return (
    <section className="py-20 bg-ivory-50 relative overflow-hidden border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparent Demo Notice Badge */}
        <div className="max-w-2xl mx-auto mb-12 p-4 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-900 flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <strong className="font-semibold block text-amber-950">Notice for Website Demo:</strong>
            {siteConfig.testimonialsSection.placeholderNotice}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            {siteConfig.testimonialsSection.heading}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            {siteConfig.testimonialsSection.subheading}
          </p>
        </div>

        {/* Sample Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonialsSection.sampleItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm relative flex flex-col justify-between"
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gold-400/40 mb-3" />
                <p className="text-sm text-stone-700 italic leading-relaxed mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    {item.event} • {item.city}
                  </p>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

export default function EventTypes() {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-maroon-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Celebrations We Decorate</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Decorations for Every Occasion
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Whether it's an intimate ring ceremony or a grand wedding extravaganza, we style every setup to reflect the joy of your occasion.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.eventTypes.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-800/80 border border-stone-700/60 hover:border-gold-500/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                
                {/* Emoji Pill */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-stone-900/80 backdrop-blur-md border border-gold-400/40 flex items-center justify-center text-xl shadow-md">
                  {item.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-gold-400 font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-stone-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-stone-700/50 flex items-center justify-between">
                  <a
                    href={getServiceWhatsAppUrl(`${item.name} Decoration`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold-300 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <span className="w-7 h-7 rounded-full bg-stone-700/50 flex items-center justify-center text-stone-300 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

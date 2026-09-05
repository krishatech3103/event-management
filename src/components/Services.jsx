import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { 
  Crown, Heart, Sparkles, Sun, Flame, Star, Building2, Palette,
  Check, MessageCircle, ArrowUpRight
} from 'lucide-react';

const iconMap = {
  Crown: Crown,
  Heart: Heart,
  Sparkles: Sparkles,
  Sun: Sun,
  Flame: Flame,
  Star: Star,
  Building2: Building2,
  Palette: Palette,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ivory-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-maroon-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon-100 border border-maroon-200 text-maroon-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-maroon-700" />
            <span>Our Decoration Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Comprehensive Event Styling
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            From majestic wedding mandaps to intimate milestone parties, explore our specialized decor setups tailored for your venue.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-gold-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-maroon-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Category Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-gold-300 text-[11px] font-semibold tracking-wide border border-gold-400/30">
                    {service.category}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute -bottom-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between pt-7">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-maroon-900 transition-colors mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6 text-xs text-stone-600 border-t border-stone-100 pt-3">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-50 hover:bg-emerald-600 text-stone-800 hover:text-white border border-stone-200 hover:border-emerald-600 font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs transition-all duration-300 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 group-hover/btn:text-white transition-colors" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm">
            Have a custom theme or venue in mind? We design personalized concepts for all ceremonies.{' '}
            <a
              href={getServiceWhatsAppUrl("Custom Decoration Setup")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon-800 font-semibold underline underline-offset-4 decoration-gold-400 hover:text-maroon-950"
            >
              Ask for a Custom Setup
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

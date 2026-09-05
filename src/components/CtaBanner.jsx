import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-maroon-950 via-maroon-900 to-stone-950 text-white">
      {/* Decorative Ornaments & Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Dates Fill Fast During Wedding Season</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {siteConfig.ctaBanner.heading}
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-stone-200 text-base sm:text-xl font-light leading-relaxed mb-10">
          {siteConfig.ctaBanner.subheading}
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>{siteConfig.ctaBanner.primaryBtnText}</span>
          </a>

          <a
            href={getPhoneUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-stone-100 hover:text-white font-semibold text-base sm:text-lg px-7 py-4 rounded-full border border-gold-400/30 hover:border-gold-300 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 text-gold-400" />
            <span>{siteConfig.ctaBanner.secondaryBtnText}: {siteConfig.business.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

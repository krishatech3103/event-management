import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, Sparkles, MessageCircle, Eye, Calendar, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-maroon-950 pt-24 pb-16">
      {/* Background Image with Slow Zoom (Ken Burns effect) and Dark Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={siteConfig.hero.bgImage}
          alt="Indian Wedding Mandap Decoration"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle transition-transform duration-1000"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered Rich Gradient Overlays for Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/75 to-maroon-950/60" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Subtle Royal Ornaments / Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 md:mt-12">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md shadow-gold-sm">
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
          <span>{siteConfig.hero.pill}</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          <span className="block">{siteConfig.hero.headline.split(" for ")[0]}</span>
          <span className="text-gold-gradient block mt-1">for {siteConfig.hero.headline.split(" for ")[1]}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-200 font-light leading-relaxed mb-8 md:mb-10">
          {siteConfig.hero.subheading}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-maroon-950 font-bold text-base px-8 py-4 rounded-full shadow-gold-md hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-400/50"
          >
            <span>{siteConfig.hero.primaryCta}</span>
            <ArrowRight className="w-5 h-5 text-maroon-950" />
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-base px-7 py-4 rounded-full border border-gold-400/30 hover:border-gold-300 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <Eye className="w-5 h-5 text-gold-400" />
            <span>{siteConfig.hero.secondaryCta}</span>
          </a>
        </div>

        {/* Trust-Style Category Tags (No fake statistics) */}
        <div className="pt-8 border-t border-gold-500/20 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold-300/80 mb-3 font-semibold">
            Customised Decoration Services For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-stone-200">
            {siteConfig.hero.trustTags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  {tag}
                </span>
                {idx < siteConfig.hero.trustTags.length - 1 && (
                  <span className="hidden sm:inline text-gold-500/50">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Arch Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-ivory-50 to-transparent pointer-events-none" />
    </section>
  );
}

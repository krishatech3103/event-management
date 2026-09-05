import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, MessageSquare, Palette, CheckCircle, PartyPopper } from 'lucide-react';

const stepIcons = [
  MessageSquare,
  Palette,
  CheckCircle,
  PartyPopper,
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-maroon-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            How It Works
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            A transparent, hassle-free booking experience from your initial idea to the celebration day.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-gold-500/30 via-gold-400/50 to-gold-500/30 z-0" />

          {siteConfig.howItWorks.map((item, index) => {
            const Icon = stepIcons[index] || Sparkles;
            return (
              <div
                key={item.step}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Circle with Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-stone-800 border-2 border-gold-400/60 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all duration-300 shadow-gold-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-maroon-700 text-[11px] font-bold text-white border border-gold-400/40">
                    {item.step}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Action Prompt */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4 decoration-gold-500 transition-colors"
          >
            <span>Start Step 1: Tell Us About Your Event &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { CheckCircle2, MessageCircle, Sparkles, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory-50 relative overflow-hidden">
      {/* Decorative Warm Background Accent */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-maroon-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Accent Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border-2 border-gold-400/40 transform -rotate-1 pointer-events-none" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-maroon-950 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={siteConfig.about.image}
                  alt="Traditional Indian wedding decoration detailing"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                
                {/* Floating Tag inside Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-maroon-950/85 backdrop-blur-md border border-gold-400/30 text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold-500/20 text-gold-300">
                      <Sparkles className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-300 font-semibold">
                        Crafted With Precision
                      </p>
                      <p className="text-sm font-medium text-stone-100">
                        {siteConfig.about.experienceHighlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text and Core Benefits */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon-100 border border-maroon-200 text-maroon-900 text-xs font-semibold tracking-wider uppercase mb-4 self-start">
              <HeartHandshake className="w-3.5 h-3.5 text-maroon-700" />
              <span>About Royal Celebration Events</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              {siteConfig.about.heading}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
              <p className="font-medium text-stone-800">
                {siteConfig.about.description1}
              </p>
              <p className="text-stone-600 text-base">
                {siteConfig.about.description2}
              </p>
            </div>

            {/* 4 Core Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {siteConfig.about.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-stone-900 text-sm sm:text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 mt-1 leading-snug">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct CTA Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-700 hover:to-maroon-800 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-gold-300" />
                <span>Enquire About Decoration</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center text-sm font-semibold text-maroon-800 hover:text-maroon-950 underline underline-offset-4 decoration-gold-400 hover:decoration-maroon-800 transition-colors"
              >
                Explore All Services &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

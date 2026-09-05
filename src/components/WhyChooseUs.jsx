import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, Palette, ShieldCheck, Clock, Layers, UserCheck 
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Palette: Palette,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  Layers: Layers,
  UserCheck: UserCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-gold-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Committed to Quality & Timely Execution
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We focus on reliable service, transparent discussions, and meticulous attention to decoration details.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-ivory-50 border border-stone-200 hover:border-gold-400 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon-900 text-gold-300 flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-maroon-950 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-maroon-900 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getPackageWhatsAppUrl } from '../utils/whatsapp';
import { Sparkles, Check, MessageCircle, HelpCircle } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-ivory-100 relative overflow-hidden">
      {/* Decorative Warm Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon-100 border border-maroon-200 text-maroon-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-maroon-700" />
            <span>Decoration Packages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Starting Options for Every Celebration
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Choose a starting framework for your event. Pricing is customized based on your venue size, floral choices, and personal preferences.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-maroon-950 to-maroon-900 text-white shadow-2xl border-2 border-gold-400/80 transform md:-translate-y-3'
                  : 'bg-white text-stone-800 border border-stone-200 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 text-xs font-extrabold uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Package Title & Subtitle */}
                <h3 className={`font-serif text-2xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-stone-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs font-semibold tracking-wide uppercase mb-4 ${pkg.popular ? 'text-gold-300' : 'text-maroon-700'}`}>
                  {pkg.subtitle}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${pkg.popular ? 'text-stone-300' : 'text-stone-600'}`}>
                  {pkg.description}
                </p>

                {/* Estimate Notice instead of fake fixed price */}
                <div className={`p-4 rounded-2xl mb-8 border ${
                  pkg.popular ? 'bg-maroon-900/60 border-gold-400/30' : 'bg-stone-50 border-stone-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-medium tracking-wider text-stone-400">
                      Pricing Mode
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                      pkg.popular ? 'bg-gold-500/20 text-gold-300' : 'bg-stone-200 text-stone-700'
                    }`}>
                      Customized
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className={`text-2xl font-bold ${pkg.popular ? 'text-gold-300' : 'text-stone-900'}`}>
                      Tailored Quote
                    </span>
                    <span className={`text-xs block mt-0.5 ${pkg.popular ? 'text-stone-300' : 'text-stone-500'}`}>
                      Based on venue & decoration scope
                    </span>
                  </div>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? 'text-gold-300' : 'text-stone-800'}`}>
                    Package Inclusions:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-gold-400' : 'text-emerald-600'}`} />
                        <span className={pkg.popular ? 'text-stone-200' : 'text-stone-700'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button -> WhatsApp */}
              <div>
                <a
                  href={getPackageWhatsAppUrl(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-maroon-950'
                      : 'bg-maroon-900 hover:bg-maroon-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs text-stone-500 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-xs">
            <HelpCircle className="w-4 h-4 text-stone-400" />
            <span>Actual cost varies depending on venue size, seasonal flower rates, and custom setups.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

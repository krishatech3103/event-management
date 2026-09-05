import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';
import { 
  Phone, MessageCircle, Mail, MapPin, Sparkles, Heart 
} from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-maroon-950 text-stone-300 pt-16 pb-24 md:pb-16 border-t border-gold-500/20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-maroon-950 shadow-gold-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L15 8L19 5L18 13H6L5 5L9 8L12 2Z" />
                  <path d="M5 15H19V17H5V15Z" />
                  <path d="M4 19H20V21H4V19Z" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  {siteConfig.business.name}
                </span>
                <span className="text-xs text-gold-300 uppercase tracking-wider font-medium">
                  {siteConfig.business.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              {siteConfig.business.shortBio}
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.business.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-700 hover:border-gold-400 text-stone-400 hover:text-gold-300 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={siteConfig.business.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-700 hover:border-gold-400 text-stone-400 hover:text-gold-300 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={siteConfig.business.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-700 hover:border-gold-400 text-stone-400 hover:text-gold-300 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-gold-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-gold-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-300 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-300 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold-300 transition-colors">Gallery</a></li>
              <li><a href="#packages" className="hover:text-gold-300 transition-colors">Packages</a></li>
              <li><a href="#why-us" className="hover:text-gold-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-gold-500/20 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              {siteConfig.services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-gold-300 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Snippet (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-gold-500/20 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <a href={getPhoneUrl()} className="flex items-center gap-2.5 hover:text-gold-300 transition-colors">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{siteConfig.business.phone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {siteConfig.business.whatsapp}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{siteConfig.business.email}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.business.locationCity}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Krisha Tech Demo Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {currentYear} {siteConfig.business.name}. All Rights Reserved.
          </p>

          {/* Krisha Tech Agency Label */}
          <a 
            href={siteConfig.agency.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 border border-gold-500/30 hover:border-gold-400 text-stone-300 shadow-sm transition-all group"
            title="Visit Krisha Tech"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
            <span>
              <span className="text-gold-300 font-semibold group-hover:text-gold-200">{siteConfig.agency.badge}</span>
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}

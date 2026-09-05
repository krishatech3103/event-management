import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';
import { Phone, Menu, X, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Packages', href: '#packages' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-maroon-950/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-3'
          : 'bg-gradient-to-b from-maroon-950/90 via-maroon-950/70 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center shadow-gold-sm text-maroon-950 group-hover:scale-105 transition-transform duration-300">
              {/* Mandap / Crown Motif */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L15 8L19 5L18 13H6L5 5L9 8L12 2Z" />
                <path d="M5 15H19V17H5V15Z" />
                <path d="M4 19H20V21H4V19Z" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-white block leading-tight group-hover:text-gold-300 transition-colors">
                {siteConfig.business.name}
              </span>
              <span className="text-[10px] md:text-xs text-gold-300 tracking-wider uppercase font-medium">
                {siteConfig.business.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-200 hover:text-gold-300 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call & WhatsApp Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-2 text-xs font-semibold text-stone-200 hover:text-white px-3 py-2 rounded-full border border-stone-600 hover:border-gold-400 transition-colors"
              title="Call Business"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{siteConfig.business.phone}</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 text-white rounded-full sm:hidden hover:bg-emerald-500 transition-colors"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gold-300 hover:text-white p-2 rounded-lg border border-gold-500/30 hover:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-maroon-950/98 border-b border-gold-500/20 backdrop-blur-xl px-4 pt-4 pb-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-stone-200 hover:text-gold-300 hover:bg-maroon-900/50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-gold-500/20 flex flex-col gap-2">
              <a
                href={getPhoneUrl()}
                className="flex items-center justify-center gap-2 text-sm text-stone-200 bg-maroon-900/60 py-2.5 rounded-lg border border-gold-500/30"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call: {siteConfig.business.phone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm py-2.5 rounded-lg shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

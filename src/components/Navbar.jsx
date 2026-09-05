import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';
import { 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles, 
  CalendarCheck, 
  Mail, 
  MapPin, 
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Track active section for nav highlight
      const sections = ['home', 'about', 'services', 'gallery', 'packages', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Packages', href: '#packages', id: 'packages' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Demo Bar (Replicated from cctv.krishatech.in) */}
      <div 
        className="relative z-50 bg-[#06101f] text-stone-200 text-xs border-b border-gold-500/20 py-2 transition-colors" 
        role="note"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Agency Attribution & Quick Contact Details */}
          <div className="flex items-center gap-3 truncate min-w-0">
            <span className="inline-flex items-center gap-1.5 text-stone-200 font-medium truncate text-[11px] sm:text-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 animate-pulse" />
              <span className="truncate">
                <span className="hidden sm:inline">Live business website demo by </span>
                <span className="sm:hidden">Demo by </span>
                <a 
                  href={siteConfig.agency.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-white hover:text-gold-300 underline decoration-gold-400/50 underline-offset-2 transition-colors"
                >
                  {siteConfig.agency.name}
                </a>
              </span>
            </span>

            {/* Desktop Contact Pills */}
            <div className="hidden lg:flex items-center gap-3 pl-3 border-l border-stone-700 text-stone-400">
              <a 
                href={`mailto:${siteConfig.business.email}`} 
                className="hover:text-gold-300 flex items-center gap-1 transition-colors"
              >
                <Mail className="w-3 h-3 text-gold-400" />
                <span>{siteConfig.business.email}</span>
              </a>
              <span className="text-stone-600">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gold-400" />
                <span>{siteConfig.business.locationCity}</span>
              </span>
            </div>
          </div>

          {/* Right: Agency Inquiry Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.agency.phoneRaw}`}
              className="inline-flex items-center gap-1 text-gold-300 hover:text-white font-bold text-[11px] sm:text-xs transition-colors group whitespace-nowrap"
              title="Contact Krisha Tech for a website like this"
            >
              <Phone className="w-3 h-3 text-gold-400 group-hover:scale-110 transition-transform" />
              <span className="hidden xs:inline">Get a website like this</span>
              <span className="xs:hidden">Get website</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-maroon-950/95 backdrop-blur-md shadow-2xl border-b border-gold-500/20 py-2.5'
            : 'bg-maroon-950/90 backdrop-blur-md border-b border-gold-500/10 py-3 sm:py-3.5 md:py-4'
        }`}
        id="site-header"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Name (Styled as brand__mark & dual-tone typography) */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none rounded-xl p-1 min-w-0"
              aria-label={`${siteConfig.business.name} home`}
            >
              {/* Brand Mark (Squircle Gradient Icon) */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-gold-sm text-maroon-950 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L15 8L19 5L18 13H6L5 5L9 8L12 2Z" />
                  <path d="M5 15H19V17H5V15Z" />
                  <path d="M4 19H20V21H4V19Z" />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white leading-tight truncate">
                  Royal<span className="text-gold-400 font-black ml-0.5">Celebration</span>
                </span>
                <small className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-stone-300 uppercase tracking-widest leading-none mt-0.5 truncate">
                  {siteConfig.business.tagline}
                </small>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-gold-300'
                        : 'text-stone-300 hover:text-gold-300'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold-400 after:transition-all after:duration-300 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions: Direct Call & Primary Free Site Visit CTA */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Direct Call Button */}
              <a
                href={getPhoneUrl()}
                className="flex items-center gap-2 text-xs font-semibold text-stone-200 hover:text-white px-3.5 py-2 rounded-xl border border-stone-700/80 hover:border-gold-400 bg-maroon-900/30 transition-all duration-200"
                title={`Call ${siteConfig.business.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{siteConfig.business.phone}</span>
              </a>

              {/* Primary CTA: Free Site Visit */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-maroon-950 font-extrabold text-xs lg:text-sm px-4 lg:px-5 py-2.5 rounded-xl shadow-gold-sm hover:shadow-gold-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 text-maroon-950 shrink-0" />
                <span>Free Site Visit</span>
              </a>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 bg-emerald-600 text-white rounded-xl sm:hidden hover:bg-emerald-500 transition-colors shadow-sm active:scale-95"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-400 bg-maroon-900/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 active:scale-95"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Menu (Attached directly to the bottom of the sticky header) */}
        {isOpen && (
          <nav
            className="absolute top-full left-0 right-0 z-50 lg:hidden bg-maroon-950/98 border-b border-gold-500/30 shadow-2xl backdrop-blur-xl px-4 pt-3 pb-6 max-h-[calc(100vh-70px)] overflow-y-auto animate-fadeIn"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 px-3 text-sm font-semibold border-b border-gold-500/10 flex items-center justify-between transition-colors min-h-[44px] ${
                      isActive ? 'text-gold-400 bg-maroon-900/40 rounded-lg' : 'text-stone-200 hover:text-gold-300'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gold-500/50" />
                  </a>
                );
              })}

              {/* Mobile Actions: 2-Column Call Now & WhatsApp Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 mt-2">
                <a
                  href={getPhoneUrl()}
                  className="flex items-center justify-center gap-2 min-h-[46px] py-2.5 px-3 rounded-xl border border-gold-500/30 bg-maroon-900/70 text-white font-bold text-xs sm:text-sm hover:border-gold-400 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Call now</span>
                </a>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 min-h-[46px] py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Direct Free Site Visit CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full flex items-center justify-center gap-2 min-h-[48px] py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-black text-xs sm:text-sm shadow-gold-sm active:scale-95 transition-all"
              >
                <CalendarCheck className="w-4 h-4 text-maroon-950 shrink-0" />
                <span>Book Free Site Visit</span>
              </a>

              {/* Agency Attribution In Drawer */}
              <div className="mt-4 pt-3 border-t border-gold-500/10 text-center text-[11px] text-stone-400 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>Demo by <strong className="text-white font-semibold">{siteConfig.agency.name}</strong> • Sangli</span>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

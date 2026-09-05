import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-t border-gold-500/30 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={getPhoneUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 active:bg-stone-800 active:scale-95 transition-all text-center"
          aria-label="Call Now"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 active:scale-95 transition-all shadow-md text-center"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide">WhatsApp</span>
        </a>

        {/* Get Quote Button */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-bold active:scale-95 transition-all shadow-md text-center"
          aria-label="Get a Free Quote"
        >
          <FileText className="w-4 h-4 text-maroon-950 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide">Get Quote</span>
        </a>

      </div>
    </div>
  );
}

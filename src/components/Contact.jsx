import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { getFormWhatsAppUrl, getPhoneUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { 
  Phone, MessageCircle, Mail, MapPin, Clock, Send, 
  Sparkles, ExternalLink, CheckCircle2 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Mandap',
    eventDate: '',
    message: '',
  });

  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp URL with the entered details
    const whatsappUrl = getFormWhatsAppUrl(formData);
    // Show quick feedback
    setSubmittedNotice(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-ivory-50 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-maroon-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon-100 border border-maroon-200 text-maroon-900 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-maroon-700" />
            <span>Connect With Our Team</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            {siteConfig.contact.heading}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {siteConfig.contact.subheading}
          </p>
        </div>

        {/* Main Grid: Info & Map (Left) + WhatsApp Quote Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards + Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href={getPhoneUrl()}
                className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-gold-400 shadow-xs hover:shadow-md transition-all duration-300 group block"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center shrink-0 group-hover:bg-maroon-900 group-hover:text-gold-300 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-stone-400 block mb-0.5">Call Us</span>
                    <span className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-maroon-900 transition-colors">
                      {siteConfig.business.phone}
                    </span>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all duration-300 group block"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-stone-400 block mb-0.5">WhatsApp</span>
                    <span className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {siteConfig.business.whatsapp}
                    </span>
                  </div>
                </div>
              </a>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-stone-400 block mb-0.5">Email</span>
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                      {siteConfig.business.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-stone-400 block mb-0.5">Hours</span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900">
                      {siteConfig.business.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Address */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-medium text-stone-400 block mb-0.5">Office & Studio</span>
                <p className="text-sm font-semibold text-stone-900">
                  {siteConfig.business.address}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Decor setups delivered and executed across {siteConfig.business.locationCity} & surrounding areas.
                </p>
              </div>
            </div>

            {/* Google Maps Responsive Frame */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 relative">
              <iframe
                title="Google Maps Location"
                src={siteConfig.business.googleMapsEmbedUrl}
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="p-3 bg-white flex items-center justify-between border-t border-stone-200 text-xs text-stone-600">
                <span className="font-medium">📍 {siteConfig.business.locationCity}</span>
                <a
                  href={siteConfig.business.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-maroon-800 hover:text-maroon-950"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: "Get a Free Quote" WhatsApp Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-stone-200 shadow-xl relative">
            
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-maroon-800 block mb-1">
                Fast Quote Enquiry
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Get a Free Decoration Quote
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Fill the details below to open WhatsApp with a ready-to-send enquiry message.
              </p>
            </div>

            {submittedNotice && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Redirecting to WhatsApp with your enquiry details...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Rajesh Patil"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-maroon-800 focus:ring-2 focus:ring-maroon-800/20 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                />
              </div>

              {/* Phone & Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-maroon-800 focus:ring-2 focus:ring-maroon-800/20 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-maroon-800 focus:ring-2 focus:ring-maroon-800/20 text-sm text-stone-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Event Type Dropdown */}
              <div>
                <label htmlFor="eventType" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Decoration Required For
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-maroon-800 focus:ring-2 focus:ring-maroon-800/20 text-sm text-stone-900 outline-none transition-all bg-white"
                >
                  <option value="Wedding Mandap">Wedding Mandap Decoration</option>
                  <option value="Engagement Ceremony">Engagement / Ring Ceremony</option>
                  <option value="Haldi & Mehendi">Haldi & Mehendi Decoration</option>
                  <option value="Reception Stage">Grand Reception Stage</option>
                  <option value="Birthday Party">Birthday Party Decoration</option>
                  <option value="Festival Decor">Festival / Puja Decoration</option>
                  <option value="Corporate Event">Corporate Event / Conference</option>
                  <option value="Custom Event">Custom / Other Setup</option>
                </select>
              </div>

              {/* Requirement Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Venue or Specific Theme Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="e.g. Lawn wedding in Sangli, looking for pastel flowers and gold arch."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-maroon-800 focus:ring-2 focus:ring-maroon-800/20 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-stone-400 mt-2">
                🔒 We respect your privacy. No spam. You will connect directly with our decoration coordinator on WhatsApp.
              </p>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * Royal Celebration Events - Central Site Configuration
 * 
 * IMPORTANT FOR BUYERS & KRISHA TECH:
 * You can customize the entire business branding, contact numbers,
 * services, gallery, packages, and theme information by editing this single file.
 */

export const siteConfig = {
  // Business Identity
  business: {
    name: "Royal Celebration Events",
    tagline: "Celebrations. Made simple.",
    shortBio: "From elegant wedding mandaps to vibrant birthday celebrations, we create customized decoration setups based on your event, venue and style.",
    badge: "Event & Mandap Styling",
    
    // Contact Information (From cctv.krishatech.in)
    phone: "+91 70833 30914",
    phoneRaw: "+917083330914",
    whatsapp: "+91 70833 30914",
    whatsappRaw: "917083330914",
    email: "contact@krishatech.in",
    
    // Physical Location
    locationCity: "Sangli, Maharashtra",
    address: "Station Road, Near Market Yard, Sangli, Maharashtra 416416",
    workingHours: "Mon – Sat: 9:00 AM – 8:00 PM",
    
    // Maps
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61102.13470769342!2d74.5369680327318!3d16.85239726207865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123b152d1136b%3A0xb7e510ba4e414c27!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Sangli+Maharashtra",
    
    // Social Links
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
    },
  },

  // Agency Demo Attribution (Krisha Tech)
  agency: {
    name: "Krisha Tech",
    website: "https://krishatech.in",
    phone: "+91 70833 30914",
    phoneRaw: "+917083330914",
    email: "contact@krishatech.in",
    badge: "Demo Website by Krisha Tech",
    tagline: "Fast, mobile-friendly websites that help local businesses get more calls and WhatsApp inquiries",
    contactText: "Interested in a website like this for your business?",
    salesWhatsapp: "917083330914",
  },

  // Hero Section
  hero: {
    pill: "Royal Indian Wedding & Event Decor",
    headline: "Beautiful Decorations for Your Special Moments",
    subheading: "Wedding, engagement, birthday, festival and event decoration designed to make every celebration memorable.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "View Our Work",
    trustTags: ["Wedding", "Engagement", "Birthday", "Corporate", "Festival Events"],
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
    statsPlaceholder: "Custom Mandaps • Floral Styling • Stage Setup • Complete Venue Decor",
  },

  // About Section
  about: {
    heading: "Making Every Celebration Beautiful",
    subheading: "Crafting atmospheres that turn cherished moments into everlasting memories.",
    description1: "From elegant wedding mandaps to vibrant birthday celebrations, we create customized decoration setups based on your event, venue and style.",
    description2: "Every occasion carries a unique sentiment. We combine traditional Indian floral grace with modern aesthetic design to deliver an unforgettable ambiance for you and your guests.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    experienceHighlight: "100% Customized Designs tailored to your venue & celebration theme",
    benefits: [
      {
        title: "Customized Decoration",
        description: "Tailored to your specific venue dimensions, color themes, and family traditions.",
      },
      {
        title: "Creative Designs",
        description: "Fresh floral concepts, royal fabric drapes, warm lighting, and contemporary arches.",
      },
      {
        title: "Professional Setup",
        description: "Well-coordinated on-site arrangement finished smoothly before your guests arrive.",
      },
      {
        title: "Flexible Event Options",
        description: "Equipped for intimate home ceremonies, outdoor lawns, and banquet halls alike.",
      },
    ],
  },

  // Event Types (Card Showcase)
  eventTypes: [
    {
      id: "weddings",
      name: "Weddings",
      icon: "💍",
      subtitle: "Grand Mandaps & Royal Themes",
      description: "Spectacular mandaps, royal aisle pathways, and opulent ceremonial backdrops.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "engagement",
      name: "Engagement",
      icon: "💐",
      subtitle: "Pastel & Floral Elegance",
      description: "Sophisticated ring ceremony stages with modern flower arches and ring backdrops.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "haldi-mehendi",
      name: "Haldi & Mehendi",
      icon: "🌸",
      subtitle: "Vibrant Yellows & Marigolds",
      description: "Playful floral setups, traditional marigold backdrops, cane seating, and photobooths.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "birthdays",
      name: "Birthdays",
      icon: "🎂",
      subtitle: "Themed & Balloon Decor",
      description: "Exciting themes, custom balloon arches, LED neon signs, and dessert table backdrops.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "festivals",
      name: "Festivals",
      icon: "🎉",
      subtitle: "Cultural & Devotional Aesthetics",
      description: "Ganesh Utsav, Diwali, Navratri decor featuring traditional lamps and floral garlands.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "corporate",
      name: "Corporate Events",
      icon: "🏢",
      subtitle: "Polished & Professional Stages",
      description: "Annual galas, award ceremonies, conference stages, and elegant entrance arches.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 8 Services
  services: [
    {
      id: "wedding-mandap",
      title: "Wedding Mandap Decoration",
      category: "Wedding",
      shortDesc: "Majestic mandap setups featuring fresh exotic florals, royal dome pillars, and auspicious lighting.",
      features: ["Traditional & Modern Mandap Concepts", "Fresh Exotic Florals & Foliage", "Auspicious Havan Kund Backdrop", "Custom Lighting & Carpet Pathways"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      icon: "Crown",
    },
    {
      id: "engagement",
      title: "Engagement Decoration",
      category: "Ceremony",
      shortDesc: "Chic and romantic ring ceremony stages crafted with pastel blooms, fairy lights, and personalized name tags.",
      features: ["Geometric & Floral Stage Arches", "Custom Couple Monograms & Neons", "Ambient Warm Mood Lighting", "Elegant Stage Furniture"],
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      icon: "Heart",
    },
    {
      id: "birthday",
      title: "Birthday Decoration",
      category: "Celebration",
      shortDesc: "Vibrant and celebratory setups for kids and milestone birthdays, featuring balloon garlands and themed backdrops.",
      features: ["Custom Themed Backdrops", "Organic Balloon Arches & Garlands", "Neon Age Signs & Cake Tables", "Fun Photo-op Corners"],
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      icon: "Sparkles",
    },
    {
      id: "haldi-mehendi",
      title: "Haldi & Mehendi Decoration",
      category: "Pre-Wedding",
      shortDesc: "Vibrant yellow and orange marigold drapes, cane props, traditional jhula (swing) decor, and photo frames.",
      features: ["Traditional Genda Phool Styling", "Decorated Floral Swing / Jhula", "Cane Furniture & Colorful Umbrellas", "Vibrant Photobooth Backdrops"],
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      icon: "Sun",
    },
    {
      id: "reception",
      title: "Reception Decoration",
      category: "Wedding",
      shortDesc: "Glamorous reception backdrops featuring cascading flower chandeliers, grand pillars, and fairytale sparkles.",
      features: ["Grand Stage Backdrops", "Crystal & Floral Chandeliers", "LED Wall & Truss Integration", "Red Carpet Pathway Staging"],
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      icon: "Flame",
    },
    {
      id: "festival",
      title: "Festival Decoration",
      category: "Cultural",
      shortDesc: "Aesthetic traditional decor for Ganesh Chaturthi, Diwali, Navratri, and community temple festivities.",
      features: ["Eco-friendly & Floral Idols Backgrounds", "Brass Diya & Marigold Arrangements", "Traditional Velvet Drapes", "Pooja Hall & Temple Styling"],
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      icon: "Star",
    },
    {
      id: "corporate",
      title: "Corporate Event Decoration",
      category: "Corporate",
      shortDesc: "Sophisticated and branded event stages for annual conferences, award nights, galas, and product launches.",
      features: ["Brand Color Synchronized Staging", "Clean Podium & Backdrop Styling", "Registration Desk & Entrance Arches", "Cocktail & Banquet Table Centerpieces"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      icon: "Building2",
    },
    {
      id: "stage-venue",
      title: "Stage & Venue Decoration",
      category: "Full Venue",
      shortDesc: "End-to-end venue ambiance styling from grand entrance gates to guest walkways and dining area arrangements.",
      features: ["Grand Entrance Toran & Archways", "Guest Walkway Tunnel Lighting", "Buffet & Dining Area Accents", "Selfie Points & Props"],
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      icon: "Palette",
    },
  ],

  // Gallery Showcase (Categories: All, Wedding, Engagement, Birthday, Festival, Corporate)
  galleryCategories: ["All", "Wedding", "Engagement", "Birthday", "Festival", "Corporate"],
  galleryItems: [
    {
      id: 1,
      title: "Royal Mandap with Lotus Dome",
      category: "Wedding",
      tag: "Wedding Mandap",
      description: "Traditional red and gold velvet mandap adorned with fresh red roses and jasmine garlands.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      badge: "Mandap",
    },
    {
      id: 2,
      title: "Pastel Enchanted Ring Ceremony",
      category: "Engagement",
      tag: "Engagement Stage",
      description: "Whimsical pastel pink, blush, and white floral ring backdrop with warm fairy lights.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      badge: "Engagement",
    },
    {
      id: 3,
      title: "Sun-kissed Haldi & Marigold Swing",
      category: "Wedding",
      tag: "Haldi Ceremony",
      description: "Traditional swing setup wrapped in fragrant yellow and orange marigolds with brass urlis.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      badge: "Haldi & Mehendi",
    },
    {
      id: 4,
      title: "Fairytale Reception Stage",
      category: "Wedding",
      tag: "Reception",
      description: "Opulent cascading floral chandeliers paired with royal cream drapes and spotlighting.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      badge: "Reception",
    },
    {
      id: 5,
      title: "Luxury Birthday Arch & Neon Glow",
      category: "Birthday",
      tag: "Birthday Party",
      description: "Modern organic balloon garland in champagne gold and sage green with custom LED neon sign.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
      badge: "Birthday",
    },
    {
      id: 6,
      title: "Traditional Festival Diya & Flower Altar",
      category: "Festival",
      tag: "Festival Decor",
      description: "Auspicious festive arrangement with brass lamps, toran entrance, and vibrant marigold rangoli.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
      badge: "Festival",
    },
    {
      id: 7,
      title: "Grand Wedding Entrance Gateway",
      category: "Wedding",
      tag: "Entrance Decor",
      description: "Illuminated floral archway welcoming wedding guests with royal carpets and hanging bells.",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      badge: "Entrance",
    },
    {
      id: 8,
      title: "Corporate Annual Gala Stage",
      category: "Corporate",
      tag: "Corporate Setup",
      description: "Sleek modern stage backdrop with clean geometric lines, podium, and ambient lighting.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      badge: "Corporate",
    },
    {
      id: 9,
      title: "Intimate Home Engagement Backdrop",
      category: "Engagement",
      tag: "Home Ceremony",
      description: "Cozy floral backdrop designed specifically for home living rooms and terrace celebrations.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      badge: "Home Setup",
    },
  ],

  // Packages / Starting Options (Enquiry oriented, no fake fixed pricing)
  packages: [
    {
      id: "basic",
      name: "Basic Celebration",
      subtitle: "For Simple Events & Home Ceremonies",
      description: "Ideal for intimate family gatherings, home engagements, birthdays, and small ceremonies.",
      popular: false,
      highlights: [
        "Compact Stage or Backdrop Setup",
        "Curated Floral Accents & Draping",
        "Warm Ambient Spotlighting",
        "Entryway Welcome Toran or Arch",
        "On-time Setup & Post-event Teardown",
      ],
      whatsappPrompt: "Hello, I would like to enquire about the Basic Celebration decoration package for my upcoming event.",
      ctaText: "Get Quote",
    },
    {
      id: "premium",
      name: "Premium Celebration",
      subtitle: "For Larger Events & Grand Venues",
      description: "Our most sought-after choice for full-scale weddings, grand receptions, and large banquet events.",
      popular: true,
      highlights: [
        "Full Mandap or Grand Reception Stage",
        "Abundant Fresh Florals & Custom Arches",
        "Illuminated Guest Pathway & Entrance Arch",
        "Themed Photobooth with Custom Props",
        "Dedicated On-site Decor Coordinator",
      ],
      whatsappPrompt: "Hello, I would like to enquire about the Premium Celebration decoration package for my wedding/event.",
      ctaText: "Get Quote",
    },
    {
      id: "custom",
      name: "Custom Decoration",
      subtitle: "Designed According to Your Event",
      description: "Tailor-made concept created specifically around your unique venue, theme, and creative ideas.",
      popular: false,
      highlights: [
        "100% Bespoke Theme & Palette Consultation",
        "3D/Sketch Concept Discussion",
        "Exotic Imported Blooms & Custom Props",
        "Complete Multi-day Event Coverage (Haldi, Sangeet, Wedding)",
        "Priority Booking & Dedicated Styling Team",
      ],
      whatsappPrompt: "Hello, I would like a Custom Decoration quote for our special event.",
      ctaText: "Get Custom Quote",
    },
  ],

  // Why Choose Us (4-6 realistic benefits)
  whyChooseUs: [
    {
      title: "Creative Designs",
      description: "Blends authentic Indian celebratory traditions with fresh, modern floral styling and elegant color palettes.",
      icon: "Sparkles",
    },
    {
      title: "Customized Setup",
      description: "Every setup is customized to match your chosen venue, stage size, lighting conditions, and theme preferences.",
      icon: "Palette",
    },
    {
      title: "Quality Decoration",
      description: "Carefully selected fresh florals, premium fabric drapes, and high-standard lighting fixtures for a rich look.",
      icon: "ShieldCheck",
    },
    {
      title: "On-Time Setup",
      description: "Our disciplined team arrives early and completes the entire decoration well before your event starts.",
      icon: "Clock",
    },
    {
      title: "Multiple Event Types",
      description: "From traditional Vedic mandaps to lively birthdays and corporate stages, we cater to celebrations of all scales.",
      icon: "Layers",
    },
    {
      title: "Personalized Planning",
      description: "Clear communication from our first discussion to the celebration day, ensuring your peace of mind.",
      icon: "UserCheck",
    },
  ],

  // How It Works (4 Simple Steps)
  howItWorks: [
    {
      step: "01",
      title: "Tell Us About Your Event",
      description: "Share your event type, date, venue location, and any design ideas via WhatsApp or our quick form.",
    },
    {
      step: "02",
      title: "Discuss Your Decoration",
      description: "We review your requirements, suggest suitable design concepts, and provide a clear, customized estimate.",
    },
    {
      step: "03",
      title: "Finalize the Setup",
      description: "Confirm your favorite design, color theme, and schedule with simple booking details.",
    },
    {
      step: "04",
      title: "Celebrate",
      description: "Relax with your family. Our team arrives on time, executes the complete decor, and prepares the stage for your memories.",
    },
  ],

  // Call to Action Banner
  ctaBanner: {
    heading: "Planning Your Next Celebration?",
    subheading: "Let's create a decoration setup that matches your event and style.",
    primaryBtnText: "WhatsApp Us",
    secondaryBtnText: "Call Now",
  },

  // Testimonials Area Disclaimer (Clearly Marked Placeholder)
  testimonialsSection: {
    heading: "Client Love & Memories",
    subheading: "What families and event planners say about working with us.",
    placeholderNotice: "Sample testimonial area — replace with real client feedback after your business launch.",
    sampleItems: [
      {
        quote: "The mandap decoration for my sister's wedding was breathtaking. The fresh floral arrangement and royal drapes received endless compliments from all our guests.",
        author: "Client Feedback (Sample)",
        event: "Wedding Mandap Setup",
        city: "Sangli",
      },
      {
        quote: "Very punctual and cooperative team. The Haldi swing decoration was so vibrant and looked amazing in our family photos.",
        author: "Client Feedback (Sample)",
        event: "Haldi & Sangeet Decor",
        city: "Kolhapur",
      },
      {
        quote: "Elegant stage and entrance setup for our corporate annual meet. Everything was completed on time without any hassle.",
        author: "Client Feedback (Sample)",
        event: "Corporate Event Setup",
        city: "Miraj",
      },
    ],
  },

  // Contact Section
  contact: {
    heading: "Get in Touch",
    subheading: "Have an upcoming celebration in mind? Reach out directly or send us a message for a fast customized quote.",
  },
};

# Royal Celebration Events - Mandap & Event Decoration Website

> **Premium Sales Demo Website by Krisha Tech**  
> Specially crafted for Indian Mandap Decorators, Wedding Stylists, and Event Management businesses.

![Demo Preview](https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Overview

This website is designed with a singular purpose: **convert mandap and decoration business owners into paying website clients**. It looks and feels like a bespoke ₹5,000–₹15,000+ business website while being lightweight, lightning fast, completely responsive, and zero-maintenance (no backend or database required).

### Key Highlights:
- **Royal Indian Aesthetic**: Curated color palette of royal maroon, rich gold, and warm ivory inspired by Indian celebrations.
- **WhatsApp Integration**: Dynamic pre-filled WhatsApp messages for general enquiries, individual service cards, package selections, gallery styles, and the interactive quote form.
- **Mobile-First Experience**: Sticky bottom quick-action bar with direct `[Call]`, `[WhatsApp]`, and `[Get Quote]` buttons.
- **Interactive Portfolio**: Filterable gallery (Weddings, Engagement, Birthday, Festival, Corporate) with keyboard-accessible Lightbox and direct "Enquire This Setup" button.
- **Honest & Credible**: Zero fake statistics, zero fake counters, zero fake customer reviews. Contains transparent sample notice areas ready for real client testimonials.
- **SEO & Social Ready**: Full Schema.org LocalBusiness structured data, Open Graph cards, Twitter metadata, `robots.txt`, and `sitemap.xml`.
- **GitHub Pages Ready**: Out-of-the-box relative asset bundling (`base: './'`) and included GitHub Actions workflow.

---

## ⚡ 5-Minute Customization Guide for New Clients

When you sell this website to a new client, **you only need to edit one file**:
📁 `src/config/siteConfig.js`

In `siteConfig.js`, you can instantly replace:
1. **Business Name & Tagline**: e.g., *"Shree Ganesh Mandap Decorators"*
2. **Phone & WhatsApp Numbers**: Updates all call links and WhatsApp chat triggers across the entire site.
3. **Location & Address**: Sangli, Pune, Mumbai, Kolhapur, etc.
4. **Google Maps Embed & Directions URL**: Drop the client's Google Maps link.
5. **Services & Pricing Packages**: Add, edit, or adjust services and package inclusions.
6. **Gallery Items**: Add real client event photos or adjust category tags.
7. **Social Media Links**: Instagram, Facebook, YouTube.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the live website.

### 4. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages

### Option 1: Automatic via GitHub Actions (Recommended)
1. Push this repository to GitHub on `main` or `master`.
2. Go to **Settings > Pages > Build and deployment**.
3. Under **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site.

### Option 2: Deploy `dist` Directory
Because `vite.config.js` uses `base: './'`, the contents of `dist` can be hosted on any static hosting provider (GitHub Pages, Netlify, Vercel, Hostinger, Cloudflare Pages) without configuration changes.

---

## 📁 Project Structure

```
event-management/
├── public/
│   ├── favicon.svg          # Royal mandap motif favicon
│   ├── robots.txt           # Crawler instructions
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── config/
│   │   └── siteConfig.js    # ⭐ SINGLE SOURCE OF TRUTH for all business data
│   ├── utils/
│   │   └── whatsapp.js      # WhatsApp pre-filled link generator
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky responsive navbar & mobile menu
│   │   ├── Hero.jsx         # Full-width hero with slow zoom & dual CTAs
│   │   ├── About.jsx        # About section & 4 value checklist
│   │   ├── EventTypes.jsx   # 6 celebration category cards
│   │   ├── Services.jsx     # 8 detailed decoration services
│   │   ├── Gallery.jsx      # Filterable gallery & Lightbox modal
│   │   ├── Packages.jsx     # Enquiry-based starting options
│   │   ├── WhyChooseUs.jsx  # 6 core advantages
│   │   ├── HowItWorks.jsx   # 4-step booking timeline
│   │   ├── TestimonialArea.jsx # Transparent placeholder review area
│   │   ├── CtaBanner.jsx    # High-contrast conversion banner
│   │   ├── Contact.jsx      # Contact info, Google Maps & WhatsApp Form
│   │   ├── Footer.jsx       # Full footer with Krisha Tech demo label
│   │   ├── MobileBottomBar.jsx # Fixed mobile bar [Call] [WhatsApp] [Quote]
│   │   └── FloatingWhatsApp.jsx# Pulsing floating WhatsApp badge
│   ├── App.jsx              # Main view
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind & custom gold gradients
├── index.html               # Semantic SEO tags & Schema.org markup
├── tailwind.config.js       # Indian royal color scheme & fonts
└── vite.config.js           # Relative base path for GitHub Pages
```

---

## 🎨 Design System

- **Primary Colors**:
  - Royal Velvet Maroon: `#3D0716`, `#7E1934`, `#981B3B`
  - Royal Champagne Gold: `#D4AF37`, `#F5E6B5`, `#B89223`
  - Warm Ivory: `#FDFBF7`, `#F9F7F2`
- **Typography**:
  - Headings: *Playfair Display* (Editorial Indian Elegance)
  - Body: *Plus Jakarta Sans* (Crisp, modern readability)

---

## 📜 License & Ownership
Created by **Krisha Tech** as a reusable business website framework.
All rights reserved © 2026.

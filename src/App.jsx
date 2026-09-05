import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventTypes from './components/EventTypes';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import TestimonialArea from './components/TestimonialArea';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-stone-800 font-sans selection:bg-maroon-700 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <EventTypes />
        <Services />
        <Gallery />
        <Packages />
        <WhyChooseUs />
        <HowItWorks />
        <TestimonialArea />
        <CtaBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-Only Bottom Sticky Action Bar */}
      <MobileBottomBar />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

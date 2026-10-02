import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryIntro } from './components/StoryIntro';
import { BusinessNavStrip } from './components/BusinessNavStrip';
import { NirmalaJewellersSection } from './components/NirmalaJewellersSection';
import { JewelleryCategoryStrip } from './components/JewelleryCategoryStrip';
import { MamidiJewellersSection } from './components/MamidiJewellersSection';
import { VisualTransition } from './components/VisualTransition';
import { FunctionHallSection } from './components/FunctionHallSection';
import { HallMasonryGallery } from './components/HallMasonryGallery';
import { CelebrationsSection } from './components/CelebrationsSection';
import { HospitalitySection } from './components/HospitalitySection';
import { RajahmundryMapSection } from './components/RajahmundryMapSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { easeCurve } from './styles/animations';

// Dedicated views
import { NirmalaJewellersPage } from './pages/NirmalaJewellersPage';
import { MamidiJewellersPage } from './pages/MamidiJewellersPage';
import { NirmalaGrandPage } from './pages/NirmalaGrandPage';
import { AboutPage } from './pages/AboutPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';

const sectionScrollAnimation = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    duration: 0.8,
    ease: easeCurve,
    staggerChildren: 0.12,
    delayChildren: 0.08
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryBusinessId, setInquiryBusinessId] = useState<string>('nirmalaGrandFunctionHall');
  const [inquiryOccasion, setInquiryOccasion] = useState<string>('');

  const handleNavigate = (view: string, anchorId?: string) => {
    setCurrentView(view);
    if (view === 'home' && anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (businessId: string = 'nirmalaGrandFunctionHall', occasion: string = '') => {
    setInquiryBusinessId(businessId);
    setInquiryOccasion(occasion);
    setInquiryModalOpen(true);
  };

  const handleSelectBusinessFromNavStrip = (businessKey: string) => {
    if (businessKey === 'nirmalaJewellers') {
      const el = document.getElementById('jewellery-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (businessKey === 'mamidiJewellers') {
      const el = document.getElementById('mamidi-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (businessKey === 'nirmalaGrandFunctionHall') {
      const el = document.getElementById('celebrations-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#191816] flex flex-col font-sans pb-16 md:pb-0">
      {/* Global Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main View Router with AnimatePresence */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Hero Section */}
              <Hero
                onExplore={() => {
                  const el = document.getElementById('story-intro');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onFindUs={() => {
                  const el = document.getElementById('locations-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* Story Intro */}
              <motion.div {...sectionScrollAnimation} id="story-intro">
                <StoryIntro />
              </motion.div>

              {/* Business Navigation Strip */}
              <motion.div {...sectionScrollAnimation}>
                <BusinessNavStrip onSelectBusiness={handleSelectBusinessFromNavStrip} />
              </motion.div>

              {/* Nirmala Jewellers Section */}
              <motion.div {...sectionScrollAnimation} id="jewellery-section">
                <NirmalaJewellersSection
                  onOpenInquiry={handleOpenInquiry}
                  onViewDetails={() => handleNavigate('nirmala-jewellers')}
                />
              </motion.div>

              {/* Jewellery Category Strip */}
              <motion.div {...sectionScrollAnimation}>
                <JewelleryCategoryStrip />
              </motion.div>

              {/* Mamidi Venkataraju Jewellers Section */}
              <motion.div {...sectionScrollAnimation} id="mamidi-section">
                <MamidiJewellersSection onOpenInquiry={handleOpenInquiry} />
              </motion.div>

              {/* Visual Transition (Jewellery -> Celebrations) */}
              <motion.div {...sectionScrollAnimation}>
                <VisualTransition />
              </motion.div>

              {/* Nirmala Grand Function Hall Section */}
              <motion.div {...sectionScrollAnimation} id="celebrations-section">
                <FunctionHallSection
                  onOpenInquiry={handleOpenInquiry}
                  onExploreGallery={() => {
                    const el = document.getElementById('venue-gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </motion.div>

              {/* Hall Masonry Gallery */}
              <motion.div {...sectionScrollAnimation} id="venue-gallery">
                <HallMasonryGallery />
              </motion.div>

              {/* Celebrations Gathering Categories */}
              <motion.div {...sectionScrollAnimation}>
                <CelebrationsSection onOpenInquiry={handleOpenInquiry} />
              </motion.div>

              {/* Hospitality Section */}
              <motion.div {...sectionScrollAnimation}>
                <HospitalitySection onOpenInquiry={handleOpenInquiry} />
              </motion.div>

              {/* Rajamahendravaram City Map Section */}
              <motion.div {...sectionScrollAnimation} id="locations-section">
                <RajahmundryMapSection />
              </motion.div>

              {/* About Section */}
              <motion.div {...sectionScrollAnimation} id="about-section">
                <AboutSection />
              </motion.div>

              {/* Contact / Final CTA Section */}
              <motion.div {...sectionScrollAnimation} id="contact-section">
                <ContactSection onOpenInquiry={handleOpenInquiry} />
              </motion.div>
            </motion.div>
          )}

          {currentView === 'nirmala-jewellers' && (
            <motion.div
              key="nirmala-jewellers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <NirmalaJewellersPage
                onBackHome={() => handleNavigate('home', 'jewellery-section')}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          )}

          {currentView === 'mamidi-jewellers' && (
            <motion.div
              key="mamidi-jewellers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <MamidiJewellersPage
                onBackHome={() => handleNavigate('home', 'mamidi-section')}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          )}

          {currentView === 'nirmala-grand' && (
            <motion.div
              key="nirmala-grand"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <NirmalaGrandPage
                onBackHome={() => handleNavigate('home', 'celebrations-section')}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <AboutPage
                onBackHome={() => handleNavigate('home')}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          )}

          {currentView === 'locations' && (
            <motion.div
              key="locations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <LocationsPage onBackHome={() => handleNavigate('home')} />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ContactPage
                onBackHome={() => handleNavigate('home')}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />

      {/* Interactive WhatsApp / Phone Inquiry Modal with AnimatePresence */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultBusinessId={inquiryBusinessId}
        defaultOccasion={inquiryOccasion}
      />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileStickyBar onOpenInquiry={handleOpenInquiry} />
    </div>
  );
}

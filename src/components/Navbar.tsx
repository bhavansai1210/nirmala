import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { businesses } from '../data/businesses';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, anchorId?: string) => void;
  onOpenInquiry: (businessId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: string, anchorId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, anchorId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F3EC]/95 backdrop-blur-md py-3.5 border-b border-[#E8DED0] shadow-[0_4px_20px_rgba(25,24,22,0.03)]'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Zone - Typographic and elegant */}
          <button
            onClick={() => handleLinkClick('home', 'hero')}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89B5E]"
            aria-label="Nirmala Home"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.18em] uppercase text-[#191816] group-hover:text-[#B89B5E] transition-colors duration-300">
              NIRMALA
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <div className="relative group">
              <button
                onClick={() => handleLinkClick('home', 'jewellery-section')}
                className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                  currentView === 'nirmala-jewellers' || currentView === 'mamidi-jewellers'
                    ? 'text-[#B89B5E] font-medium'
                    : 'text-[#191816]/80 hover:text-[#191816]'
                }`}
              >
                Jewellery
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89B5E] transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            <div className="relative group">
              <button
                onClick={() => handleLinkClick('home', 'celebrations-section')}
                className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                  currentView === 'nirmala-grand'
                    ? 'text-[#B89B5E] font-medium'
                    : 'text-[#191816]/80 hover:text-[#191816]'
                }`}
              >
                Celebrations
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89B5E] transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            <button
              onClick={() => handleLinkClick('about', 'about-section')}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 group ${
                currentView === 'about'
                  ? 'text-[#B89B5E] font-medium'
                  : 'text-[#191816]/80 hover:text-[#191816]'
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89B5E] transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => handleLinkClick('locations', 'locations-section')}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 group ${
                currentView === 'locations'
                  ? 'text-[#B89B5E] font-medium'
                  : 'text-[#191816]/80 hover:text-[#191816]'
              }`}
            >
              Locations
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89B5E] transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => handleLinkClick('contact', 'contact-section')}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 group ${
                currentView === 'contact'
                  ? 'text-[#B89B5E] font-medium'
                  : 'text-[#191816]/80 hover:text-[#191816]'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89B5E] transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('locations', 'locations-section')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-medium text-[#191816] border border-[#30261F]/30 hover:border-[#191816] hover:bg-[#191816] hover:text-[#F7F3EC] transition-all duration-300 group"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#191816] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu (Section 24) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F3EC] flex flex-col pt-24 px-8 pb-10 overflow-y-auto animate-in fade-in duration-300">
          <div className="border-b border-[#E8DED0] pb-4 mb-6">
            <span className="font-serif text-3xl tracking-[0.2em] uppercase text-[#191816]">
              NIRMALA
            </span>
            <p className="text-[11px] tracking-[0.25em] text-[#B89B5E] uppercase mt-1">
              Jewellers · Celebrations · Hospitality
            </p>
          </div>

          <nav className="flex flex-col space-y-6 text-left">
            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className="text-left font-serif text-2xl text-[#191816] hover:text-[#B89B5E] transition-colors"
            >
              Home
            </button>

            <div className="pt-2 border-t border-[#E8DED0]/60">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-medium block mb-3">
                Jewellery
              </span>
              <div className="space-y-3 pl-3">
                <button
                  onClick={() => handleLinkClick('nirmala-jewellers', 'nirmala-jewellers')}
                  className="block text-left text-lg text-[#191816] hover:text-[#B89B5E] transition-colors"
                >
                  Nirmala Jewellers
                  <span className="block text-xs text-[#191816]/60">KVR Swamy Road</span>
                </button>
                <button
                  onClick={() => handleLinkClick('mamidi-jewellers', 'mamidi-jewellers')}
                  className="block text-left text-lg text-[#191816] hover:text-[#B89B5E] transition-colors"
                >
                  Mamidi Venkataraju Jewellers
                  <span className="block text-xs text-[#191816]/60">Dowlaiswaram</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8DED0]/60">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-medium block mb-3">
                Celebrations
              </span>
              <div className="pl-3">
                <button
                  onClick={() => handleLinkClick('nirmala-grand', 'function-hall')}
                  className="block text-left text-lg text-[#191816] hover:text-[#B89B5E] transition-colors"
                >
                  Nirmala Grand Function Hall
                  <span className="block text-xs text-[#191816]/60">Mangalavaripeta</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8DED0]/60 flex flex-col space-y-3">
              <button
                onClick={() => handleLinkClick('about', 'about-section')}
                className="text-left font-serif text-2xl text-[#191816] hover:text-[#B89B5E]"
              >
                About
              </button>
              <button
                onClick={() => handleLinkClick('locations', 'locations-section')}
                className="text-left font-serif text-2xl text-[#191816] hover:text-[#B89B5E]"
              >
                Locations
              </button>
              <button
                onClick={() => handleLinkClick('contact', 'contact-section')}
                className="text-left font-serif text-2xl text-[#191816] hover:text-[#B89B5E]"
              >
                Contact
              </button>
            </div>
          </nav>

          <div className="mt-auto pt-8 border-t border-[#E8DED0] flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('locations', 'locations-section')}
              className="w-full py-3.5 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#B89B5E]" />
              <span>Find Us in Rajamahendravaram</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 border border-[#B89B5E] text-[#30261F] text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <span>Enquire / Contact Desks</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { ArrowUp, MapPin, X } from 'lucide-react';
import { businesses } from '../data/businesses';

interface FooterProps {
  onNavigate: (view: string, anchorId?: string) => void;
  onOpenInquiry: (businessId?: string, occasion?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191816] text-[#F7F3EC] pt-20 pb-16 border-t border-[#30261F] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Upper Brand Lockup */}
        <div className="pb-12 border-b border-[#30261F] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] uppercase text-[#FCFAF6] block mb-2">
              NIRMALA
            </span>
            <p className="text-xs uppercase tracking-[0.28em] text-[#B89B5E] font-medium">
              JEWELLERS · CELEBRATIONS · HOSPITALITY
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end p-3 border border-[#30261F] hover:border-[#B89B5E] text-[#E8DED0] hover:text-[#B89B5E] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Columns (Section 22) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-[#30261F] text-left">
          
          {/* Column 1: Jewellery */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#B89B5E] font-medium mb-6">
              Jewellery
            </h4>
            <ul className="space-y-3 text-sm text-[#E8DED0]/80">
              <li>
                <button
                  onClick={() => onNavigate('nirmala-jewellers', 'jewellery-section')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  Nirmala Jewellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mamidi-jewellers', 'mamidi-section')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  Mamidi Venkataraju Jewellers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Celebrations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#B89B5E] font-medium mb-6">
              Celebrations
            </h4>
            <ul className="space-y-3 text-sm text-[#E8DED0]/80">
              <li>
                <button
                  onClick={() => onNavigate('nirmala-grand', 'celebrations-section')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  Nirmala Grand Function Hall
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry('nirmalaGrandFunctionHall', 'Hall Booking')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  Date Availability
                </button>
              </li>
              {businesses.nirmalaGrandFunctionHall.showAccommodation && (
                <li>
                  <button
                    onClick={() => onOpenInquiry('nirmalaGrandFunctionHall', 'Stay & Accommodation')}
                    className="hover:text-[#D4BE8D] transition-colors text-left"
                  >
                    Guest Stay Inquiries
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#B89B5E] font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-[#E8DED0]/80">
              <li>
                <button
                  onClick={() => onNavigate('about', 'about-section')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  About Nirmala
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations', 'locations-section')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  Establishment Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact', 'contact-section')}
                  className="hover:text-[#D4BE8D] transition-colors text-left"
                >
                  Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Visit */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#B89B5E] font-medium mb-6">
              Visit
            </h4>
            <div className="space-y-2 text-sm text-[#E8DED0]/80">
              <p className="font-serif text-lg text-[#FCFAF6]">
                Rajamahendravaram
              </p>
              <p className="text-xs text-[#E8DED0]/60">
                East Godavari District
              </p>
              <p className="text-xs text-[#E8DED0]/60">
                Andhra Pradesh — 533101
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#B89B5E]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>3 Operating Destinations</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DED0]/60">
          <p>© Nirmala Business Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#D4BE8D] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#30261F]">·</span>
            <span>Rajamahendravaram, AP</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Light Modal */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#191816]/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            className="bg-[#251D18] border border-[#B89B5E]/30 max-w-lg w-full p-8 text-left shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-[#E8DED0] hover:text-[#D4BE8D]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl text-[#FCFAF6] mb-3">Privacy & Trust</h3>
            <p className="text-xs text-[#E8DED0]/80 leading-relaxed mb-4">
              Nirmala Business Group values the privacy of customers in Rajamahendravaram. When you submit inquiries through our portal or reach out by phone or WhatsApp, your details are used solely to assist your visit, scheduling, or celebration requirements.
            </p>
            <p className="text-xs text-[#E8DED0]/80 leading-relaxed mb-6">
              We never share or distribute your contact details with external third parties.
            </p>
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="w-full py-2.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-wider font-semibold hover:bg-[#D4BE8D]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Navigation } from 'lucide-react';
import { businesses } from '../data/businesses';
import { brandImages } from '../data/images';

interface FunctionHallSectionProps {
  onOpenInquiry: (businessId: string) => void;
  onExploreGallery: () => void;
}

import { easeCurve } from '../styles/animations';

export const FunctionHallSection: React.FC<FunctionHallSectionProps> = ({
  onOpenInquiry,
  onExploreGallery
}) => {
  const data = businesses.nirmalaGrandFunctionHall;

  return (
    <section className="py-24 md:py-36 bg-[#30261F] text-[#F7F3EC] relative overflow-hidden">
      {/* Warm ambient radial backdrop */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B89B5E]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: easeCurve }}
            className="lg:col-span-6 text-left"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#B89B5E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D] font-medium">
                {data.eyebrow}
              </span>
            </div>

            {/* Subheading (Brand name) */}
            <span className="font-serif text-xl sm:text-2xl text-[#D4BE8D] block mb-2 font-normal">
              {data.name}
            </span>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#FCFAF6] tracking-[-0.01em] leading-tight mb-6">
              Make room for the moments that matter.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#E8DED0]/85 leading-relaxed mb-8 max-w-xl">
              {data.shortDesc}
            </p>

            {/* Address & Verified Contact Desk */}
            <div className="p-6 bg-[#251D18]/70 border border-[#B89B5E]/20 mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-1 shrink-0" />
                <div className="text-sm">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4BE8D] block mb-0.5">
                    Venue Address
                  </span>
                  <p className="text-[#F7F3EC]">
                    {data.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#B89B5E]/15">
                <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <div className="text-sm">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4BE8D] block mb-0.5">
                    Direct Enquiries Desk
                  </span>
                  <a
                    href={`tel:${data.phone}`}
                    className="font-medium text-[#FCFAF6] hover:text-[#D4BE8D] transition-colors"
                  >
                    {data.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons: Explore Venue & Enquire Now */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('nirmalaGrandFunctionHall')}
                className="px-7 py-3.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-all duration-300 hover:-translate-y-0.5"
              >
                Enquire Now
              </button>

              <button
                onClick={onExploreGallery}
                className="px-7 py-3.5 border border-[#B89B5E]/50 text-[#F7F3EC] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#251D18] transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Venue
              </button>

              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs uppercase tracking-[0.16em] text-[#D4BE8D] hover:text-[#FCFAF6] transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              <div 
                aria-hidden="true"
                className="absolute -inset-2.5 border border-[#B89B5E]/30 pointer-events-none -z-10 translate-x-2 translate-y-2" 
              />

              <div className="aspect-[16/10] overflow-hidden bg-[#251D18] shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
                <img
                  src={brandImages.functionHallExterior}
                  alt="Nirmala Grand Function Hall architectural celebration view in Rajamahendravaram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#251D18]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BE8D] block mb-1">
                    CELEBRATIONS & HOSPITALITY
                  </span>
                  <p className="font-serif text-xl text-[#FCFAF6]">
                    Kambham Choultry St, Mangalavaripeta
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

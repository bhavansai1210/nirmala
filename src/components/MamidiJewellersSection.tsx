import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { businesses } from '../data/businesses';
import { brandImages } from '../data/images';

interface MamidiJewellersSectionProps {
  onOpenInquiry: (businessId: string) => void;
}

import { easeCurve } from '../styles/animations';

export const MamidiJewellersSection: React.FC<MamidiJewellersSectionProps> = ({
  onOpenInquiry
}) => {
  const data = businesses.mamidiJewellers;

  return (
    <section className="py-24 md:py-36 bg-[#191816] text-[#F7F3EC] relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#B89B5E_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Information with Deep Contrast Styling */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: easeCurve }}
            className="lg:col-span-6 text-left order-1"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#B89B5E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium">
                {data.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#F7F3EC] tracking-[-0.01em] leading-tight mb-5">
              {data.name}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#E8DED0]/80 leading-relaxed mb-8 max-w-xl">
              {data.shortDesc}
            </p>

            {/* Location & Dowlaiswaram Identity */}
            <div className="p-6 bg-[#30261F]/50 border border-[#30261F] mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-1 shrink-0" />
                <div className="text-sm">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4BE8D] block mb-1">
                    Storefront Address
                  </span>
                  <p className="text-[#F7F3EC] leading-relaxed">
                    {data.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#30261F]">
                <Compass className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <span className="text-xs text-[#E8DED0]/70 tracking-wider">
                  Region: Dowlaiswaram · Rajamahendravaram
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('mamidiJewellers')}
                className="px-6 py-3.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-all duration-300 hover:-translate-y-0.5"
              >
                Visit Store
              </button>

              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#B89B5E]/50 text-[#F7F3EC] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#30261F] transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Dark Editorial Jewellery Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-6 order-2"
          >
            <div className="relative group">
              {/* Gold frame accent */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2.5 border border-[#B89B5E]/30 pointer-events-none -z-10 -translate-x-2 -translate-y-2 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" 
              />

              <div className="aspect-[4/5] overflow-hidden bg-[#30261F] shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <img
                  src={brandImages.mamidiJewellers}
                  alt="Mamidi Venkataraju Jewellers heritage gold jewelry and craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] block mb-1">
                    HERITAGE CRAFT
                  </span>
                  <p className="font-serif text-xl text-[#F7F3EC]">
                    Dowlaiswaram Flagship
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

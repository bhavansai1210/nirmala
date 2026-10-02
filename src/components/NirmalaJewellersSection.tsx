import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Navigation } from 'lucide-react';
import { businesses } from '../data/businesses';
import { brandImages } from '../data/images';

interface NirmalaJewellersSectionProps {
  onOpenInquiry: (businessId: string) => void;
  onViewDetails?: () => void;
}

import { easeCurve } from '../styles/animations';

export const NirmalaJewellersSection: React.FC<NirmalaJewellersSectionProps> = ({
  onOpenInquiry,
  onViewDetails
}) => {
  const data = businesses.nirmalaJewellers;

  return (
    <section className="py-24 md:py-36 bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 60% Column: Large Portrait Image with vertical label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: easeCurve }}
            className="lg:col-span-7 relative order-2 lg:order-1"
          >
            {/* Small vertical text element (Section 10) */}
            <div 
              aria-hidden="true"
              className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] uppercase tracking-[0.35em] text-[#30261F]/40 font-medium whitespace-nowrap select-none"
            >
              RAJAMAHENDRAVARAM
            </div>

            <div className="relative group overflow-hidden bg-[#30261F] shadow-[0_20px_50px_rgba(48,38,31,0.12)]">
              <img
                src={brandImages.nirmalaJewellers}
                alt="Nirmala Jewellers gold necklace and precious handcrafted jewellery"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Muted luxury badge */}
              <div className="absolute top-6 left-6 bg-[#FCFAF6]/90 backdrop-blur-sm px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#30261F] border border-[#E8DED0]">
                Flagship Storefront
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D] block">
                  Fine Gold & Heirloom Sets
                </span>
                <p className="font-serif text-xl text-[#F7F3EC]">
                  KVR Swamy Road, Rajamahendravaram
                </p>
              </div>
            </div>
          </motion.div>

          {/* 40% Column: Text Information & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-5 order-1 lg:order-2 text-left"
          >
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1px] bg-[#B89B5E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium">
                {data.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl text-[#191816] tracking-[-0.01em] leading-tight mb-5">
              {data.name}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#191816]/80 leading-relaxed mb-8">
              {data.shortDesc}
            </p>

            {/* Location & Landmark Information */}
            <div className="space-y-4 py-6 border-y border-[#E8DED0] mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-1 shrink-0" />
                <div className="text-sm">
                  <strong className="block text-[#191816] font-medium">
                    {data.area}, Nalla Mandu St
                  </strong>
                  <span className="text-[#30261F]/70">
                    Beside OK Stores, Rajamahendravaram — {data.pincode}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <div className="text-sm">
                  <a
                    href={`tel:${data.phone}`}
                    className="font-medium text-[#191816] hover:text-[#B89B5E] transition-colors"
                  >
                    {data.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons: Visit Store & Get Directions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('nirmalaJewellers')}
                className="px-6 py-3.5 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#30261F] transition-all duration-300 hover:-translate-y-0.5"
              >
                Visit Store
              </button>

              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#30261F]/40 text-[#191816] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#191816] hover:bg-[#191816]/5 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

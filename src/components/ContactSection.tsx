import React from 'react';
import { motion } from 'motion/react';
import { Phone, Navigation, MapPin, MessageCircle } from 'lucide-react';
import { businesses } from '../data/businesses';

interface ContactSectionProps {
  onOpenInquiry: (businessId: string) => void;
}

import { easeCurve } from '../styles/animations';

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const nirmalaJ = businesses.nirmalaJewellers;
  const mamidiJ = businesses.mamidiJewellers;
  const nirmalaGrand = businesses.nirmalaGrandFunctionHall;

  return (
    <section className="py-24 md:py-36 bg-[#F7F3EC] border-t border-[#E8DED0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] block mb-3 font-medium">
            REACH OUT & VISIT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191816] tracking-tight mb-4">
            We’d love to welcome you.
          </h2>
          <div className="w-12 h-[1px] bg-[#B89B5E] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#191816]/75">
            Visit our establishments in Rajamahendravaram or connect directly with our desks.
          </p>
        </motion.div>

        {/* Three Large Contact Blocks (Section 21) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Block 1: Nirmala Jewellers */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, ease: easeCurve }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-8 bg-[#FCFAF6] border border-[#E8DED0] flex flex-col justify-between shadow-[0_8px_30px_rgba(25,24,22,0.04)] relative group hover:border-[#B89B5E] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono tracking-widest text-[#B89B5E]">01</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#30261F]/60">JEWELLERY</span>
              </div>
              <h3 className="font-serif text-2xl text-[#191816] mb-1">
                {nirmalaJ.name}
              </h3>
              <p className="text-xs text-[#B89B5E] font-medium uppercase tracking-wider mb-6">
                {nirmalaJ.area}
              </p>

              <div className="space-y-4 text-xs text-[#191816]/80 pb-6 border-b border-[#E8DED0]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <span>{nirmalaJ.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                  <a href={`tel:${nirmalaJ.phone}`} className="hover:text-[#B89B5E] transition-colors font-medium">
                    {nirmalaJ.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 flex flex-col gap-3">
              <a
                href={`tel:${nirmalaJ.phone}`}
                className="w-full py-3 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#30261F] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Call Store</span>
              </a>

              <a
                href={nirmalaJ.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-[#30261F]/30 text-[#191816] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#191816] hover:bg-[#191816]/5 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Block 2: Mamidi Venkataraju Jewellers */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCurve }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-8 bg-[#191816] text-[#F7F3EC] border border-[#30261F] flex flex-col justify-between shadow-[0_8px_30px_rgba(25,24,22,0.12)] relative group hover:border-[#B89B5E] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono tracking-widest text-[#B89B5E]">02</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8DED0]/60">JEWELLERY</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FCFAF6] mb-1">
                {mamidiJ.name}
              </h3>
              <p className="text-xs text-[#B89B5E] font-medium uppercase tracking-wider mb-6">
                {mamidiJ.area}
              </p>

              <div className="space-y-4 text-xs text-[#E8DED0]/80 pb-6 border-b border-[#30261F]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <span>{mamidiJ.address}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#D4BE8D]">
                  <span className="text-[11px] tracking-wider uppercase">In-Person Consultations</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 flex flex-col gap-3">
              <button
                onClick={() => onOpenInquiry('mamidiJewellers')}
                className="w-full py-3 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors flex items-center justify-center gap-2"
              >
                <span>Visit Store</span>
              </button>

              <a
                href={mamidiJ.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-[#B89B5E]/50 text-[#FCFAF6] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#30261F] transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Block 3: Nirmala Grand Function Hall */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-8 bg-[#30261F] text-[#F7F3EC] border border-[#B89B5E]/30 flex flex-col justify-between shadow-[0_8px_30px_rgba(25,24,22,0.12)] relative group hover:border-[#B89B5E] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono tracking-widest text-[#B89B5E]">03</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4BE8D]">CELEBRATIONS</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FCFAF6] mb-1">
                {nirmalaGrand.name}
              </h3>
              <p className="text-xs text-[#D4BE8D] font-medium uppercase tracking-wider mb-6">
                {nirmalaGrand.area}
              </p>

              <div className="space-y-4 text-xs text-[#E8DED0]/85 pb-6 border-b border-[#251D18]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <span>{nirmalaGrand.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                  <a href={`tel:${nirmalaGrand.phone}`} className="hover:text-[#D4BE8D] transition-colors font-medium">
                    {nirmalaGrand.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 flex flex-col gap-3">
              <a
                href={`tel:${nirmalaGrand.phone}`}
                className="w-full py-3 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hall Desk</span>
              </a>

              <button
                onClick={() => onOpenInquiry('nirmalaGrandFunctionHall')}
                className="w-full py-3 border border-[#B89B5E]/50 text-[#FCFAF6] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#251D18] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

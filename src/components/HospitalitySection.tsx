import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { businesses } from '../data/businesses';

interface HospitalitySectionProps {
  onOpenInquiry: (businessId: string, customSubject?: string) => void;
}

import { easeCurve } from '../styles/animations';

export const HospitalitySection: React.FC<HospitalitySectionProps> = ({ onOpenInquiry }) => {
  const data = businesses.nirmalaGrandFunctionHall;

  if (!data.showAccommodation) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-[#251D18] text-[#F7F3EC] border-t border-[#30261F] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        
        {/* Small Label */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="inline-flex items-center justify-center gap-2 mb-4"
        >
          <span className="w-4 h-[1px] bg-[#B89B5E]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D] font-medium">
            STAY
          </span>
          <span className="w-4 h-[1px] bg-[#B89B5E]" />
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeCurve }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FCFAF6] tracking-tight leading-tight mb-5"
        >
          Stay close to the celebration.
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: easeCurve }}
          className="text-base sm:text-lg text-[#E8DED0]/80 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Comfortable accommodation for guests visiting Rajamahendravaram.
        </motion.p>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: easeCurve }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => onOpenInquiry('nirmalaGrandFunctionHall', 'Guest Accommodation & Rooms')}
            className="px-7 py-3.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            <span>Enquire About Stay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`tel:${data.phone}`}
            className="px-6 py-3.5 border border-[#B89B5E]/40 text-[#FCFAF6] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#30261F] transition-colors inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>Call Desk</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

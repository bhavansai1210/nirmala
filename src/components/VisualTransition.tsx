import React from 'react';
import { motion } from 'motion/react';
import { brandImages } from '../data/images';

import { easeCurve } from '../styles/animations';

export const VisualTransition: React.FC = () => {
  return (
    <section 
      aria-label="Transition from Jewellery to Celebrations" 
      className="relative py-28 md:py-40 bg-gradient-to-b from-[#191816] via-[#30261F] to-[#251D18] text-[#F7F3EC] overflow-hidden"
    >
      {/* Background imagery blend: Gold texture to warm lights */}
      <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="h-full overflow-hidden">
            <img
              src={brandImages.heroJewellery}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter blur-xs"
            />
          </div>
          <div className="h-full overflow-hidden">
            <img
              src={brandImages.heroCelebration}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter blur-xs"
            />
          </div>
          <div className="h-full overflow-hidden">
            <img
              src={brandImages.functionHallExterior}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter blur-xs"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Animated Connecting Gold Line (Section 13) */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: easeCurve }}
            style={{ transformOrigin: 'top' }}
            className="w-[1.5px] h-20 bg-gradient-to-b from-[#B89B5E] to-transparent mb-4"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeCurve }}
            className="text-[11px] uppercase tracking-[0.3em] text-[#D4BE8D] font-medium"
          >
            THE NATURAL CONTINUUM
          </motion.span>
        </div>

        {/* Signature Editorial Concept */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeCurve }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7F3EC] tracking-tight leading-tight mb-6"
        >
          From the jewellery worn
          <br />
          <span className="italic font-normal text-[#D4BE8D]">
            to the hall where vows are made.
          </span>
        </motion.h2>

        {/* Narrative Connection Bridge with subtle hover glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeCurve }}
          className="inline-flex items-center gap-4 sm:gap-8 text-xs sm:text-sm uppercase tracking-[0.22em] text-[#E8DED0]/80 py-4 px-6 border border-[#B89B5E]/30 bg-[#191816]/60 backdrop-blur-sm shadow-xl"
        >
          <span className="text-[#D4BE8D] font-medium">Jewellery</span>
          <span className="text-[#B89B5E]">→</span>
          <span className="text-[#F7F3EC] font-medium">Celebrations</span>
          <span className="text-[#B89B5E]">→</span>
          <span className="text-[#D4BE8D] font-medium">Hospitality</span>
        </motion.div>

        {/* Descending connecting line into Function Hall */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.65, ease: easeCurve }}
          style={{ transformOrigin: 'top' }}
          className="w-[1.5px] h-20 bg-gradient-to-b from-[#B89B5E] to-transparent mx-auto mt-10"
        />
      </div>
    </section>
  );
};

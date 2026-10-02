import React from 'react';
import { motion } from 'motion/react';
import { brandImages } from '../data/images';

import { easeCurve } from '../styles/animations';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#FCFAF6] border-t border-[#E8DED0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage / Craftsmanship detail */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: easeCurve }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative group">
              <div 
                aria-hidden="true" 
                className="absolute -inset-3 border border-[#B89B5E]/30 pointer-events-none -z-10 translate-x-3 translate-y-3" 
              />
              <div className="aspect-[4/5] overflow-hidden bg-[#30261F] shadow-[0_20px_40px_rgba(25,24,22,0.08)]">
                <img
                  src={brandImages.heroCelebration}
                  alt="Traditional festive hospitality in Rajamahendravaram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Quiet editorial trust card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#191816] text-[#F7F3EC] p-6 max-w-xs shadow-xl border border-[#30261F]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BE8D] block mb-1">
                  OUR ESSENCE
                </span>
                <p className="font-serif text-lg leading-snug">
                  Trust, Craftsmanship & Celebration in East Godavari.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-7 order-1 lg:order-2 text-left"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#B89B5E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium">
                ABOUT
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191816] tracking-tight leading-tight mb-6">
              A local name with a modern presence.
            </h2>

            {/* Core Authentic Copy (Section 20) */}
            <p className="text-base sm:text-lg text-[#191816]/80 leading-relaxed mb-8">
              Nirmala brings together businesses that are part of everyday life and life’s important occasions — from jewellery shopping to celebrations and hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#30261F]/70 leading-relaxed mb-10">
              Each establishment operates with dedicated attention to its craft: Nirmala Jewellers on KVR Swamy Road offering hallmark fine jewellery; Mamidi Venkataraju Jewellers serving Dowlaiswaram with traditional authenticity; and Nirmala Grand Function Hall in Mangalavaripeta providing a spacious, dignified venue for ceremonies and milestone gatherings.
            </p>

            {/* 3 Authentic Pillars - No fake stats, no fake awards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8DED0]">
              <div className="group">
                <span className="font-serif text-xl text-[#191816] block mb-1 font-medium group-hover:text-[#B89B5E] transition-colors">
                  Craftsmanship
                </span>
                <p className="text-xs text-[#30261F]/70 leading-relaxed">
                  Dedicated gold selection and artisanal detailing for every ceremony.
                </p>
              </div>

              <div className="group">
                <span className="font-serif text-xl text-[#191816] block mb-1 font-medium group-hover:text-[#B89B5E] transition-colors">
                  Hospitality
                </span>
                <p className="text-xs text-[#30261F]/70 leading-relaxed">
                  Welcoming venues with gracious arrangements for families and guests.
                </p>
              </div>

              <div className="group">
                <span className="font-serif text-xl text-[#191816] block mb-1 font-medium group-hover:text-[#B89B5E] transition-colors">
                  Local Presence
                </span>
                <p className="text-xs text-[#30261F]/70 leading-relaxed">
                  Deep roots across Rajamahendravaram with direct owner accountability.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

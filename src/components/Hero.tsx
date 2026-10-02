import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { brandImages } from '../data/images';

interface HeroProps {
  onExplore: () => void;
  onFindUs: () => void;
}

import { easeCurve } from '../styles/animations';

export const Hero: React.FC<HeroProps> = ({ onExplore, onFindUs }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#F7F3EC] overflow-hidden">
      {/* Subtle background ambient warmth */}
      <motion.div 
        aria-hidden="true" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: easeCurve }}
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-[#E8DED0]/40 blur-3xl pointer-events-none -mr-20 -mt-20" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            {/* Step 1: Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-[1px] bg-[#B89B5E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#30261F]/80 font-medium">
                RAJAMAHENDRAVARAM · ANDHRA PRADESH
              </span>
            </motion.div>

            {/* Step 2 & 3: Line-by-Line Heading Reveals */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-[-0.01em] text-[#191816] mb-4 overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: easeCurve }}
                className="block"
              >
                Crafted for celebrations.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: easeCurve }}
                className="block font-normal italic text-[#30261F]"
              >
                Built on trust.
              </motion.span>
            </h1>

            {/* Step 4: Gold Accent Line draws itself */}
            <div className="py-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: easeCurve }}
                style={{ transformOrigin: 'left' }}
                className="h-[1.5px] w-32 md:w-48 bg-gradient-to-r from-[#B89B5E] via-[#D4BE8D] to-transparent"
              />
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: easeCurve }}
              className="text-base md:text-lg text-[#191816]/75 max-w-xl leading-relaxed mb-8"
            >
              From timeless jewellery to memorable gatherings, discover three local businesses connected by one trusted name.
            </motion.p>

            {/* Step 5: CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: easeCurve }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExplore}
                className="px-7 py-3.5 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#30261F] transition-all duration-300 shadow-[0_4px_16px_rgba(25,24,22,0.12)] hover:shadow-none hover:-translate-y-0.5"
              >
                Explore Our Businesses
              </button>

              <button
                onClick={onFindUs}
                className="px-7 py-3.5 bg-transparent border border-[#30261F]/40 text-[#191816] text-xs uppercase tracking-[0.18em] font-medium hover:border-[#191816] hover:bg-[#191816]/5 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Find Us</span>
              </button>
            </motion.div>

            {/* Micro trust cues */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 pt-8 border-t border-[#E8DED0] flex items-center gap-8 text-xs text-[#30261F]/70 tracking-wider"
            >
              <div>
                <span className="block font-serif text-lg text-[#191816] font-semibold">2 Storefronts</span>
                <span>Fine Gold & Jewellery</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E8DED0]" />
              <div>
                <span className="block font-serif text-lg text-[#191816] font-semibold">1 Grand Venue</span>
                <span>Weddings & Occasions</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Split Visual Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Step 2: Main Vertical Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: easeCurve }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Frame Line */}
              <motion.div 
                aria-hidden="true" 
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: 12, y: 12 }}
                transition={{ duration: 1, delay: 0.7, ease: easeCurve }}
                className="absolute -inset-3 border border-[#B89B5E]/30 pointer-events-none -z-10" 
              />

              {/* Main Portrait Card */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#30261F] shadow-[0_24px_50px_rgba(25,24,22,0.18)] group">
                <img
                  src={brandImages.heroJewellery}
                  alt="Fine handcrafted South Indian gold temple jewellery details"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Visual Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle Badge on card */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-[#F7F3EC]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BE8D] block mb-1">
                    CRAFTSMANSHIP
                  </span>
                  <p className="font-serif text-lg tracking-wide">
                    Pure Gold & Generational Trust
                  </p>
                </div>
              </div>

              {/* Floating Overlapping Celebration Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.9, delay: 0.8, ease: easeCurve }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="absolute -bottom-8 -left-6 sm:-left-10 w-52 sm:w-60 aspect-[4/3] bg-[#FCFAF6] p-2.5 shadow-[0_16px_36px_rgba(25,24,22,0.16)] border border-[#E8DED0]"
              >
                <div className="w-full h-full overflow-hidden relative bg-[#30261F]">
                  <img
                    src={brandImages.heroCelebration}
                    alt="Warm festive celebration decor with golden bokeh lights"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2 text-left">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4BE8D] block">
                      CELEBRATIONS
                    </span>
                    <p className="font-serif text-xs text-[#FCFAF6]">
                      Grand Moments & Hospitality
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { brandImages } from '../data/images';

interface BusinessNavStripProps {
  onSelectBusiness: (businessKey: string) => void;
}

import { easeCurve } from '../styles/animations';

export const BusinessNavStrip: React.FC<BusinessNavStripProps> = ({ onSelectBusiness }) => {
  const [activeHover, setActiveHover] = useState<string>('nirmalaJewellers');

  const navItems = [
    {
      key: 'nirmalaJewellers',
      number: '01',
      category: 'JEWELLERY',
      name: 'Nirmala Jewellers',
      location: 'KVR Swamy Road, Nalla Mandu St',
      image: brandImages.nirmalaJewellers,
      accent: 'Ivory & Fine Gold'
    },
    {
      key: 'mamidiJewellers',
      number: '02',
      category: 'JEWELLERY',
      name: 'Mamidi Venkataraju Jewellers',
      location: 'Dowlaiswaram, Rajamahendravaram',
      image: brandImages.mamidiJewellers,
      accent: 'Charcoal & Heritage'
    },
    {
      key: 'nirmalaGrandFunctionHall',
      number: '03',
      category: 'CELEBRATIONS',
      name: 'Nirmala Grand Function Hall',
      location: 'Mangalavaripeta, Rajamahendravaram',
      image: brandImages.functionHallExterior,
      accent: 'Warm Amber & Hospitality'
    }
  ];

  const currentImage =
    activeHover === 'nirmalaJewellers'
      ? brandImages.nirmalaJewellers
      : activeHover === 'mamidiJewellers'
      ? brandImages.mamidiJewellers
      : brandImages.functionHallExterior;

  return (
    <section className="bg-[#191816] text-[#F7F3EC] py-20 md:py-28 relative overflow-hidden transition-colors duration-700">
      {/* Background ambient preview image with smooth AnimatePresence crossfade */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeHover}
            src={currentImage}
            alt="Ambient preview background"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="w-full h-full object-cover filter blur-sm"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#191816]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#30261F]"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] block mb-2 font-medium">
              CURATED DIRECTORY
            </span>
            <p className="font-serif text-2xl md:text-3xl text-[#F7F3EC]">
              Select a destination to explore
            </p>
          </div>
          <span className="text-xs tracking-wider uppercase text-[#E8DED0]/60 mt-3 md:mt-0">
            03 Active Establishments
          </span>
        </motion.div>

        {/* 3 Horizontal Editorial Rows */}
        <div className="space-y-4">
          {navItems.map((item, idx) => {
            const isHovered = activeHover === item.key;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: easeCurve }}
                onMouseEnter={() => setActiveHover(item.key)}
                onClick={() => onSelectBusiness(item.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectBusiness(item.key);
                  }
                }}
                className={`group cursor-pointer p-6 md:p-8 transition-all duration-500 rounded-none relative border-b border-[#30261F]/80 ${
                  isHovered ? 'bg-[#30261F]/50' : 'hover:bg-[#30261F]/20'
                }`}
              >
                {/* Animated Gold Hairline using motion */}
                <motion.div
                  initial={false}
                  animate={{
                    width: isHovered ? '100%' : '0%',
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.45, ease: easeCurve }}
                  className="absolute top-0 left-0 h-[2px] bg-[#B89B5E]"
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Column 1: Index Number and Category */}
                  <div className="md:col-span-3 flex items-center gap-4">
                    <span className="font-serif text-xl md:text-2xl text-[#B89B5E] tracking-widest font-light">
                      {item.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#E8DED0]/70 font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Column 2: Business Title */}
                  <motion.div
                    animate={{ x: isHovered ? 8 : 0 }}
                    transition={{ duration: 0.35, ease: easeCurve }}
                    className="md:col-span-6"
                  >
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F7F3EC] group-hover:text-[#D4BE8D] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#E8DED0]/60 tracking-wider mt-1">
                      {item.location}
                    </p>
                  </motion.div>

                  {/* Column 3: Action Cue with small preview circle */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                    <div className="hidden lg:block w-14 h-14 rounded-full overflow-hidden border border-[#B89B5E]/30 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B89B5E] group-hover:text-[#F7F3EC] transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

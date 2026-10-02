import React from 'react';
import { motion } from 'motion/react';
import { brandImages } from '../data/images';

import { easeCurve } from '../styles/animations';

export const JewelleryCategoryStrip: React.FC = () => {
  const categories = brandImages.jewelleryCategories;

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF6] border-t border-b border-[#E8DED0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] block mb-3 font-medium">
            COLLECTIONS & CRAFT
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191816]">
            Made for life’s meaningful moments.
          </h3>
          <div className="w-12 h-[1px] bg-[#B89B5E] mx-auto mt-5" />
        </motion.div>

        {/* 5 Visual Category Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: easeCurve }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative aspect-[3/4] overflow-hidden bg-[#30261F] cursor-pointer shadow-[0_8px_24px_rgba(25,24,22,0.06)]"
            >
              {/* Category Image with Zoom on hover */}
              <img
                src={cat.image}
                alt={`${cat.title} Jewellery Collection`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/90 via-[#191816]/30 to-transparent transition-opacity duration-500 group-hover:from-[#191816]/95" />

              {/* Category Number */}
              <div className="absolute top-4 right-4 text-[11px] font-mono tracking-widest text-[#D4BE8D]">
                0{idx + 1}
              </div>

              {/* Category Text & Reveal on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BE8D] block mb-1">
                  CATEGORY
                </span>
                <h4 className="font-serif text-2xl text-[#F7F3EC] mb-2 group-hover:text-[#D4BE8D] transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-[#E8DED0]/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

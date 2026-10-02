import React from 'react';
import { motion } from 'motion/react';

import { easeCurve } from '../styles/animations';

export const StoryIntro: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F3EC] border-t border-[#E8DED0]/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Small Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-xs uppercase tracking-[0.28em] text-[#B89B5E] font-medium block mb-6"
        >
          THE NIRMALA STORY
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeCurve }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191816] tracking-[-0.01em] leading-tight mb-8"
        >
          Three destinations.
          <br />
          <span className="italic font-normal text-[#30261F]">One local connection.</span>
        </motion.h2>

        {/* Subtle hairline divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
          className="w-16 h-[1.5px] bg-[#B89B5E]/60 mx-auto mb-8"
        />

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeCurve }}
          className="font-sans text-base md:text-xl text-[#191816]/75 leading-relaxed max-w-2xl mx-auto"
        >
          Nirmala Jewellers, Mamidi Venkataraju Jewellers and Nirmala Grand Function Hall bring together jewellery, celebrations and hospitality in Rajamahendravaram.
        </motion.p>
      </div>
    </section>
  );
};

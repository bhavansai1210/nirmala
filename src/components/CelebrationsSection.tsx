import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CelebrationsSectionProps {
  onOpenInquiry: (businessId: string, occasion?: string) => void;
}

import { easeCurve } from '../styles/animations';

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({ onOpenInquiry }) => {
  const occasionCategories = [
    {
      id: 'weddings',
      title: 'Weddings',
      shortDesc: 'Auspicious muhurtham ceremonies surrounded by family tradition and grand mandap settings.',
      code: '01'
    },
    {
      id: 'receptions',
      title: 'Receptions',
      shortDesc: 'Evening celebrations welcoming friends and dignitaries in graceful ambiance.',
      code: '02'
    },
    {
      id: 'family-celebrations',
      title: 'Family Celebrations',
      shortDesc: 'Half-saree ceremonies, cradle ceremonies, and landmark milestone gatherings.',
      code: '03'
    },
    {
      id: 'social-gatherings',
      title: 'Social Gatherings',
      shortDesc: 'Community functions, cultural assemblies, and collaborative gatherings.',
      code: '04'
    },
    {
      id: 'special-occasions',
      title: 'Special Occasions',
      shortDesc: 'Anniversaries, felicitations, and private family remembrances.',
      code: '05'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#2C231D] text-[#F7F3EC] border-t border-[#30261F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#B89B5E]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D] font-medium">
              EVENT SETTINGS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FCFAF6] tracking-tight leading-tight mb-4">
            Every gathering deserves its own setting.
          </h2>
          <p className="text-sm sm:text-base text-[#E8DED0]/75 max-w-xl">
            Nirmala Grand Function Hall accommodates traditional ceremonies and grand celebrations with warmth and poise.
          </p>
        </motion.div>

        {/* 5 Event Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasionCategories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: easeCurve }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              onClick={() => onOpenInquiry('nirmalaGrandFunctionHall', item.title)}
              className="group p-8 bg-[#221B17] border border-[#B89B5E]/20 hover:border-[#B89B5E]/70 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#B89B5E]">
                    {item.code}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4BE8D]/60 group-hover:text-[#D4BE8D] transition-colors">
                    CELEBRATION
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#FCFAF6] group-hover:text-[#D4BE8D] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E8DED0]/75 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#30261F] flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#D4BE8D]">
                <span>Inquire for {item.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Direct Quick Inquiry Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.45, ease: easeCurve }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-8 bg-gradient-to-br from-[#3A2D24] to-[#251D18] border border-[#B89B5E]/40 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#D4BE8D]">
                <Sparkles className="w-4 h-4 text-[#B89B5E]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                  DIRECT ASSISTANCE
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#FCFAF6] mb-2">
                Planning a Date?
              </h3>
              <p className="text-xs text-[#E8DED0]/85 leading-relaxed">
                Check auspicious dates and hall availability directly with the Nirmala Grand desk.
              </p>
            </div>

            <button
              onClick={() => onOpenInquiry('nirmalaGrandFunctionHall')}
              className="mt-6 w-full py-3 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors text-center"
            >
              Check Availability
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

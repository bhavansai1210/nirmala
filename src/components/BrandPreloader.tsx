import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { easeCurve } from '../styles/animations';

interface BrandPreloaderProps {
  minDurationMs?: number;
}

export const BrandPreloader: React.FC<BrandPreloaderProps> = ({ minDurationMs = 850 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if page already loaded or wait for readyState
    let timer: NodeJS.Timeout;

    const hideLoader = () => {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, minDurationMs);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', hideLoader);
    };
  }, [minDurationMs]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="brand-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.75, ease: easeCurve } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#191816] text-[#F7F3EC] pointer-events-none select-none"
        >
          {/* Subtle warm ambient radial light behind emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.25, scale: 1.1 }}
            transition={{ duration: 1.2, ease: easeCurve }}
            className="absolute w-96 h-96 rounded-full bg-[#B89B5E] filter blur-[90px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Top Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4BE8D] font-medium mb-3 block"
            >
              RAJAMAHENDRAVARAM
            </motion.span>

            {/* Brand Logo Wordmark */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ opacity: 0, y: 30, letterSpacing: '0.12em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.22em' }}
                transition={{ duration: 0.9, delay: 0.2, ease: easeCurve }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FCFAF6] font-light uppercase"
              >
                NIRMALA
              </motion.h1>
            </div>

            {/* Expanding Gold Hairline Rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, delay: 0.35, ease: easeCurve }}
              style={{ transformOrigin: 'center' }}
              className="w-28 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#B89B5E] to-transparent my-3.5"
            />

            {/* Trinity Subtitle: Jewellery · Celebrations · Hospitality */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: easeCurve }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#E8DED0]/70 font-light"
            >
              Jewellery <span className="text-[#B89B5E]/60 mx-1.5">·</span> Celebrations <span className="text-[#B89B5E]/60 mx-1.5">·</span> Hospitality
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

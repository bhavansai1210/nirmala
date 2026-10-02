import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { brandImages, GalleryItem } from '../data/images';

import { easeCurve } from '../styles/animations';

export const HallMasonryGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems = brandImages.gallery;

  return (
    <section id="venue-gallery" className="py-20 md:py-28 bg-[#251D18] text-[#F7F3EC] border-t border-[#B89B5E]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#30261F]"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D] block mb-2 font-medium">
              VENUE PERSPECTIVES
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-[#FCFAF6]">
              A glance inside Nirmala Grand
            </h3>
          </div>
          <span className="text-xs tracking-wider uppercase text-[#E8DED0]/60 mt-2 md:mt-0">
            Kambham Choultry St · Mangalavaripeta
          </span>
        </motion.div>

        {/* Masonry / Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item, index) => {
            const colSpan = index === 0 ? 'md:col-span-8' : index === 1 ? 'md:col-span-4' : index === 2 ? 'md:col-span-5' : 'md:col-span-7';
            const aspect = index === 0 ? 'aspect-[16/10]' : index === 1 ? 'aspect-[4/5]' : 'aspect-[16/9]';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: easeCurve }}
                onClick={() => setSelectedItem(item)}
                className={`${colSpan} group relative ${aspect} overflow-hidden bg-[#191816] cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.3)]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/90 via-[#191816]/20 to-transparent transition-opacity duration-300 group-hover:from-[#191816]/95" />

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#191816]/60 backdrop-blur-xs flex items-center justify-center text-[#D4BE8D] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BE8D] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#FCFAF6] group-hover:text-[#D4BE8D] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#E8DED0]/70 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#191816]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: easeCurve }}
              className="relative max-w-5xl w-full bg-[#251D18] border border-[#B89B5E]/30 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#191816]/80 text-[#FCFAF6] hover:text-[#D4BE8D] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-[#191816]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              <div className="p-6 text-left bg-[#251D18] border-t border-[#B89B5E]/20">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4BE8D] block mb-1">
                  {selectedItem.category} · Nirmala Grand Function Hall
                </span>
                <h4 className="font-serif text-2xl text-[#FCFAF6] mb-1">
                  {selectedItem.title}
                </h4>
                <p className="text-sm text-[#E8DED0]/80">
                  {selectedItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

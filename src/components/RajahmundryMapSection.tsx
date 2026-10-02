import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { businesses } from '../data/businesses';

import { easeCurve } from '../styles/animations';

export const RajahmundryMapSection: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('nirmalaJewellers');

  const locations = [
    {
      key: 'nirmalaJewellers',
      name: businesses.nirmalaJewellers.name,
      category: 'Jewellery Storefront',
      area: 'KVR Swamy Road',
      detail: 'Nalla Mandu St, beside OK Stores',
      pinCode: '533101',
      mapsUrl: businesses.nirmalaJewellers.mapsUrl,
      mapX: 48,
      mapY: 34
    },
    {
      key: 'mamidiJewellers',
      name: businesses.mamidiJewellers.name,
      category: 'Jewellery Heritage',
      area: 'Dowlaiswaram',
      detail: 'Main Rd, VGTPS Colony, Mangalavaripeta',
      pinCode: '533101',
      mapsUrl: businesses.mamidiJewellers.mapsUrl,
      mapX: 62,
      mapY: 76
    },
    {
      key: 'nirmalaGrandFunctionHall',
      name: businesses.nirmalaGrandFunctionHall.name,
      category: 'Function Hall & Celebrations',
      area: 'Mangalavaripeta',
      detail: '8-18-22, Kambham Choultry St',
      pinCode: '533101',
      mapsUrl: businesses.nirmalaGrandFunctionHall.mapsUrl,
      mapX: 52,
      mapY: 54
    }
  ];

  const currentLoc = locations.find((l) => l.key === selectedKey) || locations[0];

  return (
    <section className="py-24 md:py-36 bg-[#191816] text-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#B89B5E]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium">
              OUR CITY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FCFAF6] tracking-tight leading-tight mb-4">
            Rooted in Rajamahendravaram.
          </h2>
          <p className="text-base text-[#E8DED0]/80 max-w-xl">
            Three destinations across the city, connected by a local story of jewellery, celebrations and hospitality.
          </p>
        </motion.div>

        {/* Interactive Map Layout: Locations on Left (Desktop), Stylized Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Locations Switcher */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {locations.map((loc) => {
                const isSelected = selectedKey === loc.key;
                return (
                  <motion.button
                    key={loc.key}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedKey(loc.key)}
                    className={`w-full text-left p-6 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#30261F] border-[#B89B5E] shadow-[0_4px_20px_rgba(184,155,94,0.15)]'
                        : 'bg-[#221B17] border-[#30261F] hover:border-[#B89B5E]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4BE8D] font-medium">
                        {loc.category}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] uppercase tracking-wider text-[#B89B5E] font-mono">
                          Active Pin
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl text-[#FCFAF6] mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-[#E8DED0]/70 mb-3">
                      {loc.detail}, Rajamahendravaram — {loc.pinCode}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#B89B5E]">
                      <span className="font-medium">{loc.area}</span>
                      <span className="underline underline-offset-4 text-[#D4BE8D]">
                        Select Pin
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Location Action Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLoc.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#251D18] border border-[#B89B5E]/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4BE8D] block">
                      Directions to {currentLoc.name}
                    </span>
                    <p className="text-xs text-[#E8DED0]/80">
                      Located in {currentLoc.area}
                    </p>
                  </div>

                  <a
                    href={currentLoc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors inline-flex items-center gap-1.5 shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Stylized City Map Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-7 bg-[#221B17] border border-[#30261F] p-6 sm:p-8 flex flex-col justify-between relative min-h-[460px]"
          >
            {/* Map Header / Orientation */}
            <div className="flex items-center justify-between pb-4 border-b border-[#30261F] text-xs text-[#E8DED0]/60">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#B89B5E]" />
                <span className="tracking-widest uppercase">Godavari River Corridor · Rajahmundry City</span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-[#B89B5E]">Interactive Hub</span>
            </div>

            {/* Stylized City Map Canvas */}
            <div className="relative my-auto w-full aspect-[4/3] max-h-[380px] bg-[#191816] border border-[#30261F]/60 overflow-hidden">
              {/* Stylized River Godavari Curve */}
              <svg 
                viewBox="0 0 400 300" 
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                aria-hidden="true"
              >
                <path
                  d="M 60,0 C 90,80 40,160 80,300"
                  fill="none"
                  stroke="#B89B5E"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <text x="35" y="150" fill="#B89B5E" fontSize="9" letterSpacing="3" transform="rotate(-75 35 150)">
                  GODAVARI RIVER
                </text>
              </svg>

              {/* Road network grid representation */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#30261F_1px,transparent_1px),linear-gradient(to_bottom,#30261F_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

              {/* Landmark badges on map */}
              <div className="absolute top-4 left-6 text-[10px] tracking-widest text-[#E8DED0]/40 uppercase">
                Kotilingala Ghat / Riverfront
              </div>
              <div className="absolute bottom-4 right-6 text-[10px] tracking-widest text-[#E8DED0]/40 uppercase">
                Dowlaiswaram Barrage Route
              </div>

              {/* 3 Interactive Map Pins */}
              {locations.map((loc) => {
                const isSelected = selectedKey === loc.key;
                return (
                  <button
                    key={loc.key}
                    onClick={() => setSelectedKey(loc.key)}
                    style={{ left: `${loc.mapX}%`, top: `${loc.mapY}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                    aria-label={`Select ${loc.name}`}
                  >
                    {/* Pulsing ring for active pin */}
                    {isSelected && (
                      <span className="absolute -inset-2.5 rounded-full border-2 border-[#B89B5E] animate-ping opacity-60" />
                    )}

                    {/* Marker icon container */}
                    <motion.div
                      animate={{ scale: isSelected ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg ${
                        isSelected
                          ? 'bg-[#B89B5E] text-[#191816]'
                          : 'bg-[#30261F] text-[#D4BE8D] hover:bg-[#B89B5E] hover:text-[#191816]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </motion.div>

                    {/* Label Callout Card on Pin */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap px-3 py-1.5 bg-[#251D18] border border-[#B89B5E]/50 text-[11px] text-[#FCFAF6] transition-all duration-300 pointer-events-none shadow-xl ${
                        isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                      }`}
                    >
                      <strong className="block text-[#D4BE8D] font-serif">{loc.name}</strong>
                      <span className="text-[9px] text-[#E8DED0]/80">{loc.area}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Footer Note */}
            <div className="pt-4 border-t border-[#30261F] flex items-center justify-between text-[11px] text-[#E8DED0]/60">
              <span>Select any pin to view route & landmark details</span>
              <a
                href={currentLoc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B89B5E] hover:text-[#D4BE8D] inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

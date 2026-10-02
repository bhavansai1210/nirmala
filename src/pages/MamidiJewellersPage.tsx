import React from 'react';
import { ArrowLeft, MapPin, Navigation, Compass } from 'lucide-react';
import { businesses } from '../data/businesses';
import { brandImages } from '../data/images';

interface MamidiJewellersPageProps {
  onBackHome: () => void;
  onOpenInquiry: (businessId: string) => void;
}

export const MamidiJewellersPage: React.FC<MamidiJewellersPageProps> = ({
  onBackHome,
  onOpenInquiry
}) => {
  const data = businesses.mamidiJewellers;

  return (
    <div className="pt-28 pb-20 bg-[#191816] text-[#F7F3EC] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Back breadcrumb */}
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B5E] hover:text-[#FCFAF6] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Overview</span>
        </button>

        {/* Dedicated Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#30261F]">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium block mb-3">
              HERITAGE JEWELLERY · DOWLAISWARAM
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FCFAF6] tracking-tight leading-tight mb-6">
              Mamidi Venkataraju Jewellers
            </h1>
            <p className="text-lg text-[#E8DED0]/85 leading-relaxed mb-8">
              Another revered name connected to the jewellery story of Rajamahendravaram, situated along the historic Dowlaiswaram corridor with traditional craftsmanship.
            </p>

            <div className="p-6 bg-[#251D18] border border-[#30261F] space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-1 shrink-0" />
                <div className="text-sm">
                  <strong className="block text-[#FCFAF6] mb-1">Storefront Location</strong>
                  <span className="text-[#E8DED0]/75 leading-relaxed block">{data.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#30261F]">
                <Compass className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <span className="text-xs text-[#D4BE8D]">
                  Serving the families of Dowlaiswaram & Rajamahendravaram
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('mamidiJewellers')}
                className="px-7 py-3.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors"
              >
                Inquire With Desk
              </button>

              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#B89B5E]/50 text-[#FCFAF6] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#30261F] transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#251D18] shadow-2xl relative border border-[#30261F]">
              <img
                src={brandImages.mamidiJewellers}
                alt="Mamidi Venkataraju Jewellers gold ornaments"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D]">Traditional Gold</span>
                <p className="font-serif text-xl text-[#FCFAF6]">Generational Heritage Craft</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

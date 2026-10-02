import React from 'react';
import { ArrowLeft, Phone, MapPin, Navigation, Sparkles } from 'lucide-react';
import { businesses } from '../data/businesses';
import { brandImages } from '../data/images';
import { JewelleryCategoryStrip } from '../components/JewelleryCategoryStrip';

interface NirmalaJewellersPageProps {
  onBackHome: () => void;
  onOpenInquiry: (businessId: string) => void;
}

export const NirmalaJewellersPage: React.FC<NirmalaJewellersPageProps> = ({
  onBackHome,
  onOpenInquiry
}) => {
  const data = businesses.nirmalaJewellers;

  return (
    <div className="pt-28 pb-20 bg-[#F7F3EC] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Back breadcrumb */}
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B5E] hover:text-[#191816] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Overview</span>
        </button>

        {/* Dedicated Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#E8DED0]">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-medium block mb-3">
              FLAGSHIP STOREFRONT · KVR SWAMY ROAD
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#191816] tracking-tight leading-tight mb-6">
              Nirmala Jewellers
            </h1>
            <p className="text-lg text-[#191816]/80 leading-relaxed mb-8">
              A trusted jewellery destination in the heart of Rajamahendravaram, presenting hallmark 22k gold heirloom jewellery, bridal suites, and traditional artisanal artistry.
            </p>

            <div className="p-6 bg-[#FCFAF6] border border-[#E8DED0] space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-1 shrink-0" />
                <div className="text-sm">
                  <strong className="block text-[#191816]">KVR Swamy Road, Nalla Mandu St</strong>
                  <span className="text-[#30261F]/70">Beside OK Stores, Rajamahendravaram — 533101</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#E8DED0]">
                <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <a href={`tel:${data.phone}`} className="text-sm font-medium text-[#191816] hover:text-[#B89B5E]">
                  {data.displayPhone}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('nirmalaJewellers')}
                className="px-7 py-3.5 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#30261F] transition-colors"
              >
                Schedule Store Visit
              </button>

              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#30261F]/40 text-[#191816] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#191816] hover:bg-[#191816]/5 transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#30261F] shadow-2xl relative">
              <img
                src={brandImages.nirmalaJewellers}
                alt="Nirmala Jewellers gold jewelry portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D]">Authentic Hallmark</span>
                <p className="font-serif text-xl text-[#F7F3EC]">Curated for Weddings & Milestones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Category Showcase */}
        <div className="pt-16">
          <JewelleryCategoryStrip />
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { ArrowLeft, Phone, MapPin, Navigation, Calendar, Users, Sparkles } from 'lucide-react';
import { businesses } from '../data/businesses';
import { brandImages } from '../data/images';
import { HallMasonryGallery } from '../components/HallMasonryGallery';
import { CelebrationsSection } from '../components/CelebrationsSection';
import { HospitalitySection } from '../components/HospitalitySection';

interface NirmalaGrandPageProps {
  onBackHome: () => void;
  onOpenInquiry: (businessId: string, occasion?: string) => void;
}

export const NirmalaGrandPage: React.FC<NirmalaGrandPageProps> = ({
  onBackHome,
  onOpenInquiry
}) => {
  const data = businesses.nirmalaGrandFunctionHall;

  return (
    <div className="pt-28 pb-20 bg-[#30261F] text-[#F7F3EC] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Back breadcrumb */}
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4BE8D] hover:text-[#FCFAF6] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Overview</span>
        </button>

        {/* Dedicated Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#251D18]">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D] font-medium block mb-3">
              CELEBRATIONS & HOSPITALITY · MANGALAVARIPETA
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FCFAF6] tracking-tight leading-tight mb-6">
              Nirmala Grand Function Hall
            </h1>
            <p className="text-lg text-[#E8DED0]/85 leading-relaxed mb-8">
              A premier venue in Mangalavaripeta, Rajamahendravaram for gatherings, celebrations and memorable family occasions, designed for both sacred ceremonies and grand receptions.
            </p>

            <div className="p-6 bg-[#251D18] border border-[#B89B5E]/30 space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89B5E] mt-1 shrink-0" />
                <div className="text-sm">
                  <strong className="block text-[#FCFAF6] mb-1">Venue Address</strong>
                  <span className="text-[#E8DED0]/80 leading-relaxed block">{data.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#30261F]">
                <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <div className="text-sm">
                  <span className="text-xs text-[#D4BE8D] block">Direct Reservations Desk</span>
                  <a href={`tel:${data.phone}`} className="font-medium text-[#FCFAF6] hover:text-[#D4BE8D]">
                    {data.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('nirmalaGrandFunctionHall')}
                className="px-7 py-3.5 bg-[#B89B5E] text-[#191816] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D4BE8D] transition-colors"
              >
                Enquire for Event
              </button>

              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#B89B5E]/50 text-[#FCFAF6] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#D4BE8D] hover:bg-[#251D18] transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/11] overflow-hidden bg-[#251D18] shadow-2xl relative border border-[#B89B5E]/30">
              <img
                src={brandImages.functionHallExterior}
                alt="Nirmala Grand Function Hall"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4BE8D]">Mangalavaripeta</span>
                <p className="font-serif text-xl text-[#FCFAF6]">Spacious Banquet & Event Venue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery & Event Sections */}
        <div className="space-y-12 pt-12">
          <HallMasonryGallery />
          <CelebrationsSection onOpenInquiry={onOpenInquiry} />
          <HospitalitySection onOpenInquiry={onOpenInquiry} />
        </div>

      </div>
    </div>
  );
};

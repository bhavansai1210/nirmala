import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { RajahmundryMapSection } from '../components/RajahmundryMapSection';

interface LocationsPageProps {
  onBackHome: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onBackHome }) => {
  return (
    <div className="pt-28 pb-20 bg-[#191816] text-[#F7F3EC] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B5E] hover:text-[#FCFAF6] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Overview</span>
        </button>

        <RajahmundryMapSection />
      </div>
    </div>
  );
};

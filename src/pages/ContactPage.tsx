import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  onBackHome: () => void;
  onOpenInquiry: (businessId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackHome, onOpenInquiry }) => {
  return (
    <div className="pt-28 pb-20 bg-[#F7F3EC] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B5E] hover:text-[#191816] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Overview</span>
        </button>

        <ContactSection onOpenInquiry={onOpenInquiry} />
      </div>
    </div>
  );
};

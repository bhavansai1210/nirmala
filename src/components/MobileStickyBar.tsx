import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, ChevronUp } from 'lucide-react';
import { businesses } from '../data/businesses';

interface MobileStickyBarProps {
  onOpenInquiry: (businessId: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenInquiry }) => {
  const [selectedBizKey, setSelectedBizKey] = useState<string>('nirmalaJewellers');
  const [selectorOpen, setSelectorOpen] = useState<boolean>(false);

  const current = businesses[selectedBizKey] || businesses.nirmalaJewellers;

  const handleWhatsApp = () => {
    const targetPhone = current.phone.replace(/[^0-9]/g, '') || '917997994411';
    const message = encodeURIComponent(`Hello ${current.name}, I am visiting your website and would like more information.`);
    window.open(`https://wa.me/${targetPhone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#191816]/95 backdrop-blur-md border-t border-[#30261F] shadow-[0_-8px_24px_rgba(0,0,0,0.3)]">
      {/* Mini Drawer Switcher */}
      {selectorOpen && (
        <div className="p-3 bg-[#251D18] border-b border-[#30261F] space-y-1.5 animate-in slide-in-from-bottom duration-200">
          <span className="text-[10px] uppercase tracking-widest text-[#B89B5E] block px-2">
            Switch Destination:
          </span>
          {Object.values(businesses).map((b) => (
            <button
              key={b.id}
              onClick={() => {
                setSelectedBizKey(b.id);
                setSelectorOpen(false);
              }}
              className={`w-full px-3 py-2 text-left rounded text-xs flex items-center justify-between ${
                selectedBizKey === b.id
                  ? 'bg-[#30261F] text-[#D4BE8D] font-medium'
                  : 'text-[#E8DED0]/80 hover:bg-[#30261F]/50'
              }`}
            >
              <span>{b.name}</span>
              <span className="text-[10px] text-[#B89B5E]">{b.area}</span>
            </button>
          ))}
        </div>
      )}

      {/* Selector toggle bar */}
      <div className="px-4 py-1.5 flex items-center justify-between text-[11px] text-[#E8DED0]/70 border-b border-[#30261F]/50">
        <button
          onClick={() => setSelectorOpen(!selectorOpen)}
          className="flex items-center gap-1.5 text-[#D4BE8D] font-medium truncate max-w-[260px]"
        >
          <span className="truncate">{current.name}</span>
          <ChevronUp className={`w-3.5 h-3.5 transition-transform ${selectorOpen ? 'rotate-180' : ''}`} />
        </button>
        <span className="text-[10px] text-[#E8DED0]/50 shrink-0">Tap to switch</span>
      </div>

      {/* 3 Main Action Buttons adhering to 44px min touch target */}
      <div className="grid grid-cols-3 divide-x divide-[#30261F]">
        {current.phone ? (
          <a
            href={`tel:${current.phone}`}
            className="flex items-center justify-center gap-1.5 py-3 text-xs uppercase tracking-wider text-[#FCFAF6] hover:bg-[#30261F] active:bg-[#30261F] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>Call</span>
          </a>
        ) : (
          <button
            onClick={() => onOpenInquiry(current.id)}
            className="flex items-center justify-center gap-1.5 py-3 text-xs uppercase tracking-wider text-[#FCFAF6] hover:bg-[#30261F] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>Visit</span>
          </button>
        )}

        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-1.5 py-3 text-xs uppercase tracking-wider text-[#FCFAF6] hover:bg-[#30261F] active:bg-[#30261F] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#B89B5E]" />
          <span>WhatsApp</span>
        </button>

        <a
          href={current.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 text-xs uppercase tracking-wider text-[#FCFAF6] hover:bg-[#30261F] active:bg-[#30261F] transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#B89B5E]" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};

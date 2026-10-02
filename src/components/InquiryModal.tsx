import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import { businesses } from '../data/businesses';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBusinessId?: string;
  defaultOccasion?: string;
}

import { easeCurve } from '../styles/animations';

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultBusinessId = 'nirmalaGrandFunctionHall',
  defaultOccasion = ''
}) => {
  const [selectedBusiness, setSelectedBusiness] = useState<string>(defaultBusinessId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [occasion, setOccasion] = useState(defaultOccasion || 'Wedding Ceremony');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultBusinessId) {
      setSelectedBusiness(defaultBusinessId);
    }
    if (defaultOccasion) {
      setOccasion(defaultOccasion);
    }
  }, [defaultBusinessId, defaultOccasion, isOpen]);

  const currentBiz = businesses[selectedBusiness] || businesses.nirmalaGrandFunctionHall;
  const isFunctionHall = selectedBusiness === 'nirmalaGrandFunctionHall';

  const handleWhatsAppDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = encodeURIComponent(
      `Hello ${currentBiz.name},\n` +
      `My name is ${name.trim()}.\n` +
      (phone ? `Phone: ${phone}\n` : '') +
      (isFunctionHall ? `Event / Occasion: ${occasion}\n` : `Inquiry for: ${occasion}\n`) +
      (eventDate ? `Preferred Date: ${eventDate}\n` : '') +
      (notes.trim() ? `Notes: ${notes.trim()}\n` : '') +
      `I am reaching out via your Rajamahendravaram website.`
    );

    const targetPhone = currentBiz.phone.replace(/[^0-9]/g, '') || '917997994411';
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${message}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#191816]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: easeCurve }}
            className="relative max-w-xl w-full bg-[#FCFAF6] border border-[#B89B5E]/40 shadow-2xl p-6 sm:p-8 text-left my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#30261F]/60 hover:text-[#191816] transition-colors"
              aria-label="Close Inquiry Dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#B89B5E] font-medium block mb-1">
                    DIRECT ENQUIRY & RESERVATION
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#191816]">
                    Connect with our Rajamahendravaram Desks
                  </h3>
                  <p className="text-xs text-[#30261F]/70 mt-1">
                    Your request connects directly with the respective business in-charge.
                  </p>
                </div>

                {/* Destination Selector Tabs */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-[#30261F]/80 font-medium mb-2">
                    Select Destination
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {Object.values(businesses).map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => {
                          setSelectedBusiness(b.id);
                          if (b.id !== 'nirmalaGrandFunctionHall') {
                            setOccasion('Jewellery Consultation');
                          } else {
                            setOccasion('Wedding Ceremony');
                          }
                        }}
                        className={`p-2.5 text-xs text-left transition-all border ${
                          selectedBusiness === b.id
                            ? 'bg-[#191816] text-[#F7F3EC] border-[#191816] font-medium shadow-sm'
                            : 'bg-[#F7F3EC] text-[#191816]/80 border-[#E8DED0] hover:border-[#B89B5E]'
                        }`}
                      >
                        <span className="block font-serif text-sm truncate">{b.name}</span>
                        <span className="text-[10px] text-[#B89B5E] block truncate">{b.area}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleWhatsAppDispatch} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#30261F]/80 mb-1">
                        Your Name <span className="text-[#B89B5E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. S. Venkat Rao"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DED0] text-sm text-[#191816] focus:outline-none focus:border-[#B89B5E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#30261F]/80 mb-1">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98..."
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DED0] text-sm text-[#191816] focus:outline-none focus:border-[#B89B5E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#30261F]/80 mb-1">
                        {isFunctionHall ? 'Occasion / Gathering' : 'Consultation Type'}
                      </label>
                      <input
                        type="text"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        placeholder={isFunctionHall ? 'Wedding, Reception, etc.' : 'Bridal, Gold set, etc.'}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DED0] text-sm text-[#191816] focus:outline-none focus:border-[#B89B5E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#30261F]/80 mb-1">
                        {isFunctionHall ? 'Preferred Muhurtham / Date' : 'Preferred Visit Date'}
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DED0] text-sm text-[#191816] focus:outline-none focus:border-[#B89B5E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#30261F]/80 mb-1">
                      Message or Specific Inquiries
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        isFunctionHall
                          ? 'Guest count estimate or stay room inquiries...'
                          : 'Specific gold design, weight or heirloom preferences...'
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E8DED0] text-sm text-[#191816] focus:outline-none focus:border-[#B89B5E]"
                    />
                  </div>

                  {/* Direct Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#30261F] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#B89B5E]" />
                      <span>Send via WhatsApp</span>
                    </button>

                    {currentBiz.phone && (
                      <a
                        href={`tel:${currentBiz.phone}`}
                        className="w-full sm:w-auto px-5 py-3 border border-[#B89B5E] text-[#30261F] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#B89B5E] hover:text-[#191816] transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Direct</span>
                      </a>
                    )}
                  </div>
                </form>

                <div className="mt-4 pt-3 border-t border-[#E8DED0] flex items-center justify-between text-[11px] text-[#30261F]/60">
                  <span>{currentBiz.area}, Rajamahendravaram</span>
                  <a
                    href={currentBiz.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B89B5E] hover:underline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#B89B5E]/20 text-[#B89B5E] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-[#191816]">
                  Connecting with {currentBiz.name}
                </h4>
                <p className="text-xs text-[#30261F]/70 max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been formatted and opened in WhatsApp. Our desk in {currentBiz.area} will respond promptly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-[#191816] text-[#F7F3EC] text-xs uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

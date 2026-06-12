import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function SpotCard({ title, description, distance, images, mapsLink, secondaryLinks }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto transition images in carousel
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="rounded-2xl glass-panel glass-panel-hover flex flex-col overflow-hidden h-full">
      {/* Auto-Rotating Image Area */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 border-b border-slate-200/50">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={`${title} Carousel ${currentIdx}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Carousel indicators */}
        {images && images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-10 flex gap-1 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm border border-white/15">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? 'bg-brand-pink scale-110' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Distance Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold text-brand-pink flex items-center gap-1 shadow-sm">
          <MapPin className="w-3 h-3 text-brand-pink" />
          <span>{distance}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-slate-800 group-hover:text-brand-pink transition duration-200">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-semibold">
            {description}
          </p>
        </div>

        {/* Interactive map triggers */}
        <div className="pt-3 border-t border-slate-200/50 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          {secondaryLinks && secondaryLinks.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-500 font-semibold flex items-center gap-0.5">
                <Navigation className="w-3.5 h-3.5" /> Direction Links:
              </span>
              {secondaryLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-100/50 border border-slate-200 hover:border-brand-pink hover:text-brand-pink text-slate-700 transition duration-200 font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100/50 border border-slate-200 hover:border-brand-pink hover:bg-brand-pink/5 hover:text-brand-pink text-slate-700 transition duration-300 font-semibold w-full justify-center"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Directions on Map</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

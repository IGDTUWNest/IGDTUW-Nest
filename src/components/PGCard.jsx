import { MapPin, ArrowUpRight, Compass, ShieldCheck, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PGCard({ title, rent, facilities, nearby, detailsLink, distance, directionsLink, isHighlighted }) {
  // Convert facility string to array
  const facilitiesArray = facilities ? facilities.split(',').map(f => f.trim()) : [];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl glass-panel flex flex-col justify-between overflow-hidden border ${
        isHighlighted 
          ? 'border-brand-pink/50 bg-gradient-to-b from-brand-pink/[0.04] to-transparent shadow-[0_0_25px_rgba(236,72,153,0.15)]' 
          : 'border-white/10'
      }`}
    >
      {/* Top Banner Ribbon for Student Choice */}
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-pink to-brand-purple text-[10px] font-extrabold text-white px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm flex items-center gap-1 z-10">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Best Student Choice</span>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6 space-y-4">
        {/* Name and Distance */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-slate-100 pr-16 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-brand-pink font-semibold flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{distance} from IGDTUW</span>
          </p>
        </div>

        {/* Rent Price Box */}
        <div className="flex items-center gap-1 text-slate-200 font-semibold bg-white/[0.03] border border-white/5 px-3 py-2 rounded-xl w-fit">
          <DollarSign className="w-4 h-4 text-green-400" />
          <span className="text-sm">Rent:</span>
          <span className="text-sm font-bold text-green-400">{rent}</span>
        </div>

        {/* Nearby / Location Details */}
        <div className="text-xs text-slate-400 leading-relaxed space-y-1">
          <span className="font-bold text-slate-300">📍 Nearby / Locality:</span>
          <p>{nearby}</p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-1.5 pt-2">
          <span className="text-[10px] text-brand-pink/80 font-bold uppercase tracking-wider">
            Facilities Provided
          </span>
          <div className="flex flex-wrap gap-1">
            {facilitiesArray.map((fac, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-medium hover:border-brand-pink/30 hover:bg-brand-pink/5 transition duration-150"
              >
                {fac}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer Button Group */}
      <div className="px-6 pb-6 pt-3 border-t border-white/5 flex gap-2">
        {detailsLink && (
          <a
            href={detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs py-2.5 rounded-xl border border-white/10 hover:border-brand-pink hover:text-brand-pink hover:bg-brand-pink/5 text-slate-300 font-semibold transition duration-300 flex items-center justify-center gap-1"
          >
            <span>Visit Listing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}

        <a
          href={directionsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + ' Delhi')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs py-2.5 rounded-xl bg-gradient-to-r from-brand-pink/15 to-brand-purple/15 border border-brand-pink/30 hover:border-brand-pink hover:bg-brand-pink/15 text-brand-pink font-semibold transition duration-300 flex items-center justify-center gap-1.5"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Get Location</span>
        </a>
      </div>
    </motion.div>
  );
}

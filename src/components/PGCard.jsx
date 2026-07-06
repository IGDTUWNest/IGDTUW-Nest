import { MapPin, ArrowUpRight, Compass, ShieldCheck, DollarSign, Phone, Mail, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PGCard({ title, rent, facilities, nearby, detailsLink, distance, directionsLink, isHighlighted, matchScore, phone, email, isUnverified }) {
  // Convert facility string to array
  const facilitiesArray = facilities ? facilities.split(',').map(f => f.trim()) : [];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl glass-panel dark:dark-glass-panel flex flex-col justify-between overflow-hidden border h-full transition-colors duration-300 ${
        isHighlighted 
          ? 'border-brand-pink/40 bg-gradient-to-b from-brand-pink/10 to-transparent shadow-[0_8px_30px_rgba(236,72,153,0.06)]' 
          : 'border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-slate-900/60'
      }`}
    >
      {/* Match Score Badge */}
      {matchScore !== undefined && (
        <div className="absolute top-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-[10px] font-extrabold text-white px-3 py-1 rounded-br-xl uppercase tracking-wider shadow-sm flex items-center gap-1 z-10">
          <span>🔥 {matchScore}% Match</span>
        </div>
      )}

      {/* Top Banner Ribbon for Student Choice */}
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-pink to-brand-purple text-[10px] font-extrabold text-white px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm flex items-center gap-1 z-10">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Best Student Choice</span>
        </div>
      )}

      {/* Top Banner Ribbon for Unverified Listings */}
      {isUnverified && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-[10px] font-extrabold text-white px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm flex items-center gap-1 z-10">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Pending Verification</span>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6 space-y-4">
        {/* Name and Distance */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white pr-16 leading-snug font-extrabold">
            {title}
          </h3>
          <p className="text-xs text-brand-pink dark:text-pink-400 font-semibold flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{distance} from IGDTUW</span>
          </p>
        </div>

        {/* Rent Price Box */}
        <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold bg-slate-100/50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-3 py-2 rounded-xl w-fit">
          <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-sm">Rent:</span>
          <span className="text-sm font-bold text-green-600 dark:text-green-400">{rent}</span>
        </div>

        {/* Nearby / Location Details */}
        <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed space-y-1">
          <span className="font-bold text-slate-800 dark:text-white">📍 Nearby / Locality:</span>
          <p>{nearby}</p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-1.5 pt-2">
          <span className="text-[10px] text-brand-pink/80 dark:text-pink-400 font-bold uppercase tracking-wider">
            Facilities Provided
          </span>
          <div className="flex flex-wrap gap-1">
            {facilitiesArray.map((fac, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-100/50 dark:bg-slate-850 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-medium hover:border-brand-pink/30 dark:hover:border-brand-pink/50 hover:bg-brand-pink/5 transition duration-150"
              >
                {fac}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info (if available) */}
        {(phone || email) && (
          <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-200/50 dark:border-white/10 space-y-1.5">
            <span className="text-[10px] text-brand-pink/80 dark:text-pink-400 font-bold uppercase tracking-wider block">
              Contact Information
            </span>
            <div className="space-y-1">
              {phone && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Phone className="w-3 h-3 text-brand-pink/70 dark:text-pink-400/70" />
                  <a href={`tel:${phone.split('/')[0].trim()}`} className="hover:underline font-semibold text-slate-600 dark:text-slate-300">
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail className="w-3 h-3 text-brand-purple/70 dark:text-purple-400/70" />
                  <a href={`mailto:${email}`} className="hover:underline font-semibold text-slate-600 dark:text-slate-300">
                    {email}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer Button Group */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-200/50 dark:border-white/10 flex gap-2">
        {detailsLink && (
          <a
            href={detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand-pink hover:text-brand-pink hover:bg-brand-pink/5 text-slate-600 dark:text-slate-300 font-bold transition duration-300 flex items-center justify-center gap-1"
          >
            <span>Visit Listing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}

        <a
          href={directionsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + ' Delhi')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs py-2.5 rounded-xl bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 dark:from-brand-pink/20 dark:to-brand-purple/20 border border-brand-pink/30 dark:border-brand-pink/40 hover:border-brand-pink hover:bg-brand-pink/20 text-brand-pink dark:text-pink-400 font-bold transition duration-300 flex items-center justify-center gap-1.5"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Get Location</span>
        </a>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, Calendar, DollarSign, ArrowLeft, ShieldAlert, Sparkles, 
  CheckCircle, ExternalLink, Bookmark, Filter, Flame, Clock, Star, Tag 
} from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

export default function Hackathons() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // Mock countdown state metrics
  const countdown = { days: 12, hours: 8, mins: 24 };

  const filterCategories = ['All', 'Women Only', 'National', 'Virtual'];

  const hacks = [
    {
      id: 1,
      title: "Walmart Sparkathon",
      type: "National",
      isFeatured: true,
      date: "July 15 – August 16, 2026",
      prize: "An integrated stipend package of ₹2.9 Lakhs + Internships + PPI/FTE Opportunities",
      deadline: "Closes mid-August",
      eligibility: "Engineering undergrads (specifically targeting women developers)",
      highlights: "Direct pathways to join the elite Walmart Global Tech development center. Highly strategic for landing pre-placement interviews.",
      score: "9.8/10",
      difficulty: "Intermediate",
      diffColor: "text-orange-600 bg-orange-50 border-orange-200/60",
      diffDot: "bg-orange-500",
      tags: ["SDE", "Open Innovation", "Diversity Drive"],
      logo: "🏪",
      unstopLink: "https://unstop.com",
      officialLink: "https://walmart.com",
      color: "from-purple-500 via-indigo-400 to-blue-500",
      glow: "group-hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.12)]"
    },
    {
      id: 2,
      title: "WWT Women-Only Hackathon",
      type: "Virtual",
      isFeatured: false,
      date: "July 13, 2026",
      prize: "₹3,00,000 cash rewards pool + mentorship tiers",
      deadline: "Register by June 30",
      eligibility: "Women Undergrads Only",
      highlights: "Phenomenal networking avenues with international software leaders via virtual curated breakout rooms.",
      score: "8.9/10",
      difficulty: "Beginner Friendly",
      diffColor: "text-emerald-700 bg-emerald-50 border-emerald-200/60",
      diffDot: "bg-emerald-500",
      tags: ["Web Dev", "Networking", "Core Coding"],
      logo: "💻",
      unstopLink: "https://unstop.com",
      officialLink: "https://wwt.com",
      color: "from-pink-500 via-rose-400 to-purple-500",
      glow: "group-hover:shadow-[0_25px_50px_-12px_rgba(244,63,94,0.12)]"
    },
    {
      id: 3,
      title: "Delhi Industrial Ideathon",
      type: "Hybrid",
      isFeatured: false,
      date: "July – August 2026",
      prize: "Massive ₹80,00,000 corporate incubation pool setup",
      deadline: "To be announced soon",
      eligibility: "Teams must include at least one female engineer",
      highlights: "Direct incubation runways facilitated by the Delhi Government paired alongside leading tech manufacturing facilities.",
      score: "9.1/10",
      difficulty: "Advanced",
      diffColor: "text-rose-600 bg-rose-50 border-rose-200/60",
      diffDot: "bg-rose-500",
      tags: ["Hardware/AI", "Incubation", "Govt Scheme"],
      logo: "🏛️",
      unstopLink: "https://unstop.com",
      officialLink: "https://delhi.gov.in",
      color: "from-amber-500 via-orange-400 to-yellow-500",
      glow: "group-hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.12)]"
    }
  ];

  const handleBookmark = (id, e) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(prev => prev.filter(item => item !== id));
    } else {
      setBookmarkedIds(prev => [...prev, id]);
    }
  };

  const filteredHacks = hacks.filter(hack => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Women Only') return hack.eligibility.toLowerCase().includes('women') || hack.eligibility.toLowerCase().includes('girl');
    return hack.type === activeFilter;
  });

  const featuredOpportunity = hacks.find(h => h.isFeatured);
  const normalOpportunities = filteredHacks.filter(h => !h.isFeatured || activeFilter !== 'All');

  return (
    <div className="relative min-h-screen pt-28 pb-24 bg-gradient-to-br from-[#E2D9F5] via-[#F5DDF0] to-[#DBE7FC] overflow-hidden flex flex-col items-center select-none text-slate-800">
      
      {/* Background Luxury Blur Orbs Synchronized with Updates canvas */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: `
            radial-gradient(circle at 12% 18%, rgba(244, 63, 94, 0.09), transparent 45%),
            radial-gradient(circle at 88% 82%, rgba(168, 85, 247, 0.08), transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03), transparent 60%)
          `
        }}
      />
      <AnimatedBg />

      {/* Hero Ambient Accents */}
      <div className="absolute top-16 left-[8%] w-80 h-80 bg-pink-200/20 blur-3xl rounded-full animate-pulse pointer-events-none z-0" />
      <div className="absolute top-24 right-[10%] w-72 h-72 bg-purple-200/20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Tiny Background Twinkles */}
      <div className="absolute top-36 left-1/4 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-ping pointer-events-none" />
      <div className="absolute top-48 right-1/4 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full z-10 space-y-12 flex-1 flex flex-col justify-center">
        
        {/* --- Back Link Header Node --- */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/updates')}
          className="flex items-center gap-1.5 text-xs font-black text-slate-500 hover:text-pink-600 transition duration-300 focus:outline-none w-fit bg-white border border-slate-200/60 px-4 py-2 rounded-xl hover:border-pink-200 shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Updates</span>
        </motion.button>

        {/* --- Header Section Block --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/40 pb-6">
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/90 backdrop-blur-xl text-pink-600 text-[10px] tracking-[0.25em] border border-pink-200/60 px-4 py-1.5 rounded-full font-black uppercase w-fit flex items-center gap-2 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Career Acceleration Hub</span>
            </motion.div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600">Hackathons</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl leading-relaxed">
              National challenges, elite code sprints, and ideathons vetted meticulously by seniors. Build your engineering portfolio early!
            </p>
          </div>
        </div>

        {/* --- Interactive Pill Filter Chips --- */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 flex-shrink-0" />
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 relative flex-shrink-0 ${
                activeFilter === cat
                  ? 'text-white border-transparent bg-slate-950 shadow-sm'
                  : 'text-slate-500 bg-white/60 border-slate-200/60 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeFilter === cat && (
                <motion.div 
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-slate-950 rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- 🔥 FEATURED OPPORTUNITY PREMIUM SECTION --- */}
        {featuredOpportunity && activeFilter === 'All' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-slate-400 tracking-widest uppercase">
              <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Premium Spotlight</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-[32px] p-[2px] bg-gradient-to-r ${featuredOpportunity.color} shadow-[0_20px_40px_rgba(168,85,247,0.06)] overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white/95 rounded-[32px]" />
              
              <div className="relative rounded-[31px] bg-white/70 backdrop-blur-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6 justify-between items-start border border-white/40 group-hover:bg-rose-50/40 transition-colors duration-500">
                <div className="space-y-4 flex-1">
                  
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-slate-900 text-white text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-xs">
                      {featuredOpportunity.type}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-bold flex items-center gap-1.5 ${featuredOpportunity.diffColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${featuredOpportunity.diffDot}`} />
                      {featuredOpportunity.difficulty}
                    </span>
                    <span className="bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-purple-400 text-purple-400" /> Score: {featuredOpportunity.score}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-2 rounded-2xl bg-white border border-slate-200/60 shadow-xs">{featuredOpportunity.logo}</span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {featuredOpportunity.title}
                      </h2>
                    </div>
                    <button 
                      onClick={(e) => handleBookmark(featuredOpportunity.id, e)}
                      className="p-2 rounded-xl bg-white border border-slate-200/80 text-slate-400 hover:text-pink-500 shadow-2xs transition-colors duration-200"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(featuredOpportunity.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
                    </button>
                  </div>

                  {/* Core Params Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-600">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <div>
                        <span className="block text-[9px] font-bold uppercase text-slate-400 leading-none mb-0.5">Timeline</span>
                        <span className="text-slate-800 font-bold">{featuredOpportunity.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <div>
                        <span className="block text-[9px] font-bold uppercase text-slate-400 leading-none mb-0.5">Rewards & Perks</span>
                        <span className="text-emerald-600 font-black">{featuredOpportunity.prize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Senior Review Callout */}
                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/60 text-xs text-slate-600 leading-relaxed font-medium">
                    💡 <span className="font-bold text-slate-800">Senior Insight:</span> "{featuredOpportunity.highlights}"
                  </div>

                  {/* Technical Tags Stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {featuredOpportunity.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" /> #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Left Live Countdown Action Card Block */}
                <div className="w-full lg:w-64 p-5 rounded-2xl bg-slate-950 text-white flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-black tracking-widest uppercase">
                      <Clock className="w-3 h-3 text-pink-400 animate-pulse" />
                      <span>Closes In</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                      <div>
                        <span className="block text-base font-black tracking-tight text-white">{countdown.days}d</span>
                        <span className="text-[8px] text-slate-500 uppercase font-black">Days</span>
                      </div>
                      <span className="text-slate-600 font-black">:</span>
                      <div>
                        <span className="block text-base font-black tracking-tight text-pink-400">{countdown.hours}h</span>
                        <span className="text-[8px] text-slate-500 uppercase font-black">Hours</span>
                      </div>
                      <span className="text-slate-600 font-black">:</span>
                      <div>
                        <span className="block text-base font-black tracking-tight text-white">{countdown.mins}m</span>
                        <span className="text-[8px] text-slate-500 uppercase font-black">Mins</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a 
                      href={featuredOpportunity.unstopLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-center font-black text-[11px] tracking-wider uppercase shadow-md hover:shadow-pink-500/20 transition duration-300 flex items-center justify-center gap-1 hover:-translate-y-0.5 transform"
                    >
                      Register on Unstop <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href={featuredOpportunity.officialLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white text-center font-bold text-[11px] tracking-wide transition duration-200 block"
                    >
                      Official Website
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}

        {/* --- MAIN OPPORTUNITIES LIST GRID CANVAS --- */}
        <div className="space-y-4">
          {normalOpportunities.length > 0 && activeFilter === 'All' && (
            <div className="text-xs font-black text-slate-400 tracking-widest uppercase pt-2">
              All Curated Opportunities
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {normalOpportunities.map((hack, idx) => (
                <motion.div
                  key={hack.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.015,
                    transition: { type: "spring", stiffness: 400, damping: 22 }
                  }}
                  className={`group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 shadow-[0_12px_35px_-12px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06)] bg-transparent ${hack.glow}`}
                >
                  {/* Subtle Glow Outer Boundaries Layer */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${hack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                  <div className="absolute inset-0 bg-white/95 rounded-3xl transition-all duration-500 group-hover:opacity-0" />

                  {/* Card Main Interior Body */}
                  <div className="relative h-full rounded-[23px] bg-white/40 backdrop-blur-2xl p-5 flex flex-col justify-between border border-white/60 group-hover:bg-rose-50/70 group-hover:border-rose-200/50 transition-all duration-500 space-y-5">
                    
                    <div className="space-y-3.5 relative z-10">
                      {/* Badge Metadata Header Row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="bg-slate-100 border border-slate-200 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider text-slate-600 group-hover:bg-white transition-colors">
                            {hack.type}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full border text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 ${hack.diffColor} group-hover:bg-white transition-colors`}>
                            {hack.difficulty}
                          </span>
                        </div>
                        <button 
                          onClick={(e) => handleBookmark(hack.id, e)}
                          className="p-1.5 rounded-lg bg-white border border-slate-200/60 text-slate-400 hover:text-pink-500 shadow-3xs transition-colors"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.includes(hack.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
                        </button>
                      </div>

                      {/* Main Header Data */}
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl p-1.5 rounded-xl bg-white border border-slate-200/50 shadow-3xs">{hack.logo}</span>
                        <div className="space-y-0.5">
                          <h3 className="font-black text-base text-slate-900 group-hover:text-pink-600 transition-colors duration-300 line-clamp-1">
                            {hack.title}
                          </h3>
                          <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md w-fit block border border-purple-100/60">
                            ⭐ Hub Score: {hack.score}
                          </span>
                        </div>
                      </div>

                      {/* Compact Details Column Lists */}
                      <div className="space-y-2 pt-1 text-[11px] font-semibold text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span className="text-slate-800 line-clamp-1">{hack.date}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-emerald-600 font-bold line-clamp-2">{hack.prize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                          <span className="text-slate-500 line-clamp-1">{hack.eligibility}</span>
                        </div>
                      </div>

                      {/* Micro Embedded Insight Panel */}
                      <div className="p-3 rounded-xl bg-white/60 border border-slate-200/40 text-[11px] text-slate-500 leading-relaxed group-hover:bg-white transition-colors">
                        <span className="font-bold text-slate-700">Insight:</span> "{hack.highlights}"
                      </div>
                    </div>

                    {/* Action Execution Footnotes */}
                    <div className="pt-3 border-t border-slate-200/40 group-hover:border-rose-200/50 flex items-center justify-between gap-2 relative z-10">
                      <div className="flex flex-wrap gap-1">
                        {hack.tags.slice(0, 2).map(t => (
                          <span key={t} className="text-[9px] font-bold text-slate-400">#{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <a 
                          href={hack.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold text-slate-400 hover:text-slate-700 transition-colors"
                        >
                          Site
                        </a>
                        <a 
                          href={hack.unstopLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-slate-950 text-white font-black text-[10px] tracking-wide uppercase flex items-center gap-1 transition shadow-xs hover:bg-pink-600"
                        >
                          Register <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Fallback Screen Node for empty search array */}
            {normalOpportunities.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12 p-6 bg-white/40 border border-dashed border-slate-200 rounded-3xl"
              >
                <ShieldAlert className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs text-slate-400 font-bold">No active hackathons found for your specified filter option.</p>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
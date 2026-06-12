import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Calendar, DollarSign, ArrowLeft, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

export default function Hackathons() {
  const navigate = useNavigate();

  const hacks = [
    {
      title: "WWT Women-Only Hackathon",
      type: "Virtual",
      date: "July 13, 2025",
      prize: "₹3,00,000",
      deadline: "Register by June 30",
      eligibility: "Women Undegrads Only",
      highlights: "Great networking opportunity with virtual breakout sessions.",
      color: "border-brand-pink/35 shadow-[0_0_15px_rgba(236,72,153,0.08)] bg-brand-pink/[0.02]"
    },
    {
      title: "Walmart Sparkathon",
      type: "National",
      date: "Application Period: July 15 – August 16",
      prize: "₹2.9 Lakhs + Internships + PPI/FTE Opportunities",
      deadline: "Closes mid-August",
      eligibility: "Engineering undergrads (specifically targeting women developers)",
      highlights: "Direct pathways to join the Walmart Global Tech development center.",
      color: "border-brand-purple/35 shadow-[0_0_15px_rgba(168,85,247,0.08)] bg-brand-purple/[0.02]"
    },
    {
      title: "Delhi Industrial Ideathon",
      type: "Hybrid",
      date: "July – August 2025",
      prize: "₹80,00,000 Prize Pool",
      deadline: "To be announced",
      eligibility: "Teams must include at least one girl",
      highlights: "Incubation support by Delhi Government and top manufacturing industries.",
      color: "border-emerald-500/35 shadow-[0_0_15px_rgba(16,185,129,0.08)] bg-emerald-500/[0.02]"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full z-10 space-y-8 flex-1 flex flex-col justify-center">
        {/* Back Link Header */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/updates')}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-pink transition duration-200 focus:outline-none w-fit bg-white border border-slate-200 px-3 py-1.5 rounded-xl hover:border-brand-pink/30 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Updates</span>
        </motion.button>

        {/* Header Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 flex items-center gap-2 tracking-tight">
            <Sparkles className="w-8 h-8 text-brand-pink animate-pulse" />
            <span>Upcoming Hackathons</span>
          </h1>
          <p className="text-sm text-slate-600 font-semibold max-w-xl leading-relaxed">
            Tech events, national coding challenges, and ideathons verified by seniors. Build your portfolios early!
          </p>
        </div>

        {/* Hackathon timeline Stack */}
        <div className="space-y-6 pt-4 flex-1">
          {hacks.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className={`rounded-2xl border p-6 glass-panel transition-all duration-300 relative ${hack.color}`}
            >
              {/* Event category tag bubble */}
              <div className="absolute top-6 right-6 bg-slate-100 border border-slate-200 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-lg text-slate-600">
                {hack.type}
              </div>

              <div className="space-y-4">
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-800 pr-20">
                  {hack.title}
                </h3>

                {/* Details grid list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  {/* Timeline Date */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-brand-pink border border-slate-200">
                      <Calendar className="w-4 h-4 text-brand-pink" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold block uppercase">Date Timeline</span>
                      <span className="font-bold text-slate-700">{hack.date}</span>
                    </div>
                  </div>

                  {/* Prize pool */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-green-500 border border-slate-200">
                      <DollarSign className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold block uppercase">Prize Pool & Perks</span>
                      <span className="font-bold text-green-600">{hack.prize}</span>
                    </div>
                  </div>

                  {/* Registration deadline */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-amber-500 border border-slate-200">
                      <ShieldAlert className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold block uppercase">Registration Deadline</span>
                      <span className="font-bold text-amber-600">{hack.deadline}</span>
                    </div>
                  </div>

                  {/* Eligibility criteria */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-brand-purple border border-slate-200">
                      <CheckCircle className="w-4 h-4 text-brand-purple" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold block uppercase">Eligibility Requirements</span>
                      <span className="font-bold text-slate-700">{hack.eligibility}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights paragraph block */}
                <p className="text-xs text-slate-500 border-t border-slate-200/50 pt-3 mt-3 font-semibold leading-relaxed">
                  💡 <span className="font-bold text-slate-700">Senior Note:</span> {hack.highlights}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

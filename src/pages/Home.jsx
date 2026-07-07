import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Compass, Bell, Play, ArrowRight, Video, Sparkles, Users, Mail } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg'; 

// --- SVG Components ---
const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsApp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.486 4.793 1.487 5.393 0 9.778-4.383 9.781-9.778.003-2.614-1.011-5.074-2.859-6.925C16.467 2.086 14.01 1.07 11.39 1.07c-5.385 0-9.77 4.381-9.774 9.776-.002 1.83.473 3.568 1.378 5.04L2.01 21.93l6.16-1.616-.523-.314zm11.391-7.146c-.305-.152-1.806-.89-2.083-.99-.278-.101-.48-.152-.681.152-.2.304-.778.99-.953 1.193-.175.203-.35.228-.655.076-.305-.152-1.288-.475-2.454-1.516-.907-.808-1.519-1.807-1.697-2.11-.177-.305-.019-.47.133-.621.137-.137.305-.355.457-.533.152-.178.203-.304.305-.508.102-.203.05-.381-.026-.533-.076-.152-.681-1.643-.933-2.249-.245-.589-.494-.509-.681-.518-.175-.008-.377-.01-.58-.01-.203 0-.533.076-.812.381-.278.305-1.062 1.041-1.062 2.54 0 1.498 1.09 2.946 1.242 3.149.152.203 2.146 3.277 5.198 4.595.726.313 1.291.5 1.733.64.73.232 1.394.2 1.919.122.585-.087 1.806-.738 2.059-1.452.254-.714.254-1.325.178-1.452-.076-.127-.278-.203-.584-.356z" />
  </svg>
);

// --- Individual Dynamic 3D Card ---
function InteractiveCard({ card, itemVariants }) {
  const Icon = card.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);
  const spotlightX = useTransform(x, [-100, 100], ["0%", "100%"]);
  const spotlightY = useTransform(y, [-100, 100], ["0%", "100%"]);

  function handleMouseMove(event) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div variants={itemVariants} className="h-full" style={{ perspective: 1100 }}>
      <Link
        to={card.path}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative flex flex-col justify-between p-6 h-64 rounded-3xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ${card.glow}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-30 rounded-3xl pointer-events-none transition-opacity group-hover:opacity-50`} />
        
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
          style={{
            background: useTransform([spotlightX, spotlightY], (latest) => `radial-gradient(circle 130px at ${latest[0]} ${latest[1]}, rgba(255,255,255,0.45), transparent)`)
          }}
        />

        <div className="space-y-4 relative z-10" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
          <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-md transition duration-300 ${card.accentColor}`} style={{ transform: "translateZ(15px)" }}>
            <Icon className="w-5 h-5 stroke-[2.5]" />
          </div>
          
          <div className="space-y-1.5">
            <h3 className="font-black text-xl text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition duration-200 tracking-tight">
              {card.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-bold">
              {card.description}
            </p>
          </div>
        </div>

        <div className="mt-4 w-fit px-4 py-2 rounded-xl bg-slate-950 dark:bg-slate-800 text-white dark:text-slate-200 text-[11px] font-black uppercase tracking-wider shadow-md group-hover:bg-pink-600 dark:group-hover:bg-pink-500 border border-transparent dark:border-white/10 transition-all duration-300 flex items-center gap-1.5 relative z-10" style={{ transform: "translateZ(45px)" }}>
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}

// --- Main Layout Component ---
export default function Home() {
  const cards = [
    { title: 'Find a Nest', description: 'PGs & Flats reviewed by students with honest details.', path: '/find-nest', icon: HomeIcon, bgGradient: 'from-pink-500/20 via-rose-500/10 to-transparent', accentColor: 'text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-900 bg-pink-50 dark:bg-pink-950/30', glow: 'hover:shadow-[0_30px_50px_rgba(219,39,119,0.2)] dark:hover:shadow-[0_30px_50px_rgba(219,39,119,0.4)] hover:border-pink-300 dark:hover:border-pink-800' },
    { title: 'Student Spotlights', description: 'Our comfort cafés, chai corners, markets & sightseeing.', path: '/student-spot', icon: Compass, bgGradient: 'from-purple-500/20 via-indigo-500/10 to-transparent', accentColor: 'text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/30', glow: 'hover:shadow-[0_30px_50px_rgba(147,51,234,0.2)] dark:hover:shadow-[0_30px_50px_rgba(147,51,234,0.4)] hover:border-purple-300 dark:hover:border-purple-800' },
    { title: 'Campus Life', description: 'Societies, student hubs & our campus photo dump.', path: '/campus-life', icon: Play, bgGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent', accentColor: 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30', glow: 'hover:shadow-[0_30px_50px_rgba(37,99,235,0.2)] dark:hover:shadow-[0_30px_50px_rgba(37,99,235,0.4)] hover:border-blue-300 dark:hover:border-blue-800' },
    { title: 'Updates & Tips', description: 'Seniors real talk, IGDTUW hacks & notices.', path: '/updates', icon: Bell, bgGradient: 'from-amber-500/20 via-orange-500/10 to-transparent', accentColor: 'text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30', glow: 'hover:shadow-[0_30px_50px_rgba(217,119,6,0.2)] dark:hover:shadow-[0_30px_50px_rgba(217,119,6,0.4)] hover:border-amber-300 dark:hover:border-amber-800' }
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-12 overflow-hidden flex flex-col items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backimg.png')" }}>
      {/* High Contrast Background Glass Overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-[12px] -z-10 bg-gradient-to-b from-white/90 dark:from-slate-950/90 via-slate-50/80 dark:via-slate-900/80 to-purple-50/70 dark:to-[#0c0919]/70" />
      <AnimatedBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center gap-4">
        
        {/* Hero Title Block */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center py-6 flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/90 dark:border-white/10 bg-white dark:bg-slate-900 p-1 shadow-2xl">
            <img src="/WhatsApp Image 2025-04-10 at 11.58.50.jpeg" alt="Nest Logo" className="w-full h-full object-contain" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Welcome to IGDTUW Nest
            </h1>
            <div className="inline-block px-6 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-md backdrop-blur-md">
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-extrabold tracking-wide">
                Your guide to comfort, community & campus life. Built for students, by students! 💗
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div variants={{hidden: {opacity:0}, show: {opacity:1, transition: {staggerChildren: 0.1}}}} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {cards.map((card, idx) => (
            <InteractiveCard key={idx} card={card} itemVariants={{hidden: { opacity: 0, y: 30, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 16 } }}} />
          ))}
        </motion.div>

        {/* --- FIXED: BRAND NEW HIGH CONTRAST CINEMATIC THEATRE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-10 p-8 rounded-[2.5rem] bg-slate-950/95 border border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden group"
        >
          {/* Futuristic ambient background glows inside the dark box */}
          <div className="absolute top-0 left-1/4 w-80 h-40 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Glowing Header Row - crisp high contrast white typography */}
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4 relative z-10">
            <div className="flex items-center gap-3.5 text-center md:text-left flex-col md:flex-row">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(219,39,119,0.4)]">
                <Video className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                  Explore IGDTUW in Motion
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide mt-0.5">
                  Walk through the campus corridors and student experiences
                </p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-pink-400 text-xs font-black uppercase tracking-widest shadow-inner">
              <Sparkles className="w-3.5 h-3.5" /> Live Campus Vlogs
            </div>
          </div>

          {/* Upgraded Modern Video Framings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { id: "y6vGAHNUp3E?si=cDu0F2HSgLHsHslC", title: "IGDTUW Tour 1" },
              { id: "IEkVnxdJ9p8?si=ToRHuAtWBNxxCiet", title: "IGDTUW Tour 2" },
              { id: "mO4qIh94AOg?si=La7HtStoOZ5_o2wp", title: "IGDTUW Campus Walkthrough" }
            ].map((video, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-video bg-slate-900 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group/video hover:border-pink-500/50 transition-all duration-300">
                {/* Neon shadow overlay underneath video frame edges */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-2xl z-20" />
                <iframe
                  className="absolute inset-0 w-full h-full border-0 grayscale-[15%] group-hover/video:grayscale-0 transition-all duration-500 z-10"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- FIXED: COMPLETELY REDESIGNED PREMIUM NEON COMMUNITIES BANNER --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="my-6 rounded-[2rem] bg-white dark:bg-slate-900/80 border-2 border-slate-900 dark:border-white/10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden"
        >
          {/* Subtle colorful layout grid meshes behind content to make it pop */}
          <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-44 h-44 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left relative z-10 w-full lg:w-auto">
            {/* High Impact Joined Icon Design Block */}
            <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg border-2 border-white scale-105">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-lg border-2 border-white">
                <WhatsApp className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED] flex items-center justify-center text-white shadow-lg border-2 border-white">
                <Mail className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400 font-black text-[10px] uppercase tracking-widest border border-purple-200 dark:border-purple-900">Hub</span>
                <h4 className="font-black text-xl text-slate-900 dark:text-white tracking-tight">
                  Join our Student Communities!
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold max-w-xl leading-normal">
                Stay in the loop with PG alerts, freshers updates, & campus cute chaos. Built exclusively for seniors & peers.
              </p>
            </div>
          </div>

          {/* Premium Modern Geometric Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
            <a
              href="https://www.instagram.com/igdtuw.nest/?igsh=MTZreWZ4aXk5MGdtaw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn px-6 py-3.5 rounded-xl bg-slate-950 dark:bg-slate-800 text-white dark:text-slate-200 text-xs font-black uppercase tracking-widest shadow-md hover:bg-pink-600 dark:hover:bg-pink-500 hover:shadow-[0_10px_20px_rgba(219,39,119,0.3)] transition-all duration-300 text-center flex items-center justify-center gap-2 border-b-4 border-slate-800 dark:border-slate-700"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover/btn:text-white" />
              <span>follow @igdtuw.nest</span>
            </a>
            <a
              href="https://chat.whatsapp.com/L0eSLMMAmfGFJ3xafvTREc"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn px-6 py-3.5 rounded-xl bg-emerald-600 text-white text-xs font-black uppercase tracking-widest shadow-md hover:bg-emerald-500 hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-300 text-center flex items-center justify-center gap-2 border-b-4 border-emerald-800"
            >
              <Users className="w-4 h-4 text-emerald-100 group-hover/btn:scale-110 transition-transform" />
              <span>join WhatsApp Group</span>
            </a>
            <a
              href="mailto:igdtuwnest@gmail.com"
              className="group/btn px-6 py-3.5 rounded-xl bg-purple-600 text-white text-xs font-black uppercase tracking-widest shadow-md hover:bg-purple-550 hover:shadow-[0_10px_20px_rgba(124,58,237,0.3)] transition-all duration-300 text-center flex items-center justify-center gap-2 border-b-4 border-purple-800"
            >
              <Mail className="w-4 h-4 text-purple-200 group-hover/btn:scale-110 transition-transform" />
              <span>Email Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
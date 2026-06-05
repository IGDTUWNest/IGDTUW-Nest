import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, MapPin, Compass, Bell, Play } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import AnimatedBg from '../components/AnimatedBg';

export default function Home() {
  const cards = [
    {
      title: 'Find a Nest',
      description: 'PGs & Flats reviewed by students with honest details.',
      path: '/find-nest',
      icon: HomeIcon,
      color: 'from-pink-500/20 to-rose-500/20 text-brand-pink border-brand-pink/20',
      glow: 'shadow-[0_0_20px_rgba(236,72,153,0.15)]'
    },
    {
      title: 'Student Spotlights',
      description: 'Our comfort cafés, chai corners, markets & sightseeing.',
      path: '/student-spot',
      icon: Compass,
      color: 'from-purple-500/20 to-indigo-500/20 text-brand-purple border-brand-purple/20',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]'
    },
    {
      title: 'Campus Life',
      description: 'Societies, student hubs & our campus photo dump.',
      path: '/campus-life',
      icon: Play,
      color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-400/20',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]'
    },
    {
      title: 'Updates & Tips',
      description: 'Seniors real talk, IGDTUW hacks & notices.',
      path: '/updates',
      icon: Bell,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-400/20',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        {/* Header Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-6 sm:py-10 flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 rounded-2xl overflow-hidden border border-brand-pink/30 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
            <img 
              src="/WhatsApp Image 2025-04-10 at 11.58.50.jpeg" 
              alt="Nest Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
              Welcome to IGDTUW Nest
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto font-medium">
              Your guide to comfort, community & campus life. Built for students, by students! 💗
            </p>
          </div>
        </motion.div>

        {/* Dashboard Grid Navigation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  to={card.path}
                  className={`group relative flex flex-col justify-between p-6 h-56 rounded-2xl glass-panel border hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 ${card.color} ${card.glow}`}
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-pink/10 transition duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-slate-100 group-hover:text-brand-pink transition duration-200">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-brand-pink/80 group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* YouTube Video Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 space-y-6"
        >
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stroke uppercase tracking-wider">
              Explore IGDTUW in Motion
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold">
              Walk through the campus corridors and student experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/y6vGAHNUp3E?si=cDu0F2HSgLHsHslC"
                title="IGDTUW Tour 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/IEkVnxdJ9p8?si=ToRHuAtWBNxxCiet"
                title="IGDTUW Tour 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Instagram Follow Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-8 rounded-2xl bg-gradient-to-r from-brand-pink/20 to-brand-purple/20 border border-brand-pink/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(236,72,153,0.08)]"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-pink">
              <Instagram className="w-5 h-5 text-brand-pink" />
            </div>
            <div className="text-center sm:text-left space-y-0.5">
              <h4 className="font-bold text-sm text-slate-100">
                Join our Instagram Family!
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                Stay in the loop with PG alerts, freshers updates, & campus cute chaos.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/igdtuw.nest/?igsh=MTZreWZ4aXk5MGdtaw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-brand-pink text-white text-xs font-bold shadow-[0_4px_12px_rgba(236,72,153,0.3)] hover:bg-brand-pink/90 hover:scale-102 transition duration-300 w-full sm:w-auto text-center"
          >
            follow @igdtuw.nest
          </a>
        </motion.div>
      </div>
    </div>
  );
}

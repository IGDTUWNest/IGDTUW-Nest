import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, X, Sparkles, MessageSquare, Lightbulb, Heart, BookOpen, Award, Compass } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

export default function Updates() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [featuredLikes, setFeaturedLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const featuredTip = {
    author: "Aakriti Rajhans",
    text: "Whatever sem you have Physics and Maths in, study them with full shiddat — you really don’t want a bad grade haunting you later. Be cautious on the metro; not everyone you’ll meet is kind. Don’t let the pressure of academics or placements burn you out. Try connecting with different people — you might just find your homies here. Work hard, stay grateful for every opportunity, and be responsive; it’ll show in your growth. One thing you can’t miss: sit on the main ground during winter evenings with your friends, talking about everything and nothing. Finish your assignments — believe it or not, they’ll become sweet memories one day. And always keep a few cutie people close — their jokes and banter can make even the worst days bearable. 🫶🏻",
    glow: "from-pink-500 via-rose-400 to-purple-500",
    category: "Campus Life",
    icon: <Compass className="w-3 h-3" />,
    badgeColor: "bg-rose-50 text-rose-600 border-rose-200/60",
    readTime: "2 min read"
  };

  const seniorTips = [
    {
      author: "Shristi Singh",
      text: "Stay sharp during classes or have someone reliable to fill you in — don’t stay clueless. Try your best not to miss lab sessions — they’re more important than they seem. You don’t need to be in every event, but showing up for the right ones can really make a difference. Stay connected with your seniors — both in your branch and outside. Talk to everyone, but keep your close circle tight. When it comes to skill-building, explore different fields and find what truly vibes with you. And most importantly, have fun and enjoy the ride.",
      glow: "from-purple-500 via-indigo-400 to-blue-500",
      category: "Academics",
      icon: <BookOpen className="w-3 h-3" />,
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200/60",
      readTime: "1 min read"
    },
    {
      author: "Ayushi",
      text: "Hello freshers! You're about to begin an exciting new journey. Explore, enjoy, and grow — but also stay cautious. Don’t ignore your CGPA and focus on developing skills that set you apart. Join societies that interest you and work on your personality. There will be happy days, but also tough moments — emotional breakdowns, setbacks, even heartbreaks. Stay strong, stay connected with your loved ones, and never isolate yourself. These challenges are part of your journey and will shape you into a stronger version of yourself. Be clear about your goals, chase them, and by the end of these 4 years, you’ll see how far you’ve come. 🌸",
      glow: "from-blue-500 via-cyan-400 to-teal-500",
      category: "Placements",
      icon: <Award className="w-3 h-3" />,
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200/60",
      readTime: "2 min read"
    },
    {
      author: "Aradhana Dash",
      text: "It can all feel overwhelming at first and that’s okay. Just remember, it’ll all be worth it. There will be moments where you feel lost or unsure, but trust the process. Stay aware of what's happening around you — both academically and co-curricular-wise. Explore fearlessly what you like, what you don’t. That’s how you grow. And please, don’t hesitate to ask questions or reach out to seniors — we’ve been in your shoes, and we get how it feels. You’ve got this. All the best, y’all 💫",
      glow: "from-amber-500 via-orange-400 to-yellow-500",
      category: "Campus Life",
      icon: <Compass className="w-3 h-3" />,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      readTime: "1 min read"
    },
    {
      author: "Stuti Shukla",
      text: "After the whole JEE grind, your first year at IGDTUW will feel like a breath of fresh air and it truly is your golden year. Make friends who feel like home, explore Delhi beyond the textbooks, join societies that excite you — build memories, not just a resume. But while you’re doing all that, don’t lose sight of your CGPA. Keeping it above 8 early on gives you the freedom to explore later without stress. Most of all, live your first year fully. This time won’t come back — so make it count. 🌸",
      glow: "from-rose-500 via-pink-400 to-orange-400",
      category: "Academics",
      icon: <BookOpen className="w-3 h-3" />,
      badgeColor: "bg-rose-50 text-rose-600 border-rose-200/60",
      readTime: "1 min read"
    },
    {
      author: "Ishika Manchanda",
      text: "Start taking your CGPA seriously right from the first year. It plays a crucial role — whether it's internships, placements, or even unlocking future opportunities. Building that strong foundation early will save you a lot of stress later. Don’t hesitate to participate in hackathons — even if you only know the basics. The exposure, the teamwork, and the learning experience are unmatched. It helps you build confidence and get noticed. Go out with friends, explore the city, make memories — but stay focused too. Balance is key. IGDTUW has great placement records, so grab every opportunity you get — it truly pays off.",
      glow: "from-violet-500 via-purple-400 to-pink-500",
      category: "Placements",
      icon: <Award className="w-3 h-3" />,
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      readTime: "2 min read"
    },
    {
      author: "Your Seniors 🫶🏻",
      text: "Honestly, getting marks at IGDTUW isn’t that hard. One thing I seriously wish someone had told me earlier — most teachers care more about the length of your answers than the quality. Yep, you heard that right. The longer you write, the more it feels like you’ve worked hard. Even if you repeat or stretch a bit, it's okay. Just keep filling those pages — quantity is your golden ticket! 😂 Trust me yaar, IGDTUW fests are something else. They're honestly better than NSUT, DTU, or IIIT fests — and I mean that. The vibe, the fun, the music — it's unforgettable. Don’t skip them over attendance or small work. Go all in and enjoy it with your whole heart. 💃🎉 Placements are pretty great, but yeah, the campus is tiny — and sometimes even monkeys crash your lunch.",
      glow: "from-fuchsia-500 via-rose-400 to-red-500",
      category: "Campus Life",
      icon: <Compass className="w-3 h-3" />,
      badgeColor: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200/60",
      readTime: "2 min read"
    },
    {
      author: "IGDTUW Senior",
      text: "Don’t mess up your midsem exams, they really do affect your CGPA. Never underestimate CGPA. It’s not just about placements, it decides whether you can even sit for them. Don’t waste time. Focus on learning new skills, it's super important. Don’t skip fests and college functions — enjoying the journey matters too. Keep exploring. Don’t just stick to one thing, discover what excites you. Avoid joining too many societies at once — it can get messy and overwhelming. Lastly, all the best for this beautiful new journey you're about to begin! 🌸",
      glow: "from-sky-500 via-blue-400 to-indigo-500",
      category: "Academics",
      icon: <BookOpen className="w-3 h-3" />,
      badgeColor: "bg-sky-50 text-sky-600 border-sky-200/60",
      readTime: "1 min read"
    },
    {
      author: "With Love, A Senior",
      text: "For day scholars, finding seniors to guide you can be tough if you're not part of an active society. That’s why it’s important to put yourself out there — join groups, ask questions, and stay curious. When it comes to academics or internships, try reaching out to 3rd-year and final-year students. From experience, second-years often don’t have full perspective yet — and that’s okay, but go where the insight is deeper. Participate in hackathons early — even if you know absolutely nothing. It might feel like a waste of time or even a little embarrassing, but you’ll learn way more than you expect, and it will open doors later. And above all, the sooner you let go of the regret and pressure of the JEE phase, the freer and better this journey will feel. 🌱",
      glow: "from-emerald-500 via-teal-400 to-cyan-500",
      category: "Placements",
      icon: <Award className="w-3 h-3" />,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      readTime: "2 min read"
    }
  ];

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardScrollVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 85, damping: 15 }
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setFeaturedLikes(prev => prev - 1);
    } else {
      setFeaturedLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 bg-[#FCFBFC] overflow-hidden flex flex-col items-center select-none text-slate-800">
      
      {/* Background Luxury Blur Orbs */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-14 flex-1 flex flex-col">
        
        {/* --- Premium Cinematic Floating Header Block --- */}
        <div className="text-center relative py-2 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto bg-white/90 backdrop-blur-xl text-pink-600 text-[10px] tracking-[0.25em] border border-pink-200/60 px-4 py-1.5 rounded-full font-black uppercase w-fit flex items-center gap-2 shadow-[0_10px_35px_rgba(244,63,94,0.06)] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Premium Core Lounge</span>
          </motion.div>

          {/* Premium Text Reveal Header */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 overflow-hidden py-1">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block"
            >
              Senior Tips &{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 animate-gradient-xy"
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Real Talk
            </motion.span>
          </h1>
          
          <p className="text-slate-500 text-xs sm:text-sm mt-5 max-w-2xl mx-auto font-semibold leading-relaxed tracking-wide">
            Raw, unfiltered insights passed down from seniors who unlocked the path before you. Tap the live transmission node down below to monitor incoming broadcast updates.
          </p>
        </div>

        {/* ⭐ MOST LOVED FEATURED SENIOR ADVICE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-[36px] p-[2px] bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 shadow-[0_20px_50px_rgba(244,63,94,0.08)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/95 rounded-[36px]" />
          
          {/* Glass Overlay Interior Panel */}
          <div className="relative rounded-[35px] bg-white/60 backdrop-blur-2xl p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-start justify-between border border-white/40 transition-colors duration-500 group-hover:bg-rose-50/60">
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-[9px] font-black px-3 py-1 rounded-full text-white uppercase tracking-widest flex items-center gap-1 shadow-sm">
                  ⭐ MOST LOVED ADVICE
                </span>
                <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold flex items-center gap-1.5 ${featuredTip.badgeColor}`}>
                  {featuredTip.icon}
                  {featuredTip.category}
                </span>
                <span className="text-slate-400 text-[11px] font-bold">{featuredTip.readTime}</span>
              </div>

              <p className="text-slate-700 group-hover:text-slate-950 text-sm sm:text-[15px] leading-relaxed font-semibold transition-colors duration-300">
                "{featuredTip.text}"
              </p>

              <div className="pt-2 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-pink-500/60 rounded-full" />
                <span className="text-slate-800 font-black text-sm tracking-wide">— {featuredTip.author}</span>
              </div>
            </div>

            {/* Premium Live Counter Interaction Node */}
            <button 
              onClick={handleLike}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
                isLiked 
                  ? 'bg-pink-500 border-pink-500 text-white shadow-[0_10px_25px_rgba(244,63,94,0.3)] scale-105' 
                  : 'bg-white border-slate-200 text-slate-500 hover:text-pink-500 hover:border-pink-200 shadow-sm'
              }`}
            >
              <Heart className={`w-4 h-4 transition-transform ${isLiked ? 'scale-125 fill-white' : 'group-hover:scale-110'}`} />
              <span className="text-xs font-black tracking-wide">{featuredLikes}</span>
            </button>
          </div>
        </motion.div>

        {/* --- Premium Light Grid Layout with Scroll Reveal Cascade Entry --- */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2"
        >
          {seniorTips.map((note, idx) => (
            <motion.div
              key={idx}
              variants={cardScrollVariants}
              whileHover={{ 
                y: -8,
                scale: 1.025,
                transition: { type: "spring", stiffness: 400, damping: 22 }
              }}
              className="group relative rounded-[32px] p-[1.5px] overflow-hidden transition-all duration-500 shadow-[0_12px_35px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(244,63,94,0.08)] bg-transparent"
            >
              {/* Dynamic Ambient Outer Glow Border Mesh */}
              <div className={`absolute inset-0 bg-gradient-to-br ${note.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
              <div className="absolute inset-0 bg-white/95 rounded-[32px] transition-colors duration-500 group-hover:opacity-0" />

              {/* Card Hover Tint Layer */}
              <div className="relative h-full rounded-[31px] bg-white/40 backdrop-blur-2xl p-7 flex flex-col justify-between border border-white/60 group-hover:bg-rose-50/70 group-hover:border-rose-200/50 transition-all duration-500">
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    {/* Categorization Badges Block */}
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300 shadow-2xs ${note.badgeColor} group-hover:bg-white group-hover:border-rose-300/40`}>
                        {note.icon}
                        {note.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{note.readTime}</span>
                    </div>

                    {/* Micro Live Pulsing Active Beacon Node */}
                    <div className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${note.glow} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r ${note.glow}`}></span>
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-[13.5px] text-slate-600 group-hover:text-slate-900 leading-relaxed font-semibold transition-colors duration-300">
                    "{note.text}"
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200/40 group-hover:border-rose-200/50 flex items-center justify-end relative z-10 transition-colors duration-300">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${note.glow} font-black text-xs sm:text-sm tracking-wide transform group-hover:scale-102 transition-transform duration-300`}>
                    — {note.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- HYPER-LIGHT UNIFIED FLOATING TRIGGER BEACON WITH RADAR PULSE --- */}
      <div className="fixed bottom-8 left-8 z-40">
        <motion.button
          whileHover={{ scale: 1.04, y: -4 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setPanelOpen(true)}
          className="relative overflow-hidden px-6 py-4.5 rounded-2xl bg-slate-950 text-white text-xs font-black tracking-[0.2em] uppercase shadow-[0_20px_45px_rgba(15,23,42,0.35)] flex items-center gap-3 group transition-all duration-300"
        >
          {/* Radial Beacon Ring Pings */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 animate-ping opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
          
          <div className="relative flex h-2 w-2 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span>
            <Volume2 className="w-4 h-4 text-pink-400 relative z-10" />
          </div>
          
          <span className="bg-gradient-to-r from-white via-slate-100 to-pink-100 bg-clip-text text-transparent relative z-10">
            Live Feed Node 🎧
          </span>
        </motion.button>
      </div>

      {/* --- Premium Matching Light Slide-in Drawer Deck --- */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 cursor-pointer"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 w-[88vw] sm:w-[410px] bg-white/95 border-r border-slate-200/60 z-50 p-7 flex flex-col justify-between backdrop-blur-3xl shadow-[30px_0_60px_rgba(0,0,0,0.04)]"
            >
              <div className="flex-1 flex flex-col overflow-hidden space-y-6 mb-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 flex-shrink-0">
                  <h3 className="font-black text-lg text-slate-900 tracking-tight flex items-center gap-2.5">
                    <Volume2 className="w-5 h-5 text-pink-600 animate-bounce" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Live Transmissions</span>
                  </h3>
                  <button
                    onClick={() => setPanelOpen(false)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-400 hover:text-slate-700 transition duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-none">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      setPanelOpen(false);
                      navigate('/hackathons');
                    }}
                    className="p-5 rounded-[24px] bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent border border-pink-500/15 hover:border-pink-500/40 transition duration-300 cursor-pointer relative group"
                  >
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-rose-500 text-[8px] font-black px-2.5 py-0.5 rounded-full text-white uppercase tracking-widest shadow-md shadow-pink-500/10">
                      NEW
                    </span>
                    <h4 className="font-black text-sm text-slate-900 group-hover:text-pink-600 transition duration-200 pr-12">
                      📌 Upcoming Hackathons!
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 font-semibold leading-relaxed">
                      Walmart Sparkathon, WWT Women, and Delhi Ideathons. Tap to explore rules and timelines.
                    </p>
                  </motion.div>

                  <div className="p-5 rounded-[24px] bg-white border border-slate-200/60 relative shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                    <span className="absolute top-4 right-4 bg-amber-500/10 text-amber-700 text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest border border-amber-500/20">
                      ACTIVE
                    </span>
                    <h4 className="font-black text-sm text-slate-900">
                      ☀️ Summer Vacation Started
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 font-semibold leading-relaxed">
                      <span className="text-slate-400 font-black text-[9px] tracking-widest block uppercase mb-1">June 2, 2026</span>
                      The official summer recess has commenced! Enjoy your break till July 31. Use this time for DSA prep, building projects, and preparing for the upcoming placement season.
                    </p>
                  </div>

                  <div className="p-5 rounded-[24px] bg-white border border-slate-200/60 relative shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                    <span className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-700 text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest border border-emerald-500/20">
                      INFO
                    </span>
                    <h4 className="font-black text-sm text-slate-900">
                      📝 Exam Evaluations Underway
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 font-semibold leading-relaxed">
                      <span className="text-slate-400 font-black text-[9px] tracking-widest block uppercase mb-1">June 2, 2026</span>
                      Evaluation of answer sheets for Even Semester End-Term exams has officially started. Compilation of results is scheduled to be completed by early July.
                    </p>
                  </div>

                  <div className="p-5 rounded-[24px] bg-white border border-slate-200/60 relative shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                    <span className="absolute top-4 right-4 bg-purple-500/10 text-purple-700 text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest border border-purple-500/20">
                      T&P
                    </span>
                    <h4 className="font-black text-sm text-slate-900">
                      💼 T&P Placement Prep Drive
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 font-semibold leading-relaxed">
                      <span className="text-slate-400 font-black text-[9px] tracking-widest block uppercase mb-1">June 2, 2026</span>
                      The Training & Placement cell has opened registrations for summer interview prep drives. Update your resumes, LinkedIn profiles, and register via the T&P portal!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-white space-y-4 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-pink-400" />
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.15em]">Suggestion System</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  Got an idea to make IGDTUW Nest even more cozy? Submit reviews or suggest canteens below!
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeaKvkX4JG-wT_FoLseRppd3j3l-yFlHX2LNIjT8u9elR9mJQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-black text-xs tracking-[0.15em] uppercase transition duration-300 block shadow-[0_15px_30px_rgba(244,63,94,0.25)] hover:shadow-[0_15px_30px_rgba(244,63,94,0.45)] transform hover:-translate-y-0.5"
                >
                  Submit Suggestion
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
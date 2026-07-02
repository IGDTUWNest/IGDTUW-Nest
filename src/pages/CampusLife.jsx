import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, X, ZoomIn, ExternalLink, Users, Camera, Sparkles
} from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

// Container variant to handle staggered child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Item variant for smooth premium fade-and-rise entrance
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function CampusLife() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const features = [
    {
      title: "IGDTUW City",
      image: "/igdtuwcity.png",
      link: "https://igdtuwcity.github.io/IGDTUW_CITY/",
      creators: "Joysa Jain & Aarohi Chadha",
      creatorsInfo: "(Batch of 2027, CSE-AI)",
      description: "A dynamic student-led media page covering society updates, event highlights, and everything that makes IGDTUW what it is. Stay updated on fests, fests, and student initiatives!"
    },
    {
      title: "IGDTUW Hub",
      image: "/igdtuwhub.jpg",
      link: "https://igdtuww.github.io/IGDTUWhub/",
      creators: "Manvi, Arni & Divya",
      creatorsInfo: "(Batch of 2028, IT)",
      description: "A student-run academic hub offering subject-wise notes, PYQs, and practical files — all in one place. Neatly organized resources to help you learn, revise, and score with confidence."
    },
    {
      title: "IGDTUW Verse",
      image: "/igdtuwverse.png",
      link: "https://igdtuw-verse.netlify.app/",
      creators: "Jaanvi, Avika & Aakanksha",
      creatorsInfo: "(Batch of 2027/2028, Developers & Tech Creators)",
      description: "A student-built, one-stop digital platform designed to make campus life connected and convenient. Get quick access to college societies, academic resources, CGPA calculator, and hackathon updates!"
    },
    {
      title: "Campus Bae",
      image: "/campusbae.png",
      link: "https://campus-bae.vercel.app/",
      description: "An all-in-one student companion platform designed to assist with resources, notes, and networking across multiple engineering and technology branches. Explore the peer network and academic resources!"
    }
  ];

  const photos = [
    { src: "/photo1.jpeg", category: "Life" },
    { src: "/image4.jpeg", category: "Events" },
    { src: "/image5.jpeg", category: "Campus" },
    { src: "/photo2.jpeg", category: "Life" },
    { src: "/image6.jpeg", category: "Events" },
    { src: "/image7.jpeg", category: "Campus" },
    { src: "/image8.jpeg", category: "Life" },
    { src: "/image9.jpeg", category: "Events" },
    { src: "/photo3.jpeg", category: "Campus" },
    { src: "/image10.jpeg", category: "Life" },
    { src: "/image11.jpeg", category: "Events" },
    { src: "/image12.jpeg", category: "Campus" }
  ];

  const filters = ["All", "Life", "Events", "Campus"];

  const filteredPhotos = activeFilter === "All"
    ? photos
    : photos.filter(p => p.category === activeFilter);

  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#E2D9F5] via-[#F5DDF0] to-[#DBE7FC] selection:bg-pink-100 selection:text-pink-600">
      <AnimatedBg />

      {/* --- Premium Glowing Ambient Background Layer --- */}
      <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-300/15 to-rose-400/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-300/10 to-pink-400/10 blur-[160px] pointer-events-none" />

      {/* Main Container mapped to parent orchestrator */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-20 flex-1 relative"
      >

        {/* --- Header Section --- */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mx-auto bg-pink-50/80 backdrop-blur-md text-pink-600 text-xs font-bold border border-pink-100/80 px-4 py-1.5 rounded-full w-fit flex items-center gap-2 shadow-[0_2px_10px_rgba(244,63,94,0.02)] tracking-wider uppercase cursor-default"
          >
            <Award className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
            <span>Campus Resources & Hubs</span>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">Chronicles</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            Bridging academics and culture. Access student-curated platforms designed to redefine your university experience.
          </p>
        </motion.div>

        {/* --- Featured Initiatives --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white relative overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:border-pink-200/80 hover:shadow-[0_30px_60px_rgba(244,63,94,0.08)] transition-all duration-500"
            >
              {/* Image Container with Custom Zoom & Overlay */}
              <div className="h-60 overflow-hidden bg-slate-100 relative">
                <motion.img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Contents Details */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-5">
                  {feat.creators && (
                    <div className="bg-slate-50/60 backdrop-blur-sm border border-slate-100/80 p-4 rounded-2xl flex items-center gap-3.5">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm border border-pink-50">
                        <Users className="w-4 h-4 text-pink-500" />
                      </div>
                      <div>
                        <span className="text-[10px] text-pink-500 font-black uppercase tracking-widest block">Core Architects</span>
                        <p className="text-sm font-bold text-slate-800 mt-0.5">{feat.creators}</p>
                        <span className="text-xs text-slate-400 font-semibold">{feat.creatorsInfo}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>

                {/* Interactive Premium Button with Hover Light Stripe Effect */}
                <motion.a
                  href={feat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden flex items-center justify-center gap-2 font-bold text-xs py-4 w-full rounded-2xl text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg shadow-pink-500/15 hover:shadow-pink-500/25 transition-all duration-300"
                >
                  {/* Subtle reflecting ambient hover line */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                  <span>Launch Platform</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>



        {/* --- Photo Dump Section --- */}
        <motion.div variants={itemVariants} className="space-y-8 pt-8">

          {/* Header & Filter Controls combo */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3 self-start">
              <div className="p-2.5 rounded-2xl bg-pink-50 text-pink-500 border border-pink-100">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Campus Canvas
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  The unscripted university visual diary.
                </p>
              </div>
            </div>

            {/* Premium Pill Filters */}
            <div className="flex bg-slate-100/80 p-1 rounded-xl border border-slate-200/40 backdrop-blur-sm self-center md:self-auto overflow-x-auto max-w-full relative">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 whitespace-nowrap relative z-10"
                  style={{ color: activeFilter === filter ? '#db2777' : '#64748b' }}
                >
                  {filter}
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Smooth Fluid Layout Transition System */}
          <motion.div
            layout
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 pt-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={item.src}
                  onClick={() => setActivePhoto(item.src)}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white border border-slate-100 cursor-pointer shadow-sm group hover:shadow-xl hover:border-pink-100/70 transition-all duration-300"
                >
                  <img
                    src={item.src}
                    alt={`Moment ${idx}`}
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />

                  {/* Framer-optimized interaction layer */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] flex flex-col items-center justify-center gap-1.5 transition-all duration-300">
                    <div className="p-2.5 rounded-full bg-white text-pink-500 shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-white font-black tracking-widest uppercase bg-pink-500/80 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* --- Lightbox Modal View --- */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 90 }}
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-2xl bg-white/5 text-white border border-white/10 hover:bg-pink-500 hover:text-white hover:border-pink-400 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={activePhoto}
                alt="Enlarged Selection"
                className="w-full h-auto max-h-[80vh] object-contain block bg-slate-950"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
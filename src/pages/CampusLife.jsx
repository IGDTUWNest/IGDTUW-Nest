import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Download, Award, X, ZoomIn } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

export default function CampusLife() {
  const [activePhoto, setActivePhoto] = useState(null);

  const features = [
    {
      title: "IGDTUW City",
      image: "/igdtuwcity.png",
      link: "https://igdtuwcity.github.io/IGDTUW_CITY/",
      creators: "Joysa Jain & Aarohi Chadha",
      creatorsInfo: "(Batch of 2027, CSE-AI)",
      description: "A dynamic student-led media page covering society updates, event highlights, and everything that makes IGDTUW what it is. Stay updated on fests, debates, recruitment, and student initiatives!"
    },
    {
      title: "IGDTUW Hub",
      image: "/igdtuwhub.jpg",
      link: "https://igdtuww.github.io/IGDTUWhub/",
      creators: "Manvi, Arni & Divya",
      creatorsInfo: "(Batch of 2028, IT)",
      description: "A student-run academic hub offering subject-wise notes, PYQs, and practical files — all in one place. IGDTUW Hub makes semester prep easier with neatly organized resources that help students learn, revise, and score with confidence."
    }
  ];

  const photos = [
    "/photo1.jpeg", "/image4.jpeg", "/image5.jpeg", 
    "/photo2.jpeg", "/image6.jpeg", "/image7.jpeg", 
    "/image8.jpeg", "/image9.jpeg", "/photo3.jpeg", 
    "/image10.jpeg", "/image11.jpeg", "/image12.jpeg", 
    "/image13.jpeg", "/image14.jpeg", "/image15.jpeg", 
    "/image16.jpeg", "/image17.jpeg", "/image18.jpeg"
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-12 flex-1 flex flex-col">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="mx-auto bg-brand-pink/15 text-brand-pink text-xs border border-brand-pink/20 px-3 py-1.5 rounded-full font-bold w-fit flex items-center gap-1.5 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Campus Resources & Societies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Campus Life
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
            Discover student-run networks, academic hubs, and explore IGDTUW beyond standard textbooks!
          </p>
        </div>

        {/* Featured Student Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col hover:border-brand-pink/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] transition-all duration-300"
            >
              <div className="h-56 overflow-hidden bg-brand-bg/60 border-b border-white/5 relative">
                <img 
                  src={feat.image} 
                  alt={feat.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-85" />
                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white flex items-center gap-1.5">
                  <span>{feat.title}</span>
                </h3>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  {/* Credit tag info */}
                  <div className="bg-white/[0.03] border border-white/5 px-4 py-3 rounded-xl">
                    <span className="text-[10px] text-brand-pink font-bold uppercase tracking-wider block">Created By</span>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      {feat.creators}
                    </p>
                    <span className="text-xs text-slate-400 font-medium">
                      {feat.creatorsInfo}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>
                <a
                  href={feat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-bold text-xs py-3 rounded-xl bg-gradient-to-r from-brand-pink/15 to-brand-purple/15 border border-brand-pink/35 hover:border-brand-pink hover:bg-brand-pink/20 hover:text-brand-pink transition duration-300 block text-brand-pink"
                >
                  Visit Portal
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Dump Section */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stroke uppercase tracking-wider">
              📸 Campus Photo Dump
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-lg mx-auto">
              IGDTUW through the eyes of our girls – the drama, the chaos, the charm. Click a photo to expand!
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
            {photos.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActivePhoto(src)}
                className="group relative aspect-square rounded-xl overflow-hidden glass-panel border border-white/10 cursor-pointer shadow-md bg-brand-bg/40"
              >
                <img
                  src={src}
                  alt={`Photo Dump ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition duration-200"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden glass-panel border border-white/10"
            >
              <img
                src={activePhoto}
                alt="Active Zoomed Dump"
                className="w-full h-auto max-h-[75vh] object-contain block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

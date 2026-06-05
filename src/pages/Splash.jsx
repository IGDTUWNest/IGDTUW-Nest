import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Splash() {
  const [showLogo, setShowLogo] = useState(false);
  const [taglineText, setTaglineText] = useState("");
  const navigate = useNavigate();
  const tagline = "Campus Meets Comfort";

  // Simulate bird spiral flight path and reveal logo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 2200); // Bird flight completes around 2.2s
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect after logo is displayed
  useEffect(() => {
    if (!showLogo) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        // Safe state update callback
        setTaglineText((prev) => prev + tagline.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [showLogo]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#1c182a] to-[#0A0915] overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* Background Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cloud 1 */}
        <motion.div
          animate={{ x: ['-20vw', '120vw'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-0 w-44 h-24 bg-white/5 rounded-full blur-xl"
        />
        {/* Cloud 2 */}
        <motion.div
          animate={{ x: ['-30vw', '130vw'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear', delay: 8 }}
          className="absolute top-[28%] left-0 w-52 h-28 bg-white/5 rounded-full blur-2xl"
        />
      </div>

      {/* Flying Bird Spiral Animation */}
      <motion.img
        src="/Screenshot 2025-04-21 191321.png"
        alt="Flying Bird"
        initial={{ 
          x: '-20vw', 
          y: '45vh', 
          scale: 0.8,
          rotate: 0 
        }}
        animate={{
          x: ['-20vw', '25vw', '50vw', '75vw', '120vw'],
          y: ['45vh', '30vh', '55vh', '40vh', '48vh'],
          rotate: [0, -15, 15, -10, 0],
          scale: [0.8, 1, 1.1, 0.9, 0.7],
          opacity: [1, 1, 1, 1, 0]
        }}
        transition={{ 
          duration: 3, 
          ease: "easeInOut" 
        }}
        className="absolute z-20 w-24 h-auto select-none pointer-events-none"
      />

      {/* Main Logo & Action Center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showLogo ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-center flex flex-col items-center px-4 max-w-md w-full"
      >
        {/* Rotating Circular Neon Glow */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-pink to-brand-purple opacity-45 group-hover:opacity-75 blur-md group-hover:blur-lg transition duration-500 animate-pulse-slow" />
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/WhatsApp Image 2025-04-10 at 11.58.50.jpeg"
              alt="IGDTUW Nest Logo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-white mt-4 bg-gradient-to-r from-brand-pink via-purple-300 to-brand-purple bg-clip-text text-transparent drop-shadow-sm">
          Welcome to IGDTUW Nest
        </h1>

        {/* Typewriter Tagline */}
        <div className="h-8 mt-2.5">
          <p className="text-slate-300 font-semibold tracking-wider text-base sm:text-lg flex items-center justify-center">
            {taglineText}
            {taglineText.length < tagline.length && (
              <span className="w-2 h-4.5 bg-brand-pink ml-1 inline-block animate-pulse" />
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/home')}
            className="w-4/5 sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition duration-300"
          >
            Let’s Get Started
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/about')}
            className="w-4/5 sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm transition duration-300 hover:border-white/40"
          >
            About Us
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

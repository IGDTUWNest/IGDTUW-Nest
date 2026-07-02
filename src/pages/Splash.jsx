import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

// Stagger child orchestrator variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function Splash() {
  const [showContent, setShowContent] = useState(false);
  const [taglineText, setTaglineText] = useState("");
  const navigate = useNavigate();
  const tagline = "Campus Meets Comfort";

  // Liquid Motion Values for dynamic mathematical flight calculations
  const birdX = useMotionValue(-150);
  const birdY = useMotionValue(400);
  const birdRotate = useMotionValue(0);
  const birdScale = useMotionValue(0.6);
  const birdOpacity = useMotionValue(0);

  // Initialize frame rate hooks to drive the physics loop
  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const updateFlight = (time) => {
      if (!startTime) startTime = time;
      const elapsed = (time - startTime) / 1000; // time in seconds

      const duration = 3.6; // Total smooth flight journey duration
      const progress = Math.min(elapsed / duration, 1);

      // 1. Uniform linear X path across the whole screen width
      const startX = -200;
      const endX = window.innerWidth + 200;
      const currentX = startX + (endX - startX) * progress;
      birdX.set(currentX);

      // 2. Trigonometric Sine Wave for a liquid, non-robotic Y curve
      const baseHeight = window.innerHeight * 0.45;
      const waveAmplitude = window.innerHeight * 0.18; // Height of waves
      const waveFrequency = 1.8; // Creates beautiful organic fluid ripples
      
      const currentY = baseHeight + Math.sin(progress * Math.PI * waveFrequency) * waveAmplitude;
      birdY.set(currentY);

      // 3. Automated Aerodynamic Banking angle (Derivative estimation)
      const lookAheadProgress = Math.min(progress + 0.01, 1);
      const nextY = baseHeight + Math.sin(lookAheadProgress * Math.PI * waveFrequency) * waveAmplitude;
      const slope = nextY - currentY;
      birdRotate.set(slope * 0.6); // Naturally tilts up into climbs, leans down into drops

      // 4. Smooth fluid sizing & opacity fading cycles
      const currentScale = 0.6 + Math.sin(progress * Math.PI) * 0.45;
      birdScale.set(currentScale);

      if (progress < 0.15) {
        birdOpacity.set(progress / 0.15); // Luxurious fade in
      } else if (progress > 0.8) {
        birdOpacity.set((1 - progress) / 0.2); // Liquid fade out
      } else {
        birdOpacity.set(1);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateFlight);
      }
    };

    animationFrameId = requestAnimationFrame(updateFlight);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Trigger content hub drop down as bird glides past middle view
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1800); 
    return () => clearTimeout(timer);
  }, []);

  // Premium rapid-tick typewriter sequence
  useEffect(() => {
    if (!showContent) return;
    let i = 0;
    setTaglineText("");
    const interval = setInterval(() => {
      setTaglineText(tagline.slice(0, i + 1));
      i++;
      if (i >= tagline.length) {
        clearInterval(interval);
      }
    }, 55);
    return () => clearInterval(interval);
  }, [showContent]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#E2D9F5] via-[#F5DDF0] to-[#DBE7FC] overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-pink-100 selection:text-pink-600">
      
      {/* --- Premium Ambient Glow Backdrops (From Campus Chronicles) --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-300/15 to-rose-400/10 blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 30, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-300/10 to-pink-400/10 blur-[160px] pointer-events-none" 
      />

      {/* --- Ambient Cloud Elements --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ['-20vw', '120vw'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[15%] left-0 w-64 h-32 bg-pink-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: ['-30vw', '130vw'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear', delay: 4 }}
          className="absolute top-[35%] left-0 w-80 h-40 bg-purple-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- Pure Liquid Math-Driven Flow Bird Asset --- */}
      <motion.img
        src="/Screenshot 2025-04-21 191321.png"
        alt="Flying Bird"
        style={{
          x: birdX,
          y: birdY,
          rotate: birdRotate,
          scale: birdScale,
          opacity: birdOpacity,
        }}
        className="absolute left-0 top-0 z-20 w-24 h-auto select-none pointer-events-none filter drop-shadow-[0_20px_30px_rgba(244,63,94,0.08)]"
      />

      {/* --- Main Interactive Center Hub Container --- */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="z-10 text-center flex flex-col items-center px-6 max-w-md w-full"
          >
            {/* Logo Wrapper with Ambient Glow */}
            <motion.div variants={childVariants} className="relative mb-8 group cursor-pointer">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-pink-500 via-rose-400 to-purple-600 opacity-20 group-hover:opacity-40 blur-xl group-hover:blur-2xl transition duration-700" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-[28px] overflow-hidden border border-white bg-white/80 backdrop-blur-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(244,63,94,0.08)] group-hover:border-pink-100">
                <img
                  src="/WhatsApp Image 2025-04-10 at 11.58.50.jpeg"
                  alt="IGDTUW Nest Logo"
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Premium Editorial Title Text */}
            <motion.h1 
              variants={childVariants}
              className="font-black text-3xl sm:text-4xl tracking-tight mt-2 text-slate-900"
            >
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
                IGDTUW Nest
              </span>
            </motion.h1>

            {/* Micro Typewriter Caption Banner */}
            <motion.div variants={childVariants} className="min-h-[2rem] h-auto mt-3.5 flex items-center justify-center">
              <p className="text-slate-500 font-semibold tracking-wide text-sm sm:text-base text-center flex items-center justify-center">
                {taglineText}
                {taglineText.length < tagline.length && (
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1 h-4 bg-pink-500 ml-1.5 inline-block" 
                  />
                )}
              </p>
            </motion.div>

            {/* Premium Action Buttons */}
            <motion.div 
              variants={childVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              {/* Primary Action Button */}
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/home')}
                className="group relative overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs shadow-lg shadow-pink-500/15 hover:shadow-pink-500/25 transition-all duration-300 tracking-wide"
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                <span>Let’s Get Started</span>
              </motion.button>
              
              {/* Secondary Clean White Action Button */}
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl border border-slate-200/60 bg-white/60 text-slate-700 backdrop-blur-md font-bold text-xs shadow-sm hover:bg-white hover:text-pink-600 hover:border-pink-200 transition-all duration-300 tracking-wide"
              >
                About Us
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
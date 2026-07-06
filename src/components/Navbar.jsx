import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Search, Compass, Info, Bell, Award, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [widgetIndex, setWidgetIndex] = useState(0);
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const rollingWidgets = [
    "12 New Nests near Campus",
    "5-Star spot added in Campus Life",
    "Library Wi-Fi connection restored",
    "Fest registrations are now live!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWidgetIndex((prev) => (prev + 1) % rollingWidgets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Dashboard', path: '/home', icon: Home },
    { name: 'Find Nest', path: '/find-nest', icon: Search },
    { name: 'Student Spots', path: '/student-spot', icon: Compass },
    { name: 'Campus Life', path: '/campus-life', icon: Award },
    { name: 'Updates', path: '/updates', icon: Bell },
    { name: 'About Us', path: '/about', icon: Info },
  ];

  const isActive = (path) => location.pathname === path;

  if (location.pathname === '/') return null;

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-2.5 bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Isolated Floating Main Dock */}
        <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-2xl bg-white/80 dark:bg-[#0f0c1e]/85 backdrop-blur-xl border border-black/[0.04] dark:border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
          
          {/* Elegant Minimal Brand Section */}
          <Link to="/home" className="flex items-center gap-3 group focus:outline-none relative z-50">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-white p-0.5 shadow-sm transition duration-300 group-hover:scale-102">
              <img 
                src="/WhatsApp Image 2025-04-10 at 11.58.50.jpeg" 
                alt="Logo" 
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-brand-pink transition duration-300">
                IGDTUW Nest
              </span>
              <span className="text-[8px] text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase font-medium">
                Campus Comfort
              </span>
            </div>
          </Link>

          {/* Minimal Live Ticker */}
          <div className="hidden lg:flex items-center h-full max-w-[200px] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={widgetIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] font-medium text-slate-400 truncate"
              >
                <span className="text-brand-pink font-semibold mr-1.5">•</span> {rollingWidgets[widgetIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clean High-Contrast Tabs */}
          <div className="hidden md:flex items-center gap-6 h-full">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-1.5 h-full px-1 text-xs font-bold tracking-wide uppercase transition-colors duration-200 focus:outline-none ${
                    active ? 'text-brand-pink' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-brand-pink' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                  
                  {/* Microscopic Premium Slide Indicator */}
                  {active && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-pink rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="ml-2 p-1.5 rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* Minimal Mobile controls */}
          <div className="md:hidden flex items-center gap-3 relative z-50">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute inset-x-6 top-[68px] bg-white dark:bg-[#0f0c1e] border border-slate-100 dark:border-white/[0.08] rounded-xl flex flex-col p-3 gap-1 shadow-xl"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 py-3 px-3 rounded-lg text-xs font-semibold tracking-wide transition duration-200 ${
                    active ? 'bg-slate-50 dark:bg-slate-900/60 text-brand-pink' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
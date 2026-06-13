import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Compass, Info, Bell, Award } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection for glassmorphism shift
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on navigation
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

  // Don't render standard navbar on splash screen
  if (location.pathname === '/') return null;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <Link to="/home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-pink/30 bg-white p-0.5 group-hover:border-brand-pink transition duration-300">
              <img 
                src="/WhatsApp Image 2025-04-10 at 11.58.50.jpeg" 
                alt="IGDTUW Nest Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent group-hover:opacity-80 transition duration-300">
                IGDTUW Nest
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
                Campus Comfort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'bg-brand-pink/10 text-brand-pink border border-brand-pink/20 shadow-[0_0_15px_rgba(244,114,182,0.1)]'
                      : 'text-slate-300 hover:text-brand-pink hover:bg-brand-pink/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-brand-pink hover:bg-brand-pink/5 transition duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-xl z-40 flex flex-col px-4 pt-6 pb-24 gap-4 animate-fade-in border-t border-slate-100">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-base font-semibold transition duration-300 ${
                  active
                    ? 'bg-brand-pink/10 text-brand-pink border border-brand-pink/20 shadow-[0_0_15px_rgba(244,114,182,0.05)]'
                    : 'text-slate-700 hover:text-brand-pink hover:bg-brand-pink/5 border border-transparent'
                }`}
              >
                <Icon className="w-5 h-5 text-brand-pink" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  // Hide footer on splash screen
  if (location.pathname === '/') return null;

  return (
    <footer className="mt-auto border-t border-slate-200/50 bg-white/60 backdrop-blur-sm py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tribute */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
              IGDTUW Nest
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-[280px] font-medium">
              Making campus transition comfortable, warm, and memorable for our junior girls.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 font-semibold">
            <Link to="/home" className="hover:text-brand-pink transition duration-200">Dashboard</Link>
            <Link to="/find-nest" className="hover:text-brand-pink transition duration-200">Find Nest</Link>
            <Link to="/student-spot" className="hover:text-brand-pink transition duration-200">Spotlights</Link>
            <Link to="/campus-life" className="hover:text-brand-pink transition duration-200">Campus</Link>
            <Link to="/updates" className="hover:text-brand-pink transition duration-200">Tips</Link>
            <Link to="/about" className="hover:text-brand-pink transition duration-200">Founders</Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/igdtuw.nest/?igsh=MTZreWZ4aXk5MGdtaw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-pink/10 hover:text-brand-pink text-slate-600 text-xs border border-slate-200 transition duration-300 shadow-sm font-bold"
            >
              <svg 
                className="w-3.5 h-3.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>@igdtuw.nest</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between text-center gap-3 text-xs text-slate-500 font-semibold">
          <p>© {new Date().getFullYear()} IGDTUW Nest. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> by 
            <span className="text-slate-600 font-bold ml-0.5">IGDTUW girls</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

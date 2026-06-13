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
          <div className="flex items-center gap-3">
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

            <a 
              href="https://chat.whatsapp.com/L0eSLMMAmfGFJ3xafvTREc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-green-500/10 hover:text-green-600 text-slate-600 text-xs border border-slate-200 transition duration-300 shadow-sm font-bold"
            >
              <svg 
                className="w-3.5 h-3.5 text-[#25D366]" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.486 4.793 1.487 5.393 0 9.778-4.383 9.781-9.778.003-2.614-1.011-5.074-2.859-6.925C16.467 2.086 14.01 1.07 11.39 1.07c-5.385 0-9.77 4.381-9.774 9.776-.002 1.83.473 3.568 1.378 5.04L2.01 21.93l6.16-1.616-.523-.314zm11.391-7.146c-.305-.152-1.806-.89-2.083-.99-.278-.101-.48-.152-.681.152-.2.304-.778.99-.953 1.193-.175.203-.35.228-.655.076-.305-.152-1.288-.475-2.454-1.516-.907-.808-1.519-1.807-1.697-2.11-.177-.305-.019-.47.133-.621.137-.137.305-.355.457-.533.152-.178.203-.304.305-.508.102-.203.05-.381-.026-.533-.076-.152-.681-1.643-.933-2.249-.245-.589-.494-.509-.681-.518-.175-.008-.377-.01-.58-.01-.203 0-.533.076-.812.381-.278.305-1.062 1.041-1.062 2.54 0 1.498 1.09 2.946 1.242 3.149.152.203 2.146 3.277 5.198 4.595.726.313 1.291.5 1.733.64.73.232 1.394.2 1.919.122.585-.087 1.806-.738 2.059-1.452.254-.714.254-1.325.178-1.452-.076-.127-.278-.203-.584-.356z"/>
              </svg>
              <span>WhatsApp Group</span>
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

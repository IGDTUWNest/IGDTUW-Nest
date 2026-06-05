import { motion } from 'framer-motion';
import { Heart, HelpCircle, Compass, Users } from 'lucide-react';

const Linkedin = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import AnimatedBg from '../components/AnimatedBg';

export default function AboutUs() {
  const founders = [
    {
      name: "Aradhana Dash",
      role: "Co-Founder | IT Dept",
      image: "/founder1.jpeg",
      linkedin: "https://www.linkedin.com/in/aradhana-dash-6121a8314",
      bio: "Hello! I'm Aradhana Dash, a 2nd-year B.Tech undergrad from the Information Technology department at IGDTUW. I’m someone who truly enjoys helping others and contributing to causes that make a difference.\n\nI have strong communication and leadership skills, and I’m passionate about tech, design, and creating things that actually matter. IGDTUW Nest is not just a project for me. It’s something I dreamt of building — and seeing it come to life and reach all of you means a lot.\n\nI genuinely hope this platform helps you in your college journey, even if it's just in a small way. Thanks for being a part of it! 💗"
    },
    {
      name: "Stuti Shukla",
      role: "Co-Founder | ECE & AI Dept",
      image: "/founder1.1.jpeg",
      linkedin: "https://www.linkedin.com/in/stuti-shukla-a94761328",
      bio: "Hi! I'm Stuti Shukla, a 2nd-year student at IGDTUW from the ECE with AI department. I started this initiative with the hope of doing something creative and meaningful — something that could make life a bit easier and more exciting for freshers.\n\nEven though I wasn't from a coding background, I wanted to explore and learn, and IGDTUW Nest became a small reflection of that journey. It’s filled with efforts, ideas, and love — to help you navigate college life, find the right PG, and feel more connected to your new home.\n\nI hope this space becomes a cozy corner for you — just like it became for me while creating it. ✨"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-12 flex-1 flex flex-col justify-center">
        {/* Objectives Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl glass-panel border border-white/10 p-6 sm:p-10 max-w-4xl mx-auto shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center gap-2.5 text-brand-pink border-b border-white/5 pb-4 mb-5">
            <Compass className="w-5 h-5 text-brand-pink" />
            <h2 className="font-extrabold text-xl sm:text-2xl text-slate-100">
              ✨ About IGDTUW Nest
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
            <p className="text-brand-pink text-base sm:text-lg font-bold border-l-4 border-brand-pink/50 pl-4 py-1.5 bg-brand-pink/[0.02] rounded-r-xl">
              IGDTUW Nest is a space built by students — for students — to make your college transition a little easier and a lot more real.
            </p>
            <p>
              We’ve curated <strong className="text-white font-bold">student-recommended PGs</strong> with honest details, so you don’t feel lost while house-hunting in your first weeks. From the best local food spots to cozy chai corners and campus chill scenes — everything’s listed based on real experiences.
            </p>
            <p>
              Since campus life can feel overwhelming at first, we’ve also added resources created by seniors to guide you through. Whether it's exploring Delhi during your breaks or finding answers when things feel confusing, we’ve tried to cover it all.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
              IGDTUW Nest isn’t just a website. It’s a <strong className="text-brand-pink font-bold">warm comfort space</strong>, something close to our hearts — built to reflect what being an IGDTUW girl truly feels like. 💗
            </p>
          </div>
        </motion.div>

        {/* Co-Founders Section */}
        <div className="space-y-8 max-w-5xl mx-auto w-full pt-4">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stroke uppercase tracking-wider flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-brand-pink" />
              <span>Meet the Founders</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-sm mx-auto">
              The creative minds behind the Nest initiative
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((found, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="rounded-2xl glass-panel border border-white/10 p-6 flex flex-col sm:flex-row gap-6 hover:border-brand-pink/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.08)] transition-all duration-300"
              >
                {/* Photo Profile */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple opacity-40 blur-sm group-hover:opacity-75 transition duration-300" />
                    <div className="relative w-32 h-32 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10">
                      <img 
                        src={found.image} 
                        alt={found.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <a
                    href={found.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-pink/15 hover:bg-brand-pink/25 hover:text-brand-pink text-slate-300 text-xs border border-brand-pink/35 transition duration-300 font-bold"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                {/* Profile Description */}
                <div className="space-y-2.5 flex-1">
                  <div className="space-y-0.5">
                    <h3 className="font-extrabold text-lg text-slate-100">{found.name}</h3>
                    <span className="text-xs text-brand-pink font-bold block tracking-wider uppercase">
                      {found.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold whitespace-pre-line">
                    {found.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

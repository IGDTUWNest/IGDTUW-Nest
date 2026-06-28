import { motion } from 'framer-motion';
import { Compass, Users, Quote } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

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

export default function AboutUs() {
  const founders = [
    {
      name: 'Aradhana Dash',
      role: 'Co-Founder · IT Department',
      year: '2nd Year, B.Tech',
      image: '/founder1.jpeg',
      linkedin: 'https://www.linkedin.com/in/aradhana-dash-6121a8314',
      accent: 'pink',
      pull: 'IGDTUW Nest is something I dreamt of building.',
      bio: "I'm a 2nd-year B.Tech undergrad from the Information Technology department at IGDTUW. I'm someone who truly enjoys helping others and contributing to causes that make a difference.\n\nI have strong communication and leadership skills, and I'm passionate about tech, design, and creating things that actually matter. Seeing this dream come to life and reach all of you means a lot.\n\nI genuinely hope this platform helps you in your college journey, even if it's just in a small way. Thanks for being a part of it.",
    },
    {
      name: 'Stuti Shukla',
      role: 'Co-Founder · ECE & AI Department',
      year: '2nd Year, B.Tech',
      image: '/founder1.1.jpeg',
      linkedin: 'https://www.linkedin.com/in/stuti-shukla-a94761328',
      accent: 'purple',
      pull: "I hope this space becomes a cozy corner for you, just like it became for me.",
      bio: "I'm a 2nd-year student at IGDTUW from the ECE with AI department. I started this initiative hoping to do something creative and meaningful, something that could make life a little easier for freshers.\n\nEven though I wasn't from a coding background, I wanted to explore and learn, and this became a small reflection of that journey. It's filled with effort, ideas, and love, to help you find the right PG and feel more connected to your new home.\n\nIt became a cozy corner for me while building it. I hope it does the same for you.",
    },
  ];

  const accentMap = {
    pink: {
      tab: 'bg-[#EC4899]',
      ring: 'ring-[#EC4899]/25',
      glow: 'from-[#EC4899] to-[#F472B6]',
      text: 'text-[#9D174D]',
      border: 'border-[#EC4899]/30',
      chipBg: 'bg-[#FDF2F8]',
      quoteBg: 'bg-[#FFF0F6]',
    },
    purple: {
      tab: 'bg-[#7C3AED]',
      ring: 'ring-[#7C3AED]/25',
      glow: 'from-[#7C3AED] to-[#A78BFA]',
      text: 'text-[#5B21B6]',
      border: 'border-[#7C3AED]/30',
      chipBg: 'bg-[#F5F3FF]',
      quoteBg: 'bg-[#F6F3FF]',
    },
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col items-center bg-[#FFFBFD]">
      <AnimatedBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-20 flex-1 flex flex-col justify-center">
        {/* Objectives Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-[28px] bg-white/95 border border-[#F3D9E6] p-7 sm:p-12 max-w-4xl mx-auto shadow-[0_20px_60px_-15px_rgba(236,72,153,0.18)]"
        >
          {/* corner mark */}
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-pink-500/20 rotate-[-8deg]">
            <Compass className="w-5 h-5 text-white" strokeWidth={2.4} />
          </div>

          <div className="flex items-center gap-2.5 border-b border-[#F3D9E6] pb-5 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9D174D]/60">
              Our Story
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#F3D9E6] to-transparent" />
          </div>

          <h2 className="font-extrabold text-[28px] sm:text-[36px] leading-tight text-[#1E1B2E] tracking-tight mb-6">
            About <span className="text-[#9D174D]">IGDTUW Nest</span>
          </h2>

          <div className="space-y-5 text-[#3F3A4A] text-sm sm:text-base leading-relaxed">
            <p className="text-[#9D174D] text-base sm:text-lg font-bold border-l-[3px] border-[#EC4899] pl-5 py-1">
              A space built by students, for students, to make your college transition a little easier and a lot more real.
            </p>

            <p>
              We've curated{' '}
              <strong className="text-[#9D174D] font-bold">student-recommended PGs</strong>{' '}
              with honest details, so you don't feel lost while house-hunting in your first
              weeks. From the best local food spots to cozy chai corners and campus chill
              scenes, everything's listed based on real experiences.
            </p>

            <p>
              Since campus life can feel overwhelming at first, we've also added resources
              created by seniors to guide you through. Whether it's exploring Delhi during your
              breaks or finding answers when things feel confusing, we've tried to cover it all.
            </p>

            <div className="flex gap-3 items-start bg-[#FDF2F8] border border-[#F3D9E6] p-5 rounded-2xl">
              <Quote className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-0.5" strokeWidth={2.2} />
              <p className="text-xs sm:text-sm text-[#6B5B6E]">
                IGDTUW Nest isn't just a website. It's a{' '}
                <strong className="text-[#9D174D] font-bold">warm comfort space</strong>, something
                close to our hearts, built to reflect what being an IGDTUW girl truly feels like.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Co-Founders Section */}
        <div className="space-y-12 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2F8] border border-[#F3D9E6] text-[#9D174D]">
              <Users className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                From the founders' desk
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B2E] tracking-tight">
              Meet the people behind the Nest
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5B6E] max-w-md mx-auto">
              Two students who turned a shared idea into a home for every IGDTUW fresher.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {founders.map((found, idx) => {
              const a = accentMap[found.accent];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.12, ease: 'easeOut' }}
                  whileHover={{ y: -6 }}
                  className={`relative rounded-[26px] bg-white border ${a.border} p-7 flex flex-col gap-6 shadow-[0_12px_40px_-12px_rgba(80,40,80,0.12)] hover:shadow-[0_22px_50px_-12px_rgba(80,40,80,0.2)] transition-shadow duration-300`}
                >
                  {/* side tab */}
                  <div className={`absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full ${a.tab}`} />

                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute -inset-1.5 rounded-[22px] bg-gradient-to-br ${a.glow} opacity-25 blur-md`}
                      />
                      <div
                        className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-[20px] overflow-hidden border-2 border-white ring-2 ${a.ring} shadow-md`}
                      >
                        <img
                          src={found.image}
                          alt={found.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <h3 className="font-extrabold text-lg sm:text-xl text-[#1E1B2E] leading-snug">
                        {found.name}
                      </h3>
                      <p className={`text-[11px] font-bold uppercase tracking-wider ${a.text}`}>
                        {found.role}
                      </p>
                      <p className="text-[11px] text-[#9A8FA0] font-semibold">{found.year}</p>
                      <a
                        href={found.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${found.name} on LinkedIn`}
                        className={`inline-flex items-center gap-1.5 mt-1.5 px-3 py-1.5 rounded-full ${a.chipBg} ${a.text} text-[11px] font-bold border ${a.border} hover:scale-[1.04] active:scale-[0.98] transition-transform duration-200`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>Connect</span>
                      </a>
                    </div>
                  </div>

                  {/* pull quote */}
                  <div className={`rounded-2xl ${a.quoteBg} px-4 py-3 border ${a.border}`}>
                    <p className={`text-sm font-bold ${a.text} leading-snug italic`}>
                      "{found.pull}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5468] leading-relaxed whitespace-pre-line">
                    {found.bio}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

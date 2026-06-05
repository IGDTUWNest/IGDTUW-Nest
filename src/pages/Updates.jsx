import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, X, AlertCircle, Sparkles, MessageSquare, Lightbulb } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';

export default function Updates() {
  const [panelOpen, setPanelOpen] = useState(false);
  const navigate = useNavigate();

  const seniorTips = [
    {
      author: "Aakriti Rajhans",
      text: "Whatever sem you have Physics and Maths in, study them with full shiddat — you really don’t want a bad grade haunting you later. Be cautious on the metro; not everyone you’ll meet is kind. Don’t let the pressure of academics or placements burn you out. Try connecting with different people — you might just find your homies here. Work hard, stay grateful for every opportunity, and be responsive; it’ll show in your growth. One thing you can’t miss: sit on the main ground during winter evenings with your friends, talking about everything and nothing. Finish your assignments — believe it or not, they’ll become sweet memories one day. And always keep a few cutie people close — their jokes and banter can make even the worst days bearable. 🫶🏻",
      color: "border-brand-pink/30 hover:border-brand-pink bg-brand-pink/[0.03] shadow-[0_0_15px_rgba(236,72,153,0.02)]"
    },
    {
      author: "Shristi Singh",
      text: "Stay sharp during classes or have someone reliable to fill you in — don’t stay clueless. Try your best not to miss lab sessions — they’re more important than they seem. You don’t need to be in every event, but showing up for the right ones can really make a difference. Stay connected with your seniors — both in your branch and outside. Talk to everyone, but keep your close circle tight. When it comes to skill-building, explore different fields and find what truly vibes with you. And most importantly, have fun and enjoy the ride. Not everything will be in your control — but for the things that are, make them count.",
      color: "border-brand-purple/30 hover:border-brand-purple bg-brand-purple/[0.03] shadow-[0_0_15px_rgba(168,85,247,0.02)]"
    },
    {
      author: "Ayushi",
      text: "Hello freshers! You're about to begin an exciting new journey. Explore, enjoy, and grow — but also stay cautious. Don’t ignore your CGPA and focus on developing skills that set you apart. Join societies that interest you and work on your personality. There will be happy days, but also tough moments — emotional breakdowns, setbacks, even heartbreaks. Stay strong, stay connected with your loved ones, and never isolate yourself. These challenges are part of your journey and will shape you into a stronger version of yourself. Be clear about your goals, chase them, and by the end of these 4 years, you’ll see how far you’ve come. 🌸",
      color: "border-blue-500/30 hover:border-blue-400 bg-blue-500/[0.03] shadow-[0_0_15px_rgba(59,130,246,0.02)]"
    },
    {
      author: "Aradhana Dash",
      text: "It can all feel overwhelming at first and that’s okay. Just remember, it’ll all be worth it. There will be moments where you feel lost or unsure, but trust the process. Stay aware of what's happening around you — both academically and co-curricular-wise. Explore fearlessly what you like, what you don’t. That’s how you grow. And please, don’t hesitate to ask questions or reach out to seniors — we’ve been in your shoes, and we get how it feels. You’ve got this. All the best, y’all 💫",
      color: "border-amber-500/30 hover:border-amber-400 bg-amber-500/[0.03] shadow-[0_0_15px_rgba(245,158,11,0.02)]"
    },
    {
      author: "Stuti Shukla",
      text: "After the whole JEE grind, your first year at IGDTUW will feel like a breath of fresh air and it truly is your golden year. Make friends who feel like home, explore Delhi beyond the textbooks, join societies that excite you — build memories, not just a resume. But while you’re doing all that, don’t lose sight of your CGPA. Keeping it above 8 early on gives you the freedom to explore later without stress. Most of all, live your first year fully. This time won’t come back — so make it count. 🌸",
      color: "border-pink-400/30 hover:border-pink-300 bg-pink-400/[0.03]"
    },
    {
      author: "Ishika Manchanda",
      text: "Start taking your CGPA seriously right from the first year. It plays a crucial role — whether it's internships, placements, or even unlocking future opportunities. Building that strong foundation early will save you a lot of stress later. Don’t hesitate to participate in hackathons — even if you only know the basics. The exposure, the teamwork, and the learning experience are unmatched. It helps you build confidence and get noticed. Go out with friends, explore the city, make memories — but stay focused too. Balance is key. IGDTUW has great placement records, so grab every opportunity you get — it truly pays off.",
      color: "border-brand-purple/30 hover:border-brand-purple bg-brand-purple/[0.03]"
    },
    {
      author: "Your Seniors 🫶🏻",
      text: "Honestly, getting marks at IGDTUW isn’t that hard. One thing I seriously wish someone had told me earlier — most teachers care more about the length of your answers than the quality. Yep, you heard that right. The longer you write, the more it feels like you’ve worked hard. Even if you repeat or stretch a bit, it's okay. Just keep filling those pages — quantity is your golden ticket! 😂 Trust me yaar, IGDTUW fests are something else. They're honestly better than NSUT, DTU, or IIIT fests — and I mean that. The vibe, the fun, the music — it's unforgettable. Don’t skip them over attendance or small work. Go all in and enjoy it with your whole heart. 💃🎉 Placements are pretty great, but yeah, the campus is tiny — and sometimes even monkeys crash your lunch.",
      color: "border-rose-400/30 hover:border-rose-300 bg-rose-400/[0.03]"
    },
    {
      author: "IGDTUW Senior",
      text: "Don’t mess up your midsem exams, they really do affect your CGPA. Never underestimate CGPA. It’s not just about placements, it decides whether you can even sit for them. Don’t waste time. Focus on learning new skills, it's super important. Don’t skip fests and college functions — enjoying the journey matters too. Keep exploring. Don’t just stick to one thing, discover what excites you. Avoid joining too many societies at once — it can get messy and overwhelming. Lastly, all the best for this beautiful new journey you're about to begin! 🌸",
      color: "border-blue-400/30 hover:border-blue-300 bg-blue-400/[0.03]"
    },
    {
      author: "With Love, A Senior",
      text: "For day scholars, finding seniors to guide you can be tough if you're not part of an active society. That’s why it’s important to put yourself out there — join groups, ask questions, and stay curious. When it comes to academics or internships, try reaching out to 3rd-year and final-year students. From experience, second-years often don’t have full perspective yet — and that’s okay, but go where the insight is deeper. Participate in hackathons early — even if you know absolutely nothing. It might feel like a waste of time or even a little embarrassing, but you’ll learn way more than you expect, and it will open doors later. And above all, the sooner you let go of the regret and pressure of the JEE phase, the freer and better this journey will feel. 🌱",
      color: "border-amber-400/30 hover:border-amber-300 bg-amber-400/[0.03]"
    },
    {
      author: "Senior Reflections",
      text: "You’ll miss this place one day. Even the things that annoy you now will become funny stories later. So live it all. 💛",
      color: "border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/[0.03]"
    },
    {
      author: "Academic Secrets",
      text: "Even if your midsems don’t go well, endsems are your golden chance to bounce back! So prep smart, stay focused, and make sure you maximize your internal marks — they can really save you in the final result. 💯",
      color: "border-red-500/30 hover:border-red-400 bg-red-500/[0.03]"
    },
    {
      author: "Society Secrets",
      text: "Explore societies, join fest teams, they’re fun and full of learning. Don’t miss Taarangana, it’s a vibe! During exams, write long answers — it really helps with marks. Enjoy college life, but also focus on DSA and try inter-college competitions, they boost confidence and exposure.",
      color: "border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/[0.03]"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      {/* Floating Speaker Trigger Button for updates panel */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setPanelOpen(true)}
        className="fixed top-24 left-6 z-40 p-4 rounded-full bg-brand-pink text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)] border border-brand-pink/20 hover:bg-brand-pink/90 transition duration-300 focus:outline-none flex items-center justify-center"
        aria-label="Open announcements panel"
      >
        <Volume2 className="w-5 h-5 text-white animate-bounce" />
      </motion.button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8 flex-1 flex flex-col">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto bg-brand-pink/15 text-brand-pink text-xs border border-brand-pink/20 px-3 py-1.5 rounded-full font-bold w-fit flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Senior Insights & Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            📌 Senior Tips & Real Talk
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
            Real advice from your seniors who have walked the same path. Tap the 🎧 icon on the top-left for college news!
          </p>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {seniorTips.map((note, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.02, 
                rotate: (idx % 2 === 0 ? 0.5 : -0.5),
                y: -4
              }}
              className={`rounded-2xl border p-6 flex flex-col justify-between glass-panel transition-all duration-300 ${note.color}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-pink">
                  <MessageSquare className="w-4 h-4 text-brand-pink" />
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-pink">Senior Advice</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold">
                  {note.text}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/5 text-right font-extrabold text-xs sm:text-sm text-slate-100 italic">
                – {note.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-in Announcements Panel */}
      <AnimatePresence>
        {panelOpen && (
          <>
            {/* Overlay background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />

            {/* Panel Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="fixed inset-y-0 left-0 w-[85vw] sm:w-[380px] bg-brand-bg/95 border-r border-white/10 z-50 p-6 flex flex-col justify-between backdrop-blur-xl"
            >
              <div className="flex-1 flex flex-col overflow-hidden space-y-6 mb-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 flex-shrink-0">
                  <h3 className="font-extrabold text-lg text-slate-100 flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-brand-pink" />
                    <span>Latest Updates</span>
                  </h3>
                  <button
                    onClick={() => setPanelOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Announcement Stack */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-1.5 scrollbar-thin scrollbar-thumb-brand-pink">
                  {/* Announcement 1: Hackathons */}
                  <div
                    onClick={() => {
                      setPanelOpen(false);
                      navigate('/hackathons');
                    }}
                    className="p-4 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 hover:border-brand-pink/60 transition duration-300 cursor-pointer relative group"
                  >
                    <span className="absolute top-3 right-3 bg-brand-pink text-[9px] font-extrabold px-2 py-0.5 rounded-full text-white uppercase tracking-wider">
                      NEW
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-100 group-hover:text-brand-pink transition duration-200 pr-12">
                      📌 Upcoming Hackathons!
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      Walmart Sparkathon, WWT Women, and Delhi Ideathons. Tap to explore rules and timelines.
                    </p>
                  </div>

                  {/* Announcement 2: Summer break */}
                  <div className="p-4 rounded-2xl bg-amber-500/[0.03] border border-amber-500/20 relative">
                    <span className="absolute top-3 right-3 bg-amber-500/20 text-amber-400 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      ACTIVE
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-amber-200">
                      ☀️ Summer Vacation Started
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      <span className="text-slate-300 font-bold block mb-0.5">June 2, 2026</span>
                      The official summer recess has commenced! Enjoy your break till July 31. Use this time for DSA prep, building projects, and preparing for the upcoming placement season.
                    </p>
                  </div>

                  {/* Announcement 3: Exam evaluations */}
                  <div className="p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20 relative">
                    <span className="absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      INFO
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-200">
                      📝 Exam Evaluations Underway
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      <span className="text-slate-300 font-bold block mb-0.5">June 2, 2026</span>
                      Evaluation of answer sheets for Even Semester End-Term exams has officially started. Compilation of results is scheduled to be completed by early July.
                    </p>
                  </div>

                  {/* Announcement 4: Placement prep drive */}
                  <div className="p-4 rounded-2xl bg-brand-purple/[0.03] border border-brand-purple/20 relative">
                    <span className="absolute top-3 right-3 bg-brand-purple/20 text-brand-purple text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      T&P
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-purple-200">
                      💼 T&P Placement Prep Drive
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      <span className="text-slate-300 font-bold block mb-0.5">June 2, 2026</span>
                      The Training & Placement cell has opened registrations for summer interview prep drives. Update your resumes, LinkedIn profiles, and register via the T&P portal!
                    </p>
                  </div>

                  {/* Announcement 5: Semester fee submission */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative">
                    <span className="absolute top-3 right-3 bg-white/5 text-slate-400 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      NOTICES
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-200">
                      💰 ERP Fee Payment Extension
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      <span className="text-slate-300 font-bold block mb-0.5">June 2, 2026</span>
                      Submission of academic fees for the upcoming semester on the ERP portal has been extended to June 10, 2026. Please complete the transaction to avoid fine accumulation.
                    </p>
                  </div>

                  {/* Announcement 6: Freshers */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-200">
                      🎓 Orientation Day
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      August 11: Grand welcoming ceremonies, society presentations, and department intros.
                    </p>
                  </div>

                  {/* Announcement 7: Societies */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-200">
                      🧑‍🎤 Society Auditions
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold leading-relaxed">
                      Auditions start mid-August! Prep your talents in drama, music, literature, arts & sports.
                    </p>
                  </div>
                </div>
              </div>

              {/* Suggestion Box Footer CTA */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-pink/15 to-brand-purple/15 border border-brand-pink/35 space-y-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-brand-pink" />
                  <span className="text-xs font-extrabold text-slate-100 uppercase tracking-wider">Suggestion Box</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  Got an idea to make IGDTUW Nest even more cozy? Submit reviews or suggest canteens below!
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeaKvkX4JG-wT_FoLseRppd3j3l-yFlHX2LNIjT8u9elR9mJQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded-xl bg-brand-pink hover:bg-brand-pink/90 text-white font-bold text-xs transition duration-300 block shadow-sm"
                >
                  Submit Suggestion
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

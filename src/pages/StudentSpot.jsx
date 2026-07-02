import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, ShoppingBag, Camera, Sparkles, MapPin, Heart, Shuffle, Copy, X, Compass, HelpCircle } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';
import SpotCard from '../components/SpotCard';

// Animation configurations
const bentoContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const bentoItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 110, damping: 17 } }
};

export default function StudentSpot() {
  const [activeTab, setActiveTab] = useState('food');
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Surprise Me Randomizer states
  const [randomSpotModal, setRandomSpotModal] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinningText, setSpinningText] = useState("");

  const foodSpots = [
    { id: "f1", title: "Kashmere Gate Metro Outlets", description: "McDonald's, Burger King, Chaayos, Dosa Planet, Zudio & more — all just a few mins' walk from college.", distance: "~3 km (10 min via metro)", images: ["/spot1.png", "/spot1.1.png", "/spot1.2.png"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Kashmere+Gate+Metro+Station,+Delhi" },
    { id: "f2", title: "Majnu Ka Tila (Ama Café, Norwang)", description: "Tibetan cafés, momo stalls & pancakes with serene riverside vibes. Aesthetic spots for food & photos!", distance: "~6 km (18–20 min via metro)", images: ["/spot2.png", "/spot2.1.png", "/spot2.2.png"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Majnu+Ka+Tila,+New+Delhi" },
    { id: "f3", title: "Connaught Place (CP)", description: "Whether it's a chill evening or a fest celebration, CP is where IGDTUW girls always find their vibe. From iconic street food like Jain Chawal Wale and hot kachoris near Janpath to Wenger's bakery and aesthetic cafés tucked in every block.", distance: "~7 km (25 min via Metro)", images: ["/spot3.jpg", "/spot3.1.jpg", "/spot3.2.jpg", "/spot3.3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Connaught+Place,+New+Delhi" },
    { id: "f4", title: "Sudama Chai & Vibes", description: "More than just chai — it’s the heart of North Campus street food. Right around the corner you'll find iconic spots like Dolma Aunty Momos and Tom Uncle Maggie Point. Pure DU girl energy.", distance: "~5–6 km (20 min)", images: ["/spot4.jpeg", "/spot4.1.jpeg", "/spot4.2.jpeg", "/tommaggie.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Sudama+Tea+Stall,+Kamla+Nagar,+New+Delhi" },
    { id: "f5", title: "Hauz Khas Cafés", description: "From the floral vibes of The Pink Room to the artsy chaos of Social and cozy corners at Elma’s — these cafés are a whole mood after fort walks and lake views.", distance: "~12–13 km (35–40 min via metro)", images: ["/cafepink.jpg", "/social.jpg", "/elma.jpg"], secondaryLinks: [{ label: "Pink Room", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Pink+Room+Cafe,+Hauz+Khas+Village,+New+Delhi" }, { label: "Social", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Hauz+Khas+Social,+Hauz+Khas+Village,+New+Delhi" }, { label: "Elma’s", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Elma%27s+Bakery+&+Kitchen,+Hauz+Khas+Village,+New+Delhi" }] },
    { id: "f6", title: "Civil Lines Cafés & Snacks", description: "Close to campus and full of chill — SOCIAL and Cling are IGDTUW favs. Don’t miss Fateh Chand ki Kachori for the ultimate Delhi breakfast win.", distance: "~4–5 km (15–20 min auto)", images: ["/socialcl.jpg", "/cling.jpg", "/fatehkachori.jpg"], secondaryLinks: [{ label: "Social Civil Lines", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Social,+Civil+Lines+Exchange+Building,+Alipur+Road,+New+Delhi" }, { label: "Cling", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Cling,+Timarpur+Mall+Road,+Civil+Lines,+New+Delhi" }, { label: "Fateh Chand Ki Kachori", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Fateh+Chand+Ki+Kachori,+Opposite+St.+Xavier+School,+Civil+Lines,+New+Delhi" }] },
    { id: "f7", title: "Chandni Chowk Food Trail", description: "A must-do for every IGDTUW foodie! From the legendary Paranthe Wali Galli to Giani di Hatti’s rabri falooda, Daulat ki Chaat, and iconic matar kulchas & kachoris — this street serves stories, not just snacks.", distance: "~3.5 km (10–15 min auto/metro)", images: ["/paranthe.jpg", "/falooda.jpg", "/kachori.jpg", "/kulcha.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Chandni+Chowk,+Delhi" },
    { id: "f8", title: "Champa Gali, Saket", description: "Aesthetic lanes, fairy lights, indie cafés, and Delhi’s softest vibe corner. Champa Gali is far but totally worth it for IGDTUW girls chasing quiet, creativity & killer coffee.", distance: "~18 km (45–50 min via metro)", images: ["/champa1.jpg", "/champa2.jpg", "/champa3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Champa+Gali,+Saket,+New+Delhi" }
  ];

  const marketSpots = [
    { id: "m1", title: "Kamla Nagar Market", description: "Trendy tops, accessories, street food & DU hustle. Haggle like a pro and grab a shake at Bistro 57 when you’re done!", distance: "~4 km (15 min via Metro/Auto)", images: ["/kamla.jpg", "/kamla1.jpg", "/kamla2.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Kamla+Nagar+Market,+Delhi" },
    { id: "m2", title: "Janpath Market", description: "Boho jewellery, export surplus tees & the *cheapest* scarves in town. A must-visit before fest season!", distance: "~7 km (25 min via Metro)", images: ["/janpath.jpg", "/janpath1.jpg", "/janpath2.jpg", "/janpath3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Janpath+Market,+Connaught+Place,+New+Delhi" },
    { id: "m3", title: "Zudio – Kashmere Gate Metro", description: "Affordable basics, cute socks & accessories just outside Gate No. 1. Perfect post-class retail therapy without leaving the metro station area.", distance: "~3 km (10 min walk/Metro)", images: ["/zudio.jpg", "/zudio1.png", "/zudio2.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Zudio,+Kashmere+Gate,+Delhi" },
    { id: "m4", title: "Omaxe Mall, Chandni Chowk", description: "Air-conditioned break from Old Delhi chaos: massive food court (& Dawatpur thalis), gorgeous Indian-wear showrooms, and Insta-worthy modern interiors.", distance: "~5 km (18 min via Metro)", images: ["/omaxe1.jpg", "/omaxe2.jpg", "/omaxe3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Omaxe+Mall,+Chandni+Chowk,+Delhi" },
    { id: "m5", title: "NSP Mall (Netaji Subhash Place)", description: "Want a full plan in one place? NSP has it all — cinemas, cafés, arcade games, street food stalls, and rooftop restaurants. IGDTUW girls love it for group hangouts, society dinners, or just to vibe after midsems.", distance: "~9 km (25–30 min via Metro)", images: ["/nsp1.jpg", "/nsp2.jpg", "/nsp3.jpg", "/nsp4.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/NSP+Netaji+Subhash+Place,+Delhi" },
    { id: "m6", title: "Khan Market", description: "For IGDTUW girls who vibe with bookstores, cold brew, and quiet selfies. Khan Market has aesthetic cafés, boutique corners & that Fateh Bookstore window that lives rent-free on every Delhi girl’s Pinterest.", distance: "~8 km (25 min via Metro)", images: ["/khanmarket1.jpg", "/fateh.jpg", "/khan market2.jpg", "/khanmarket3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Khan+Market,+New+Delhi" },
    { id: "m7", title: "Dilli Haat (INA)", description: "Handcrafted jewellery, embroidered bags, bamboo lamps & regional thalis from every state — Dilli Haat is where Delhi shows off its roots. From shopping to momo-stuffing, it’s a cultural hug with dilli tadka!", distance: "~11 km (35–40 min via Metro)", images: ["/dillihaat1.jpg", "/dillihaat2.jpg", "/dillihaat3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Dilli+Haat,+INA,+New+Delhi" },
    { id: "m8", title: "Lajpat Nagar Market", description: "IGDTUW girls swear by this one for juttis, earrings, ethnic wear, fabrics, and last-minute function fits! Lajpat’s Central Market is loud, packed, and full of “Bhaiya, thoda kam lagao na” energy.", distance: "~9.5 km (30 min via Metro)", images: ["/lajpat1.jpg", "/lajpat2.jpg", "/lajpat3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Lajpat+Nagar+Market,+New+Delhi" }
  ];

  const sightseeingSpots = [
    { id: "s1", title: "Red Fort", description: "Right in our backyard — history, grand architecture & wide open lawns. Visit during evening light shows or for republic day vibes.", distance: "~2.5 km (7 min auto)", images: ["/redfort1.jpg", "/redfort2.jpg", "/redfort3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Red+Fort,+Delhi" },
    { id: "s2", title: "India Gate & War Memorial", description: "From late-night ice cream walks to quiet moments by the flame — India Gate hits different. The nearby National War Memorial adds goosebumps, history, and powerful photo spots.", distance: "~6.5 km (25 min metro + auto)", images: ["/indiagate1.jpg", "/indiagate2.jpg", "/nwm1.jpg", "/nwm2.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/India+Gate,+New+Delhi" },
    { id: "s3", title: "Hauz Khas Fort & Lake", description: "A classic IGDTUW girl getaway — whether it's for brunch plans, poetry reels, or just escaping the campus chaos. The lakeside ruins, cozy cafés, and artsy vibe make it our go-to for peace, pics & plans.", distance: "~12 km (35 min via metro)", images: ["/hauz1.jpg", "/haus2.jpg", "/haus3.jpg", "/haus4.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Hauz+Khas+Fort,+New+Delhi/" },
    { id: "s4", title: "Bangla Sahib & CP Hanuman Mandir", description: "Need a moment of peace or strength before exams? These two spiritual gems — just minutes from CP — offer calm and grounding in the middle of the city rush. Bangla Sahib offers peace & langar; Mandir is perfect for exams prep.", distance: "~7 km (25 min via Metro)", images: ["/gurudwara.jpg", "/mandir.jpg", "/gurudwara1.jpg", "/mandir1.jpg"], secondaryLinks: [{ label: "Gurudwara Bangla Sahib", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Gurudwara+Bangla+Sahib,+New+Delhi" }, { label: "CP Hanuman Mandir", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Hanuman+Mandir,+Connaught+Place" }] },
    { id: "s5", title: "NGMA (Gallery of Modern Art)", description: "Peaceful museum + courtyard café. Abstract art, AC halls, and the perfect quiet study-escape spot.", distance: "~7 km (25 min via metro)", images: ["/ngma1.jpg", "/ngma2.jpg", "/ngma3.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/National+Gallery+of+Modern+Art,+New+Delhi/" },
    { id: "s6", title: "Yamuna Ghat (Vasudev Ghat Park)", description: "Sunrise boat rides, early morning birds, and peaceful aarti by the riverside — Yamuna Ghat is a hidden gem. Vasudev Ghat Park nearby adds lush greenery and photo spots with almost zero crowd.", distance: "~3.0 km (10–15 min auto)", images: ["/yamunaghat1.jpg", "/yamunaghat2.jpg", "/yamunaghat3.jpg", "/yamunaghat4.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Vasudev+Ghat+Park,+New+Delhi" },
    { id: "s7", title: "Sunder Nursery Garden Complex", description: "A dreamy Delhi gem for slow strolls, quiet dates, and garden cafés. Sunder Nursery offers rose gardens, fountains & Mughal ruins, while Karnatic Café (inside!) serves cozy South Indian plates.", distance: "~9.5 km (30–35 min via Metro)", images: ["/sunder1.jpg", "/sunder2.jpg", "/karnatic1.jpg", "/karnatic2.jpg"], mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Sunder+Nursery,+New+Delhi" },
    { id: "s8", title: "Lodhi Garden & Art District", description: "A fav for IGDTUW girls who love peaceful vibes & bold creativity. Lodhi Garden is perfect for slow walks & book dates, while Lodhi Art District bursts with murals, graffiti & color.", distance: "~9 km (25–30 min via metro)", images: ["/lodhi1.jpg", "/lodhi2.jpg", "/lodhi3.jpg", "/lodhi4.jpg"], secondaryLinks: [{ label: "Lodhi Garden Map", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Lodhi+Garden,+New+Delhi" }, { label: "Art District Map", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Lodhi+Art+District,+New+Delhi" }] }
  ];

  const allSpots = [...foodSpots, ...marketSpots, ...sightseeingSpots];
  const tabs = [
    { id: 'food', name: '🍔 Food & Chill', icon: Coffee, data: foodSpots },
    { id: 'markets', name: '🛍️ Markets & Shopping', icon: ShoppingBag, data: marketSpots },
    { id: 'sightseeing', name: '📸 Explore & Sightseeing', icon: Camera, data: sightseeingSpots },
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  // Favorites logic hooks
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('nest_favs')) || [];
    setFavorites(savedFavs);
  }, []);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter(favId => favId !== id);
      triggerToast("Removed from Nest Pocket 💔");
    } else {
      updated = [...favorites, id];
      triggerToast("Saved to Nest Pocket! ✨");
    }
    setFavorites(updated);
    localStorage.setItem('nest_favs', JSON.stringify(updated));
  };

  // Custom clipboard routing auto-copy handler
  const copyRouteShortcut = (title, distance, e) => {
    e.stopPropagation();
    const routeQuery = `IGDTUW to ${title} (${distance})`;
    navigator.clipboard.writeText(routeQuery);
    triggerToast(`Copied route string to clipboard! 📋`);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Surprise Me Slot Machine Trigger
  const handleSurpriseMe = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let iterations = 0;
    
    const interval = setInterval(() => {
      const randomPicker = allSpots[Math.floor(Math.random() * allSpots.length)];
      setSpinningText(randomPicker.title);
      iterations++;
      
      if (iterations > 12) {
        clearInterval(interval);
        const finalSpot = allSpots[Math.floor(Math.random() * allSpots.length)];
        setRandomSpotModal(finalSpot);
        setIsSpinning(false);
      }
    }, 90);
  };

  // Filter spots to view dynamically
  const filteredData = showFavoritesOnly 
    ? allSpots.filter(spot => favorites.includes(spot.id))
    : currentTab.data;

  return (
    <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#E2D9F5] via-[#F5DDF0] to-[#DBE7FC] overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      {/* --- Multi-Layer Ambient Background Gradients --- */}
      <motion.div 
        animate={{ scale: [1, 1.12, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-300/15 to-rose-400/10 blur-[130px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[-15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-purple-300/10 to-pink-400/10 blur-[150px] pointer-events-none z-0" 
      />

      {/* --- Action Notification Banner Toast --- */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 z-50 bg-slate-900 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-800"
          >
            <Sparkles className="w-4 h-4 text-pink-400 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8 flex-1 flex flex-col">
        
        {/* --- High-End Bento Grid Hero Banner --- */}
        <motion.div 
          variants={bentoContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Main Title Tile (Large) */}
          <motion.div 
            variants={bentoItemVariants}
            className="lg:col-span-2 relative overflow-hidden bg-white/70 border border-slate-200/60 backdrop-blur-xl p-6 sm:p-8 rounded-[32px] shadow-sm flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-900 pointer-events-none">
              <Compass className="w-32 h-32" />
            </div>
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 text-[10px] tracking-widest font-black uppercase border border-pink-200/50 px-3 py-1 rounded-full w-fit flex items-center gap-1.5 mb-4 shadow-sm bg-white/50">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span>Honest Student Curations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Student Picks:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
                Cafés & Hangouts
              </span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl font-medium leading-relaxed">
              Because some vibes just can’t be searched on Google Maps. Here is where the <span className="text-pink-500 font-bold">IGDTUW crew</span> actually eats, shops, and kicks back after exams.
            </p>
          </motion.div>

          {/* Vibe Analytics & Filter Block (Small Stack) */}
          <motion.div 
            variants={bentoItemVariants}
            className="grid grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {/* Stat Box */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-5 rounded-[28px] text-white shadow-md flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-80">Total Curations</span>
              <div className="mt-4">
                <span className="text-3xl font-black tracking-tight">{allSpots.length}</span>
                <span className="text-xs font-semibold block opacity-90">Secret Spots Listed</span>
              </div>
            </div>

            {/* Toggle Pocket Favorites */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`p-5 rounded-[28px] border transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden ${
                showFavoritesOnly 
                  ? 'bg-purple-900 border-purple-950 text-white shadow-md' 
                  : 'bg-white/70 border-slate-200/60 backdrop-blur-xl hover:border-pink-200 text-slate-800'
              }`}
            >
              <Heart className={`w-5 h-5 ${showFavoritesOnly ? 'fill-pink-400 text-pink-400' : 'text-slate-400'}`} />
              <div className="mt-4">
                <span className="text-lg font-black tracking-tight block">
                  {showFavoritesOnly ? "Showing Saved" : "My Nest Pocket"}
                </span>
                <span className={`text-[11px] font-bold ${showFavoritesOnly ? 'text-purple-200' : 'text-slate-500'}`}>
                  {favorites.length} spots bookmarked
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* --- Smooth Sliding Tab Navigation --- */}
        {!showFavoritesOnly && (
          <div className="flex justify-center border-b border-slate-200/40 pb-2">
            <div className="flex bg-white/70 backdrop-blur-md border border-slate-200/80 p-1.5 rounded-2xl gap-1.5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] relative">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-300 focus:outline-none z-10 ${
                      active ? 'text-pink-600' : 'text-slate-500 hover:text-pink-500'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-200/40 rounded-xl z-[-1] shadow-[0_4px_15px_rgba(244,63,94,0.05)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className={`w-4 h-4 ${active ? 'scale-110 text-pink-500' : ''}`} />
                    <span className="hidden sm:inline">{tab.name}</span>
                    <span className="inline sm:hidden">{tab.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* --- Dynamic Content Area --- */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${showFavoritesOnly}`}
              variants={gridContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredData.length > 0 ? (
                filteredData.map((spot) => {
                  const isFav = favorites.includes(spot.id);
                  return (
                    <motion.div 
                      key={spot.id} 
                      variants={cardItemVariants}
                      whileHover={{ y: -6 }}
                      className="h-full relative group bg-white border border-slate-100 rounded-[28px] overflow-hidden flex flex-col shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.04)] hover:border-pink-100/70 transition-all duration-300"
                    >
                      {/* Premium Top Image Cover Badge Engine */}
                      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                        {/* Custom Distance Tag */}
                        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center gap-1.5 z-10">
                          <MapPin className="w-3 h-3 text-pink-500" />
                          <span className="text-[10px] font-extrabold tracking-wide text-slate-700 uppercase">{spot.distance.split(' ')[0]} {spot.distance.split(' ')[1] || ''}</span>
                        </div>

                        {/* Pocket Heart Action Toggle */}
                        <button 
                          onClick={(e) => toggleFavorite(spot.id, e)}
                          className="absolute top-3 right-3 w-8.5 h-8.5 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm z-10 hover:bg-white transition-colors duration-200 group/btn"
                        >
                          <Heart className={`w-4 h-4 transition-transform duration-200 group-hover/btn:scale-110 ${isFav ? 'fill-pink-500 text-pink-500' : 'text-slate-400'}`} />
                        </button>

                        {/* Standard First Asset Loader Placeholder */}
                        <img 
                          src={spot.images[0]} 
                          alt={spot.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60" }}
                        />

                        {/* Quick Utility Control Toolbar */}
                        <div className="absolute bottom-3 right-3 flex gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => copyRouteShortcut(spot.title, spot.distance, e)}
                            className="p-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-white text-[10px] font-bold flex items-center gap-1 hover:bg-slate-900"
                            title="Copy route string"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copy Route</span>
                          </button>
                        </div>
                      </div>

                      {/* Card Bottom Panel Content Routing Pass-through */}
                      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                        <SpotCard
                          title={spot.title}
                          description={spot.description}
                          distance={spot.distance}
                          images={spot.images}
                          mapsLink={spot.mapsLink}
                          secondaryLinks={spot.secondaryLinks}
                        />
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">No spots found</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    {showFavoritesOnly ? "Your bookmarked pocket layout is empty! Tap the hearts on items to add them here." : "No spots matches this category profile."}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- PREMIUM UPGRADED "SURPRISE ME" BUTTON ON THE LEFT SIDE --- */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleSurpriseMe}
          className="relative overflow-hidden px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-purple-950 text-white text-xs font-bold tracking-wider uppercase border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-2.5 group transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity after:absolute after:-inset-4 after:rounded-3xl after:bg-gradient-to-r after:from-pink-500/20 after:to-purple-500/20 after:blur-xl after:opacity-40 hover:after:opacity-70 after:-z-10 after:animate-pulse"
        >
          {isSpinning ? (
            <Shuffle className="w-4 h-4 animate-spin text-pink-400" />
          ) : (
            <Shuffle className="w-4 h-4 text-pink-400 group-hover:rotate-180 transition-transform duration-500 ease-out" />
          )}
          <span className="bg-gradient-to-r from-white via-slate-100 to-pink-200 bg-clip-text text-transparent font-extrabold">
            {isSpinning ? "Shuffling Grid..." : "Surprise Me 🎲"}
          </span>
        </motion.button>
      </div>

      {/* --- Slot Machine Selection Output Modal Overlay --- */}
      <AnimatePresence>
        {isSpinning && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="bg-white px-8 py-10 rounded-[32px] border border-slate-100 shadow-2xl max-w-sm w-full text-center space-y-4">
              <span className="text-[10px] font-black tracking-widest text-pink-500 uppercase block animate-pulse">Scanning the Grid...</span>
              <div className="h-12 flex items-center justify-center overflow-hidden">
                <motion.p key={spinningText} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-extrabold text-slate-800 text-base line-clamp-1">{spinningText}</motion.p>
              </div>
            </div>
          </motion.div>
        )}

        {randomSpotModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setRandomSpotModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              className="bg-white max-w-md w-full rounded-[36px] overflow-hidden border border-slate-100 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setRandomSpotModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-slate-800 flex items-center justify-center z-10 backdrop-blur-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-48 bg-slate-100 relative">
                <img src={randomSpotModal.images[0]} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <div className="flex items-center gap-1 text-[11px] font-bold bg-pink-500 px-2 py-0.5 rounded-md w-fit mb-1.5 shadow-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{randomSpotModal.distance}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{randomSpotModal.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-xs font-medium text-slate-600 leading-relaxed">{randomSpotModal.description}</p>
                <div className="flex gap-3">
                  <a 
                    href={randomSpotModal.mapsLink || (randomSpotModal.secondaryLinks && randomSpotModal.secondaryLinks[0].url)} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl text-white font-bold text-xs text-center shadow-md shadow-pink-500/10 hover:shadow-pink-500/20 transform hover:-y-0.5 transition-all"
                  >
                    Open Routes Map 🚀
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
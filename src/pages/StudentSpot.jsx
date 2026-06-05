import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, ShoppingBag, Camera, Sparkles } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';
import SpotCard from '../components/SpotCard';

export default function StudentSpot() {
  const [activeTab, setActiveTab] = useState('food');

  const foodSpots = [
    {
      title: "Kashmere Gate Metro Outlets",
      description: "McDonald's, Burger King, Chaayos, Dosa Planet, Zudio & more — all just a few mins' walk from college.",
      distance: "~3 km (10 min via metro)",
      images: ["/spot1.png", "/spot1.1.png", "/spot1.2.png"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Kashmere+Gate+Metro+Station,+Delhi"
    },
    {
      title: "Majnu Ka Tila (Ama Café, Norwang)",
      description: "Tibetan cafés, momo stalls & pancakes with serene riverside vibes. Aesthetic spots for food & photos!",
      distance: "~6 km (18–20 min via metro)",
      images: ["/spot2.png", "/spot2.1.png", "/spot2.2.png"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Majnu+Ka+Tila,+New+Delhi"
    },
    {
      title: "Connaught Place (CP)",
      description: "Whether it's a chill evening or a fest celebration, CP is where IGDTUW girls always find their vibe. From iconic street food like Jain Chawal Wale and hot kachoris near Janpath to Wenger's bakery and aesthetic cafés tucked in every block.",
      distance: "~7 km (25 min via Metro)",
      images: ["/spot3.jpg", "/spot3.1.jpg", "/spot3.2.jpg", "/spot3.3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Connaught+Place,+New+Delhi"
    },
    {
      title: "Sudama Chai & Vibes",
      description: "More than just chai — it’s the heart of North Campus street food. Right around the corner you'll find iconic spots like Dolma Aunty Momos and Tom Uncle Maggie Point. Pure DU girl energy.",
      distance: "~5–6 km (20 min)",
      images: ["/spot4.jpeg", "/spot4.1.jpeg", "/spot4.2.jpeg", "/tommaggie.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Sudama+Tea+Stall,+Kamla+Nagar,+New+Delhi"
    },
    {
      title: "Hauz Khas Cafés",
      description: "From the floral vibes of The Pink Room to the artsy chaos of Social and cozy corners at Elma’s — these cafés are a whole mood after fort walks and lake views.",
      distance: "~12–13 km (35–40 min via metro)",
      images: ["/cafepink.jpg", "/social.jpg", "/elma.jpg"],
      secondaryLinks: [
        { label: "Pink Room", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Pink+Room+Cafe,+Hauz+Khas+Village,+New+Delhi" },
        { label: "Social", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Hauz+Khas+Social,+Hauz+Khas+Village,+New+Delhi" },
        { label: "Elma’s", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Elma%27s+Bakery+&+Kitchen,+Hauz+Khas+Village,+New+Delhi" }
      ]
    },
    {
      title: "Civil Lines Cafés & Snacks",
      description: "Close to campus and full of chill — SOCIAL and Cling are IGDTUW favs. Don’t miss Fateh Chand ki Kachori for the ultimate Delhi breakfast win.",
      distance: "~4–5 km (15–20 min auto)",
      images: ["/socialcl.jpg", "/cling.jpg", "/fatehkachori.jpg"],
      secondaryLinks: [
        { label: "Social Civil Lines", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Social,+Civil+Lines+Exchange+Building,+Alipur+Road,+New+Delhi" },
        { label: "Cling", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Cling,+Timarpur+Mall+Road,+Civil+Lines,+New+Delhi" },
        { label: "Fateh Chand Kachori", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Fateh+Chand+Ki+Kachori,+Opposite+St.+Xavier+School,+Civil+Lines,+New+Delhi" }
      ]
    },
    {
      title: "Chandni Chowk Food Trail",
      description: "A must-do for every IGDTUW foodie! From the legendary Paranthe Wali Galli to Giani di Hatti’s rabri falooda, Daulat ki Chaat, and iconic matar kulchas & kachoris — this street serves stories, not just snacks.",
      distance: "~3.5 km (10–15 min auto/metro)",
      images: ["/paranthe.jpg", "/falooda.jpg", "/kachori.jpg", "/kulcha.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Chandni+Chowk,+Delhi"
    },
    {
      title: "Champa Gali, Saket",
      description: "Aesthetic lanes, fairy lights, indie cafés, and Delhi’s softest vibe corner. Champa Gali is far but totally worth it for IGDTUW girls chasing quiet, creativity & killer coffee.",
      distance: "~18 km (45–50 min via metro)",
      images: ["/champa1.jpg", "/champa2.jpg", "/champa3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Champa+Gali,+Saket,+New+Delhi"
    }
  ];

  const marketSpots = [
    {
      title: "Kamla Nagar Market",
      description: "Trendy tops, accessories, street food & DU hustle. Haggle like a pro and grab a shake at Bistro 57 when you’re done!",
      distance: "~4 km (15 min via Metro/Auto)",
      images: ["/kamla.jpg", "/kamla1.jpg", "/kamla2.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Kamla+Nagar+Market,+Delhi"
    },
    {
      title: "Janpath Market",
      description: "Boho jewellery, export surplus tees & the *cheapest* scarves in town. A must-visit before fest season!",
      distance: "~7 km (25 min via Metro)",
      images: ["/janpath.jpg", "/janpath1.jpg", "/janpath2.jpg", "/janpath3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Janpath+Market,+Connaught+Place,+New+Delhi"
    },
    {
      title: "Zudio – Kashmere Gate Metro",
      description: "Affordable basics, cute socks & accessories just outside Gate No. 1. Perfect post-class retail therapy without leaving the metro station area.",
      distance: "~3 km (10 min walk/Metro)",
      images: ["/zudio.jpg", "/zudio1.png", "/zudio2.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Zudio,+Kashmere+Gate,+Delhi"
    },
    {
      title: "Omaxe Mall, Chandni Chowk",
      description: "Air-conditioned break from Old Delhi chaos: massive food court (& Dawatpur thalis), gorgeous Indian-wear showrooms, and Insta-worthy modern interiors.",
      distance: "~5 km (18 min via Metro)",
      images: ["/omaxe1.jpg", "/omaxe2.jpg", "/omaxe3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Omaxe+Mall,+Chandni+Chowk,+Delhi"
    },
    {
      title: "NSP Mall (Netaji Subhash Place)",
      description: "Want a full plan in one place? NSP has it all — cinemas, cafés, arcade games, street food stalls, and rooftop restaurants. IGDTUW girls love it for group hangouts, society dinners, or just to vibe after midsems.",
      distance: "~9 km (25–30 min via Metro)",
      images: ["/nsp1.jpg", "/nsp2.jpg", "/nsp3.jpg", "/nsp4.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/NSP+Netaji+Subhash+Place,+Delhi"
    },
    {
      title: "Khan Market",
      description: "For IGDTUW girls who vibe with bookstores, cold brew, and quiet selfies. Khan Market has aesthetic cafés, boutique corners & that Fateh Bookstore window that lives rent-free on every Delhi girl’s Pinterest.",
      distance: "~8 km (25 min via Metro)",
      images: ["/khanmarket1.jpg", "/fateh.jpg", "/khan market2.jpg", "/khanmarket3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Khan+Market,+New+Delhi"
    },
    {
      title: "Dilli Haat (INA)",
      description: "Handcrafted jewellery, embroidered bags, bamboo lamps & regional thalis from every state — Dilli Haat is where Delhi shows off its roots. From shopping to momo-stuffing, it’s a cultural hug with dilli tadka!",
      distance: "~11 km (35–40 min via Metro)",
      images: ["/dillihaat1.jpg", "/dillihaat2.jpg", "/dillihaat3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Dilli+Haat,+INA,+New+Delhi"
    },
    {
      title: "Lajpat Nagar Market",
      description: "IGDTUW girls swear by this one for juttis, earrings, ethnic wear, fabrics, and last-minute function fits! Lajpat’s Central Market is loud, packed, and full of “Bhaiya, thoda kam lagao na” energy.",
      distance: "~9.5 km (30 min via Metro)",
      images: ["/lajpat1.jpg", "/lajpat2.jpg", "/lajpat3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Lajpat+Nagar+Market,+New+Delhi"
    }
  ];

  const sightseeingSpots = [
    {
      title: "Red Fort",
      description: "Right in our backyard — history, grand architecture & wide open lawns. Visit during evening light shows or for republic day vibes.",
      distance: "~2.5 km (7 min auto)",
      images: ["/redfort1.jpg", "/redfort2.jpg", "/redfort3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Red+Fort,+Delhi"
    },
    {
      title: "India Gate & War Memorial",
      description: "From late-night ice cream walks to quiet moments by the flame — India Gate hits different. The nearby National War Memorial adds goosebumps, history, and powerful photo spots.",
      distance: "~6.5 km (25 min metro + auto)",
      images: ["/indiagate1.jpg", "/indiagate2.jpg", "/nwm1.jpg", "/nwm2.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/India+Gate,+New+Delhi"
    },
    {
      title: "Hauz Khas Fort & Lake",
      description: "A classic IGDTUW girl getaway — whether it's for brunch plans, poetry reels, or just escaping the campus chaos. The lakeside ruins, cozy cafés, and artsy vibe make it our go-to for peace, pics & plans.",
      distance: "~12 km (35 min via metro)",
      images: ["/hauz1.jpg", "/haus2.jpg", "/haus3.jpg", "/haus4.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Hauz+Khas+Fort,+New+Delhi/"
    },
    {
      title: "Bangla Sahib & CP Hanuman Mandir",
      description: "Need a moment of peace or strength before exams? These two spiritual gems — just minutes from CP — offer calm and grounding in the middle of the city rush. Bangla Sahib offers peace &langar; Mandir is perfect for exams prep.",
      distance: "~7 km (25 min via Metro)",
      images: ["/gurudwara.jpg", "/mandir.jpg", "/gurudwara1.jpg", "/mandir1.jpg"],
      secondaryLinks: [
        { label: "Gurudwara Bangla Sahib", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Gurudwara+Bangla+Sahib,+New+Delhi" },
        { label: "CP Hanuman Mandir", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Hanuman+Mandir,+Connaught+Place" }
      ]
    },
    {
      title: "NGMA (Gallery of Modern Art)",
      description: "Peaceful museum + courtyard café. Abstract art, AC halls, and the perfect quiet study-escape spot.",
      distance: "~7 km (25 min via metro)",
      images: ["/ngma1.jpg", "/ngma2.jpg", "/ngma3.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/National+Gallery+of+Modern+Art,+New+Delhi/"
    },
    {
      title: "Yamuna Ghat (Vasudev Ghat Park)",
      description: "Sunrise boat rides, early morning birds, and peaceful aarti by the riverside — Yamuna Ghat is a hidden gem. Vasudev Ghat Park nearby adds lush greenery and photo spots with almost zero crowd.",
      distance: "~3.0 km (10–15 min auto)",
      images: ["/yamunaghat1.jpg", "/yamunaghat2.jpg", "/yamunaghat3.jpg", "/yamunaghat4.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Vasudev+Ghat+Park,+New+Delhi"
    },
    {
      title: "Sunder Nursery Garden Complex",
      description: "A dreamy Delhi gem for slow strolls, quiet dates, and garden cafés. Sunder Nursery offers rose gardens, fountains & Mughal ruins, while Karnatic Café (inside!) serves cozy South Indian plates.",
      distance: "~9.5 km (30–35 min via Metro)",
      images: ["/sunder1.jpg", "/sunder2.jpg", "/karnatic1.jpg", "/karnatic2.jpg"],
      mapsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Sunder+Nursery,+New+Delhi"
    },
    {
      title: "Lodhi Garden & Art District",
      description: "A fav for IGDTUW girls who love peaceful vibes & bold creativity. Lodhi Garden is perfect for slow walks & book dates, while Lodhi Art District bursts with murals, graffiti & color.",
      distance: "~9 km (25–30 min via metro)",
      images: ["/lodhi1.jpg", "/lodhi2.jpg", "/lodhi3.jpg", "/lodhi4.jpg"],
      secondaryLinks: [
        { label: "Lodhi Garden Map", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Lodhi+Garden,+New+Delhi" },
        { label: "Art District Map", url: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Lodhi+Art+District,+New+Delhi" }
      ]
    }
  ];

  const tabs = [
    { id: 'food', name: '🍔 Food & Chill', icon: Coffee, data: foodSpots },
    { id: 'markets', name: '🛍️ Markets & Shopping', icon: ShoppingBag, data: marketSpots },
    { id: 'sightseeing', name: '📸 Explore & Sightseeing', icon: Camera, data: sightseeingSpots },
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="relative min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8 flex-1 flex flex-col">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto bg-brand-pink/15 text-brand-pink text-xs border border-brand-pink/20 px-3 py-1.5 rounded-full font-bold w-fit flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Student Reviews</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Student Picks: Cafés & Hangouts
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
            Because some vibes just can’t be Googled. Here is where IGDTUW girls actually eat, window-shop, and unwind!
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex justify-center border-b border-white/5 pb-1">
          <div className="flex bg-white/[0.03] border border-white/5 p-1.5 rounded-2xl gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-300 focus:outline-none ${
                    active
                      ? 'bg-brand-pink/20 text-brand-pink shadow-[0_0_15px_rgba(236,72,153,0.08)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="inline sm:hidden">{tab.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 pt-2"
          >
            {currentTab.data.map((spot, idx) => (
              <SpotCard
                key={idx}
                title={spot.title}
                description={spot.description}
                distance={spot.distance}
                images={spot.images}
                mapsLink={spot.mapsLink}
                secondaryLinks={spot.secondaryLinks}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

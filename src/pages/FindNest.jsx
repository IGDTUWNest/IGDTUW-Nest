import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertCircle, Sparkles, DollarSign, Check, 
  ChevronRight, ChevronLeft, Undo2, Users, 
  ShieldAlert 
} from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';
import PGCard from '../components/PGCard';

// Decoupled Static Configuration to optimize memory footprint & eliminate re-allocation on re-renders
const PGS_DATA = [
  {
    title: "Sunder Bhawan PG – Civil Lines",
    rent: "₹21,000 – ₹22,000 (double sharing)",
    minRent: 21000,
    maxRent: 22000,
    sharing: ["double"],
    hasAC: false,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: false,
    hasPowerBackup: false,
    facilities: "Meals, WiFi, Geyser, Quiet Environment, Security",
    nearby: "Civil Lines Metro Station",
    detailsLink: "https://www.justdial.com/Delhi/Sunder-Bhawan-Girls-Pg-Hostel-Near-Civil-Lines-Metro-Station-Civil-Lines/011PXX11-XX11-230626145847-R7Y6_BZDET",
    distance: "~3.4 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Sunder+Bhawan+PG+Kashmere+Gate,+Delhi",
    isHighlighted: true,
    locality: "Civil Lines"
  },
  {
    title: "Saisha Homes – GTB Nagar",
    rent: "₹20,000",
    minRent: 20000,
    maxRent: 20000,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "Meals, Wi-Fi, AC, Laundry, Attached Washroom, Power Backup, Security, Geyser, Personal Table/Cupboard",
    nearby: "2637, Hudson Lane, GTB Nagar",
    detailsLink: "https://www.magicbricks.com/propertyDetail/saisha-home-pg-hudson-lane-gtb-nagar-in-new-delhi&pgid=4d4233323430677261646531",
    distance: "~7.5 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/2637+Hudson+Lane,+GTB+Nagar,+Delhi",
    isHighlighted: false,
    locality: "GTB Nagar & Hudson"
  },
  {
    title: "Toronto House – Stanza Living",
    rent: "₹15,399 – ₹18,299",
    minRent: 15399,
    maxRent: 18299,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: false,
    hasPowerBackup: true,
    facilities: "AC, Meals, Wi‑Fi, Housekeeping, Attached Washroom, Security, Biometric Entry",
    nearby: "Jawahar Nagar, North Campus",
    detailsLink: "https://www.stanzaliving.com/delhi/pg-hostel-in-north-campus/female/toronto-house",
    distance: "~5 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Toronto+House,+North+Campus+Delhi",
    isHighlighted: false,
    locality: "North Campus"
  },
  {
    title: "Birdhouse PG – Vijay Nagar",
    rent: "₹17,000 – ₹22,000",
    minRent: 17000,
    maxRent: 22000,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "Meals, Wi-Fi, AC, Laundry, Power Backup, Geyser, Security",
    nearby: "Bungalow Road, Hudson Lane side",
    detailsLink: "https://birdhouse.co.in/new-delhi/",
    distance: "~7 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Birdhouse+PG+Vijay+Nagar+Delhi",
    isHighlighted: false,
    locality: "North Campus"
  },
  {
    title: "Exotic PG – Hudson Lane",
    rent: "₹7,800 - ₹10,400",
    minRent: 7800,
    maxRent: 10400,
    sharing: ["double", "triple"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: false,
    hasPowerBackup: true,
    facilities: "AC, Food*, Wi‑Fi, TV, Power Backup, Security",
    nearby: "Hudson Lane, GTB Nagar – student hub",
    detailsLink: "https://www.magicbricks.com/propertyDetail/exotic-pg-hudson-lane-gtb-nagar-in-new-delhi&pgid=4d42323231363933677261646532",
    distance: "~6.3 km",
    directionsLink: null,
    isHighlighted: false,
    locality: "GTB Nagar & Hudson"
  },
  {
    title: "Orion Aquila – Civil Lines",
    rent: "₹22,500",
    minRent: 22500,
    maxRent: 22500,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "AC, Meals, Wi-Fi, Laundry, Power Backup, Geyser, Guard, Housekeeping",
    nearby: "Civil Lines Metro, posh locality",
    detailsLink: "https://orionhostels.com/orion-aquila-civil-lines/",
    distance: "~3.6 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Orion+Aquila+Civil+Lines+Delhi",
    isHighlighted: true,
    locality: "Civil Lines"
  },
  {
    title: "Elitee PG – Hudson Lane",
    rent: "₹15,600",
    minRent: 15600,
    maxRent: 15600,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "AC, Meals (veg), Wi-Fi, Power Backup, Biometric Security, Laundry",
    nearby: "GTB Nagar Metro, Satyawati College",
    detailsLink: "https://www.magicbricks.com/propertyDetail/elitee-pg-hudson-lane-gtb-nagar-in-new-delhi&pgid=4d4239383032677261646531",
    distance: "~6 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Elitee+PG+Hudson+Lane,+Delhi",
    isHighlighted: false,
    locality: "GTB Nagar & Hudson"
  },
  {
    title: "Armagh House – Stanza Living, Malkaganj",
    rent: "₹18,000 – ₹22,000",
    minRent: 18000,
    maxRent: 22000,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "AC, Meals, Wi‑Fi, Laundry, Housekeeping, Power Backup, Security, Attached Washroom, Biometric Entry",
    nearby: "North Campus, Malkaganj",
    detailsLink: "https://www.stanzaliving.com/delhi/pg-hostel-in-north-campus/female/armagh-house",
    distance: "~3.3 – 3.9 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Armagh+House+Stanza+Living,+Delhi",
    isHighlighted: false,
    locality: "North Campus"
  },
  {
    title: "Aggarwal Living – Kamla Nagar",
    rent: "₹25,000",
    minRent: 25000,
    maxRent: 25000,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "AC, Meals, Wi-Fi, Laundry, Power Backup, Geyser, Security, Wardrobes",
    nearby: "Kamla Nagar Market, close to metro & shopping",
    detailsLink: "https://www.aggarwalliving.com/",
    distance: "~5 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Aggarwal+Living+Kamla+Nagar+Delhi",
    isHighlighted: false,
    locality: "North Campus"
  },
  {
    title: "ASILO India Girls PG – GTB Nagar",
    rent: "₹13,000 – ₹15,000",
    minRent: 13000,
    maxRent: 15000,
    sharing: ["double", "triple"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: false,
    facilities: "AC, Food, Laundry, Wi-Fi, Geyser, Warden Guidance",
    nearby: "Outram Lane, GTB Nagar Metro Station",
    detailsLink: "https://www.justdial.com/Delhi/Asilo-India-Near-GTB-METRO-STATION-GATE-NO2-Gtb-Nagar/011PXX11-XX11-190704105528-J3M7_BZDET",
    distance: "~8.4 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/ASILO+India+Girls+PG+GTB+Nagar",
    isHighlighted: true,
    locality: "GTB Nagar & Hudson"
  },
  {
    title: "Mehra PG – Civil Lines",
    rent: "₹15,500 (excluding electricity, ₹17.5/unit)",
    minRent: 15500,
    maxRent: 15500,
    sharing: ["single", "double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: false,
    facilities: "AC, Food, Wi-Fi, Laundry, Induction, Fridge, Security, Geyser",
    nearby: "Civil lines metro station, Underhill Road",
    detailsLink: null,
    distance: "~4 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/1A+Goela+Lane,+Underhill+Road,+Civil+Lines,+Delhi",
    isHighlighted: false,
    locality: "Civil Lines"
  },
  {
    title: "North Campus Girls PG",
    rent: "₹13,000 – ₹19,000 (varies by room)",
    minRent: 13000,
    maxRent: 19000,
    sharing: ["single", "double", "triple"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "4-time Veg Meals, WiFi, AC (most rooms), Attached Washrooms, Lift, Laundry, 24hr Security/CCTV, Power Backup, RO Water",
    nearby: "Vijay Nagar Chowk, Old Gupta Colony (near GTB Nagar Metro Gate No. 4)",
    detailsLink: "https://northcampusgirlspg.com",
    distance: "~6.8 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/North+Campus+Girls+PG,+Vijay+Nagar,+Delhi",
    isHighlighted: false,
    locality: "North Campus",
    phone: "+91-9810136104 / +91-9999658000",
    email: "campusgirlspg@gmail.com"
  },
  {
    title: "Hazel by Hyphen (Girls)",
    rent: "starts around ₹29,000 (double sharing)",
    minRent: 29000,
    maxRent: 29000,
    sharing: ["double"],
    hasAC: true,
    hasMeals: true,
    hasWifi: true,
    hasLaundry: true,
    hasPowerBackup: true,
    facilities: "Housekeeping, WiFi, Work Desk, TV + OTT, Laundry, In-house Cafe, Fridge, 3 Meals",
    nearby: "Bungalow Road, near Kamla Nagar (close to Vishwavidyalaya metro)",
    detailsLink: "https://cofynd.com",
    distance: "~4.8 km",
    directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/Bungalow+Road,+Kamla+Nagar,+Delhi",
    isHighlighted: false,
    isUnverified: true,
    locality: "North Campus",
    phone: "+91 9355 28 9999",
    email: "hello@cofynd.com"
  }
];

const FILTER_OPTIONS = ['All', 'Civil Lines', 'GTB Nagar & Hudson', 'North Campus'];

const BUDGET_OPTIONS = [
  { id: 'under-15', label: 'Budget', desc: 'Under ₹15,000' },
  { id: '15-20', label: 'Mid-Range', desc: '₹15,000 – ₹20,000' },
  { id: 'above-20', label: 'Premium', desc: 'Above ₹20,000' },
  { id: 'any', label: 'Any Budget', desc: 'Show all properties' }
];

const SHARING_OPTIONS = [
  { id: 'single', label: 'Single Occupancy', desc: 'Maximum privacy & space' },
  { id: 'double', label: 'Double Sharing', desc: 'Shared with one student' },
  { id: 'triple', label: 'Triple/Multi-sharing', desc: 'Budget-friendly shared room' }
];

const FACILITY_OPTIONS = [
  { id: 'hasAC', label: '❄️ AC' },
  { id: 'hasMeals', label: '🍔 Meals' },
  { id: 'hasWifi', label: '🌐 Wi-Fi' },
  { id: 'hasLaundry', label: '🧺 Laundry' },
  { id: 'hasPowerBackup', label: '🔋 Power Backup' }
];

export default function FindNest() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Matcher Quiz Engine States
  const [quizMode, setQuizMode] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [userBudget, setUserBudget] = useState('any');
  const [userSharing, setUserSharing] = useState([]);
  const [userFacilities, setUserFacilities] = useState([]);
  const [matchedResults, setMatchedResults] = useState([]);

  // Performance Optimization: Cache filtered arrays using useMemo
  const filteredPGs = useMemo(() => {
    return selectedFilter === 'All' 
      ? PGS_DATA 
      : PGS_DATA.filter(pg => pg.locality === selectedFilter);
  }, [selectedFilter]);

  const handleCalculateMatches = () => {
    const scoredPGs = PGS_DATA.map(pg => {
      let score = 100;

      if (userBudget === 'under-15' && pg.minRent >= 16000) score -= 40;
      else if (userBudget === '15-20' && (pg.minRent < 14000 || pg.minRent > 21000)) score -= 30;
      else if (userBudget === 'above-20' && pg.maxRent < 19000) score -= 30;

      if (userSharing.length > 0) {
        const hasMatchingSharing = pg.sharing.some(s => userSharing.includes(s));
        if (!hasMatchingSharing) score -= 30;
      }

      if (userFacilities.length > 0) {
        let facilityMisses = 0;
        userFacilities.forEach(facilityKey => {
          if (!pg[facilityKey]) facilityMisses++;
        });
        score -= (facilityMisses / userFacilities.length) * 30;
      }

      return { ...pg, matchScore: Math.max(0, Math.min(100, Math.round(score))) };
    });

    const filteredScored = scoredPGs
      .filter(pg => pg.matchScore >= 50)
      .sort((a, b) => b.matchScore - a.matchScore);

    setMatchedResults(filteredScored);
    setQuizStep(4);
  };

  const resetQuizEngine = () => {
    setQuizStep(1);
    setUserBudget('any');
    setUserSharing([]);
    setUserFacilities([]);
    setMatchedResults([]);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden flex flex-col items-center bg-gradient-to-br from-[#E2D9F5] via-[#F5DDF0] to-[#DBE7FC] selection:bg-pink-200 selection:text-pink-900">
      <AnimatedBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-12 flex-1 flex flex-col">
        
        {/* Modern Typography Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <div className="mx-auto bg-gradient-to-r from-pink-50 to-purple-50 text-pink-700 text-xs font-bold border border-pink-200 px-4 py-1.5 rounded-full w-fit flex items-center gap-2 shadow-sm tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-pink-500" />
            <span>Senior Vetted Safety Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight bg-clip-text bg-gradient-to-b from-slate-900 to-slate-700">
            Verified PGs Near IGDTUW
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Handpicked by student unions & alumni. Secure, transparent, and optimized for female students seeking premium housing alternatives.
          </p>
        </motion.div>

        {/* Dynamic Panel Card Wrapper */}
        <div className="max-w-5xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {!quizMode ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                onClick={() => { setQuizMode(true); resetQuizEngine(); }}
                className="group relative w-full flex flex-col sm:flex-row items-center justify-between p-6 rounded-3xl border border-pink-100 bg-white/70 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(236,72,153,0.12)] hover:border-pink-300 hover:shadow-[0_20px_50px_-6px_rgba(236,72,153,0.2)] transition-all duration-300 cursor-pointer gap-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-5 text-left z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center shadow-lg shadow-pink-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      Need Personalized Matches?
                    </h4>
                    <p className="text-sm text-slate-500 mt-1 max-w-xl font-medium leading-normal">
                      Launch our interactive matching algorithms to dynamically sort accommodations by your precise spatial filters, multi-sharing constraints, and non-negotiable facility matrices.
                    </p>
                  </div>
                </div>
                <span className="bg-slate-900 text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-2 w-full sm:w-auto justify-center group-hover:bg-pink-600 group-hover:shadow-pink-600/20 transition-all duration-300 transform group-hover:translate-x-1 z-10">
                  Start Smart Matcher
                  <ChevronRight className="w-4 h-4" />
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
              >
                {/* Visual Ambient Globs */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

                {/* Sub-steps Content Delivery Architecture */}
                {quizStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <h3 className="font-black text-lg text-slate-900 flex items-center gap-2.5">
                        <DollarSign className="w-5 h-5 text-pink-500" />
                        <span>Step 1: Allocation & Budget Range</span>
                      </h3>
                      <button onClick={() => setQuizMode(false)} className="text-xs text-slate-400 hover:text-slate-600 font-bold transition">Cancel</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {BUDGET_OPTIONS.map((b) => (
                        <div
                          key={b.id}
                          onClick={() => setUserBudget(b.id)}
                          className={`p-5 rounded-2xl border text-left flex flex-col justify-between h-28 transition-all duration-200 cursor-pointer relative ${
                            userBudget === b.id
                              ? 'bg-gradient-to-b from-pink-50 to-white border-pink-500 ring-2 ring-pink-500/10 shadow-md shadow-pink-500/5'
                              : 'bg-slate-50/50 border-slate-100 hover:border-pink-300 hover:bg-white'
                          }`}
                        >
                          <span className={`font-extrabold text-xs tracking-wider uppercase ${userBudget === b.id ? 'text-pink-700' : 'text-slate-500'}`}>{b.label}</span>
                          <span className="text-sm font-bold text-slate-800 mt-2">{b.desc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end pt-4">
                      <button onClick={() => setQuizStep(2)} className="bg-slate-900 hover:bg-pink-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition duration-200 flex items-center gap-2 shadow-lg shadow-slate-950/10">
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <h3 className="font-black text-lg text-slate-900 flex items-center gap-2.5">
                        <Users className="w-5 h-5 text-pink-500" />
                        <span>Step 2: Density & Room Sharing</span>
                      </h3>
                      <button onClick={() => setQuizMode(false)} className="text-xs text-slate-400 hover:text-slate-600 font-bold transition">Cancel</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {SHARING_OPTIONS.map((s) => {
                        const isSelected = userSharing.includes(s.id);
                        return (
                          <div
                            key={s.id}
                            onClick={() => setUserSharing(prev => isSelected ? prev.filter(item => item !== s.id) : [...prev, s.id])}
                            className={`p-5 rounded-2xl border text-left flex flex-col justify-between h-28 transition-all duration-200 cursor-pointer relative ${
                              isSelected
                                ? 'bg-gradient-to-b from-pink-50 to-white border-pink-500 ring-2 ring-pink-500/10 shadow-md'
                                : 'bg-slate-50/50 border-slate-100 hover:border-pink-300 hover:bg-white'
                            }`}
                          >
                            <div className="flex justify-between items-center w-full">
                              <span className={`font-extrabold text-xs tracking-wider uppercase ${isSelected ? 'text-pink-700' : 'text-slate-500'}`}>{s.label}</span>
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition ${isSelected ? 'border-pink-500 bg-pink-500 text-white' : 'border-slate-300 bg-white'}`}>
                                {isSelected && <Check className="w-2.5 h-2.5 stroke-[3px]" />}
                              </div>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 mt-2">{s.desc}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between pt-4">
                      <button onClick={() => setQuizStep(1)} className="border border-slate-200 text-slate-600 font-bold text-xs px-5 py-3 rounded-xl hover:bg-slate-50 transition flex items-center gap-1.5">
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button onClick={() => setQuizStep(3)} className="bg-slate-900 hover:bg-pink-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-slate-950/10">
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <h3 className="font-black text-lg text-slate-900 flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        <span>Step 3: Custom Amenities & Priorities</span>
                      </h3>
                      <button onClick={() => setQuizMode(false)} className="text-xs text-slate-400 hover:text-slate-600 font-bold transition">Cancel</button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {FACILITY_OPTIONS.map((f) => {
                        const isSelected = userFacilities.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            onClick={() => setUserFacilities(prev => isSelected ? prev.filter(item => item !== f.id) : [...prev, f.id])}
                            className={`p-4 rounded-xl border text-center font-bold text-sm transition duration-200 flex flex-col items-center justify-center gap-3 cursor-pointer ${
                              isSelected
                                ? 'bg-pink-50/50 border-pink-500 text-pink-900 shadow-sm'
                                : 'bg-slate-50/50 border-slate-100 hover:border-pink-300 hover:bg-white text-slate-700'
                            }`}
                          >
                            <span>{f.label}</span>
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${isSelected ? 'bg-pink-600 border-pink-600 text-white' : 'border-slate-300 bg-white'}`}>
                              {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between pt-4">
                      <button onClick={() => setQuizStep(2)} className="border border-slate-200 text-slate-600 font-bold text-xs px-5 py-3 rounded-xl hover:bg-slate-50 transition flex items-center gap-1.5">
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button onClick={handleCalculateMatches} className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-pink-600/20">
                        <span>Compile Matches</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 4 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <h3 className="font-black text-lg text-slate-900 flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-pink-500 animate-bounce" />
                        <span>Optimized Match Matrix Results</span>
                      </h3>
                      <button onClick={resetQuizEngine} className="text-xs text-pink-600 hover:text-pink-800 font-bold flex items-center gap-1.5 transition">
                        <Undo2 className="w-3.5 h-3.5" />
                        <span>Restart Matrix</span>
                      </button>
                    </div>

                    {matchedResults.length === 0 ? (
                      <div className="text-center py-12 space-y-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-400 border border-slate-100">
                          <AlertCircle className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-slate-800">Zero Optimal Matches Found</h4>
                        <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                          Your chosen facility constraints do not align with listings in this specific rent bracket. Consider clearing niche facility fields.
                        </p>
                        <button onClick={resetQuizEngine} className="bg-slate-100 text-slate-700 text-xs px-4 py-2.5 rounded-xl hover:bg-slate-200 font-bold transition">
                          Clear Sorting Filters
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-slate-500 font-medium">
                          Identified <span className="text-pink-600 font-extrabold">{matchedResults.length} properties</span> meeting standard safety protocols with dynamic compliance compatibility indexes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                          {matchedResults.map((pg, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="h-full"
                            >
                              <PGCard {...pg} />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end border-t border-slate-100 pt-5">
                      <button onClick={() => setQuizMode(false)} className="border border-slate-200 text-slate-600 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-slate-50 transition">
                        <span>Exit Matcher Module</span>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Catalog Sub-System Component */}
        {!quizMode && (
          <div className="space-y-8 flex-1 flex flex-col">
            {/* Elegant pill filter system */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 bg-slate-100/50 p-1.5 rounded-2xl w-fit mx-auto backdrop-blur-sm border border-slate-200/50">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                    selectedFilter === opt
                      ? 'bg-white text-pink-700 shadow-md shadow-slate-900/5 ring-1 ring-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Main Display Grid using layout animation patterns */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1"
            >
              <AnimatePresence>
                {filteredPGs.map((pg) => (
                  <motion.div
                    layout
                    key={pg.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <PGCard {...pg} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Enhanced Security Disclaimer Banner */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50/60 backdrop-blur-sm p-6 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <h4 className="font-extrabold text-sm text-amber-950 flex items-center gap-2">
              On-Site Physical Inspection Mandate
            </h4>
            <p className="text-xs text-amber-900/80 leading-relaxed font-medium">
              Alumni-provided listings offer directory entry-points only. To eliminate rental escrow fraud vectors, never wire reservation advances or execute lease contracts electronically without completing a physical, on-site inventory walkthrough alongside local guardians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home as HomeIcon, MapPin, AlertCircle, Sparkles, DollarSign, Check, ChevronRight, ChevronLeft, Undo2, Users } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';
import PGCard from '../components/PGCard';

export default function FindNest() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // PG Matcher States
  const [quizMode, setQuizMode] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [userBudget, setUserBudget] = useState('any');
  const [userSharing, setUserSharing] = useState([]);
  const [userFacilities, setUserFacilities] = useState([]);
  const [matchedResults, setMatchedResults] = useState([]);

  const pgsData = [
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
    }
  ];

  const calculateMatches = () => {
    const scoredPGs = pgsData.map(pg => {
      let score = 100;

      // 1. Budget check
      if (userBudget === 'under-15') {
        if (pg.minRent >= 16000) {
          score -= 40;
        }
      } else if (userBudget === '15-20') {
        if (pg.minRent < 14000 || pg.minRent > 21000) {
          score -= 30;
        }
      } else if (userBudget === 'above-20') {
        if (pg.maxRent < 19000) {
          score -= 30;
        }
      }

      // 2. Sharing check
      if (userSharing.length > 0) {
        const hasMatchingSharing = pg.sharing.some(s => userSharing.includes(s));
        if (!hasMatchingSharing) {
          score -= 30;
        }
      }

      // 3. Facilities check
      if (userFacilities.length > 0) {
        let facilityMisses = 0;
        userFacilities.forEach(facilityKey => {
          if (!pg[facilityKey]) {
            facilityMisses++;
          }
        });
        score -= (facilityMisses / userFacilities.length) * 30;
      }

      const finalScore = Math.max(0, Math.min(100, Math.round(score)));

      return {
        ...pg,
        matchScore: finalScore
      };
    });

    const filteredScored = scoredPGs
      .filter(pg => pg.matchScore >= 50)
      .sort((a, b) => b.matchScore - a.matchScore);

    setMatchedResults(filteredScored);
  };

  const filterOptions = ['All', 'Civil Lines', 'GTB Nagar & Hudson', 'North Campus'];

  const filteredPGs = selectedFilter === 'All' 
    ? pgsData 
    : pgsData.filter(pg => pg.locality === selectedFilter);

  return (
    <div className="relative min-h-screen pt-28 pb-12 overflow-hidden flex flex-col items-center">
      <AnimatedBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8 flex-1 flex flex-col">
        {/* Header Title Section */}
        <div className="text-center space-y-3">
          <div className="mx-auto bg-brand-pink/10 text-brand-pink text-xs border border-brand-pink/20 px-3 py-1.5 rounded-full font-bold w-fit flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Vetted PG Directories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Verified PGs near IGDTUW
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-semibold leading-relaxed">
            Handpicked by seniors, reviewed by students — safe, affordable, and girl-friendly accommodation guides.
          </p>
        </div>

        {/* PG Matcher Panel */}
        <div className="max-w-4xl mx-auto w-full">
          {!quizMode ? (
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => {
                setQuizMode(true);
                setQuizStep(1);
                setUserBudget('any');
                setUserSharing([]);
                setUserFacilities([]);
              }}
              className="w-full flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl border border-brand-pink/30 bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 hover:border-brand-pink/55 transition duration-300 shadow-sm cursor-pointer gap-4"
            >
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center text-brand-pink shadow-sm flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-brand-pink animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-200">Unsure which PG fits you best?</h4>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Try our Interactive PG Matcher to calculate matching scores based on budget, sharing & preferences!</p>
                </div>
              </div>
              <span className="bg-brand-pink text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-[0_2px_8px_rgba(236,72,153,0.2)] flex items-center gap-1 w-full sm:w-auto justify-center">
                Start Matcher
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-brand-pink/30 bg-[#16122c]/90 p-6 sm:p-8 shadow-[0_10px_35px_rgba(236,72,153,0.05)] relative overflow-hidden"
            >
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-2xl -z-10" />

              {/* Step 1: Budget */}
              {quizStep === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-100 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-brand-pink" />
                      <span>Step 1: Select Your Budget Range</span>
                    </h3>
                    <button 
                      onClick={() => setQuizMode(false)}
                      className="text-xs text-slate-400 hover:text-slate-300 font-bold"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                    What is the monthly rent range you are looking for?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[
                      { id: 'under-15', label: 'Budget', desc: 'Under ₹15,000' },
                      { id: '15-20', label: 'Mid-Range', desc: '₹15,000 – ₹20,000' },
                      { id: 'above-20', label: 'Premium', desc: 'Above ₹20,000' },
                      { id: 'any', label: 'Any Budget', desc: 'Show all properties' }
                    ].map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setUserBudget(b.id)}
                        className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition duration-300 cursor-pointer ${
                          userBudget === b.id
                            ? 'bg-brand-pink/5 border-brand-pink text-brand-pink shadow-sm'
                            : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 text-slate-200'
                        }`}
                      >
                        <span className="font-bold text-xs uppercase tracking-wider block">{b.label}</span>
                        <span className="text-xs font-semibold text-slate-400 mt-2">{b.desc}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setQuizStep(2)}
                      className="bg-brand-pink hover:bg-brand-pink/90 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Sharing */}
              {quizStep === 2 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-100 flex items-center gap-2">
                      <Users className="w-5 h-5 text-brand-pink" />
                      <span>Step 2: Room Sharing Preferences</span>
                    </h3>
                    <button 
                      onClick={() => setQuizMode(false)}
                      className="text-xs text-slate-400 hover:text-slate-300 font-bold"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                    Which room occupancies are you open to? (Select multiple if applicable)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'single', label: 'Single Occupancy', desc: 'Maximum privacy & space' },
                      { id: 'double', label: 'Double Sharing', desc: 'Shared with one student' },
                      { id: 'triple', label: 'Triple/Multi-sharing', desc: 'Budget-friendly shared room' }
                    ].map((s) => {
                      const isSelected = userSharing.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => {
                            if (isSelected) {
                              setUserSharing(userSharing.filter(item => item !== s.id));
                            } else {
                              setUserSharing([...userSharing, s.id]);
                            }
                          }}
                          className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition duration-300 relative cursor-pointer ${
                            isSelected
                              ? 'bg-brand-pink/5 border-brand-pink text-brand-pink shadow-sm'
                              : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 text-slate-200'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className="font-bold text-xs uppercase tracking-wider block">{s.label}</span>
                            {isSelected && <Check className="w-4 h-4 text-brand-pink" />}
                          </div>
                          <span className="text-xs font-semibold text-slate-400 mt-2">{s.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between pt-2">
                    <button
                      onClick={() => setQuizStep(1)}
                      className="border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-300 font-bold text-xs px-5 py-2.5 rounded-xl transition duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setQuizStep(3)}
                      className="bg-brand-pink hover:bg-brand-pink/90 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Must-Have Facilities */}
              {quizStep === 3 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-100 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-brand-pink" />
                      <span>Step 3: Essential Facilities</span>
                    </h3>
                    <button 
                      onClick={() => setQuizMode(false)}
                      className="text-xs text-slate-400 hover:text-slate-300 font-bold"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                    Select your non-negotiable amenities (Must-Haves):
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {[
                      { id: 'hasAC', label: '❄️ AC' },
                      { id: 'hasMeals', label: '🍔 Meals' },
                      { id: 'hasWifi', label: '🌐 Wi-Fi' },
                      { id: 'hasLaundry', label: '🧺 Laundry' },
                      { id: 'hasPowerBackup', label: '🔋 Power Backup' }
                    ].map((f) => {
                      const isSelected = userFacilities.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          onClick={() => {
                            if (isSelected) {
                              setUserFacilities(userFacilities.filter(item => item !== f.id));
                            } else {
                              setUserFacilities([...userFacilities, f.id]);
                            }
                          }}
                          className={`p-3.5 rounded-xl border text-center font-bold text-xs sm:text-sm transition duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-brand-pink/5 border-brand-pink text-brand-pink shadow-sm'
                              : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 text-slate-200'
                          }`}
                        >
                          <span>{f.label}</span>
                          <span className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-brand-pink border-brand-pink text-white' : 'border-slate-300 bg-white'}`}>
                            {isSelected && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between pt-2">
                    <button
                      onClick={() => setQuizStep(2)}
                      className="border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-300 font-bold text-xs px-5 py-2.5 rounded-xl transition duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => {
                        calculateMatches();
                        setQuizStep(4);
                      }}
                      className="bg-brand-pink hover:bg-brand-pink/90 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Show Matches</span>
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Results Display */}
              {quizStep === 4 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-100 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-brand-pink" />
                      <span>Matching PG Accommodations</span>
                    </h3>
                    <button 
                      onClick={() => {
                        setQuizStep(1);
                        setUserBudget('any');
                        setUserSharing([]);
                        setUserFacilities([]);
                      }}
                      className="text-xs text-brand-pink hover:text-brand-pink/80 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Undo2 className="w-3.5 h-3.5" />
                      <span>Restart Quiz</span>
                    </button>
                  </div>

                  {matchedResults.length === 0 ? (
                    <div className="text-center py-10 space-y-4">
                      <AlertCircle className="w-12 h-12 text-slate-600 mx-auto" />
                      <h4 className="font-bold text-slate-200">No matching PGs found!</h4>
                      <p className="text-xs text-slate-400 font-semibold max-w-sm mx-auto leading-relaxed">
                        Try loosening your filters or increasing your budget bounds to find recommendations.
                      </p>
                      <button
                        onClick={() => {
                          setQuizStep(1);
                          setUserBudget('any');
                          setUserSharing([]);
                          setUserFacilities([]);
                        }}
                        className="bg-slate-800 border border-slate-700 text-slate-200 text-xs px-4 py-2.5 rounded-xl hover:bg-slate-750 transition duration-200 font-bold cursor-pointer"
                      >
                        Reset Quiz Filters
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                        We found <strong className="text-brand-pink font-bold">{matchedResults.length} properties</strong> that score over 50% matching compatibility:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                        {matchedResults.map((pg, idx) => (
                          <PGCard
                            key={idx}
                            title={pg.title}
                            rent={pg.rent}
                            facilities={pg.facilities}
                            nearby={pg.nearby}
                            detailsLink={pg.detailsLink}
                            distance={pg.distance}
                            directionsLink={pg.directionsLink}
                            isHighlighted={pg.isHighlighted}
                            matchScore={pg.matchScore}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end border-t border-slate-700/50 pt-4">
                    <button
                      onClick={() => setQuizMode(false)}
                      className="border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-300 font-bold text-xs px-5 py-2.5 rounded-xl transition duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Close Matcher View</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Standard Listings Display (rendered only when matcher is NOT active or showing matching results) */}
        {!quizMode && (
          <>
            {/* Filter Navigation Menu */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition duration-300 cursor-pointer ${
                    selectedFilter === opt
                      ? 'bg-brand-pink/10 text-brand-pink border-brand-pink/20 shadow-[0_0_15px_rgba(244,114,182,0.1)]'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-brand-pink/30 hover:text-brand-pink'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* PG Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
              {filteredPGs.map((pg, idx) => (
                <PGCard
                  key={idx}
                  title={pg.title}
                  rent={pg.rent}
                  facilities={pg.facilities}
                  nearby={pg.nearby}
                  detailsLink={pg.detailsLink}
                  distance={pg.distance}
                  directionsLink={pg.directionsLink}
                  isHighlighted={pg.isHighlighted}
                />
              ))}
            </div>
          </>
        )}

        {/* General Disclaimer Warning Alert */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex items-start gap-4 max-w-4xl mx-auto shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-amber-800">
              Personal Verification Safety Warning
            </h4>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              All PGs listed above are suggested based on senior inputs for reference and general information. We strongly advise you to explore the official links, speak with the wardens, and personally visit/verify the space before making any financial bookings or down payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


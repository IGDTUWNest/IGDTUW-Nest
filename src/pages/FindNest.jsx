import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, MapPin, AlertCircle, Sparkles } from 'lucide-react';
import AnimatedBg from '../components/AnimatedBg';
import PGCard from '../components/PGCard';

export default function FindNest() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const pgsData = [
    {
      title: "Sunder Bhawan PG – Civil Lines",
      rent: "₹21,000 – ₹22,000 (double sharing)",
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
      facilities: "AC, Food, Wi-Fi, Laundry, Induction, Fridge, Security, Geyser",
      nearby: "Civil lines metro station, Underhill Road",
      detailsLink: null,
      distance: "~4 km",
      directionsLink: "https://www.google.com/maps/dir/IGDTUW,+Delhi/1A+Goela+Lane,+Underhill+Road,+Civil+Lines,+Delhi",
      isHighlighted: false,
      locality: "Civil Lines"
    }
  ];

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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Verified PGs near IGDTUW
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-semibold leading-relaxed">
            Handpicked by seniors, reviewed by students — safe, affordable, and girl-friendly accommodation guides.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition duration-300 ${
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

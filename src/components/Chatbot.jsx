import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot, User } from 'lucide-react';
import faqData from '../utils/faq.json';

const CATEGORIES = [
  { id: 'all', label: '⭐ All Info' },
  { id: 'campus', label: '🏫 Campus Life' },
  { id: 'housing', label: '🏡 Housing Guides' }
];

const QUESTION_MAPPING = {
  'campus snacks and canteens': { category: 'campus', label: '🍔 Campus Snacks & Canteens' },
  'tuck shops in college': { category: 'campus', label: '🖨️ Tuck Shops & Print' },
  'sport facilities inside campus': { category: 'campus', label: '🏸 Sport Facilities' },
  'PG vs Hostel-What to consider': { category: 'housing', label: '🏠 PG vs Hostel' },
  'What to bring for PG-Checklist': { category: 'housing', label: '🛏️ PG Packing Checklist' },
  'Gyms near college-Location and Plans': { category: 'housing', label: '💪 Gyms Nearby' }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I am the IGDTUW Nest assistant. Tap any of the questions below to get instant student guides! 👇',
      isHtml: false
    }
  ]);
  const messagesEndRef = useRef(null);

  // Auto scroll to latest bubble
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleQuestionSelect = (questionKey) => {
    if (isTyping) return; // Prevent multiple requests during typing delay

    const mapped = QUESTION_MAPPING[questionKey];
    const userLabel = mapped ? mapped.label : questionKey;
    const answer = faqData[questionKey];

    // Push User message
    const updatedMessages = [
      ...messages,
      { sender: 'user', text: userLabel, isHtml: false }
    ];

    setMessages(updatedMessages);
    setIsTyping(true);

    // Simulate bouncy typing delay for realistic effect
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { 
          sender: 'bot', 
          text: answer || 'Sorry, no answer available at this moment.', 
          isHtml: true 
        }
      ]);
    }, 850);
  };

  // Filter option keys based on selected category
  const optionKeys = Object.keys(faqData).filter(key => {
    if (activeCategory === 'all') return true;
    const mapped = QUESTION_MAPPING[key];
    return mapped && mapped.category === activeCategory;
  });

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-brand-pink dark:bg-pink-600 text-white shadow-[0_4px_20px_rgba(236,72,153,0.4)] dark:shadow-[0_4px_20px_rgba(236,72,153,0.2)] border border-brand-pink/20 dark:border-white/10 hover:bg-brand-pink/90 transition duration-300 focus:outline-none flex items-center justify-center cursor-pointer"
        aria-label="Open support chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Glassmorphic Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[550px] rounded-2xl glass-panel dark:dark-glass-panel border border-pink-100/50 dark:border-white/10 shadow-[0_10px_40px_rgba(31,38,135,0.08)] flex flex-col overflow-hidden z-40 transition-colors duration-300"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 dark:from-brand-pink/20 dark:to-brand-purple/20 border-b border-pink-100/30 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-pink/10 dark:bg-brand-pink/20 flex items-center justify-center border border-brand-pink/20 dark:border-pink-500/30">
                  <Bot className="w-4 h-4 text-brand-pink dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-brand-dark dark:text-white leading-none">IGDTUW Nest Bot</h4>
                  <span className="text-[10px] text-green-600 dark:text-green-450 flex items-center gap-1 font-semibold mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-450 animate-pulse"></span>
                    Online Guide
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category Filter bar */}
            <div className="px-3 py-2 bg-slate-50/50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-white/5 flex gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-brand-pink text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Bubble icon */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border ${
                    msg.sender === 'user' 
                      ? 'bg-brand-purple/15 border-brand-purple/30 text-brand-purple dark:text-purple-400' 
                      : 'bg-brand-pink/15 border-brand-pink/25 text-brand-pink dark:text-pink-400'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble text */}
                  <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm leading-relaxed border ${
                    msg.sender === 'user'
                      ? 'bg-brand-purple/10 border-brand-purple/15 dark:border-brand-purple/30 rounded-tr-none text-slate-800 dark:text-slate-100 font-medium'
                      : 'bg-white/80 dark:bg-slate-800/80 border-pink-100/50 dark:border-white/10 rounded-tl-none text-slate-700 dark:text-slate-300'
                  }`}>
                    {msg.isHtml ? (
                      <div 
                        className="prose max-w-none text-xs space-y-2 [&_ul]:list-disc [&_ul]:pl-4 [&_b]:text-brand-dark dark:[&_b]:text-white [&_b]:font-bold [&_i]:text-brand-pink dark:[&_i]:text-pink-400 font-medium" 
                        dangerouslySetInnerHTML={{ __html: msg.text }} 
                      />
                    ) : (
                      <p className="font-medium">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator bubble */}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border bg-brand-pink/15 border-brand-pink/25 text-brand-pink dark:text-pink-400">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/80 border border-pink-100/50 dark:border-white/10 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
                    />
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                      className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
                    />
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions Picker */}
            <div className="p-3 bg-slate-50/50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-white/5 space-y-2 max-h-[160px] overflow-y-auto">
              <span className="text-[10px] text-brand-pink dark:text-pink-400 font-bold uppercase tracking-wider block px-1">
                Select a Question
              </span>
              <div className="flex flex-wrap gap-1.5">
                {optionKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleQuestionSelect(key)}
                    className="text-left text-xs px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-white/10 hover:border-brand-pink/40 hover:bg-brand-pink/5 dark:hover:bg-pink-950/20 text-slate-600 dark:text-slate-300 hover:text-brand-pink dark:hover:text-pink-400 transition duration-200 focus:outline-none shadow-sm font-medium cursor-pointer"
                  >
                    {QUESTION_MAPPING[key]?.label || key}
                  </button>
                ))}
                {optionKeys.length === 0 && (
                  <span className="text-xs text-slate-400 dark:text-slate-500 italic block px-1">No questions found in this category.</span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import faqData from '../utils/faq.json';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [messages, isOpen]);

  const handleQuestionSelect = (questionKey) => {
    const answer = faqData[questionKey];

    // Push User message
    const updatedMessages = [
      ...messages,
      { sender: 'user', text: questionKey, isHtml: false }
    ];

    setMessages(updatedMessages);

    // Simulate small timing delay for bot reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          sender: 'bot', 
          text: answer || 'Sorry, no answer available at this moment.', 
          isHtml: true 
        }
      ]);
    }, 450);
  };

  const optionKeys = Object.keys(faqData);

  const cleanOptionName = (key) => {
    if (key === 'campus snacks and canteens') return '🍔 Campus Snacks & Canteens';
    if (key === 'tuck shops in college') return '🖨️ Tuck Shops & Print';
    if (key === 'sport facilities inside campus') return '🏸 Sport Facilities';
    if (key === 'PG vs Hostel-What to consider') return '🏠 PG vs Hostel';
    if (key === 'What to bring for PG-Checklist') return '🛏️ PG Packing Checklist';
    if (key === 'Gyms near college-Location and Plans') return '💪 Gyms Nearby';
    return key;
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-brand-pink text-white shadow-[0_4px_20px_rgba(236,72,153,0.4)] border border-brand-pink/20 hover:bg-brand-pink/90 transition duration-300 focus:outline-none flex items-center justify-center"
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
            className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[500px] rounded-2xl glass-panel border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden z-40"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-brand-pink/20 to-brand-purple/20 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-pink/20 flex items-center justify-center border border-brand-pink/30">
                  <Bot className="w-4 h-4 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-100">IGDTUW Nest Bot</h4>
                  <span className="text-[10px] text-green-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online Guide
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition duration-200"
              >
                <X className="w-4 h-4" />
              </button>
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
                      ? 'bg-brand-purple/10 border-brand-purple/35 text-brand-purple' 
                      : 'bg-brand-pink/10 border-brand-pink/30 text-brand-pink'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble text */}
                  <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm leading-relaxed border ${
                    msg.sender === 'user'
                      ? 'bg-brand-purple/20 border-brand-purple/20 rounded-tr-none text-slate-200'
                      : 'bg-white/[0.04] border-white/5 rounded-tl-none text-slate-300'
                  }`}>
                    {msg.isHtml ? (
                      <div 
                        className="prose prose-invert max-w-none text-xs space-y-2 [&_ul]:list-disc [&_ul]:pl-4 [&_b]:text-white [&_i]:text-brand-pink/80" 
                        dangerouslySetInnerHTML={{ __html: msg.text }} 
                      />
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions Picker */}
            <div className="p-3 bg-white/[0.02] border-t border-white/5 space-y-2 max-h-[140px] overflow-y-auto">
              <span className="text-[10px] text-brand-pink font-semibold uppercase tracking-wider block px-1">
                Select a Question
              </span>
              <div className="flex flex-wrap gap-1.5">
                {optionKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleQuestionSelect(key)}
                    className="text-left text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand-pink/50 hover:bg-brand-pink/10 text-slate-300 hover:text-white transition duration-200 focus:outline-none"
                  >
                    {cleanOptionName(key)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

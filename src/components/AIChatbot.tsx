import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, MessageCircle, Bot } from 'lucide-react';
import { Button } from './ui/button';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Hello! I am BBM Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulated AI response
    setTimeout(() => {
      let response = "Thank you for your enquiry. I'm an AI assistant. For specific details about admissions, fees, or transportation, you can also contact our office at +91 9948726955.";

      const lowInput = input.toLowerCase();
      if (lowInput.includes('admission')) {
        response = "Admissions for academic year 2026-27 are now open! You can visit our 'Admissions' page to fill out the form or visit the campus in Naidupet.";
      } else if (lowInput.includes('transport') || lowInput.includes('bus')) {
        response = "Yes, we provide safe transportation across all major areas in Khammam. Our buses are equipped with GPS tracking.";
      } else if (lowInput.includes('fee')) {
        response = "For fee structure details, please visit our school office or contact us at +91 9948726955. We offer competitive fees with excellent facilities.";
      }

      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[70]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="absolute right-full bottom-0 mr-4 w-[300px] md:w-[320px] h-[400px] bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-white p-1">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-bold">BBM Assistant</div>
                  <div className="text-[10px] opacity-80 uppercase tracking-widest">Always Active</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                />
                <Button onClick={handleSend} size="icon" className="shrink-0 rounded-xl">
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="size-16 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-primary relative group"
      >
        <img src="/logo.png" alt="BBM Chat" className="size-10 object-contain group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 size-5 bg-green-500 border-4 border-white rounded-full" />

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-[68px] bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold whitespace-nowrap shadow-xl animate-pulse">
            Chat with us!
          </div>
        )}
      </motion.button>
    </div>
  );
}

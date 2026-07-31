import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';
import { Button } from './ui/button';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: React.ReactNode }[]>([
    { role: 'ai', content: 'Namaste! Welcome to BBM High School. I am here to help you with information about our school, admissions, facilities, and more. How can I assist you today?' }
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
    
    const lowInput = input.toLowerCase();
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulated AI response logic
    setTimeout(() => {
      let response: React.ReactNode = "Thank you for your enquiry. I'm the BBM AI assistant. For more details, you can contact our office at +91 9948726955.";
      
      if (lowInput.includes('hi') || lowInput.includes('hello') || lowInput.includes('hey')) {
        response = "Hello! I'm the BBM Assistant. I can help you with details about our Location, Programs, Facilities, IIT/Medical Foundation, and School Management. What would you like to know?";
      } else if (lowInput.includes('location') || lowInput.includes('address')) {
        response = (
          <div className="space-y-2">
            <p className="font-bold text-primary">📍 Campus Location:</p>
            <p>BBM High School, Naidupet, Khammam, Telangana - 507001.</p>
            <a 
              href="https://share.google/SJWbM6j0hEMwa40Ok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold no-underline hover:bg-primary/90"
            >
              Get Directions on Maps
            </a>
          </div>
        );
      } else if (lowInput.includes('program') || lowInput.includes('class') || lowInput.includes('sequence')) {
        response = (
          <div className="space-y-2">
            <p className="font-bold text-primary">📚 Our Programs (Sequential):</p>
            <div className="space-y-1 text-xs">
              <p>1. <span className="font-bold">Nursery, LKG, UKG</span> - Early childhood base.</p>
              <p>2. <span className="font-bold">Primary (Class I-V)</span> - Core academic skills.</p>
              <p>3. <span className="font-bold">Middle (Class VI-VIII)</span> - Introduction to Foundation.</p>
              <p>4. <span className="font-bold">High School (Class IX-X)</span> - Board focused prep.</p>
              <p>5. <span className="font-bold">IIT/Medical Foundation</span> - Integrated starting from VI.</p>
            </div>
          </div>
        );
      } else if (lowInput.includes('about school') || lowInput.includes('about bbm')) {
        response = "BBM High School in Naidupet is one of Khammam's premier educational institutions. We focus on 'Shaping Future Leaders' through character building, academic excellence, and modern infrastructure.";
      } else if (lowInput.includes('management') || lowInput.includes('director') || lowInput.includes('founder')) {
        response = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-primary">👔 Leadership & Management:</p>
            <p>• <span className="font-bold">Director:</span> Gurram Kantha Rao Garu</p>
            <p>• <span className="font-bold">Correspondent:</span> Gurram Nagamani Garu</p>
            <p>The management is committed to providing quality education with a personal touch for every student.</p>
          </div>
        );
      } else if (lowInput.includes('facility') || lowInput.includes('facilities')) {
        response = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-primary">🏫 School Facilities:</p>
            <p>• Smart Classrooms with Digital Tools</p>
            <p>• Advanced Science & Computer Labs</p>
            <p>• Safe Bus Facility across Khammam</p>
            <p>• Digital Library and Reading Rooms</p>
            <p>• Playground and Sports coaching</p>
          </div>
        );
      } else if (lowInput.includes('pre primary') || lowInput.includes('pre-primary') || lowInput.includes('nursery') || lowInput.includes('lkg') || lowInput.includes('ukg')) {
        response = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-primary">👶 Pre-Primary Programme Highlights:</p>
            <p>• Experiential learning through objective-driven activities & games.</p>
            <p>• Focus on core literacy, fine motor handwriting skills & gentle drills.</p>
            <p>• Regulated, age-appropriate screen time policy.</p>
            <p>• Color Days, storytelling, and thorough academic revisions.</p>
          </div>
        );
      } else if (lowInput.includes('iit') || lowInput.includes('foundation') || lowInput.includes('olympiad') || lowInput.includes('jee') || lowInput.includes('ntse')) {
        response = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-primary">🔬 IIT & Basic Foundation (Classes VI to IX):</p>
            <p>• Coaching in Maths, Physics, Chemistry & Logical Reasoning.</p>
            <p>• Concept-based learning aligned with school curriculum.</p>
            <p>• Prep for JEE, NTSE, Olympiads & Scholarship examinations.</p>
            <p>• Regular practice tests, doubt sessions & individual mentoring.</p>
            <p>• Continuous progress updates shared with parents.</p>
          </div>
        );
      } else if (lowInput.includes('karate') || lowInput.includes('chess') || lowInput.includes('spoken english') || lowInput.includes('activity') || lowInput.includes('activities')) {
        response = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-primary">🎨 Beyond Textbooks (Co-Curricular Fields):</p>
            <p>• <span className="font-bold">Daily Spoken English:</span> Confidence & communication sessions.</p>
            <p>• <span className="font-bold">Karate Training:</span> Self-defence, agility & discipline.</p>
            <p>• <span className="font-bold">Chess Coaching:</span> Logical reasoning & strategic planning.</p>
            <p>• <span className="font-bold">STEM & Innovation:</span> Science fairs, exhibitions & math activities.</p>
            <p>• <span className="font-bold">Arts & Culture:</span> Art, craft, dance, drama & debate competitions.</p>
          </div>
        );
      } else if (lowInput.includes('contact') || lowInput.includes('phone') || lowInput.includes('details')) {
        response = (
          <div className="space-y-2 text-xs">
            <p className="font-bold text-primary">📞 Reach Out to Us:</p>
            <p>• Primary Phone: <span className="font-bold">+91 9948726955</span></p>
            <p>• Email: info@bbmschool.com</p>
            <p>• Office Hours: 8:30 AM - 5:00 PM</p>
          </div>
        );
      } else if (lowInput.includes('admission')) {
        response = "Admissions are currently open for the 2026-27 session! Please fill out the form on our website or visit the school office in Naidupet for a campus tour.";
      }

      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[70] flex items-center group">
      {!isOpen && (
        <div className="absolute right-[76px] bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-[10px] font-bold whitespace-nowrap shadow-xl animate-pulse border border-white/10 md:block hidden">
          Chat with us!
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="absolute right-full bottom-0 mr-4 w-[280px] md:w-[320px] h-[400px] bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-white p-1">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-sm">BBM Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none font-medium'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-primary/40 outline-none"
                />
                <Button onClick={handleSend} size="icon" className="shrink-0 size-8 rounded-xl bg-primary">
                  <Send size={14} />
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
        className="size-14 md:size-16 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-primary relative"
      >
        <img src="/logo.png" alt="BBM Chat" className="size-8 md:size-10 object-contain" />
        <div className="absolute top-0 right-0 size-4 bg-green-500 border-2 border-white rounded-full" />
      </motion.button>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight, Star, Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppWidget } from './WhatsAppWidget';
import { AIChatbot } from './AIChatbot';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Results', path: '/results' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 backdrop-blur-xl flex flex-col items-center justify-center p-4 overflow-hidden"
          >
            {/* Celebration items */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Stars & Sparkles */}
              <div className="absolute top-10 left-10 text-yellow-400 animate-bounce"><Star size={32} fill="currentColor" /></div>
              <div className="absolute top-20 right-20 text-yellow-300 animate-pulse"><Sparkles size={40} /></div>
              <div className="absolute bottom-20 left-20 text-pink-500 animate-pulse"><Sparkles size={32} /></div>
              <div className="absolute bottom-10 right-10 text-blue-400 animate-bounce"><Star size={24} fill="currentColor" /></div>
              
              <div className="absolute top-1/2 left-5 text-emerald-400 animate-pulse delay-700"><Sparkles size={24} /></div>
              <div className="absolute top-1/3 right-10 text-purple-400 animate-bounce delay-300"><Star size={20} fill="currentColor" /></div>
              <div className="absolute bottom-1/2 right-5 text-orange-400 animate-pulse delay-500"><Sparkles size={28} /></div>
              <div className="absolute top-5 right-1/3 text-amber-400 animate-bounce delay-1000"><Star size={16} fill="currentColor" /></div>
              
              {/* Confetti shapes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-500 rotate-45 animate-ping delay-300" />
              <div className="absolute bottom-1/4 right-1/3 w-5 h-2 bg-green-500 rotate-12 animate-bounce delay-500" />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-4 bg-blue-500 -rotate-12 animate-bounce delay-100" />
              
              <div className="absolute top-10 right-1/2 w-3 h-3 bg-pink-500 rounded-full animate-ping delay-200" />
              <div className="absolute bottom-10 left-1/2 w-4 h-4 bg-purple-500 rotate-45 animate-ping delay-600" />
              <div className="absolute top-2/3 left-[15%] w-6 h-1 bg-orange-500 rotate-45 animate-bounce delay-400" />
              <div className="absolute top-1/5 right-[15%] w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-800" />
              
              {/* More scattered items */}
              <div className="absolute top-[15%] left-[10%] text-white/50 animate-pulse"><Star size={12} fill="currentColor" /></div>
              <div className="absolute top-[45%] right-[15%] text-white/50 animate-pulse delay-300"><Star size={10} fill="currentColor" /></div>
              <div className="absolute bottom-[15%] left-[15%] text-white/50 animate-pulse delay-600"><Star size={14} fill="currentColor" /></div>
              <div className="absolute bottom-[35%] right-[25%] text-white/50 animate-pulse delay-900"><Star size={12} fill="currentColor" /></div>
            </div>

              {/* Cross mark - Moved to screen corner */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSplash(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-all duration-300 bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/10 hover:border-white/30 shadow-2xl group z-[110]"
              >
                <X size={28} className="transition-transform group-hover:rotate-90" />
              </motion.button>

            <div className="relative max-w-6xl w-full flex flex-col items-center gap-10">
              {/* Glowing background */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-violet-600/20 via-pink-600/20 to-amber-500/20 opacity-30 blur-3xl" />

              {/* Admissions Text */}
              <div className="text-center space-y-2 mb-6 relative z-10">
                <h2 className="text-2xl md:text-5xl font-black text-yellow-400 uppercase tracking-wider">Admissions are in Progress</h2>
                <p className="text-lg md:text-2xl font-bold text-white">2026 - 27</p>
              </div>

              {/* Book Container */}
              <div className="flex flex-row gap-0 w-full justify-center relative z-10 max-w-4xl" style={{ perspective: 1200 }}>
                {/* Left Page */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: 35 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.01 }}
                  className="w-1/2 relative aspect-[4/5] max-h-[65vh] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-transparent group cursor-pointer"
                  style={{ transformOrigin: "right center" }}
                >
                  <img
                    src="/preload1 (1).jpeg"
                    alt="Preload 1"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Right Page */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotateY: -35 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.01 }}
                  className="w-1/2 relative aspect-[4/5] max-h-[65vh] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-transparent group cursor-pointer"
                  style={{ transformOrigin: "left center" }}
                >
                  <img
                    src="/preload1 (2).jpeg"
                    alt="Preload 2"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
              
              <div className="text-white/50 text-sm md:text-base font-medium animate-pulse tracking-widest uppercase mt-4">
                Click the X to enter the site
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className={`bg-primary text-primary-foreground px-4 text-[10px] sm:text-sm transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-8 sm:h-10 opacity-100 py-2'
          }`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
            <div className="flex gap-3 sm:gap-6">
              <a href="tel:9948726955" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                <Phone size={12} className="sm:size-[14px]" /> 9948726955
              </a>
              <span className="hidden sm:flex items-center gap-1.5">
                <MapPin size={12} className="sm:size-[14px]" /> Naidupet
              </span>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Facebook size={14} className="sm:size-[16px] cursor-pointer hover:text-yellow-400 transition-colors" />
              <Instagram size={14} className="sm:size-[16px] cursor-pointer hover:text-yellow-400 transition-colors" />
              <Twitter size={14} className="sm:size-[16px] cursor-pointer hover:text-yellow-400 transition-colors" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <header className={`transition-all duration-300 border-b border-border ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background/80 backdrop-blur-md'
          }`}>
          <nav className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'
            }`}>
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`rounded-xl transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'
                }`}>
                <img
                  src="/logo.png"
                  alt="BBM Logo"
                  className={`object-contain transition-all duration-300 ${isScrolled ? 'w-12 h-12' : 'w-20 h-20'
                    }`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className={`font-bold leading-none tracking-tight transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'
                  }`}>BBM HIGH SCHOOL</h1>
                <p className={`uppercase tracking-[0.2em] text-muted-foreground font-medium transition-all duration-300 ${isScrolled ? 'text-[8px]' : 'text-[10px]'
                  }`}>Shaping Future Leaders</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="ml-4 rounded-full bg-[#0a4d29] hover:bg-[#083d21] text-white px-2 py-2 h-11 border-none shadow-lg group transition-all duration-300">
                <Link to="/admissions" className="flex items-center gap-3 pl-4 pr-1">
                  <span className="font-semibold text-sm whitespace-nowrap">Get Admission Now</span>
                  <div className="size-9 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md">
                    <ArrowRight className="text-[#0a4d29] animate-[pulse_1.5s_infinite] size-5" />
                  </div>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden bg-background border-b border-border absolute w-full left-0 px-4 py-6 flex flex-col gap-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full rounded-2xl bg-[#0a4d29] hover:bg-[#083d21] text-white h-14 border-none shadow-xl group transition-all duration-300">
                <Link to="/admissions" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6">
                  <span className="font-bold text-lg">Get Admission Now</span>
                  <div className="size-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <ArrowRight className="text-[#0a4d29] animate-[pulse_1.5s_infinite] size-6" />
                  </div>
                </Link>
              </Button>
            </motion.div>
          )}
        </header>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="h-[112px] sm:h-[120px]" />

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="BBM Logo"
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-xl">BBM HIGH SCHOOL</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Committed to providing quality education with strong academic foundations. Integrating modern teaching methods with traditional values.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navItems.slice(0, 4).map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-primary transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Programs</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Nursery to Class X</li>
              <li>IIT Foundation</li>
              <li>Medical Foundation</li>
              <li>Smart Classrooms</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Naidupet, Khammam, Telangana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 9948726955</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2025 BBM High School. All Rights Reserved.</p>
            <p className="text-xs opacity-60">
              Designed By <a href="https://www.alphahari.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4">Alpha Hari Solutions</a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/admin/login" className="hover:text-primary">Admin Login</Link>
            <Link to="#" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </footer>
      <WhatsAppWidget />
      <AIChatbot />
    </div>
  );
}

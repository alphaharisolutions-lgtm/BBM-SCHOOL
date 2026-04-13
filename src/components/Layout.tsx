import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppWidget } from './WhatsAppWidget';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Programs', href: '/#programs' },
  { name: 'Facilities', href: '/#facilities' },
  { name: 'Results', href: '/#results' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-bottom shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="BBM High School Logo" className="h-12 md:h-16 w-auto group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold leading-none text-primary">BBM</span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">High School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  scrollToSection(link.href);
                }
              }}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button asChild className="rounded-full bg-[#0a4d29] hover:bg-[#083d21] text-white px-2 py-2 h-11 border-none shadow-lg group transition-all duration-300">
            <Link to="/admissions" className="flex items-center gap-3 pl-4 pr-1">
              <span className="font-semibold text-sm whitespace-nowrap">Get Admission Now</span>
              <div className="size-9 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md">
                <ArrowRight className="text-[#0a4d29] animate-[pulse_1.5s_infinite] size-5" />
              </div>
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  scrollToSection(link.href);
                } else {
                  setIsOpen(false);
                }
              }}
              className="text-lg font-medium py-2 border-b border-muted last:border-0"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full rounded-2xl bg-[#0a4d29] hover:bg-[#083d21] text-white h-14 border-none shadow-xl group transition-all duration-300">
            <Link to="/admissions" onClick={() => setIsOpen(false)} className="flex items-center justify-between px-6 font-bold text-lg">
              <span>Get Admission Now</span>
              <div className="size-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <ArrowRight className="text-[#0a4d29] animate-[pulse_1.5s_infinite] size-6" />
              </div>
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}


import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BBM High School Logo" className="h-10 w-auto bg-white rounded-lg p-1" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold leading-none">BBM</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">High School</span>
            </div>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Shaping future leaders through excellence in education and a strong academic foundation since 2000.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><a href="/#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
            <li><a href="/#programs" className="hover:opacity-100 transition-opacity">Programs</a></li>
            <li><a href="/#facilities" className="hover:opacity-100 transition-opacity">Facilities</a></li>
            <li><a href="/admissions" className="hover:opacity-100 transition-opacity">Admissions</a></li>
            <li><Link to="/admin" className="hover:opacity-100 transition-opacity">Admin Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="shrink-0" />
              <span>Naidupet, Khammam, Telangana</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="shrink-0" />
              <span>+91 99487 26955</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="shrink-0" />
              <span>info@bbmhighschool.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-sm opacity-80 mb-4">Subscribe to get latest updates and news.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
        <p>© 2025 BBM High School. All Rights Reserved.</p>
        <p>
          Designed By <a href="https://www.alphahari.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2">Alpha Hari Solutions</a>
        </p>
      </div>
    </footer>
  );
}

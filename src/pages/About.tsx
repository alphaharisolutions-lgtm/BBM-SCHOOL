import { motion } from 'motion/react';
import { CheckCircle2, Target, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      <section className="bg-secondary/50 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">About BBM High School</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Located in Naidupet, Khammam, we are committed to providing quality education with strong academic foundations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At BBM High School, we believe that every child has the potential to lead. Our mission is to nurture this potential through a balanced approach to education that combines academic rigor with character building.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'Academic Excellence', desc: 'Focus on core subjects and competitive prep.' },
                { icon: Heart, title: 'Values & Ethics', desc: 'Instilling discipline and traditional values.' },
                { icon: Shield, title: 'Safe Environment', desc: 'A secure and supportive campus for all.' },
                { icon: CheckCircle2, title: 'Proven Results', desc: 'Consistent 100% pass rate in SSC.' },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/philosophy/800/800" 
                alt="School Philosophy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Years of Legacy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground mt-24 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Our Commitment</h2>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "We focus on shaping students into confident and successful individuals by integrating modern teaching methods with traditional values."
            </p>
            <div className="pt-8 border-t border-white/20">
              <p className="font-bold text-lg">Principal's Message</p>
              <p className="text-sm opacity-60">BBM High School, Naidupet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

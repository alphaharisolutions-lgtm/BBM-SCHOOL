import { motion } from 'motion/react';
import { storage } from '@/lib/storage';
import { Trophy, Star, Award } from 'lucide-react';

export default function Results() {
  const results = storage.getResults();

  return (
    <div className="pb-24">
      <section className="bg-secondary/50 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest">
            Academic Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Outstanding SSC Results</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our students consistently achieve top scores, reflecting our commitment to quality education and rigorous preparation.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { label: 'Pass Percentage', value: '100%', icon: Trophy },
            { label: 'Highest Score', value: '583/600', icon: Star },
            { label: 'Students Above 550', value: '50+', icon: Award },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-primary text-primary-foreground text-center space-y-4 shadow-xl"
            >
              <stat.icon className="mx-auto text-yellow-400" size={48} />
              <div className="text-5xl font-bold">{stat.value}</div>
              <div className="text-primary-foreground/60 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Toppers</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((topper, i) => (
            <motion.div
              key={topper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group text-center space-y-4"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-lg border-4 border-white group-hover:border-primary transition-colors duration-500">
                <img 
                  src={topper.photo} 
                  alt={topper.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="text-white font-bold text-lg">{topper.marks}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{topper.name}</h3>
                <p className="text-primary font-bold text-lg">{topper.marks}</p>
                <p className="text-sm text-muted-foreground">Class X - {topper.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

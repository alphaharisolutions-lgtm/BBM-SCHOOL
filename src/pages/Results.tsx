import { motion } from 'motion/react';
import { storage } from '@/lib/storage';
import { Trophy, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Result } from '@/types';

export default function Results() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await storage.getResults();
      setResults(data.sort((a, b) => b.year.localeCompare(a.year)));
    };
    fetchResults();
  }, []);

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
            { label: 'Highest Score', value: '586/600', icon: Star },
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

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest">
            SSC Results 2026
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <div className="relative size-20 md:size-24 bg-[#0284c7] rounded-xl flex flex-col items-center justify-between overflow-hidden border-2 border-white/30 shadow-xl">
                <div className="absolute top-1 left-2 text-yellow-300 text-xs animate-pulse">★</div>
                <div className="absolute top-3 right-3 text-green-300 text-xs animate-pulse delay-100">★</div>
                <div className="absolute top-2 left-1/2 text-white text-xs animate-pulse delay-200">✦</div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mt-1 relative z-10 drop-shadow-lg">10</div>
                <div className="absolute top-[35%] left-[-10%] right-[-10%] bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-[10px] md:text-xs font-bold py-0.5 text-center -rotate-6 shadow-lg z-20 border-y border-red-400">
                  BBM
                </div>
                <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-yellow-400 text-[10px] font-bold py-1 text-center z-30 border-t border-gray-700">
                  SSC-2026
                </div>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">Meet Our Toppers</h2>
            <motion.div
              initial={{ scale: 0, rotate: 20 }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            >
              <div className="relative size-20 md:size-24 bg-[#0284c7] rounded-xl flex flex-col items-center justify-between overflow-hidden border-2 border-white/30 shadow-xl">
                <div className="absolute top-1 left-2 text-yellow-300 text-xs animate-pulse">★</div>
                <div className="absolute top-3 right-3 text-green-300 text-xs animate-pulse delay-100">★</div>
                <div className="absolute top-2 left-1/2 text-white text-xs animate-pulse delay-200">✦</div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mt-1 relative z-10 drop-shadow-lg">10</div>
                <div className="absolute top-[35%] left-[-10%] right-[-10%] bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-[10px] md:text-xs font-bold py-0.5 text-center -rotate-6 shadow-lg z-20 border-y border-red-400">
                  BBM
                </div>
                <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-yellow-400 text-[10px] font-bold py-1 text-center z-30 border-t border-gray-700">
                  SSC-2026
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Top 4 Toppers (Large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.slice(0, 4).map((topper, i) => (
            <motion.div
              key={topper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group text-center space-y-4"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white group-hover:border-primary transition-colors duration-500">
                <img
                  src={topper.photo}
                  alt={topper.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
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

        {/* Other Toppers (Small) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {results.slice(4).map((topper, i) => (
            <motion.div
              key={topper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group text-center space-y-2"
            >
              <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-md border-2 border-white group-hover:border-primary transition-colors duration-500">
                <img
                  src={topper.photo}
                  alt={topper.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                  <span className="text-white font-bold text-sm">{topper.marks}</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold truncate">{topper.name}</h4>
                <p className="text-primary font-bold text-sm">{topper.marks}</p>
                <p className="text-xs text-muted-foreground">Class X - {topper.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

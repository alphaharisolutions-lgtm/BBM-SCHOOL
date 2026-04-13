import { motion } from 'motion/react';
import { BookOpen, Microscope, Monitor, Music, Palette } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Smart Classrooms',
      icon: Monitor,
      desc: 'Equipped with interactive digital boards and visual learning tools to make education engaging.',
      image: 'https://picsum.photos/seed/smartclass/800/600'
    },
    {
      title: 'Science Laboratories',
      icon: Microscope,
      desc: 'Modern physics, chemistry, and biology labs for hands-on practical learning and experiments.',
      image: 'https://picsum.photos/seed/scilab/800/600'
    },
    {
      title: 'Computer Lab',
      icon: Monitor,
      desc: 'High-speed internet and latest systems to ensure students are tech-savvy from an early age.',
      image: 'https://picsum.photos/seed/complab/800/600'
    },
    {
      title: 'Library',
      icon: BookOpen,
      desc: 'A vast collection of books, journals, and digital resources to foster a habit of reading.',
      image: 'https://picsum.photos/seed/library/800/600'
    },
    {
      title: 'Cultural Activities',
      icon: Music,
      desc: 'Dedicated spaces for music, dance, and drama to encourage artistic expression.',
      image: 'https://picsum.photos/seed/cultural/800/600'
    },
    {
      title: 'Play-way Learning',
      icon: Palette,
      desc: 'Special activity areas for kids to learn through play and creative exploration.',
      image: 'https://picsum.photos/seed/playway/800/600'
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">World-Class Facilities</h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Providing a conducive environment for learning, exploration, and overall development.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

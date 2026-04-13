import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Brain, Microscope, Star, CheckCircle2 } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Nursery to Class X',
      icon: GraduationCap,
      features: [
        'Strong academic foundation',
        'Activity-based learning',
        'Focus on overall development',
        'Holistic character building'
      ],
      desc: 'Our comprehensive curriculum from early childhood to secondary education ensures a smooth academic transition and steady growth.'
    },
    {
      title: 'IIT & Medical Foundation',
      icon: Brain,
      features: [
        'Advanced Maths & Science',
        'Concept-based teaching',
        'Early preparation for competitive exams',
        'Special coaching for Class VI–X'
      ],
      desc: 'A specialized program designed to give students a head start in their journey towards prestigious engineering and medical careers.'
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Academic Programs</h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Tailored educational paths designed to nurture talent and achieve excellence.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24 space-y-24">
        {programs.map((program, i) => (
          <div key={program.title} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <program.icon className="text-primary" size={32} />
              </div>
              <h2 className="text-4xl font-bold">{program.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {program.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={`https://picsum.photos/seed/program-${i}/800/600`} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-secondary/50 rounded-[3rem] p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold">Modern Curriculum</h3>
              <p className="text-muted-foreground">Integrating digital tools and interactive methods for better understanding.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Microscope size={24} />
              </div>
              <h3 className="text-xl font-bold">Practical Approach</h3>
              <p className="text-muted-foreground">Focus on hands-on experiments and real-world applications of concepts.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold">Competitive Edge</h3>
              <p className="text-muted-foreground">Regular assessments and coaching to prepare for state and national exams.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

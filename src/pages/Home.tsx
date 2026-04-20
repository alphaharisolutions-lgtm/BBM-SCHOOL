import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Microscope, Monitor, Trophy, Users, Star, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  const highlights = [
    { icon: Trophy, title: '100% Results', desc: 'Consistent excellence in SSC examinations year after year.' },
    { icon: Users, title: 'Expert Staff', desc: 'Highly experienced and dedicated teaching professionals.' },
    { icon: Monitor, title: 'Smart Classes', desc: 'Modern digital classrooms for interactive and visual learning.' },
    { icon: Microscope, title: 'Advanced Labs', desc: 'Well-equipped science and computer laboratories.' },
  ];

  const stats = [
    { label: 'Pass Percentage', value: '100%' },
    { label: 'Top SSC Score', value: '583/600' },
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Students Scored 550+', value: '50+' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-primary pt-12 pb-20 md:py-0">
        <div className="absolute inset-0">
          <img
            src="/school.jpeg"
            alt="BBM High School Campus"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Transparent color overlay */}
          <div className="absolute inset-0 bg-primary/60 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-primary-foreground space-y-8 lg:w-3/5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-base md:text-lg font-bold shadow-2xl"
            >
              <Star size={18} className="text-yellow-400 fill-yellow-400 animate-pulse" />
              <div className="flex overflow-hidden">
                {"Admissions Open for 2026-27".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1 + index * 0.05,
                      duration: 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 4,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>



            <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              BBM High School – <span className="text-yellow-400">Excellence</span> in Education
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              Nurturing young minds from Nursery to Class X with a strong focus on IIT & Medical Foundation.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto translate-x-8 sm:translate-x-0"
              >
                <Link to="/admissions">
                  <Button asChild className="rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] text-primary-foreground px-2 py-2 h-16 border-b-4 border-yellow-700 active:border-b-0 shadow-xl group transition-all duration-300">
                    <div className="flex items-center gap-4 pl-6 pr-2">
                      <span className="font-extrabold text-lg whitespace-nowrap text-primary">Get Admission Now</span>
                      <div className="size-12 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md">
                        <ArrowRight className="text-green-600 animate-[pulse_1.5s_infinite] size-6" />
                      </div>
                    </div>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a href="https://maps.app.goo.gl/6qxyYmuKuw1jbq1q7" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-primary-foreground border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-2xl px-10 text-lg font-bold h-16 shadow-lg flex items-center gap-2">
                    <MapPin className="text-yellow-400" />
                    Get Directions
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-2/5 flex flex-col items-center justify-center scale-75 md:scale-100 pt-12 lg:pt-20"
          >
            <div className="relative group">
              {/* Decorative behind elements */}
              <div className="absolute -inset-4 bg-yellow-400/30 blur-3xl rounded-full animate-pulse group-hover:bg-yellow-400/40 transition-all duration-1000" />

              <div className="relative space-y-4">
                {/* Top Block: Admissions */}
                <div className="bg-[#1e1b4b] px-12 py-6 -rotate-2 shadow-2xl skew-x-[-12deg] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400" />
                  <h3 className="text-white text-6xl md:text-7xl font-bold tracking-wider skew-x-[12deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    అడ్మిషన్లు
                  </h3>
                </div>

                {/* Middle Block: Going on */}
                <div className="bg-[#f59e0b] px-10 py-4 rotate-1 shadow-xl skew-x-[6deg] -mt-2 ml-6 self-end border-b-4 border-yellow-700">
                  <h4 className="text-[#1e1b4b] text-4xl md:text-5xl font-black skew-x-[-6deg]">
                    జరుగుచున్నవి
                  </h4>
                </div>

                {/* Bottom Line: Classes */}
                <div className="text-center pt-6 space-y-1">
                  <div className="text-primary-foreground/90 text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
                    <span className="opacity-70">NURSERY</span>
                    <span className="text-yellow-400 italic font-serif lowercase text-xl md:text-2xl">to</span>
                    <span className="opacity-90">CLASS X</span>
                  </div>
                  <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border group hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <item.icon className="text-primary group-hover:text-white" size={28} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground group-hover:text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-5xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-primary-foreground/60 font-medium uppercase tracking-widest text-[10px] md:text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IIT Foundation Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-secondary rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
              Special Coaching
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              IIT & Medical Foundation <br />
              <span className="text-primary">Class VI – X</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We provide early preparation for competitive exams with advanced Maths and Science concepts, ensuring our students stay ahead in their academic journey.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {[
                'Concept-based teaching methodology',
                'Regular mock tests and analysis',
                'Advanced problem-solving sessions',
                'Individual attention for every student'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base font-medium">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/programs" className="block">
              <Button className="w-full sm:w-auto rounded-full px-8 h-12 mt-4">Learn More About Programs</Button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px] md:min-h-[400px]">
            <img
              src="https://picsum.photos/seed/iit-foundation/800/800"
              alt="Students Studying"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries behind BBM High School who are committed to excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {[
            {
              name: 'Gurram Kantha Rao',
              role: 'Director',
              image: '/sir.jpeg',
              message: 'Our goal is to provide a nurturing environment where every child can excel academically and grow into a responsible citizen.'
            },
            {
              name: 'Gurram Nagamani',
              role: 'Correspondent',
              image: '/madam.jpeg',
              message: 'We believe in a holistic approach to education, balancing academic rigor with character building and modern values.'
            }
          ].map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                <div className="w-48 h-60 md:w-56 md:h-72 shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-6 flex-1 text-center lg:text-left">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold tracking-tight text-primary">{leader.name}</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black uppercase tracking-[0.2em] text-xs">
                      {leader.role}
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif">"</span>
                    <p className="text-muted-foreground leading-relaxed italic text-lg px-2">
                      {leader.message}
                    </p>
                    <span className="absolute -bottom-8 -right-2 text-6xl text-primary/10 font-serif">"</span>
                  </div>
                  <div className="w-16 h-1.5 bg-gradient-to-r from-primary/40 to-transparent mx-auto lg:mx-0 rounded-full mt-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Staff Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Dedicated Staff</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The backbone of BBM High School—our experienced and passionate team of educators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 group"
          >
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative">
              <img 
                src="/gents.HEIC" 
                alt="Gents Staff" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">Gentlemen Staff</h3>
              <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 group"
          >
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative">
              <img 
                src="/ladies staff.HEIC" 
                alt="Ladies Staff" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">Ladies Staff</h3>
              <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="space-y-6 md:space-y-8 text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Find Us on Campus</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Visit our campus in Naidupet, Khammam to experience our learning environment firsthand.
          </p>
        </div>
        <div className="aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-secondary border border-border relative shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=BBM%20High%20School%20Naidupet%20Khammam&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BBM High School Location"
          />
          <div className="absolute bottom-8 left-8 hidden md:block">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold">BBM High School</h4>
                <p className="text-sm text-muted-foreground">Naidupet, Khammam, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center space-y-6 md:space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <h2 className="text-3xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Ready to Shape Your <br className="hidden md:block" /> Child's Future?
          </h2>
          <p className="text-base md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Join BBM High School and give your child the foundation they deserve. Admissions for the academic year 2026-27 are now open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link to="/admissions">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-br from-yellow-300 to-yellow-600 text-primary hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 rounded-2xl px-14 h-16 text-xl font-black shadow-2xl border-b-4 border-yellow-700 active:border-b-0 flex items-center gap-3">
                  Get Admission Now
                  <div className="size-8 rounded-full bg-white flex items-center justify-center p-1 shadow-inner">
                    <ArrowRight className="text-green-600 animate-[pulse_1s_infinite] size-5" />
                  </div>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-xl text-primary-foreground border-white/30 hover:bg-white/20 transition-all duration-300 rounded-2xl px-14 h-16 text-xl font-bold shadow-xl">
                  Enquire Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

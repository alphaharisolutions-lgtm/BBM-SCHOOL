import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Microscope, Monitor, Trophy, Users, Star, CheckCircle2, MapPin, Sparkles, Bus, GraduationCap, Brain, Swords, MessageSquare, Building2, Award, Image as ImageIcon, UserCheck, PhoneCall, ArrowUpRight, HelpCircle, Quote, ChevronDown, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface HighlightDetail {
  icon: any;
  title: string;
  desc: string;
  badge: string;
  category: string;
  statBox?: { value: string; label: string };
  details: string[];
  highlightsList: string[];
}

export default function Home() {
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightDetail | null>(null);

  const highlights: HighlightDetail[] = [
    { 
      icon: Trophy, 
      title: '100% Results', 
      desc: 'Consistent excellence in SSC examinations year after year.', 
      badge: 'Click to View Info',
      category: 'Academic Supremacy',
      statBox: { value: '586 / 600', label: 'Top SSC Mark (2026)' },
      details: [
        'BBM High School maintains an unbroken 100% pass record in SSC State Board examinations.',
        'Over 80% of our students consistently score above 500 marks with top state ranks.',
        'Comprehensive revision schedules, chapter-wise mock tests, and personal student mentoring ensure maximum exam readiness.'
      ],
      highlightsList: [
        '100% SSC Pass Percentage Every Year',
        'Top Subject Marks in Mathematics & Science',
        'Individual Mentoring & Doubt-Clearing Sessions',
        'Continuous Progress Tracking & Parent Updates'
      ]
    },
    { 
      icon: Users, 
      title: 'Expert Staff', 
      desc: 'Highly experienced and dedicated teaching professionals.', 
      badge: 'Click to View Info',
      category: 'Faculty & Mentorship',
      statBox: { value: '15+ Yrs', label: 'Avg Teacher Tenure' },
      details: [
        'Our faculty comprises highly qualified, passionate educators with extensive teaching experience.',
        'Led by Director Sri Gurram Kantha Rao and Correspondent Smt. Gurram Nagamani.',
        'Teachers focus on concept-driven learning, compassionate guidance, and nurturing critical thinking.'
      ],
      highlightsList: [
        'Subject-Specialized Faculty Members',
        'Regular Teacher Enrichment & Pedagogy Workshops',
        'Approachable & Caring Mentorship for Every Student',
        'Dedicated Doubt-Clearing & Extra-Care Sessions'
      ]
    },
    { 
      icon: Monitor, 
      title: 'Smart Classes', 
      desc: 'Modern digital classrooms for interactive and visual learning.', 
      badge: 'Click to View Info',
      category: 'Digital Infrastructure',
      statBox: { value: '100%', label: 'Smart Enabled Classes' },
      details: [
        'Classrooms equipped with high-definition digital smart boards and visual audio-video learning modules.',
        '3D animations and interactive visual content make complex Science and Math concepts intuitive.',
        'Balanced, age-appropriate screen time policy ensuring maximum cognitive retention.'
      ],
      highlightsList: [
        'HD Digital Smart Boards in Classrooms',
        '3D Animated Visual Curriculum Content',
        'Interactive Classroom Quizzes & Exercises',
        'Balanced Screen Time for Healthy Learning'
      ]
    },
    { 
      icon: Microscope, 
      title: 'Advanced Labs', 
      desc: 'Well-equipped science and computer laboratories.', 
      badge: 'Click to View Info',
      category: 'Practical STEM Learning',
      statBox: { value: 'Modern', label: 'Science & Tech Labs' },
      details: [
        'Well-equipped Physics, Chemistry, and Biology laboratories enabling hands-on practical experiments.',
        'State-of-the-art Computer Laboratory providing foundational digital literacy and coding basics.',
        'Annual Science Exhibitions & Fairs where students build and demonstrate innovative projects.'
      ],
      highlightsList: [
        'Comprehensive Physics, Chemistry & Biology Kits',
        'High-Speed Computer Lab & Digital Training',
        'Annual Science & Math Practical Exhibitions',
        'Safety-First Practical Learning Guidelines'
      ]
    },
  ];

  const stats = [
    { label: 'Pass Percentage', value: '100%' },
    { label: 'Top SSC Score (2026)', value: '586/600' },
    { label: 'Years of Excellence', value: '30+' },
    { label: 'Students Scored 500+', value: '80%' },
  ];

  const pillars = [
    {
      title: '30+ Years Academic Legacy',
      desc: 'Founded in 1995-96 by Sri V. Nageswara Rao, built on strong ethics, dedicated teachers, and compassionate administration.',
      icon: Building2,
      badge: 'Est. 1995'
    },
    {
      title: 'IIT & Medical Foundation',
      desc: 'Integrated coaching for Classes VI–IX in Maths, Physics, Chemistry & Logical Reasoning preparing for JEE, NTSE & Olympiads.',
      icon: Brain,
      badge: 'Class VI to IX'
    },
    {
      title: 'Pre-Primary Experiential Pedagogy',
      desc: 'Objective-driven cognitive activities, Color Days, core literacy, fine motor handwriting, and regulated screen time.',
      icon: GraduationCap,
      badge: 'Nursery, LKG, UKG'
    },
    {
      title: 'Daily Spoken English & Skills',
      desc: 'Daily Spoken English sessions for public speaking, Karate self-defence, Chess coaching, and annual Science Exhibitions.',
      icon: MessageSquare,
      badge: 'Co-Curricular'
    },
    {
      title: '100% SSC Results Record',
      desc: 'Consistent top rankers year after year, with 586/600 top mark in 2026 and 80% students scoring above 500 marks.',
      icon: Trophy,
      badge: 'State Honors'
    },
    {
      title: 'Smart Infrastructure & Transport',
      desc: 'Interactive Smart Board classrooms, modern Science & Computer Labs, Digital Library, and safe bus transport across Khammam.',
      icon: Monitor,
      badge: 'Modern Campus'
    }
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

          <div className="lg:w-2/5 relative flex flex-col items-center justify-center pt-12 lg:pt-20">
            {/* Small Admissions Badge (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -top-10 -right-8 lg:-top-16 lg:-right-16 scale-[0.3] origin-top-right z-20 hidden md:block"
            >
              <div className="relative text-center">
                {/* Decorative festive elements */}
                <div className="absolute -inset-20 pointer-events-none opacity-50">
                  <Star className="absolute top-0 left-0 text-yellow-400 rotate-12" size={32} />
                  <Star className="absolute top-10 right-0 text-yellow-400 -rotate-12" size={24} />
                  <Sparkles className="absolute bottom-0 left-10 text-yellow-400" size={40} />
                </div>

                <div className="relative space-y-6 flex flex-col items-center">
                  {/* Glowing background effect */}
                  <div className="absolute -inset-6 bg-gradient-to-tr from-violet-600 via-pink-600 to-amber-500 opacity-60 blur-3xl animate-pulse" />
                  
                  <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center space-y-6 shadow-2xl">
                    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-16 py-8 rounded-2xl shadow-lg transform -rotate-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <h3 className="text-white text-9xl font-extrabold font-[var(--font-telugu)] tracking-tighter relative z-10">
                        అడ్మిషన్లు
                      </h3>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-12 py-6 rounded-2xl shadow-lg transform rotate-1 -mt-4 relative overflow-hidden border-b-4 border-orange-700">
                      <h4 className="text-slate-900 text-7xl font-black font-[var(--font-telugu)] relative z-10">
                        జరుగుచున్నవి
                      </h4>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-white text-6xl font-black tracking-tight whitespace-nowrap bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                        NURSERY <span className="italic font-serif text-5xl text-amber-300">to</span> CLASS X
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main IIT & Medical Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative group scale-90 md:scale-110 mt-16"
            >
              <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full animate-pulse group-hover:bg-primary/40 transition-all duration-1000" />

              <div className="relative space-y-0 text-center">
                <div className="bg-[#1e1b4b] px-10 py-8 border-4 border-yellow-400 shadow-[0_20px_50px_rgba(0,0,0,0.3)] skew-x-[-4deg] relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Decorative background shapes */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />

                  <h2 className="text-yellow-400 text-5xl md:text-6xl font-black tracking-tighter skew-x-[4deg] leading-none mb-2">
                    IIT & MEDICAL
                  </h2>
                  <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight skew-x-[4deg] leading-none">
                    Foundation
                  </h2>
                </div>

                <div className="bg-yellow-400 px-8 py-3 -mt-3 relative z-10 skew-x-[4deg] shadow-lg inline-block self-center border-b-4 border-yellow-600">
                  <p className="text-primary text-2xl md:text-3xl font-black tracking-widest skew-x-[-4deg]">
                    CLASS VI <span className="italic font-serif normal-case text-xl font-medium">to</span> X
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedHighlight(item)}
              className="group cursor-pointer p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border hover:bg-primary hover:text-primary-foreground hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <item.icon className="text-primary group-hover:text-white" size={28} />
                  </div>
                  <div className="size-8 rounded-full bg-primary/10 group-hover:bg-yellow-400 group-hover:text-slate-950 flex items-center justify-center transition-all">
                    <Sparkles size={16} className="text-primary group-hover:text-slate-950 transition-transform" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground group-hover:text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-border/40 group-hover:border-white/20 flex items-center justify-between text-xs font-extrabold text-primary group-hover:text-yellow-400">
                <span>Click to Open Detail Popup</span>
                <span>✨</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🌟 FEATURE HIGHLIGHT DETAIL POPUP DIALOG */}
        {selectedHighlight && (
          <Dialog open={!!selectedHighlight} onOpenChange={() => setSelectedHighlight(null)}>
            <DialogContent showCloseButton={false} className="sm:max-w-4xl max-w-4xl w-[94vw] md:w-[85vw] lg:w-[75vw] max-h-[88vh] overflow-y-auto rounded-[2.5rem] p-6 md:p-10 bg-white border border-border shadow-2xl z-[100] focus:outline-none">
              <DialogHeader className="space-y-4 text-left border-b border-slate-100 pb-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black text-xs uppercase tracking-wider">
                    {selectedHighlight.category}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setSelectedHighlight(null)}
                    className="rounded-full hover:bg-slate-100 h-10 w-10 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <X size={22} />
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shrink-0">
                    <selectedHighlight.icon size={30} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                      {selectedHighlight.title}
                    </DialogTitle>
                    <DialogDescription className="text-xs md:text-sm text-slate-500 font-medium">
                      {selectedHighlight.desc}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Highlight Stat Box */}
                {selectedHighlight.statBox && (
                  <div className="bg-gradient-to-r from-primary/10 via-indigo-50 to-primary/5 p-4 rounded-2xl border border-primary/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">{selectedHighlight.statBox.label}</span>
                      <h4 className="text-2xl md:text-3xl font-black text-primary">{selectedHighlight.statBox.value}</h4>
                    </div>
                    <Award size={32} className="text-primary opacity-60" />
                  </div>
                )}

                {/* Detailed Paragraphs */}
                <div className="space-y-3">
                  <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider">About This Feature</h4>
                  {selectedHighlight.details.map((para, idx) => (
                    <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Key Points Bullet List */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider">Key Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedHighlight.highlightsList.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end border-t border-slate-100">
                  <Button 
                    onClick={() => setSelectedHighlight(null)}
                    className="rounded-2xl font-extrabold bg-primary text-white hover:bg-primary/90 px-8 h-12 shadow-lg"
                  >
                    Close Information Popup
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
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

      {/* Segregated Academic & Activity Fields Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
            Our Core Offerings
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Segregated Educational & Activity Fields
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Structured excellence tailored for every stage of your child's growth and competitive success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Field 1: Pre Primary */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 border border-amber-500/20 flex flex-col justify-between shadow-xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)] hover:border-amber-400 transition-all duration-300 group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Foundational Base</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Pre-Primary Programme</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Experiential learning methodology focusing on cognitive development, core literacy, fine motor handwriting, and regulated, age-appropriate screen time.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" /> Hands-on learning & Color Days
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" /> Systematic academic revisions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" /> Structured handwriting drills
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link to="/programs" className="block">
                <Button variant="outline" className="w-full rounded-2xl border-amber-500/30 text-amber-900 hover:bg-amber-500 hover:text-slate-950 font-bold shadow-md">
                  Explore Pre-Primary
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Field 2: IIT Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="bg-slate-950 text-white rounded-[2.5rem] p-8 border border-yellow-400/40 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-yellow-400 hover:shadow-[0_20px_50px_rgba(234,179,8,0.25)] transition-all duration-300"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-yellow-400/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Brain size={28} />
              </div>
              <div>
                <span className="text-xs font-black text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">Classes VI to IX</span>
                <h3 className="text-2xl font-extrabold text-white mt-2">IIT & Basic Foundation</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Comprehensive coaching in Maths, Physics, Chemistry & Logical Reasoning. Concept-based mastery preparing for JEE, NTSE & Olympiads.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0" /> Practice tests & doubt sessions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0" /> Individual mentoring & motivation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0" /> Regular parent progress updates
                </li>
              </ul>
            </div>
            <div className="pt-8 relative z-10">
              <Link to="/programs" className="block">
                <Button className="w-full rounded-2xl bg-yellow-400 text-slate-950 hover:bg-yellow-300 font-extrabold shadow-lg">
                  Explore IIT Foundation
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Field 3: Beyond Textbooks */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 border border-blue-500/20 flex flex-col justify-between shadow-xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:border-blue-400 transition-all duration-300 group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Trophy size={28} />
              </div>
              <div>
                <span className="text-xs font-black text-blue-700 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Co-Curricular Fields</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Beyond Textbooks</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Holistic development encompassing Daily Spoken English, Karate training, Chess coaching, Science Fairs, and Cultural competitions.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" /> Daily Spoken English sessions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" /> Karate & Chess coaching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" /> Science Fairs, Debates & Quizzes
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link to="/programs" className="block">
                <Button variant="outline" className="w-full rounded-2xl border-primary/30 text-primary hover:bg-primary hover:text-white font-bold shadow-md">
                  Explore Activities
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🏛️ PILLARS OF EDUCATIONAL EXCELLENCE */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white rounded-[3rem] p-8 md:p-16 border border-indigo-900 shadow-2xl relative overflow-hidden space-y-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center space-y-4 max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 font-bold text-xs uppercase tracking-widest border border-yellow-400/30">
              <Award size={16} />
              Pillars of Educational Supremacy
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Why Parents Choose BBM High School
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Combining 30+ years of academic legacy with concept-driven competitive coaching and character building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="p-6 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-yellow-400/50 hover:shadow-[0_15px_30px_rgba(234,179,8,0.15)] transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <pillar.icon size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-xl text-white group-hover:text-yellow-400 transition-colors">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 OVERVIEW OF ALL 7 SCHOOL SECTIONS AT A GLANCE */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
            <Sparkles size={16} />
            Explore Our School at a Glance
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Discover Everything BBM High School Offers
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Get quick insights into our history, academics, state-of-the-art facilities, stellar results, vibrant gallery, admission process, and campus contact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* 1. About Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Building2 size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black text-amber-600 uppercase tracking-wider">Established 1995</span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">1. About BBM</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded by Sri V. Nageswara Rao in Naidupet, Khammam. Built on ethical values, quality education, and compassionate leadership.
              </p>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 pt-2">
              <span>Read Our Full Story</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 2. Programs Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold">
                <GraduationCap size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">Nursery to Class X</span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">2. Programs</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pre-Primary experiential learning, Class VI-IX IIT & Basic Foundation coaching, Daily Spoken English, Karate, and Chess.
              </p>
            </div>
            <Link to="/programs" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 pt-2">
              <span>Explore All Academic Fields</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 3. Facilities Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold">
                <Monitor size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black text-cyan-600 uppercase tracking-wider">Modern Campus</span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">3. Facilities</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interactive Smart Classrooms, modern Science & Computer Labs, Digital Library, Play-way zones, and city-wide safe bus network.
              </p>
            </div>
            <Link to="/facilities" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 pt-2">
              <span>View Infrastructure & Labs</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 4. Results Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <Award size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">100% SSC Pass</span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">4. Results</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Top SSC Score of 586/600, 80% students scoring 500+, and a 30+ year track record of state academic honors.
              </p>
            </div>
            <Link to="/results" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 pt-2">
              <span>See Top Scorers & Marks</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 5. Gallery Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                <ImageIcon size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black text-purple-600 uppercase tracking-wider">Vibrant Campus</span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">5. Gallery</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Photos & highlights of Science Fairs, Color Days, Annual Day celebrations, Karate demonstrations, Sports Days & Cultural events.
              </p>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 pt-2">
              <span>Browse Photo Gallery</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 6. Admissions Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                <UserCheck size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black text-rose-600 uppercase tracking-wider">2026-27 Open</span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">6. Admissions</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enroll your child from Nursery to Class X. Simple 3-step admission process, fee guidance, and guided campus tours available.
              </p>
            </div>
            <Link to="/admissions" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary/80 pt-2">
              <span>Start Admission Process</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 7. Contact Section Preview */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-primary via-primary to-indigo-950 text-white rounded-3xl p-8 border border-primary-foreground/20 shadow-xl hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group lg:col-span-3"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                  <PhoneCall size={14} />
                  <span>Get In Touch</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">7. Contact & Campus Location</h3>
                <p className="text-sm text-slate-200 leading-relaxed max-w-2xl">
                  Located at Naidupet, Khammam, Telangana. Call us at <strong>+91 9948726955</strong> or visit our campus for direct counselling and tours.
                </p>
              </div>
              <Link to="/contact">
                <Button className="rounded-2xl bg-yellow-400 text-slate-950 hover:bg-yellow-300 font-extrabold px-8 h-12 shadow-lg shrink-0">
                  Contact Us & Location Map
                </Button>
              </Link>
            </div>
          </motion.div>
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
                    <h3 className="text-xl md:text-3xl font-bold tracking-tight text-primary whitespace-nowrap">{leader.name}</h3>
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
                src="/gents.jpeg"
                alt="Gents Staff"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">Gents Staff</h3>
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
                src="/ladies.jpeg"
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

      {/* Alumni Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-secondary/50 rounded-[3rem] p-12 md:p-20 border border-border overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                Wall of Fame
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase font-telugu">
                Our Students are <br /> <span className="text-primary italic">Shaping the World</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BBM High School takes immense pride in its alumni who have transcended boundaries and are now making significant contributions in prestigious organizations and leading sectors across the globe.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-3xl font-extrabold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground uppercase font-black opacity-60">Engineers & Doctors</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground uppercase font-black opacity-60">Civil Servants</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Srinivas Rao", role: "Software Engineer", company: "Google", image: "https://picsum.photos/seed/alumni1/400/400", batch: "2010" },
                  { name: "Ananya Reddy", role: "Sr. Cardiologist", company: "Apollo Hospital", image: "https://picsum.photos/seed/alumni2/400/400", batch: "2012" },
                  { name: "Murali Krishna", role: "Scientist", company: "ISRO", image: "https://picsum.photos/seed/alumni3/400/400", batch: "2008" },
                  { name: "Priya Darshini", role: "Lead Architect", company: "Microsoft", image: "https://picsum.photos/seed/alumni4/400/400", batch: "2014" },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-3 group/card"
                  >
                    <div className="mx-auto w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover/card:scale-105 transition-transform duration-500">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs md:text-sm font-bold text-slate-900 group-hover/card:text-primary transition-colors truncate">{item.name}</h4>
                      <div className="text-[8px] md:text-[9px] font-black text-primary uppercase tracking-wider">{item.role}</div>
                      <div className="text-[8px] font-bold text-slate-400 mt-0.5 truncate">Batch {item.batch}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 PARENT TESTIMONIALS & REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
            <Quote size={16} />
            Parent Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            What Parents Say About BBM High School
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Hear from parents whose children thrive academically, mentally, and socially in our school environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The IIT Foundation program at BBM High School transformed my son's analytical thinking in Maths and Physics. His confidence in competitive practice exams has grown tremendously!",
              author: "Dr. K. Srinivas Rao",
              relation: "Parent of Class VIII Student",
              rating: 5
            },
            {
              quote: "We love how BBM balances hands-on play, fine motor handwriting skills, and Color Days with regulated screen time for pre-primary kids. My daughter loves coming to school every morning!",
              author: "Smt. Anitha Reddy",
              relation: "Parent of Pre-Primary Student",
              rating: 5
            },
            {
              quote: "With 30 years of academic legacy and daily Spoken English, Karate, and Chess coaching, BBM nurtures children intellectually, physically, and morally. Truly Khammam's best school!",
              author: "Sri V. Mahesh Garu",
              relation: "Parent of Class X Topper",
              rating: 5
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 border border-border shadow-lg flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-base">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{item.author}</h4>
                  <p className="text-xs text-muted-foreground font-medium">{item.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bus Facility Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-slate-900 text-white p-8 md:p-16">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-xs font-black uppercase tracking-[0.2em]">
                <Bus size={14} />
                <span>Transportation</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase font-telugu">
                Safe & Reliable <br />
                <span className="text-yellow-400 italic">Bus Facility</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                We provide a well-connected and secure transportation network covering <span className="text-white font-bold">all major areas in Khammam</span>. Our buses are equipped with modern safety features and experienced staff to ensure a comfortable journey for every student.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'GPS Tracking System',
                  'Dedicated Bus Attendants',
                  'Daily Safety Inspections',
                  'Wide Coverage Network'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                    <CheckCircle2 className="text-yellow-400 shrink-0" size={18} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full rounded-[3rem] overflow-hidden border-8 border-white/5 relative z-10 group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
                <img
                  src="/bus.jpeg"
                  alt="School Bus"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="relative md:absolute md:bottom-4 md:left-4 max-w-[260px] mx-auto mb-4 md:mb-0 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="text-yellow-400 font-black text-lg mb-1 italic uppercase">10+ Routes</div>
                  <div className="text-white/80 text-xs font-medium">Connecting every corner of Khammam city and surrounding suburbs.</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
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

      {/* ❓ FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
            <HelpCircle size={16} />
            Common Enquiries
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Find quick answers to common questions about admissions, academics, foundation programs, and campus activities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "What grade levels does BBM High School offer?",
              a: "BBM High School offers comprehensive education from Pre-Primary (Nursery, LKG, UKG) up to Class X (SSC Board), with specialized IIT & Medical Foundation coaching integrated for Classes VI to IX."
            },
            {
              q: "How does the IIT & Basic Foundation Programme work?",
              a: "Our IIT Foundation Programme for Classes VI to IX provides concept-based coaching in Mathematics, Physics, Chemistry, and Logical Reasoning. It features regular practice tests, worksheets, doubt-clearing sessions, and step-by-step study material to prepare students for JEE, NTSE, Olympiads, and scholarship exams."
            },
            {
              q: "What is unique about BBM's Pre-Primary curriculum?",
              a: "Our Pre-Primary program is driven by experiential learning ('learning by doing'), combining objective-driven cognitive activities with games, Color Days, core literacy, fine motor handwriting skills, and regulated, age-appropriate screen time."
            },
            {
              q: "What extra-curricular and co-curricular activities are taught?",
              a: "Students participate in daily Spoken English sessions for communication confidence, Karate self-defence training, Chess coaching for strategic thinking, Science Fairs, Exhibitions, Debates, Quizzes, Art, Craft, Dance, Drama, and National Festival celebrations."
            },
            {
              q: "Does the school provide safe transportation across Khammam?",
              a: "Yes! BBM High School operates a well-connected, safe school bus network covering 10+ major routes across Khammam city and surrounding suburbs."
            }
          ].map((faq, index) => (
            <details key={index} className="group bg-white rounded-3xl border border-border shadow-sm overflow-hidden transition-all">
              <summary className="p-6 font-extrabold text-base md:text-lg text-slate-900 cursor-pointer flex items-center justify-between gap-4 select-none hover:text-primary transition-colors">
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0">
                    Q{index + 1}
                  </span>
                  {faq.q}
                </span>
                <ChevronDown className="text-muted-foreground group-open:rotate-180 transition-transform shrink-0" size={20} />
              </summary>
              <div className="px-6 pb-6 pt-2 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pl-16">
                {faq.a}
              </div>
            </details>
          ))}
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

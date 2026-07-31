import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  MessageSquare, 
  Trophy, 
  Compass, 
  Feather, 
  Palette, 
  Leaf, 
  Tv, 
  Target,
  Swords,
  Flame,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Programs() {
  const [activeTab, setActiveTab] = useState<'all' | 'preprimary' | 'iit' | 'holistic'>('all');

  const prePrimaryFeatures = [
    { title: 'Experiential Learning', desc: 'Little hands learn best by doing. Everyday lessons are blended with exciting games and hands-on activities.', icon: Sparkles },
    { title: 'Cognitive Development', desc: 'Objective-driven activities designed specifically to foster early cognitive growth and curiosity.', icon: Brain },
    { title: 'Core Literacy & Fine Motor Skills', desc: 'Rigorous focus on core literacy, fine motor handwriting skills, and structured reinforcement drills.', icon: Feather },
    { title: 'Regulated Screen Time', desc: 'Technology is integrated responsibly through carefully balanced, age-appropriate interactive screen time.', icon: Tv },
    { title: 'Vibrant Color Days & Reading', desc: 'Classrooms buzz with energy celebrating Color Days, storytelling, and thorough academic revisions.', icon: Palette },
    { title: 'Strong & Happy Foundation', desc: 'Gentle drills and systematic revisions build a happy, confident academic starting point.', icon: CheckCircle2 }
  ];

  const iitHighlights = [
    'Comprehensive coaching in Mathematics, Physics, Chemistry, and Logical Reasoning',
    'Concept-based learning closely aligned with the school curriculum',
    'Focus on developing analytical problem-solving and critical thinking skills',
    'Experienced and dedicated faculty with personalized guidance',
    'Regular practice tests, worksheets, and detailed performance analysis',
    'Special doubt-clearing sessions for individual attention',
    'Activity-based learning with practical applications of concepts',
    'Preparation for competitive examinations: JEE, NTSE, Olympiads & Scholarship exams',
    'Continuous assessment and progress reports regularly shared with parents',
    'Encouragement of scientific temperament, creativity, and innovation',
    'Well-planned study material designed for step-by-step concept mastery',
    'Individual mentoring to help every student achieve academic excellence',
    'Motivation sessions to build confidence, discipline, and a healthy competitive spirit'
  ];

  const holisticFields = [
    {
      category: 'Communication & Language',
      icon: MessageSquare,
      color: 'from-blue-500/10 to-cyan-500/10 text-blue-600',
      badge: 'Daily Focus',
      items: [
        'Daily Spoken English sessions to build public speaking confidence',
        'Creative writing, storytelling, and expressive reading programmes',
        'Debate, elocution, essay writing, and interactive quiz competitions'
      ]
    },
    {
      category: 'Sports & Specialized Mind Skills',
      icon: Swords,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600',
      badge: 'Physical & Mental Fitness',
      items: [
        'Karate Training: Focus on self-confidence, self-defence skills, and discipline',
        'Chess Coaching: Enhances logical reasoning and strategic planning capabilities',
        'Sports & Physical Education: Promotes teamwork, agility, and physical health'
      ]
    },
    {
      category: 'STEM & Experiential Learning',
      icon: Compass,
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600',
      badge: 'Hands-on Science',
      items: [
        'Regular Science and Mathematics activity-based learning sessions',
        'Annual Science Fairs, Exhibitions, and practical project-based modules',
        'Critical thinking workshops with real-world application of concepts'
      ]
    },
    {
      category: 'Arts, Culture & Leadership',
      icon: Palette,
      color: 'from-purple-500/10 to-pink-500/10 text-purple-600',
      badge: 'Creative & Moral Values',
      items: [
        'Art, Craft, Dance, and Drama platforms to express creative talents',
        'Leadership programmes to nurture decision-making and responsibility',
        'Environmental awareness & sustainability drives for green citizenship',
        'Vibrant celebrations of national festivals to instill patriotism and culture'
      ]
    }
  ];

  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-sm font-bold tracking-wide uppercase"
          >
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            Curriculum & Co-Curricular Fields
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Segregated Academic & Co-Curricular Fields
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            From early childhood experiential learning to advanced IIT/Basic Foundation coaching and holistic extracurricular disciplines.
          </motion.p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {[
              { id: 'all', label: 'All Educational Fields' },
              { id: 'preprimary', label: '👶 Pre-Primary Programme' },
              { id: 'iit', label: '🔬 IIT & Basic Foundation' },
              { id: 'holistic', label: '🎨 Beyond Textbooks' }
            ].map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                variant={activeTab === tab.id ? 'secondary' : 'outline'}
                className={`rounded-full px-6 py-2.5 font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-yellow-400 text-slate-950 shadow-lg hover:bg-yellow-300' 
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-16 space-y-24">
        
        {/* FIELD 1: PRE-PRIMARY PROGRAMME */}
        {(activeTab === 'all' || activeTab === 'preprimary') && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-yellow-500/10 rounded-[3rem] p-8 md:p-14 border border-amber-500/20 shadow-xl space-y-12 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
              <div className="space-y-6 lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 font-bold text-xs uppercase tracking-widest border border-amber-500/20">
                  <GraduationCap size={16} />
                  Early Childhood Education
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Pre-Primary Programme <br />
                  <span className="text-amber-600 font-serif italic text-2xl md:text-4xl">Experiential Learning & Cognitive Growth</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  At BBM High School, our early childhood program emphasizes cognitive development through objective-driven activities and systematic academic revisions. We believe little hands learn best by doing—blending everyday lessons with exciting games, hands-on activities, and Color Days.
                </p>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 font-medium text-sm">
                  💡 <strong>Balanced Screen Time Policy:</strong> Technology is integrated responsibly through regulated, age-appropriate interactive screen time to create a balanced, high-achieving environment for young learners.
                </div>
              </div>
              <div className="lg:w-2/5 w-full">
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white">
                  <img 
                    src="/school.jpeg" 
                    alt="Pre Primary Classroom BBM" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg">Building a Happy & Strong Foundation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre Primary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {prePrimaryFeatures.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* FIELD 2: IIT & BASIC FOUNDATION PROGRAMME */}
        {(activeTab === 'all' || activeTab === 'iit') && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 text-white rounded-[3rem] p-8 md:p-14 border border-indigo-900 shadow-2xl space-y-12 relative overflow-hidden"
          >
            {/* Ambient Background Blur */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
              <div className="space-y-6 lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 font-bold text-xs uppercase tracking-widest border border-yellow-400/30">
                  <Brain size={16} />
                  Classes VI to IX Coaching
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  IIT & Basic Foundation Programme
                </h2>
                <div className="inline-block bg-yellow-400 text-slate-950 font-black px-4 py-1 rounded-xl text-lg tracking-wide">
                  🎯 Vision: "Building a Strong Foundation for a Bright Future."
                </div>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  Our IIT Foundation Programme is meticulously engineered for Classes VI to IX to build a solid academic bedrock and sharpen analytical thinking from an early age. We prepare students for competitive exams like JEE, NTSE, Olympiads, and scholarship exams alongside regular school excellence.
                </p>
              </div>

              <div className="lg:w-2/5 w-full bg-slate-900/90 rounded-3xl p-6 border border-slate-800 space-y-4">
                <h4 className="font-bold text-yellow-400 text-lg flex items-center gap-2">
                  <Award size={20} /> Core Subjects Covered
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Mathematics', 'Physics', 'Chemistry', 'Logical Reasoning'].map((sub) => (
                    <div key={sub} className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center font-bold text-sm text-white">
                      {sub}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 text-center pt-2">
                  Includes doubt-clearing sessions, step-by-step study material & continuous parent progress reports.
                </p>
              </div>
            </div>

            {/* 13 Programme Highlights */}
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                <Sparkles size={24} /> 13 Key Highlights of the Programme
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {iitHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-yellow-400/40 transition-colors">
                    <span className="w-8 h-8 shrink-0 rounded-xl bg-yellow-400/20 text-yellow-300 font-extrabold flex items-center justify-center text-sm border border-yellow-400/30">
                      {index + 1}
                    </span>
                    <span className="text-slate-200 text-sm font-medium leading-relaxed pt-1">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* FIELD 3: BEYOND TEXTBOOKS (HOLISTIC & CO-CURRICULAR ACTIVITIES) */}
        {(activeTab === 'all' || activeTab === 'holistic') && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                <Trophy size={16} />
                Beyond Textbooks
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Holistic Activity-Based Learning
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                At BBM High School, learning extends beyond traditional textbooks. Our activity-based approach ensures every child discovers, develops, and showcases their unique talents in academics, sports, culture, and ethics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {holisticFields.map((field) => (
                <div key={field.category} className="bg-white rounded-[2.5rem] p-8 border border-border shadow-lg hover:shadow-xl transition-all space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${field.color} flex items-center justify-center`}>
                        <field.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{field.category}</h3>
                        <span className="text-xs font-bold text-muted-foreground">{field.badge}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {field.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Special Highlight Cards for Karate & Chess */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="bg-gradient-to-br from-red-500/10 via-orange-500/5 to-amber-500/10 rounded-3xl p-8 border border-red-200 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Swords size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-slate-900">Karate & Self-Defence Training</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Instills self-confidence, physical agility, mental discipline, and essential self-defence techniques for every student.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-500/10 rounded-3xl p-8 border border-indigo-200 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Brain size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-slate-900">Chess & Strategic Thinking Coaching</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Enhances logical thinking, foresight, patience, and strategic decision-making through expert chess guidance.
                  </p>
                </div>
              </div>
            </div>

          </motion.section>
        )}

      </div>
    </div>
  );
}

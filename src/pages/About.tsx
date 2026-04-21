import { motion } from 'motion/react';
import { Target, Heart, Shield, Award, Users, BookOpen, Microscope, Music, Zap, Globe, Sparkles } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Respect', desc: 'Valuing diversity and treating everyone with dignity and empathy.' },
  { icon: Shield, title: 'Integrity', desc: 'Upholding honesty, transparency, and ethics in all endeavours.' },
  { icon: Award, title: 'Excellence', desc: 'Striving for the highest standards in academics and activities.' },
  { icon: Sparkles, title: 'Empathy', desc: 'Understanding and caring for the perspectives of others.' },
  { icon: Users, title: 'Teamwork', desc: 'Collaborating effectively to achieve shared goals.' },
  { icon: Target, title: 'Discipline', desc: 'Encouraging self-control and a sense of responsibility.' },
  { icon: Zap, title: 'Creativity', desc: 'Inspiring original thinking and innovation.' },
];

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-20">
          <img src="/school.jpeg" alt="BBM Campus" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Our Legacy & <span className="text-yellow-400">Vision</span></h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Traces its proud foundation to 1995-96, built on the vision of quality education and strong ethics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                Our Foundation
              </div>
              <h2 className="text-4xl font-bold leading-tight">The Vision of Sri V. Nageswara Rao</h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                "His dream was to establish an institution dedicated to impart quality education with a strong ethical compass."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                BBM High School, located in Naidupet, Khammam, traces its proud foundation to 1995-96. The school is the result of the vision and passion of the late Sri V. Nageswara Rao, an eminent teacher and administrator. Guided by this founding ideal, the school continues to flourish under the stewardship of the dynamic academicians - Mr. G. Kantha Rao and the correspondent Smt. G. Nagamani.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/school.jpeg" alt="BBM Campus" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-primary p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold">1995</div>
                <div className="text-sm font-black uppercase tracking-widest">Est. Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          whileHover={{ y: -10 }}
          className="p-12 rounded-[3rem] bg-primary text-white space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <Target className="text-yellow-400" size={48} />
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            To empower every student with wisdom, skills, and values essential for meaningful lives and responsible citizenship, inspiring them to become compassionate, innovative, and ethical contributors to society.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="p-12 rounded-[3rem] bg-secondary text-secondary-foreground space-y-6 border border-border"
        >
          <Globe className="text-primary" size={48} />
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BBM High School seeks to deliver holistic, student-centered education that nurtures intellectual curiosity, critical thinking, and lifelong learning. We prepare students to meet global challenges with confidence, resilience, and integrity.
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold italic">Core Values</h2>
          <p className="text-muted-foreground">The pillars that define the BBM character.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="p-8 rounded-[2rem] bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <v.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure & Academics */}
      <section className="bg-secondary/30 mt-32 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg translate-y-8">
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Library" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="Class" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80" alt="Lab" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg -translate-y-8">
                  <img src="https://images.unsplash.com/photo-1497633762265-9a177c80b904?auto=format&fit=crop&q=80" alt="Books" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl font-bold">Academic & Infrastructure</h2>
              <p className="text-muted-foreground leading-relaxed">
                The physical infrastructure reflects our commitment to inventive, student-centered learning. Designed by experienced architects, the campus boasts spacious classrooms, a well-stocked library, and advanced laboratories.
              </p>
              <div className="space-y-6">
                {[
                  { icon: BookOpen, title: 'Resource Rich', text: 'Well-stocked library and modern computer laboratories.' },
                  { icon: Microscope, title: 'Scientific Inquiry', text: 'Science labs that encourage hands-on experiments.' },
                  { icon: Sparkles, title: 'Modern Methods', text: 'K-Yan systems, digital projectors, and E-classes.' },
                  { icon: Award, title: 'IIT/NEET Foundation', text: 'Advanced coaching for Class VI - X and basic for III - V.' }
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Development */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-4xl font-bold italic">Holistic Growth</h2>
            <p className="text-muted-foreground leading-relaxed">
              True education transcends textbooks. We provide a vibrant array of co-curricular activities to nurture creativity and leadership.
            </p>
            <div className="bg-yellow-400 p-8 rounded-[2rem] space-y-4">
              <h4 className="font-bold text-primary uppercase tracking-widest text-sm">Activities</h4>
              <ul className="grid grid-cols-2 gap-4">
                {['Karate', 'Dance', 'Yoga', 'Music', 'Drawing', 'Drama'].map(a => (
                  <li key={a} className="flex items-center gap-2 font-bold text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-border rounded-[2.5rem] shadow-sm space-y-4">
              <Users className="text-primary" />
              <h3 className="text-2xl font-bold">House System</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students are placed into four groups—<span className="text-blue-500 font-bold">Blue</span>, <span className="text-green-500 font-bold">Green</span>, <span className="text-red-500 font-bold">Red</span>, and <span className="text-yellow-500 font-bold">Yellow</span>—fostering loyalty and healthy competition.
              </p>
            </div>
            <div className="p-10 bg-white border border-border rounded-[2.5rem] shadow-sm space-y-4">
              <BookOpen className="text-primary" />
              <h3 className="text-2xl font-bold">Ethical Compass</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Weekly sessions on moral education and life skills ensure that children emerge as responsible citizens equipped with resilience and integrity.
              </p>
            </div>
            <div className="p-10 bg-white border border-border rounded-[2.5rem] shadow-sm space-y-4">
              <Users className="text-primary" />
              <h3 className="text-2xl font-bold">Expert Faculty</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our teachers are mentors who genuinely care for the growth of their pupils, undergoing regular professional development to incorporate the best research.
              </p>
            </div>
            <div className="p-10 bg-white border border-border rounded-[2.5rem] shadow-sm space-y-4">
              <Heart className="text-primary" />
              <h3 className="text-2xl font-bold">Parent Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Parents are indispensable partners, kept informed via regular updates, meetings, and open platforms for dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="bg-primary text-white mt-32 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">A Lasting Impact</h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            The legacy of BBM High School is reflected in its accomplished alumni, who pursue careers and higher education with confidence. Former students recall the caring environment and dedicated faculty for their success and character building.
          </p>
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">1000+</div>
              <div className="text-sm opacity-60 uppercase tracking-widest mt-2">Successful Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">30+</div>
              <div className="text-sm opacity-60 uppercase tracking-widest mt-2">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

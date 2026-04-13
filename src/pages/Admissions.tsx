import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, ShieldCheck, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';

const admissionSchema = z.object({
  studentName: z.string().min(2, 'Name is too short'),
  classApplyingFor: z.string().min(1, 'Please select a class'),
  parentName: z.string().min(2, 'Parent name is too short'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number (10 digits required)'),
  address: z.string().min(10, 'Address is too short'),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export default function Admissions() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = (data: AdmissionFormValues) => {
    storage.saveAdmission(data);
    setIsSubmitted(true);
    toast.success('Admission application submitted successfully!');
    reset();
  };

  const classes = [
    'Nursery', 'LKG', 'UKG',
    'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
    'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-secondary/50 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Admissions Open 2026-27</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We invite students from Nursery to Class X to join our institution for a bright academic future.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Why Choose Us */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose BBM High School?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our school integrates modern teaching methods with traditional values to shape students into confident and successful individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Star, title: 'Excellent Results', desc: 'Consistent 100% pass percentage in SSC.' },
              { icon: Users, title: 'Dedicated Faculty', desc: 'Experienced teachers who care for every child.' },
              { icon: GraduationCap, title: 'IIT Foundation', desc: 'Early prep for competitive exams from Class VI.' },
              { icon: ShieldCheck, title: 'Holistic Growth', desc: 'Focus on academics, discipline, and values.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm space-y-3"
              >
                <item.icon className="text-primary" size={24} />
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold">Admission Process</h3>
            <ul className="space-y-4">
              {[
                'Fill the online application form',
                'Visit the school for a campus tour',
                'Interaction with the Principal',
                'Document verification & Fee payment'
              ].map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-primary-foreground/90">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Admission Form */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-border shadow-xl h-fit">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-bold">Application Received!</h2>
              <p className="text-muted-foreground">
                Thank you for applying. Our admissions team will contact you shortly to guide you through the next steps.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                Submit Another Application
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-2xl font-bold mb-8">Apply for Admission</h2>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Student Name</label>
                <Input {...register('studentName')} placeholder="Full name of the student" className="rounded-xl h-12" />
                {errors.studentName && <p className="text-xs text-destructive">{errors.studentName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Class Applying For</label>
                <Select onValueChange={(val: string) => setValue('classApplyingFor', val)}>
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.classApplyingFor && <p className="text-xs text-destructive">{errors.classApplyingFor.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Parent/Guardian Name</label>
                <Input {...register('parentName')} placeholder="Full name of parent" className="rounded-xl h-12" />
                {errors.parentName && <p className="text-xs text-destructive">{errors.parentName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input {...register('phone')} placeholder="10-digit mobile number" className="rounded-xl h-12" />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                <Textarea {...register('address')} placeholder="Current residential address" className="rounded-xl min-h-[100px]" />
                {errors.address && <p className="text-xs text-destructive">{errors.address.message}</p>}
              </div>

              <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold mt-4">
                Submit Application
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

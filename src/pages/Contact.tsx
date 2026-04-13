import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

const enquirySchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  message: z.string().min(5, 'Message is too short'),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

function EnquiryForm({ onSuccess }: { onSuccess?: () => void }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = (data: EnquiryFormValues) => {
    storage.saveEnquiry(data);
    toast.success('Enquiry sent successfully!');
    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Name</label>
          <Input {...register('name')} placeholder="Full Name" className="rounded-xl h-12" />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input {...register('phone')} placeholder="10-digit mobile number" className="rounded-xl h-12" />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea {...register('message')} placeholder="How can we help you?" className="rounded-xl min-h-[120px]" />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold gap-2">
        Send Message <Send size={20} />
      </Button>
    </form>
  );
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = [
    { icon: Phone, title: 'Phone', content: '+91 9948726955', sub: 'Mon-Sat, 8am-4pm' },
    { icon: MapPin, title: 'Location', content: 'Naidupet, Khammam', sub: 'Telangana, India' },
    { icon: Mail, title: 'Email', content: 'info@bbmhighschool.com', sub: 'Contact us anytime' },
    { icon: Clock, title: 'School Hours', content: '8:30 AM - 4:00 PM', sub: 'Monday to Saturday' },
  ];

  return (
    <div className="pb-24">
      <section className="bg-secondary/50 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions? Contact us for more details about admissions and programs.
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold gap-3 shadow-xl hover:scale-105 transition-transform">
                <MessageSquare size={24} /> Quick Enquiry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-[2rem]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Send an Enquiry</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <EnquiryForm onSuccess={() => setIsOpen(false)} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-6 p-6 rounded-3xl bg-white border border-border shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-primary font-medium">{item.content}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] border border-border shadow-xl">
          <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
          <EnquiryForm />
        </div>
      </div>

      {/* Google Maps Embed */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
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
    </div>
  );
}

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const phoneNumber = '+919948726955';
  const message = 'Hello! I have an inquiry about BBM High School admissions.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <div className="bg-white text-primary px-4 py-2 rounded-2xl shadow-2xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/10 whitespace-nowrap hidden md:block">
        Chat with us
      </div>

      {/* Button */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <div className="relative size-14 md:size-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.4)] border-2 border-white/20">
          <MessageCircle size={32} className="md:size-36" />
        </div>
      </div>
    </motion.a>
  );
}

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12 text-center">Get in Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="w-full px-6 py-3 rounded-full border border-stone-200" />
          <input type="email" placeholder="Email" className="w-full px-6 py-3 rounded-full border border-stone-200" />
          <textarea placeholder="Message" className="w-full px-6 py-4 rounded-3xl border border-stone-200 h-32" />
          <button className="w-full bg-[#333333] text-white py-3 rounded-full hover:bg-stone-800 transition">Send Message</button>
        </form>
        
        <div className="space-y-8 text-stone-600">
          <p className="flex items-center gap-4"><Mail /> orelineke@gmail.com</p>
          <p className="flex items-center gap-4"><Phone />+254 113 516 808</p>
          <p className="flex items-center gap-4"><MapPin /> Wellness District, CA</p>
          
          <button className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition">
            <MessageCircle /> WhatsApp Us
          </button>
          
          <div className="mt-8 pt-8 border-t border-stone-200">
            <Link to="/faq" className="text-[#A8B5A2] underline font-medium">View FAQ</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

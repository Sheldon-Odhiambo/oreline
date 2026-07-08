import { motion } from 'motion/react';
import AboutBrand from '../components/AboutBrand';

export default function AboutPage() {
  const topics = [
    { name: 'Our Mission', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_19.36.55_f3ysmd', description: 'Empowering movement through comfort.' },
    { name: 'Sustainability', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.24.42_gejuma', description: 'Ethically sourced materials.' },
    { name: 'Craftsmanship', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200', description: 'Designed for everyday performance.' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-20">
      <AboutBrand />
      <div className="pb-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-medium text-[#333333] mb-12">Our Story Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {topics.map(topic => (
            <div key={topic.name} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] mb-4 bg-stone-100">
                <img src={topic.image} alt={topic.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-2xl text-[#333333]">{topic.name}</h3>
              <p className="text-stone-600 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

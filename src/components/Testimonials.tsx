import { motion } from 'motion/react';

const testimonials = [
  { text: "ORÉLINE has completely transformed my daily movement. The comfort and elegance are unmatched.", author: "Kemi M." },
  { text: "Finally, activewear that feels like luxury. Beautiful, functional, and so calming.", author: "Apondi T." },
  { text: "I've never felt more confident in my yoga practice than when wearing these pieces.", author: "Wanjiru S." },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-medium text-[#333333] mb-16 text-center">Community Love</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <p className="text-stone-600 mb-6 italic">"{t.text}"</p>
              <p className="font-medium text-[#333333]">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

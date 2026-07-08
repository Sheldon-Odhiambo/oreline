import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function CollectionsPage() {
  const navigate = useNavigate();
  const collections = [
    { name: 'Flow Collection', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.23.47_qtqnar' },
    { name: 'Move Collection', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.25.09_zv9fy7' },
    { name: 'Rest Collection', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_20.10.56_yxofrr' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12">Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map(col => (
          <div key={col.name} className="group">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] mb-4 bg-stone-100">
              <img src={col.image} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h2 className="font-serif text-2xl text-[#333333] mb-4">{col.name}</h2>
            <button 
              onClick={() => navigate(`/shop?collection=${col.name.split(' ')[0]}`)}
              className="bg-[#A3ADA0] text-white px-8 py-3 rounded-full hover:bg-[#8e3f3f] transition"
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

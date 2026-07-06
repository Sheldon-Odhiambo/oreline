import { motion } from 'motion/react';

export default function CollectionsPage() {
  const collections = [
    { name: 'Flow Collection', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Move Collection', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Rest Collection', image: 'https://images.unsplash.com/photo-1547910352-78a7c2688001?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Studio Essentials', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Outdoor Active', image: 'https://images.unsplash.com/photo-1556817411-31972ba88a0b?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Wellness Basics', image: 'https://images.unsplash.com/photo-1599447421416-341450394ae5?auto=format&fit=crop&q=80&w=1200' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12">Collections</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {collections.map(col => (
          <div key={col.name} className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] mb-4 bg-stone-100">
              <img src={col.image} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h2 className="font-serif text-2xl text-[#333333]">{col.name}</h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

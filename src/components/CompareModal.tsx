import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CompareModal({ products, isOpen, onClose }: { products: any[], isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
        >
          <motion.div 
            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
            className="bg-white rounded-3xl p-8 max-w-4xl w-full relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2"><X /></button>
            <h2 className="text-2xl font-serif mb-6">Compare Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map(p => (
                <div key={p.id} className="border p-4 rounded-xl">
                  <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="font-medium text-lg">{p.name}</h3>
                  <p className="text-stone-600 mb-2">Ksh. {p.price}</p>
                  <p className="text-sm text-stone-500">Category: {p.category}</p>
                  <p className="text-sm text-stone-500">Material: {p.material}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

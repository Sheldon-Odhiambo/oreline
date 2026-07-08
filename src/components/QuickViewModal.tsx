import { X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function QuickViewModal({ product, isOpen, onClose, addToCart }: { product: any, isOpen: boolean, onClose: () => void, addToCart: (p: any) => void }) {
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
            className="bg-white rounded-3xl p-8 max-w-2xl w-full relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2"><X /></button>
            <div className="grid md:grid-cols-2 gap-8">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-2xl" />
              <div>
                <h2 className="text-2xl font-serif mb-2">{product.name}</h2>
                <p className="text-xl text-stone-600 mb-6">Ksh. {product.price}</p>
                <button 
                  onClick={() => { addToCart(product); onClose(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#A3ADA0] text-white"
                >
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

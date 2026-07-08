import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, isOpen, toggleDrawer, removeFromCart, updateQuantity } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleDrawer();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
            onClick={toggleDrawer}
            className="fixed inset-0 bg-stone-900 z-50"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-3xl font-medium text-[#333333]">Your Cart</h2>
              <button onClick={toggleDrawer}><X className="text-stone-500" /></button>
            </div>
            
            <div className="flex-grow overflow-y-auto space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img src={item.image} className="w-20 h-20 object-cover rounded-xl" alt={item.name} />
                  <div className="flex-grow">
                    <h3 className="font-medium text-[#333333]">{item.name}</h3>
                    <p className="text-sm text-stone-500">Ksh. {item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14}/></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14}/></button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}><Trash2 size={18} className="text-stone-400" /></button>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between text-lg font-medium text-[#333333] mb-6">
                <span>Subtotal</span>
                <span>Ksh. {subtotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-[#A3ADA0] text-white py-4 rounded-full font-medium hover:bg-[#8e3f3f] transition"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

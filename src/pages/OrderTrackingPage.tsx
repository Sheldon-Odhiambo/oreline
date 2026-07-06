import { useState } from 'react';
import { motion } from 'motion/react';

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId === '123') {
      setStatus('Your order is out for delivery! Expected arrival by 5:00 PM today.');
    } else {
      setStatus('Order not found. Please check your Order ID and try again.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-lg mx-auto">
      <h1 className="font-serif text-5xl font-medium text-[#333333] mb-12 text-center">Track Your Order</h1>
      <form onSubmit={handleTrack} className="space-y-6">
        <input 
          type="text" 
          placeholder="Enter Order ID (e.g., 123)" 
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full px-6 py-4 rounded-full border border-stone-200"
          required
        />
        <button className="w-full bg-[#333333] text-white py-4 rounded-full font-medium hover:bg-stone-800 transition">Track Package</button>
      </form>
      
      {status && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 p-6 bg-stone-50 rounded-2xl text-center text-stone-700">
          {status}
        </motion.div>
      )}
    </motion.div>
  );
}

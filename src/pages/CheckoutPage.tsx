import { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [phoneNumber, setPhoneNumber] = useState('');
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    if (paymentMethod === 'mpesa') {
      try {
        const response = await fetch('/api/mpesa/stk-push', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: phoneNumber, amount: subtotal }),
        });
        const data = await response.json();
        if (!data.success) throw new Error(data.message);
      } catch (error) {
        console.error('Payment failed', error);
        setIsProcessing(false);
        alert('Payment failed. Please try again.');
        return;
      }
    }

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-lg mx-auto text-center">
        <h1 className="font-serif text-5xl font-medium text-[#333333] mb-6">Thank you for your order</h1>
        <p className="text-stone-600 mb-8">Your ORÉLINE pieces are being prepared with care.</p>
        <a href="/" className="px-8 py-3 rounded-full bg-[#333333] text-white">Back to Home</a>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="font-serif text-5xl font-medium text-[#333333] mb-12">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        <form className="space-y-6" onSubmit={handlePay}>
          <input type="text" placeholder="Full Name" required className="w-full px-6 py-3 rounded-full border border-stone-200" />
          <input type="email" placeholder="Email" required className="w-full px-6 py-3 rounded-full border border-stone-200" />
          <input type="text" placeholder="Shipping Address" required className="w-full px-6 py-3 rounded-full border border-stone-200" />
          
          <div className="flex gap-4">
            <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 py-3 rounded-full border ${paymentMethod === 'card' ? 'bg-[#A3ADA0] text-white border-[#A3ADA0]' : 'border-stone-200'}`}>Card</button>
            <button type="button" onClick={() => setPaymentMethod('mpesa')} className={`flex-1 py-3 rounded-full border ${paymentMethod === 'mpesa' ? 'bg-[#A3ADA0] text-white border-[#A3ADA0]' : 'border-stone-200'}`}>M-PESA</button>
          </div>

          {paymentMethod === 'card' ? (
            <>
              <input type="text" placeholder="Card Number (0000 0000 0000 0000)" required className="w-full px-6 py-3 rounded-full border border-stone-200" />
              <input type="text" placeholder="CVC" required className="w-full px-6 py-3 rounded-full border border-stone-200" />
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-stone-600">Please pay to:</p>
              <p className="text-sm">Paybill: <span className="font-bold">123456</span></p>
              <p className="text-sm">Bank Acc: <span className="font-bold">0121019000429</span></p>
              <input type="tel" placeholder="Phone Number (M-PESA)" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="w-full px-6 py-3 rounded-full border border-stone-200" />
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isProcessing}
            className="w-full bg-[#A3ADA0] text-white py-4 rounded-full font-medium hover:bg-[#8e3f3f] transition disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : `Pay Ksh. ${subtotal.toFixed(2)}`}
          </button>
        </form>

        <div className="bg-stone-50 p-8 rounded-3xl h-fit">
          <h3 className="font-serif text-2xl mb-6">Order Summary</h3>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.quantity} x {item.name}</span>
                <span>Ksh. {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between font-medium">
              <span>Total</span>
              <span>Ksh. {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, ZoomIn } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = {
    id: id!,
    name: 'Sage Flow Leggings',
    price: 85,
    description: 'A premium wellness legging designed for maximum comfort and support.',
    features: ['High-waisted fit', 'Moisture-wicking', 'Four-way stretch', 'Hidden pocket'],
    materials: '80% Recycled Polyester, 20% Spandex',
    images: [
      'https://images.unsplash.com/photo-1599447421416-341450394ae5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599447421416-341450394ae5?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div className="space-y-4">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            <button className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-md">
              <ZoomIn size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="font-serif text-5xl font-medium text-[#333333] mb-2">{product.name}</h1>
            <p className="text-2xl text-stone-600">Ksh. {product.price.toFixed(2)}</p>
          </div>
          <p className="text-stone-600 leading-relaxed">{product.description}</p>
          
          <div className="space-y-4">
            <h4 className="font-medium text-stone-900">Features</h4>
            <ul className="list-disc list-inside text-stone-600">
              {product.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <button 
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#333333] text-white hover:bg-stone-800 transition"
          >
            <ShoppingBag size={20} />
            Add to Cart - Ksh. {product.price.toFixed(2)}
          </button>
        </div>
      </div>

      <section className="border-t border-stone-200 pt-16">
        <h2 className="font-serif text-4xl mb-12">Related Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard id="2" image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800" name="Essential Yoga Mat" price={65} />
          <ProductCard id="3" image="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800" name="Cloud Comfort Bra" price={45} />
        </div>
      </section>

      <section className="border-t border-stone-200 pt-16">
        <h2 className="font-serif text-4xl mb-12">Customer Reviews</h2>
        <div className="space-y-6">
          {[{name: 'Sarah J', rating: 5, comment: 'Absolutely love these leggings! So comfortable.'}].map((r, i) => (
            <div key={i} className="bg-stone-50 p-6 rounded-2xl">
              <div className="flex gap-1 text-[#A8B5A2] mb-2">{'★'.repeat(r.rating)}</div>
              <p className="font-medium text-stone-900">{r.comment}</p>
              <p className="text-sm text-stone-500">- {r.name}</p>
            </div>
          ))}
          <div className="mt-8">
            <h4 className="text-xl font-medium mb-4">Leave a review</h4>
            <div className="flex gap-2 mb-4">
              {[1,2,3,4,5].map(star => <button key={star} className="text-2xl text-stone-300 hover:text-[#A8B5A2]">★</button>)}
            </div>
            <textarea className="w-full p-4 rounded-2xl border border-stone-200" placeholder="Write your review..."></textarea>
            <button className="mt-4 px-8 py-3 bg-[#333333] text-white rounded-full">Submit Review</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

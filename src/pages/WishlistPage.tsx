import { motion } from 'motion/react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12">Your Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-20 text-stone-500">
          <p>Your wishlist is currently empty.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {wishlistItems.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

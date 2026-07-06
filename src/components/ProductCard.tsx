import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

export default function ProductCard({ id, image, name, price }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
    >
      <Link to={`/product/${id}`} className="relative aspect-[3/4] overflow-hidden block">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist({ id, name, price, image }); }}
          className={`absolute top-4 right-4 p-3 md:p-2.5 bg-white/90 rounded-full transition-colors ${isInWishlist(id) ? 'text-red-500' : 'text-stone-500 hover:text-[#333333]'}`}
        >
          <Heart size={20} fill={isInWishlist(id) ? 'currentColor' : 'none'} />
        </button>
      </Link>
      <div className="p-4 md:p-6">
        <Link to={`/product/${id}`}>
          <h3 className="font-sans text-base md:text-lg font-medium text-[#333333] mb-1">{name}</h3>
        </Link>
        <p className="font-sans text-stone-500 mb-4 md:mb-5 text-sm">Ksh. {price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart({ id, name, price, image })}
          className="w-full flex items-center justify-center gap-2 py-3.5 md:py-3 rounded-full bg-white border border-[#A8B5A2] text-[#333333] hover:bg-[#A8B5A2] hover:text-white transition-all duration-300 font-medium text-sm"
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

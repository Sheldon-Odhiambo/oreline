import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Header() {
  const { toggleDrawer, cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
    { to: '/wishlist', label: 'Wishlist' },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#F8F6F2]/80 backdrop-blur-md z-40 border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-medium text-stone-800"><img src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/logo-removebg-preview_auqix3" alt="ORÉLINE" className="h-12" /></Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-stone-600">
          {navLinks.filter(l => l.to !== '/wishlist').map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative">
            <Heart size={20} className="text-stone-800" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <button onClick={toggleDrawer} className="relative">
            <ShoppingBag size={20} className="text-stone-800" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A8B5A2] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          
          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className="text-stone-800" /> : <Menu size={24} className="text-stone-800" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8F6F2] border-b border-stone-200 p-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-800 py-2">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

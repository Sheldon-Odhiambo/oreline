import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import AboutBrand from '../components/AboutBrand';
import ProductCard from '../components/ProductCard';
import NewsletterSignup from '../components/NewsletterSignup';
import Testimonials from '../components/Testimonials';

const HERO_IMAGE = "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=2400";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
          <div className="absolute inset-0 bg-[#F8F6F2]/20" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-3xl"
        >
          <h1 className="font-serif text-7xl md:text-8xl font-medium text-[#333333] mb-6 tracking-tight">Comfort in Motion</h1>
          <p className="text-xl text-[#333333] mb-10 leading-relaxed font-medium">Experience a new standard of wellness activewear designed to support your movement, confidence, and everyday comfort.</p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/shop')}
              className="bg-[#333333] text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition"
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/collections')}
              className="bg-transparent border border-[#333333] text-[#333333] px-6 py-2.5 rounded-full hover:bg-[#333333]/10 transition"
            >
              Explore Collections
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutBrand />

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-stone-50 rounded-[3rem]">
        <h2 className="font-serif text-5xl font-medium text-[#333333] mb-16 text-center">Featured Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard id="1" image="https://images.unsplash.com/photo-1599447421416-341450394ae5?auto=format&fit=crop&q=80&w=800" name="Sage Flow Leggings" price={85} />
          <ProductCard id="2" image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800" name="Essential Yoga Mat" price={65} />
          <ProductCard id="3" image="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800" name="Cloud Comfort Bra" price={45} />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}

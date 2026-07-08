import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import AboutBrand from '../components/AboutBrand';
import ProductCard from '../components/ProductCard';
import NewsletterSignup from '../components/NewsletterSignup';
import Testimonials from '../components/Testimonials';
import AnimatedCounter from '../components/AnimatedCounter';

const HERO_IMAGE = "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=2400";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-serif text-6xl md:text-7xl font-medium text-[#333333] mb-6 tracking-tight">Comfort in Motion</h1>
          <p className="text-xl text-[#333333] mb-10 leading-relaxed font-medium">Experience a new standard of wellness activewear designed to support your movement, confidence, and everyday comfort.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/shop')}
              className="bg-[#A3ADA0] text-white px-8 py-3 rounded-full hover:bg-[#8e3f3f] transition"
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/collections')}
              className="bg-transparent border border-[#A3ADA0] text-[#A3ADA0] px-8 py-3 rounded-full hover:bg-[#8e3f3f] hover:text-white transition"
            >
              Explore Collections
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_19.36.55_corebn" className="rounded-2xl h-64 object-cover" alt="Activewear 1" />
          <img src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.23.47_xdmfva" className="rounded-2xl h-64 object-cover" alt="Activewear 2" />
          <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800" className="rounded-2xl h-64 object-cover" alt="Activewear 3" />
          <img src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_19.40.13_feas80" className="rounded-2xl h-64 object-cover" alt="Activewear 4" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedCounter endValue={100} label="Happy Customers" />
        <AnimatedCounter endValue={50} label="Essential Products" />
        <AnimatedCounter endValue={24} label="Customer Support" suffix="/7" />
      </section>

      {/* About Section */}
      <AboutBrand />

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-stone-50 rounded-[3rem]">
        <h2 className="font-serif text-5xl font-medium text-[#333333] mb-16 text-center">Featured Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard id="7" image="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.23.47_f9cu6l" name="Yoga Set (Bra + Leggings)" price={3500} />
          <ProductCard id="8" image="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.24.16_o0obwd" name="Pilates Set" price={3600} />
          <ProductCard id="9" image="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.24.42_pmrhpg" name="High Leggings" price={2500} />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}

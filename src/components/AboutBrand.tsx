import { Link } from 'react-router-dom';

export default function AboutBrand() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-[2rem] overflow-hidden aspect-[4/5] bg-stone-100 shadow-inner">
          <img 
            src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_20.10.56_yfrpl9" 
            alt="Wellness philosophy" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#333333] leading-tight">
            Designed for <br />
            <span className="text-[#A8B5A2]">Conscious Movement</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            At ORÉLINE, we believe movement is the foundation of well-being. We create premium activewear that supports your journey, whether you're finding flow in yoga, building strength in Pilates, or simply moving through your everyday life with confidence.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            Our mission is to create products that support movement, comfort, and confidence in everyday life, fostering a community that values mindfulness and authentic expression.
          </p>
          <Link to="/story" className="inline-block px-8 py-3 rounded-full border border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-300">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

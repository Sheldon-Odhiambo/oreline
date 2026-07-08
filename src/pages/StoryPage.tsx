import { motion } from 'motion/react';

export default function StoryPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12">Our Story</h1>
          <div className="prose prose-lg text-stone-600">
            <p className="mb-6">
              ORÉLINE was founded on the belief that movement should be a joyful, comfortable part of everyone's daily journey. We saw a gap in the activewear market—a need for pieces that not only performed under pressure but felt incredible to wear all day long.
            </p>
            <p className="mb-6">
              We started in a small studio, sketching designs that bridged the gap between high-performance gym gear and luxurious lounge wear. Our focus has always been on quality materials, ethical production, and timeless aesthetics.
            </p>
            <p className="mb-6">
              Every piece we create is designed to empower you. From the first stitch to the final product, we prioritize comfort, durability, and a fit that makes you feel confident and ready to tackle whatever your day brings.
            </p>
            <p>
              Join us on our journey to redefine movement.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
            alt="Our Story" 
            className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'motion/react';

export default function NewsletterSignup() {
  return (
    <section className="bg-stone-50 py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif text-4xl font-medium text-stone-800 mb-4">Join the ORÉLINE Community</h2>
        <p className="text-stone-600 mb-8">Receive inspiration, wellness tips, and exclusive access to new collections.</p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-stone-400"
          />
          <button className="px-6 py-3 rounded-full bg-[#A3ADA0] text-white hover:bg-[#8e3f3f] transition">Subscribe</button>
        </form>
      </motion.div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-stone-200">
        {/* Replace with actual lifestyle image */}
        <div className="w-full h-full bg-stone-300" />
      </div>
      <div>
        <h2 className="font-serif text-5xl font-medium text-stone-800 mb-6">Our Mission & Vision</h2>
        <p className="text-stone-600 text-lg leading-relaxed mb-6">
          At ORÉLINE, we believe movement is the foundation of well-being. We create premium activewear that supports your journey, whether you're finding flow in yoga, building strength in Pilates, or simply moving through your everyday life with confidence.
        </p>
        <p className="text-stone-600 text-lg leading-relaxed">
          Our mission is to create products that support movement, comfort, and confidence in everyday life, fostering a community that values mindfulness and authentic expression.
        </p>
      </div>
    </section>
  );
}

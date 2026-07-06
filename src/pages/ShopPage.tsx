import { useState } from 'react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', name: 'Sage Flow Leggings', price: 85, category: 'Leggings', size: 'M', color: 'Sage', image: 'https://images.unsplash.com/photo-1599447421416-341450394ae5?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Essential Yoga Mat', price: 65, category: 'Accessories', size: 'N/A', color: 'Black', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Cloud Comfort Bra', price: 45, category: 'Bras', size: 'M', color: 'Lavender', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Move Tank Top', price: 35, category: 'Tops', size: 'S', color: 'White', image: 'https://images.unsplash.com/photo-1581092160607-ee22530dd90a?auto=format&fit=crop&q=80&w=800' },
  { id: '5', name: 'Rest Joggers', price: 95, category: 'Leggings', size: 'L', color: 'Charcoal', image: 'https://images.unsplash.com/photo-1547910352-78a7c2688001?auto=format&fit=crop&q=80&w=800' },
  { id: '6', name: 'Wellness Hoodie', price: 110, category: 'Tops', size: 'M', color: 'Beige', image: 'https://images.unsplash.com/photo-1556817411-31972ba88a0b?auto=format&fit=crop&q=80&w=800' },
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [sortBy, setSortBy] = useState('price-low');

  let filteredProducts = products.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    (selectedSize === 'All' || p.size === selectedSize) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12">Shop Essentials</h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 space-y-8 flex-shrink-0">
          <div>
            <h3 className="font-medium mb-4">Search</h3>
            <input 
              type="text" placeholder="Search..." 
              className="w-full px-4 py-2 rounded-full border border-stone-200"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <h3 className="font-medium mb-4">Category</h3>
            {['All', 'Leggings', 'Accessories', 'Bras', 'Tops'].map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`block w-full text-left py-1 text-sm ${selectedCategory === cat ? 'font-bold' : 'text-stone-600'}`}>{cat}</button>
            ))}
          </div>
          <div>
            <h3 className="font-medium mb-4">Size</h3>
            {['All', 'S', 'M', 'L'].map(size => (
              <button key={size} onClick={() => setSelectedSize(size)} className={`block w-full text-left py-1 text-sm ${selectedSize === size ? 'font-bold' : 'text-stone-600'}`}>{size}</button>
            ))}
          </div>
          <div>
            <h3 className="font-medium mb-4">Sort By</h3>
            <select className="w-full px-4 py-2 rounded-full border border-stone-200 bg-white" onChange={(e) => setSortBy(e.target.value)}>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 flex-grow">
          {filteredProducts.map(product => (
            <div key={product.id} className="mb-8 break-inside-avoid">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import CompareModal from '../components/CompareModal';
import { useCart } from '../context/CartContext';

const products = [
  
  { id: '15', name: 'Pilates long sleeved two piece set', price: 3000, category: 'Sets', collection: 'Flow', size: 'M', color: 'Various', material: 'Polyester', image: '/assets/flow1prod2b.jpeg' },
  { id: '8', name: 'Pilates two piece set', price: 2500, category: 'Sets', collection: 'Flow', size: 'M', color: 'Various', material: 'Polyester', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_18.24.16_p2ntj8' },
  { id: '9', name: 'High Leggings', price: 2500, category: 'Leggings', collection: 'Flow', size: 'M', color: 'Various', material: 'Spandex', image: '/assets/flow1prod3.jpeg' },
  { id: '10', name: 'Yoga Mat', price: 4000, category: 'Accessories', collection: 'Flow', size: 'N/A', color: 'Various', material: 'Rubber', image: '/assets/flow1prod4.jpeg' },
  { id: '11', name: 'Yoga Bag', price: 2500, category: 'Accessories', collection: 'Flow', size: 'N/A', color: 'Various', material: 'Canvas', image: '/assets/flow1prod5.jpeg' },
  { id: '12', name: 'Yoga Strap', price: 1500, category: 'Accessories', collection: 'Flow', size: 'N/A', color: 'Various', material: 'Cotton', image: '/assets/flow1prod6.jpeg' },
  { id: '13', name: 'Grip Socks', price: 300, category: 'Accessories', collection: 'Flow', size: 'N/A', color: 'Various', material: 'Cotton', image: '/assets/flow1prod7.jpeg' },
  // Move Collection
  { id: '7', name: 'Yoga 3 piece set', price: 4000, category: 'Sets', collection: 'Move', size: 'M', color: 'Various', material: 'Polyester', image: '/assets/yoga3.jpeg' },
  { id: '14', name: 'Yoga Long sleeved two piece set', price: 3500, category: 'Move', collection: 'Flow', size: 'M', color: 'Various', material: 'Polyester', image: '/assets/suit.jpeg' },
  { id: '16', name: 'Golf Set', price: 4000, category: 'Sets', collection: 'Move', size: 'M', color: 'Various', material: 'Polyester', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_19.36.55_hse074' },
  { id: '17', name: 'Golf Skirt', price: 2000, category: 'Sets', collection: 'Move', size: 'M', color: 'Various', material: 'Polyester', image: '/assets/move1prod1b.jpeg' },
  { id: '18', name: 'Cap', price: 1500, category: 'Accessories', collection: 'Move', size: 'N/A', color: 'Various', material: 'Cotton', image: '/assets/capp1.png' },
  { id: '19', name: 'Gym Bag', price: 2500, category: 'Accessories', collection: 'Move', size: 'N/A', color: 'Various', material: 'Canvas', image: '/assets/bag1.png' },
  { id: '20', name: 'Sweat Set', price: 6500, category: 'Sets', collection: 'Move', size: 'M', color: 'Various', material: 'Cotton', image: '/assets/sweat-suit.png' },
  { id: '21', name: 'Sweat Pants', price: 3500, category: 'Leggings', collection: 'Move', size: 'M', color: 'Various', material: 'Cotton', image: '/assets/pants.png' },
  // Reset Collection
  { id: '22', name: 'Oversized Tshirt', price: 2000, category: 'Tops', collection: 'Reset', size: 'M', color: 'Various', material: 'Cotton', image: '/assets/rest1prod1.jpeg' },
  { id: '23', name: 'Comfy Socks', price: 200, category: 'Accessories', collection: 'Reset', size: 'N/A', color: 'Various', material: 'Cotton', image: '/assets/restprod1b.jpeg' },
  // { id: '24', name: 'Oversized Hoodie', price: 2500, category: 'Tops', collection: 'Reset', size: 'M', color: 'Various', material: 'Cotton', image: 'https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-08_at_20.10.56_yfrpl9' },
    { id: '24', name: 'Head Bands', price: 400, category: 'Tops', collection: 'Reset', size: 'M', color: 'Various', material: 'Cotton', image: '/assets/move4.jpeg' },

];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [compareList, setCompareList] = useState<any[]>([]);
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  const filteredProducts = products.filter(p => 
    (selectedCollection === 'All' || p.collection === selectedCollection) &&
    (p.price >= priceRange[0] && p.price <= priceRange[1]) &&
    (selectedColor === 'All' || p.color === selectedColor) &&
    (selectedMaterial === 'All' || p.material === selectedMaterial) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="font-serif text-6xl font-medium text-[#333333] mb-12">Shop Essentials</h1>
      
      <div className="flex gap-4 mb-8 justify-center">
        {['All', 'Flow', 'Move', 'Reset'].map(col => (
          <button key={col} onClick={() => setSelectedCollection(col)} className={`px-6 py-2 rounded-full ${selectedCollection === col ? 'bg-[#333333] text-white' : 'bg-stone-100 text-stone-600'}`}>{col}</button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
        <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-1/3 px-4 py-2 rounded-full border border-stone-200" />
        {/* <div className="flex items-center gap-2 w-full md:w-1/3">
            <span className="text-sm">Max Price: {priceRange[1]}</span>
            <input type="range" min="500" max="10000" value={priceRange[1]} onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} className="w-full" />
        </div> */}
        {/* <button onClick={() => setIsCompareOpen(true)} className="px-6 py-2 bg-[#A3ADA0] text-white rounded-full">Compare ({compareList.length})</button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            onQuickView={() => setSelectedProduct(product)}
            onCompare={() => {
                if (compareList.find(p => p.id === product.id)) {
                    setCompareList(compareList.filter(p => p.id !== product.id));
                } else if (compareList.length < 3) {
                    setCompareList([...compareList, product]);
                }
            }}
            isSelectedForCompare={!!compareList.find(p => p.id === product.id)}
          />
        ))}
      </div>
      <QuickViewModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} addToCart={addToCart} />
      <CompareModal products={compareList} isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </motion.div>
  );
}

import { useState, useEffect } from 'react';
import { db, storage } from '../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { motion } from 'motion/react';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const [newPrices, setNewPrices] = useState<Record<string, string>>({});
  const [newNames, setNewNames] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleAdd = async () => {
    if (!imageFile || Number(price) < 500 || Number(price) > 1000) {
        alert("Price must be between 500 and 1000");
        return;
    }
    setUploading(true);
    
    const imageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(collection(db, 'products'), { name, price: Number(price), image: imageUrl });
    fetchProducts();
    setName(''); setPrice(''); setImageFile(null);
    setUploading(false);
  };

  const handleUpdate = async (id: string, currentData: any) => {
    const newPrice = newPrices[id] ? Number(newPrices[id]) : currentData.price;
    const newName = newNames[id] || currentData.name;
    
    if (newPrice < 500 || newPrice > 1000) {
        alert("Price must be between 500 and 1000");
        return;
    }

    await updateDoc(doc(db, 'products', id), { price: newPrice, name: newName });
    fetchProducts();
    setNewPrices(prev => ({...prev, [id]: ''}));
    setNewNames(prev => ({...prev, [id]: ''}));
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure?")) {
        await deleteDoc(doc(db, 'products', id));
        fetchProducts();
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-8">Manage Products</h1>
      <div className="bg-stone-50 p-6 rounded-3xl mb-8">
        <h2 className="text-xl mb-4">Add Product</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="p-3 rounded-full border border-stone-200" />
          <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="p-3 rounded-full border border-stone-200" />
          <input type="file" onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)} className="p-3 rounded-full border border-stone-200" />
          <button onClick={handleAdd} disabled={uploading} className="bg-[#333333] text-white px-6 py-3 rounded-full col-span-3 disabled:opacity-50">
            {uploading ? 'Uploading...' : 'Add Product'}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {products.map(p => (
          <div key={p.id} className="flex flex-col p-4 bg-white border border-stone-100 rounded-2xl gap-3">
            <div className="flex items-center justify-between">
              <input value={newNames[p.id] || p.name} onChange={e => setNewNames(prev => ({...prev, [p.id]: e.target.value}))} className="font-medium p-1 border rounded" />
              <input type="number" value={newPrices[p.id] || p.price} onChange={e => setNewPrices(prev => ({...prev, [p.id]: e.target.value}))} className="p-1 border rounded w-20" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <button onClick={() => handleUpdate(p.id, p)} className="bg-stone-100 px-4 py-2 rounded-full text-sm font-medium">Update</button>
              <button onClick={() => handleDelete(p.id)} className="text-red-500 text-sm font-medium px-4 py-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

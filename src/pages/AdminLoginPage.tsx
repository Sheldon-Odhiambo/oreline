import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0000') {
      sessionStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-6 max-w-sm mx-auto">
      <h1 className="font-serif text-3xl font-medium text-stone-900 mb-8 text-center">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-full border border-stone-200"
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button className="w-full bg-[#333333] text-white py-3 rounded-full font-medium">Login</button>
      </form>
    </motion.div>
  );
}

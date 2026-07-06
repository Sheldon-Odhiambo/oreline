import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('isAdmin') !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const navLinks = [
    { to: '/admin/products', label: 'Manage Products' },
    { to: '/admin/orders', label: 'Manage Orders' },
    { to: '/admin/customers', label: 'Manage Customers' },
    { to: '/admin/analytics', label: 'Sales Analytics' },
    { to: '/admin/coupons', label: 'Coupon Management' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="font-serif text-5xl font-medium text-stone-900 mb-12">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} className="p-8 bg-stone-50 rounded-3xl hover:bg-stone-100 transition">
            <h2 className="text-xl font-medium text-stone-900">{link.label}</h2>
          </Link>
        ))}
      </div>
      <button 
        onClick={() => { sessionStorage.removeItem('isAdmin'); navigate('/admin/login'); }}
        className="mt-12 text-stone-500 hover:text-stone-900"
      >
        Logout
      </button>
    </motion.div>
  );
}

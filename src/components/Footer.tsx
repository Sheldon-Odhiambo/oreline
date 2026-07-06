import { Instagram, Smartphone, Music, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-100 py-16 px-6 text-stone-600">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="font-serif text-2xl font-medium text-stone-800">
            <img src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/logo-removebg-preview_auqix3" alt="ORÉLINE" className="h-12" />
          </Link>
          <p className="text-sm">Comfort in Motion.</p>
        </div>
        <div>
          <h4 className="font-medium text-stone-900 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop">All Essentials</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-stone-900 mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/tracking">Order Tracking</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin/login">Admin</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-medium text-stone-900">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#333333] transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#333333] transition"><Music size={20} /></a>
            <a href="#" className="hover:text-[#333333] transition"><Smartphone size={20} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-200 text-center text-sm">
        &copy; 2026 ORÉLINE. All rights reserved.
      </div>
    </footer>
  );
}

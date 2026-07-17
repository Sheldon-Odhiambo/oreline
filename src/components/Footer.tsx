import { Instagram, Smartphone, Mail } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-100 py-16 px-6 text-stone-600">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo */}
        <div className="space-y-4">
          <Link
            to="/"
            className="font-serif text-2xl font-medium text-stone-800"
          >
            <img
              src="https://res.cloudinary.com/di15s67o/image/upload/f_auto,q_auto/logo-removebg-preview_auqix3"
              alt="ORÉLINE"
              className="h-12"
            />
          </Link>

          <p className="text-sm">Comfort in Motion.</p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-medium text-stone-900 mb-4">Shop</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/shop">All Essentials</Link>
            </li>

            <li>
              <Link to="/collections">Collections</Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-medium text-stone-900 mb-4">Support</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq">FAQ</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            {/* <li>
              <Link to="/admin/login">Admin</Link>
            </li> */}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="space-y-4">
          <h4 className="font-medium text-stone-900">Follow Us</h4>

          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/oreline._?igsh=YTZqN2hmOGoyb2tv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] hover:bg-[#C8E6C9] transition"
            >
              <Instagram size={20} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@oreline.__?_r=1&_t=ZS-97rBOz2BP08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] hover:bg-[#C8E6C9] transition"
            >
              <FaTiktok size={20} />
            </a>
          </div>

          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2">
              <Mail size={16} />
              orelineke@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <Smartphone size={16} />
              +254741919188
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-200 text-center text-sm">
        &copy; 2026 ORÉLINE. All rights reserved.
      </div>
    </footer>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Hotel Aashrya</h3>
            <p className="mb-4">Experience luxury and comfort in the heart of Lamahai, Dang, Nepal.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#D4AF37] transition-colors">Rooms & Suites</Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-[#D4AF37] transition-colors">Restaurant & Dining</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span>Lamahai, Dang, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-[#D4AF37]" />
                <a href="tel:+9771234567890" className="hover:text-[#D4AF37] transition-colors">+977 1234567890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:info@hotelaashrya.com" className="hover:text-[#D4AF37] transition-colors">info@hotelaashrya.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for special deals and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#BF9E30] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hotel Aashrya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
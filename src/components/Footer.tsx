import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Flame className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Oakville BBQ</span>
            </div>
            <p className="mt-2 text-sm text-amber-200">
              Premium BBQ catering for events of all sizes. Bringing smoky, delicious flavors to your special occasions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-amber-200 hover:text-white transition">Home</Link></li>
              <li><Link to="/menu" className="text-amber-200 hover:text-white transition">Menu</Link></li>
              {/* <li><Link to="/about" className="text-amber-200 hover:text-white transition">About Us</Link></li> */}
              <li><Link to="/contact" className="text-amber-200 hover:text-white transition">Get a Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-amber-200">(905) 338-3459</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-amber-200">store039@mmfoodmartket.com & bbqoakville@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-amber-200">2163 Sixth Line, Oakville, ON</span>
              </li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="mt-8 pt-8 border-t border-amber-800 text-center text-sm text-amber-300">
          <p>&copy; {new Date().getFullYear()} Oakville BBQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
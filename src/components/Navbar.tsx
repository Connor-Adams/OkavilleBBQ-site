import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Flame className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Oakville BBQ</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-800 transition duration-150">Home</Link>
            <Link to="/menu" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-800 transition duration-150">Menu</Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-800 transition duration-150">About</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium bg-amber-600 hover:bg-amber-700 transition duration-150">Get a Quote</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-amber-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-900">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-800"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-800"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-amber-600 hover:bg-amber-700"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
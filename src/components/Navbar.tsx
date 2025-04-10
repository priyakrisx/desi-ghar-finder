
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Authentication from './Authentication';
import { useMobileApp } from '@/hooks/use-mobile-app';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isNativeApp, hasSafeArea } = useMobileApp();
  
  const isDetailPage = location.pathname.includes('/property/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`bg-white shadow-sm sticky top-0 z-50 ${hasSafeArea ? 'pt-12' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Back button on detail pages in mobile view */}
          {isDetailPage && (
            <Link to="/" className="md:hidden mr-2">
              <ChevronLeft className="h-6 w-6 text-indigo-800" />
            </Link>
          )}
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-orange-600" />
            <span className={`text-xl font-bold text-indigo-800 ${isDetailPage && 'md:block hidden'}`}>
              {isDetailPage && isNativeApp ? '' : 'DesiGharFinder'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-orange-600 font-medium">Home</Link>
            <Link to="/?type=rent" className="text-neutral-700 hover:text-orange-600 font-medium">Rent</Link>
            <Link to="/?type=sale" className="text-neutral-700 hover:text-orange-600 font-medium">Buy</Link>
            <Link to="/about" className="text-neutral-700 hover:text-orange-600 font-medium">About</Link>
            <Link to="/contact" className="text-neutral-700 hover:text-orange-600 font-medium">Contact</Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Authentication />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutral-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-neutral-700 hover:text-orange-600 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/?type=rent" 
              className="text-neutral-700 hover:text-orange-600 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Rent
            </Link>
            <Link 
              to="/?type=sale" 
              className="text-neutral-700 hover:text-orange-600 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy
            </Link>
            <Link 
              to="/about" 
              className="text-neutral-700 hover:text-orange-600 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-neutral-700 hover:text-orange-600 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col space-y-2 pt-2">
              <Authentication />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

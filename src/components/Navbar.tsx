
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold text-indigo-800">DesiGharFinder</span>
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
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              Log In
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Register
            </Button>
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
              <Button variant="outline" className="border-orange-600 text-orange-600 w-full hover:bg-orange-50">
                Log In
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

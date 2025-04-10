
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold text-white">DesiGharFinder</span>
            </div>
            <p className="text-gray-300 mb-4">
              Find your dream property in India with our comprehensive real estate portal. Whether you're looking to buy, sell, or rent, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="text-gray-300 hover:text-orange-600 transition-colors">Properties for Rent</Link>
              </li>
              <li>
                <Link to="/properties?type=sale" className="text-gray-300 hover:text-orange-600 transition-colors">Properties for Sale</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-600 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2">
              Popular Locations
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/?location=Mumbai" className="text-gray-300 hover:text-orange-600 transition-colors">Mumbai</Link>
              </li>
              <li>
                <Link to="/?location=Delhi" className="text-gray-300 hover:text-orange-600 transition-colors">Delhi</Link>
              </li>
              <li>
                <Link to="/?location=Bengaluru" className="text-gray-300 hover:text-orange-600 transition-colors">Bengaluru</Link>
              </li>
              <li>
                <Link to="/?location=Pune" className="text-gray-300 hover:text-orange-600 transition-colors">Pune</Link>
              </li>
              <li>
                <Link to="/?location=Hyderabad" className="text-gray-300 hover:text-orange-600 transition-colors">Hyderabad</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-600"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                <span className="text-gray-300">123 Real Estate Tower, Mumbai 400001, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">info@desigharfinder.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DesiGharFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

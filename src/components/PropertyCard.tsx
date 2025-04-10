
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Home, Ruler } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Property, formatIndianPrice, formatArea } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="property-card bg-white rounded-lg overflow-hidden h-full property-card-shadow">
        <div className="relative">
          {/* Main property image */}
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-56 object-cover"
          />
          
          {/* Property status badge */}
          <div className="absolute top-4 left-4">
            <Badge className={`${
              property.type === 'rent' 
                ? 'bg-indigo-800 hover:bg-indigo-700' 
                : 'bg-orange-600 hover:bg-orange-500'
            } text-white font-medium px-3 py-1 text-xs uppercase`}>
              {property.type === 'rent' ? 'For Rent' : 'For Sale'}
            </Badge>
          </div>
          
          {/* Featured badge if applicable */}
          {property.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-amber-500 hover:bg-amber-400 text-white font-medium px-3 py-1 text-xs uppercase">
                Featured
              </Badge>
            </div>
          )}
          
          {/* Price badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-bold text-xl">
              {formatIndianPrice(property.price)}
              {property.type === 'rent' && <span className="text-sm font-normal">/month</span>}
            </p>
          </div>
        </div>
        
        {/* Property details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1 mb-1 text-indigo-800">
            {property.title}
          </h3>
          
          {/* Location */}
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 text-orange-600" />
            <p className="text-sm line-clamp-1">
              {property.location.area}, {property.location.city}
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="flex flex-col items-center">
              <Bed className="h-4 w-4 text-indigo-800 mb-1" />
              <span className="text-xs text-gray-600">{property.specifications.bedrooms} Bed</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="h-4 w-4 text-indigo-800 mb-1" />
              <span className="text-xs text-gray-600">{property.specifications.bathrooms} Bath</span>
            </div>
            <div className="flex flex-col items-center">
              <Ruler className="h-4 w-4 text-indigo-800 mb-1" />
              <span className="text-xs text-gray-600">{property.specifications.area} sqft</span>
            </div>
            <div className="flex flex-col items-center">
              <Home className="h-4 w-4 text-indigo-800 mb-1" />
              <span className="text-xs text-gray-600">{property.specifications.furnished.split('-')[0]}</span>
            </div>
          </div>
          
          {/* Posted date */}
          <div className="border-t border-gray-100 pt-2 mt-2">
            <p className="text-xs text-gray-500">
              Posted on {property.postedOn.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

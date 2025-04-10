
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchBarProps {
  onSearch: (filters: {
    location: string;
    type: 'all' | 'rent' | 'sale';
    priceRange: string;
    propertyType: string;
  }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState<'all' | 'rent' | 'sale'>('all');
  const [priceRange, setPriceRange] = useState('any');
  const [propertyType, setPropertyType] = useState('any');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      type,
      priceRange,
      propertyType,
    });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter location, landmark, or project"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full h-12 pl-4 pr-10 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600"
          />
          <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
        </div>
        
        <div>
          <Select value={type} onValueChange={(value) => setType(value as 'all' | 'rent' | 'sale')}>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Property Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
              <SelectItem value="sale">For Sale</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="10000-25000">₹10,000 - ₹25,000 (Rent)</SelectItem>
              <SelectItem value="25000-50000">₹25,000 - ₹50,000 (Rent)</SelectItem>
              <SelectItem value="50000-100000">₹50,000+ (Rent)</SelectItem>
              <SelectItem value="2000000-5000000">₹20 Lac - ₹50 Lac</SelectItem>
              <SelectItem value="5000000-10000000">₹50 Lac - ₹1 Cr</SelectItem>
              <SelectItem value="10000000-30000000">₹1 Cr - ₹3 Cr</SelectItem>
              <SelectItem value="30000000-100000000">₹3 Cr+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="farmhouse">Farmhouse</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium"
        >
          Search Properties
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;

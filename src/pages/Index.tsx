
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import { Property, properties, filterProperties } from '../data/properties';

const Index = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type') as 'rent' | 'sale' | null;
  const locationParam = searchParams.get('location');

  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [activePropertyType, setActivePropertyType] = useState<'rent' | 'sale' | 'all'>(
    typeParam || 'all'
  );

  useEffect(() => {
    let initialFilters: any = {};
    
    if (typeParam) {
      initialFilters.type = typeParam;
      setActivePropertyType(typeParam);
    }
    
    if (locationParam) {
      initialFilters.location = locationParam;
    }
    
    const filtered = initialFilters.type || initialFilters.location 
      ? filterProperties(properties, initialFilters)
      : properties;
      
    setFilteredProperties(filtered);
  }, [typeParam, locationParam]);

  const handleSearch = (filters: any) => {
    setActivePropertyType(filters.type);
    
    const searchFilters = {
      type: filters.type,
      location: filters.location || '',
    };
    
    // Handle price range from dropdown
    if (filters.priceRange && filters.priceRange !== 'any') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      searchFilters.priceRange = { min, max };
    }
    
    const filtered = filterProperties(properties, searchFilters);
    setFilteredProperties(filtered);
  };

  const handleFilterChange = (filters: any) => {
    const filteredResults = filterProperties(properties, {
      ...filters,
      type: activePropertyType === 'all' ? undefined : activePropertyType,
      location: locationParam || undefined,
    });
    
    setFilteredProperties(filteredResults);
  };

  const handlePropertyTypeChange = (type: 'rent' | 'sale' | 'all') => {
    setActivePropertyType(type);
    
    const filtered = type === 'all'
      ? properties
      : filterProperties(properties, { type });
      
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative hero-pattern py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-4">
                Find Your Dream Property in India
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the perfect home to buy or rent across major cities in India
              </p>
            </div>
            
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>
        
        {/* Properties Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                {activePropertyType === 'all' 
                  ? 'Available Properties' 
                  : activePropertyType === 'rent'
                    ? 'Properties for Rent'
                    : 'Properties for Sale'}
              </h2>
              
              {/* Property type tabs */}
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  onClick={() => handlePropertyTypeChange('all')}
                  className={`py-2 px-4 font-medium ${
                    activePropertyType === 'all'
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-600 hover:text-indigo-800'
                  }`}
                >
                  All Properties
                </button>
                <button
                  onClick={() => handlePropertyTypeChange('rent')}
                  className={`py-2 px-4 font-medium ${
                    activePropertyType === 'rent'
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-600 hover:text-indigo-800'
                  }`}
                >
                  For Rent
                </button>
                <button
                  onClick={() => handlePropertyTypeChange('sale')}
                  className={`py-2 px-4 font-medium ${
                    activePropertyType === 'sale'
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-600 hover:text-indigo-800'
                  }`}
                >
                  For Sale
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar filters */}
                <div className="md:col-span-1 order-2 md:order-1">
                  <PropertyFilter 
                    onFilterChange={handleFilterChange}
                    propertyType={activePropertyType}
                  />
                </div>
                
                {/* Property listings */}
                <div className="md:col-span-3 order-1 md:order-2">
                  {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">No properties found</h3>
                      <p className="text-gray-600">
                        Try adjusting your search criteria to find more properties.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                Why Choose DesiGharFinder?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We make finding your perfect property simple, efficient, and enjoyable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">Extensive Listings</h3>
                <p className="text-gray-600">
                  Thousands of verified properties across major Indian cities for rent and sale.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">Verified Properties</h3>
                <p className="text-gray-600">
                  All our listings are verified to ensure you get authentic and reliable options.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">Advanced Filters</h3>
                <p className="text-gray-600">
                  Find exactly what you need with our powerful and intuitive search filters.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">Expert Support</h3>
                <p className="text-gray-600">
                  Our team of real estate experts is always ready to assist you with any queries.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                Explore Properties by City
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse the latest properties in India's major metropolitan areas
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata'].map(city => (
                <a 
                  href={`/?location=${city}`}
                  key={city}
                  className="group relative rounded-lg overflow-hidden h-40"
                >
                  <div className="absolute inset-0 bg-indigo-800/40 group-hover:bg-indigo-800/60 transition-colors z-10"></div>
                  <img 
                    src={`https://source.unsplash.com/featured/?${city},skyline`} 
                    alt={city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="text-white font-semibold text-lg">{city}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

// These are icons used in the component that need to be imported
import { Search, Check, Filter, Phone } from 'lucide-react';

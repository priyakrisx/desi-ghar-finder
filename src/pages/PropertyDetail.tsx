
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Home, Ruler, Check, Calendar, ArrowLeft, ChevronRight, ChevronLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { properties, formatIndianPrice, formatArea } from '../data/properties';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, the property you are looking for does not exist.</p>
          <Link to="/">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const similarProperties = properties
    .filter(p => 
      p.id !== property.id && 
      (p.location.city === property.location.city || p.type === property.type)
    )
    .slice(0, 3);

  const handlePrevImage = () => {
    setActiveImageIndex(prev => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex(prev => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/?type=${property.type}`} className="hover:text-orange-600">
              {property.type === 'rent' ? 'Rent' : 'Buy'}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/?location=${property.location.city}`} className="hover:text-orange-600">
              {property.location.city}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-800 font-medium truncate">
              {property.title}
            </span>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="relative mb-6 rounded-lg overflow-hidden">
              <img 
                src={property.images[activeImageIndex]} 
                alt={property.title} 
                className="w-full h-96 object-cover"
              />
              
              {property.images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </>
              )}
              
              {/* Image counter */}
              {property.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {activeImageIndex + 1} / {property.images.length}
                </div>
              )}
            </div>
            
            {/* Thumbnail row */}
            {property.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {property.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden flex-shrink-0 border-2 ${
                      activeImageIndex === index ? 'border-orange-600' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-24 h-16 object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Property info */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-5 w-5 mr-1 text-orange-600" />
                    <span>{property.location.area}, {property.location.city}, {property.location.state}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">
                    {formatIndianPrice(property.price)}
                    {property.type === 'rent' && <span className="text-base font-normal">/month</span>}
                  </div>
                  <Badge className={`${
                    property.type === 'rent' 
                      ? 'bg-indigo-800 hover:bg-indigo-700' 
                      : 'bg-orange-600 hover:bg-orange-500'
                  } text-white font-medium px-3 py-1 mt-2`}>
                    For {property.type === 'rent' ? 'Rent' : 'Sale'}
                  </Badge>
                </div>
              </div>
              
              {/* Property features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg mb-8">
                <div className="flex flex-col items-center text-center">
                  <Bed className="h-6 w-6 text-indigo-800 mb-2" />
                  <span className="text-sm text-gray-600">Bedrooms</span>
                  <span className="text-lg font-semibold">{property.specifications.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bath className="h-6 w-6 text-indigo-800 mb-2" />
                  <span className="text-sm text-gray-600">Bathrooms</span>
                  <span className="text-lg font-semibold">{property.specifications.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Ruler className="h-6 w-6 text-indigo-800 mb-2" />
                  <span className="text-sm text-gray-600">Area</span>
                  <span className="text-lg font-semibold">{formatArea(property.specifications.area)}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Home className="h-6 w-6 text-indigo-800 mb-2" />
                  <span className="text-sm text-gray-600">Furnished</span>
                  <span className="text-lg font-semibold capitalize">{property.specifications.furnished.split('-')[0]}</span>
                </div>
              </div>
              
              {/* Tabs for different sections */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-800">Property Description</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>{property.description}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="amenities" className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-800">Property Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-orange-600 mr-2" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-800">Property Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium">Residential {property.title.includes('Apartment') ? 'Apartment' : 
                                                         property.title.includes('Villa') ? 'Villa' : 
                                                         property.title.includes('House') ? 'House' : 
                                                         property.title.includes('Farmhouse') ? 'Farmhouse' : 'Property'}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Parking:</span>
                      <span className="font-medium">{property.specifications.parking} {property.specifications.parking > 1 ? 'Cars' : 'Car'}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Furnishing:</span>
                      <span className="font-medium capitalize">{property.specifications.furnished}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Super Area:</span>
                      <span className="font-medium">{formatArea(property.specifications.area)}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{property.location.area}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">City:</span>
                      <span className="font-medium">{property.location.city}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">State:</span>
                      <span className="font-medium">{property.location.state}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Pincode:</span>
                      <span className="font-medium">{property.location.pincode}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Posted On:</span>
                      <span className="font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {property.postedOn.toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Agent / Agency info */}
              {property.agentInfo && (
                <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-800">Posted by</h3>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold text-indigo-800 mb-3 md:mb-0 md:mr-4">
                      {property.agentInfo.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{property.agentInfo.name}</h4>
                      {property.agentInfo.agency && (
                        <p className="text-gray-600 text-sm">{property.agentInfo.agency}</p>
                      )}
                      <div className="mt-2 flex space-x-4">
                        <Button 
                          variant="outline" 
                          className="text-sm border-orange-600 text-orange-600 hover:bg-orange-50"
                          onClick={() => window.location.href = `tel:${property.agentInfo?.phone}`}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                        <Button 
                          variant="outline" 
                          className="text-sm border-orange-600 text-orange-600 hover:bg-orange-50"
                          onClick={() => window.location.href = `mailto:${property.agentInfo?.email}`}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Similar Properties */}
              {similarProperties.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-indigo-800 mb-6">Similar Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {similarProperties.map(property => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right side - Contact form */}
            <div>
              <div className="sticky top-24">
                <ContactForm 
                  propertyId={property.id}
                  propertyTitle={property.title}
                  receiverEmail={property.agentInfo?.email}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;

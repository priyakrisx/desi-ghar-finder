import { Property, PropertyFilters } from '@/types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Goa',
    type: 'sale',
    price: 50000000,
    location: {
      city: 'Goa',
      area: 'Anjuna',
      state: 'Goa',
      pincode: '403509',
      coordinates: {
        lat: 15.5518,
        lng: 73.7478
      }
    },
    specifications: {
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      furnished: 'fully-furnished',
      parking: 3
    },
    amenities: ['Swimming Pool', 'Private Garden', 'Ocean View', 'Gym', 'Clubhouse'],
    description: 'A stunning villa with panoramic ocean views, perfect for a luxurious lifestyle.',
    images: [
      'https://source.unsplash.com/1600x900/?villa',
      'https://source.unsplash.com/1600x900/?luxury,villa',
      'https://source.unsplash.com/1600x900/?ocean,view'
    ],
    postedOn: new Date('2024-01-20'),
    agentInfo: {
      name: 'John Doe',
      phone: '9876543210',
      email: 'john.doe@example.com',
      agency: 'Goa Properties'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Spacious Apartment in Mumbai',
    type: 'rent',
    price: 75000,
    location: {
      city: 'Mumbai',
      area: 'Bandra',
      state: 'Maharashtra',
      pincode: '400050',
      coordinates: {
        lat: 19.0505,
        lng: 72.8258
      }
    },
    specifications: {
      bedrooms: 3,
      bathrooms: 3,
      area: 1800,
      furnished: 'semi-furnished',
      parking: 1
    },
    amenities: ['Gym', 'Swimming Pool', 'Security', 'Play Area'],
    description: 'A modern apartment in the heart of Mumbai, close to all amenities.',
    images: [
      'https://source.unsplash.com/1600x900/?apartment',
      'https://source.unsplash.com/1600x900/?modern,apartment',
      'https://source.unsplash.com/1600x900/?city,apartment'
    ],
    postedOn: new Date('2024-02-15'),
    agentInfo: {
      name: 'Jane Smith',
      phone: '8765432109',
      email: 'jane.smith@example.com',
      agency: 'Mumbai Homes'
    },
    featured: false
  },
  {
    id: '3',
    title: 'Independent House in Bangalore',
    type: 'sale',
    price: 12000000,
    location: {
      city: 'Bangalore',
      area: 'Jayanagar',
      state: 'Karnataka',
      pincode: '560011',
      coordinates: {
        lat: 12.9287,
        lng: 77.5913
      }
    },
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      furnished: 'unfurnished',
      parking: 2
    },
    amenities: ['Private Garden', 'Security', 'Balcony'],
    description: 'A beautiful house in a prime location, perfect for families.',
    images: [
      'https://source.unsplash.com/1600x900/?house',
      'https://source.unsplash.com/1600x900/?garden,house',
      'https://source.unsplash.com/1600x900/?family,house'
    ],
    postedOn: new Date('2024-03-01'),
    agentInfo: {
      name: 'David Johnson',
      phone: '7654321098',
      email: 'david.johnson@example.com',
      agency: 'Bangalore Realty'
    },
    featured: true
  },
  {
    id: '4',
    title: 'Cozy Studio in Delhi',
    type: 'rent',
    price: 30000,
    location: {
      city: 'Delhi',
      area: 'Connaught Place',
      state: 'Delhi',
      pincode: '110001',
      coordinates: {
        lat: 28.6304,
        lng: 77.2177
      }
    },
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      furnished: 'fully-furnished',
      parking: 0
    },
    amenities: ['Security', 'Balcony', 'Power Backup'],
    description: 'A compact and stylish studio apartment in the heart of Delhi.',
    images: [
      'https://source.unsplash.com/1600x900/?studio,apartment',
      'https://source.unsplash.com/1600x900/?city,studio',
      'https://source.unsplash.com/1600x900/?modern,studio'
    ],
    postedOn: new Date('2024-03-10'),
    agentInfo: {
      name: 'Emily White',
      phone: '6543210987',
      email: 'emily.white@example.com',
      agency: 'Delhi Apartments'
    },
    featured: false
  },
  {
    id: '5',
    title: 'Farmhouse in Hyderabad',
    type: 'sale',
    price: 80000000,
    location: {
      city: 'Hyderabad',
      area: 'Shamirpet',
      state: 'Telangana',
      pincode: '500078',
      coordinates: {
        lat: 17.5647,
        lng: 78.5727
      }
    },
    specifications: {
      bedrooms: 6,
      bathrooms: 5,
      area: 6000,
      furnished: 'fully-furnished',
      parking: 4
    },
    amenities: ['Swimming Pool', 'Private Garden', 'Guest House', 'Security'],
    description: 'An expansive farmhouse with lush greenery, perfect for a serene escape.',
    images: [
      'https://source.unsplash.com/1600x900/?farmhouse',
      'https://source.unsplash.com/1600x900/?nature,farmhouse',
      'https://source.unsplash.com/1600x900/?luxury,farmhouse'
    ],
    postedOn: new Date('2024-03-15'),
    agentInfo: {
      name: 'Robert Green',
      phone: '5432109876',
      email: 'robert.green@example.com',
      agency: 'Hyderabad Farms'
    },
    featured: true
  },
  {
    id: '6',
    title: '2BHK Apartment in Chennai',
    type: 'rent',
    price: 45000,
    location: {
      city: 'Chennai',
      area: 'Adyar',
      state: 'Tamil Nadu',
      pincode: '600020',
      coordinates: {
        lat: 13.0075,
        lng: 80.2796
      }
    },
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      furnished: 'semi-furnished',
      parking: 1
    },
    amenities: ['Security', 'Play Area', 'Power Backup'],
    description: 'A comfortable 2BHK apartment in a well-connected locality of Chennai.',
    images: [
      'https://source.unsplash.com/1600x900/?2BHK,apartment',
      'https://source.unsplash.com/1600x900/?family,apartment',
      'https://source.unsplash.com/1600x900/?urban,apartment'
    ],
    postedOn: new Date('2024-03-20'),
    agentInfo: {
      name: 'Linda Brown',
      phone: '4321098765',
      email: 'linda.brown@example.com',
      agency: 'Chennai Homes'
    },
    featured: false
  },
];

export const formatIndianPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
};

export const formatArea = (area: number): string => {
  return `${area} sq.ft.`;
};

export const filterProperties = (properties: Property[], filters: PropertyFilters): Property[] => {
  return properties.filter(property => {
    // Filter by type
    if (filters.type && filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }
    
    // Filter by location
    if (filters.location && !property.location.city.toLowerCase().includes(filters.location.toLowerCase()) && 
        !property.location.area.toLowerCase().includes(filters.location.toLowerCase()) &&
        !property.location.state.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Filter by price range
    if (filters.priceRange && 
        (property.price < filters.priceRange.min || property.price > filters.priceRange.max)) {
      return false;
    }
    
    // Filter by bedrooms
    if (filters.bedrooms && filters.bedrooms.length > 0 && 
        !filters.bedrooms.includes(property.specifications.bedrooms)) {
      return false;
    }
    
    // Filter by furnished status
    if (filters.furnished && filters.furnished.length > 0 && 
        !filters.furnished.includes(property.specifications.furnished)) {
      return false;
    }
    
    return true;
  });
};

export default properties;

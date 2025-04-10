
import { Property } from '../types/property';

// Sample property data
export const properties: Property[] = [
  {
    id: '1',
    title: '3BHK Luxury Apartment in Koramangala',
    type: 'rent',
    price: 45000,
    location: {
      city: 'Bengaluru',
      area: 'Koramangala',
      state: 'Karnataka',
      pincode: '560034',
    },
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      furnished: 'fully-furnished',
      parking: 1,
    },
    amenities: ['Swimming Pool', 'Gym', '24x7 Security', 'Power Backup', 'Lift', 'Children\'s Play Area'],
    description: 'Luxurious 3BHK apartment located in the heart of Koramangala. The apartment comes fully furnished with modern amenities and is perfect for families or working professionals. The complex has a swimming pool, gym, and 24x7 security.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7f34bc1be7a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e4a6c3493ab?q=80&w=1000&auto=format&fit=crop'
    ],
    postedOn: new Date('2023-11-15'),
    agentInfo: {
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya@realestate.com',
      agency: 'Bengaluru Properties',
    },
    featured: true,
  },
  {
    id: '2',
    title: '4BHK Independent Villa in Whitefield',
    type: 'sale',
    price: 12500000,
    location: {
      city: 'Bengaluru',
      area: 'Whitefield',
      state: 'Karnataka',
      pincode: '560066',
    },
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      furnished: 'semi-furnished',
      parking: 2,
    },
    amenities: ['Garden', 'Modular Kitchen', 'CCTV Surveillance', 'Rainwater Harvesting', 'Solar Panels'],
    description: 'Beautiful 4BHK independent villa in a gated community in Whitefield. The property features a garden, modular kitchen, and premium fittings. Ideal for families looking for a spacious and modern living space.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop'
    ],
    postedOn: new Date('2023-12-01'),
    agentInfo: {
      name: 'Raj Kapoor',
      phone: '+91 87654 32109',
      email: 'raj@realestate.com',
      agency: 'Home Finders',
    },
  },
  {
    id: '3',
    title: '2BHK Apartment near Metro Station',
    type: 'rent',
    price: 28000,
    location: {
      city: 'Mumbai',
      area: 'Andheri East',
      state: 'Maharashtra',
      pincode: '400069',
    },
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1000,
      furnished: 'semi-furnished',
      parking: 1,
    },
    amenities: ['Lift', 'Security', 'Power Backup', 'Near Metro Station', 'Community Hall'],
    description: 'Well-maintained 2BHK apartment located just 5 minutes from Andheri Metro Station. The apartment is semi-furnished and offers convenient access to markets, schools, and offices.',
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35658a3f2fdb?q=80&w=1000&auto=format&fit=crop'
    ],
    postedOn: new Date('2023-12-10'),
    agentInfo: {
      name: 'Amit Patel',
      phone: '+91 93456 78901',
      email: 'amit@homefinders.com',
      agency: 'Mumbai Real Estate',
    },
    featured: true,
  },
  {
    id: '4',
    title: '3BHK Penthouse with Sea View',
    type: 'sale',
    price: 35000000,
    location: {
      city: 'Mumbai',
      area: 'Worli',
      state: 'Maharashtra',
      pincode: '400018',
    },
    specifications: {
      bedrooms: 3,
      bathrooms: 3,
      area: 2200,
      furnished: 'fully-furnished',
      parking: 2,
    },
    amenities: ['Sea View', 'Terrace Garden', 'Swimming Pool', 'Gym', 'Jacuzzi', 'Private Elevator'],
    description: 'Luxurious 3BHK penthouse with breathtaking sea views in Worli. The property features premium imported marble flooring, designer fittings, a terrace garden, and private elevator access. A perfect blend of luxury and comfort.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=1000&auto=format&fit=crop'
    ],
    postedOn: new Date('2023-11-20'),
    agentInfo: {
      name: 'Sanjay Mehta',
      phone: '+91 98901 23456',
      email: 'sanjay@luxuryestates.com',
      agency: 'Luxury Estates',
    },
  },
  {
    id: '5',
    title: '1BHK Apartment for Rent in Gurugram',
    type: 'rent',
    price: 20000,
    location: {
      city: 'Gurugram',
      area: 'DLF Phase 3',
      state: 'Haryana',
      pincode: '122002',
    },
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      area: 700,
      furnished: 'fully-furnished',
      parking: 1,
    },
    amenities: ['AC', 'Refrigerator', 'Washing Machine', 'Microwave', 'TV', '24x7 Water Supply'],
    description: 'Cozy 1BHK apartment located in DLF Phase 3, Gurugram. The apartment is fully furnished with all modern appliances and is perfect for singles or couples. Good connectivity to Cyber City and major tech parks.',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop'
    ],
    postedOn: new Date('2023-12-15'),
    agentInfo: {
      name: 'Neha Singh',
      phone: '+91 97890 12345',
      email: 'neha@rentalproperties.com',
      agency: 'NCR Rentals',
    },
  },
  {
    id: '6',
    title: '4BHK Farmhouse on Sohna Road',
    type: 'sale',
    price: 45000000,
    location: {
      city: 'Gurugram',
      area: 'Sohna Road',
      state: 'Haryana',
      pincode: '122103',
    },
    specifications: {
      bedrooms: 4,
      bathrooms: 4,
      area: 5000,
      furnished: 'semi-furnished',
      parking: 4,
    },
    amenities: ['Swimming Pool', 'Garden', 'Gazebo', 'Outdoor Kitchen', 'Servant Quarter', 'CCTV Surveillance'],
    description: 'Elegant farmhouse on Sohna Road with 5000 sq. ft. of built-up area on a 1-acre plot. The property features a swimming pool, landscaped garden, and outdoor entertainment areas. Perfect for those seeking luxury living away from the city hustle.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1000&auto=format&fit=crop'
    ],
    postedOn: new Date('2023-11-05'),
    agentInfo: {
      name: 'Vikram Chauhan',
      phone: '+91 98567 89012',
      email: 'vikram@luxuryproperties.com',
      agency: 'Luxury Properties NCR',
    },
    featured: true,
  },
];

// Function to format price in Indian currency format (Lakhs and Crores)
export function formatIndianPrice(price: number): string {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lac`;
  } else {
    return `₹${price.toLocaleString('en-IN')}`;
  }
}

// Function to format area in Indian format
export function formatArea(area: number): string {
  return `${area.toLocaleString('en-IN')} sq.ft.`;
}

// Function to filter properties
export function filterProperties(
  propertyList: Property[],
  filters: {
    type?: 'rent' | 'sale' | 'all';
    priceRange?: { min: number; max: number };
    bedrooms?: number[];
    location?: string;
    furnished?: ('unfurnished' | 'semi-furnished' | 'fully-furnished')[];
  } = {}
): Property[] {
  return propertyList.filter((property) => {
    // Filter by type
    if (filters.type && filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }

    // Filter by price range
    if (filters.priceRange) {
      if (property.price < filters.priceRange.min || property.price > filters.priceRange.max) {
        return false;
      }
    }

    // Filter by bedrooms
    if (filters.bedrooms && filters.bedrooms.length > 0) {
      if (!filters.bedrooms.includes(property.specifications.bedrooms)) {
        return false;
      }
    }

    // Filter by location (city or area)
    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      const cityMatch = property.location.city.toLowerCase().includes(locationLower);
      const areaMatch = property.location.area.toLowerCase().includes(locationLower);
      if (!cityMatch && !areaMatch) {
        return false;
      }
    }

    // Filter by furnished status
    if (filters.furnished && filters.furnished.length > 0) {
      if (!filters.furnished.includes(property.specifications.furnished)) {
        return false;
      }
    }

    return true;
  });
}

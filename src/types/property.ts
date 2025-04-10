
export interface Property {
  id: string;
  title: string;
  type: 'rent' | 'sale';
  price: number;
  location: {
    city: string;
    area: string;
    state: string;
    pincode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specifications: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in sq. ft.
    furnished: 'unfurnished' | 'semi-furnished' | 'fully-furnished';
    parking: number;
  };
  amenities: string[];
  description: string;
  images: string[];
  postedOn: Date;
  agentInfo?: {
    name: string;
    phone: string;
    email: string;
    agency?: string;
  };
  featured?: boolean;
}

export type PropertyFilters = {
  type?: 'rent' | 'sale' | 'all';
  priceRange?: {
    min: number;
    max: number;
  };
  bedrooms?: number[];
  location?: string;
  furnished?: ('unfurnished' | 'semi-furnished' | 'fully-furnished')[];
  propertyType?: string[];
};

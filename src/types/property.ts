
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
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  images?: string[]; // Add images array property
  description: string;
  features?: string[];
  specifications?: {
    [key: string]: string | number;
  };
  amenities?: string[];
  postedOn?: Date | string;
  agentInfo?: {
    name: string;
    phone: string;
    email: string;
    photo?: string;
    experience?: string;
    agency?: string; // Add agency property
  };
  featured?: boolean;
}

export interface PropertyFilters {
  type?: 'rent' | 'sale' | 'all';
  location?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  bedrooms?: number[];
  bathrooms?: number;
  area?: {
    min?: number;
    max?: number;
  };
  furnished?: string[];
}

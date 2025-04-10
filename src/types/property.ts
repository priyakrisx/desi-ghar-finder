
export interface Property {
  id: string;
  title: string;
  type: 'rent' | 'sale';
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  features?: string[];
}

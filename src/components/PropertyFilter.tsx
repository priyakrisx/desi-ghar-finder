
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PropertyFilterProps {
  onFilterChange: (filters: {
    priceRange: { min: number; max: number };
    bedrooms: number[];
    furnished: string[];
    propertyType: string[];
  }) => void;
  propertyType: 'rent' | 'sale' | 'all';
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onFilterChange, propertyType }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>(
    propertyType === 'rent' ? [10000, 100000] : [2000000, 50000000]
  );
  
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [selectedFurnished, setSelectedFurnished] = useState<string[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);

  const bedroomOptions = [1, 2, 3, 4, '4+'];
  const furnishedOptions = ['unfurnished', 'semi-furnished', 'fully-furnished'];
  const propertyTypeOptions = ['apartment', 'house', 'villa', 'farmhouse', 'plot', 'commercial'];

  const handleBedroomToggle = (value: number) => {
    if (selectedBedrooms.includes(value)) {
      setSelectedBedrooms(selectedBedrooms.filter(item => item !== value));
    } else {
      setSelectedBedrooms([...selectedBedrooms, value]);
    }
  };

  const handleFurnishedToggle = (value: string) => {
    if (selectedFurnished.includes(value)) {
      setSelectedFurnished(selectedFurnished.filter(item => item !== value));
    } else {
      setSelectedFurnished([...selectedFurnished, value]);
    }
  };

  const handlePropertyTypeToggle = (value: string) => {
    if (selectedPropertyTypes.includes(value)) {
      setSelectedPropertyTypes(selectedPropertyTypes.filter(item => item !== value));
    } else {
      setSelectedPropertyTypes([...selectedPropertyTypes, value]);
    }
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  const applyFilters = () => {
    onFilterChange({
      priceRange: { min: priceRange[0], max: priceRange[1] },
      bedrooms: selectedBedrooms,
      furnished: selectedFurnished,
      propertyType: selectedPropertyTypes,
    });
  };

  const clearFilters = () => {
    setPriceRange(propertyType === 'rent' ? [10000, 100000] : [2000000, 50000000]);
    setSelectedBedrooms([]);
    setSelectedFurnished([]);
    setSelectedPropertyTypes([]);
    
    onFilterChange({
      priceRange: {
        min: propertyType === 'rent' ? 10000 : 2000000,
        max: propertyType === 'rent' ? 100000 : 50000000,
      },
      bedrooms: [],
      furnished: [],
      propertyType: [],
    });
  };

  const formatPrice = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} Lac`;
    } else {
      return `₹${value.toLocaleString('en-IN')}`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-indigo-800">Filter Properties</h3>

      <Accordion type="single" collapsible defaultValue="price" className="w-full mb-4">
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="mt-4">
              <div className="mb-6">
                <Slider 
                  defaultValue={[priceRange[0], priceRange[1]]} 
                  min={propertyType === 'rent' ? 5000 : 1000000} 
                  max={propertyType === 'rent' ? 200000 : 100000000} 
                  step={propertyType === 'rent' ? 1000 : 100000}
                  onValueChange={handlePriceChange}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bedrooms">
          <AccordionTrigger className="text-sm font-medium">Bedrooms</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {bedroomOptions.map(option => (
                <div key={`bedroom-${option}`} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`bedroom-${option}`} 
                    checked={selectedBedrooms.includes(Number(option))}
                    onCheckedChange={() => handleBedroomToggle(Number(option))}
                  />
                  <Label htmlFor={`bedroom-${option}`} className="text-sm">{option === '4+' ? '4+ BHK' : `${option} BHK`}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="furnished">
          <AccordionTrigger className="text-sm font-medium">Furnishing Status</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {furnishedOptions.map(option => (
                <div key={`furnished-${option}`} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`furnished-${option}`} 
                    checked={selectedFurnished.includes(option)}
                    onCheckedChange={() => handleFurnishedToggle(option)}
                  />
                  <Label htmlFor={`furnished-${option}`} className="text-sm capitalize">{option}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="propertyType">
          <AccordionTrigger className="text-sm font-medium">Property Type</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {propertyTypeOptions.map(option => (
                <div key={`propertyType-${option}`} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`propertyType-${option}`} 
                    checked={selectedPropertyTypes.includes(option)}
                    onCheckedChange={() => handlePropertyTypeToggle(option)}
                  />
                  <Label htmlFor={`propertyType-${option}`} className="text-sm capitalize">{option}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col gap-2 mt-6">
        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white w-full"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
        
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-600 hover:bg-gray-50 w-full"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilter;

import React from 'react';
import { Trees, Mountain, Shield, Building, Building2, Users } from 'lucide-react';

const ListingsComponent = () => {
  const listings = [
    {
      icon: <Trees className="w-12 h-12 text-amber-600" />,
      title: "Expansive Green Spaces",
      description: "75,000+ sq. ft. of green spaces"
    },
    {
      icon: <Mountain className="w-12 h-12 text-amber-600" />,
      title: "Vastu & RL Ready Plots",
      description: "NA approved Plots"
    },
    {
      icon: <Building className="w-12 h-12 text-amber-600" />,
      title: "Exclusive Phoenix Club",
      description: "12,000+ sq. ft. clubhouse, 5,500+ sq. ft. badminton hall"
    },
    {
      icon: <Shield className="w-12 h-12 text-amber-600" />,
      title: "Gated Security",
      description: "Secure living with landscaped entrance"
    },
    {
      icon: <Building2 className="w-12 h-12 text-amber-600" />,
      title: "Premium Infrastructure",
      description: "Durable M40 roads, M50 sewers, and eco-friendly utilities"
    },
    {
      icon: <Users className="w-12 h-12 text-amber-600" />,
      title: "Residential & Commercial Hub",
      description: "Phoenix Park integrates living and business spaces"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Listings
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-50 rounded-full">
                {listing.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {listing.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {listing.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsComponent;
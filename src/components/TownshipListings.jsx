import React from 'react';

const TownshipListings = () => {
  const townships = [
    {
      number: "01",
      title: "The Riyasat Sankalp",
      description: "A Landmark Township Where Luxury Meets Opportunity. Live, grow, and thrive in a secure, eco-friendly community in the heart of Panvel.",
      image: "/api/placeholder/200/120",
      hasReadMore: true
    },
    {
      number: "02",
      title: "Sankalp Meadows",
      description: "A Boutique Township Where Nature and Luxury Come Together. Own your dream plot in a secure, green, and well-connected Panvel community.",
      image: "/api/placeholder/200/120",
      hasReadMore: true
    },
    {
      number: "03",
      title: "Riyasat Bliss",
      description: "Discover a life where serenity meets sophistication amidst Panvel's lush landscapes.Craft your dream home in a community designed for peace, luxury, and elevated living.",
      image: "/api/placeholder/200/120",
      hasReadMore: true
    },
    {
      number: "04",
      title: "Riyasat Nirvana",
      description: "A North East Inspired Township Where Serenity, Culture, and Modern Comforts Come Together for a Truly Enriched Lifestyle.",
      image: "/api/placeholder/200/120",
      hasReadMore: true
    },
    {
      number: "05",
      title: "Platinum Greens",
      description: "A European-Inspired Township Where Grandeur, Culture, and Modern Living Come Together In Perfect Harmony.",
      image: "/api/placeholder/200/120",
      hasReadMore: true
    },
    {
      number: "06",
      title: "Riyasat Eco Park",
      description: "A Gulabi Nagari-Inspired Township Where Heritage, Wellness, and Modern Living Flourish Together.",
      image: "/api/placeholder/200/120",
      hasReadMore: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {townships.map((township, index) => (
          <div key={index} className="group bg-white hover:bg-blue-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            {/* Image container - hidden by default, shown on hover */}
            <div className="h-0 group-hover:h-32 bg-gray-200 overflow-hidden transition-all duration-300">
              <img 
                src={township.image} 
                alt={township.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start mb-4">
                <span className="text-4xl font-light text-red-300 mr-4 leading-none">
                  {township.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {township.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {township.description}
              </p>
              
              {township.hasReadMore && (
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                  Read More →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <h2 className="text-4xl font-light text-gray-800 tracking-[0.3em] mb-2">
          AMENITIES
        </h2>
      </div>
    </div>
  );
};

export default TownshipListings;
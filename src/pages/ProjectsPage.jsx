import React from 'react';

const ProjectsPage = () => {
  const properties = [
    { id: 1, title: "Modern Villa", type: "Residential", price: "$850,000", location: "Beverly Hills" },
    { id: 2, title: "Downtown Apartment", type: "Residential", price: "$450,000", location: "Manhattan" },
    { id: 3, title: "Office Complex", type: "Commercial", price: "$2,200,000", location: "Business District" },
    { id: 4, title: "Luxury Penthouse", type: "Residential", price: "$1,200,000", location: "Skyline View" },
    { id: 5, title: "Shopping Center", type: "Commercial", price: "$3,500,000", location: "Main Street" },
    { id: 6, title: "Beach House", type: "Residential", price: "$950,000", location: "Oceanfront" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {property.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-2xl font-bold text-green-600 mb-4">{property.price}</p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

import React from "react";

const PropertyCard = ({ number, image, title, description }) => {
  return (
    <div className="relative bg-blue-100 p-6 rounded-md flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-xl shadow-sm">
      {/* Number */}
      <div className="text-pink-600 text-4xl font-bold leading-none">{number}</div>

      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-blue-900 mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <a href="#" className="text-sm text-black underline hover:text-blue-700">
          Read More +
        </a>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-32 h-24 object-cover rounded-md sm:absolute sm:right-6 sm:top-6 shadow-md"
      />
    </div>
  );
};

export default PropertyCard;

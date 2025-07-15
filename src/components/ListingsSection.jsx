import React from "react";
import PropertyCard from "./PropertyCard";

// Import your images
import Image1 from "../assets/slides/slide1.jpg";
import Image2 from "../assets/slides/slide2.jpg";
import Image3 from "../assets/slides/slide3.jpg";
import Image4 from "../assets/slides/slide4.jpg";

const listings = [
  {
    number: "01",
    image: Image1,
    title: "The Riyasat Sankalp",
    description:
      "A Landmark Township Where Luxury Meets Opportunity. Live, grow, and thrive in a secure, eco-friendly community in the heart of Panvel.",
  },
  {
    number: "02",
    image: Image2,
    title: "Green Valley Heights",
    description:
      "Experience luxury living amidst nature. Spacious homes, top-tier amenities, and scenic views await your presence.",
  },
  {
    number: "03",
    image: Image3,
    title: "Sunrise Residency",
    description:
      "Start every day with stunning views and elegant design. A vibrant residential community in the heart of Navi Mumbai.",
  },
  {
    number: "04",
    image: Image4,
    title: "Urban Crest Villas",
    description:
      "Exclusive villa plots with unmatched privacy, modern architecture, and proximity to major commercial hubs.",
  },
];

const ListingsSection = () => {
  return (
    <div className="p-6 flex flex-col gap-6 items-center">
      {listings.map((listing, index) => (
        <PropertyCard key={index} {...listing} />
      ))}
    </div>
  );
};

export default ListingsSection;

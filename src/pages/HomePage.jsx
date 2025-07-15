import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ListingsSection from "../components/ListingsSection";

// Import slides
import Slide1 from "../assets/slides/slide1.jpg";
import Slide2 from "../assets/slides/slide2.jpg";
import Slide3 from "../assets/slides/slide3.jpg";
import Slide4 from "../assets/slides/slide4.jpg";


const slides = [
  {
    id: 1,
    title: "Find Your Dream Home",
    subtitle: "Discover the perfect property for your lifestyle",
    image: Slide1,
  },
  {
    id: 2,
    title: "Premium Properties",
    subtitle: "Luxury homes and commercial spaces",
    image: Slide2,
  },
  {
    id: 3,
    title: "Expert Real Estate Services",
    subtitle: "Professional guidance every step of the way",
    image: Slide3,
  },
  {
    id: 4,
    title: "Your Property Partner",
    subtitle: "Making real estate dreams come true",
    image: Slide4,
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation handlers
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
    <div className="relative h-screen overflow-hidden">
      {/* Slide Background */}
      <div className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide}`}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30" /> */}
      </div>

      {/* Slide Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-blue-200 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Explore Properties
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
   <ListingsSection></ListingsSection>
    </div>
  );
};

export default HomePage;

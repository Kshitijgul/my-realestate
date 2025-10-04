import React, { useState } from "react";
import { X } from "lucide-react";

import Slide1 from "../assets/slides/project5.jpg";
import Slide2 from "../assets/slides/project3.jpg";
import Slide3 from "../assets/slides/project4.jpg";
import Slide4 from "../assets/slides/project2.jpg";

// 📂 Put your brochure file inside /public folder like /public/brochure.pdf
const BROCHURE_URL = "/brochure.pdf";

const TownshipListings = () => {
  const [selectedTownship, setSelectedTownship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const townships = [
    {
      number: "01",
      title: "Mauli Town – 21, 23 to 28",
      description:
        "A Golden Investment Opportunity at Mohgaon, Wardha Road – Highway Touch Project. Premium plots with Metro Station at the entrance gate ensuring connectivity, growth, and value appreciation.",
      image: Slide1,
      brochure: "../assets/brochures/M-21,23To28.pdf",
      hasReadMore: true,
      details: {
        location: "Mohgaon, Wardha Road – Highway Touch Project",
        plotSizes: "1000 sq.ft. to 7000 sq.ft.",
        priceRange: "₹2150 – ₹2200 per sq.ft.",
        amenities: [
          "12+ Landscaped Green Gardens",
          "Clubhouse with Kitchen Area",
          "Swimming Pool",
          "Cricket & Basketball Court",
          "Indoor & Outdoor Gym",
          "Jogging Track & Yoga Lawn",
          "Kids Play Area & Multipurpose Lawn",
          "Cement Roads & Drainage System",
          "Underground Electric Network",
          "Water Pipeline & Street Lights",
        ],
        highlights: [
          "Commercial & Residential Plots",
          "NMRDA Sanctioned with RL & RERA Approved",
          "Highway Touch Project on Wardha Road",
          "Surrounded by educational institutes, healthcare & corporate hubs",
        ],
        description:
          "Mauli Town 21, 23 to 28 offers a once-in-a-lifetime chance to own premium plots in one of Nagpur’s fastest-growing corridors. With a Metro Station right at the entrance gate, this project guarantees unmatched connectivity and growth potential.",
      },
    },
    {
      number: "02",
      title: "Mauli Town – 20",
      description:
        "A landmark township offering Commercial & Residential Plots at Panjari – Shankarpur, Opp. Dream Awas Flats Scheme with NMRDA sanction (RL) & RERA approval.",
      image: Slide2,
      brochure: "../assets/brochures/Mauli20.pdf",
      hasReadMore: true,
      details: {
        location: "Panjari – Shankarpur, Opp. Dream Awas Flats Scheme",
        plotSizes: "Flexible plot sizes available",
        priceRange: "₹3300 per sq.ft.",
        amenities: [
          "Green Gym & Indoor-Outdoor Fitness Spaces",
          "Basketball Court & Jogging Track",
          "Yoga Lawn & Kids Play Area",
          "Multipurpose Lawn",
          "Cement Roads with Drainage & Sewage Line",
          "Underground Electric Network",
          "Water Pipeline, Street Lights & Paved Footpaths",
        ],
        highlights: [
          "60 ft. Road Touch Layout",
          "Residential & Commercial Plots",
          "Up to 90% Bank Loan from SBI, PNB, HDFC, ICICI, Axis",
          "Surrounded by premium townships like Singapore City, Green City, Shiv Brighton, Shiv Elite",
        ],
        description:
          "Mauli Town 20 is a strategically located township designed for lifestyle living and long-term investment growth. With NMRDA sanction, RERA approval, and excellent connectivity, it offers a perfect balance of convenience and returns.",
      },
    },
    {
      number: "03",
      title: "Mauli Town – 29",
      description:
        "Premium residential plots at Pipla, Main Road Touch – next to Ensara Metropark. NMRDA sanctioned with RL & RERA approval.",
      image: Slide3,
      brochure: "../assets/brochures/Mauli29.pdf",
      hasReadMore: true,
      details: {
        location: "Pipla, Main Road Touch – Next to Ensara Metropark",
        plotSizes: "Multiple options available",
        priceRange: "₹3700 – ₹3750 per sq.ft.",
        amenities: [
          "Green Gym & Jogging Track",
          "Basketball Court & Yoga Lawn",
          "Kids Play Area & Multipurpose Lawn",
          "Cement Roads with Drainage & Sewage Line",
          "Underground Electric Network",
          "Water Pipeline, Street Lights & Paved Footpaths",
        ],
        highlights: [
          "Residential Plots",
          "Flexible plot sizes",
          "Up to 90% Bank Loan from leading banks",
          "Close to hospitals, schools, shopping hubs & airport",
        ],
        description:
          "Mauli Town 29 offers a premium lifestyle at Pipla’s most promising location. With top educational institutes, hospitals, and retail hubs nearby, this project ensures modern living and strong investment growth.",
      },
    },
    {
      number: "04",
      title: "Mauli Town – 17 & 18",
      description:
        "Strategically located Commercial & Residential plots at Shankarpur – Vedahari, Opp. Royal Gondwana College. NMRDA sanctioned (RL) & RERA approved.",
      image: Slide4,
      brochure: "../assets/brochures/M-17-18brochure.pdf",
      hasReadMore: true,
      details: {
        location: "Shankarpur – Vedahari, Opp. Royal Gondwana College",
        plotSizes: "Multiple plot sizes available",
        priceRange: "₹3250 per sq.ft.",
        amenities: [
          "Green Gym & Jogging Track",
          "Basketball Court & Yoga Lawn",
          "Kids Play Area & Multipurpose Lawn",
          "Cement Roads with Drainage & Sewage Line",
          "Underground Electric Network",
          "Water Pipeline, Street Lights & Paved Footpaths",
        ],
        highlights: [
          "60 ft. Road Touch Layout",
          "Commercial & Residential Plots",
          "Up to 90% Bank Loan from SBI, PNB, HDFC, ICICI, Axis",
          "Surrounded by premium townships, schools, and hospitals",
        ],
        description:
          "Mauli Town 17 & 18 offers the perfect blend of connectivity and investment growth. Surrounded by top educational and healthcare institutions, it ensures both lifestyle convenience and future value appreciation.",
      },
    },
  ];

  const openModal = (township) => {
    setSelectedTownship(township);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTownship(null);
  };
  const openFormModal = (township) => {
    setSelectedTownship(township);
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
    setFormData({ name: "", mobile: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!selectedTownship) return;

    // Trigger download of township-specific brochure
    const link = document.createElement("a");
    link.href = selectedTownship.brochure; // 👈 use selected brochure
    link.download = selectedTownship.title + ".pdf";
    link.click();

    closeFormModal();
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        ONGOING PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {townships.map((township, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-blue-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="h-80 bg-gray-200">
              <img
                src={township.image}
                alt={township.title}
                className="w-full h-full object-cover opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start mb-4">
                <span className="text-6xl font-light text-red-300 mr-4 leading-none">
                  {township.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {township.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 text-xl leading-relaxed mb-4">
                {township.description}
              </p>

              {township.hasReadMore && (
                <button
                  onClick={() => openModal(township)}
                  className="text-blue-600 text-sm font-medium hover:text-blue-800 hover:cursor-pointer transition-colors"
                >
                  Read More →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Main Modal */}
      {isModalOpen && selectedTownship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedTownship.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <img
                  src={selectedTownship.image}
                  alt={selectedTownship.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Project Details
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Location:</span>{" "}
                      {selectedTownship.details.location}
                    </p>
                    <p>
                      <span className="font-medium">Plot Sizes:</span>{" "}
                      {selectedTownship.details.plotSizes}
                    </p>
                    <p>
                      <span className="font-medium">Price Range:</span>{" "}
                      {selectedTownship.details.priceRange}
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-1">
                    {selectedTownship.details.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  About the Project
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedTownship.details.description}
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact for Details
                </button>
                <button
                  onClick={() => openFormModal(selectedTownship)}
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeFormModal}
              className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} className="text-gray-600" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Download Brochure
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TownshipListings;

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "RL Plots in Nagpur", color: "orange" },
    { name: "RL Plot in Wardha Road", color: "dark" },
    { name: "Plot in Besa Pipla", color: "orange" },
    { name: "Property in Samruddhi Mahamarg", color: "dark" }
  ];

  const contactLinks = [
    { name: "RL Plots in Nagpur", color: "orange" },
    { name: "RL Plot in Wardha Road", color: "dark" },
    { name: "Plot in Besa Pipla", color: "orange" },
    { name: "Property in Samruddhi Mahamarg", color: "dark" }
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  Mi<span className="text-orange-500">J</span>ULI
                </div>
                <div className="w-12 h-2 bg-orange-500 mx-auto mb-2"></div>
                <div className="text-sm text-gray-600 font-medium">
                  GROUP
                </div>
                <div className="w-20 h-1 bg-orange-500 mx-auto mb-2"></div>
                <div className="text-xs text-gray-500 font-medium">
                  THE BOND OF TRUST
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  className={`block w-full text-left px-6 py-3 rounded-lg font-medium transition-colors ${
                    link.color === "orange"
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact
            </h3>
            
            {/* Phone Number */}
            <div className="flex items-center mb-6">
              <Phone className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-gray-700 font-medium">7721047701</span>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <button
                  key={index}
                  className={`block w-full text-left px-6 py-3 rounded-lg font-medium transition-colors ${
                    link.color === "orange"
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">
                © 2024 MiJULI Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                THE BOND OF TRUST
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
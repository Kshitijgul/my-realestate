import React from 'react';
import { TrendingUp, Cog, Handshake, Users, ClipboardCheck, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Commitment to Growth",
      description: "We're committed to creating a positive and memorable experience for clients — from timely communication to ensuring they get the best value."
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-600" />,
      title: "Effective Development",
      description: "Real estate development is effective when thoughtful planning meets flawless execution—resulting in properties that perform and profit."
    },
    {
      icon: <Handshake className="w-12 h-12 text-blue-600" />,
      title: "Trusted Relationship",
      description: "Strong, lasting relationships are the cornerstone of Riyasat Group's success — built on trust and maintained with integrity."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Customer First Approach",
      description: "Our business philosophy places customer needs and preferences at the forefront, making satisfaction our top priority while taking a comprehensive approach to the entire customer experience."
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
      title: "Quality with Timelines",
      description: "With a focus on quality and modern design, we strive to execute every project with excellence and deliver it within the promised timeline."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Excellence in Execution",
      description: "Driven by ambition, we measure success through results and embrace continuous improvement as a way of working."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Why Choose Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6">
            {/* Icon container */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
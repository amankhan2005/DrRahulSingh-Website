 import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { FaUserMd, FaStethoscope, FaThumbsUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function WhyChooseDrRahul() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Expert Neurosurgeon in Lucknow",
      subtitle: "4 Years Specialized Experience",
      description:
        "With 4 years of specialized experience in neurospine surgery, Dr. Rahul Singh excels in brain, spine, and peripheral nerve treatments.",
      icon: <FaUserMd className="w-12 h-12" />,
      iconColor: "text-[#ff6b6b]",
      iconBg: "bg-gradient-to-br from-red-100 to-red-200",
      link: "#",
    },
    {
      id: 2,
      title: "Consultant Expertise",
      subtitle: "Personalized Neurospine Consultation",
      description:
        "Provides personalized neurospine consultation, ensuring precise and effective treatment for a healthier life.",
      icon: <FaStethoscope className="w-12 h-12" />,
      iconColor: "text-[#4dabf7]",
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      link: "#",
    },
    {
      id: 3,
      title: "Trusted by Thousands",
      subtitle: "Over 6000 Satisfied Patients",
      description:
        "Over 6000 patients have trusted Dr. Rahul Singh for pain-free recovery and holistic neurocare.",
      icon: <FaThumbsUp className="w-12 h-12" />,
      iconColor: "text-[#51cf66]",
      iconBg: "bg-gradient-to-br from-green-100 to-green-200",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center lg:mb-4 mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 leading-tight">
            Why Choose Dr. Rahul Singh
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combining advanced surgical expertise with compassionate care, Dr. Rahul Singh is trusted by thousands for safe, effective, and personalized neurospine treatments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 transform hover:scale-105 bg-white ${
                hoveredCard === feature.id ? 'shadow-2xl shadow-[#3b628b]/20' : 'shadow-lg'
              } border border-gray-100 hover:border-[#3b628b]/20`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3b628b]/5 to-transparent rounded-full transform translate-x-12 -translate-y-12"></div>

              <div className="relative z-10 lg:p-6 p-4 h-full">
                {/* Icon Section */}
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-4 ${feature.iconBg} rounded-2xl transition-all duration-300 ${
                      hoveredCard === feature.id ? 'scale-110 rotate-6' : ''
                    }`}
                  >
                    <div className={feature.iconColor}>{feature.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-bold mb-1 text-[#13335b]">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-[#3b628b] mb-2">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#3b628b]/5 to-[#13335b]/5 transition-opacity duration-300 rounded-2xl ${
                  hoveredCard === feature.id ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

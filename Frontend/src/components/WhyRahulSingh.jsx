import { useState } from "react";
import { FaUserMd, FaStethoscope, FaBrain, FaThumbsUp } from "react-icons/fa";

export default function WhyChooseDrRahul() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Expert Brain & Spine Surgeon",
      subtitle: "Specialist in complex cases",
      description:
        "Specialist in <strong>brain surgery</strong>, <strong>spine surgery</strong>, and <strong>peripheral nerve treatments</strong> with proven success in complex cases.",
      icon: <FaBrain className="w-12 h-12" />,
      iconColor: "text-[#ff6b6b]",
      iconBg: "bg-gradient-to-br from-red-100 to-red-200",
    },
    {
      id: 2,
      title: "Personalized Consultation",
      subtitle: "One-to-One Patient Care",
      description:
        "Every patient receives individual attention, accurate diagnosis, and a tailored treatment plan for long-term health.",
      icon: <FaStethoscope className="w-12 h-12" />,
      iconColor: "text-[#4dabf7]",
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      id: 3,
      title: "Advanced Technology",
      subtitle: "Safe & Faster Recovery",
      description:
        "Equipped with modern <strong>neuroendoscopy</strong>, <strong>microsurgery</strong>, and <strong>minimally invasive procedures</strong> ensuring safer and faster recovery.",
      icon: <FaUserMd className="w-12 h-12" />,
      iconColor: "text-[#51cf66]",
      iconBg: "bg-gradient-to-br from-green-100 to-green-200",
    },
    {
      id: 4,
      title: "Trusted by Thousands",
      subtitle: "6000+ Satisfied Patients",
      description:
        "Over 6000 patients in <strong>Lucknow</strong> and beyond trust <strong>Dr. Rahul Singh</strong> for safe, pain-free, and holistic neurocare.",
      icon: <FaThumbsUp className="w-12 h-12" />,
      iconColor: "text-[#f59f00]",
      iconBg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-8 px-5 sm:px-6 lg:px-10 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 leading-snug">
            Why Choose <span className="font-extrabold">Dr. Rahul Singh</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Trusted for <span className="font-bold">Brain & Spine Surgery</span>{" "}
            in <span className="font-bold">Lucknow</span>,{" "}
            <span className="font-bold">Dr. Rahul Singh</span> combines
            expertise, advanced technology, and compassionate care for the best
            outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg transition-transform duration-500 hover:shadow-2xl hover:scale-105`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="flex justify-center mt-6">
                <div
                  className={`p-5 ${
                    feature.iconBg
                  } rounded-2xl flex items-center justify-center transition-transform duration-300 ${
                    hoveredCard === feature.id ? "scale-110 rotate-3" : ""
                  }`}
                >
                  <div className={feature.iconColor}>{feature.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3
                  className="text-lg md:text-xl font-semibold text-[#13335b] mb-1"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                ></h3>
                <p className="text-sm md:text-base text-[#3b628b] font-medium mb-1">
                  {feature.subtitle}
                </p>
                <p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#3b628b]/5 to-[#13335b]/5 rounded-2xl transition-opacity duration-300 ${
                  hoveredCard === feature.id ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

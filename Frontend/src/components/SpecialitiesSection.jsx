 import { useState, lazy, Suspense } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Lazy load icons
const BrainIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Brain })));
const ActivityIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Activity })));
const ZapIcon = lazy(() => import("lucide-react").then(m => ({ default: m.Zap })));

export default function ServiceSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Brain Surgery",
      subtitle: "Advanced Neurosurgical Excellence",
      description: (
        <>
          <strong>Dr. Rahul Singh</strong>, one of the{" "}
          <strong>best brain surgeons in Lucknow</strong>, offers advanced brain
          surgery using modern microsurgical techniques. He treats{" "}
          <strong>brain tumors, aneurysms</strong>, and{" "}
          <strong>other neurological conditions</strong> with safe procedures
          and successful outcomes.
        </>
      ),
      icon: <BrainIcon className="w-12 h-12 text-white" />,
      iconBg: "bg-primary",
      link: "/brain",
    },
    {
      id: 2,
      title: "Spine Surgery",
      subtitle: "Precision Spinal Care",
      description: (
        <>
          <strong>Dr. Rahul Singh</strong> provides expert care in{" "}
          <strong>spine surgery in Lucknow</strong>. He specializes in endoscopic
          spine procedures, fusion surgeries, and trauma care. His focus is on
          pain relief, faster healing, and long-term results.
        </>
      ),
      icon: <ActivityIcon className="w-12 h-12 rotate-90 text-white" />,
      iconBg: "bg-primary",
      link: "/spine",
    },
    {
      id: 3,
      title: "Neuro Surgery",
      subtitle: "Comprehensive Neurological Solutions",
      description: (
        <>
          With years of expertise, <strong>Dr. Rahul Singh</strong> delivers
          world-class treatment in <strong>neuro surgery in Lucknow</strong>. He
          manages complex brain disorders, vascular conditions, and functional
          neurosurgeries with precision and care.
        </>
      ),
      icon: <ZapIcon className="w-12 h-12 text-white" />,
      iconBg: "bg-primary",
      link: "/peripheral-nerve-surgery",
    },
  ];

  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden py-10">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="md:text-5xl text-3xl font-bold text-primary leading-tight">
            Expert Medical Care
          </h2>
          <p
            className="text-gray-600 mx-auto leading-snug"
            style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
          >
            Experience world-class surgical excellence with cutting-edge <br />
            technology and compassionate care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative flex flex-col overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 transform hover:scale-105 bg-white ${
                hoveredCard === service.id
                  ? "shadow-2xl shadow-primary/20"
                  : "shadow-lg"
              } border border-gray-100 hover:border-primary/20 py-8`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setHoveredCard(service.id)} // ✅ mobile support
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 transition-opacity duration-300 rounded-2xl ${
                  hoveredCard === service.id ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              <div className="relative z-10 px-6 flex-1 flex flex-col">
                {/* Icon */}
                <div className="flex items-center justify-start mb-4">
                  <div
                    className={`p-3 ${service.iconBg} rounded-2xl transition-all duration-300 ${
                      hoveredCard === service.id ? "scale-110" : ""
                    }`}
                  >
                    <Suspense fallback={<div className="w-12 h-12 bg-gray-200 animate-pulse rounded"></div>}>
                      {service.icon}
                    </Suspense>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 text-[#13335b]">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#3b628b] mb-2">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <button
                    onClick={() => navigate(service.link)}
                    aria-label={`Know more about ${service.title}`}
                    className="px-6 py-2 bg-primary text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Know More
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import pattern from "../assets/home/whywechoose.png";
import pharmacy from "../assets/services/24-hours.webp";
import doctor from "../assets/services/doctor.webp";
import heart from "../assets/services/medical.webp";
import gynaecological from "../assets/services/pediatrician.webp";
import surgery from "../assets/services/surgery-room.webp";
import tooth from "../assets/services/tooth.webp";

const services = [
  {
    icon: doctor,
    title: "Qualified Doctors",
    description:
      "Expert doctors providing care across multiple medical specialities.",
  },
  {
    icon: pharmacy,
    title: "Pharmacy Support",
    description:
      "Comprehensive pharmacy services ensuring access to necessary medications.",
  },
  {
    icon: heart,
    title: "Cardiology Services",
    description:
      "Specialized heart care, treatments, and cardiovascular disease management.",
  },
  {
    icon: gynaecological,
    title: "Gynaecological Clinic",
    description:
      "Complete women’s health, including prenatal and routine care.",
  },
  {
    icon: surgery,
    title: "Surgical Services",
    description:
      "Advanced surgical care for various specialities and critical conditions.",
  },
  {
    icon: tooth,
    title: "Dental Care & Services",
    description:
      "Routine check-ups, cleanings, and advanced oral health treatments.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className=" md:py-12 lg:py-14 py-10" data-aos='fade-up'>
      <div className="container mx-auto  sm:px-6 lg:px-8">
        <h1 className="md:text-4xl text-2xl text-primary font-bold text-center messiri">
          Why Choose Us
        </h1>
        <p className="text-gray-600 mb-6 text-center">
    Your health and satisfaction are our top priority with personalized care.
  </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative py-2 px-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  opacity: 0.2,
                  zIndex: 0,
                }}
              ></div>
              <div className="mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto h-16 w-16  object-contain"
                />
              </div>
              <div className="text-xl font-semibold mb-2">{service.title}</div>
              <p className="text-gray-600 mb-4 md:text-base text-sm">{service.description}</p>
              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Read More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

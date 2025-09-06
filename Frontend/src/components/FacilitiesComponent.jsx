 import React, { memo } from "react";
import { facilities } from "../FacilitiesData";
import { motion } from "framer-motion";

const FacilitiesComponent = ({ props }) => {
  return (
    <section className="w-full   px-4 md:px-8 lg:px-12 ">
      <div className="container mx-auto">
        {/* Section Heading */}
     

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <motion.article
              key={facility.id}
              className={`group relative flex flex-col items-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white border-b-4 ${
                props?.title === facility.title ? "border-primary" : "border-transparent"
              }`}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Facility Image */}
              <figure className="relative w-full h-40 md:h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              {/* Facility Content */}
              <div className="flex flex-col flex-grow justify-between text-center p-5 w-full">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base min-h-[40px] line-clamp-2">
                    {facility.description}
                  </p>
                </div>

                <a
                  href={`/${facility.link}`}
                  className="mt-6 inline-block w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#13335b] to-[#3b628b] hover:shadow-lg hover:scale-105 transition-all duration-300"
                  aria-label={`View more about ${facility.title}`}
                >
                  View More
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoization to avoid unnecessary re-renders
export default memo(FacilitiesComponent);

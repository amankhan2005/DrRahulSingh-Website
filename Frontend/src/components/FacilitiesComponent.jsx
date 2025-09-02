 import React from 'react';
import { facilities } from '../FacilitiesData';
import { motion } from 'framer-motion';

function FacilitiesComponent({ props }) {
  return (
    <div className="grid relative grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3">
      {facilities.map((specialty, index) => (
        <motion.div
          key={specialty.id}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex flex-col overflow-hidden md:rounded-lg rounded shadow-lg transition-all duration-500 ease-in-out ${
            props?.title === specialty?.title ? 'border-t-4 border-primary' : ''
          } bg-white`}
        >
          {/* Image */}
          <img
            src={specialty.image}
            alt={specialty.title}
            loading="lazy"
            className="w-full md:h-56 h-28 object-cover transition-transform duration-300 hover:scale-110"
          />

          {/* Content */}
          <div className="flex flex-col flex-grow justify-between md:p-5 p-3">
            <div>
              <h3 className="md:text-lg text-base font-semibold text-gray-800 mb-2">
                {specialty.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm line-clamp-1 md:line-clamp-2 min-h-[20px]">
                {specialty.description}
              </p>
            </div>

            <a
              href={specialty.link || '/facilities'} // replace with real link if available
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center py-2 px-4 rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              View More
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default FacilitiesComponent;

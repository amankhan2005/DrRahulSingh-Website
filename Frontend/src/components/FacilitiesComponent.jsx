import React from 'react';
import { facilities } from '../FacilitiesData';
import { motion } from 'framer-motion';

function FacilitiesComponent({ props }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8">
      {facilities.map((specialty) => (
        <motion.div
          key={specialty.id}
          className={`group relative flex flex-col items-center overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] bg-white border-b-4 border-transparent ${
            props?.title === specialty?.title ? 'border-b-4 border-primary' : ''
          }`}
        >
          {/* Image */}
          <div className="relative w-full h-40 md:h-56 overflow-hidden">
            <img
              src={specialty.image}
              alt={specialty.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow justify-between text-center p-5 w-full">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {specialty.title}
              </h3>
              {/* This class handles text overflow with ellipsis */}
              <p className="text-gray-600 text-sm md:text-base min-h-[40px] line-clamp-2">
                {specialty.description}
              </p>
            </div>

            <a
              href={'/facilities'}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full py-3 rounded-xl font-semibold text-white bg-primary hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
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

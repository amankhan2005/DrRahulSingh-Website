import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {specialities} from '../SpecilitesData.jsx'
import { Link } from 'react-router-dom';

function SpecilitesComponent({specialty}) {
    
  return (
   <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 xl:gap-16">
  {specialities.slice(0, 3).map((speciality, index) => (
      <div className="h-full" key={index} data-aos="fade-up">
        <Link
          to={`/specialities/${speciality.link}`}
          className={`${
            specialty?.title == speciality.title ? "border-2" : ""
          } bg-white block shadow-xl rounded-xl p-4 relative hover:border-2 border-[#1b4d94] transition-all`}
        >
          {/* Image */}
          <div className="absolute md:-top-8 -top-6 left-1/2 transform -translate-x-1/2 bg-blue-100 hover:bg-white md:h-20 md:w-28 h-10 w-14 flex justify-center rounded-lg items-center hover:border-2 border border-[#1b4d94] md:rounded-3xl shadow-lg">
            <img
              src={speciality.image}
              alt={speciality.title}
              className="md:w-20 w-8 md:rounded-3xl rounded md:h-20 h-8 object-cover md:p-2"
            />
          </div>

          {/* Text */}
          <div className="md:mt-16 mt-4 text-center">
            <h2 className="md:text-xl text-base font-bold text-gray-800 mb-2 w-full messiri line-clamp-1">
              {speciality.title}
            </h2>
            <button className="text-primary md:py-1 md:px-2 rounded-full hover:bg-blue-200">
              View More <FaArrowRight className="inline-block ms-1" />
            </button>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>


  )
}

export default SpecilitesComponent
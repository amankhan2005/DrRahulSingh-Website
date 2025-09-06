 import React from "react";
import companyLogo from "../assets/cclogo-MohdSuhel.webp";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <footer className="bg-primary py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
        
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-white text-xs sm:text-sm md:text-base">
          <p>Copyright</p>
          <FaRegCopyright className="text-[0.9rem]" />
          <p>{new Date().getFullYear()} Landmark Advance Neurospine Care Superspeciality Hospital</p>
          <span className="hidden sm:inline-block">|</span>
          <p>All Rights Reserved</p>
        </div>

        {/* Right Section */}
        {/* <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm md:text-base">
          <span>Designed by</span>
          <Link
            to="https://www.codecrafter.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <img
              src={companyLogo}
              alt="Designed by Company"
              loading="lazy"
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default BottomFooter;

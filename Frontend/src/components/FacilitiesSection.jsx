 import React from "react";
import FacilitiesComponent from "./FacilitiesComponent";

const FacilitiesSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          Our Facilities
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          State-of-the-art facilities for advanced medical care.
        </p>

        {/* Facilities Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <FacilitiesComponent cardWidth="max-w-xs" />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

 import React from "react";
import FacilitiesComponent from "./FacilitiesComponent";

const FacilitiesSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="md:text-5xl text-3xl font-bold  text-primary mb-2">
          Our Facilities
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mb-6 text-sm md:text-base">
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

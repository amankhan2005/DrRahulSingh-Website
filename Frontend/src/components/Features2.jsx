 import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="container mx-auto px-2 md:grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Working Time */}
      <div className="bg-primary text-white md:p-6 p-4 mb-4 md:mb-0 rounded-lg border border-gray-200 shadow-md">
        <h3 className="text-lg font-semibold">Working Time</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex justify-between border-b border-white/40 pb-1">
            <span>Mon - Sat (Morning)</span>
            <span className="font-semibold">10:00 AM - 1:00 PM</span>
          </li>
          <li className="flex justify-between border-b border-white/40 pb-1">
            <span>Mon - Sat (Evening)</span>
            <span className="font-semibold">6:00 PM - 9:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="font-semibold">CLOSED</span>
          </li>
        </ul>
      </div>

      {/* Expert Doctors */}
      <div className="bg-primary text-white md:p-6 p-4 flex flex-col justify-between mb-4 md:mb-0 rounded-lg border border-gray-200 shadow-md">
        <div>
          <h3 className="text-lg font-semibold">Expert Doctors</h3>
          <p className="text-sm mt-2">
            Our experienced doctors are dedicated to providing exceptional medical care with compassion and expertise.
          </p>
        </div>
        <Link
          to="/contact-us"
          className="mt-4 text-center border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition"
        >
          View Doctors
        </Link>
      </div>

      {/* ✅ Our Specialities */}
      <div className="bg-primary text-white md:p-6 p-4 flex flex-col justify-between mb-4 md:mb-0 rounded-lg border border-gray-200 shadow-md">
        <div>
          <h3 className="text-lg font-semibold">Our Specialities</h3>
          <p className="text-sm mt-2">
            We specialize in Brain, Spine, and Peripheral Nerve surgeries — delivering precise, advanced, and trusted neuro care.
          </p>
        </div>

        <Link
          to="/brain"
          className="mt-4 text-center border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition-colors duration-300 ease-in-out"
          aria-label="Learn about our specialities"
        >
          Learn More
        </Link>
      </div>

      {/* Emergency Cases */}
      <div className="bg-primary text-white md:p-6 p-4 rounded-lg border border-gray-200 shadow-md">
        <h3 className="text-lg font-semibold">Emergency Cases</h3>
        <a
          href="tel:+918400136465"
          className="md:mt-4 mt-2 flex items-center gap-2 md:text-xl text-base font-semibold"
        >
          <FaPhoneAlt />
          <span>+91 84001-36465</span>
        </a>
        <p className="text-sm mt-2">
          In case of a medical emergency, call us immediately. Our emergency team is available 24/7 to provide urgent care and assistance.
        </p>
      </div>
    </section>
  );
};

export default Features;

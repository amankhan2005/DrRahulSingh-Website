 import React, { useEffect } from "react";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BreadCumb from "../components/BreadCumb";
 import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Contact Us`, link: `/contact` },
        ]}
        title="Contact Us"
      />

      {/* Form and Office Details Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Location */}
            <a
              href="https://maps.app.goo.gl/76GYsXemfE3SqpLo9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary cursor-pointer rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold flex items-center text-white">
                <FaLocationDot className="mr-3 text-3xl lg:text-4xl" /> Our Location
              </div>
              <p className="text-gray-100 mt-2 text-sm lg:text-base leading-relaxed">
                M- II/016, CC, Prabhat Chauraha, Sector I, Janki Vihar Colony, Jankipuram,
                Lucknow, Uttar Pradesh 226021
              </p>
            </a>

            {/* Phone */}
            <div className="bg-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-2xl lg:text-3xl font-bold flex items-center text-white">
                <FaPhone className="mr-3 text-3xl lg:text-4xl rotate-90" /> Connect with Us
              </div>
              <p className="text-gray-100 mt-2 text-sm lg:text-base">
                CALL:{" "}
                <a href="tel:+918400136465" className="underline hover:text-white">
                  +91 84001-36465
                </a>
              </p>
            </div>

            {/* Visiting Hours */}
            <div className="bg-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-2xl lg:text-3xl font-bold flex items-center text-white">
                <FaClock className="mr-3 text-3xl lg:text-4xl" /> Visiting Hours
              </div>
              <p className="text-gray-100 mt-2 text-sm lg:text-base leading-relaxed">
                Mon - Sat (Morning): 10:00 AM - 1:00 PM <br />
                Mon - Sat (Evening): 6:00 PM - 9:00 PM <br />
                Sunday: CLOSED
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="flex-1">
            <ContactUsForm />
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10 lg:mt-16 rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-80 md:h-[22rem] lg:h-[28rem] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.395156981833!2d80.94437887522473!3d26.922684476641265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570b190f211f%3A0x574e3bb68777d9c2!2sLandmark%20Advance%20Neurospine%20Care%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1755171794651!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

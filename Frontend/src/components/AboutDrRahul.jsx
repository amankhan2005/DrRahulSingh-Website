import React, { useState } from "react";
import { CheckCircle, Phone, Calendar } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const AboutDoctor = () => {
  const primaryColor = "#13335b"; // Dark Blue
  const secondaryColor = "#3b628b"; // Light Blue

  const [isOpen, setIsOpen] = useState(false); // Modal state

  const memberships = [
    "American Association of Neurological Surgeons (USA)",
    "Neuroendoscopy Society of India",
    "Neurological Surgeons’ Society of India",
  ];

  return (
    <section className="w-full bg-slate-50 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-72 sm:h-96 md:h-full">
              <img
                src="https://www.drrahulneurosurgeon.com/Content/assets/images/img2.jpg"
                alt="Dr. Rahul Singh"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2  ">
            <h2 className="  text-3xl md:text-5xl font-bold text-primary mb-2">
              Meet <span className="font-extrabold">Dr. Rahul Singh</span>
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-600">
              Leading <span className="font-bold">Brain & Spine Surgeon</span>{" "}
              in <span className="font-bold">Lucknow</span>
            </h3>

            <p className="text-gray-600 mb-3 leading-relaxed text-sm sm:text-base font-medium">
              <span className="font-bold">Dr. Rahul Singh</span> is a renowned{" "}
              <span className="font-bold">brain and spine surgeon</span> in{" "}
              <span className="font-bold">Lucknow</span>, specializing in{" "}
              <span className="font-bold">neurosurgery, spine surgery</span>,
              and <span className="font-bold">peripheral nerve care</span>. He
              completed his{" "}
              <span className="font-bold">MCh in Neurosurgery</span> from the
              prestigious{" "}
              <span className="font-bold">
                Institute of Medical Sciences, Banaras Hindu University (BHU)
              </span>
              , Varanasi.
            </p>

            <p className="text-gray-600 mb-3 leading-relaxed text-sm sm:text-base">
              He also holds an{" "}
              <span className="font-bold">MS in General Surgery</span> from{" "}
              <span className="font-bold">
                King George’s Medical University (KGMU)
              </span>
              , Lucknow, and <span className="font-bold">MBBS</span> from{" "}
              <span className="font-bold">Guwahati Medical College, Assam</span>
              . <span className="font-bold">Dr. Singh</span> has been an{" "}
              <span className="font-bold">International Fellow</span> of the{" "}
              <span className="font-bold">
                American Association of Neurological Surgeons (USA)
              </span>{" "}
              and continuously updates his expertise with global medical
              standards.
            </p>

            {/* Memberships */}
            <div className="mb-2">
              <h4
                className="text-base sm:text-lg font-bold mb-3"
                style={{ color: primaryColor }}
              >
                Professional Memberships
              </h4>
              <ul className="space-y-2">
                {memberships.map((membership, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={18}
                      style={{ color: primaryColor }}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">
                      {membership}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 mb-2 leading-relaxed text-sm sm:text-base">
              With advanced surgical skills, modern techniques, and a
              patient-first approach,{" "}
              <span className="font-bold">Dr. Rahul Singh</span> is recognized
              as one of the best{" "}
              <span className="font-bold">neurosurgeons in Lucknow</span> with
              an exceptional{" "}
              <span className="font-bold">patient satisfaction rate</span>.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="px-6 py-3 text-white text-sm sm:text-base font-medium rounded-full shadow-md 
             bg-gradient-to-r from-[#13335b] to-[#3b628b] flex items-center justify-center 
             hover:scale-105 hover:shadow-xl transition-transform duration-300"
                onClick={() => setIsOpen(true)} // Open Appointment Modal
              >
                <Calendar size={18} className="mr-2" />
                BOOK APPOINTMENT
              </button>

              <div className="flex items-center">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <a href="tel:+918400136465">
                    <Phone size={18} className="text-white" />
                  </a>
                </div>
                <div className="ml-3">
                  <a href="tel:+918400136465">
                    <p
                      className="font-bold text-base sm:text-lg"
                      style={{ color: primaryColor }}
                    >
                      +91 8400136465
                    </p>
                  </a>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Call for Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Modal */}
        {isOpen && <AppointmentModal onClose={() => setIsOpen(false)} />}
      </div>
    </section>
  );
};

export default AboutDoctor;

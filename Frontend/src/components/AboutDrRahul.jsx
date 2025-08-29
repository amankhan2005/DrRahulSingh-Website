 import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutDoctor = () => {
  const primaryColor = '#13335b'; // Dark Blue
  const secondaryColor = '#3b628b'; // Light Blue
  const navigate = useNavigate();

  const memberships = [
    "American Association of Neurological Surgeon (USA)",
    "Member of Neuroendoscopy Society of India",
    "Neurological Surgeons' Society of India"
  ];

  const education = [
    "MCh Neurosurgery from prestigious Institute of Medical Sciences – Banaras Hindu University, Varanasi, Uttar Pradesh",
    "MS General Surgery from King Georges' Medical University, Lucknow, Uttar Pradesh",
    "MBBS from Guwahati Medical College, Guwahati, Assam",
    "International fellow in American Association of Neurological Surgeon"
  ];

  return (
    <section className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-96 md:h-full">
              <img
                src="https://www.drrahulneurosurgeon.com/Content/assets/images/img2.jpg"
                alt="Dr. Rahul Singh"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2">
            <h2 className="lg:text-4xl text-2xl font-bold mb-2 text-primary">
              About Dr. Rahul Singh
            </h2>

            <h3 className="text-xl font-semibold mb-6 text-gray-600">
              Experienced Neurosurgeon in Lucknow
            </h3>

            <p className="text-gray-600 mb-6 font-medium">
              <span className="font-bold">Dr. Rahul Singh is an experienced neurosurgeon in Lucknow in the specialties of brain, spine and peripheral nerve surgeries.</span> He did his MCh Neurosurgery from prestigious Institute of Medical Sciences – Banaras Hindu University, Varanasi, Uttar Pradesh.
            </p>

            <p className="text-gray-600 mb-6">
              MS General Surgery from King Georges' Medical University, Lucknow, Uttar Pradesh & MBBS from Guwahati Medical College, Guwahati, Assam. International fellow in American Association of Neurological Surgeon.
            </p>

            {/* Memberships */}
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                He is a member of –
              </h4>
              <ul className="space-y-2">
                {memberships.map((membership, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} style={{ color: primaryColor }} className="mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Satisfaction Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-700">Patient Satisfaction</span>
                <span className="font-bold" style={{ color: primaryColor }}>100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="h-2.5 rounded-full" style={{ width: '100%', backgroundColor: primaryColor }}></div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="px-6 py-3 text-white font-medium rounded-md shadow-md bg-gradient-to-r from-[#13335b] to-[#3b628b]"
                onClick={()=>navigate("/contact")}
              >
                BOOK APPOINTMENT
              </button>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: secondaryColor }}>
                  <a href="tel:+918400136465">
                    <Phone size={20} className="text-white" />
                  </a>
                </div>
                <div className="ml-3">
                  <a href="tel:+918400136465">
                    <p className="font-bold text-lg" style={{ color: primaryColor }}>
                      +91 8400136465
                    </p>
                  </a>

                  <p className="text-gray-600 text-sm">Call for Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;

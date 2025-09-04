// src/pages/FacilitiesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import BreadCumb from "../components/BreadCumb";

// Local Images
import emergency from "../assets/Facilities/emergency.jpg";
import icu from "../assets/Facilities/ICU.jpg";
import privateRoom from "../assets/Facilities/Private.jpg";
import general from "../assets/Facilities/General-care.jpg";
import ambulance from "../assets/Facilities/ambulance.jpg";
import pharmacy from "../assets/Facilities/pharmacy.jpg";

import neuropathology from "../assets/Facilities/neuropathology.jpg";
import neuroicu from "../assets/Facilities/neuroicu.jpg";
import neurosurgery from "../assets/Facilities/neurosurgery.jpg";

function FacilitiesPage() {
  const facilities = [
    {
      title: "Emergency Care",
      img: emergency,
      desc: `Our 24/7 Emergency Care department is designed to provide immediate 
             medical attention in cases of accidents, trauma, strokes, cardiac 
             arrests, and other life-threatening situations. With cutting-edge 
             diagnostic equipment, a fully equipped ambulance service, and 
             advanced resuscitation units, we ensure patients receive the best 
             possible care from the very first minute.`,
    },
    {
      title: "Intensive Care Unit (ICU)",
      img: icu,
      desc: `Our state-of-the-art Intensive Care Unit is equipped with advanced 
             ventilators, cardiac monitors, dialysis machines, and life-support 
             systems to manage critically ill patients. The ICU team consists of 
             intensivists, critical care nurses, respiratory therapists, and 
             technicians working round the clock.`,
    },
    {
      title: "General Care",
      img: general,
      desc: `Our General Care facility provides a wide range of medical services 
             including regular checkups, vaccinations, preventive screenings, and 
             disease management. From common illnesses like fever and infections 
             to chronic conditions like diabetes and hypertension, our doctors 
             deliver personalized care for patients of all age groups.`,
    },
    {
      title: "Private Care",
      img: privateRoom,
      desc: `Our Private Care rooms are designed to provide comfort, privacy, and 
             personalized attention for patients who prefer a calm healing 
             environment. Each room is fully air-conditioned, equipped with 
             modern amenities, attached washrooms, and dedicated nursing support.`,
    },
    {
      title: "Ambulance Service",
      img: ambulance,
      desc: `Our quick-response Ambulance Service ensures patients receive 
             emergency transport without delay. Equipped with advanced life 
             support systems, our ambulances are staffed with trained paramedics.`,
    },
    {
      title: "Pharmacy",
      img: pharmacy,
      desc: `Our in-house Pharmacy is open 24/7 to provide patients and attendants 
             with genuine medicines at affordable rates. Stocked with all major 
             brands and life-saving drugs, it ensures seamless availability of 
             prescribed medicines immediately after consultation.`,
    },
    {
      title: "Neuropathology",
      img: neuropathology,
      desc: `Our Neuropathology department offers specialized diagnostic facilities 
             for brain, spinal cord, and nerve disorders. Equipped with modern 
             laboratories, we provide precise evaluations essential for neurosurgery.`,
    },
    {
      title: "Neuro ICU",
      img: neuroicu,
      desc: `We have a dedicated Neuro ICU for critically ill patients suffering 
             from brain, spine, and nerve emergencies. It is equipped with 
             advanced monitoring systems, ventilators, and neuro-specialists available 24/7.`,
    },
    {
      title: "Dedicated Neurosurgical Operation Suite",
      img: neurosurgery,
      desc: `Our hospital is endowed with a specialized Neurosurgical Operation Suite 
             that includes a fully equipped neuroendoscopy suite, C-arm, and 
             neurosurgical microscope. These advanced tools allow state-of-the-art 
             surgeries for brain, spine, and nerve ailments with high precision.`,
    },
  ];

  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: "Facilities", link: `/facilities` },
        ]}
        title="Best Facilities"
      />

      <div className="container mx-auto py-12 px-4 md:px-8 space-y-16">
        {facilities.map((item, index) => {
          const isOdd = index % 2 === 0; // odd cards (1,3,5...)
          return (
            <section
              key={index}
              className={`shadow-lg rounded-2xl h-86 overflow-hidden flex flex-col md:flex-row items-center ${
                isOdd ? "bg-primary text-white" : "bg-white text-gray-800"
              }`}
            >
              {/* Alternate layout */}
              {isOdd ? (
                <>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full md:w-1/2 h-86 object-cover"
                  />
                  <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                    <p className="leading-relaxed mb-6">{item.desc}</p>
                    <Link
                      to="/contact"
                      className={`px-6 py-2 rounded-lg shadow transition inline-block ${
                        isOdd
                          ? "bg-white text-primary hover:bg-gray-100"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      Enquire Now
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-8 md:w-1/2 order-2 md:order-1">
                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                    <p className="leading-relaxed mb-6">{item.desc}</p>
                    <Link
                      to="/contact"
                      className={`px-6 py-2 rounded-lg shadow transition inline-block ${
                        isOdd
                          ? "bg-white text-primary hover:bg-gray-100"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      Enquire Now
                    </Link>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full md:w-1/2 h-96 object-cover order-1 md:order-2"
                  />
                </>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default FacilitiesPage;

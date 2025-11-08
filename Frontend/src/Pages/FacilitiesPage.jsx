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
    title: "24/7 Emergency Care",
    img: emergency,
    desc: `Our 24/7 Emergency Care department is always ready to handle all kinds of 
           medical emergencies — including accidents, trauma, strokes, heart attacks, 
           and other critical conditions. With a rapid response team, advanced 
           diagnostic tools, and life-saving equipment, our emergency unit ensures 
           patients receive immediate and expert care when every second counts.`,
  },
  {
    title: "Advanced Intensive Care Unit (ICU)",
    img: icu,
    desc: `Our Advanced ICU is designed to deliver world-class critical care for 
           patients in life-threatening conditions. Equipped with modern ventilators, 
           cardiac monitors, dialysis units, and 24/7 surveillance systems, our ICU 
           team — comprising experienced intensivists, nurses, and respiratory 
           therapists — ensures round-the-clock monitoring and compassionate care.`,
  },
  {
    title: "Comprehensive General Care",
    img: general,
    desc: `Our General Care department focuses on preventive, diagnostic, and 
           therapeutic services for individuals and families. From routine 
           health checkups and vaccinations to managing chronic diseases like 
           diabetes, hypertension, and asthma — our skilled doctors offer 
           personalized treatment plans to promote long-term wellness.`,
  },
  {
    title: "Premium Private Rooms",
    img: privateRoom,
    desc: `Our Private Care rooms are designed to provide a peaceful and 
           patient-friendly recovery experience. Each private room includes 
           comfortable bedding, attached washrooms, modern medical support, 
           and dedicated nursing assistance — ensuring privacy, hygiene, and 
           personalized attention throughout your stay.`,
  },
  {
    title: "Emergency Ambulance Service",
    img: ambulance,
    desc: `Our fully-equipped Ambulance Service provides fast and safe emergency 
           transport for patients in need of urgent medical attention. Each 
           ambulance is fitted with advanced life-support systems and staffed 
           with trained paramedics to ensure immediate on-the-spot treatment 
           and seamless transfer to the hospital.`,
  },
  {
    title: "24-Hour Pharmacy",
    img: pharmacy,
    desc: `Our in-house 24-Hour Pharmacy provides genuine and affordable medicines 
           around the clock. Stocked with all essential drugs, surgical supplies, 
           and life-saving medications, it ensures patients can easily access 
           prescribed medicines immediately after consultation or discharge.`,
  },
  {
    title: "Specialized Neuropathology Services",
    img: neuropathology,
    desc: `Our Neuropathology department specializes in the diagnosis of brain, 
           spinal cord, and nerve disorders. Using advanced laboratory 
           technologies and precision diagnostic tools, we support neurosurgeons 
           in identifying complex neurological conditions with high accuracy.`,
  },
  {
    title: "Dedicated Neuro ICU",
    img: neuroicu,
    desc: `Our dedicated Neuro ICU provides expert care for patients with critical 
           brain and spine injuries, strokes, and neurological emergencies. 
           Equipped with advanced neuro-monitoring systems, ventilators, and 
           a team of neurospecialists available 24/7, we ensure continuous, 
           high-quality neurological care.`,
  },
  {
    title: "Neurosurgical Operation Suite",
    img: neurosurgery,
    desc: `Our hospital features a state-of-the-art Neurosurgical Operation Suite, 
           equipped with a high-precision neuroendoscopy unit, C-arm imaging, and 
           microsurgical tools. These advanced facilities enable our neurosurgeons 
           to perform complex brain, spine, and nerve surgeries with exceptional 
           accuracy and safety.`,
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
                      to="/Contact-us"
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
                      to="/Contact-us"
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

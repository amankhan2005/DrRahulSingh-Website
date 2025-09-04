import React from "react";
import nerveImg from "../assets/home/peripheral-nerve-surgery.jpg";  
export default function PeripheralNerveSurgery() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Heading + Subheading */}
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Peripheral Nerve Surgery</h2>
          <h3 className="text-lg font-medium text-gray-600">
            Advanced Care for Nerve Injuries & Neuropathic Disorders
          </h3>
        </div> */}

        {/* Content + Image */}
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-2xs p-4">
          {/* Left Content */}
          <div className="flex-1 flex items-center">
           <p className="text-gray-800 text-left md:text-justify leading-snug md:leading-relaxed">
              <span className="font-semibold">Peripheral nerve surgery</span> addresses disorders and injuries
              of the peripheral nervous system, including carpal tunnel syndrome, ulnar nerve entrapment,
              brachial plexus injuries, nerve tumors, traumatic lacerations, and chronic neuropathic pain.
              Microsurgical techniques such as neurolysis, direct nerve repair, nerve grafting, and nerve
              transfers are commonly used to restore sensory and motor function. Minimally invasive
              approaches and intraoperative monitoring improve accuracy and reduce complications.
              Advanced diagnostic tools like high-resolution ultrasound and MRI enable precise planning
              and localization of nerve pathologies. Postoperative care involves physiotherapy,
              occupational therapy, and rehabilitation strategies designed to maximize recovery and
              prevent long-term disability. Recent advances in regenerative medicine, including nerve
              conduits, stem-cell-based therapies, and biologic enhancements, are further improving
              surgical outcomes. Each treatment plan is tailored to the patient’s condition, overall
              health, and goals, ensuring the best possible recovery, reduced pain, and improved quality
              of life.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={nerveImg}
              alt="Peripheral Nerve Surgery"
              className="rounded-lg shadow-md w-full h-full object-cover"
              style={{ minHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

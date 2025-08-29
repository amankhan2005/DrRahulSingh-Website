 import React from "react";
import spineImg from "../assets/home/spine-surgery.jpg"; // replace with actual image path

export default function SpineSurgery() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto  px-6">
        {/* Heading + Subheading */}
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Spine Surgery</h2>
          <h3 className="text-lg font-medium text-gray-600">
            Advanced Treatment for Spinal Disorders
          </h3>
        </div> */}

        {/* Content + Image */}
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-2xs p-6">
          {/* Left Content */}
          <div className="flex-1 flex items-center">
            <p className="text-gray-800 leading-relaxed text-justify">
              <span className="font-semibold">Spine surgery</span> is performed
              to address conditions such as herniated discs, spinal stenosis,
              scoliosis, degenerative disc disease, and spinal injuries. Modern
              techniques include minimally invasive approaches that reduce pain,
              scarring, and recovery time. Procedures may involve spinal fusion,
              laminectomy, discectomy, or the use of artificial disc implants.
              Advanced imaging and neuronavigation ensure accuracy and safety
              during surgery. Post-surgical care includes physiotherapy and
              rehabilitation to restore mobility and strength. With ongoing
              innovations in robotics, endoscopy, and navigation systems, spine
              surgery outcomes are becoming safer and more effective. Patient
              education and preventive strategies play an important role in
              ensuring long-term spinal health and quality of life. Surgeons also
              focus on personalized care, considering each patient's unique
              anatomy and medical history to optimize results. Early diagnosis and
              timely intervention help prevent complications and improve recovery.
              Additionally, the integration of regenerative therapies, advanced
              pain management techniques, and continuous follow-up ensures that
              patients regain maximum function and experience enhanced well-being
              after surgery.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={spineImg}
              alt="Spine Surgery"
              className="rounded-lg shadow-md w-full h-full object-cover"
              style={{ minHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

 import React from "react";
import brainImg from "../assets/home/brain-surgery.jpg"; // replace with actual image path

export default function BrainSurgery() {
  return (
    <section className=" bg-white py-8">
      <div className="container mx-auto px-6">
        {/* Heading + Subheading */}
        {/* <div className="text-center ">
          <h2 className="text-3xl font-bold text-primary">Brain Surgery</h2>
          <h3 className="text-lg font-medium text-gray-600">
            Advanced Neurosurgical Treatment
          </h3>
        </div> */}

        {/* Content + Image */}
        <div className="grid md:grid-cols-2 gap-8  bg-white rounded-lg shadow-2xs p-6 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-800 leading-relaxed text-justify">
              <span className="font-semibold "> Brain surgery </span> addresses conditions affecting the brain, such as
              tumors, aneurysms, and traumatic injuries. It involves highly
              precise techniques guided by advanced imaging like MRI and CT
              scans. Common approaches include craniotomy, minimally invasive
              procedures, and radiosurgery. Microsurgical tools and
              neuronavigation help reduce risk and improve safety. In some
              cases, awake craniotomy is performed to protect vital brain
              functions. Recovery may require intensive monitoring and
              specialized rehabilitation therapies. Although risks exist, careful
              planning and modern techniques improve patient outcomes. Patients
              and families are guided through pre- and post-surgical care for
              confidence and safety. Ongoing advances in robotics and AI
              continue to shape the future of neurosurgery. Preventive strategies 
              are emphasized to reduce complications and enhance recovery speed.
              Collaboration between neurologists, anesthesiologists,
              and rehabilitation experts enhances overall care. Altogether,
              these innovations are redefining outcomes and offering
              patients renewed hope for healthier lives.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={brainImg}
              alt="Brain Surgery"
              className="rounded-lg shadow-md h-110 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

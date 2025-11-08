 import React from "react";
import brainImg from "../assets/home/brain-surgery.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Activity, HeartPulse, Shield } from "lucide-react";

export default function BrainSurgery() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        

        {/* Content + Image */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Expert Neurological Care</h3>
            </div>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-6">
              <span className="font-semibold text-primary">Brain surgery</span> addresses conditions affecting the brain, such as
              tumors, aneurysms, and traumatic injuries. It involves highly
              precise techniques guided by advanced imaging like MRI and CT
              scans.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-5 mb-6 border-l-4 border-primary">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Advanced Surgical Approaches
              </h4>
              <p className="text-gray-700">
                Common approaches include craniotomy, minimally invasive
                procedures, and radiosurgery. Microsurgical tools and
                neuronavigation help reduce risk and improve safety.
              </p>
            </div>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-6">
              In some cases, awake craniotomy is performed to protect vital brain
              functions. Recovery may require intensive monitoring and
              specialized rehabilitation therapies.
            </p>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-8">
              Although risks exist, careful planning and modern techniques improve patient outcomes.
              Patients and families are guided through pre- and post-surgical care for
              confidence and safety. Ongoing advances in robotics and AI
              continue to shape the future of neurosurgery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10"></div>
            <img
              src={brainImg}
              alt="Brain Surgery"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">Precision Neurosurgery</h3>
                <p className="text-sm opacity-90">Advanced techniques for improved outcomes</p>
              </div>
            </div>
          </div>
        </div>

        
       
      </div>
    </section>
  );
}
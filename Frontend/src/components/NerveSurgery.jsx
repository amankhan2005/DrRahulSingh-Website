 import React from "react";
import nerveImg from "../assets/home/peripheral-nerve-surgery.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Activity, HeartPulse } from "lucide-react";

export default function PeripheralNerveSurgery() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
      

        {/* Content + Image */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Expert Nerve Care</h3>
            </div>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-6">
              <span className="font-semibold text-primary">Peripheral nerve surgery</span> addresses disorders and injuries
              of the peripheral nervous system, including carpal tunnel syndrome, ulnar nerve entrapment,
              brachial plexus injuries, nerve tumors, traumatic lacerations, and chronic neuropathic pain.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-5 mb-6 border-l-4 border-primary">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <HeartPulse className="w-5 h-5 text-primary mr-2" />
                Advanced Surgical Techniques
              </h4>
              <p className="text-gray-700">
                Microsurgical techniques such as neurolysis, direct nerve repair, nerve grafting, and nerve
                transfers are commonly used to restore sensory and motor function.
              </p>
            </div>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-6">
              Minimally invasive approaches and intraoperative monitoring improve accuracy and reduce complications.
              Advanced diagnostic tools like high-resolution ultrasound and MRI enable precise planning
              and localization of nerve pathologies.
            </p>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-8">
              Postoperative care involves physiotherapy, occupational therapy, and rehabilitation strategies designed to maximize recovery and
              prevent long-term disability. Recent advances in regenerative medicine, including nerve
              conduits, stem-cell-based therapies, and biologic enhancements, are further improving
              surgical outcomes.
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
              src={nerveImg}
              alt="Peripheral Nerve Surgery"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">Personalized Treatment Plans</h3>
                <p className="text-sm opacity-90">Tailored to your condition, health, and recovery goals</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}
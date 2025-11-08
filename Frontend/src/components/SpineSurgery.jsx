 import React from "react";
import spineImg from "../assets/home/spine-surgery.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, HeartPulse, Shield, Bone } from "lucide-react";

export default function SpineSurgery() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        
        {/* Content + Image */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Expert Spinal Care</h3>
            </div>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-6">
              <span className="font-semibold text-primary">Spine surgery</span> is performed
              to address conditions such as herniated discs, spinal stenosis,
              scoliosis, degenerative disc disease, and spinal injuries.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-5 mb-6 border-l-4 border-primary">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Minimally Invasive Techniques
              </h4>
              <p className="text-gray-700">
                Modern approaches reduce pain, scarring, and recovery time. Procedures may involve spinal fusion,
                laminectomy, discectomy, or the use of artificial disc implants.
              </p>
            </div>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-6">
              Advanced imaging and neuronavigation ensure accuracy and safety
              during surgery. Post-surgical care includes physiotherapy and
              rehabilitation to restore mobility and strength.
            </p>
            
            <p className="text-gray-700 text-left md:text-justify leading-relaxed mb-8">
              With ongoing innovations in robotics, endoscopy, and navigation systems, spine
              surgery outcomes are becoming safer and more effective. Surgeons focus on personalized care,
              considering each patient's unique anatomy and medical history to optimize results.
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
              src={spineImg}
              alt="Spine Surgery"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">Personalized Spinal Solutions</h3>
                <p className="text-sm opacity-90">Tailored treatments for optimal recovery</p>
              </div>
            </div>
          </div>
        </div>

     

       
      </div>
    </section>
  );
}
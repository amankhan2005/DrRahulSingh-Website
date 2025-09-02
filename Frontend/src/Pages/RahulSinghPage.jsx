 import React, { useState } from "react";
import BreadCumb from "../components/BreadCumb";
import Testimonial from "../components/Testimonial";
import Rahulimg from "../assets/home/dr-rahul.webp";
import AppointmentModal from "../components/AppointmentModal"; // 👈 import modal

export default function RahulSinghPage() {
  const [isOpen, setIsOpen] = useState(false); // modal state

  const faqs = [
    {
      q: "Why do patients visit Dr. Rahul Singh?",
      a: "Patients frequently visit Dr. Rahul Singh for Spine Surgery, Spinal and Cerebral Tumor Embolization, Brain Tumor Surgery. For more reasons, visit his Practo profile.",
    },
    {
      q: "What is Dr. Rahul Singh's education qualification?",
      a: "Dr. Rahul Singh holds MBBS and MCh in Neuro Surgery.",
    },
    {
      q: "What does Dr. Rahul Singh specialise in?",
      a: "Neurosurgery, Spine Surgery (Ortho & Neuro).",
    },
    {
      q: "How many years of experience does Dr. Rahul Singh have?",
      a: "He has over 15 years of experience in neurosurgery.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Breadcrumb */}
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/About-us" },
          { label: "Dr. Rahul Singh" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0a2a4a] to-[#1f4c78] text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center py-10 gap-8">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <span className="uppercase text-sm tracking-wider text-white/70 font-medium">
              Trusted Neurosurgeon
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
              Expert Care for Brain and Spine Health
            </h1>
            <p className="text-white/80 max-w-lg text-base sm:text-lg leading-relaxed">
              With 15+ years of expertise, Dr. Rahul Singh offers compassionate
              and advanced neurosurgical care for patients with brain, spine,
              and nerve conditions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button
                onClick={() => setIsOpen(true)}
                className="px-8 py-3 bg-yellow-400 text-[#0a2a4a] font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition duration-300"
              >
                Book Consultation
              </button>
              <a
                href="tel:+918400136465"
                className="px-8 py-3 border border-white text-white rounded-full shadow hover:bg-white/20 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative flex flex-col items-center">
            <div className="relative group">
              <img
                src={Rahulimg}
                alt="Dr. Rahul Singh"
                className="w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -inset-6 bg-white/30 rounded-3xl blur-2xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-white/10 backdrop-blur-md mt-2 rounded-2xl mx-4 sm:mx-12 p-5 flex flex-col md:flex-row items-center justify-center gap-8 text-white">
          <a
            href="mailto:info@drrahulneurosurgeon.com"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <i className="fa-solid fa-envelope"></i>
            <span>info@drrahulneurosurgeon.com</span>
          </a>
          <a
            href="tel:+918400136465"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <i className="fa-solid fa-phone-volume"></i>
            <span>+91 84001-36465</span>
          </a>
          <div className="flex items-center gap-2 text-center">
            <i className="fa-solid fa-location-dot"></i>
            <span>Lucknow, Uttar Pradesh</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 lg:px-12 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0a2a4a]">
          About Dr. Rahul Singh
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Dr. Rahul Singh is a highly experienced neurosurgeon in Lucknow,
              specializing in brain, spine, and peripheral nerve surgeries. He
              completed his{" "}
              <span className="font-semibold text-[#0a2a4a]">
                MCh in Neurosurgery
              </span>{" "}
              from Banaras Hindu University,{" "}
              <span className="font-semibold text-[#0a2a4a]">
                MS in General Surgery
              </span>{" "}
              from King George's Medical University, and{" "}
              <span className="font-semibold text-[#0a2a4a]">MBBS</span> from
              Guwahati Medical College.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              He is also an{" "}
              <span className="font-semibold text-[#0a2a4a]">
                International Fellow of the American Association of Neurological
                Surgeons
              </span>
              , ensuring world-class standards in patient care.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://www.drrahulneurosurgeon.com/Content/assets/images/img2.jpg"
              alt="Dr. Rahul Singh"
              className="rounded-3xl w-full shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 lg:px-12 py-10 bg-gray-50 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0a2a4a]">
          Common Questions & Answers
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-[#0a2a4a]">
                {item.q}
                <span className="transition-transform group-open:rotate-180">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </summary>
              <p className="mt-3 text-gray-700 text-sm sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 lg:px-12 ">
        <Testimonial />
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a2a4a] text-white py-10">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-3xl font-bold">
            Take the First Step Towards Better Health
          </h3>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-yellow-400 text-[#0a2a4a] font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* Appointment Modal */}
      {isOpen && <AppointmentModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

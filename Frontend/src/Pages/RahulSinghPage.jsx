 import React from "react";

export default function RahulSinghPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Left Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Dr. Rahul Singh
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-2">
              MBBS, MS, MCh – Neurosurgery
            </p>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto md:mx-0">
              Consultant Neurosurgeon specializing in brain and spine surgeries,
              committed to advanced patient care.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 mt-8 md:mt-0 md:ml-8 rounded-full overflow-hidden shadow-lg">
            <img
              src="/rahul-singh.jpg"
              alt="Dr. Rahul Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Dr. Rahul Singh
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
            Dr. Rahul Singh is a highly skilled neurosurgeon with extensive
            experience in managing complex neurosurgical cases. With a strong
            academic background and a compassionate approach, he has dedicated
            his career to improving the lives of patients with brain and spinal
            disorders.
          </p>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Qualifications & Memberships
          </h2>
          <ul className="grid gap-4 max-w-2xl mx-auto md:mx-0 text-gray-700 list-disc list-inside text-center md:text-left">
            <li>MBBS – King George’s Medical University (KGMU), Lucknow</li>
            <li>MS – General Surgery, GSVM Medical College, Kanpur</li>
            <li>MCh – Neurosurgery, All India Institute of Medical Sciences (AIIMS), New Delhi</li>
            <li>Member – Neurological Society of India</li>
            <li>Member – Congress of Neurological Surgeons (CNS)</li>
          </ul>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Research & Publications
          </h2>
          <ul className="grid gap-4 max-w-2xl mx-auto md:mx-0 text-gray-700 list-disc list-inside text-center md:text-left">
            <li>
              Singh R, et al. "Advancements in minimally invasive neurosurgical
              techniques" – Journal of Neurosurgery, 2021.
            </li>
            <li>
              Singh R, et al. "Outcomes in spinal tumor surgeries: A clinical
              study" – Indian Journal of Neurosurgery, 2020.
            </li>
            <li>
              Singh R, et al. "Management of traumatic brain injuries in
              tertiary care hospitals" – Neurology India, 2019.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

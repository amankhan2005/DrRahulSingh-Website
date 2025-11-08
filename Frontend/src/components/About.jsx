 import React, { lazy, Suspense } from "react";

// ✅ Lazy load Features component
const Features = lazy(() => import("../components/Features2"));

const AboutHospital = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container mx-auto">
        
        {/* Heading Top */}
        <div className="text-center mb-4">
          <h2 className="md:text-5xl text-3xl font-bold text-primary leading-snug">
            Advanced Brain, Spine & Nerve Care in Lucknow,<br /> led by Dr. Rahul Singh
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed"></p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start gap-10">
  <div className="w-full text-gray-700 leading-relaxed space-y-6 text-center">
    <p>
      Welcome to <span className="font-semibold">LandMark Advance NeuroSpine Care Hospital</span> — 
      a trusted center for <span className="font-semibold">Brain, Spine, and Nerve Treatment</span> in Lucknow. 
      Led by <span className="text-[#13335b] font-semibold">Dr. Rahul Singh</span>, a gold medalist and one of the best 
      <span className="font-semibold"> neurosurgeons in Lucknow</span>, our hospital is committed to delivering 
      <span className="font-semibold"> advanced, precise, and compassionate neurological care</span>.
    </p>

    <p className="text-center leading-relaxed">
      At LandMark, we combine modern medical technology with expert surgical experience to manage 
      everything from <span className="font-semibold">emergency brain surgeries</span> to 
      <span className="font-semibold"> complex spine and nerve procedures</span>. 
      Every treatment plan is personalized — ensuring patients receive the most effective care 
      along with continuous emotional support throughout their recovery journey.
    </p>

    <p className="text-center leading-relaxed">
      Beyond surgical excellence, our <span className="font-semibold">rehabilitation team</span> helps patients regain 
      strength, confidence, and independence. From physiotherapy to post-operative care, 
      we make sure every patient returns to their daily life healthier and stronger.
    </p>

    <p className="font-medium">
      At <span className="font-semibold">LandMark Advance NeuroSpine Care Hospital</span>, 
      under the guidance of <span className="text-[#13335b] font-semibold">Dr. Rahul Singh</span>, 
      our mission is simple — <span className="text-[#13335b] font-semibold">to heal with expertise, care with compassion,</span> 
      and be your most trusted partner in brain and spine recovery.
    </p>
  </div>
</div>

      </div>

      {/* ✅ Lazy load Features Section */}
      <div className="mt-5">
        <Suspense fallback={<div className="text-center text-gray-500">Loading Features...</div>}>
          <Features />
        </Suspense>
      </div>
    </section>
  );
};

export default AboutHospital;

 import React, { useEffect, useState } from "react";
import { User, Activity, HeartPulse } from "lucide-react";

const statsData = [
  { label: "HAPPY PATIENTS", target: 15000, icon: User },
  { label: "TOTAL CASES SOLVED", target: 16000, icon: Activity },
  { label: "SUCCESSFUL SURGERIES", target: 10000, icon: HeartPulse },
];

const ClinicStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCounts(statsData.map(stat => stat.target * progress));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-12 mb-8 bg-gradient-to-r from-[#2e6294] via-[#3597e0] to-[#2e6294]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl py-8 px-6 flex flex-col items-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl w-full max-w-xs"
              >
                {/* Icon */}
                <div className="p-5 rounded-full bg-[#2e6294] flex items-center justify-center shadow-lg mb-4">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                {/* Animated Number */}
                <div className="text-3xl md:text-4xl font-extrabold text-[#2e6294] mb-2">
                  {Math.floor(counts[index]).toLocaleString()}+
                </div>

                {/* Label */}
                <div className="text-gray-800 font-semibold text-center text-sm md:text-base tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClinicStats;

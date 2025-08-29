 import React, { useEffect, useState } from "react";
import { User, Activity, HeartPulse } from "lucide-react";

const statsData = [
  { label: "HAPPY PATIENTS", target: 10000, icon: User, iconBg: "bg-green-100 text-green-600" },
  { label: "TOTAL CASES SOLVED", target: 12000, icon: Activity, iconBg: "bg-yellow-100 text-yellow-600" },
  { label: "SUCCESSFUL SURGERIES", target: 5000, icon: HeartPulse, iconBg: "bg-pink-100 text-pink-600" },
];

const ClinicStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const intervals = statsData.map((stat, index) => {
      const increment = stat.target / steps;
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[index] < stat.target) {
            next[index] = Math.min(next[index] + increment, stat.target);
          }
          return next;
        });
      }, intervalTime);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className=" py-10  mb-8 bg-gradient-to-r from-[#7da4c4] via-[#2e6294] to-[#588dc0]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md py-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 max-w-xs w-full"
              >
                {/* Icon Circle */}
                <div
                  className={`p-2 rounded-full ${stat.iconBg} flex items-center justify-center shadow-sm`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Number */}
                <div className="text-2xl md:text-3xl font-bold text-gray-900 ">
                  {Math.floor(counts[index])}+
                </div>

                {/* Label */}
                <div className="text-gray-600 font-semibold text-center text-xs md:text-sm tracking-wide uppercase">
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

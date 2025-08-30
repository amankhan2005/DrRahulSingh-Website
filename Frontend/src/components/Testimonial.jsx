 import React, { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    // Tagembed script load
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className=" mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            See why so many families choose us for their healthcare needs.
          </p>
        </div>

        {/* Tagembed widget auto height */}
        <div className="container mx-auto">
          <div
            className="tagembed-widget rounded-lg shadow-md border border-gray-200 h-auto"
            style={{ width: "100%", height: "auto", overflow: "visible" }}
            data-widget-id="298493"
            data-website="1"
          ></div>
        </div>
      </div>
    </section>
  );
}

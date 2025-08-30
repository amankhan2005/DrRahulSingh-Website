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
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 whitespace-nowrap">
  What Our Patients Say
</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          See why so many families choose us for their healthcare needs.
        </p>

        {/* Tagembed widget */}
        <div
          className="tagembed-widget"
          style={{ width: "100%", height: "600px", overflow: "auto" }}
          data-widget-id="298493"
          data-website="1"
        ></div>
      </div>
    </section>
  );
}

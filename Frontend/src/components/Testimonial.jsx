import React, { useEffect, useRef } from "react";

export default function GoogleReviews() {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    // Load Tagembed script
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
        <div className="text-center mx-auto mb-2 ">
          <h2 className="text-2xl md:text-5xl font-bold text-primary mb-2">
            Patient Testimonials & Reviews
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear from our patients and their families about why Landmark Hospital is trusted as one of the best hospitals in Lucknow.
          </p>
        </div>

        {/* Tagembed Widget */}
        <div
          ref={widgetContainerRef}
          className="tagembed-widget-container rounded-lg shadow-md border border-gray-200"
          style={{ width: "100%", minHeight: "400px" }}
        >
          <div
            className="tagembed-widget"
            data-widget-id="298493"
            data-website="1"
            style={{ width: "100%", height: "100%", overflow: "auto" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function GoogleReviews() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          See why so many families choose us for their healthcare needs.        </p>

        {/* Reviews iframe inside professional frame */}
        <div className="w-full h-80 md:h-[500px] overflow-hidden rounded-lg shadow-md border border-gray-300 bg-white">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25591444"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Google Reviews"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

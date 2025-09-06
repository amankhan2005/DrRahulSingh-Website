import React, { useRef } from "react";

export default function YouTubePage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const videos = [
    "https://www.youtube.com/embed/Hl4n09fYu78?si=OLU4MYRKLvUfc1HV",
    "https://www.youtube.com/embed/ZJwE5BvPRfE?si=UmIXJhUJORJMa9Yz",
    "https://www.youtube.com/embed/6VJo3CgOpfk?si=ZjS-YrX2uFL99PqE",
    "https://www.youtube.com/embed/vNINyNnYAHo?si=duK6l1suCONSwNei",
    "https://www.youtube.com/embed/-nOLqRZLJCA?si=o43P6YKyxC3kP9Q1",
    "https://www.youtube.com/embed/TuHN5sq68YI?si=BrqIhM6G_M4TyFXG",
    "https://www.youtube.com/embed/XwARUloBotE?si=eaUQxRFLs1Wpus1S",
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="md:text-5xl text-3xl text-primary font-bold mb-2 text-center">
          Expert Health Talks on YouTube
        </h2>
        <p className="text-gray-600 mb-4 text-center max-w-3xl mx-auto">
          Expert tips on brain, spine, and overall health—stay informed with
          Landmark Hospital.
        </p>

        <div className="relative w-full">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md 
                    bg-white text-primary border border-gray-300    
                      hover:scale-105 transition-transform duration-300 z-10"
          >
            &#8592;
          </button>
  
          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md 
                       bg-white text-primary border border-gray-300
                       hover:scale-105 transition-transform duration-300 z-10"
          >
            &#8594;
          </button>

          {/* Video Slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 scroll-smooth pb-4 px-2 sm:px-4 no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {videos.map((link, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[70%] sm:w-[220px] md:w-[250px] lg:w-[280px] 
                           aspect-[9/16] rounded-xl overflow-hidden shadow-lg 
                           hover:scale-105 transition-transform duration-300"
                style={{ scrollSnapAlign: "center" }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={link}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl"
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

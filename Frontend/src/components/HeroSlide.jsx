 import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/home/banner3.webp";
import banner2 from "../assets/home/banner2.webp";
import banner3 from "../assets/home/banner4.webp";

// Slider data
const slides = [
  { id: 1, image: banner3, title: "Higher Standards for all Healthcare" },
  { id: 2, image: banner2, title: "Best Healthcare Services" },
  { id: 3, image: banner1, title: "Trustworthy Hospital" },
];

export default function HeroSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { arrows: false } },
      { breakpoint: 600, settings: { arrows: false } },
      { breakpoint: 480, settings: { arrows: false, dots: false } },
    ],
  };

  return (
    <div className="w-full relative -z-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[70vh] lg:h-[70vh]">
            <img
              src={slide.image}
              alt={slide.title}
              title={slide.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

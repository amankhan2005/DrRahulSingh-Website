 import React, { useEffect, useState, memo } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/slices/dataslice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const dispatch = useDispatch();
  const { galleryData = [], status, error } = useSelector(
    (state) => state.data
  );

  // Filter only photos
  const photoGallery = galleryData.filter((item) => item.category === "photo");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  // Fetch gallery data once
  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setScale(1);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // prevent scroll
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e) => {
    if (e.target.dataset.modal === "overlay") closeModal();
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % photoGallery.length);
    setScale(1);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + photoGallery.length) % photoGallery.length
    );
    setScale(1);
  };

  const handleWheel = (e) => {
    setScale((prev) => Math.min(Math.max(prev + e.deltaY * -0.001, 1), 3));
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: photoGallery.length > 3,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-2">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-2">
            Our Recent Memories
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            A glimpse into our recent work and accomplishments.
          </p>
        </header>

        {/* Loading/Error */}
        {status === "loading" && (
          <p className="text-center text-gray-500">Loading Gallery...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {photoGallery?.length === 0 && status === "success" && (
          <p className="text-center text-red-500">No photos available</p>
        )}

        {/* Slider */}
        {photoGallery.length > 0 && (
          <Slider {...settings}>
            {photoGallery.map((item, idx) => (
              <article
                key={item.id || idx}
                className="p-3 relative cursor-pointer group"
                onClick={() => openModal(idx)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title || `Gallery Image ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex justify-center items-center rounded-xl bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPlus className="text-white w-10 h-10" />
                </div>
              </article>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal */}
      {modalOpen && photoGallery[currentIndex] && (
        <div
          data-modal="overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-[11000] p-4 sm:p-6"
          onClick={handleOverlayClick}
          onWheel={handleWheel}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white text-4xl cursor-pointer"
            onClick={closeModal}
            aria-label="Close Modal"
          >
            <FaTimes />
          </button>

          {/* Previous */}
          <button
            className="absolute left-5 text-white text-3xl cursor-pointer"
            onClick={prevItem}
            aria-label="Previous Photo"
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <img
            src={photoGallery[currentIndex]?.imageUrl}
            alt={
              photoGallery[currentIndex]?.title ||
              `Gallery Image ${currentIndex + 1}`
            }
            style={{ transform: `scale(${scale})` }}
            className="max-w-full max-h-[90vh] sm:max-h-[95vh] object-contain rounded-lg transition-transform duration-200"
          />

          {/* Next */}
          <button
            className="absolute right-5 text-white text-3xl cursor-pointer"
            onClick={nextItem}
            aria-label="Next Photo"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

// Memoization for performance
export default memo(Gallery);

 import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/slices/dataslice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const dispatch = useDispatch();
  const { galleryData = [], status, error } = useSelector((state) => state.data);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setScale(1);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto"; // Restore scroll
  };

  const nextItem = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  const prevItem = () =>
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);

  const handleWheel = (e) =>
    setScale((prev) => Math.min(Math.max(prev - e.deltaY * 0.001, 1), 3));

  const handleOverlayClick = (e) => {
    if (e.target.dataset.modal === "overlay") closeModal();
  };

  const settings = {
    dots: false,
    infinite: galleryData.length > 3,
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
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">
            Our Recent Highlights
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            A glimpse into our latest achievements, patient care stories, and healthcare excellence.
          </p>
        </div>

        {/* Loading/Error States */}
        {status === "loading" && <p className="text-center text-gray-500">Loading Gallery...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {galleryData?.length === 0 && status === "success" && <p className="text-center text-red-500">No data available</p>}

        {/* Slider */}
        {galleryData?.length > 0 && (
          <Slider {...settings}>
            {[...galleryData].reverse().map((item, idx) => (
              <div
                key={idx}
                className="p-3 relative cursor-pointer group"
                onClick={() => item.category === "photo" && openModal(idx)}
              >
                {item.category === "photo" ? (
                  <>
                    <img
                      src={item.imageUrl}
                      alt={item.title || `Gallery Image ${idx}`}
                      className="w-full h-64 object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute inset-0 flex justify-center items-center rounded-xl opacity-0 group-hover:opacity-100 bg-black/30 transition">
                      <FaPlus className="text-white w-12 h-12" />
                    </div>
                  </>
                ) : item.category === "video" ? (
                  <video
                    src={item.videoUrl || item.imageUrl}
                    controls
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                ) : null}
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal */}
      {modalOpen && galleryData[currentIndex] && (
        <div
          data-modal="overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-[11000] p-4 sm:p-6"
          onClick={handleOverlayClick}
          onWheel={handleWheel}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white text-4xl cursor-pointer z-[11001]"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Prev */}
          <button
            className="absolute left-5 text-white text-3xl cursor-pointer z-[11001]"
            onClick={prevItem}
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <div className="relative z-40">
            <img
              src={galleryData[currentIndex]?.imageUrl}
              alt={galleryData[currentIndex]?.title || `Gallery Image ${currentIndex}`}
              style={{ transform: `scale(${scale})` }}
              className="max-w-full max-h-[90vh] sm:max-h-[95vh] object-contain rounded-lg"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-5 text-white text-3xl cursor-pointer z-[11001]"
            onClick={nextItem}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

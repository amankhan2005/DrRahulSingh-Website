 // GalleryPage.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
import BreadCumb from "../components/BreadCumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryData } from "../redux/slices/dataslice";
import { useLocation } from "react-router-dom";
import "../index.css"; // global CSS import

function GalleryPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialTab = params.get("tab") || "photo";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const dispatch = useDispatch();
  const { galleryData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  useEffect(() => {
    const tab = new URLSearchParams(location.search).get("tab") || "photo";
    setActiveTab(tab);
  }, [location.search]);

  const filteredData =
    galleryData?.filter((item) => item.category === activeTab) || [];

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
    setCurrentIndex((prev) => (prev + 1) % filteredData.length);
  const prevItem = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredData.length) % filteredData.length
    );

  const handleWheel = (e) =>
    setScale((prev) => Math.min(Math.max(prev - e.deltaY * 0.001, 1), 3));

  const handleOverlayClick = (e) => {
    if (e.target.dataset.modal === "overlay") closeModal();
  };

  return (
    <div>
      {/* BreadCumb */}
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Gallery", link: "/gallery" },
        ]}
        title="Our Recent Memories"
      />

      {/* Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* SCROLLBAR HIDE FIX */}
        <div className="overflow-x-auto scrollbar-hide pr-2 -mr-2">
          <div className="flex gap-4 sm:gap-6 min-w-max">
            {["photo", "video", "news", "rewards"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-2 px-4 font-semibold text-sm sm:text-base border-b-2 ${
                  activeTab === tab
                    ? "text-primary border-primary"
                    : "text-gray-600 border-transparent"
                } transition-colors`}
              >
                {tab === "photo" && "Photo Gallery"}
                {tab === "video" && "Video Gallery"}
                {tab === "news" && "News & Media"}
                {tab === "rewards" && "Awards & Achievements"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {status === "loading" && <p className="mt-6">Loading...</p>}
        {error && <p className="mt-6 text-red-500">{error}</p>}
        {filteredData.length === 0 && (
          <p className="mt-6 text-red-500">No Data Found</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {filteredData.map((item, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer group rounded-lg overflow-hidden shadow-md"
              onClick={() => openModal(idx)}
            >
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/30 transition">
                <FaPlus className="text-white text-3xl" />
              </div>
              {activeTab === "video" ? (
                <video
                  src={item.videoUrl || item.imageUrl}
                  className="w-full aspect-video object-cover rounded-lg"
                  muted
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.src || item.imageUrl}
                  alt={item.title || "Gallery Item"}
                  className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && filteredData[currentIndex] && (
        <div
          data-modal="overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-[11000] p-4 sm:p-6"
          onClick={handleOverlayClick}
          onWheel={activeTab === "photo" ? handleWheel : undefined}
        >
          {/* Close Button */}
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
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          {/* Content */}
          {activeTab === "video" ? (
            <video
              src={
                filteredData[currentIndex].videoUrl ||
                filteredData[currentIndex].imageUrl
              }
              controls
              autoPlay
              className="max-w-full max-h-[90vh] sm:max-h-[95vh] object-contain rounded-lg"
            />
          ) : (
            <img
              src={
                filteredData[currentIndex].src ||
                filteredData[currentIndex].imageUrl
              }
              alt={filteredData[currentIndex].title || "Gallery Item"}
              className="max-w-full max-h-[90vh] sm:max-h-[95vh] object-contain rounded-lg"
            />
          )}

          {/* Next */}
          <button
            className="absolute right-5 text-white text-3xl cursor-pointer"
            onClick={nextItem}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;

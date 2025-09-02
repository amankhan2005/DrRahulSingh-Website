 import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCasesData } from "../redux/slices/dataslice";
import BreadCumb from "../components/BreadCumb";

const Cases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();
  const { casesData, status, error } = useSelector((state) => state.data);

  // Fetch Data
  useEffect(() => {
    dispatch(fetchCasesData());
  }, [dispatch]);

  // Modal Handlers
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // restore scroll
  };

  const nextImage = () => {
    if (casesData?.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % casesData.length);
    }
  };

  const prevImage = () => {
    if (casesData?.length > 0) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + casesData.length) % casesData.length
      );
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Cases", link: "/cases" },
        ]}
        title="Our Recent Cases"
      />

      {/* Status Handling */}
      {status === "loading" && <p className="text-center">Loading cases...</p>}
      {status === "failed" && (
        <p className="text-red-500 text-center">No cases found</p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Cases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 max-w-7xl mx-auto">
        {casesData?.map((caseItem, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer group transition-all"
            onClick={() => openModal(index)}
          >
            {/* Image */}
            <img
              src={caseItem.imageUrl}
              alt={caseItem.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay with Plus Icon */}
            <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <FaPlus className="text-white text-3xl bg-primary/70 rounded-full p-3" />
            </div>

            {/* Card Content */}
            <div className="p-4 bg-white">
              <h3 className="text-lg md:text-xl font-semibold text-center line-clamp-2">
                {caseItem.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && casesData?.length > 0 && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-xl max-w-4xl w-full shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 text-2xl flex items-center justify-center transition"
            >
              ×
            </button>

            {/* Image & Navigation */}
            <div className="flex justify-between items-center gap-4 p-4">
              {/* Prev */}
              <button
                onClick={prevImage}
                className="text-2xl sm:text-3xl bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition"
              >
                &#8592;
              </button>

              {/* Image */}
              <img
                src={casesData[currentImageIndex]?.imageUrl}
                alt={casesData[currentImageIndex]?.title}
                className="max-h-[70vh] w-auto mx-auto object-contain rounded-lg"
              />

              {/* Next */}
              <button
                onClick={nextImage}
                className="text-2xl sm:text-3xl bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition"
              >
                &#8594;
              </button>
            </div>

            {/* Title + Description */}
            <div className="px-6 pb-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mt-2">
                {casesData[currentImageIndex]?.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {casesData[currentImageIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cases;

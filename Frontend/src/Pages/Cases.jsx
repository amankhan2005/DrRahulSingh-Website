 import React, { useEffect, useState, useCallback, useMemo } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCasesData } from "../redux/slices/dataslice";
import BreadCumb from "../components/BreadCumb";

const Cases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();
  const { casesData = [], status, error } = useSelector((state) => state.data);

  // Fetch Data
  useEffect(() => {
    dispatch(fetchCasesData());
  }, [dispatch]);

  // Modal Handlers
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % casesData.length);
  }, [casesData.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + casesData.length) % casesData.length);
  }, [casesData.length]);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const currentCase = useMemo(() => casesData[currentImageIndex], [casesData, currentImageIndex]);

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
      {status === "failed" && <p className="text-red-500 text-center">No cases found</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Cases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 max-w-7xl mx-auto">
        {casesData.map((caseItem, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer group transition-all"
            onClick={() => openModal(index)}
          >
            <img
              src={caseItem.imageUrl}
              alt={caseItem.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <FaPlus className="text-white text-3xl bg-primary/70 rounded-full p-3" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg md:text-xl font-semibold text-center line-clamp-2">
                {caseItem.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentCase && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[11000] p-4">
          <div className="relative bg-white rounded-xl max-w-4xl w-full shadow-2xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center z-[11001] transition"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="flex justify-between items-center gap-4 p-4">
              <button
                onClick={prevImage}
                className="text-2xl sm:text-3xl bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition"
              >
                &#8592;
              </button>

              <img
                src={currentCase.imageUrl}
                alt={currentCase.title}
                className="max-h-[70vh] w-auto mx-auto object-contain rounded-lg z-[11000]"
              />

              <button
                onClick={nextImage}
                className="text-2xl sm:text-3xl bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition"
              >
                &#8594;
              </button>
            </div>

            <div className="px-6 pb-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mt-2">
                {currentCase.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">{currentCase.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cases;

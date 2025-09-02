 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaImage, FaVideo, FaNewspaper, FaAward } from "react-icons/fa";
import GalleryModal from "./GalleryModal";

const GalleryDashboard = ({ showCategoryDropdown = false }) => {
  const [gallery, setGallery] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("photo");
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      setGallery(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/gallery/delete/${id}`);
      setGallery(gallery.filter((item) => item._id !== id));
      Swal.fire("Deleted!", "Item has been removed.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete item.", "error");
    }
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setIsFormOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    fetchGallery();
  };

  const getCount = (category) =>
    gallery.filter((item) => item.category === category).length;

  const filteredGallery = gallery.filter(
    (item) => item.category === activeFilter
  );

  const categories = [
    { key: "photo", label: "Photos", icon: <FaImage /> },
    { key: "video", label: "Videos", icon: <FaVideo /> },
    { key: "news", label: "News", icon: <FaNewspaper /> },
    { key: "rewards", label: "Awards", icon: <FaAward /> },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          📂 Gallery Management
        </h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition text-white px-5 py-2.5 rounded-full shadow-lg"
        >
          + Add Item
        </button>
      </div>

      {/* Counts Section */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`cursor-pointer backdrop-blur-lg bg-white/80 p-6 rounded-2xl shadow-md text-center border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
              activeFilter === cat.key ? "ring-2 ring-indigo-500" : ""
            }`}
          >
            <div className="flex justify-center text-indigo-600 text-3xl mb-3">
              {cat.icon}
            </div>
            <h3 className="text-3xl font-extrabold text-gray-800">
              {getCount(cat.key)}
            </h3>
            <p className="text-gray-500 font-medium">{cat.label}</p>
          </div>
        ))}
      </div>

      {/* Form Modal or Gallery Items */}
      {isFormOpen ? (
        <GalleryModal galleryData={selectedItem} onClose={handleClose} />
      ) : (
        <>
          {filteredGallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredGallery.map((item) => (
                <div
                  key={item._id}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all overflow-hidden"
                >
                  {/* Image */}
                  <img
                    src={item.imageUrl}
                    alt="gallery"
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />

                  {/* Info */}
                  <div className="p-5 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.postedBy}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Category:{" "}
                      <span className="font-medium capitalize">
                        {item.category}
                      </span>
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <button
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium shadow transition"
                        onClick={() => handleEdit(item)}
                      >
                        ✏ Edit
                      </button>
                      <button
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium shadow transition"
                        onClick={() => handleDelete(item._id)}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500 text-lg bg-white/80 backdrop-blur-lg rounded-2xl shadow">
              No {activeFilter}s uploaded yet 📂
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GalleryDashboard;

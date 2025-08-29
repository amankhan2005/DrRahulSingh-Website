 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import GalleryModal from "./GalleryModal";

const GalleryDashboard = ({ showCategoryDropdown = false }) => {
  const [gallery, setGallery] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
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
      Swal.fire("Deleted!", "Photo has been removed.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete photo.", "error");
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

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Gallery Management</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-full shadown"
        >
          + Add Photo
        </button>
      </div>

      {/* Form Modal */}
      {isFormOpen ? (
        <GalleryModal galleryData={selectedItem} onClose={handleClose} />
      ) : (
        <>
          {gallery.filter((item) => item.category === "photo").length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gallery
                .filter((item) => item.category === "photo")
                .map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col overflow-hidden"
                  >
                    {/* Image */}
                    <img
                      src={item.imageUrl}
                      alt="gallery"
                      className="w-full h-56 object-cover"
                    />

                    {/* Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.postedBy}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Category: {item.category}
                      </p>

                      {/* Actions */}
                      <div className="mt-auto flex gap-2">
                        <button
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium transition"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500 text-lg bg-white rounded-xl shadow">
              No photos uploaded yet 📷
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GalleryDashboard;

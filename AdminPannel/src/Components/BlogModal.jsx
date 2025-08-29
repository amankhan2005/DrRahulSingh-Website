 import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";

const BlogModal = ({ blogData, onClose }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    title: "",
    postedBy: "",
    description: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  // Populate form if blogData exists
  useEffect(() => {
    if (blogData) {
      setFormData({
        title: blogData.title || "",
        postedBy: blogData.postedBy || "",
        description: blogData.description || "",
        imageUrl: blogData.imageUrl || "",
      });
    }
  }, [blogData]);

  // Upload image to Cloudinary
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "hope-hospital");
    uploadData.append("folder", "hope-hospital/blog");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/diz0v7rws/image/upload",
        uploadData
      );
      setFormData((prev) => ({ ...prev, imageUrl: response.data.secure_url }));
      Swal.fire("Success", "Image uploaded successfully!", "success");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Image upload failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, postedBy, description, imageUrl } = formData;
    if (!title || !postedBy || !description || !imageUrl) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      const response = blogData
        ? await axios.put(`${apiUrl}/blog/update/${blogData._id}`, formData)
        : await axios.post(`${apiUrl}/blog/save`, formData);

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving blog:", error);
      Swal.fire("Error", "Failed to save blog!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-2 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">{blogData ? "Update" : "Add"} Blog</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 rounded shadow-md w-full max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="postedBy" className="block text-sm font-medium">
                  Posted By
                </label>
                <input
                  type="text"
                  id="postedBy"
                  value={formData.postedBy}
                  className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, postedBy: e.target.value }))
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={uploadImage}
                />
                {loading && (
                  <p className="text-blue-500 text-sm mt-2">Uploading...</p>
                )}
                {formData.imageUrl && (
                  <img
                    src={formData.imageUrl}
                    alt="Uploaded"
                    className="mt-2 w-20 h-20 object-cover"
                  />
                )}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {blogData ? "Update" : "Save"} Blog
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-400 text-white py-2 px-6 rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="h-full">
                <label htmlFor="description" className="block text-sm font-medium">
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, description: value }))
                  }
                  className="w-full h-64 mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;

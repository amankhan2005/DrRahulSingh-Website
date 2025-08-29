import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const NewsModal = ({ newsData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    postedBy: "",
    imageUrl: "",
    category: "news",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (newsData) setFormData(newsData);
  }, [newsData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hope-hospital");
    data.append("folder", "hope-hospital/news");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/diz0v7rws/image/upload",
        data
      );
      setFormData({ ...formData, imageUrl: res.data.secure_url });
      Swal.fire("Success", "News image uploaded!", "success");
    } catch (err) {
      Swal.fire("Error", "Upload failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.postedBy || !formData.title || !formData.imageUrl) {
      Swal.fire("Warning", "All fields required!", "warning");
      return;
    }

    try {
      const res = newsData
        ? await axios.put(`${api}/gallery/update/${newsData._id}`, formData)
        : await axios.post(`${api}/gallery/save`, formData);
      Swal.fire("Success", res.data.message, "success");
      onClose();
    } catch (err) {
      Swal.fire("Error", "Failed to save news!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">{newsData ? "Edit" : "Add"} News</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="News Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="postedBy"
            placeholder="Posted By"
            value={formData.postedBy}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input type="file" accept="image/*" onChange={uploadImage} />
          {loading && <p className="text-blue-500">Uploading...</p>}
          {formData.imageUrl && (
            <img src={formData.imageUrl} alt="preview" className="w-32 h-32 mt-2" />
          )}
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {newsData ? "Update" : "Save"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const VideoModal = ({ videoData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    postedBy: "",
    imageUrl: "",
    category: "video",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videoData) {
      setFormData(videoData);
    }
  }, [videoData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadVideo = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hope-hospital");
    data.append("folder", "hope-hospital/video");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/diz0v7rws/video/upload",
        data
      );
      setFormData({ ...formData, imageUrl: res.data.secure_url });
      Swal.fire("Success", "Video uploaded successfully!", "success");
    } catch (error) {
      Swal.fire("Error", "Video upload failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.postedBy || !formData.imageUrl) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }
    try {
      const res = videoData
        ? await axios.put(`${api}/gallery/update/${videoData._id}`, formData)
        : await axios.post(`${api}/gallery/save`, formData);
      Swal.fire("Success", res.data.message, "success");
      onClose();
    } catch (error) {
      Swal.fire("Error", "Failed to save video!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {videoData ? "Edit" : "Add"} Video
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
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
          <input type="file" accept="video/*" onChange={uploadVideo} />
          {loading && <p className="text-blue-500">Uploading...</p>}
          {formData.imageUrl && (
            <video
              src={formData.imageUrl}
              className="w-40 h-32 mt-2"
              controls
            />
          )}
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {videoData ? "Update" : "Save"} Video
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

export default VideoModal;

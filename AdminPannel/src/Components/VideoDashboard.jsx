 import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import VideoModal from "./VideoModal";

const VideoDashboard = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      const videoData = res.data.filter((v) => v.category === "video");
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching videos:", error);
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
      setVideos(videos.filter((v) => v._id !== id));
      Swal.fire("Deleted!", "Video has been removed.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete video.", "error");
    }
  };

  const handleAdd = () => {
    setSelectedVideo(null);
    setIsFormOpen(true);
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    fetchVideos();
  };

  return (
    <div className="min-h-screen p-6  bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      {/* Subtle pattern effect */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-10 pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">
            🎥 Video Management
          </h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-full shadow-lg"
          >
            + Add Video
          </button>
        </div>

        {/* Form Modal */}
        {isFormOpen ? (
          <VideoModal videoData={selectedVideo} onClose={handleClose} />
        ) : (
          <>
            {videos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videos.map((v) => (
                  <div
                    key={v._id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden backdrop-blur-sm bg-opacity-90"
                  >
                    {/* Video Preview */}
                    <video
                      src={v.imageUrl}
                      className="w-full h-56 object-cover"
                      controls
                    />

                    {/* Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                        {v.title || "Untitled Video"}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Posted by {v.postedBy || "Unknown"}
                      </p>

                      {/* Actions */}
                      <div className="mt-auto flex gap-2">
                        <button
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium transition"
                          onClick={() => handleEdit(v)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
                          onClick={() => handleDelete(v._id)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 text-lg bg-white rounded-xl shadow-md backdrop-blur-sm bg-opacity-90">
                No videos uploaded yet 🎬
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoDashboard;

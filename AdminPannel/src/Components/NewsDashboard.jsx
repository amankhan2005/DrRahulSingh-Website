 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Plus, Edit, Trash2 } from "lucide-react"; // Modern icons
import NewsModal from "./NewsModal";

const NewsDashboard = () => {
  const [news, setNews] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      const newsData = res.data.filter((v) => v.category === "news");
      setNews(newsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This news will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/gallery/delete/${id}`);
      setNews(news.filter((n) => n._id !== id));
      Swal.fire("Deleted!", "News has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete news.", "error");
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
    fetchNews();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📰 News Management</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-full shadow"
        >
          <Plus size={18} /> Add News
        </button>
      </div>

      {/* Modal */}
      {isFormOpen && <NewsModal newsData={selectedItem} onClose={handleClose} />}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border border-gray-200">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wide">
              <th className="px-4 py-3">Thumbnail</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Posted By</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((n, index) => (
              <tr
                key={n._id}
                className={`hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-3">
                  <img
                    src={n.imageUrl}
                    className="w-20 h-20 rounded-lg object-cover border"
                    alt="news"
                  />
                </td>
                <td className="px-4 py-3 font-medium text-gray-800">{n.title}</td>
                <td className="px-4 py-3 text-gray-600">{n.postedBy}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition"
                    onClick={() => handleEdit(n)}
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                    onClick={() => handleDelete(n._id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}

            {news.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-500 py-6 italic"
                >
                  No news uploaded yet 📭
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsDashboard;

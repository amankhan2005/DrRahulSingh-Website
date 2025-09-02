 // src/Components/AwardsDashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Plus, Edit, Trash2, Award } from "lucide-react"; // icons
import AwardsModal from "./AwardsModal";

const AwardsDashboard = () => {
  const [awards, setAwards] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchAwards();
  }, []);

  const fetchAwards = async () => {
    try {
      const res = await axios.get(`${api}/gallery/getall`);
      const awardsData = res.data.filter((item) => item.category === "rewards");
      setAwards(awardsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/gallery/delete/${id}`);
      setAwards(awards.filter((a) => a._id !== id));
      Swal.fire("Deleted!", "Award has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete award.", "error");
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
    fetchAwards();
  };

  return (
    <div className="p-6  bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          Awards Management
        </h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-full shadow"
        >
          <Plus className="w-4 h-4" /> Add Award
        </button>
      </div>

      {/* Modal */}
      {isFormOpen && (
        <AwardsModal awardData={selectedItem} onClose={handleClose} />
      )}

      {/* Table */}
      <div className="overflow-x-auto  bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wide">
              <th className="p-3 w-32 text-center">Thumbnail</th>
              <th className="p-3">Posted By</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((a) => (
              <tr
                key={a._id}
                className="hover:bg-gray-50 transition border-t border-gray-100"
              >
                <td className="p-3 text-center">
                  <img
                    src={a.imageUrl}
                    className="w-20 h-20 object-cover rounded-lg mx-auto shadow-sm"
                    alt="award"
                  />
                </td>
                <td className="p-3 font-medium text-gray-800">
                  {a.postedBy}
                </td>
                <td className="p-3 flex justify-center gap-3">
                  <button
                    className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-full text-xs shadow"
                    onClick={() => handleEdit(a)}
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs shadow"
                    onClick={() => handleDelete(a._id)}
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>
            ))}

            {awards.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center p-8 text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <Award className="w-10 h-10 text-gray-400" />
                    <p className="text-sm">No awards uploaded yet!</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AwardsDashboard;

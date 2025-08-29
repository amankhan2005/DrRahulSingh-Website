 
 import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CaseModal from "./CaseModal";

const CaseDashboard = () => {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await axios.get(`${api}/case/getall`);
      setCases(response.data);
    } catch (error) {
      console.error("Error fetching case data:", error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/case/delete/${id}`);
      setCases(cases.filter((c) => c._id !== id));
      Swal.fire("Deleted!", "The case has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting case:", error);
      Swal.fire("Error!", "Failed to delete case.", "error");
    }
  };

  const handleEdit = (c) => {
    setSelectedCase(c);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedCase(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchCases();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Case Management</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow transition"
        >
          + Add New Case
        </button>
      </div>

      {/* Modal */}
      {isFormOpen ? (
        <CaseModal caseData={selectedCase} onClose={handleCloseForm} />
      ) : (
        <>
          {cases?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cases.map((c) => (
                <div
                  key={c._id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col overflow-hidden"
                >
                  <img
                    src={c.imageUrl}
                    alt={c.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 text-center">
                      {c.description?.slice(0, 60)}...
                    </p>

                    {/* Actions */}
                    <div className="mt-auto flex gap-2">
                      <button
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium transition"
                        onClick={() => handleEdit(c)}
                      >
                        Edit
                      </button>
                      <button
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
                        onClick={() => handleDelete(c._id)}
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
              No cases uploaded yet 📂
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CaseDashboard;

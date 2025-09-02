 import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CaseModal = ({ caseData, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (caseData) {
      setFormData({
        title: caseData.title || "",
        imageUrl: caseData.imageUrl || "",
      });
    }
  }, [caseData]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "hope-hospital");
    uploadData.append("folder", "hope-hospital/case");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/diz0v7rws/image/upload`,
        uploadData
      );
      setFormData((prev) => ({ ...prev, imageUrl: response.data.secure_url }));
      Swal.fire("Success", "Image Uploaded Successfully!", "success");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Image Upload Failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.imageUrl) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      const response = caseData
        ? await axios.put(`${api}/case/update/${caseData._id}`, formData)
        : await axios.post(`${api}/case/save`, formData);

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving case:", error);
      Swal.fire("Error", "Failed to save case!", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-normal mb-4">{caseData ? "Update" : "Add"} Case</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={formData.title}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input type="file" className="mt-2" onChange={uploadImage} />
            {loading && <p className="text-blue-500 text-sm">Uploading...</p>}
            {formData.imageUrl && <img src={formData.imageUrl} alt="Uploaded" className="mt-2 w-20 h-20 object-cover" />}
          </div>
          <div className="flex justify-between">
            <button disabled={loading} type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              {caseData ? "Update" : "Save"} Case
            </button>
            <button type="button" className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseModal;

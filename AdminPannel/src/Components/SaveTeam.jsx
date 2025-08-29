import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const TeamForm = ({ member, onClose }) => {
  const api = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    department: "",
    degree: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        specialty: member.specialty,
        department: member.department || "",
        degree: member.degree,
        imageUrl: member.imageUrl,
      });
    }
  }, [member]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "hope-hospital");
    uploadData.append("folder", "hope-hospital/team");

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
    console.log(formData);
    if (
      !formData.name ||
      !formData.specialty ||
      !formData.department ||
      !formData.degree ||
      !formData.imageUrl
    ) {
      Swal.fire("Warning", "All fields are required!", "warning");
      return;
    }

    try {
      const response = member
        ? await axios.put(`${api}/team/update/${member._id}`, formData)
        : await axios.post(`${api}/team/save`, formData);

      Swal.fire("Success", response.data.message, "success");
      onClose();
    } catch (error) {
      console.error("Error saving team member:", error);
      Swal.fire("Error", "Failed to save team member!", "error");
    }
  };

  const departments = [
    "Critical Care & Anesthesia",
    "Cardiology",
    "Ophthalmology",
    "Dermatology",
    "Obstetrics & Gynecology",
    "Neurology",
    "General Surgery",
    "Orthopedic",
    "Pediatric Care",
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {member ? "Update" : "Add"} Team Member
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Specialty</label>
            <input
              type="text"
              value={formData.specialty}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, specialty: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Degree</label>
            <input
              type="text"
              value={formData.degree}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, degree: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Department</label>
            <select
              value={formData.department}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, department: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="" disabled>
                Select Department
              </option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
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
          <div className="flex justify-between">
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              {member ? "Update" : "Save"} Team Member
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;

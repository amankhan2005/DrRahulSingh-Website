 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaCalendarAlt,
  FaUserMd,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaHospital,
} from "react-icons/fa";

const AppointmentData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadCount, setLoadCount] = useState(6);

  const api = import.meta.env.VITE_API_URL;

  // Fetch appointments
  const fetchAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${api}/appointment/getall`);
      setAppointments(response.data.data || []);
    } catch (err) {
      setError("Error fetching appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Delete appointment
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This appointment will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/appointment/delete/${id}`);
      fetchAppointments();
      Swal.fire("Deleted!", "The appointment has been removed.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to delete appointment.", "error");
    }
  };

  // Approve appointment
  const handleApprove = async (id) => {
    const result = await Swal.fire({
      title: "Approve this appointment?",
      text: "An email will be sent to the patient.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.post(`${api}/appointment/approve/${id}`);
      fetchAppointments();
      Swal.fire("Approved!", "The appointment has been approved.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to approve appointment.", "error");
    }
  };

  // Load more appointments
  const onMore = () => {
    setLoadCount((prevCount) => Math.min(prevCount + 6, appointments.length));
  };

  if (loading)
    return (
      <p className="text-center text-blue-600 mt-6 animate-pulse">
        Loading appointments...
      </p>
    );

  if (error)
    return <p className="text-center text-red-500 mt-6 font-medium">{error}</p>;

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-900 border-b-2 border-blue-200 pb-3">
        🏥 Patient Appointments
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {appointments.length === 0 && (
          <p className="col-span-full text-center text-gray-500 py-6">
            No appointments available.
          </p>
        )}

        {appointments.slice(0, loadCount).map((appointment) => (
          <div
            key={appointment._id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-5 border border-gray-100 transition-all duration-300"
          >
            {/* Approved Watermark */}
            {appointment.status?.toLowerCase() === "approved" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-5xl sm:text-6xl font-extrabold text-green-400 opacity-10 rotate-[-30deg] select-none">
                  APPROVED
                </span>
              </div>
            )}

            {/* Header */}
            <div className="flex justify-between items-center mb-4 relative z-10">
              <span className="font-semibold text-lg text-blue-900 flex items-center gap-2">
                <FaUserMd className="text-blue-600" /> {appointment.name}
              </span>
              <div className="flex space-x-2">
                <button
                  className={`px-3 sm:px-4 py-1 rounded-lg text-sm font-medium shadow-md transition-all ${
                    appointment.status?.toLowerCase() === "approved"
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                  onClick={() => handleApprove(appointment._id)}
                  disabled={appointment.status?.toLowerCase() === "approved"}
                >
                  {appointment.status?.toLowerCase() === "approved"
                    ? "Approved"
                    : "Approve"}
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-1 rounded-lg text-sm shadow-md"
                  onClick={() => handleDelete(appointment._id)}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="text-gray-700 text-sm space-y-2 relative z-10">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" /> {appointment.number}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" /> {appointment.email}
              </p>
              <p className="flex items-center gap-2">
                <FaHospital className="text-blue-500" />{" "}
                {appointment.department}
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" /> {appointment.date}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-blue-500" /> {appointment.time}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    appointment.status?.toLowerCase() === "approved"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {appointment.status || "Pending"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {loadCount < appointments.length && (
        <div className="text-center mt-10">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition"
            onClick={onMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentData;

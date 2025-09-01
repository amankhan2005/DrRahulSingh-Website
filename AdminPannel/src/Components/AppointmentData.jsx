 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AppointmentData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadCount, setLoadCount] = useState(5);

  const api = import.meta.env.VITE_API_URL;

  // Fetch appointments
  const fetchAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${api}/appointment/getall`);
      setAppointments(response.data.data || []);
    } catch (err) {
      setError("Error fetching appointments");
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
      text: "This appointment will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/appointment/delete/${id}`);
      fetchAppointments();
      Swal.fire("Deleted!", "The appointment has been removed.", "success");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      Swal.fire("Error!", "Failed to delete appointment.", "error");
    }
  };

  // Approve appointment
  const handleApprove = async (id) => {
    const result = await Swal.fire({
      title: "Approve this appointment?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.post(`${api}/appointment/approve/${id}`);
      fetchAppointments();
      Swal.fire(
        "Approved!",
        "The appointment has been approved and email sent.",
        "success"
      );
    } catch (error) {
      console.error("Error approving appointment:", error);
      Swal.fire("Error!", "Failed to approve appointment.", "error");
    }
  };

  // Load more appointments
  const onMore = () => {
    setLoadCount((prevCount) => Math.min(prevCount + 5, appointments.length));
  };

  if (loading) return <p className="text-center text-gray-500 mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Recent Patient Appointments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.length === 0 && (
          <p className="col-span-full text-center text-red-500 py-6">
            No Appointments Yet!
          </p>
        )}

        {appointments.slice(0, loadCount).map((appointment) => (
          <div
            key={appointment._id}
            className="relative bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-lg transition"
          >
            {/* Watermark */}
            {appointment.status?.toLowerCase() === "approved" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-6xl font-bold text-gray-300 opacity-20 rotate-[-30deg] select-none">
                  APPROVED
                </span>
              </div>
            )}

            {/* Card content */}
            <div className="flex justify-between items-center mb-2 relative z-10">
              <span className="font-semibold text-gray-700">{appointment.name}</span>
              <div className="space-x-2">
                <button
                  className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                    appointment.status?.toLowerCase() === "approved"
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed shadow-inner"
                      : "bg-green-500 hover:bg-green-600 text-white shadow-md"
                  }`}
                  onClick={() => handleApprove(appointment._id)}
                  disabled={appointment.status?.toLowerCase() === "approved"}
                >
                  {appointment.status?.toLowerCase() === "approved" ? "Approved" : "Approve"}
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition text-sm shadow-md"
                  onClick={() => handleDelete(appointment._id)}
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="text-gray-600 text-sm space-y-1 relative z-10">
              <p><strong>Phone:</strong> {appointment.number}</p>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Department:</strong> {appointment.department}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    appointment.status?.toLowerCase() === "approved"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }
                >
                  {appointment.status || "Pending"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {loadCount < appointments.length && (
        <div className="text-center mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition"
            onClick={onMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentData;

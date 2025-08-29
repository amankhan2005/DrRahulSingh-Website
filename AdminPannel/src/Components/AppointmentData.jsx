 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AppointmentData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadCount, setLoadCount] = useState(5);

  const api = import.meta.env.VITE_API_URL;

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${api}/inquiry/getall`);
      setAppointments(response.data);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/inquiry/delete/${id}`);
      fetchAppointments();
      Swal.fire("Deleted!", "The inquiry has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      Swal.fire("Error!", "Failed to delete inquiry.", "error");
    }
  };

  const onMore = () => {
    setLoadCount((prevCount) => Math.min(prevCount + 5, appointments.length));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Recent Patient Appointments
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Department</th>
              <th className="border px-4 py-2 text-left">Requested Doctor</th>
              <th className="border px-4 py-2 text-left">Patient Name</th>
              <th className="border px-4 py-2 text-left">Mobile No</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Time</th>
              <th className="border px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.slice(0, loadCount).reverse().map((appointment) => (
              <tr key={appointment._id} className="hover:bg-gray-50 transition">
                <td className="border px-4 py-3">{appointment.department}</td>
                <td className="border px-4 py-3">{appointment.requestedDoctor}</td>
                <td className="border px-4 py-3">{appointment.patientName}</td>
                <td className="border px-4 py-3">{appointment.mobileNo}</td>
                <td className="border px-4 py-3">{appointment.email}</td>
                <td className="border px-4 py-3">{appointment.date}</td>
                <td className="border px-4 py-3">{appointment.time}</td>
                <td className="border px-4 py-3 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                    onClick={() => handleDelete(appointment._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {appointments.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center text-red-500 py-6">
                  No Data Yet!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {loadCount < appointments.length && (
        <div className="text-center mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition"
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

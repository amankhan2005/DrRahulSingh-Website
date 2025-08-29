 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const InquiryData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadcount, setLoadCount] = useState();
  const [message, setMessage] = useState(false);
  const [Id, setId] = useState();

  const api = import.meta.env.VITE_API_URL;

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${api}/inquiry-msg/getall`);
      setAppointments(response.data);
      setLoadCount(5);
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
    return <p className="text-gray-600 text-center">Loading inquiries...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This inquiry will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/inquiry-msg/delete/${id}`);
      fetchAppointments();
      Swal.fire("Deleted!", "The inquiry has been removed.", "success");
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      Swal.fire("Error!", "Failed to delete inquiry.", "error");
    }
  };

  const onMore = () => {
    setLoadCount((prevCount) => Math.min(prevCount + 5, appointments.length));
  };

  const onRead = (id) => {
    setId(id);
    if (id === Id) {
      setMessage((pre) => !pre);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Recent Patient Inquiries
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">Mobile No</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {appointments
              ?.slice(0, loadcount)
              .reverse()
              ?.map((appointment, index) => (
                <tr
                  key={appointment._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {appointment.department}
                  </td>
                  <td className="px-6 py-4">{appointment.patientName}</td>
                  <td className="px-6 py-4">{appointment.mobileNo}</td>
                  <td className="px-6 py-4">{appointment.email}</td>
                  <td className="px-6 py-4 max-w-xs">
                    <span
                      className={`${
                        message && Id === appointment._id ? "" : "line-clamp-1"
                      }`}
                    >
                      {appointment.message}
                    </span>
                    <button
                      className="ml-2 text-xs font-medium text-blue-600 hover:text-blue-800"
                      onClick={() => onRead(appointment._id)}
                    >
                      {message && Id === appointment._id
                        ? "Show Less"
                        : "Read More"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                      onClick={() => handleDelete(appointment._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Show More */}
      <div
        className={`text-center mt-6 ${
          loadcount === appointments.length && "hidden"
        }`}
      >
        <button
          className="cursor-pointer rounded-lg text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 font-semibold shadow-md transition"
          onClick={onMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default InquiryData;

 import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt, FaEnvelopeOpenText, FaUserMd } from "react-icons/fa";

const InquiryData = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadCount, setLoadCount] = useState(5);
  const [expandedMessage, setExpandedMessage] = useState(null);

  const api = import.meta.env.VITE_API_URL;

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${api}/inquiry-msg/getall`);
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
      Swal.fire("Error!", "Failed to delete inquiry.", "error");
    }
  };

  const onMore = () => {
    setLoadCount((prev) => Math.min(prev + 5, appointments.length));
  };

  const toggleMessage = (id) => {
    setExpandedMessage((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-lg text-gray-600 animate-pulse">Fetching inquiries...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className=" bg-[#2e6294] p-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaUserMd className="text-white text-2xl" />
          Patient Inquiries
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Manage and respond to recent patient inquiries
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto p-6">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-50 text-gray-600 uppercase text-xs tracking-wider">
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
              ?.slice(0, loadCount)
              .reverse()
              ?.map((appointment, index) => (
                <tr
                  key={appointment._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50/40"
                  } hover:bg-blue-100/50 transition`}
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
                        expandedMessage === appointment._id ? "" : "line-clamp-1"
                      }`}
                    >
                      {appointment.message}
                    </span>
                    <button
                      className="ml-2 text-xs font-medium text-blue-600 hover:text-blue-800"
                      onClick={() => toggleMessage(appointment._id)}
                    >
                      {expandedMessage === appointment._id
                        ? "Show Less"
                        : "Read More"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="flex items-center gap-2 justify-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                      onClick={() => handleDelete(appointment._id)}
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden p-4 space-y-4">
        {appointments?.slice(0, loadCount).reverse()?.map((appointment) => (
          <div
            key={appointment._id}
            className="bg-white border rounded-lg shadow-sm p-4 space-y-2"
          >
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Department:</span>{" "}
              {appointment.department}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Patient:</span>{" "}
              {appointment.patientName}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Mobile:</span>{" "}
              {appointment.mobileNo}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Email:</span>{" "}
              {appointment.email}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Message:</span>{" "}
              {expandedMessage === appointment._id
                ? appointment.message
                : `${appointment.message.slice(0, 50)}...`}
              <button
                className="ml-2 text-xs font-medium text-blue-600 hover:text-blue-800"
                onClick={() => toggleMessage(appointment._id)}
              >
                {expandedMessage === appointment._id ? "Show Less" : "Read More"}
              </button>
            </p>
            <button
              className="flex items-center gap-2 justify-center w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
              onClick={() => handleDelete(appointment._id)}
            >
              <FaTrashAlt /> Delete
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {appointments.length === 0 && (
        <div className="text-center py-10">
          <FaEnvelopeOpenText className="mx-auto text-4xl text-blue-400 mb-2" />
          <p className="text-gray-500">No inquiries found</p>
        </div>
      )}

      {/* Show More */}
      {loadCount < appointments.length && (
        <div className="text-center pb-6">
          <button
            className="cursor-pointer rounded-lg text-white bg-[#2e6294] hover:bg-blue-700 px-5 py-2 font-semibold shadow-md transition"
            onClick={onMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default InquiryData;

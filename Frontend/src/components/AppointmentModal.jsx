 import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/slices/appointmentSlice";
import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const departments = [
  "General",
  "Neuro Critical Care & Anesthesia",
  "Spine Surgery & Spine Care",
  "Peripheral Nerve Surgery & Care",
];

const AppointmentModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.appointments);

  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    department: "General",
    date: null,
    time: "09:00",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "number" && e.target.value.length > 10) return;
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const numberRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name || !form.number || !form.email || !form.date || !form.time)
      return "⚠️ Please fill all fields";
    if (!nameRegex.test(form.name)) return "⚠️ Name must be at least 2 letters";
    if (!numberRegex.test(form.number)) return "⚠️ Enter a valid 10-digit number";
    if (!emailRegex.test(form.email)) return "⚠️ Enter a valid email address";

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setMessage(errorMsg);
      return;
    }

    setMessage("⏳ Booking your appointment...");
    dispatch(createAppointment(form))
      .unwrap()
      .then(() => {
        setMessage("✅ Appointment booked successfully!");
        setForm({
          name: "",
          number: "",
          email: "",
          department: "General",
          date: null,
          time: "09:00",
        });
      })
      .catch(() => setMessage("❌ Failed to book appointment"));
  };

  useEffect(() => {
    if (message.startsWith("✅")) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[11000] transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[11001] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-full sm:h-auto sm:max-h-[90vh] p-6 sm:p-8 relative text-gray-800 flex flex-col overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors z-[11002]"
            aria-label="Close Modal"
          >
            <FaTimes className="text-2xl" />
          </button>

          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Book an Appointment
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm md:text-base">
            Fill out the form below to book a consultation with our experts.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition"
            />

            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition"
            />

            {/* Date and Time Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <DatePicker
                selected={form.date}
                onChange={(date) => setForm((prev) => ({ ...prev, date }))}
                className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition"
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
              />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition"
              />
            </div>
            
            {/* Department Dropdown */}
            <Listbox
              value={form.department}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, department: value }))
              }
            >
              <div className="relative">
                <Listbox.Button className="relative w-full border border-gray-300 bg-gray-50 p-3 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition cursor-pointer">
                  {form.department}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaChevronDown className="text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto z-[11002] focus:outline-none">
                  {departments.map((dept) => (
                    <Listbox.Option
                      key={dept}
                      value={dept}
                      className={({ active }) =>
                        `cursor-pointer select-none p-3 text-gray-800 ${
                          active ? "bg-blue-100" : ""
                        }`
                      }
                    >
                      {dept}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4 transition-all shadow-md hover:shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed font-semibold"
            >
              {status === "loading" ? "Booking..." : "Book Appointment"}
            </button>
          </form>

          {/* Messages */}
          {message && (
            <div
              className={`mt-4 text-center font-medium ${
                message.startsWith("✅")
                  ? "text-green-600"
                  : message.startsWith("⏳")
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}
          {error && (
            <div className="mt-2 text-red-600 text-center">{error}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;

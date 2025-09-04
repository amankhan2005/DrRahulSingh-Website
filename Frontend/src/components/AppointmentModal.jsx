 import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/slices/appointmentSlice";
import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTimes, FaChevronDown } from "react-icons/fa";

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

  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState("");

  // Regex patterns
  const regex = {
    name: /^[A-Za-z\s]{2,}$/,
    number: /^[0-9]{10}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value) return "⚠️ Name is required";
        if (!regex.name.test(value))
          return "⚠️ Name must be at least 2 letters";
        break;
      case "number":
        if (!value) return "⚠️ Mobile number is required";
        if (!regex.number.test(value))
          return "⚠️ Enter a valid 10-digit number";
        break;
      case "email":
        if (!value) return "⚠️ Email is required";
        if (!regex.email.test(value))
          return "⚠️ Enter a valid email address";
        break;
      case "date":
        if (!value) return "⚠️ Date is required";
        break;
      case "time":
        if (!value) return "⚠️ Time is required";
        break;
      default:
        return null;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number" && value.length > 10) return;
    setForm((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
    const errorMsg = validateField("date", date);
    setFieldErrors((prev) => ({ ...prev, date: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const errorMsg = validateField(key, form[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setMessage("⚠️ Please fix errors before submitting");
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
        setFieldErrors({});
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
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg sm:h-auto max-h-[90vh] p-6 sm:p-8 relative text-gray-800 flex flex-col">
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

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 pr-2">
            <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className={`w-full border ${
                    fieldErrors.name ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition`}
                />
                {fieldErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <input
                  type="text"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  className={`w-full border ${
                    fieldErrors.number ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition`}
                />
                {fieldErrors.number && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.number}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  className={`w-full border ${
                    fieldErrors.email ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 transition`}
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <DatePicker
                    selected={form.date}
                    onChange={handleDateChange}
                    className={`w-full border ${
                      fieldErrors.date ? "border-red-500" : "border-gray-300"
                    } bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition`}
                    placeholderText="Select Date"
                    dateFormat="dd/MM/yyyy"
                  />
                  {fieldErrors.date && (
                    <p className="text-red-500 text-sm mt-1">{fieldErrors.date}</p>
                  )}
                </div>
                <div>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full border ${
                      fieldErrors.time ? "border-red-500" : "border-gray-300"
                    } bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 transition`}
                  />
                  {fieldErrors.time && (
                    <p className="text-red-500 text-sm mt-1">{fieldErrors.time}</p>
                  )}
                </div>
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

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg mt-4 transition-all shadow-md hover:shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed font-semibold"
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
            {error && <div className="mt-2 text-red-600 text-center">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;

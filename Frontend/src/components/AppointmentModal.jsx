 import React, { useState, useEffect } from "react";
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

// Helper to format date for backend (yyyy-mm-dd)
const formatDateToYYYYMMDD = (d) => {
  if (!d) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// read from .env (make sure .env.local has VITE_BACKENDURL)
const BACKEND_URL = import.meta.env.VITE_BACKENDURL || "http://localhost:3000";

const AppointmentModal = ({ onClose }) => {
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
  const [loading, setLoading] = useState(false);

  // Basic regex for validation
  const regex = {
    name: /^[A-Za-z\s]{2,}$/,
    number: /^[0-9]{10}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };

  const validateField = (name, value) => {
    const errors = {
      name: !value ? "Name required" : !regex.name.test(value) ? "Min 2 letters" : null,
      number: !value ? "Number required" : !regex.number.test(value) ? "10 digits only" : null,
      email: !value ? "Email required" : !regex.email.test(value) ? "Invalid email" : null,
      date: !value ? "Date required" : null,
      time: !value ? "Time required" : null,
      department: !value ? "Select department" : null,
    };
    return errors[name];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 10) return;
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, cleaned) }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
    setFieldErrors((prev) => ({ ...prev, date: validateField("date", date) }));
  };

  // ✅ Submit form directly to backend using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setMessage("⚠️ Please fix highlighted errors");
      return;
    }

    const payload = {
      ...form,
      date: formatDateToYYYYMMDD(form.date),
    };

    try {
      setLoading(true);
      setMessage("⏳ Booking appointment...");
      const res = await fetch(`${BACKEND_URL}/appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to book appointment");

      setMessage("✅ Appointment booked successfully!");
      setForm({
        name: "",
        number: "",
        email: "",
        department: "General",
        date: null,
        time: "09:00",
      });

      setTimeout(() => onClose(), 1800);
    } catch (err) {
      console.error("Booking Error:", err);
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      {/* overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[11000]" onClick={onClose} />

      {/* modal */}
      <div className="fixed inset-0 z-[11001] flex items-center justify-center p-3">
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[85vh] relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-primary p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-1">Book Appointment</h2>
            <p className="text-white/80 text-sm">Quick and easy consultation booking</p>
          </div>

          {/* Form */}
          <div className="overflow-y-auto max-h-[calc(85vh-120px)] p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full border-2 ${
                    fieldErrors.name ? "border-red-400" : "border-gray-200"
                  } bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition`}
                />
                {fieldErrors.name && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  className={`w-full border-2 ${
                    fieldErrors.number ? "border-red-400" : "border-gray-200"
                  } bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition`}
                />
                {fieldErrors.number && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.number}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full border-2 ${
                    fieldErrors.email ? "border-red-400" : "border-gray-200"
                  } bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition`}
                />
                {fieldErrors.email && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.email}</p>}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <DatePicker
                    selected={form.date}
                    onChange={handleDateChange}
                    className={`w-full border-2 ${
                      fieldErrors.date ? "border-red-400" : "border-gray-200"
                    } bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition`}
                    placeholderText="Select Date"
                    dateFormat="dd/MM/yyyy"
                    minDate={today}
                  />
                  {fieldErrors.date && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.date}</p>}
                </div>
                <div>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full border-2 ${
                      fieldErrors.time ? "border-red-400" : "border-gray-200"
                    } bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition`}
                  />
                  {fieldErrors.time && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.time}</p>}
                </div>
              </div>

              {/* Department */}
              <Listbox
                value={form.department}
                onChange={(value) => setForm((prev) => ({ ...prev, department: value }))}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-primary transition cursor-pointer">
                    <span className="block truncate">{form.department}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaChevronDown className="text-gray-400 text-sm" />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-2 w-full bg-white border-2 border-gray-100 rounded-xl shadow-xl max-h-48 overflow-auto z-[11002] focus:outline-none">
                    {departments.map((dept) => (
                      <Listbox.Option
                        key={dept}
                        value={dept}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2.5 transition ${
                            active ? "bg-primary/10 text-primary" : "text-gray-700"
                          }`
                        }
                      >
                        {dept}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed font-semibold mt-2"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>

              {/* Status Message */}
              {message && (
                <div
                  className={`text-center font-medium text-sm py-2 px-4 rounded-lg ${
                    message.startsWith("✅")
                      ? "bg-green-50 text-green-700"
                      : message.startsWith("⏳")
                      ? "bg-blue-50 text-blue-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;

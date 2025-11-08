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
    };
    return errors[name];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number" && value.length > 10) return;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
    setFieldErrors((prev) => ({ ...prev, date: validateField("date", date) }));
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
      setMessage("⚠️ Fix errors to continue");
      return;
    }

    setMessage("⏳ Booking...");
    dispatch(createAppointment(form))
      .unwrap()
      .then(() => {
        setMessage("✅ Appointment booked!");
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
      .catch(() => setMessage("❌ Booking failed"));
  };

  useEffect(() => {
    if (message.startsWith("✅")) {
      const timer = setTimeout(() => onClose(), 2000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[11000]" onClick={onClose} />

      <div className="fixed inset-0 z-[11001] flex items-center justify-center p-3">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[85vh] relative overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-6 relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors" aria-label="Close">
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-1">Book Appointment</h2>
            <p className="text-white/80 text-sm">Quick and easy consultation booking</p>
          </div>

          {/* Form Container */}
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
                  className={`w-full border-2 ${fieldErrors.name ? "border-red-400" : "border-gray-200"} bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition`}
                />
                {fieldErrors.name && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.name}</p>}
              </div>

              {/* Mobile */}
              <div>
                <input
                  type="text"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className={`w-full border-2 ${fieldErrors.number ? "border-red-400" : "border-gray-200"} bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition`}
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
                  className={`w-full border-2 ${fieldErrors.email ? "border-red-400" : "border-gray-200"} bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition`}
                />
                {fieldErrors.email && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.email}</p>}
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <DatePicker
                    selected={form.date}
                    onChange={handleDateChange}
                    className={`w-full border-2 ${fieldErrors.date ? "border-red-400" : "border-gray-200"} bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition`}
                    placeholderText="Select Date"
                    dateFormat="dd/MM/yyyy"
                  />
                  {fieldErrors.date && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.date}</p>}
                </div>
                <div>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full border-2 ${fieldErrors.time ? "border-red-400" : "border-gray-200"} bg-gray-50 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition`}
                  />
                  {fieldErrors.time && <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.time}</p>}
                </div>
              </div>

              {/* Department */}
              <Listbox value={form.department} onChange={(value) => setForm((prev) => ({ ...prev, department: value }))}>
                <div className="relative">
                  <Listbox.Button className="relative w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition cursor-pointer">
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
                        className={({ active }) => `cursor-pointer select-none px-4 py-2.5 transition ${active ? "bg-primary/10 text-primary" : "text-gray-700"}`}
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
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed font-semibold mt-2"
              >
                {status === "loading" ? "Booking..." : "Book Now"}
              </button>

              {/* Status Messages */}
              {message && (
                <div className={`text-center font-medium text-sm py-2 px-4 rounded-lg ${message.startsWith("✅") ? "bg-green-50 text-green-700" : message.startsWith("⏳") ? "bg-blue-50 text-blue-700" : "bg-red-50 text-red-700"}`}>
                  {message}
                </div>
              )}
              {error && <div className="text-red-600 text-center text-sm bg-red-50 py-2 px-4 rounded-lg">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
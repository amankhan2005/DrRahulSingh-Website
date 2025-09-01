 import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/slices/appointmentSlice";
import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 px-4 flex items-center justify-center overflow-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative text-gray-800 mx-auto my-4 max-h-screen overflow-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
          >
            &times;
          </button>

          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Book Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 transition"
            />

            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full border border-gray-300 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 transition"
            />

            <DatePicker
              selected={form.date}
              onChange={(date) => setForm((prev) => ({ ...prev, date }))}
              className="w-full border border-gray-300 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 transition"
              placeholderText="Select Date"
              dateFormat="dd/MM/yyyy"
            />

            {/* Department Dropdown */}
            <Listbox
              value={form.department}
              onChange={(value) => setForm((prev) => ({ ...prev, department: value }))}
            >
              <div className="relative mt-1">
                <Listbox.Button className="w-full border border-gray-300 bg-white p-3 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800">
                  {form.department}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl max-h-60 overflow-auto z-50">
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

            {/* Native HTML Time Picker */}
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 transition"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4 transition-all shadow-md hover:shadow-lg"
            >
              {status === "loading" ? "Booking..." : "Book Appointment"}
            </button>
          </form>

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
    </>
  );
};

export default AppointmentModal;

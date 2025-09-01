 import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/slices/appointmentSlice";

const Appointment = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.appointments);

  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    department: "General",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState("");

  const departments = [
    "General",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Dermatology",
    "Pediatrics",
    "Gynecology",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.number || !form.email || !form.date || !form.time) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    dispatch(createAppointment(form))
      .unwrap()
      .then(() => {
        setMessage("✅ Appointment booked successfully!");
        setForm({
          name: "",
          number: "",
          email: "",
          department: "General",
          date: "",
          time: "",
        });
      })
      .catch(() => {
        setMessage("❌ Failed to book appointment");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Doctor Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            className="w-full border p-2 rounded"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">number</label>
          <input
            className="w-full border p-2 rounded"
            name="number"
            value={form.number}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Department</label>
          <select
            className="w-full border p-2 rounded"
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Time</label>
          <input
            type="time"
            className="w-full border p-2 rounded"
            name="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2"
        >
          {status === "loading" ? "Booking..." : "Book Appointment"}
        </button>
      </form>

      {message && <div className="mt-4 text-center">{message}</div>}
      {error && <div className="mt-2 text-red-600 text-center">{error}</div>}
    </div>
  );
};

export default Appointment;

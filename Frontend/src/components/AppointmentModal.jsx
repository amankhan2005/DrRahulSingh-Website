 import React, { useState, useEffect } from "react";

const departments = [
  "General",
  "Neuro Critical Care & Anesthesia",
  "Spine Surgery & Spine Care",
  "Peripheral Nerve Surgery & Care",
];

const formatDateToYYYYMMDD = (d) => {
  if (!d) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// ✅ Fetch backend URL from environment
const BACKEND_URL = import.meta.env.VITE_BACKENDURL;

const AppointmentModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    department: "General",
    date: "",
    time: "09:00",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);

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

  const handleDateChange = (e) => {
    setForm((prev) => ({ ...prev, date: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, date: validateField("date", e.target.value) }));
  };

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

    const payload = { ...form };

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
        date: "",
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md z-[11000] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative animate-[slideUp_0.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: "calc(100vh - 2rem)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-t-3xl relative flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Book Appointment</h2>
                <p className="text-blue-100 text-sm">Schedule your consultation</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-6 py-5" style={{ minHeight: 0 }}>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full border-2 ${
                    fieldErrors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                  } px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {fieldErrors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{fieldErrors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  inputMode="numeric"
                  className={`w-full border-2 ${
                    fieldErrors.number ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                  } px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {fieldErrors.number && <p className="text-red-500 text-xs mt-1.5 ml-1">{fieldErrors.number}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full border-2 ${
                    fieldErrors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                  } px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {fieldErrors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{fieldErrors.email}</p>}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleDateChange}
                    min={today}
                    className={`w-full border-2 ${
                      fieldErrors.date ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                    } px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {fieldErrors.date && <p className="text-red-500 text-xs mt-1.5 ml-1">{fieldErrors.date}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full border-2 ${
                      fieldErrors.time ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                    } px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {fieldErrors.time && <p className="text-red-500 text-xs mt-1.5 ml-1">{fieldErrors.time}</p>}
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDeptDropdown(!showDeptDropdown)}
                    className="relative w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <span className="block truncate text-gray-700">{form.department}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          showDeptDropdown ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {showDeptDropdown && (
                    <div className="absolute mt-2 w-full bg-white border-2 border-gray-100 rounded-xl shadow-xl z-[11002] max-h-48 overflow-auto">
                      {departments.map((dept) => (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => {
                            setForm((prev) => ({ ...prev, department: dept }));
                            setShowDeptDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-700"
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed font-semibold mt-4"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Booking...
                  </span>
                ) : (
                  "Confirm Appointment"
                )}
              </button>

              {/* Status Message */}
              {message && (
                <div
                  className={`text-center font-medium text-sm py-2.5 px-4 rounded-xl ${
                    message.startsWith("✅")
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : message.startsWith("⏳")
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

// Demo wrapper
export default function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      {!showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Open Appointment Modal
        </button>
      )}
      {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

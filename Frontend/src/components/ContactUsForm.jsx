 import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { specialities } from "../SpecilitesData.jsx";

function ContactUsForm() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const backendUrl = import.meta.env.VITE_BACKENDURL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    const selectedDept = e.target.value;
    setSelectedDepartment(selectedDept);
    setFormData({ ...formData, department: selectedDept });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.department) errors.department = "Department is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setLoading(true);
      const formattedData = {
        department: formData.department,
        patientName: formData.name,
        mobileNo: formData.phone,
        email: formData.email,
        message: formData.message,
      };

      await axios.post(`${backendUrl}/inquiry-msg/save`, formattedData);

      Swal.fire({
        title: "Success!",
        text: "Your query has been submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        department: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setSelectedDepartment("");
      setFormErrors({});
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      Swal.fire({
        title: "Error!",
        text:
          err.response?.data?.message ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        General Query
      </h3>

      {loading && (
        <p className="text-primary text-center mb-3 font-medium">
          Processing...
        </p>
      )}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            onChange={handleChange}
            value={formData.name}
          />
          {formErrors.name && (
            <span className="text-red-500 text-sm mt-1">{formErrors.name}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <input
            type="tel"
            name="phone"
            placeholder="10-digit Phone Number"
            pattern="[0-9]{10}"
            maxLength="10"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            onChange={handleChange}
            value={formData.phone}
          />
          {formErrors.phone && (
            <span className="text-red-500 text-sm mt-1">{formErrors.phone}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            onChange={handleChange}
            value={formData.email}
          />
          {formErrors.email && (
            <span className="text-red-500 text-sm mt-1">{formErrors.email}</span>
          )}
        </div>

        {/* Department */}
        <div className="flex flex-col">
          <select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
          >
            <option value="" disabled>
              Select Department
            </option>
            {specialities.map((s, idx) => (
              <option key={idx} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {formErrors.department && (
            <span className="text-red-500 text-sm mt-1">{formErrors.department}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
            onChange={handleChange}
            value={formData.message}
            rows={3}
          />
          {formErrors.message && (
            <span className="text-red-500 text-sm mt-1">{formErrors.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
        >
          {loading ? "Processing..." : "Send Query"}
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;

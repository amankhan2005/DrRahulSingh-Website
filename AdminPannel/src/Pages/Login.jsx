 import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HospitalBg from "../assets/admin-login-bg.avif"; // background image

function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        title: "Error!",
        text: "Please enter both email and password.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const apiKey = `${import.meta.env.VITE_API_URL}/admin/login`;

    try {
      setLoading(true);
      const response = await axios.post(apiKey, formData);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("admin", JSON.stringify(response?.data));
      }
      Swal.fire({
        title: "Success!",
        text: "You have logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      const adminData = response.data;
      navigate("/dashboard", { state: { adminData } });

      setLoading(false);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again.";
      Swal.fire({
        title: "Failed!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Try Again!",
      });

      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Card Container */}
      <div className="flex w-[90%] max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Panel */}
        <div
          className="hidden md:flex w-1/2 items-center justify-center bg-[#2e6294] text-white"
          style={{
            backgroundImage: `url(${HospitalBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#2e6294]/80 w-full h-full flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl font-bold text-center">
              Landmark Advance Neurospine Care
            </h1>
            <p className="mt-4 text-center text-gray-200">
              Superspeciality Hospital <br /> Admin Panel Login
            </p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6294] transition"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6294] transition"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                loading
                  ? "bg-[#2e6294]/50 cursor-not-allowed"
                  : "bg-[#2e6294] hover:bg-[#234c70]"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Landmark Advance Neurospine Care. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

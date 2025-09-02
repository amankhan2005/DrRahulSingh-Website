 import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBlog,
  FaBriefcase,
  FaImage,
  FaVideo,
  FaNewspaper,
  FaAward,
  FaSignOutAlt,
  FaCalendarCheck,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Home from "../Components/Home";
import BlogDashboard from "../Components/BlogDashboard";
import CaseDashboard from "../Components/CaseDashboard";
import GalleryDashboard from "../Components/GalleryDashboard";
import VideoDashboard from "../Components/VideoDashboard";
import NewsDashboard from "../Components/NewsDashboard";
import AwardsDashboard from "../Components/AwardsDashboard";
import AppointDashbaord from "../Components/AppointDashbaord";

// Sidebar Item Component
const SidebarItem = ({ name, icon, active, onClick }) => (
  <div
    className={`flex items-center space-x-3 cursor-pointer px-4 py-3 rounded-lg mb-1 transition-all duration-200
      ${
        active
          ? "bg-white text-[#2e6294] font-semibold shadow-sm"
          : "text-gray-200 hover:bg-white/10 hover:text-white"
      }`}
    onClick={() => onClick(name)}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{name}</span>
  </div>
);

// Switchable Content
const DashboardContent = ({ section }) => {
  switch (section) {
    case "Home":
      return <Home />;
    case "Blog":
      return <BlogDashboard />;
    case "Cases":
      return <CaseDashboard />;
    case "Gallery":
      return <GalleryDashboard showCategoryDropdown={true} />;
    case "Video":
      return <VideoDashboard />;
    case "News":
      return <NewsDashboard />;
    case "Awards":
      return <AwardsDashboard />;
    case "Appointment Data":
      return <AppointDashbaord />;
    default:
      return (
        <div className="text-gray-600 p-6 text-lg font-medium">
          Select a section
        </div>
      );
  }
};

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [section, setSection] = useState("Home");
  const [user, setUser] = useState("Admin");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { adminData } = location?.state || {};

  useEffect(() => {
    if (adminData) setUser(adminData?.user?.email || "Admin");
  }, [adminData]);

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("admin");
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => navigate("/"));
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transition-transform duration-300 ease-in-out
        bg-[#2e6294] text-white w-64 p-6 flex flex-col z-50 shadow-xl`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-8 sm:hidden">
          <span className="text-xl font-bold tracking-wide">Dashboard</span>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Desktop Title */}
        <div className="hidden sm:block text-2xl font-bold mb-8 text-center tracking-wide">
          Dashboard
        </div>

        {/* Menu Items */}
        {[
          { name: "Home", icon: <FaHome /> },
          { name: "Blog", icon: <FaBlog /> },
          { name: "Cases", icon: <FaBriefcase /> },
          { name: "Gallery", icon: <FaImage /> },
          { name: "Video", icon: <FaVideo /> },
          { name: "News", icon: <FaNewspaper /> },
          { name: "Awards", icon: <FaAward /> },
          { name: "Appointment Data", icon: <FaCalendarCheck /> },
        ].map((item) => (
          <SidebarItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            active={section === item.name}
            onClick={(s) => {
              setSection(s);
              setSidebarOpen(false);
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col sm:ml-64">
        {/* Header */}
        <div className="px-6 py-4 flex justify-between items-center bg-white border-b shadow-sm sticky top-0 z-40">
          <div className="flex items-center space-x-3">
            <button
              className="sm:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={20} />
            </button>
            <span className="text-lg sm:text-xl font-semibold text-gray-800">
              {section}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="User Avatar"
              className="w-9 h-9 rounded-full border"
            />
            <span className="text-gray-700 font-medium hidden sm:block">
              {user}
            </span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg flex items-center space-x-2 text-sm font-medium transition"
            >
              <FaSignOutAlt />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>

        {/* Dynamic Section */}
        <div className="flex-1 p-4 sm:p-6 overflow-auto">
          <div className="min-h-[80vh]">
            <DashboardContent section={section} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Dashboard Components
import Home from "../Components/Home";
// import TeamDashboard from "../Components/TeamDashboard";
import BlogDashboard from "../Components/BlogDashboard";
import CaseDashboard from "../Components/CaseDashboard";
import GalleryDashboard from "../Components/GalleryDashboard";
import VideoDashboard from "../Components/VideoDashboard";
import NewsDashboard from "../Components/NewsDashboard";
import AwardsDashboard from "../Components/AwardsDashboard";
import AppointDashbaord from "../Components/AppointDashbaord";

const SidebarItem = ({ name, icon, active, onClick }) => (
  <div
    className={`flex items-center space-x-3 cursor-pointer px-4 py-3 rounded-xl mb-2 transition-all duration-200
      ${
        active
          ? "bg-white text-[#2e6294] font-semibold shadow-sm"
          : "text-gray-300 hover:bg-white/10 hover:text-white"
      }`}
    onClick={() => onClick(name)}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{name}</span>
  </div>
);

const DashboardContent = ({ section }) => {
  switch (section) {
    case "Home":
      return <Home />;
    // case "Team":
    //   return <TeamDashboard />;
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
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="bg-[#2e6294] text-white sm:w-64 p-6 flex flex-col shadow-xl">
        <div className="text-2xl font-bold mb-8 text-center tracking-wide">
          Dashboard
        </div>
        <SidebarItem
          name="Home"
          icon={<FaHome />}
          active={section === "Home"}
          onClick={setSection}
        />
        {/* <SidebarItem
          name="Team"
          icon={<FaUsers />}
          active={section === "Team"}
          onClick={setSection}
        /> */}
        <SidebarItem
          name="Blog"
          icon={<FaBlog />}
          active={section === "Blog"}
          onClick={setSection}
        />
        <SidebarItem
          name="Cases"
          icon={<FaBriefcase />}
          active={section === "Cases"}
          onClick={setSection}
        />
        <SidebarItem
          name="Gallery"
          icon={<FaImage />}
          active={section === "Gallery"}
          onClick={setSection}
        />
        <SidebarItem
          name="Video"
          icon={<FaVideo />}
          active={section === "Video"}
          onClick={setSection}
        />
        <SidebarItem
          name="News"
          icon={<FaNewspaper />}
          active={section === "News"}
          onClick={setSection}
        />
        <SidebarItem
          name="Awards"
          icon={<FaAward />}
          active={section === "Awards"}
          onClick={setSection}
        />
        <SidebarItem
          name="Appointment Data"
          icon={<FaCalendarCheck />}
          active={section === "Appointment Data"}
          onClick={setSection}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">
            {section}
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="User Avatar"
              className="w-9 h-9 rounded-full border border-gray-300"
            />
            <span className="text-gray-700 font-medium">{user}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 flex items-center space-x-2 text-sm shadow-md"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="bg-white shadow-lg rounded-xl p-6 min-h-[80vh]">
            <DashboardContent section={section} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

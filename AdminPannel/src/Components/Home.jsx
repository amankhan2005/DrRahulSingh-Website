 import { useState, useEffect } from "react";
import axios from "axios";
import { FaBlog, FaUsers, FaImage, FaClipboardList, FaHospitalUser } from "react-icons/fa";
import InquiryData from "./InquiryData";

const Home = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [caseCount, setCaseCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);

  const fetchData = async () => {
    try {
      const inquiryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/inquiry/getall`);
      setInquiryCount(inquiryResponse.data.length);

      const blogResponse = await axios.get(`${import.meta.env.VITE_API_URL}/blog/getall`);
      setBlogCount(blogResponse.data.length);

      const teamResponse = await axios.get(`${import.meta.env.VITE_API_URL}/team/getall`);
      setTeamCount(teamResponse.data.payload.length);

      const galleryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/getall`);
      setGalleryCount(galleryResponse.data.length);

      const caseResponse = await axios.get(`${import.meta.env.VITE_API_URL}/case/getall`);
      setCaseCount(caseResponse.data?.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const stats = [
    { title: "Total Inquiries", count: inquiryCount, icon: <FaHospitalUser />, color: "bg-blue-100 text-blue-600" },
    { title: "Total Blogs", count: blogCount, icon: <FaBlog />, color: "bg-red-100 text-red-600" },
    { title: "Total Gallery Images", count: galleryCount, icon: <FaImage />, color: "bg-teal-100 text-teal-600" },
    { title: "Total Cases", count: caseCount, icon: <FaClipboardList />, color: "bg-purple-100 text-purple-600" },
    // { title: "Team Members", count: teamCount, icon: <FaUsers />, color: "bg-green-100 text-green-600" },
  ];

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Top Section */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center">Admin Dashboard</h1>
      <p className="text-gray-500 mb-10 text-center">
        Overview of hospital activities and performance metrics
      </p>

      {/* Cards Grid - Centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white w-56 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.color}`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h2 className="text-sm font-medium text-gray-600">{item.title}</h2>
              <p className="text-2xl font-bold text-gray-800 mt-1">{item.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Inquiries</h2>
        <div className="bg-white rounded-xl shadow-md p-4 text-gray-800">
          <InquiryData />
        </div>
      </div>
    </div>
  );
};

export default Home;

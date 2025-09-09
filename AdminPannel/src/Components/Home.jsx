 import { useState, useEffect } from "react";
import axios from "axios";
import InquiryData from "./InquiryData";
import { FaUserMd } from "react-icons/fa";

const Home = () => {
  const [inquiryCount, setInquiryCount] = useState(0);

  const fetchData = async () => {
    try {
      const inquiryRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/inquiry/getall`
      );
      setInquiryCount(inquiryRes.data?.length || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen px-4 sm:px-6 lg:px-12 py-6">
      {/* Dashboard Hero Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-14 mb-12 relative overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute -right-12 -top-12 w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -left-12 -bottom-12 w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 bg-teal-100 rounded-full blur-2xl opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <FaUserMd className="text-5xl sm:text-6xl lg:text-7xl text-blue-600 drop-shadow-md" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">
            Landmark Advance Neurospine Care
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed px-2">
            Your centralized dashboard for hospital management, patient inquiries,
            and performance insights.
          </p>

          {/* Stats Badge */}
          {/* <div className="mt-4 sm:mt-6 inline-block bg-blue-50 border border-blue-200 text-blue-700 font-medium px-4 sm:px-6 py-2 rounded-full shadow-sm text-sm sm:text-base">
            {inquiryCount} Total Inquiries
          </div> */}

          
        </div>
      </div>

      {/* Inquiry Section */}
         
        <div className="text-gray-800 overflow-x-auto">
          <InquiryData />
        </div>
     </div>
  );
};

export default Home;

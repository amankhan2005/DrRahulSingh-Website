 import React, { useState, useEffect } from "react";
import TopNavBar from "./TopNavbar";
import Header from "./Header";
import AppointmentModal from "./AppointmentModal";

const StickyNavbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide header
        setShowHeader(false);
      } else {
        // scrolling up → show header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {isOpen && <AppointmentModal onClose={() => setIsOpen(false)} />}

      {/* TopNavBar always visible */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white">
        <TopNavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>

      {/* Header hides on scroll down */}
      <div
        className={`fixed w-full h-21 bg-white shadow-md z-40 transition-transform duration-300`}
        style={{ transform: showHeader ? "translateY(0)" : "translateY(-100%)", top: "3rem" }} // adjust top based on TopNavBar height
      >
        <Header />
      </div>

      {/* Padding to prevent content from hiding behind navbar */}
      <div className="pt-32"></div>
    </>
  );
};

export default StickyNavbar;


// --sticky-navbar
// import React from "react";
// // import TopNavBar from "./TopNavbar";
// import Header from "./Header";

// const StickyNavbar = () => {
//   return (
//     <>
//       {/* TopNavBar fixed at very top */}
//       {/* 
//       <div className="fixed top-0 left-0 w-full z-50">
//         <TopNavBar />
//       </div> 
//       */}

//       {/* Header fixed just below TopNavBar */}
//       <div className="fixed top-12 left-0 w-full z-40 bg-white shadow-md">
//         <Header />
//       </div>

//       {/* Page content padding */}
//       <div className="pt-24">
//         {/* 12 = TopNavBar height, 12 = Header height → adjust to match your actual sizes */}
//       </div>
//     </>
//   );
// };

// export default StickyNavbar;

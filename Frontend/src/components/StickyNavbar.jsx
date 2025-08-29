 import React, { useState, useEffect } from "react";
import TopNavBar from "./TopNavbar";
import Header from "./Header";

const StickyNavbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide topbar
        setShowTopBar(false);
      } else {
        // scrolling up → show topbar
        setShowTopBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* TopNavBar (hide/show on scroll) */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-gray-800 text-white transition-transform duration-300 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopNavBar />
      </div>

      {/* Header → top depends on TopBar visibility */}
      <div
        className={`fixed w-full h-20 bg-white shadow-md z-40 transition-all duration-300 ${
          showTopBar ? "top-12" : "top-0"
        }`}
      >
        <Header />
      </div>

      {/* Page content padding (TopBar + Header height initially) */}
      <div className="pt-32">
        {/* content starts below navbar */}
      </div>
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

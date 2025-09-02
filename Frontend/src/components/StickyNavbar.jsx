 import React, { useState } from "react";
import TopNavBar from "./TopNavbar";
import Header from "./Header";
 
const StickyNavbar = () => {
 
  return (
    <>
 
      {/* Fixed Top Wrapper */}
      <div className="fixed top-0 left-0 w-full z-[10000]">
        <TopNavBar />
        <Header />
      </div>

      {/* Spacer to avoid content being hidden behind fixed navbar */}
      <div className="h-[140px] md:h-[125px]"></div>
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

 import React, { useState } from "react";
import TopNavBar from "./TopNavbar";
import Header from "./Header";
import AppointmentModal from "./AppointmentModal";

const StickyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // appointment modal

  return (
    <>
      {/* Appointment Modal */}
      {isOpen && <AppointmentModal onClose={() => setIsOpen(false)} />}

      {/* TopNavBar stays normal on top */}
      <div className="relative z-[110]">
        <TopNavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>

      {/* Header hides if appointment modal is open */}
      {!isOpen && (
        <div className="relative z-[100] mt-[3rem]">
          <Header />
        </div>
      )}

      {/* Optional spacing */}
      <div className="pt-0"></div>
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

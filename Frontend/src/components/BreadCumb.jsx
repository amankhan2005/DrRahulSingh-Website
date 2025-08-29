// import React from "react";
// import { Link } from "react-router-dom";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import image from '../assets/breadcrumb.webp'
// const BreadCumb = ({ items, title }) => {
//   return (
//     <div
//       className="relative w-full md:h-[300px] h-[150px] flex items-center justify-center ps-10 bg-cover bg-center p-4"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Overlay for text visibility */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       {/* Breadcrumb Content */}
//       <div className="relative z-10 text-center text-white">
//         <h1 className="md:text-4xl leading-[1.2rem] text-3xl font-extrabold md:line-clamp-none line-clamp-2 messiri" data-aos="fade-down" data-aos-delay="400">{title}</h1>
//         <div className="flex justify-center items-center md:mt-4 mt-1" data-aos='fade-up' data-aos-delay="400">
//           {items.map((item, index) => (
//             <React.Fragment key={index}>
//               <Link to={item.link} className={` ${index == 0 ? 'text-white':'text-white/80'} font-medium hover:text-blue-500 md:line-clamp-none line-clamp-1`}>
//                 {item.label}
//               </Link>
//               {index < items.length - 1 && <span className="text-white"><MdKeyboardArrowRight className='lg:text-xl text-lg inline-block font-extrabold' /></span>}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BreadCumb;

import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from '../assets/home/Breadcrump.jpg'; // updated image path

const BreadCumb = ({ items, title }) => {
  return (
    <div
      className="relative w-full md:h-[300px] h-[150px] flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-0">
        <h1
          className="md:text-4xl text-3xl font-extrabold leading-tight messiri"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {title}
        </h1>

        <div
          className="flex justify-center items-center md:mt-4 mt-2 flex-wrap gap-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item.link}
                className={`font-medium ${
                  index === 0 ? "text-white" : "text-white/80"
                } hover:text-blue-300`}
              >
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <MdKeyboardArrowRight className="inline-block text-lg lg:text-xl text-white/70" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;

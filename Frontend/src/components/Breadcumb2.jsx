import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from '../assets/breadcrumb.webp'

const BreadCumb2 = ({ items, title }) => {
  return (
    <div
      className="relative w-full md:h-[350px] h-[200px] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Breadcrumb Content */}
      <div className=" z-10 w-full md:text-left text-center ">
        <h1 className="text-white md:text-5xl text-xl md:px-10 font-extrabold leading-tight  messiri" data-aos="fade-left">{title}</h1>
        <div className="text-white md:text-xl text-sm  md:px-10 font-semibold mb-4" data-aos="fade-left" data-aos-delay="500">Hospital in Bahraich</div>

        {/* Breadcrumb Links */}
        <div className="flex absolute bottom-0 md:px-10 py-[6px] bg-black/10 w-full md:justify-start justify-center  items-center text-white md:text-lg text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item.link}
                className={`font-medium hover:text-primary  transition-colors duration-300 ${index === 0 ? 'text-primary' : 'text-white'}`}
              >
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <span className="md:mx-2 text-primary">
                  <MdKeyboardArrowRight className="text-xl inline-block font-extrabold" />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCumb2;


// import React from "react";
// import { Link } from "react-router-dom";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import image from '../assets/breadcrumb.jpg';

// const BreadCumb2 = ({ items, title }) => {
//   return (
//     <div
//       className="relative w-full md:h-[350px] h-[150px] flex items-center justify-left bg-cover bg-center"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       {/* Breadcrumb Content */}
//       <div className="z-10 text-left text-white">
//         {/* Title */}
//         <h1 className="md:text-4xl text-2xl ps-10 font-extrabold text-primary messiri" data-aos="fade-left">
//           {title}
//         </h1>

//         {/* Subtitle */}
//         <div className="text-xl font-semibold ps-10" data-aos="fade-left" data-aos-delay="300">
//           Hospital in Bahraich
//         </div>

//         {/* Breadcrumb Links */}
//         <div className="flex absolute w-full bottom-0 items-center px-5 py-[6px] ps-10 md:mt-4 bg-white/30">
//           {items.map((item, index) => (
//             <React.Fragment key={index}>
//               {/* Link */}
//               <Link
//                 to={item.link}
//                 className={`${index === 0 ? 'text-primary' : 'text-primary'} font-medium hover:text-blue-500`}
//               >
//                 {item.label}
//               </Link>

//               {/* Separator (Arrow) */}
//               {index < items.length - 1 && (
//                 <span className="text-primary">
//                   <MdKeyboardArrowRight className="text-xl inline-block font-extrabold" />
//                 </span>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BreadCumb2;
import { useParams } from "react-router-dom";
import { facilities as facilitiesData } from "../FacilitiesData";
import pattern from "../assets/pattern13.jpg";
import BreadCumb2 from "./Breadcumb2.jsx";
import { FaCheck } from "react-icons/fa";
import AppointmentForm from "./AppointmentModal.jsx";
import FAQSection from "./Faq.jsx";

const FacilitiesDetail = () => {
  const { facilitiesName } = useParams();

  const facilities = facilitiesData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === facilitiesName
  );

  if (!facilities) {
    return (
      <div className="text-center text-xl text-red-500">
        facilities not found
      </div>
    );
  }

  const title = facilitiesName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <>
      <BreadCumb2
        items={[
          { label: "Home", link: `/` },
          { label: `Facilities`, link: `/facilities` },
          { label: `${title}`, link: `/specialities/${facilitiesName}` },
        ]}
        title={`Best ${facilities.title}`}
      />
      <div className="md:px-6  lg:pt-12 ">
        {/* First Section: Description & Image */}
        <div className="flex relative z-10 md:flex-row flex-col gap-6  px-4 bg-gray-10 rounded-2xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: -1,
            }}
          ></div>
          <div className="flex-2 md:mt-4 lg:mt-0 mt-5">
          <span className="md:text-2xl text-xl font-semibold messiri text-primary">
                  Overview -{" "}
                </span>
                <span className="md:text-2xl text-xl font-semibold messiri text-primary">
                  Best {facilities.title} Services in Bahraich{" "}
                </span>
            <p className="text-gray-700 text-justify ">
              {facilities.description}
            </p>
            <img
              src={facilities.image}
              alt={facilities.title}
              className="w-full md:h-72 mt-4"
            />
            <div className="py-4">
              <h2 className="text-2xl font-semibold text-primary messiri">
                Services Offered
              </h2>
              <ul className="list-disc grid grid-cols-2 list-inside text-gray-700">
                {facilities.services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="bg-primary w-5 h-5 p-1 rounded-full flex justify-center items-center">
                      <FaCheck className="text-white" />
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:block hidden h-fit flex-1 mt-4 p-4 rounded-xl bg-primary">
           <AppointmentForm/>
          </div>
        </div>
        {/* <div className="px-4">
            <OurTeam/>
          </div> */}
        {/* <WhyChooseUs/> */}
      </div>
      <div className="md:px-10 grid md:grid-cols-2 grid-cols-1  pb-6">
        {facilities.details.map((item,i)=>(
          <div className="px-4 text-justify" key={i}>
         <div className="md:text-2xl text-xl mt-6 mb-2 font-semibold text-primary  messiri"> {item.title}</div>
          <div className="">  {item.description}</div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-8 py-4 mb-8 bg-primary rounded mt-8">
        <h2 className="md:text-2xl text-xl messiri font-semibold text-white mb-4 px-4">
          Frequently Asked Questions
        </h2>
        <FAQSection faqs={facilities.faqs} />

      </div>
     
      {/* <div className="mt-10 mb-6 md:mb-0">
        <ContactUs />
      </div> */}
    </>
  );
};

export default FacilitiesDetail;

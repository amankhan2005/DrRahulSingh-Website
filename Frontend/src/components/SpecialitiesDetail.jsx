import { Link, useParams } from "react-router-dom";
import { specialities } from "../SpecilitesData.jsx";
import pattern from "../assets/pattern1.jpg";
import BreadCumb2 from "./Breadcumb2.jsx";
import { FaCheck } from "react-icons/fa";
import AppointmentForm from "./AppointmentForm.jsx";
import FAQSection from "./Faq.jsx";

const SpecialtyDetail = () => {
  const { specialtyName } = useParams();
  const specialty = specialities.find((item) => item.link === specialtyName);

  if (!specialty) {
    return (
      <div className="text-center text-xl text-red-500 font-semibold mt-10">
        Specialty not found
      </div>
    );
  }

  const title = specialtyName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <BreadCumb2
        items={[
          { label: "Home", link: "/" },
          { label: "Our Departments", link: "/specialities" },
          { label: title, link: `/specialities/${specialtyName}` },
        ]}
        title={specialty.title}
      />

      <div className="px-4  pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Section */}
          <div className="md:col-span-8 bg-gray-10 md:p-6 rounded-2xl">
            <div className="relative mb-6">
              <h2 className="md:text-2xl text-xl font-semibold messiri text-primary">
                Overview - Best {specialty.title} Hospital in Bahraich
              </h2>
              <p className="text-gray-700 md:mt-0 mt-2 text-base text-left leading-relaxed">
                {specialty.description}
              </p>
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
            </div>

            <img
              src={specialty.img}
              alt={`${specialty.title} Department`}
              className="w-full h-52 md:h-96 rounded-xl"
              loading="lazy"
            />

            {/* Services Section */}
            <div className="pt-6">
              <h2 className="md:text-2xl text-xl font-semibold messiri text-primary mb-4">
                Our Specialized Services
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                {specialty.services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="bg-primary w-5 h-5 p-1 rounded-full flex justify-center items-center">
                      <FaCheck className="text-white" />
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details Section */}
            {specialty.details.map((item, index) => (
              <div key={index} className="mt-6">
                <h3 className="md:text-2xl text-xl mb-1 font-semibold text-primary messiri">
                  {item.title}
                </h3>
                <ul className="list-disc px-4 text-justify  text-gray-700 space-y-1">
                  {item.description.map((li, i) => (
                    <li key={i} className="font-semibold">
                      {li.split(":")[0]}:{" "}
                      <span className="font-normal text-base">
                        {li.split(":")[1]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Other Specialities */}
            <div className="p-4 rounded-lg bg-primary ">
              <h3 className="text-2xl font-semibold text-white messiri mb-4">
                Other Specialities
              </h3>
              <div className="space-y-4">
                {specialities
                  .filter((item) => item.title !== specialty.title)
                  .map((item) => (
                    <Link
                      to={`/specialities/${item.link}`}
                      key={item.link}
                      className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} Icon`}
                        className="h-10 w-10 p-0.5 bg-blue-200 rounded-full mr-3"
                        loading="lazy"
                      />
                      <span className="text-gray-700 font-medium">
                        {item.title}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Appointment Form */}
            <div className="p-4 rounded-lg shadow-2xl bg-primary">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-8 py-6 bg-primary rounded my-8">
        <h2 className="md:text-2xl text-xl messiri font-semibold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <FAQSection faqs={specialty.faqs} />
      </div>
    </>
  );
};

export default SpecialtyDetail;

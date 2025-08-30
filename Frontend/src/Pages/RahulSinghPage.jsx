 import React from "react";
import BreadCumb from "../components/BreadCumb";
import Testimonial from "../components/Testimonial";
import Rahulimg from "../assets/home/dr-rahul.webp";
import { Link } from "react-router-dom";

export default function RahulSinghPage() {
  const faqs = [
    {
      q: "Why do patients visit Dr. Rahul Singh?",
      a: "Patients frequently visit Dr. Rahul Singh for Spine Surgery, Spinal and Cerebral Tumor Embolization, Brain Tumor Surgery. For more reasons, visit his Practo profile.",
    },
    {
      q: "What is Dr. Rahul Singh's education qualification?",
      a: "Dr. Rahul Singh holds MBBS and MCh in Neuro Surgery.",
    },
    {
      q: "What does Dr. Rahul Singh specialise in?",
      a: "Neurosurgery, Spine Surgery (Ortho & Neuro).",
    },
    {
      q: "How many years of experience does Dr. Rahul Singh have?",
      a: "He has over 15 years of experience in neurosurgery.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Breadcrumb */}
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/About-us" },
          { label: "Dr. Rahul Singh" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#13335b] to-[#3b628b] text-white overflow-hidden py-10">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-6">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <span className="uppercase text-sm tracking-wider text-white/70 font-medium">
              NEUROSURGEON
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Personal care for your healthy living
            </h1>
            <p className="text-white/80 max-w-lg text-base sm:text-lg md:text-lg leading-relaxed">
              Dr. Rahul Singh is an experienced neurosurgeon specializing in
              brain, spine, and peripheral nerve surgeries. Over 15 years of
              delivering advanced healthcare with compassion.
            </p>

            {/* Consult Button */}
            <div className="flex flex-col items-center md:items-start gap-4 mt-4">
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 bg-white text-[#13335b] font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                Consult Now
              </Link>
              <p className="text-center md:text-left text-gray-300 text-sm sm:text-base">
                Get expert consultation from Dr. Rahul Singh
              </p>
            </div>
          </div>

          {/* Right Image + Google Review */}
          <div className="flex-1 relative flex flex-col items-center gap-6">
            <img
              src={Rahulimg}
              alt="Dr. Rahul Singh"
              className="w-full max-w-sm sm:max-w-md mx-auto relative z-10 rounded-3xl shadow-2xl"
            />
            <div className="absolute -inset-6 bg-white/10 rounded-3xl blur-3xl opacity-30 z-0"></div>

            {/* Google Review Button */}
            <a
              href="https://www.google.com/search?client=firefox-b-d&sca_esv=a5ace5942393c46e&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E58WpO55NCAealuNaMyqC8lD1I_sRGY_WEkiV56cjAJ443-4IfvUj3hFgXYYgKx7uRXrHD66_Tyg9SGXnvzzJu1zaGIjkLNAuckEKcy-w9wA2V_oxftz_SpAruu0qwTDwTX48pW2qzva6yK1PUU2S5kAl4uLfZKN1AMUMZhbA5LtJw2dxyT8W1zibuWbzxPq0YtyN4_Ukd8OIv13ZEsHID12CuPllfkuLDnM7U3F23FG27Pgsw%3D%3D&q=Dr+Rahul+Singh+-+Neurosurgeon+in+Lucknow+%7C+Best+Spine+Surgeon+%7C+Brain+Tumor+Specialist+Doctor+%7C+Neurologist+In+Lucknow+Reviews&sa=X&ved=2ahUKEwiv9-ufvrKPAxUNT2wGHZcPDdQQ0bkNegQIMRAE&biw=1485&bih=703&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-[#13335b] font-bold rounded-full shadow-lg 
                         hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex items-center gap-2 sm:gap-3 relative z-20 text-sm sm:text-base"
            >
              <i className="fa-brands fa-google text-lg sm:text-xl"></i>
              Write a Review on Google
            </a>
          </div>
        </div>

        {/* Centered Contact Info Bar */}
        <div className="mx-4 sm:mx-6 md:mx-12 rounded-2xl text-white flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 p-3  ">
          {/* Email */}
          <a
            href="mailto:info@drrahulneurosurgeon.com"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-white/20 transition duration-300 text-sm sm:text-base"
          >
            <i className="fa-solid fa-envelope text-base sm:text-lg"></i>
            <span>info@drrahulneurosurgeon.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+918400136465"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-white/20 transition duration-300 text-sm sm:text-base"
          >
            <i className="fa-solid fa-phone-volume text-base sm:text-lg"></i>
            <span>+91 84001-36465</span>
          </a>

          {/* Address */}
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-white/20 transition duration-300 text-center text-sm sm:text-base">
            <i className="fa-solid fa-location-dot text-base sm:text-lg"></i>
            <span>
              M-II/016, Prabhat Chauraha, Janki Vihar, Lucknow, UP 226021
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
       <section className="container mx-auto px-6 lg:px-12 py-10">
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-primary">
    About Dr. Rahul Singh
  </h2>

  {/* Content: Left Text, Right Image */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Left Text */}
    <div className="flex-1">
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Dr. Rahul Singh is an experienced neurosurgeon in Lucknow specializing in brain, spine, 
        and peripheral nerve surgeries. He completed his MCh in Neurosurgery from the prestigious 
        Institute of Medical Sciences – Banaras Hindu University, Varanasi, Uttar Pradesh. 
        He earned his MS in General Surgery from King George's Medical University, Lucknow, 
        Uttar Pradesh, and his MBBS from Guwahati Medical College, Guwahati, Assam. 
        He is also an international fellow of the American Association of Neurological Surgeons.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex-1">
      <img
        src="https://www.drrahulneurosurgeon.com/Content/assets/images/img2.jpg"
        alt="Dr. Rahul Singh"
        className="h-96 rounded-3xl shadow-lg"
      />
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="container mx-auto px-6 lg:px-12 ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
          Common Questions & Answers
        </h2>
        <div className="space-y-6 md:space-y-8">
          {faqs.map((item, index) => (
            <div key={index} className="p-6 sm:p-8 rounded-2xl bg-gray-50">
              <h3 className="font-semibold text-lg sm:text-xl text-primary mb-2 sm:mb-3">
                Q: {item.q}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">A: {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 lg:px-12 ">
        <Testimonial />
      </section>
    </div>
  );
}

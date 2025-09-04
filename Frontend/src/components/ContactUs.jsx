import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="container relative mx-auto flex flex-col items-center justify-center rounded-3xl overflow-hidden shadow-xl text-center px-6 py-16 sm:py-20 md:px-12 lg:py-10 bg-primary">
        {/* Center Text */}
        <div className="relative z-10 text-center">
          <p className="text-sm sm:text-base font-bold uppercase tracking-wide text-white drop-shadow-lg">
            Need Emergency Care?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 leading-tight text-white drop-shadow-xl">
            Get 24/7 Reliable Healthcare Support
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto text-gray-100 drop-shadow">
            From <span className="font-bold">Dr. Rahul Singh</span> and our expert team of doctors. Trusted by <span className="font-bold">10,000+ patients</span>, we provide safe, effective, and compassionate care when you need it most. Your health and safety are our top priority.
          </p>
          <Link
            to="/contact"
          
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-lg hover:bg-gray-100 transition duration-300 text-base md:text-lg md:px-8 md:py-4"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}

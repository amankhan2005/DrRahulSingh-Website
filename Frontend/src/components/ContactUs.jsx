import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="px-4 py-10" data-aos="fade-up">
      <div className="container relative mx-auto h-90 flex flex-col items-center justify-center rounded-3xl overflow-hidden shadow-xl text-center px-6 md:px-12 bg-primary">
        {/* Center Text */}
        <div className="relative z-10 text-center">
          <p className="text-base md:text-lg font-bold uppercase tracking-wide text-white drop-shadow-lg">
            Need Emergency Care?
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 leading-snug text-white drop-shadow-xl">
            Get 24/7 Reliable Healthcare Support
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto text-gray-100 drop-shadow">
            From <span className="font-bold">Dr. Rahul Singh</span> and our expert team of doctors. Trusted by <span className="font-bold">10,000+ patients</span>, we provide safe, effective, and compassionate care when you need it most. Your health and safety are our top priority.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-lg hover:bg-gray-100 transition duration-300 text-base md:text-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}

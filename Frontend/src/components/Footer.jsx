import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BottomFooter from "./BottomFooter";
import { FaChevronCircleRight } from "react-icons/fa";

const handletop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-10 border-b overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-8">
            {/* Contact Section */}
            <address className="not-italic break-words">
              <div className="text-2xl font-semibold md:mb-4 mb-2">
                Contact Us
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 mt-1" />
                  <a
                    href="mailto:info@drrahulneurosurgeon.com"
                    className="hover:underline break-all"
                  >
                    info@drrahulneurosurgeon.com
                  </a>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 mt-1" />
                  <a href="tel:8400136465" className="hover:underline">
                    +91 84001-36465
                  </a>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-2 mt-1"
                  />
                  <a
                    href="https://maps.app.goo.gl/NySWvTwjmSoAUuBV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex-1"
                  >
                    <span className="break-words">
                      M-II/016, Prabhat Chauraha, Janki Vihar, Lucknow, UP
                      226021
                    </span>
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <nav className="mt-4">
                <ul className="flex flex-wrap gap-4">
                  <li>
                    <a
                      href="https://www.facebook.com/people/Landmark-Advance-Neurospine-Care-Hospital/61563764256650/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="hover:text-gray-200 text-xl hover:scale-125 transition"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/landmarkneurospinehospital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="hover:text-gray-200 text-xl hover:scale-125 transition"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@landmarkadvanceneurospinecare/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="hover:text-gray-200 text-xl hover:scale-125 transition"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/dr-rahul-singh-mbbs-ms-mch-neuro-surgery-021708321/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-gray-200 text-xl hover:scale-125 transition"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </nav>
            </address>

            {/* Specialities */}
            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2">
                Our Specialities
              </h4>
              <ul className="space-y-2">
                <li>
                  <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/brain" className="hover:underline">
                    Brain Surgery
                  </Link>
                </li>
                <li>
                  <FaChevronCircleRight className="inline-block mr-2" />
                  <Link to="/spine" className="hover:underline">
                    Spine Surgery
                  </Link>
                </li>
                <li>
                  <FaChevronCircleRight className="inline-block mr-2" />
                  <Link
                    to="/peripheral-nerve-surgery"
                    className="hover:underline"
                  >
                    Peripheral Nerve Surgery
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://adminpannel-landmark-hospital.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white py-1 px-4 rounded inline-block hover:bg-white hover:text-blue-900 transition"
                >
                  Admin Login
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Cases", path: "/cases" },
                  { name: "Testimonials", path: "/testimonials" },
                  { name: "Blog", path: "/blog" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Contact Us", path: "/contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <FaChevronCircleRight className="inline-block mr-2" />
                    <Link
                      to={link.path}
                      className="hover:underline"
                      onClick={handletop}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Google Map */}
             <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2">Visit Us</h4>
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3951569818246!2d80.94437887522474!3d26.92268447664127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570b190f211f%3A0x574e3bb68777d9c2!2sLandmark%20Advance%20Neurospine%20Care%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1755161401856!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Landmark Advance Neurospine Care Superspeciality Hospital"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BottomFooter />
    </>
  );
};

export default Footer;

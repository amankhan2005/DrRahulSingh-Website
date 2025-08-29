import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BottomFooter from "./BottomFooter";
import { FaChevronCircleRight } from "react-icons/fa";

const handletop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-8 border-b">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-2 gap-8">

            {/* Contact Section */}
            <address className="not-italic">
              <div className="text-2xl font-semibold md:mb-4 mb-2 ">
                Contact Us
              </div>
              <ul>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <a
                    href="mailto:info@drrahulneurosurgeon.com"
                    className="hover:underline"
                    aria-label="Email us at info@drrahulneurosurgeon.com"
                  >
                    info@drrahulneurosurgeon.com
                  </a>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <a
                    href="tel:987654321"
                    className="hover:underline"
                    aria-label="Call us at 987654321"
                  >
                    +91 84001-36465
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="https://maps.app.goo.gl/nt8BVHTHFHfzuJL77"
                    className="flex items-center hover:underline"
                    aria-label="Find us on Google Maps"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span className="text-left">
                      M-II/016, Prabhat Chauraha, Janki Vihar, Lucknow, UP 226021
                    </span>
                  </a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <nav className="mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://www.facebook.com/share/r/19gTTL6WAb/"
                      className="hover:text-gray-200 text-xl hover:scale-125"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/"
                      className="hover:text-gray-200 text-xl hover:scale-125"
                      aria-label="Twitter"
                    >
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/p/DNxe8nHxMqx/"
                      className="hover:text-gray-200 text-xl hover:scale-125"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/shorts/c5pUr78NOng?feature=share"
                      className="hover:text-gray-200 text-xl hover:scale-125"
                      aria-label="YouTube"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7365679710237839360"
                      className="hover:text-gray-200 text-xl hover:scale-125"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </nav>
            </address>

            {/* Specialities */}
            <div>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 ">
                Our Specialities
              </h4>
              <ul className="space-y-1">
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
                  <Link to="/peripheral-nerve-surgery" className="hover:underline">
                    Peripheral Nerve Surgery
                  </Link>
                </li>
              </ul>

              {/* Admin Login Button under Specialities */}
              <div className="mt-4">
                <a
                  href="https://hope-adminpannel.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border inline-block border-white py-1 px-4 rounded hover:bg-white hover:text-blue-900 transition duration-200"
                >
                  Admin Login
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav>
              <h4 className="text-2xl font-semibold md:mb-4 mb-2 ">
                Quick Links
              </h4>
              <ul className="space-y-1">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Cases", path: "/cases" },
                  { name: "Testimonials", path: "/testimonials" },
                  { name: "Blog", path: "/blog" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Contact Us", path: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
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
              <h4 className="text-2xl font-semibold md:mb-4 mb-2  ">
                Visit Us
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3951569818246!2d80.94437887522474!3d26.92268447664127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570b190f211f%3A0x574e3bb68777d9c2!2sLandmark%20Advance%20Neurospine%20Care%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1755161401856!5m2!1sen!2sin"
                className="w-full h-45 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Landmark Advance Neurospine Care Superspeciality Hospital"
              />
            </div>
          </div>
        </div>
      </footer>

      <BottomFooter />
    </>
  );
};

export default Footer;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import landmarkLogo from "../assets/Landmark Dr rahul singh.png";
import { specialities } from "../SpecilitesData";
import TestimonialSection from "./Testimonial";
import { FaXTwitter } from "react-icons/fa6";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className="bg-white   shadow-md"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className=" container  mx-auto flex justify-between items-center py-1 px-4"  >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={landmarkLogo}
              alt="Landmark Hospital Logo"
              title="Landmark Logo"
              className="w-30 h-full"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="">
          <div
            className="lg:hidden text-gray-800 text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-60  bg-white shadow-2xl transform ${isMobileMenuOpen
              ? "translate-x-0 overflow-hidden"
              : "translate-x-full overflow-hidden"
              } transition-transform duration-300 ease-in-out lg:hidden shadow-2xl`}
          >
            <div className="flex text-gray-100 justify-around items-center py-2  bg-primary md:text-lg text-sm px-2">
              <a
                href="https://facebook.com"
                className="hover:text-gray-50"
                title="Facebook"
                aria-label="Visit our Facebook page"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://twitter.com"
                className="hover:text-gray-50"
                title="Twitter"
                aria-label="Visit our Twitter page"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://instagram.com"
                className="hover:text-gray-50"
                title="Instagram"
                aria-label="Visit our Instagram page"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://youtube.com"
                className="hover:text-gray-50"
                title="YouTube"
                aria-label="Visit our YouTube channel"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://linkedin.com"
                className="hover:text-gray-50"
                title="LinkedIn"
                aria-label="Visit our LinkedIn page"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://plus.google.com"
                className="hover:text-gray-50"
                title="Google Plus"
                aria-label="Visit our Google Plus page"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <button
              aria-label="Navbar Icon"
              title="Navbar Icon"
              className="absolute top-10 shadow-2xl  right-2 text-gray-100 text-xl font-bold bg-primary hover-bg-primary h-8 w-8 rounded-full cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="text-gray-800 font-semibold space-y-4 px-2 ps-6  mt-5 ">
              <li
                className={`hover-text-primary ${location.pathname === "/" ? "text-primary" : ""
                  }`}
              >
                <Link
                  to="/"
                  title="Home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/about"
                  onClick={() => handleDropdown("about")}
                  className="w-full text-left hover-text-primary"
                >
                  About Us ▾
                </Link>
                {openDropdown === "about" && (
                  <ul className="block bg-white shadow-md rounded-md py-2 w-full text-sm">
                    <li>
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Hope Hospital
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-team"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <Link
                  to="/specialities"
                  onClick={() => handleDropdown("specialities")}
                  className="w-full text-left hover-text-primary"
                >
                  Specialities ▾
                </Link>
                {openDropdown === "specialities" && (
                  <ul className="block bg-white shadow-md rounded-md py-2 w-full text-sm">
                    {specialities.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={`/specialities/${item.link}`}
                          className="block px-4 py-2 hover:bg-blue-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="relative cursor-pointer">
                <Link
                  to="/facilities"
                  className="hover-text-primary "
                  onClick={() => handleDropdown("facilities")}
                >
                  Facilities ▾
                </Link>
                {openDropdown === "facilities" && (
                  <ul className="block bg-white shadow-md rounded-md py-2 w-full  text-sm">
                    <li>
                      <Link
                        to="/facilities/nicu"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        NICU
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/icu"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        ICU
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/general-care"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        General Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/private-care"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Private Care
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`hover-text-primary  ${location.pathname === "/cases" ? "text-primary" : ""
                  }`}
              >
                <Link to="/cases" onClick={() => setIsMobileMenuOpen(false)}>
                  Cases
                </Link>
              </li>

              <li
                className={`hover-text-primary  ${location.pathname === "/blog" ? "text-primary" : ""
                  }`}
              >
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li
                className={`hover-text-primary  ${location.pathname === "/gallery" ? "text-primary" : ""
                  }`}
              >
                <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li
                className={`hover-text-primary  ${location.pathname === "/testimonials" ? "text-primary" : ""
                  }`}
              >
                <Link
                  to="/testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li
                className={`hover-text-primary ${location.pathname === "/contact" ? "text-primary" : ""
                  }`}
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Items for Desktop */}
        {/* Navigation Items for Desktop */}
        <ul className="hidden lg:flex  text-gray-800 font-semibold">
          <li
            className={`px-4 hover-text-primary ${location.pathname === "/" ? " text-primary" : ""}`}
          >
            <Link to="/" title="Home">
              Home
            </Link>
          </li>

          <li
            className="relative cursor-pointer px-4"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="/about" title="About Us" className="hover-text-primary">
              About Us ▾
            </Link>
            {openDropdown === "about" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-64 transition-all duration-300 text-sm divide-y divide-gray-200">
                <li>
                  <Link to="/about" className="block px-4 py-2 hover:bg-blue-100">
                    About LandMark Hospital
                  </Link>
                </li>
                <li>
                  <Link to="/our-team" className="block px-4 py-2 hover:bg-blue-100">
                    About Dr. Rahul Singh
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer px-4"
            onMouseEnter={() => handleDropdown("specialities")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="/brain" title="Our Specialities" className="hover-text-primary">
              Our Specialities ▾
            </Link>
            {openDropdown === "specialities" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-64 transition-all duration-300 text-sm divide-y divide-gray-200">
                <li>
                  <Link to="/brain" className="block px-4 py-2 hover:bg-blue-100">
                    Brain Surgery
                  </Link>
                </li>
                <li>
                  <Link to="/spine" className="block px-4 py-2 hover:bg-blue-100">
                    Spine Surgery
                  </Link>
                </li>
                <li>
                  <Link to="/peripheral-nerve-surgery" className="block px-4 py-2 hover:bg-blue-100">
                    Peripheral Nerve Surgery
                  </Link>
                </li>
              </ul>
            )}
          </li>


          <li
            className={`px-4 hover-text-primary ${location.pathname === "/facilities" ? "text-primary" : ""}`}
          >
            <Link to="/facilities">Facilities</Link>
          </li>

          <li
            className={`px-4 hover-text-primary ${location.pathname === "/cases" ? "text-primary" : ""}`}
          >
            <Link to="/cases">Cases</Link>
          </li>

          <li
            className={`px-4 hover:text-primary ${location.pathname.startsWith("/blog") ? "text-primary font-semibold" : ""
              }`}
          >
            <Link to="/blog">Blog</Link>
          </li>

          <li
            className="relative cursor-pointer px-4"
            onMouseEnter={() => handleDropdown("gallery")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to="/gallery" title="Gallery" className="hover-text-primary">
              Gallery ▾
            </Link>

            {openDropdown === "gallery" && (
              <ul className="absolute z-50 left-0 bg-white shadow-md rounded-md py-2 w-52 transition-all duration-300 text-sm divide-y divide-gray-200">
                <li>
                  <Link
                    to="/gallery?tab=photo"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery?tab=video"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Video Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery?tab=news"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    News & Media
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery?tab=rewards"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Rewards & Recognition
                  </Link>
                </li>
              </ul>
            )}
          </li>


          <li
            className={`px-4 hover-text-primary ${location.pathname === "/testimonials" ? "text-primary" : ""}`}
          >
            <Link to="/testimonials">Testimonials</Link>
          </li>

          <li
            className={`px-4 hover-text-primary ${location.pathname === "/contact" ? "text-primary" : ""}`}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

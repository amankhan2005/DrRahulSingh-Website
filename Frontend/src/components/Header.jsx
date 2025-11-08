 import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import landmarkLogo from "../assets/Landmark Dr rahul singh.png";

const menuItems = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    link: "/about-us",
    subItems: [
      { label: "About Landmark Hospital", link: "/about-us" },
      { label: "About Dr. Rahul Singh", link: "/about-rahulsingh" },
    ],
  },
  {
    label: "Our Specialities",
    link: "/brain",
    subItems: [
      { label: "Brain Surgery", link: "/brain" },
      { label: "Spine Surgery", link: "/spine" },
      { label: "Peripheral Nerve Surgery", link: "/peripheral-nerve-surgery" },
    ],
  },
  { label: "Facilities", link: "/facilities" },
  { label: "Cases", link: "/cases" },
  { label: "Blog", link: "/blog" },
  {
    label: "Gallery",
    link: "/gallery",
    subItems: [
      { label: "Photo Gallery", link: "/gallery?tab=photo" },
      { label: "Video Gallery", link: "/gallery?tab=video" },
      { label: "News & Media", link: "/gallery?tab=news" },
      { label: "Rewards & Recognition", link: "/gallery?tab=rewards" },
    ],
  },
  { label: "Testimonials", link: "/testimonials" },
  { label: "Contact", link: "/Contact-us" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile sidebar is open to prevent background scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      // store previous value to restore later
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "auto";
      };
    }
    // if menu closed ensure overflow is restored
    document.body.style.overflow = "auto";
  }, [isMobileMenuOpen]);

  const toggleDropdown = (label) =>
    setOpenDropdown(openDropdown === label ? null : label);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white shadow-md py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo with animation */}
          <Link to="/" className="group relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src={landmarkLogo}
              alt="Landmark Logo"
              title="Landmark Hospital"
              className={`relative transition-all duration-300 w-auto ${
                scrolled ? "h-12 sm:h-14" : "h-14 sm:h-16 md:h-18"
              } group-hover:scale-105`}
              loading="lazy"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-1 xl:space-x-2 font-semibold text-gray-700">
              {menuItems.map((item, index) => (
                <li
                  key={item.label}
                  className="relative group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      to={item.link}
                      className={`relative px-3 py-2 md:px-4 rounded-lg flex items-center gap-1 transition-all duration-300 ${
                        location.pathname === item.link
                          ? "text-blue-600 bg-blue-50"
                          : "hover:text-blue-600"
                      }`}
                      onClick={(e) => item.subItems && e.preventDefault()}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.subItems && (
                        <FaChevronDown className="ml-1 text-xs transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      
                      {/* Animated underline */}
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                  </div>

                  {/* Enhanced Dropdown */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 min-w-[240px]">
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 pointer-events-none"></div> */}
                        <ul className="relative py-2">
                          {item?.subItems?.map((sub, subIndex) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.link}
                                className="group/item relative block px-4 py-1 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 overflow-hidden"
                                style={{ animationDelay: `${subIndex * 50}ms` }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <div className="relative text-xl sm:text-2xl text-gray-800">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Enhanced Mobile Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 backdrop-blur-xl shadow-2xl z-50 transform transition-all duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-100 via-cyan-50 to-transparent opacity-50"></div>
        
        {/* Sidebar Header */}
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-30"></div>
              <img
                src={landmarkLogo}
                alt="Landmark Logo"
                className="relative h-10 sm:h-12 w-auto"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Menu
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-red-50 text-gray-600 hover:text-red-500 transition-all duration-200"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Sidebar Menu Items */}
        <ul className="relative px-3 sm:px-4 py-4 sm:py-6 space-y-1 font-medium text-gray-800 overflow-y-auto h-[calc(100%-4.5rem)] sm:h-[calc(100%-5rem)]">
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              className="animate-slideIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.subItems ? (
                <div>
                  <button
                    className={`flex justify-between items-center w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 ${
                      openDropdown === item.label
                        ? "bg-gradient-to-r from-blue-100 to-cyan-100 shadow-md text-blue-700"
                        : "hover:bg-white/80 hover:shadow-sm"
                    }`}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span className="font-semibold">{item.label}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === item.label ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-3 sm:pl-4 space-y-1 border-l-2 border-gradient-to-b from-blue-400 to-cyan-400">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-200 ${
                              location.pathname === sub.link
                                ? "text-blue-600 font-semibold bg-blue-50 shadow-sm"
                                : "hover:text-blue-600 hover:bg-white/60 hover:pl-5 sm:hover:pl-6"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 ${
                    location.pathname === item.link
                      ? "bg-gradient-to-r from-blue-100 to-cyan-100 shadow-md text-blue-700 font-semibold border-l-4 border-blue-500"
                      : "hover:bg-white/80 hover:shadow-sm hover:pl-5 sm:hover:pl-6"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-100/40 to-transparent pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}

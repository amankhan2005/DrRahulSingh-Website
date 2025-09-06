 import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import landmarkLogo from "../assets/Landmark Dr rahul singh.png";

const menuItems = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    link: "/about",
    subItems: [
      { label: "About Landmark Hospital", link: "/about" },
      { label: "About Dr. Rahul Singh", link: "/our-team" },
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
  { label: "Contact", link: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const menuRef = useRef();

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

  const toggleDropdown = (label) =>
    setOpenDropdown(openDropdown === label ? null : label);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={landmarkLogo}
            alt="Landmark Logo"
            title="Landmark Hospital"
            className="h-16 md:h-20 w-auto"
            loading="lazy"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to={item.link}
                  className={`flex items-center gap-1 hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.link ? "text-primary" : ""
                  }`}
                  onClick={(e) => item.subItems && e.preventDefault()}
                >
                  {item.label}
                  {item.subItems && (
                    <FaChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {openDropdown === item.label && item.subItems && (
                  <button
                    onClick={() => setOpenDropdown(null)}
                    className="ml-2 text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full"
                    aria-label="Close dropdown"
                  >
                    <FaTimes size={14} />
                  </button>
                )}
              </div>

              {item.subItems && (
                <ul className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-60 text-sm divide-y divide-gray-200 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        to={sub.link}
                        className="block px-5 py-2 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-gray-800 p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-all"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
          <div className="flex items-center gap-3">
            <img src={landmarkLogo} alt="Landmark Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg text-gray-800">Menu</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-red-500"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Sidebar Menu Items */}
        <ul className="px-4 py-6 space-y-2 font-medium text-gray-800">
          {menuItems.map((item) => (
            <li key={item.label}>
              {item.subItems ? (
                <div>
                  <button
                    className="flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <ul className="mt-2 pl-6 space-y-1 border-l border-gray-200">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 hover:text-primary hover:underline transition-colors ${
                              location.pathname === sub.link ? "text-primary font-semibold" : ""
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors ${
                    location.pathname === item.link ? "border-l-4 border-primary bg-blue-50" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

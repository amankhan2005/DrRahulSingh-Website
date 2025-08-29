import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

import StickyNavbar from "./components/StickyNavbar";
import Footer from "./components/Footer";

// ✅ Pages
import Home from "./Pages/Home";
import Testimonial from "./components/Testimonial"; // Component, not lazy

// ✅ Lazy-loaded pages
const Appointment = lazy(() => import("./Pages/Appointment"));
const OurTeam = lazy(() => import("./Pages/RahulSinghPage"));
const GalleryPage = lazy(() => import("./Pages/GalleryPage"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Cases = lazy(() => import("./Pages/Cases"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const Specialities = lazy(() => import("./Pages/Specilities"));
const SpecialtyDetail = lazy(() => import("./components/SpecialitiesDetail"));
const FacilitiesPage = lazy(() => import("./Pages/FacilitiesPage"));
const FacilitiesDetail = lazy(() => import("./components/FacilitiesDetail"));
const BlogDetailPage = lazy(() => import("./components/BlogDetail"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

// ✅ New Speciality Pages
const Brain = lazy(() => import("./Pages/Brain"));
const Spine = lazy(() => import("./Pages/Spine"));
const PeripheralNerveSurgery = lazy(() =>
  import("./Pages/PeripheralNerveSurgery")
);

// ✅ Loading fallback for lazy pages
const LoadingSpinner = () => (
  <div className="flex justify-center flex-col items-center h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-800"></div>
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Global styles */}
      <StickyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Lazy-loaded pages */}
        <Route
          path="/our-team"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <OurTeam />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/cases"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Cases />
            </Suspense>
          }
        />

        <Route
          path="/blog"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          }
        />

        {/* Blog detail */}
        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/specialities/:specialtyName"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SpecialtyDetail />
            </Suspense>
          }
        />
        <Route
          path="/facilities"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FacilitiesPage />
            </Suspense>
          }
        />
        <Route
          path="/facilities/:facilitiesName"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FacilitiesDetail />
            </Suspense>
          }
        />

        {/* New Specialities Pages */}
        <Route
          path="/brain"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Brain />
            </Suspense>
          }
        />
        <Route
          path="/spine"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Spine />
            </Suspense>
          }
        />
        <Route
          path="/peripheral-nerve-surgery"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PeripheralNerveSurgery />
            </Suspense>
          }
        />

        {/* Component, not lazy */}
        <Route path="/testimonials" element={<Testimonial />} />

        <Route
          path="/appointment"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Appointment />
            </Suspense>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

 import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Lazy Components
const StickyNavbar = lazy(() => import("./components/StickyNavbar"));
const Footer = lazy(() => import("./components/Footer"));
const ChatWidget = lazy(() => import("./components/ChatWidget"));
const Testimonial = lazy(() => import("./components/Testimonial"));

// ✅ Pages
import Home from "./Pages/Home"; // Home ko eager load rakha for speed

// ✅ Lazy-loaded Pages
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

// ✅ Loading fallback
const LoadingSpinner = () => (
  <div className="flex justify-center flex-col items-center h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-800"></div>
    <p className="mt-4 text-blue-800">Loading...</p>
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

  // ✅ Prefetch important pages in background
  useEffect(() => {
    import("./Pages/AboutPage");
    import("./Pages/ContactUs");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<LoadingSpinner />}>
        <ChatWidget />
        <StickyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Lazy-loaded routes */}
          <Route path="/about-rahulsingh" element={<OurTeam />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/specialities/:specialtyName" element={<SpecialtyDetail />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/facilities/:facilitiesName" element={<FacilitiesDetail />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/spine" element={<Spine />} />
          <Route path="/peripheral-nerve-surgery" element={<PeripheralNerveSurgery />} />

          {/* Testimonials (lazy component) */}
          <Route path="/testimonials" element={<Testimonial />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

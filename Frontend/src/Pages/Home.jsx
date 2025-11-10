 import React, { Suspense, lazy } from 'react';
import HeroSlider from '../components/HeroSlide'; // Load Immediately (Critical Content)

const AboutSection = lazy(() => import('../components/About'));
const AboutDrRahul = lazy(() => import('../components/AboutDrRahul'));
const WhyRahulSingh = lazy(() => import('../components/WhyRahulSingh'));
const OurTeam = lazy(() => import('../components/OurTeam2'));
const Stats = lazy(() => import('../components/Stats'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonial = lazy(() => import('../components/Testimonial'));
const Gallery = lazy(() => import('../components/Gallery'));
import YouTubeGallery from '../components/YoutubeGallery';
import AppointmentModal from '../components/AppointmentModal';
const ContactUs = lazy(() => import('../components/ContactUs'));
const HowWeWork = lazy(() => import('../components/HowWeWork'));
const BlogComponent = lazy(() => import('../components/BlogSection'));
const SpecialitiesSection = lazy(() => import('../components/SpecialitiesSection'));
const FacilitiesSection = lazy(() => import('../components/FacilitiesSection'));

function Home() {
  return (
    // Top-level wrapper: prevent horizontal overflow, ensure predictable vertical scroll
    <div className="w-full max-w-full overflow-x-hidden antialiased">
      {/* Load HeroSlider Immediately for Faster FCP */}
      <HeroSlider />

      {/* Lazy Load the Rest */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-800" />
          </div>
        }
      >
        {/* Main content container:
            - min-h-screen avoids blank gaps on short content
            - relative keeps absolutely-positioned children constrained
            - overflow-x-hidden double-ensures no horizontal scroll
        */}
        <main className="min-h-screen relative w-full overflow-x-hidden">
          <AboutSection />

          <SpecialitiesSection />
          <Stats />
          <AboutDrRahul />
          <WhyRahulSingh />
          <HowWeWork />
          <ContactUs />
          <FacilitiesSection />

          <Gallery />
          {/* <OurTeam /> */}
          {/* <WhyChooseUs /> */}
          <YouTubeGallery />

          <Testimonial />

          <BlogComponent />
        </main>
      </Suspense>

      {/* If you have a modal globally (like AppointmentModal), render it outside main flow */}
      <AppointmentModal />
    </div>
  );
}

export default React.memo(Home);

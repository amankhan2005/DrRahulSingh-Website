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
 const ContactUs = lazy(() => import('../components/ContactUs'));
const HowWeWork = lazy(() => import('../components/HowWeWork'));
const BlogComponent = lazy(() => import('../components/BlogSection'));
 const SpecialitiesSection = lazy(() => import('../components/SpecialitiesSection'));
const FacilitiesSection = lazy(() => import('../components/FacilitiesSection'));
 

function Home() {
  return (
    <>
      {/* Load HeroSlider Immediately for Faster FCP */}
      <HeroSlider />  

      {/* Lazy Load the Rest */}
      <Suspense fallback={ <div className="flex justify-center flex-col items-center py-10">
    <div className="animate-spin rounded-full h-8 w-8 border-t-4  border-blue-800"></div>
  </div>}>
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
         
      </Suspense>
    </>
  );
}

export default React.memo(Home);

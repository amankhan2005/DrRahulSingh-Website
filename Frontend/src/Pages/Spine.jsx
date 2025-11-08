 // src/pages/SpinePage.jsx

// -- keep your actual image imports / paths here --

import ImgSpineTumor from "../assets/Spine/spine-tumour.jpg";
import ImgCongenitalSpine from "../assets/Spine/congential-Spine.jpg";
import ImgSpineTrauma from "../assets/Spine/traumatic-spine.jpg";
import ImgSpinalDeformity from "../assets/Spine/spinal-deformity.jpg";
import ImgSpinalInfection from "../assets/Spine/spinal-infection.jpg";
import ImgCVJunction from "../assets/Spine/cv-junction.jpg";
import SpineSurgery from "../components/SpineSurgery";

const topics = [
  {
    id: "spine-tumor",
    title: "Spine Tumors",
    image: ImgSpineTumor,
    content: `
      <h3><strong>What are Spine Tumors?</strong></h3>
      <p>
        Spine tumors are abnormal growths that develop within the spinal cord, spinal canal, or surrounding structures. 
        They may be <em>benign</em> (non-cancerous) or <em>malignant</em> (cancerous). Even benign tumors can cause 
        significant problems by compressing the spinal cord or nerves.
      </p>

      <h3><strong>Causes & Risk Factors</strong></h3>
      <p>
        Most spine tumors have no clear cause. However, risk factors include genetic syndromes 
        (e.g., neurofibromatosis), exposure to radiation, family history, and metastasis from other body cancers.
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Persistent back pain not relieved by rest</li>
        <li>Weakness or numbness in arms or legs</li>
        <li>Difficulty walking or maintaining balance</li>
        <li>Loss of bladder or bowel control in severe cases</li>
      </ul>

      <h3><strong>Diagnosis & Treatment</strong></h3>
      <p>
        Diagnosis involves MRI/CT scans and biopsy for confirmation. Treatment depends on tumor type and location:
      </p>
      <ul>
        <li><strong>Surgery:</strong> To remove or decompress the tumor.</li>
        <li><strong>Radiation therapy:</strong> For residual or inoperable tumors.</li>
        <li><strong>Chemotherapy:</strong> For malignant lesions or systemic cancers.</li>
        <li><strong>Rehabilitation:</strong> Physiotherapy and pain management post-treatment.</li>
      </ul>
    `,
  },
  {
    id: "congenital-spinal-disorder",
    title: "Congenital Spinal Disorder",
    image: ImgCongenitalSpine,
    content: `
      <h3><strong>What are Congenital Spinal Disorders?</strong></h3>
      <p>
        Congenital spinal disorders are abnormalities in spine development present at birth. 
        They may involve malformations of vertebrae, spinal cord, or nerves.
      </p>

      <h3><strong>Common Types</strong></h3>
      <ul>
        <li><strong>Spina bifida:</strong> Incomplete closure of the spinal canal.</li>
        <li><strong>Congenital scoliosis:</strong> Abnormal curvature due to malformed vertebrae.</li>
        <li><strong>Tethered cord syndrome:</strong> Spinal cord abnormally attached to surrounding tissues.</li>
      </ul>

      <h3><strong>Symptoms</strong></h3>
      <ul>
        <li>Visible spinal deformity</li>
        <li>Weakness or paralysis in legs</li>
        <li>Bladder or bowel dysfunction</li>
      </ul>

      <h3><strong>Treatment Options</strong></h3>
      <p>
        Early diagnosis is crucial. Treatment may include:
      </p>
      <ul>
        <li>Surgical correction (for spina bifida or scoliosis)</li>
        <li>Physical therapy and assistive devices</li>
        <li>Multidisciplinary care for long-term management</li>
      </ul>
    `,
  },
  {
    id: "traumatic-spine-injury",
    title: "Traumatic Spine Injury",
    image: ImgSpineTrauma,
    content: `
      <h3><strong>What is a Traumatic Spine Injury?</strong></h3>
      <p>
        Traumatic spine injuries result from sudden force or accidents affecting the vertebrae, spinal cord, or supporting structures. 
        These injuries can range from minor fractures to life-threatening spinal cord damage.
      </p>

      <h3><strong>Causes</strong></h3>
      <ul>
        <li>Road traffic accidents</li>
        <li>Falls from height</li>
        <li>Sports injuries</li>
        <li>Violence or trauma</li>
      </ul>

      <h3><strong>Symptoms</strong></h3>
      <ul>
        <li>Severe back or neck pain</li>
        <li>Weakness or paralysis below injury level</li>
        <li>Loss of sensation</li>
        <li>Loss of bladder/bowel control</li>
      </ul>

      <h3><strong>Treatment Principles</strong></h3>
      <p>
        Treatment depends on severity:
      </p>
      <ul>
        <li><strong>Immobilization:</strong> Cervical collars, braces.</li>
        <li><strong>Surgery:</strong> Stabilization and decompression.</li>
        <li><strong>Rehabilitation:</strong> Long-term physiotherapy and occupational therapy.</li>
      </ul>
    `,
  },
  {
    id: "spinal-deformity-correction",
    title: "Spinal Deformity Correction",
    image: ImgSpinalDeformity,
    content: `
      <h3><strong>What is Spinal Deformity?</strong></h3>
      <p>
        Spinal deformities are abnormal curvatures or misalignments of the spine, such as scoliosis, kyphosis, or lordosis. 
        They can be congenital, degenerative, or secondary to trauma or neuromuscular disease.
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Uneven shoulders or hips</li>
        <li>Hunched back or exaggerated curves</li>
        <li>Back pain and stiffness</li>
        <li>Difficulty breathing (in severe cases)</li>
      </ul>

      <h3><strong>Treatment & Correction</strong></h3>
      <p>
        Management depends on age, curve severity, and progression:
      </p>
      <ul>
        <li><strong>Bracing:</strong> For mild to moderate cases in growing children.</li>
        <li><strong>Surgery:</strong> Spinal fusion or corrective osteotomies for severe deformities.</li>
        <li><strong>Physical therapy:</strong> To improve strength, posture, and flexibility.</li>
      </ul>
    `,
  },
  {
    id: "spinal-infection",
    title: "Spinal Infection",
    image: ImgSpinalInfection,
    content: `
      <h3><strong>What are Spinal Infections?</strong></h3>
      <p>
        Spinal infections are infections of the vertebrae, intervertebral discs, or spinal canal. 
        They may be caused by bacteria (like tuberculosis), fungi, or post-surgical contamination.
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Persistent severe back pain</li>
        <li>Fever, chills, and weight loss</li>
        <li>Neurological deficits (weakness, numbness)</li>
      </ul>

      <h3><strong>Diagnosis & Treatment</strong></h3>
      <p>
        Diagnosis involves blood tests, imaging (MRI), and biopsy. Treatment includes:
      </p>
      <ul>
        <li><strong>Antibiotics or antifungals:</strong> Long-term targeted therapy.</li>
        <li><strong>Surgery:</strong> In cases of abscess, instability, or cord compression.</li>
        <li><strong>Supportive care:</strong> Pain management and rehabilitation.</li>
      </ul>
    `,
  },
  {
    id: "cv-junction-anomaly",
    title: "CV Junction Anomaly",
    image: ImgCVJunction,
    content: `
      <h3><strong>What is a Craniovertebral (CV) Junction Anomaly?</strong></h3>
      <p>
        The CV junction is the area where the skull meets the upper cervical spine. 
        Anomalies in this region may be congenital or acquired, leading to instability and compression of neural structures.
      </p>

      <h3><strong>Causes & Types</strong></h3>
      <ul>
        <li>Congenital malformations (e.g., basilar invagination, atlantoaxial dislocation)</li>
        <li>Trauma or inflammatory conditions</li>
        <li>Degenerative changes</li>
      </ul>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Neck pain and stiffness</li>
        <li>Headache at the back of the skull</li>
        <li>Weakness or numbness in limbs</li>
        <li>Difficulty walking or maintaining balance</li>
      </ul>

      <h3><strong>Treatment Options</strong></h3>
      <p>
        Treatment focuses on stabilizing the CV junction and relieving compression:
      </p>
      <ul>
        <li><strong>Surgery:</strong> Fusion and decompression are often required.</li>
        <li><strong>Rehabilitation:</strong> To regain mobility and strength post-surgery.</li>
      </ul>
    `,
  },
];

import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";
import BreadCumb from "../components/BreadCumb"; // adjust path

// Shorts list
const shortsVideos = [
   "https://www.youtube.com/embed/Hl4n09fYu78?si=OLU4MYRKLvUfc1HV",
  "https://www.youtube.com/embed/ZJwE5BvPRfE?si=UmIXJhUJORJMa9Yz",
  "https://www.youtube.com/embed/6VJo3CgOpfk?si=ZjS-YrX2uFL99PqE",
  "https://www.youtube.com/embed/vNINyNnYAHo?si=duK6l1suCONSwNei",
  "https://www.youtube.com/embed/-nOLqRZLJCA?si=o43P6YKyxC3kP9Q1",
  "https://www.youtube.com/embed/TuHN5sq68YI?si=BrqIhM6G_M4TyFXG",
  "https://www.youtube.com/embed/XwARUloBotE?si=eaUQxRFLs1Wpus1S",
];

export default function SpinePage() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainContentRef = useRef(null);

  // Shorts slideshow state
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % shortsVideos.length);
      }, 30000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + shortsVideos.length) % shortsVideos.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % shortsVideos.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <BreadCumb
        title="Spine Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Our Specialities" },
          { label: "Spine Surgery" },
        ]}
      />
      
      <SpineSurgery />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Spine Conditions & Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive care for spinal disorders with advanced treatment options and personalized rehabilitation.
          </p>
        </div>
      
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Column */}
          <div className="flex flex-col gap-6 w-full lg:w-1/4">
            {/* Toggle button for mobile */}
            <div className="flex justify-between items-center lg:hidden mb-2 bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary">Spine Conditions</h3>
              <button
                className="p-2 rounded-full bg-primary text-white hover:bg-blue-700 transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Topics"
              >
                {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
              </button>
            </div>
      
            {/* Topics Aside */}
            <aside
              className={`bg-white rounded-xl shadow-lg transition-all duration-300 ${
                sidebarOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">Explore Topics</h3>
                <ul className="space-y-2">
                  {topics.map((topic) => (
                    <li
                      key={topic.id}
                      onClick={() => {
                        setActiveTopic(topic);
                        setSidebarOpen(false); // hide on mobile after click
                        mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-lg border transition-all duration-200 ${
                        activeTopic.id === topic.id
                          ? "bg-primary text-white border-blue-600 shadow-md transform -translate-y-0.5"
                          : "bg-white text-slate-700 hover:bg-blue-50 border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <span className="text-sm font-medium">{topic.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeTopic.id === topic.id ? "text-white" : "text-slate-400"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
      
            {/* Emergency Contact Card */}
            <aside className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6 text-center transform transition-transform hover:scale-[1.02]">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold uppercase mb-2">Need Emergency Care?</h4>
                <h2 className="text-xl font-bold mb-3 leading-snug">
                  Looking For The Best <br /> Medical Solutions?
                </h2>
              </div>
              <p className="text-sm opacity-90 mb-5">
                Get reliable healthcare support from our expert team of doctors and staff.
              </p>
              <Link
                to="/contact-us"
                className="inline-block rounded-lg bg-white px-6 py-3 text-primary font-bold shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Contact With Us
              </Link>
            </aside>
      
            {/* Shorts Section */}
            <aside className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Our Latest Shorts
                </h3>
              </div>
              <div className="p-4">
                <div
                  className="relative w-full overflow-hidden rounded-lg shadow-md"
                  style={{ paddingTop: "177.78%" }}
                >
                  <iframe
                    src={shortsVideos[current]}
                    title="YouTube Shorts"
                    frameBorder="0"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
                
                {/* Video Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button 
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous video"
                  >
                    <SkipBack className="w-5 h-5 text-gray-700" />
                  </button>
                  
                  <button 
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-primary hover:bg-blue-700 text-white transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  
                  <button 
                    onClick={handleNext}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next video"
                  >
                    <SkipForward className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                
                {/* Video Progress */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-gray-500">Video {current + 1} of {shortsVideos.length}</span>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${((current + 1) / shortsVideos.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
      
          {/* Main Content */}
          <main ref={mainContentRef} className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
            <div className="relative">
              <img
                src={activeTopic.image}
                alt={activeTopic.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-4xl font-bold drop-shadow-lg">{activeTopic.title}</h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <article
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: activeTopic.content }}
              />
              
              {/* Related Topics */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">Related Topics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topics
                    .filter(topic => topic.id !== activeTopic.id)
                    .slice(0, 2)
                    .map(topic => (
                      <div 
                        key={topic.id}
                        onClick={() => {
                          setActiveTopic(topic);
                          mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                      >
                        <img 
                          src={topic.image} 
                          alt={topic.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-primary">{topic.title}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            Learn more about {topic.title.toLowerCase()}
                          </p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
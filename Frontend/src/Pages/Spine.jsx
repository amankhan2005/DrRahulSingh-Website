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

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BreadCumb from "../components/BreadCumb"; // adjust path

// Shorts list
const shortsVideos = [
  "https://www.youtube.com/embed/-nOLqRZLJCA?si=kwWXoJ8tGo7Gm24c",
  "https://www.youtube.com/embed/Hl4n09fYu78?si=OLU4MYRKLvUfc1HV",
  "https://www.youtube.com/embed/ZJwE5BvPRfE?si=UmIXJhUJORJMa9Yz",
  "https://www.youtube.com/embed/6VJo3CgOpfk?si=ZjS-YrX2uFL99PqE",
  "https://www.youtube.com/embed/vNINyNnYAHo?si=duK6l1suCONSwNei",
  "https://www.youtube.com/embed/-nOLqRZLJCA?si=o43P6YKyxC3kP9Q1",
  "https://www.youtube.com/embed/TuHN5sq68YI?si=BrqIhM6G_M4TyFXG",
  "https://www.youtube.com/embed/XwARUloBotE?si=eaUQxRFLs1Wpus1S",
];

export default function BrainPage() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Shorts slideshow state
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % shortsVideos.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-white min-h-screen">
      {/* Breadcrumb */}
      <BreadCumb
        title="Spine Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Our Specialities " },
          { label: "Spine Surgery" },
        ]}
      />
      <SpineSurgery />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-primary">
            Common Spinal Diseases and Anomalies{" "}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Comprehensive treatment for spine disorders.{" "}
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            className="md:hidden p-2 rounded bg-slate-100 hover:bg-slate-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle topics"
          >
            {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="flex flex-col gap-4 w-full md:w-1/4">
            {/* Topics Aside */}
            <aside
              className={`bg-slate-100 rounded-lg shadow transition-all ${
                sidebarOpen ? "block" : "hidden md:block"
              } sticky top-24 self-start`}
            >
              <div className="p-8">
                <ul className="space-y-2">
                  {topics.map((topic) => (
                    <li
                      key={topic.id}
                      onClick={() => {
                        setActiveTopic(topic);
                        setSidebarOpen(false);
                        // window.scrollTo({ top: 20, behavior: "smooth" });
                      }}
                      className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-lg border transition-colors ${
                        activeTopic.id === topic.id
                          ? "bg-primary text-white border-blue-600 shadow"
                          : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                      }`}
                    >
                      <span className="text-sm font-medium">{topic.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          activeTopic.id === topic.id
                            ? "text-white"
                            : "text-slate-400"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Second Aside */}
            <aside className="bg-[#285f91] text-white rounded-lg shadow p-10 text-center">
              <h4 className="text-sm font-semibold uppercase mb-2">
                Need Emergency?
              </h4>
              <h2 className="text-xl font-bold mb-3 leading-snug">
                Looking For The Best <br /> Medical Solutions?
              </h2>
              <p className="text-sm opacity-90 mb-4">
                Get reliable healthcare support from our expert team of doctors
                and staff.
              </p>
              <Link
                to="/contact"
                className="mt-2 inline-block rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-lg hover:bg-gray-100 transition duration-300 text-base md:text-lg"
              >
                Contact With Us
              </Link>
            </aside>

            {/* Third Aside - Shorts Slideshow */}
            {/* Third Aside - Shorts Slideshow */}
            <aside className="bg-slate-100 rounded-lg shadow-lg p-3">
              <h3 className="text-lg font-bold text-gray-700 text-center mb-2">
                Our Latest Shorts
              </h3>

              {/* 9:16 Ratio container */}
              <div
                className="relative w-full overflow-hidden rounded-xl shadow-md"
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
            </aside>
          </div>

          {/* Content */}
          <main className="flex-1 bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <img
                src={activeTopic.image}
                alt={activeTopic.title}
                className="w-full h-80 object-cover rounded-lg shadow-sm mb-4"
              />
              <div className="flex items-center justify-center">
                <h2 className="text-4xl font-bold text-primary">
                  {activeTopic.title}
                </h2>
              </div>
            </div>

            <article
              className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: activeTopic.content }}
            />
          </main>
        </div>
      </div>
    </section>
  );
}

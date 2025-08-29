 // src/pages/NervePage.jsx

// -- keep your actual image imports / paths here --
import ImgBrachialPlexus from "../assets/home/brachial-plexus.jpg";
import ImgCarpalTunnel from "../assets/home/carpal-tunnel.jpg";
import ImgEntrapmentNeuropathy from "../assets/home/entrapment-neuropathy.jpg";
import Nervesurgery from "../components/NerveSurgery";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BreadCumb from "../components/BreadCumb"; // adjust path

// Topics list
const topics = [
  {
    id: "brachial-plexus-injury",
    title: "Brachial Plexus Injury",
    image: ImgBrachialPlexus,
    content: `
      <h3><strong>What is Brachial Plexus Injury?</strong></h3>
      <p>
        A brachial plexus injury involves damage to the network of nerves 
        that send signals from the spinal cord to the shoulder, arm, and hand. 
        Injuries may result from trauma, accidents, birth injury, or tumors 
        compressing the nerves. The severity ranges from temporary weakness 
        to complete paralysis of the arm.
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Severe shoulder or arm pain</li>
        <li>Weakness or paralysis in the arm</li>
        <li>Loss of sensation or numbness</li>
        <li>Difficulty with fine motor function of hand and fingers</li>
      </ul>

      <h3><strong>Treatment Options</strong></h3>
      <p>
        Treatment depends on severity and includes physiotherapy, nerve grafting, 
        nerve transfer, or muscle transfer. Early evaluation by a nerve specialist 
        improves recovery outcomes significantly.
      </p>
    `,
  },
  {
    id: "carpal-tunnel-syndrome",
    title: "Carpal Tunnel Syndrome",
    image: ImgCarpalTunnel,
    content: `
      <h3><strong>What is Carpal Tunnel Syndrome?</strong></h3>
      <p>
        Carpal tunnel syndrome is a condition caused by compression of the median nerve 
        as it travels through the wrist. It is one of the most common nerve entrapment 
        disorders, often related to repetitive hand use, wrist anatomy, or medical conditions 
        such as diabetes and thyroid disease.
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Numbness or tingling in the thumb, index, and middle fingers</li>
        <li>Weak grip strength</li>
        <li>Hand pain, especially at night</li>
        <li>Difficulty performing fine tasks like buttoning clothes</li>
      </ul>

      <h3><strong>Treatment Options</strong></h3>
      <p>
        Management includes wrist splints, anti-inflammatory medication, steroid injections, 
        and surgical release of the transverse carpal ligament for severe or persistent cases.
      </p>
    `,
  },
  {
    id: "entrapment-neuropathy",
    title: "Entrapment Neuropathy",
    image: ImgEntrapmentNeuropathy,
    content: `
      <h3><strong>What is Entrapment Neuropathy?</strong></h3>
      <p>
        Entrapment neuropathy occurs when a peripheral nerve is compressed or trapped 
        along its anatomical pathway, causing dysfunction. Common sites include the wrist 
        (carpal tunnel), elbow (cubital tunnel), and ankle (tarsal tunnel). 
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Numbness, tingling, or burning sensation</li>
        <li>Localized pain that worsens with movement</li>
        <li>Weakness in muscles supplied by the nerve</li>
      </ul>

      <h3><strong>Treatment Options</strong></h3>
      <p>
        Conservative care includes rest, physiotherapy, ergonomic adjustments, and medications. 
        If symptoms persist, surgical decompression of the affected nerve may be required.
      </p>
    `,
  },
];

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

export default function NervePage() {
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
    <section className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <BreadCumb
        title="Peripheral Nerve Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Our Specialities " },
          { label: "Peripheral Nerve Surgery" },
        ]}
      />
      <Nervesurgery />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">
            Peripheral Nerve Conditions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Advanced Treatment for Nerve Injuries & Entrapment Disorders{" "}
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
          {/* Sidebar - fixed width */}
          <div className="flex flex-col gap-4 w-full md:w-80">
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
            <aside className="bg-[#285f91] text-white rounded-lg shadow p-15 text-center">
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

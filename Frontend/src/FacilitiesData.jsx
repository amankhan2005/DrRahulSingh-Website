import emergency from "./assets/Facilities/emergency.jpg";
import icu from "./assets/Facilities/ICU.jpg";
import privateRoom from "./assets/Facilities/Private.jpg";
import genral from "./assets/Facilities/General-care.jpg";

 export const facilities = [
  {
    id: 1,
    title: "Emergency Care",
    link: "emergency",
    description: "Our Emergency & Trauma Care Unit provides 24/7 immediate medical attention for critical situations. With expert doctors and advanced equipment.",
    image: `${emergency}`,
  },
  {
    id: 2,
    title: "ICU (Intensive Care Unit)",
    link: "icu",
    description: "Our ICU is equipped with world-class technology and a dedicated team of specialists to deliver round-the-clock monitoring and advanced life support for patients in critical conditions.",
    image: `${icu}`,
  },
  {
    id: 3,
    title: "General Care",
    link: "general-care",
    description: "We provide affordable and high-quality general healthcare services, ensuring that patients receive the best medical care in a safe and compassionate environment.",
    image: `${genral}`,
  },
  {
    id: 4,
    title: "Private Care",
    link: "private-care",
    description: "Our Private Rooms are designed for patients who seek comfort, privacy, and personalized attention. Experience world-class healthcare with the warmth of home-like care.",
    image: `${privateRoom}`,
  }
];

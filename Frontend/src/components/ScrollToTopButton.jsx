 // ScrollToTopButton.jsx
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);

      if (scrollTop > 200) {
        setIsVisible(true);

        // Pichla timeout clear
        if (timeoutId) clearTimeout(timeoutId);

        // 2s ke baad hide
        const id = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
        setTimeoutId(id);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer z-50 
        transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      {/* Circular progress */}
      <svg className="absolute w-12 h-12 transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="#2563eb"
          strokeWidth="4"
          fill="none"
          strokeDasharray={2 * Math.PI * 20}
          strokeDashoffset={
            2 * Math.PI * 20 - (progress / 100) * 2 * Math.PI * 20
          }
          className="transition-all duration-200"
        />
      </svg>

      {/* Arrow */}
      <FaChevronUp className="text-gray-700 relative z-10" />
    </div>
  );
};

export default ScrollToTopButton;

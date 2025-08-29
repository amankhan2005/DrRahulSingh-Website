import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:container mx-auto md:px-4">
      <div className="flex flex-wrap -mx-3">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 md:px-3 mb-4"
          >
            <div
              className="border border-gray-300 p-3 rounded-lg shadow-lg bg-white cursor-pointer transition-all hover:shadow-xl self-start"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-base text-gray-800">{faq.question}</h4>
                <span
                  className={`text-primary text-xl font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>

              {/* Answer (Collapsible) */}
              <div
                className={`text-gray-700 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="py-3 px-2 bg-gray-100 border-l-4 border-primary rounded-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import femaleAI from "../assets/female-ai.png";
import AppointmentModal from "./AppointmentModal";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [awaitingMoreConfirmation, setAwaitingMoreConfirmation] = useState(false);
  const [chatLocked, setChatLocked] = useState(false);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const unreadCount = 1;

  const predefinedQuestions = [
    {
      q: "What is the hospital address?",
      a: (
        <div>
          <p className="font-semibold">Hospital Address:</p>
          <p>M-II/016, Prabhat Chauraha, Janki Vihar, Lucknow, UP 226021</p>
          <a
            href="https://maps.app.goo.gl/NySWvTwjmSoAUuBV7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-1 block"
          >
            View on Map
          </a>
        </div>
      ),
    },
    {
      q: "Customer Support",
      a: (
        <div>
          <p className="font-semibold">Contact:</p>
          <p>
            Phone: <a href="tel:+918400136465" className="text-blue-600 underline">+91 84001-36465</a>
          </p>
          <p>
            Email: <a href="mailto:info@drrahulneurosurgeon.com" className="text-blue-600 underline">info@drrahulneurosurgeon.com</a>
          </p>
        </div>
      ),
    },
    {
      q: "How to book an appointment?",
      a: (
        <div className="flex flex-col gap-2">
          <p>You can book an appointment by clicking the button below:</p>
          <button
            className="mt-2 w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Book Appointment
          </button>
        </div>
      ),
    },
    {
      q: "What are the appointment timings?",
      a: (
        <div>
          <p className="font-semibold">Doctor Working Time:</p>
          <ul className="list-disc ml-5 mt-1 text-gray-700">
            <li>Mon - Sat (Morning): 10:00 AM - 1:00 PM</li>
            <li>Mon - Sat (Evening): 6:00 PM - 9:00 PM</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </div>
      ),
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showQuestions, isTyping]);

  const startChat = () => {
    setMessages([{ from: "bot", text: "Hi 👋 How can I help you today?" }]);
    setShowQuestions(true);
    setAwaitingMoreConfirmation(false);
    setChatLocked(false);
  };

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
    if (isOpen && messages.length === 0) startChat();
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!hasOpenedChat) setHasOpenedChat(true);
  };

  const handleBotReply = (reply, askMore = false) => {
    setIsTyping(true);
    setShowQuestions(false);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setIsTyping(false);
      setAwaitingMoreConfirmation(askMore);
      if (askMore) setShowQuestions(false);
    }, 800);
  };

  const handleQuestionClick = (q, a) => {
    if (chatLocked) return;
    setMessages((prev) => [...prev, { from: "user", text: q }]);
    handleBotReply(a, true);
    setTimeout(() => handleBotReply("Do you want to know more?", true), 1000);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    const inputLower = userInput.trim().toLowerCase();

    if (inputLower === "hi") {
      startChat();
      setUserInput("");
      return;
    }

    setMessages((prev) => [...prev, { from: "user", text: userInput }]);
    setUserInput("");

    if (awaitingMoreConfirmation) {
      if (inputLower === "yes") {
        setShowQuestions(true);
      } else {
        handleBotReply("Thanks! Our team will contact you soon. Have a nice day!");
        setChatLocked(true);
      }
      setAwaitingMoreConfirmation(false);
    } else {
      handleBotReply("Thanks! Our team will contact you soon. Have a nice day!");
      setChatLocked(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[10990]"
            onClick={toggleOpen}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-[11000]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-[90vw] sm:w-80 md:w-96 h-[70vh] sm:h-96 md:h-[28rem] backdrop-blur-lg bg-white/30 rounded-3xl shadow-xl flex flex-col overflow-hidden relative border border-white/30"
            >
              {/* Header */}
              <div className="bg-blue-600 text-white p-3 flex items-center justify-between rounded-t-3xl">
                <div className="flex items-center gap-2">
                  <img src={femaleAI} alt="AI" className="w-10 h-10 rounded-full object-cover shadow-md" />
                  <span className="font-semibold text-lg">AI Assistant</span>
                </div>
                <button onClick={toggleOpen} className="text-white font-bold text-lg">
                  ✖
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 flex flex-col p-3 gap-2 overflow-y-auto text-sm">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-xl max-w-[75%] break-words ${
                      msg.from === "user"
                        ? "bg-blue-600 text-white self-end ml-auto shadow-lg"
                        : "bg-white/50 text-gray-800 self-start shadow-md backdrop-blur-md"
                    }`}
                  >
                    {typeof msg.text === "string" ? msg.text : msg.text}
                  </motion.div>
                ))}

                {showQuestions && !isTyping && !chatLocked && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex flex-wrap gap-2 mt-2 justify-center"
                  >
                    {predefinedQuestions.map((item, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleQuestionClick(item.q, item.a)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs sm:text-sm p-2 rounded-lg flex items-center gap-1 whitespace-nowrap shadow-md"
                      >
                        ➤ {item.q}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {isTyping && <div className="text-xs text-gray-500">AI is typing...</div>}
                <div ref={messagesEndRef}></div>
              </div>

              {/* Input */}
              <div className="flex p-3 border-t border-white/30 bg-white/20 backdrop-blur-md rounded-b-3xl gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="flex-1 border border-white/50 rounded-full px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/30 backdrop-blur-md placeholder-gray-700"
                  placeholder="Type a message..."
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Send
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating button */}
        {!isOpen && (
          <button
            onClick={toggleOpen}
            className="fixed bottom-5 right-5 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl flex items-center justify-center
                       bg-primary backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 z-[11000]"
          >
            <img
              src={femaleAI}
              alt="AI"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md"
            />
            {!hasOpenedChat && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                {unreadCount}
              </span>
            )}
          </button>
        )}

        {/* Appointment Modal */}
        {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </>
  );
};

export default ChatWidget;

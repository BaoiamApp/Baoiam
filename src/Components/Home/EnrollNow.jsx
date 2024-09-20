import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const EnrollNow = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setShowPopup(true);
    setAnimatePing(true);

    // Remove ping animation after a short duration
    setTimeout(() => {
      setAnimatePing(false);
    }, 1000); // Adjust duration as needed
  };

  return (
    <div>
      {/* Enroll Now Button */}
      <button
        type="button"
        onClick={togglePopup}
        className="hidden sm:flex text-white bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-8 py-2.5 text-center mr-10"
      >
        Enroll Now
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity"
            onClick={() => setShowPopup(false)} // Click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-8 shadow-2xl z-10 text-center">
            {/* Success Icon */}
            <FaCheckCircle
              size={50}
              className={`text-green-500 mx-auto mb-4 ${
                animatePing ? "animate-ping" : ""
              }`}
            />

            <h2 className="text-2xl font-bold text-indigo-600 mb-4 transition-all duration-300 ease-in-out">
              Thank You for Enrolling!
            </h2>
            <p className="text-gray-700 mb-6">
              Your enrollment was successful. We’re excited to have you on
              board!
            </p>

            {/* Decorative Element */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-md"></div>

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="bg-gradient-to-br from-purple-600 via-indigo-500 to-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollNow;

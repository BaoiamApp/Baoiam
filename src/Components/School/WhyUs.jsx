import React from "react";

const WhyUs = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We deliver the best service with the highest quality and commitment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              {/* Replace with an actual icon */}
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Quality</h3>
            <p className="mt-2 text-center text-gray-600">
              We ensure the highest standards of quality in every project.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-3.086 0-4.828 1.86-4.828 5s1.742 5 4.828 5 4.828-1.86 4.828-5S15.086 8 12 8z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
            <p className="mt-2 text-center text-gray-600">
              We bring cutting-edge technology and creativity to every project.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.428 15.341A8.001 8.001 0 0111 20V4a8.001 8.001 0 018.428 11.341z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Reliability</h3>
            <p className="mt-2 text-center text-gray-600">
              Count on us to deliver on time, every time.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m0-4h.01M12 20h.01M17 16h-1v-4h-1m0-4h.01M7 16h-1v-4H5m0-4h.01M12 4v1m0 16v1m8-10h-1V9h-1m0-4h.01M4 12H3v-1H2m0-4h.01"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Support</h3>
            <p className="mt-2 text-center text-gray-600">
              Our team is here to support you 24/7, every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

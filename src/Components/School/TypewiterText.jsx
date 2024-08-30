import React from "react";
import Typewriter from "typewriter-effect";
import { FaSearch } from "react-icons/fa";

const TypewriterText = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-white px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Master{" "}
          <span className="text-orange-500">
            <Typewriter
              options={{
                strings: [
                  "Maths",
                  "English",
                  "Personality Development",
                  "English",
                  "Science",
                  "Public Speaking",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
          Learn and grow with the best courses available.
        </p>
        <div className="relative mt-8 w-full max-w-md mx-auto">
          <input
            type="text"
            className="w-full px-4 py-3 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 hover:shadow-md"
            placeholder="What do you want to learn today?"
          />
          <FaSearch className="absolute left-4 top-3.5 text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default TypewriterText;

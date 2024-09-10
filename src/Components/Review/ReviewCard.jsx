import React from "react";

const TestimonialCard = ({
  name,
  designation,
  company,
  quote,
  rating,
  imageUrl, // Add imageUrl prop
}) => {
  return (
    <div className=" bg-white text-black rounded-lg shadow-md border border-gray-500 p-6 m-4 ">
      <div className="flex flex-col items-center">
        {/* Use the imageUrl prop for the image source */}
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="bg-gray-300 rounded-full w-24 h-24 mb-4 object-cover"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-800">
          {designation} - {company}
        </p>
        <div className="flex mt-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-500" : "text-gray-500"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-400 text-center">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

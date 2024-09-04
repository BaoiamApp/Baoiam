// ContentCard.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContentCard({ imageSrc, title, content }) {
  return (
    <div className="relative w-80 h-96">
      {" "}
      {/* Adjust width and height as needed */}
      {/* Image Div */}
      <div className="relative bg-amber-300 rounded-lg z-10">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Content Div Positioned Behind */}
      <div className="absolute top-12 left-4 flex flex-col justify-end w-full h-full z-0 bg-white p-4 shadow-md rounded-md transform translate-x-4 translate-y-4">
        <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-amber-300 mb-4">{content}</p>
        <div className="flex space-x-3">
          <FaFacebook className="text-blue-600 cursor-pointer" />
          <FaTwitter className="text-blue-400 cursor-pointer" />
          <FaLinkedin className="text-blue-800 cursor-pointer" />
          <FaInstagram className="text-pink-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ContentCard;

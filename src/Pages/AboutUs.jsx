import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="C:/Baoaim1/Baoiam/src/assets/aboutus .png"
          alt="Background aboutus"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10">
       
        
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold text-purple-700">About Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet erat, consectetur et adipiscing elit, sed diam nonummy nibh nisi do euismod quis nostrud exercitation ad minim quisite nostrud mar incididuing ut labore et dolore.
          </p>
          <button className="mt-8 bg-yellow-500 text-white font-semibold py-3 px-8 rounded hover:bg-yellow-600 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="feature-item">
            <div className="text-4xl mb-4">👤</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit do amet, consectetur adipiscing elit, sed do eiusmod. Enimaiste nisi ut veniam dolore ut.
            </p>
          </div>
          <div className="feature-item">
            <div className="text-4xl mb-4">✉️</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Gmail</h2>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud mar exercitation et ullamco laboris nisi ut lorem ipsum dolor veniam.
            </p>
          </div>
          <div className="feature-item">
            <div className="text-4xl mb-4">✔️</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Incididunt ut labore</h2>
            <p className="text-gray-500">
              Incididunt ut labore et dolore magna aliqua teniam ad minim veniam, quiste de consectetur minim veniam eiusmod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
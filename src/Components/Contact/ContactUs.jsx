import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="flex flex-col -mt-20 md:flex-row justify-between items-center p-8 min-h-screen">
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-8">
        <h2 className="text-4xl text-center md:text-left text-orange-400">
          Connect with us for more information!
        </h2>
        <p className="mt-4 text-gray-600 text-center md:text-left">
          Do you have any queries? Reach out to us and we are happy to help you!
        </p>

        <div className="mt-8 flex flex-col space-y-6">
          <div className="flex items-center mb-4">
            <div className="bg-orange-300 p-4 rounded-full">
              <IoCallSharp size={25} />
            </div>
            <div className="ml-4">
              <p className="text-gray-700">Call now:</p>
              <p className="text-xl font-semibold text-gray-900">08069640635</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-orange-300 p-4 rounded-full">
              <IoIosMail size={25} />
            </div>
            <div className="ml-4">
              <p className="text-gray-700">Email:</p>
              <p className="text-xl font-semibold text-gray-900">tutors@baoiam.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-gradient-to-r from-orange-300 to-orange-500 p-8 rounded-xl shadow-2xl flex flex-col justify-center items-center">
        <h3 className="text-2xl mb-6 text-center text-white font-medium">
          Send a Message
        </h3>
        <form className="w-full text-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-orange-500 p-4 shadow-2xl rounded-full focus:outline-none focus:border-2 focus:border-orange-600"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-orange-500 shadow-2xl p-4 rounded-full focus:outline-none focus:border-2 focus:border-orange-600"
              required
            />
            <input
              type="text"
              placeholder="Phone No."
              className="border border-orange-500 p-4 shadow-2xl rounded-full focus:outline-none focus:border-2 focus:border-orange-600"
              required
            />

            <div className="relative inline-block w-full">
              <select
                className="border border-orange-500 p-4 pr-8 rounded-full focus:outline-none shadow-2xl focus:border-2 focus:border-orange-600 appearance-none w-full text-sm md:text-base bg-white"
                required
              >
                <option value="">Select Course</option>
                <option value="Web Development">Web Development</option>
                <option value="Product Management">Product Management</option>
                <option value="Android Development">Android Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Data Science">Data Science</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoIosArrowDown className="text-gray-500" />
              </div>
            </div>
          </div>
          <textarea
            placeholder="Your Message"
            className="border border-orange-400 p-4 shadow-2xl rounded-lg mt-4 w-full focus:outline-none focus:border-2 focus:border-orange-600"
            rows="5"
          />
          <button
            type="submit"
            className="bg-orange-600 border border-black text-white px-6 py-3 rounded-full mt-4 hover:bg-orange-300 hover:text-white hover:shadow-lg w-full md:w-1/3 transition-transform duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;



import React from "react";
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

const NewsletterBanner = () => {
  const navigate = useNavigate()
  return (
    <div className="relative font-[sans-serif]  dark:before:bg-black dark:before:opacity-80 from-amber-600  to-teal-800  before:absolute before:w-full before:h-full before:inset-0 before:opacity-50 before:z-10">
      <img
        src="https://readymadeui.com/photo.webp"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover object-bottom "
      />
      <div className=" relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-white md:text-5xl text-4xl font-bold">
            Become a part of our team
          </h3>
          <p className="text-gray-300 italic text-lg     mt-4">
            We're looking for people who can care deeply about quality to build with us.
          </p>
          <button onClick={()=> navigate('/contact')} className='rounded-full mx-auto mt-5 gap-2 flex items-center px-6 py-2 justify-center font-medium text-white group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <p className='relative transition-all ease-in duration-75 group-hover:bg-opacity-0'> 
                    Join us
                </p>
                    <FaArrowRight />
                    </button>

          {/* <div className="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3"
            />

            <button
              type="button"
              className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white tracking-wide text-sm rounded-full px-6 py-3"
            >
              Submit
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;

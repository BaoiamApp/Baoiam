import React from 'react'
import Herobg from '../../assets/Hero.png'
import SliderHero from "../School/SliderHero";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white mt-20 md:mt-0 dark:bg-[#080529] dark:text-white flex flex-col-reverse md:flex-row h-[100vh] md:justify-center items-center lg:h-[85vh] px-6 lg:px-20">
      {/* Left Side: Heading and Content */}
      <div className="w-full flex flex-col lg:w-1/2 text-center lg:text-left">
      {/* Boost your Skillset, Accelerate your Career.  */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
         Boost your <span className="text-indigo-600"> Skillset,</span>{" "}
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          {" "}
          Accelerate your <span className="text-orange-500">Career.</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 lg:text-lg">
        Gain a competitive edge with exclusive access to top CEOs and industry leaders. Elevate your skills and unlock new opportunities with our expert-led courses.
 </p>
        <div className="mt-8 flex justify-center text-sm lg:justify-start space-x-4">
        <button 
        onClick={()=> navigate('/courses/college')}
        className="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 md:px-12 py-3 overflow-hidden text-white font-semibold border border-indigo-600 rounded-full hover:text-indigo-600 group">
              <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <IoIosArrowRoundForward size={30} />
              </span>
              <span class="relative">Explore Courses</span>
            </button>
          {/* <button className="bg-orange-600 text-white px-4 py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r from-orange-500 to-violet-500 hover:ease-in hover:duration-300">
            Explore Courses
          </button> */}
          {/* <button
            onClick={handleCardClick}
            className="bg-trasparent shadow border border-slate dark:border-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white hover:border-white"
          >
            Get Started <IoIosArrowRoundForward className='inline text-2xl' />
          </button> */}
      </div>
    </div>



      {/* Right Side:Slider*/}
      <div className='w-full flex justify-center lg:items-center h-[60%] md:h-full lg:w-1/2'>
        <img className='w-full h-full object-cover' src={Herobg} alt='Right image' />
      </div>
    </div>
  )
}

export default Hero;

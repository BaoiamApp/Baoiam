import React from 'react'
import Herobg from '../../assets/Hero.png'
import SliderHero from "../School/SliderHero";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/pap");
  };
  return (
    <div className="bg-white dark:bg-black dark:text-white my-16 flex flex-col-reverse md:flex-row h-[100vh] lg:h-[80vh] md:py-12 px-6 lg:px-16">
    {/* Left Side: Heading and Content */}
    <div className="w-full flex gap-y-1 flex-col lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Empowering<span className="text-blue-500"> Education</span> </h1>
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold"> With <span className="text-orange-500">Technology</span>
       </h1>
      <p className="mt-4 text-lg  text-black sm:text-xl lg:text-2xl">
        Join thousands of learners from around the world who are mastering
        new skills, advancing their careers, and exploring new opportunities.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start space-x-4">
      <button className="px-6 py-2 text-xl bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-xl  text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
          Explore Courses
        </button>
        <button
            onClick={handleCardClick}
            className="bg-trasparent border border-black dark:border-white text-xl px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white hover:border-white"
          >
            Get Started
          </button>
      </div>
    </div>

   

    {/* Right Side:Slider*/}
    <div className='w-full flex justify-center lg:items-center h-full lg:w-1/2'>
      <img className='object-cover' src={Herobg} alt='Right image'/>
    </div>
  </div>
  )
}

export default Hero;

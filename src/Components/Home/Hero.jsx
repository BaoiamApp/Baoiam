import React from 'react'
import Herobg from '../../assets/Hero.png'


const Hero = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white my-16 flex flex-col-reverse md:flex-row h-[100vh] lg:h-[80vh] md:py-12 px-6 lg:px-16">
    {/* Left Side: Heading and Content */}
    <div className="w-full flex gap-y-1 flex-col lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Empowering<span className="text-indigo-800"> Education</span> </h1>
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold"> With <span className="text-amber-500">Technology</span>
       </h1>
      <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
        Join thousands of learners from around the world who are mastering
        new skills, advancing their careers, and exploring new opportunities.
      </p>
      <div className="mt-5 flex justify-center lg:justify-start space-x-4">
        <button className="px-6 py-2 text-xl bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-xl  text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
          Explore Courses
        </button>
        <button className="px-6 py-2 text-xl bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-xl  text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
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

export default Hero
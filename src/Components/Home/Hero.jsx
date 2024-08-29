import React from 'react'
import SliderHero from '../School/SliderHero'
import { HeroImage } from '../../assets/assets'


const Hero = () => {
  return (
    <div className="bg-white flex flex-col pt-5 md:flex-row h-[100vh] md:h-[80vh] md:py-12 px-6 lg:px-16">
    {/* Left Side: Heading and Content */}
    <div className="w-full flex gap-y-3 flex-col lg:w-1/2 text-center lg:text-left">
      <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold">
        Empowering<span className="text-blue-500"> Education</span> </h1>
         <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold"> With <span className="text-orange-500">Technology</span>
       </h1>
      <p className="mt-4 text-lg text-black sm:text-xl lg:text-2xl">
        Join thousands of learners from around the world who are mastering
        new skills, advancing their careers, and exploring new opportunities.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start space-x-4">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r from-orange-500 to-violet-500 hover:ease-in hover:duration-300">
          Explore Courses
        </button>
        <button className="bg-trasparent border border-black text-black text-xl px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white hover:border-white">
          Get Started
        </button>
      </div>
    </div>

    {/* Right Side:Slider*/}
    <div className='w-full flex justify-center items-center h-full lg:w-1/2'>
      <img src={HeroImage} alt='Right image'/>
    </div>
  </div>
  )
}

export default Hero
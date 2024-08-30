import React from 'react'
import Trending from '../Components/School/Trending'
import WhyUs from '../Components/School/WhyUs'
import SkillCatalog from '../Components/School/SkillCatalog'
import SliderHero from '../Components/School/SliderHero'

const School = () => {
  return (
    <>
    <div className="pl-10 p-4 bg-white text-black">
    <h2 className="text-3xl font-bold mb-6">Courses 
    <span className="block h-1 w-20 bg-red-500 rounded-full mt-2"></span>
    </h2>
    
    <div className="flex pt-10 items-center justify-center p-6">
  <div className="flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto w-full">
    
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
        Welcome to Our School Courses
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
        Explore our wide range of courses designed to help you achieve your academic goals.
        Whether you're looking to improve your skills or start a new learning journey, 
        we have something for everyone.
      </p>
      <a href="#courses" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg">
        Explore Courses
      </a>
    </div>

    
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <SliderHero />
    </div>
  </div>
</div>

    <Trending />
    <SkillCatalog/>
    <WhyUs />
  </div>
  </>
  )
}

export default School
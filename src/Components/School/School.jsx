import React from 'react'
import Trending from './Trending'
import WhyUs from './WhyUs'

const School = () => {
  return (
    <div className="pl-10 p-4 bg-white text-black">
    <h2 className="text-3xl font-bold mb-6">Courses 
    <span className="block h-1 w-20 bg-red-500 rounded-full mt-2"></span>
    </h2>
    
    <div className="container mx-auto lg:pr-40 lg:pt-10 flex flex-col md:flex-row justify-center gap-4">
      <div className="bg-white rounded-lg shadow-md p-4 flex-1 md:w-1/3 md:h-64">
        <h3 className="text-xl font-semibold mb-2">Course 1</h3>
        <p className="text-gray-700">Description of Course 1. This is where you can put a brief overview of the course content.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 flex-1 md:w-1/3 md:h-64">
        <h3 className="text-xl font-semibold mb-2">Course 2</h3>
        <p className="text-gray-700">Description of Course 2. This is where you can put a brief overview of the course content.</p>
      </div>
    </div>
    <Trending />
    <WhyUs />
  </div>
  )
}

export default School
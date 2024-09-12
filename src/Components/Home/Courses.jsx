import { FaCloud } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { FaLanguage } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import React from 'react'
import { FaBook, FaProjectDiagram, FaGlobe, FaUsers } from 'react-icons/fa';

// const Courses = () => {
//   return (
//     <div className='w-[100%] dark:bg-[#080529] bg-gray-400 '>

//       <p className='text-center font-bold text-[1.6rem] md:text-[2rem] pt-[1rem]'>Explore Free Online Courses</p>

//       <div className='grid grid-rows-10 grid-cols-1 justify-between gap-y-8 pb-[5%] pt-[2%] px-8 sm:grid sm:grid-rows-5 sm:grid-cols-2 lg:grid lg:grid-rows-2 lg:grid-cols-5 lg:gap-[3rem] lg:w-[94%]
//       lg:px-[7%]
//       '>


//         <div className='w-[70vw] mx-auto sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%]  border-2 border-gray-200 bg-white  text-center'>

//           <p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//             <FaCloud className='text-blue-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] mt-4' />
//           </p>
//           <p className='font-bold text-gray-600 mt-1  mb-1 sm:my-0 text-[7vw] sm:text-[4vw] lg:text-[1.1rem] lg:mt-2'>IT </p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem] lg:mb-2'> All Courses
//           </p></div>




//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl  p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <HiCodeBracket className='text-green-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold text-gray-600 sm:my-0 sm:text-[4vw] mt-1 mb-1 text-[5vw] lg:text-[1.1rem] lg:mt-2'>Web Development</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem] lg:mb-2'>All Courses
//           </p>
//         </div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <FaLanguage className='text-yellow-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold text-gray-600 sm:my-0 sm:text-[4vw] mt-1 mb-1 text-[5vw] lg:text-[1.1rem] lg:mt-2'>Language</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'> All Courses
//           </p>
//         </div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <FaBusinessTime className='text-purple-600 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[5vw] lg:text-[1.1rem] lg:mt-2'>Business</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <FaPeopleGroup className='text-red-600 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[5vw]
//        lg:text-[1.1rem] lg:mt-2'>Management</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <FaBookOpen className='text-green-700 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[5vw]
//        lg:text-[1.1rem] lg:mt-2'>English</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <FaUserGear className='text-orange-600 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[5vw]
//        lg:text-[1.1rem] lg:mt-2'>Personal Development</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <FaBullhorn className='text-pink-500 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mb-1 mt-1 text-[5vw]
//        lg:text-[1.1rem] lg:mt-2'>Sales & Marketing</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>


//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
//           <MdEngineering className='text-green-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mb-1 mt-1 text-[5vw]
//        lg:text-[1.1rem] lg:mt-2'>Engineering </p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>



//         <div className='w-[70vw] mx-auto sm:w-[40vw] lg:w-[16vw] p-[5%] rounded-2xl border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] lg:mb-[0.1rem] xl:mb-0'>
//           <HiAcademicCap className='text-yellow-500 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4' />
//         </p>
//           <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 xl:mt-0 mb-1 text-[5vw]
//        lg:text-[1.1rem] lg:mt-2'>Teaching & Academics</p>
//           <p className='text-[5vw] sm:text-[3vw] dark:text-black lg:text-[1.1rem]'>All Courses
//           </p></div>
//       </div>
//     </div>
//   )
// }

const Courses = () => {
  const data = [
    {
      title: "12,500+ Hours of Engaging Learning",
      description: "Over 12,500 hours of interactive content designed to boost your growth.",
      icon: <FaBook className="dark:text-white text-indigo-500 text-4xl" />
    },
    {
      title: "500+ Real-World Projects",
      description: "Hands-on experience with 500+ real-world projects.",
      icon: <FaProjectDiagram className="dark:text-white text-indigo-500 text-4xl" />
    },
    {
      title: "75,000+ Learners Worldwide",
      description: "Join a global community of 75,000+ learners.",
      icon: <FaGlobe className="dark:text-white text-indigo-500 text-4xl" />
    },
    {
      title: "350+ Leading Industry Mentors",
      description: "Guided by over 350 industry experts.",
      icon: <FaUsers className="dark:text-white text-indigo-500 text-4xl" />
    }
  ];

  return (
    <div className="px-10 dark:bg-[#080529] py-8">
      <div className="text-center mt-14 mb-10 md:mb-20">
        <h1 className="text-3xl sm:text-4xl dark:text-white  font-bold text-gray-900 mb-2">Our Key Metrics</h1>
        <p className="text-base dark:text-gray-300 sm:text-lg text-gray-600">Discover the milestones and achievements that set us apart in the industry.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((stat, index) => (
          <div
            key={index}
            className="bg-zinc-100 dark:bg-indigo-900 bg-opacity-60 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-4"> {/* Centering icon */}
              {stat.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{stat.title}</h2>
            <p className="text-gray-600 dark:text-white">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Courses


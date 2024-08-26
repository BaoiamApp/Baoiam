// import { faArrowRight, faArrowTrendUp, faBookOpen, faBookOpenReader, faBullhorn, faCaretRight, faCloud, faCode, faHeartPulse, faHelmetSafety, faLanguage, faUserGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

const Courses = () => {
  return (
    <div className='w-[100%] bg-gray-400 '>

      <p className='text-center font-bold text-white text-[2rem] pt-[1rem]'>Explore Free Online Courses</p>

      <div className='grid grid-rows-10 grid-cols-1 gap-2 pb-[5%] pt-[2%] px-[5%] sm:grid sm:grid-rows-5 sm:grid-cols-2 lg:grid lg:grid-rows-2 lg:grid-cols-5 lg:gap-[3rem] lg:w-[94%]
      lg:px-[7%]
      '>

       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%]  border-2 border-gray-200 bg-white  text-center'>
         <p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
          {/* <FontAwesomeIcon icon={faCloud} className='text-blue-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
          <FaCloud  className='text-blue-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] mt-4'/>
          </p>
       <p className='font-bold text-gray-600 mt-1  mb-1 sm:my-0 text-[9vw] sm:text-[4vw] lg:text-[1.1rem] lg:mt-2'>IT </p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem] lg:mb-2'> All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>




       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl  p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faCode} className='text-green-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <HiCodeBracket  className='text-green-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
        </p>
       <p className='font-bold text-gray-600 sm:my-0 sm:text-[4vw] mt-1 mb-1 text-[7vw] lg:text-[1.1rem] lg:mt-2'>Web Development</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem] lg:mb-2'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p>
       </div>
        
          
       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faLanguage} className='text-yellow-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <FaLanguage className='text-yellow-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold text-gray-600 sm:my-0 sm:text-[4vw] mt-1 mb-1 text-[7vw] lg:text-[1.1rem] lg:mt-2'>Language</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'> All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/>*/}</p>
       </div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faArrowTrendUp} className='text-purple-800 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <FaBusinessTime className='text-purple-600 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[7vw] lg:text-[1.1rem] lg:mt-2'>Business</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faUserGroup} className='text-red-500 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <FaPeopleGroup className='text-red-600 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[7vw]
       lg:text-[1.1rem] lg:mt-2'>Management</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>

       
       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faBookOpen} className='text-green-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <FaBookOpen className='text-green-700 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[7vw]
       lg:text-[1.1rem] lg:mt-2'>English</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faUserGear} className='text-orange-500 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <FaUserGear className='text-orange-600 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[7vw]
       lg:text-[1.1rem] lg:mt-2'>Personal Development</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faBullhorn} className='text-pink-600 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <FaBullhorn className='text-pink-500 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mb-1 mt-1 text-[7vw]
       lg:text-[1.1rem] lg:mt-2'>Sales & Marketing</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[4rem] xl:mb-0 lg:mb-[0.1rem]'>
        {/* <FontAwesomeIcon icon={faHelmetSafety} className='text-green-500 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <MdEngineering className='text-green-400 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mb-1 mt-1 text-[7vw]
       lg:text-[1.1rem] lg:mt-2'>Engineering </p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>


       
       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] p-[5%] rounded-2xl border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[4rem] lg:mb-[0.1rem] xl:mb-0'>
        {/* <FontAwesomeIcon icon={faBookOpenReader} className='text-orange-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/> */}
        <HiAcademicCap className='text-yellow-500 text-[20vw] w-full sm:text-[10vw] lg:w-full lg:text-[3rem] lg:mt-4'/>
       </p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 xl:mt-0 mb-1 text-[7vw]
       lg:text-[1.1rem] lg:mt-2'>Teaching & Academics</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses 
        {/* <FontAwesomeIcon icon={faCaretRight}/> */}
       </p></div>
    </div>
    </div>
  )
}

export default Courses


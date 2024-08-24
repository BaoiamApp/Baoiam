import { faArrowRight, faArrowTrendUp, faBookOpen, faBookOpenReader, faBullhorn, faCaretRight, faCloud, faCode, faHeartPulse, faHelmetSafety, faLanguage, faUserGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Courses = () => {
  return (
    <div className='w-[100%] bg-gray-300 '>

      <p className='text-center font-bold text-white text-[2rem] pt-[1rem]'>Explore Free Online Courses</p>

      <div className='grid grid-rows-10 grid-cols-1 gap-2 pb-[5%] pt-[2%] px-[5%] sm:grid sm:grid-rows-5 sm:grid-cols-2 lg:grid lg:grid-rows-2 lg:grid-cols-5 lg:gap-[3rem] lg:w-[94%]
      lg:px-[7%]
      '>

       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%]  border-2 border-gray-200 bg-white  text-center'>
         <p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'>
          <FontAwesomeIcon icon={faCloud} className='text-blue-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/>
          </p>
       <p className='font-bold text-gray-600 mt-1  mb-1 sm:my-0 text-[9vw] sm:text-[4vw] lg:text-[1.1rem]'>IT </p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'> All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl  p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faCode} className='text-green-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold text-gray-600 sm:my-0 sm:text-[4vw] mt-1 mb-1 text-[9vw] lg:text-[1.1rem]'>Web Development</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p>
       </div>
        
          
       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faLanguage} className='text-yellow-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold text-gray-600 sm:my-0 sm:text-[4vw] mt-1 mb-1 text-[9vw] lg:text-[1.1rem]'>Language</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'> All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faArrowTrendUp} className='text-purple-800 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[9vw] lg:text-[1.1rem]'>Business</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faUserGroup} className='text-red-500 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[9vw]
       lg:text-[1.1rem]'>Management</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>

       
       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faBookOpen} className='text-green-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[9vw]
       lg:text-[1.1rem]'>English</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faUserGear} className='text-orange-500 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 mb-1 text-[9vw]
       lg:text-[1.1rem]'>Personal Development</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faBullhorn} className='text-pink-600 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mb-1 mt-1 text-[9vw]
       lg:text-[1.1rem]'>Sales & Marketing</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] rounded-2xl p-[5%] border-2 border-gray-200 bg-white  text-center'><p className='mb-[0.7rem] xl:h-[8rem] xl:mb-0 lg:mb-[0.1rem]'><FontAwesomeIcon icon={faHelmetSafety} className='text-green-500 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mb-1 mt-1 text-[9vw]
       lg:text-[1.1rem]'>Engineering </p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>


       
       <div className='w-[90vw] sm:w-[45vw] lg:w-[16vw] p-[5%] rounded-2xl border-2 border-gray-200 bg-white text-center'><p className='mb-[0.7rem] xl:h-[8rem] lg:mb-[0.1rem] xl:mb-0'><FontAwesomeIcon icon={faBookOpenReader} className='text-orange-400 text-[14vw] sm:text-[10vw] lg:w-[4rem]'/></p>
       <p className='font-bold sm:my-0 sm:text-[4vw] text-gray-600 mt-1 xl:mt-0 mb-1 text-[9vw]
       lg:text-[1.1rem]'>Teaching & Academics</p>
       <p className='text-[7vw] sm:text-[3vw] lg:text-[1.1rem]'>All Courses <FontAwesomeIcon icon={faCaretRight}/></p></div>
    </div>
    </div>
  )
}

export default Courses

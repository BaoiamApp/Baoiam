import React from 'react';
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";



const Protocol = () => {
  return (
    <>
    
    <div className='mt-[4rem]'><h1 className='text-[2rem] my-2 text-center font-bold'>Virtues and protocols <span className='underline text-blue-700'>BAOIAM</span> works on</h1></div>


   <div className='flex-col w-[100%] lg:flex lg:justify-evenly lg:flex-row lg:px-[1rem] lg:w-[100%]'>


     <div className='w-[90%] lg:w-[30%] p-[2rem]  flex-col my-[0.5rem]'>
           <div className=' flex justify-center pl-[2.5]'><MdOutlineSupportAgent className='text-[8rem] pt-5 text-blue-900'/></div>
           <div className=' text-center p-2.5 lg:p-0'>  <h2 className='font-bold sm:text-[1.2rem] lg:text-[1.1rem]'>FULL-TIME SUPPORT</h2>   <p className='sm:text-[1.1rem] lg:text-[1rem]'>Baoiam is the e-learning platform that focuses on the overall skill development of it's learners by furnishing courses in a variety of disciplines that can help anyone level their skills and pursue their passion. </p>  </div>
   </div>


     <div className='w-[90%] p-[2rem] lg:w-[30%]  flex-col my-[0.5rem]'>
           <div className=' flex justify-center pl-[0rem]'><FaChalkboardTeacher className='text-[7rem] pt-5 text-blue-900'/></div>
           <div className=' text-center p-3'>  <h2 className='font-bold lg:text-[1.1rem] sm:text-[1.2rem]'>EXPERIENCED TRAINERS</h2>   <p className='sm:text-[1.1rem] lg:text-[1rem]'>The guidance and expertise that the learners receives from the course is a lifetime experience. As our skilled trainers give their best to provide you with a remembering experience. </p>  </div>
   </div>


      <div className='w-[90%] p-[2rem] lg:w-[30%]  flex-col my-[0.5rem]'>
           <div className='flex justify-center pl-[2rem]'><FaTabletScreenButton className='text-[7rem] pt-6  text-blue-900'/></div>
           <div className=' text-center p-3'>  <h2 className='font-bold sm:text-[1.2rem] lg:text-[1.1rem] '>EASE OF USE</h2>   <p className='sm:text-[1.1rem] lg:text-[1rem]'>The user-friendly interface and intuitive design of our platform make the finest learning experience. The platform is easy to navigate and understand, making it accessible to people of all age groups and backgrounds.  </p>  </div>
   </div>

   </div>
    


   


  
    </>
  )
}

export default Protocol

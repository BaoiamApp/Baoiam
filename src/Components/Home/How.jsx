import React from 'react'
import { GoGear } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GoGlobe } from "react-icons/go";

const How = () => {
  return (
    <>
    <div className=' flex justify-center my-4'>
        <div className='w-[80%] xl:w-[85%] '>
        <h1 className='text-[2rem] my-5 text-center font-bold'>How we <span className='text-amber-500 underline'>Work?</span></h1>
        <p className='text-center text-[1.1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora aliquam eos voluptatum vero, asperiores ipsa quas perspiciatis dolor, repellat eius dolorem ducimus at, fugit corporis enim consequuntur. Error ab quo tempore minima sed, nobis aperiam cupiditate perferendis amet! Ab quisquam debitis ipsa obcaecati enim reprehenderit officia libero veritatis iusto?</p></div>
    </div>



    <div className='grid grid-cols-1 grid-rows-5 lg:gap-1 sm:gap-10 lg:grid lg:grid-cols-5 lg:grid-rows-1 w-[80%] xl:w-[86%] xl:mx-[7%] my-[4rem] mx-[10%]'>
      <div className='mx-3 my-1   '>
         <div className='text-[3rem] flex justify-center'><div className='rounded-full p-3 text-indigo-500 border-2 border-indigo-700'><GoGear/></div></div> <h2 className='text-[1.2rem] text-center font-bold my-4'>Learn with top experts</h2> <p className='text-center'>Get your confusion replaced with confidence and doubt with solution under the guidance of our top experts</p>
      </div>
      <div className='m-3 my-1'>
         <div className='text-[3rem] flex justify-center'><div className='rounded-full p-3 text-indigo-500 border-2 border-indigo-700'><IoPeopleOutline/></div></div> <h2 className='text-[1.2rem] text-center font-bold my-4'>Community discussion</h2> <p className='text-center'>attend the regular and
        planned community discussions to share and support innovative ideas and dreams </p>
         </div>
      <div className='m-3 my-1'> 
        <div className='text-[3rem] flex justify-center'><div className='rounded-full p-3 text-indigo-500 border-2 border-indigo-700'><GoProjectRoadmap/></div></div> <h2 className='text-[1.2rem] text-center font-bold my-4'>Live corporate Projects</h2> <p className='text-center'>work on live projects and get the practical knowledge required to boost up your carrer</p>
         </div>
      <div className='m-3 my-1'>
         <div className='text-[3rem] flex justify-center'><div className='rounded-full p-3 text-indigo-500 border-2 border-indigo-700'><HiOutlineRocketLaunch/></div></div> <h2 className='text-[1.2rem] font-bold text-center my-4'>Placement assistance</h2> <p className='text-center'>learn to crack interviews from our experienced trainers and get placed at top companies</p>
          </div>
      <div className='m-3 my-1'> 
        <div className='text-[3rem]  flex justify-center'><div className='rounded-full p-3 text-indigo-500 border-2 border-indigo-700'><GoGlobe/></div></div> <h2 className='text-[1.2rem] text-center font-bold my-4'>Networking & investment </h2> <p className='text-center'>master the art of networking by enhancing your communication skills and get the financial aid to start your business</p> 
        </div>
    </div>


    </>
  )
}

export default How

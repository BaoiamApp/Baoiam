import React, { useState } from "react";
import { AdverseTeam } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";

export const Advertiseteam = () => {
  const [advTeam, setAdvTeam] = useState(AdverseTeam);
  return (
    <>
      <div className='text-center text-xl md:text-3xl p-6 py-8 tracking-wide leading-4 font-bold '>
        {" "}
        Advertistment Team
      </div>
      <div className='w-[80%] md:w-[70%] m-auto'>
        <p className='text-sm text-center  md:text-lg text-[#544D4F]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='p-6'>
        <div className='w-[90%] m-auto md:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-4'>
          {advTeam?.map((el) => {
            return (
              <div
                className='border-2 hover:shadow-orange-400 bg-zinc-200 dark:bg-gray-700 hover:border-0 rounded-md duration-200 hover:scale-105 shadow-md hover:drop-shadow-xl cursor-pointer p-3 flex flex-col justify-center items-center gap-2'
                key={el.id}
              >
                <div className='w-[60%]'>
                  <img className='h-full w-full' src={el.image} alt='' />
                </div>
                <div className='text-center'>
                  <p className='font-bold'> {el.name}</p>
                  <p>{el.role}</p>
                  <div className=' py-2 flex items-center justify-center'>
                    <FaLinkedin className='text-blue-600 text-xl text-center' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

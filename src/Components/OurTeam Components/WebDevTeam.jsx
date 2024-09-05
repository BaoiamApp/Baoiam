import { useState } from "react";
import { Leaderteam } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const WebDevTeam = () => {
  const [webData, SetWebData] = useState(Leaderteam);

  return (
    <>
      <div className='text-center text-xl md:text-3xl p-6 py-8 tracking-wide leading-4 font-bold '>
        {" "}
        Web Development Team
      </div>
      <div className='w-[80%] md:w-[70%] m-auto'>
        <p className='text-sm text-center  md:text-lg text-[#544D4F]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='p-6'>
        <div className='w-[90%] m-auto md:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-6'>
          {webData?.map((el) => {
            return (
              <div
                className='border-2 hover:shadow-orange-400 bg-zinc-100 dark:bg-gray-700 hover:border-0 rounded-md duration-200 hover:scale-105 shadow-md hover:drop-shadow-xl cursor-pointer p-3 flex flex-col justify-center items-center gap-2'
                key={el.id}
              >
                <div className='w-[60%]'>
                  <img className='h-full w-full' src={el.image} alt='' />
                </div>
                <div className='text-center'>
                  <p className='font-bold md:text-lg'> {el.name}</p>
                  <p className='font-medium text-zinc-700'>{el.role}</p>
                  <div className=' py-2 flex items-center justify-center gap-2'>
                    <FaLinkedin className='text-blue-600 text-xl text-center' />
                    <FaXTwitter className='text-black font-bold' />
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

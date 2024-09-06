import React, { useState } from "react";
import { AdverseTeam } from "./teamData";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Advertiseteam = () => {
  const [advTeam, setAdvTeam] = useState(AdverseTeam);
  return (
    <>
      <div className='text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold '>
        {" "}
        Advertistment Team
      </div>
      <div className=' flex flex-col p-2  md:items-center  justify-around md:flex-row  gap-2'>
        <div className='md:w-[65%]'>
          <div>
            <Swiper
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              Scrollbar={{ draggable: true }}
              modules={[Keyboard, Pagination, Navigation, Scrollbar]}
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              onSlideChange={() => console.log("hi")}
              onSwiper={(swiper) => console.log("")}
              className=' md:h-[350px] w-[60%] md:w-full m-auto rounded-lg  flex flex-col justify-center items-center gap-6'
            >
              {AdverseTeam?.map((el) => {
                return (
                  <SwiperSlide
                    className='relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md h-[300px] flex flex-col justify-center items-center gap-4'
                    key={el.id}
                  >
                    <img
                      className='h-full rounded-md  w-full'
                      src={el.image}
                      alt=''
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-md'>
                      <h3 className='text-center text-white font-sans font-medium text-sm md:text-lg'>
                        {el.name}
                      </h3>
                      <p className='text-center text-gray-300 text-xs md:text-sm'>
                        {el.role}
                      </p>
                      <div className=' py-2 flex items-center justify-center gap-2'>
                        <FaLinkedin className='text-blue-600 text-xl text-center' />
                        <FaXTwitter className='text-black font-bold' />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className='w-[80%] m-auto md:w-[30%] '>
          <p className='text-sm text-center  md:text-lg text-[#544D4F]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

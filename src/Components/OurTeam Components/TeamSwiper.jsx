import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { swiperData } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const TeamSwiper = () => {
  const [data, setData] = useState(swiperData);

  return (
    <>
      <div className='text-center text-xl md:text-3xl p-6 py-8 tracking-wide leading-4 font-bold'>
        Our Team
      </div>
      <div className='p-6'>
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
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className=' md:h-[350px] w-full md:w-[90%] m-auto rounded-lg  flex flex-col justify-center items-center gap-4'
        >
          {data?.map((el) => {
            return (
              <SwiperSlide
                className='relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md h-[150px] w-[150px] md:h-[300px] md:w-[130px] flex flex-col justify-center items-center gap-4'
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
    </>
  );
};

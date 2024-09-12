import { useState } from "react";
import { Leaderteam1 } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const WebDevTeam = () => {
  const [webData, SetWebData] = useState(Leaderteam1);

  return (
    <>
      <div className='text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold '>
        {" "}
        Web Development Team
      </div>
      <div className=' flex flex-col p-4  md:items-center  justify-around md:flex-row  gap-4'>
        <div className='w-[80%] m-auto md:w-[25%] '>
          <p className='text-sm text-center dark:text-slate-300 md:text-lg text-[#544D4F]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
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
              className='md:h-[350px] w-[60%] md:w-full m-auto rounded-lg flex flex-col justify-center items-center gap-6'
            >
              {webData?.map((el) => {
                return (
                  <SwiperSlide key={el.id} className='group flip-card'>
                    <div className='flip-card-inner'>
                      {/* Front Side (Image) */}
                      <div className='flip-card-front'>
                        <img
                          className='h-full w-full rounded-md'
                          src={el.image}
                          alt={el.name}
                        />
                      </div>

                      {/* Back Side (Details) */}
                      <div className='flip-card-back bg-gray-400 bg-opacity-80 text-white rounded-md flex flex-col justify-center items-center'>
                        <h3 className='text-center font-sans font-medium text-sm md:text-lg'>
                          {el.name}
                        </h3>
                        <p className='text-center text-black font-bold text-xs md:text-sm'>
                          {el.role}
                        </p>
                        <div className='py-2 flex items-center justify-center gap-2'>
                          <FaLinkedin className='text-blue-600 text-xl' />
                          <FaXTwitter className='text-black' />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

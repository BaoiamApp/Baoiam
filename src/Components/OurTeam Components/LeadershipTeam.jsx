import { useState } from "react";
import { Leaderteam } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const LeadershipTeam = () => {
  const [teamData, setTeamData] = useState(Leaderteam);
  console.log(teamData);

  return (
    <>
      
      <div className=' flex flex-col p-2 md:items-center  justify-between md:flex-row  gap-2'>
        <div className='w-10/12 mx-auto md:w-1/4 '>
        <h1 className='text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold '>
        Leadership Team
      </h1>
        </div>
        <div className='md:w-3/4'>
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
              className='md:h-[350px] h-[230px] w-[65%] md:w-full m-auto rounded-xl flex flex-col justify-center items-center gap-6'
            >
              {teamData?.map((el) => {
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
    </>
  );
};

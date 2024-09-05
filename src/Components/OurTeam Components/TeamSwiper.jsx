import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { swiperData } from "./teamData";

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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className=' md:h-[350px] w-full md:w-[90%] m-auto  flex flex-col justify-center items-center gap-4'
        >
          {data?.map((el) => {
            return (
              <SwiperSlide
                className=' shadow-2xl hover:shadow-lg hover:shadow-orange-400 duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md  md:h-[300px] w-[130px] flex flex-col justify-center items-center gap-4'
                key={el.id}
              >
                <img
                  className='h-[60px] md:h-[170px] rounded-full  md:w-[170px] w-[60px]'
                  src={el.image}
                  alt=''
                />
                <h3 className='text-center font-sans font-medium text-sm md:text-md'>
                  {el.name}
                </h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

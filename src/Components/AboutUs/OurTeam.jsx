import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import required modules

import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";

const TeamComponent = () => {
    const [data, setData] = useState(swiperData);
  return (
    <div className="team-component">
      <div className="text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold">
        Our <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">Team</span>
      </div>

      <div className="p-6">
        <Swiper
          keyboard={{ enabled: true }}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on mobile
            640: { slidesPerView: 2 }, // 2 slides on small tablets
            768: { slidesPerView: 3 }, // 3 slides on larger tablets
            1024: { slidesPerView: 4 }, // 4 slides on desktops
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper initialized")}
          className="md:h-[350px] w-full md:w-[90%] m-auto flex flex-col justify-center items-center gap-4"
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id} className="group rounded-xl flip-card w-96 h-72 overflow-hidden">
              <div className="flip-card-inner">
                {/* Front Side (Image) */}
                <div className="flip-card-front">
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={el.image}
                    alt={el.name}
                  />
                </div>

                {/* Back Side (Details) */}
                <div className="flip-card-back bg-black/90 text-white rounded-md flex flex-col justify-center items-center">
                  <h3 className="text-center font-sans font-bold text-xl text-indigo-500">
                    {el.name}
                  </h3>
                  <p className="text-center italic text-sm">({el.role})</p>
                  <div className="py-2 mb-4 flex items-center justify-center gap-2">
                    <FaLinkedin className="" />
                    <FaXTwitter className="" />
                  </div>
                  <p className="text-xs text-center px-4">
                    {el.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamComponent;

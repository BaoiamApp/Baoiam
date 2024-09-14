import React from 'react'
import { useState } from "react";
import { Leaderteam1 } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CommonComp = ({ heading, desc, dataArray = [] }) => {
    return (
        <div className='flex flex-col p-2 mx-auto md:items-center justify-center lg:flex-row gap-2 my-4 w-full'>

            <div className='w-full lg:w-[30%]'>
                <h1 className='text-center text-lg md:text-2xl lg:text-3xl px-4 py-2 tracking-wide font-bold '>
                    {heading}
                </h1>

                <p className='text-center text-xs lg:text-sm px-2'>{desc}</p>
            </div>

            <div className='w-full lg:w-[70%]'>
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
                            560: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 3.5,
                            },
                            1500: {
                                slidesPerView: 4.5,
                            },
                        }}
                        className='w-72 md:w-full h-80 mx-auto rounded-xl flex flex-col justify-center items-center gap-6'
                    >
                        {dataArray?.map((el) => {
                            return (
                                <SwiperSlide key={el.id} className='group flip-card'>
                                    <div className='flip-card-inner'>
                                        {/* Front Side (Image) */}
                                        <div className='flip-card-front max-w-80 mx-auto'>
                                            <img
                                                className='h-full w-72 mx-auto  rounded-md object-cover'
                                                src={el.image}
                                                alt={el.name}
                                            />
                                        </div>

                                        {/* Back Side (Details) */}
                                        <div className='flip-card-back bg-black/90 bg-opacity-80 text-white rounded-md flex flex-col justify-center items-center'>
                                            <h3 className='text-center font-sans font-medium text-sm md:text-lg'>
                                                {el.name}
                                            </h3>
                                            <p className='text-center text-white font-bold text-xs md:text-sm'>
                                                {el.role}
                                            </p>
                                            <div className='py-2 flex items-center justify-center gap-2'>
                                                <FaLinkedin className='text-blue-600 text-xl' />
                                                <FaXTwitter className='text-white' />
                                            </div>
                                            <p className="text-xs md:text-sm text-center px-4">{el.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>


        </div>
    )
}

export default CommonComp
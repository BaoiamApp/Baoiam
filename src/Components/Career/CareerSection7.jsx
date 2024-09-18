import { useState, useEffect } from "react";
import image3 from "../../assets/ITIE&Entre/teamwork10.webp";
import image4 from "../../assets/ITIE&Entre/teamwork15.jpg";
import image5 from "../../assets/ITIE&Entre/teamwork0.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const CareerSection7 = () => {
  const slides = [
    {
      image: image5,
      heading: "Why Work With Us?",
      content:
        "We offer a collaborative environment, opportunities for professional growth, and a commitment to work-life balance.",
    },
    {
      image: image3,
      heading: "Describe the Work Environment:",
      content:
        "Our team thrives on collaboration and creativity. We value innovation, inclusivity, and a supportive work atmosphere.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);
  return (
    <>
      {/* Slide Section */}
      <div className=' dark:bg-black relative w-full overflow-hidden items-center justify-center sm:px-6 pb-10 md:px-10 m-0 lg:h-[450px]'>
        <div
          className='flex transition-transform ease-in-out duration-1000'
        >
          {/* {slides.map((slide, index) => (
            <div
              key={index}
              className='w-full h-full flex-shrink-0 flex items-center justify-center'
            >
              <div className='flex flex-col sm:flex-row w-full max-w-screen-lg h-full border border-gray-200 shadow-2xl rounded-xl transform transition-transform hover:scale-105 hover:shadow-3xl bg-white m-5'>
               
                <div className='flex-1 flex justify-center  m-0 sm:p-4'>
                  <p className='text-base sm:text-sm md:text-lg lg:text-xl text-black text-center sm:text-left'>
                    {slide.content}
                  </p>
                </div>
               
                <div className='flex-1 h-full'>
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          ))} */}

          <div className='p-6 w-full'>
            <Swiper
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              Scrollbar={{ draggable: true }}
              modules={[Keyboard, Pagination, Navigation, Scrollbar]}
              spaceBetween={16 }
              breakpoints={{
                1024: {
                  slidesPerView: 1,
                },
              }}
              className=' w-full m-auto rounded-lg  flex flex-col justify-center items-center gap-4 lg:h-[60%]'
            >
              {slides?.map((slide, index) => {
                return (
                  <SwiperSlide
                    className="relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg  dark:bg-zinc-900 rounded-md  flex flex-col justify-center items-center gap-4 "
                    key={index}
                  >
                    <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
                      <div className="flex flex-col sm:flex-row w-full max-w-screen-lg h-full border border-gray-200 shadow-2xl rounded-xl hover:shadow-3xl bg-white m-5">
                        <div className="flex-1 flex-col gap-4 items-center flex justify-center px-1 py-2 m-0 sm:p-4">
                          <h2 className="text-black lg:text-4xl text-xl sm:text-2xl md:text-2xl font-semibold flex items-center justify-center text-center ">
                            {slide.heading}
                          </h2>
                          <p className="text-base sm:text-sm md:text-lg  flex items-center justify-center lg:w-10/12 font-semibold lg:text-xl p-3 text-black text-center  ">
                            {slide.content.split(".")[0]}.
                          </p>
                        </div>

                        <div className="flex-1 h-full">
                          <img
                            src={slide.image}
                            alt={``}
                            className="w-full h-full object-cover"
                          />
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

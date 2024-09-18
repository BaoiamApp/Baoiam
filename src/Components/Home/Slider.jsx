import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import categories from "../../assets/swiper-imgs/categories.json"; // Import JSON data
import { useNavigate } from "react-router-dom";

export default function SliderSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Category1");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryKeys = Object.keys(categories);

  useEffect(() => {
    if (categories[selectedCategory] === undefined) {
      setSelectedCategory(categoryKeys[0]); // Fallback to the first category if the current category is undefined
    }

    if (currentIndex >= categories[selectedCategory]?.length) {
      const nextCategoryIndex =
        (categoryKeys.indexOf(selectedCategory) + 1) % categoryKeys.length;
      setSelectedCategory(categoryKeys[nextCategoryIndex]);
      setCurrentIndex(0);
    }
  }, [currentIndex, selectedCategory]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="slider-section dark:bg-[#080529] w-full relative py-10   overflow-hidden ">
      <div className="text-center mb-0 lg:mb-8">
        <h2 className="text-4xl font-bold mb-4">
          Dive into Our Course Selection
        </h2>
        <div className="flex gap-3 items-center justify-center mt-8 md:mt-0">
          {categoryKeys.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 border-2 py-2 w-fit text-xs md:text-sm rounded-lg ${
                selectedCategory === category
                  ? "dark:bg-indigo-900 bg-black text-white rounded-xl text-sm transition-all ease-in-out duration-300"
                  : "bg-white text-black"
              } hover:bg-gradient-to-l hover:scale-105 transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={0} // Adjust space between cards
        slidesPerView={1} // Default number of slides for large screens
        loop={true} // Enables loop mode for continuous sliding
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="swiper-container py-8 px-6 md:px-16"
        onSlideChange={handleSlideChange}
        breakpoints={{
          315: {
            slidesPerView: 1, // 1 slide on phone screens
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // 2 slides on small screens (smaller tablets)
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4, // 4 slides on large screens (desktops)
            spaceBetween: 30,
          },
        }}
      >
        {categories[selectedCategory]?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card dark:bg-indigo-900 dark:border shadow-xl rounded-xl m-2 text-center hover:scale-105 duration-300 ease-out lg:w-[290px] lg:h-[370px] w-full h-[370px]">
              {/* Image Container */}
              <div className="image-container mb-4">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-1 text-left pl-5">
                {slide.title}
              </h3>

              {/* Ratings and Stars */}
              <div className="flex items-center mb-2 pl-5">
                <span className="mr-2 text-gray-700 font-semibold">
                  {slide.ratings}
                  {slide.reviews}
                </span>

                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(slide.ratings)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.516 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.886a1 1 0 00-.364 1.118l1.516 4.674c.3.921-.755 1.688-1.538 1.118l-3.97-2.886a1 1 0 00-1.176 0l-3.97 2.886c-.783.57-1.838-.197-1.538-1.118l1.516-4.674a1 1 0 00-.364-1.118l-3.97-2.886c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.516-4.674z"></path>
                  </svg>
                ))}
              </div>

              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-5 pl-2 pr-5">
                <div className="flex items-center">
                  <span className="font-semibold text-xs bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1 ml-4">
                    Premium
                  </span>
                  <span className="bg-gray-300 text-gray-800 font-bold rounded-lg text-xs pl-3 pr-3 pt-1 pb-1 ml-2">
                    Plus
                  </span>
                </div>
                <p className="text-base">{slide.duration}</p>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate("/Maintenance")}
                className="bg-gradient-to-r mb-3 text-sm from-indigo-800 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300 flex flex-start ml-5"
              >
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons Positioned on the Sliders */}
      <div className="absolute top-[60%] left-2 transform z-10">
        <button className="swiper-button-prev text-indigo-600 hover:text-white transition"></button>
      </div>
      <div className="absolute top-[60%] right-2 transform z-10">
        <button className="swiper-button-next text-indigo-500 hover:text-white transition"></button>
      </div>
    </div>
  );
}

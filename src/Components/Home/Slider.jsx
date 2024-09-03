import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import categories from '../../assets/swiper-imgs/categories.json'; // Import JSON data

export default function SliderSection() {
  const [selectedCategory, setSelectedCategory] = useState('Category1');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryKeys = Object.keys(categories);

  useEffect(() => {
    if (categories[selectedCategory] === undefined) {
      setSelectedCategory(categoryKeys[0]); // Fallback to the first category if the current category is undefined
    }

    if (currentIndex >= categories[selectedCategory]?.length) {
      const nextCategoryIndex = (categoryKeys.indexOf(selectedCategory) + 1) % categoryKeys.length;
      setSelectedCategory(categoryKeys[nextCategoryIndex]);
      setCurrentIndex(0);
    }
  }, [currentIndex, selectedCategory]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="slider-section w-full py-10 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Our Categories</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-6 ">
          {categoryKeys.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-800 to-indigo-500 text-white px-4 py-2 rounded-xl text-xl hover:bg-gradient-to-l transition-all ease-in-out duration-300'
                  : 'bg-amber-500 text-white'
              } hover:bg-gradient-to-l hover:scale-105 transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // Adjust the space between cards
        slidesPerView={3} // Default number of slides per view
        dot={false}
        loop={true} // Enables loop mode for continuous sliding
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="swiper-container pl-16 pr-16"
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {categories[selectedCategory]?.map((slide, index) => (
          <SwiperSlide key={index} className="lg:p-6 pl-4 lg:pr-6">
            <div className="card bg-white/50 backdrop-blur-[100%] bg-opacity-20 drop-shadow-lg border border-white/20 p-6 text-center rounded-lg shadow-lg hover:scale-105 duration-300 ease-out">
              <div className="image-container mb-4">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl text-center font-semibold mb-2">{slide.title}</h3>
              <p className="mb-4">
                {slide.text}
              </p>
              <button className="bg-gradient-to-r from-indigo-800 to-indigo-500 text-white px-4 py-2 rounded-xl text-xl hover:bg-gradient-to-l transition-all ease-in-out duration-300">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons Positioned on the Sliders */}
      <div className="absolute top-[60%] left-4 transform z-10">
        <button className="swiper-button-prev text-indigo-500 hover:text-indigo-600 transition">
        </button>
      </div>
      <div className="absolute top-[60%] right-4 transform z-10">
        <button className="swiper-button-next text-indigo-500 hover:text-indigo-600 transition">
        </button>
      </div>
    </div>
  );
}

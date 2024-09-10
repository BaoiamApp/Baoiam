import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard, Scrollbar } from "swiper/modules";

import review from "../../assets/Images/review.jpeg";
import review1 from "../../assets/Images/review1.jpeg";
import review3 from "../../assets/Images/review3.jpeg";
import review2 from "../../assets/Images/review2.jpeg";
import review4 from "../../assets/Images/review4.jpeg";
import review6 from "../../assets/Images/review6.jpeg";
import review7 from "../../assets/Images/review7.jpeg";
import review8 from "../../assets/Images/review8.jpeg";
import review9 from "../../assets/Images/review9.jpeg";
import TestimonialCard from "./ReviewCard";

const testimonials = [
  {
    name: "Kenetth Smith",
    designation: "CEO",
    company: "ABC IT Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 5,
    imageUrl: review,
  },
  {
    name: "Romy Carl",
    designation: "Senior Executive",
    company: "XYZ Logistics",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 4,
    imageUrl: review1,
  },
  {
    name: "Gorun Mackay",
    designation: "Manager",
    company: "DEF Corp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 3,
    imageUrl: review3,
  },
  {
    name: "Kenetth Smith",
    designation: "CEO",
    company: "ABC IT Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 4,
    imageUrl: review2,
  },
  {
    name: "Romy Carl",
    designation: "Senior Executive",
    company: "XYZ Logistics",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 4,
    imageUrl: review4,
  },
  {
    name: "Gorun Mackay",
    designation: "Manager",
    company: "DEF Corp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 3,
    imageUrl: review6,
  },
  {
    name: "Kenetth Smith",
    designation: "CEO",
    company: "ABC IT Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 5,
    imageUrl: review7,
  },
  {
    name: "Romy Carl",
    designation: "Senior Executive",
    company: "XYZ Logistics",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 5,
    imageUrl: review8,
  },
  {
    name: "Gorun Mackay",
    designation: "Manager",
    company: "DEF Corp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue.",
    rating: 4,
    imageUrl: review9,
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-white text-black py-12 mb-20 px-4 md:px-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Client Testimonials & Reviews
      </h2>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Keyboard, Pagination, Navigation, Scrollbar]}
        spaceBetween={16}
        breakpoints={{
          315: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="md:h-[450px] w-full md:w-[90%] m-auto rounded-lg"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md h-[380px] w-[280px] md:h-[330px] md:w-[280px] flex flex-col justify-center items-center gap-4  "
          >
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;


import React from "react";

import productm from "../../assets/ITIE&Entre/ITIE/productm.jpg";
import analysis from "../../assets/ITIE&Entre/ITIE/analysis.jpg";
import marketing from "../../assets/ITIE&Entre/ITIE/marketing.jpg";
import seo from "../../assets/ITIE&Entre/ITIE/seo.jpg";
import webd from "../../assets/ITIE&Entre/ITIE/webd.jpg";
import ui from "../../assets/ITIE&Entre/ITIE/ui.jpg";
import graphics from "../../assets/ITIE&Entre/ITIE/graphics.jpg";
import businesscom from "../../assets/ITIE&Entre/ITIE/businesscom.jpg";
import hr from "../../assets/ITIE&Entre/ITIE/hr.jpg";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

const courses = [
  {
    image: hr,
    title: "Human Resource",
    rating: "4.5",
    review: "85",
  },
  {
    title: "Data Analytics",
    rating: "4.7",
    review: "90",
    image: analysis,
  },
  {
    title: "Marketing",
    rating: "4.0",
    review: "75",
    image: marketing,
  },
  {
    title: "SEO",
    rating: "4.4",
    review: "88",
    image: seo,
  },
  {
    title: "UI/UX Designing",
    rating: "4.3",
    review: "70",
    image: ui,
  },
  {
    title: "Web Development",
    rating: "4.7",
    review: "95",
    image: webd,
  },
  {
    title: "Product Management",
    rating: "4.2",
    review: "70",
    image: productm,
  },
  {
    title: "Graphics Designing",
    rating: "4.3",
    review: "72",
    image: graphics,
  },
  {
    title: "Business Communication",
    rating: "4.0",
    review: "79",
    image: businesscom,
  },
];

const CourseCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-black">
        Our <span className="text-indigo-600">Courses</span>
      </h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button className="bg-black text-white px-4 py-2 md:px-6 md:py-2 hover:bg-indigo-600 hover:text-amber-50 rounded">
          Plus +
        </button>
        <button className="bg-white text-black border-2 border-black hover:bg-indigo-600 hover:text-amber-50 px-4 py-2 md:px-6 md:py-2 rounded">
          Premium ★
        </button>
      </div>
{/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-10 md:px-20">
        {courses.map((course, index) => (
          <div
            key={index}
            className="max-w-sm w-full rounded-lg border border-slate-300 bg-slate-100 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-3 py-4 h-full">
              <div className="font-bold text-lg md:text-2xl my-3 text-start">
                {course.title}
              </div>

              <div className="flex items-center my-5">
                <div className="text-base md:text-lg font-semibold">
                  {course.rating}
                </div>
                <div className="text-xl flex font-semibold text-amber-400 ml-2">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />
                </div>
                <div className="text-xs text-gray-600 ml-2">
                  ({course.review} Reviews)
                </div>
              </div>

              <div className="mt-10 flex justify-between items-center">
                <div className="font-bold text-xl">₹2999/-</div>
                <div className="inline-block bg-blue-200 border-2 border-indigo-600 rounded-md px-3 py-1 text-sm font-semibold text-indigo-700">
                  12 Months
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;

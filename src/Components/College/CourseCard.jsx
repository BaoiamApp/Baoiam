import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaArrowRight, FaArrowRightArrowLeft, FaGraduationCap } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdOutlineAttachMoney, MdOutlineMoneyOff } from "react-icons/md";

function CourseCard({ course }) {
  return (
    <div className="bg-white relative shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden pb-16 mx-auto font-[sans-serif] mt-4">
      <div className="min-h-fit">
        <img src="https://readymadeui.com/Imagination.webp" className="w-full" />
      </div>

      <div className="px-6 pb-12">
        <div className="course-catagory flex justify-between items-center">
          <p className="py-2 px-4 bg-blue-100 text-blue-500 font-semibold w-fit text-xs rounded-md text-nowrap my-4">
            {course.category}
          </p>
          <div className="text-green-400 rounded-full shadow-md cursor-pointer">
            {course.price === "Free" ? <MdOutlineMoneyOff size={22} /> : <div className="flex items-center group hover:pr-2">
              <MdOutlineAttachMoney size={22} />
              <div className="font-medium text-lg hidden group-hover:block transition duration-300 ease-in-out">
                {course.price.substr(1)}
                </div>
            </div>}
          </div>
        </div>
        <h3 className="text-gray-800 text-xl font-bold overflow-hidden text-ellipsis line-clamp-2 hover:line-clamp-none">
          {course.courseName}
        </h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu.
        </p>
        <div className="absolute bottom-4 w-full flex flex-col items-start gap-4">
          <div className="flex items-center text-gray-500 font-semibold space-x-4">
            <div className="flex items-center">
              <AiOutlineClockCircle className="mr-1" />
              <span className="text-nowrap text-xs">
                {course.courseDuration}
              </span>
            </div>
            <div className="flex items-center">
              <FaGraduationCap className="mr-1" />
              <span className="text-nowrap text-xs">
                {course.numberOfLearners} learners
              </span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center ">
            <button
              type="button"
              className="px-4 py-2 pr-2 rounded-lg border-green-600 border text-sm tracking-wider outline-none text-green-600 hover:bg-green-600 hover:text-white transition-all duration-150 active:text-green-600 flex items-center "
            >
              More
              <MdKeyboardArrowRight className="text-xl " />
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-gradient-to-r from-indigo-800 to-indigo-500 hover:bg-blue-700 w-fit active:bg-blue-600  "
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

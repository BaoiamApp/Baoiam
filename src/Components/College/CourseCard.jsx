import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaArrowRight, FaArrowRightArrowLeft, FaGraduationCap } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

function CourseCard({ course }) {
  return (
    <div class="bg-white relative shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden pb-16 mx-auto font-[sans-serif] mt-4">
      <div class="min-h-fit">
        <img src="https://readymadeui.com/Imagination.webp" class="w-full" />
      </div>

      <div class="px-6 pb-12">
        <div className="course-catagory flex justify-start ">
          <p className="py-2 px-4 bg-blue-100 text-blue-500 font-semibold w-fit text-xs rounded-md text-nowrap my-4">
            {course.category}
          </p>
        </div>
        <h3 class="text-gray-800 text-xl font-bold overflow-hidden text-ellipsis line-clamp-2 hover:line-clamp-none">
          {course.courseName}
        </h3>
        <p class="mt-4 text-sm text-gray-500 leading-relaxed">Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu.
        </p>
        <div className="absolute bottom-4 flex flex-col items-start gap-4">
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
          <div className="flex justify-between gap-4 items-center ">
          <button
            type="button"
            class="px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 w-fit active:bg-blue-600  "
          >
            Start Learning
          </button>
          <button
            type="button"
            class="px-4 py-2 pr-2 rounded-lg border-green-600 border text-sm tracking-wider outline-none text-green-600 hover:bg-green-600 hover:text-white transition-all duration-150 active:text-green-600 flex items-center "
          >
            More
            <MdKeyboardArrowRight className="text-xl "/>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

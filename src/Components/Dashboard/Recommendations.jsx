import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function Recommendations() {
  const navigate = useNavigate();

  const recommendedCourses = [
    {
      id: 1,
      name: "Advanced React Patterns",
      description:
        "Master React patterns and advanced concepts to build scalable applications.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 2,
      name: "Fullstack Web Development",
      description:
        "Become a fullstack developer by learning both frontend and backend technologies.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
  ];

  return (
    <div className="bg-indigo-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Recommended Courses</h2>

      <div className="flex flex-col gap-6">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white text-black w-full flex flex-col lg:flex-row items-center gap-4 shadow-lg rounded-lg p-4 md:p-6"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full md:w-32 h-32 md:h-32 object-cover rounded-lg"
            />

            {/* Course Info */}
            <div className="flex flex-col flex-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold">{course.name}</h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">{course.description}</p>
              
              <button
                onClick={() => navigate("/courses/college")}
                className="relative w-1/2 inline-flex items-center justify-center mt-3 bg-gradient-to-r from-indigo-700 to-indigo-500 py-2 overflow-hidden text-white font-semibold border border-indigo-600 rounded-full hover:text-indigo-600 group"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <IoIosArrowRoundForward size={30} />
                </span>
                <span className="relative">Enroll Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;

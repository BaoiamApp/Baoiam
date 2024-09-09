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
    {
      id: 3,
      name: "Advanced React Patterns",
      description:
        "Master React patterns and advanced concepts to build scalable applications.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 4,
      name: "Fullstack Web Development",
      description:
        "Become a fullstack developer by learning both frontend and backend technologies.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 5,
      name: "Advanced React Patterns",
      description:
        "Master React patterns and advanced concepts to build scalable applications.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 6,
      name: "Fullstack Web Development",
      description:
        "Become a fullstack developer by learning both frontend and backend technologies.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    }
  ];

  return (
    <div className="bg-indigo-800 h-screen overflow-scroll relative dark:border dark:border-white flex flex-col items-center  text-white px-4 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center w-full py-4 mt-2 sticky top-0 z-30 bg-indigo-800  shadow-2xl ">Recommended Courses</h2>

      <div className="flex  flex-col gap-6">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="w-full flex flex-col xl:flex-row  hover:shadow-md hover:shadow-black dark:border dark:border-white  items-center gap-4 shadow-lg rounded-lg p-4 md:p-6"
          >
            {/* Course Image */}
            <div className="w-full xl:w-fit ">
              <img
                src={course.image}
                alt={course.name}
                className="object-cover xl:w-32 xl:h-32  rounded-lg"
              />
            </div>
            {/* Course Info */}
            <div className="flex flex-col flex-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold">{course.name}</h3>
              <p className="text-sm md:text-base mt-2">{course.description}</p>

              <button
                onClick={() => navigate("/courses/college")}
                className="relative xl:w-2/3 mx-auto inline-flex items-center justify-center mt-3 bg-gradient-to-r from-indigo-700 to-indigo-500 py-2 px-4 overflow-hidden text-white font-semibold border border-indigo-600 rounded-full hover:text-indigo-600 group"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <IoIosArrowRoundForward size={30} />
                </span>
                <span className="text-nowrap relative">Enroll Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;

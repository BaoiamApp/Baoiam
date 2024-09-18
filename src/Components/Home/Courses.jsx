import { FaCloud } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { FaLanguage } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import React from "react";
import { FaBook, FaProjectDiagram, FaGlobe, FaUsers } from "react-icons/fa";

const Courses = () => {
  const data = [
    {
      title: "Extensive Learning Hours",
      description:
        "Engage with thousands of hours of interactive content crafted to enhance your skills and knowledge.",
      icon: <FaBook className="dark:text-white text-indigo-700 text-4xl" />,
    },
    {
      title: "Hands-On Projects",
      description: "Gain practical experience with a broad range of real-world projects tailored to your field of interest.",
      icon: (
        <FaProjectDiagram className="dark:text-white text-indigo-700 text-4xl" />
      ),
    },
    {
      title: "Growing Global Community",
      description: "Join a dynamic community of learners from around the world who are advancing their education and careers.",
      icon: <FaGlobe className="dark:text-white text-indigo-700 text-4xl" />,
    },
    {
      title: "Expert Mentorship",
      description: "Receive guidance from a diverse group of industry professionals who offer valuable insights and support.",
      icon: <FaUsers className="dark:text-white text-indigo-700 text-4xl" />,
    },
  ];

  return (
    <div className="px-10 md:px-20 dark:bg-[#080529] pb-5">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl dark:text-white  font-bold text-gray-900 mb-3">
          What Sets Us <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent" >Apart</span>
        </h2>
        <p className="text-base dark:text-gray-300 sm:text-lg text-gray-600">
          Discover the milestones and achievements that set us apart in the
          industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((stat, index) => (
          <div
            key={index}
            className="bg-zinc-100 dark:bg-indigo-900 bg-opacity-60 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-4">
              {" "}
              {/* Centering icon */}
              {stat.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {stat.title}
            </h2>
            <p className="text-gray-600 dark:text-white">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Courses;

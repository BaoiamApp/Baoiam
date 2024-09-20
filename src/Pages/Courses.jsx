import React from "react";
import { Link } from "react-router-dom";
import SliderHero from "../Components/School/SliderHero";
import OurHands from "../assets/Team/TeamHands.jpg";
import {
  FaArrowRight,
  FaBug,
  FaBullhorn,
  FaCamera,
  FaChartLine,
  FaCode,
  FaGlobe,
  FaLightbulb,
  FaMicrophone,
  FaPaintbrush,
  FaPalette,
  FaRobot,
  FaUserTie,
} from "react-icons/fa6";
import { FaCog, FaHandsHelping, FaSearch, FaTasks } from "react-icons/fa";
import {
  MdContentPaste,
  MdDesignServices,
  MdGroup,
  MdWeb,
} from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

// import { CollegeCourseData } from "../Data/CollegeData";
import { SiAndroid, SiDatabricks, SiGoogle } from "react-icons/si";
import { FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";
import { CollegeCourseData } from "../Data";
import { AiOutlineRobot } from "react-icons/ai";

const Courses = () => {
  const static_data = [
    <Link to="/course/1">
      <span className="relative z-10 flex items-center gap-4">
        <FaMicrophone
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">English Speaking/Public Speaking</span>
      </span>
    </Link>,
    <Link to="/course/2">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaLightbulb
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Creative Writing</span>
      </span>
    </Link>,
    <Link to="/course/3">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaPaintbrush
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Art and Craft (DIY)</span>
      </span>
    </Link>,
    <Link to="/course/4">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaCog
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Critical Thinking & Problem Solving</span>
      </span>
    </Link>,
    <Link to="/course/5">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaHandsHelping
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Life Skills</span>
      </span>
    </Link>,
    <Link to="/course/6">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaCamera
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Photography & Editing Skills</span>
      </span>
    </Link>,
    <Link to="/course/7">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaCode
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Technology Development with AI & Coding</span>
      </span>
    </Link>,
    <Link to="/course/8">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaChartLine
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Entrepreneurship & Innovation</span>
      </span>
    </Link>,
    <Link to="/course/9">
      <span className="relative z-10 flex items-center gap-4 ">
        <MdGroup
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Social Media & Digital Marketing</span>
      </span>
    </Link>,
    <Link to="/course/10">
      <span className="relative z-10 flex items-center gap-4 ">
        <BsBank
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Finance Education</span>
      </span>
    </Link>,
  ];
  const static_data2 = [
    <Link to="/course/11">
      <span className="relative z-10 flex items-center gap-4">
        <MdWeb className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="">Web Development</span>
      </span>
    </Link>,
    <Link to="/course/12">
      <span className="relative z-10 flex items-center gap-4">
        <FaPalette
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">Graphic Designing</span>
      </span>
    </Link>,
    <Link to="/course/13">
      <span className="relative z-10 flex items-center gap-4">
        <FaUserTie
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">Human Resource</span>
      </span>
    </Link>,
    <Link to="/course/14">
      <span className="relative z-10 flex items-center gap-4">
        <FaChartLine
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">Data Analytics</span>
      </span>
    </Link>,
    <Link to="/course/15">
      <span className="relative z-10 flex items-center gap-4">
        <FaTasks className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="">Product Management</span>
      </span>
    </Link>,
    <Link to="/course/16">
      <span className="relative z-10 flex items-center gap-4">
        <SiAndroid
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">Android Development</span>
      </span>
    </Link>,
    <Link to="/course/17">
      <span className="relative z-10 flex items-center gap-4">
        <FaBullhorn
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">Digital Marketing</span>
      </span>
    </Link>,
    <Link to="/course/18">
      <span className="relative z-10 flex items-center gap-4">
        <MdDesignServices
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">UI/UX Design</span>
      </span>
    </Link>,
    <Link to="/course/19">
      <span className="relative z-10 flex items-center gap-4">
        <FaBug className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="">Software Testing</span>
      </span>
    </Link>,
    <Link to="/course/20">
      <span className="relative z-10 flex items-center gap-4">
        <FaLightbulb
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">Entrepreneurship & Innovation</span>
      </span>
    </Link>,
    <Link to="/course/21">
      <span className="relative z-10 flex items-center gap-4">
        <FaSearch
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="">SEO Development</span>
      </span>
    </Link>,
    <Link to="/course/22">
      <span className="relative z-10 flex items-center gap-4">
        <FaRobot className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="">Machine Learning with AI</span>
      </span>
    </Link>,
  ];
  const static_data3 = [
    <Link to="/course/23">
      <span className="relative z-10 flex items-center gap-4">
        <FaGlobe
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">International Business</span>
      </span>
    </Link>,
    <Link to="/course/24">
      <span className="relative z-10 flex items-center gap-4 ">
        <GiBrain
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Emotional Intelligence</span>
      </span>
    </Link>,

    <Link to="/course/25">
      <span className="relative z-10 flex items-center gap-4 ">
        <MdContentPaste
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Executive & Public Relations Content Writing</span>
      </span>
    </Link>,

    <Link to="/course/26">
      <span className="relative z-10 flex items-center gap-4 ">
        <SiDatabricks
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Data Science</span>
      </span>
    </Link>,
    <Link to="/course/27">
      <span className="relative z-10 flex items-center gap-4 ">
        <AiOutlineRobot
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Machine Learning with AI</span>
      </span>
    </Link>,
    <Link to="/course/28">
      <span className="relative z-10 flex items-center gap-4 ">
        <FaChartLine
          className="text-indigo-600 flex-shrink-0 group-hover:text-white"
          size={22}
        />
        <span className="">Data Analytics</span>
      </span>
    </Link>,
  ];
  return (
    <>
      <div className="flex mt-20 flex-col-reverse lg:flex-row items-center mx-auto w-full p-5 sm:px-6 xs:px-4">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
            Explore Our Range of Courses for Schools and Colleges
          </h1>
          <p className="text-base text-slate-600 sm:text-lg md:text-xl mb-6">
            At BAOIAM, we offer a wide range of courses designed for students
            from schools and colleges. Whether you're preparing for board exams
            or pursuing a degree, our courses provide comprehensive, engaging
            content to help you succeed academically.
          </p>
        </div>
        <div className="h-96 md:h-full  md:w-[40%] pt-8 md:pt-0">
          <SliderHero />
        </div>
      </div>
      <div className="p-5 w-full mt-10 sm:px-6 xs:px-4" id="courses">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Junior Programs
        </h1>
        {/* <ul className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-2 gap-x-5 text-left text-[#031864] font-semibold">
          {static_data.map((ele, id) => {
            return (
              <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                {ele}
              </li>
            );
          })}
        </ul> */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
          {static_data.map((category, index) => (
            <button
              key={index}
              className="dark:bg-indigo-600 w-full px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 w-full mt-10 sm:px-6 xs:px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          University Programs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
          {static_data2.map((category, index) => (
            <button
              key={index}
              className="dark:bg-indigo-600 px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 w-full mt-10 sm:px-6 xs:px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Professional Degree Programs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
          {static_data3.map((category, index) => (
            <button
              key={index}
              className="dark:bg-indigo-600 px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <section className="py-16 dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg ">
              We deliver the best service with the highest quality and
              commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-600 p-4 rounded-full mb-4">
                <FiCheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Expert Mentors</h3>
              <p className="mt-2 text-center">
                Courses led by experienced teachers and professionals.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-indigo-600 p-4 rounded-full mb-4">
                <FiTrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold ">Engaging Content</h3>
              <p className="mt-2 text-center">
                Interactive lessons with quizzes, assignments, and projects
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-indigo-600 p-4 rounded-full mb-4">
                <FiClock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Flexible Learning</h3>
              <p className="mt-2 text-center">
                Study at your own pace, anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-indigo-600 p-4 rounded-full mb-4">
                <FaHandsHelping className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Certification</h3>
              <p className="mt-2 text-center">
                Receive certificates upon completion of courses.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* Call to Action */}
      <div className="w-full h-52 md:h-80 my-6 relative ">
        <div className="absolute w-full h-full hover:opacity-100 backdrop-blur-sm bg-black/80"></div>
        <img
          src={OurHands}
          alt="Join Us"
          className="w-full absolute-z-10 h-full object-cover"
        />
        <div className="flex absolute top-0 right-0 items-center gap-4 z-20 w-full h-full justify-center flex-col">
          {/* <h1 className="text-white text-xl max-w-[80%] text-center md:text-2xl lg:text-4xl font-serif">
            you'll look better{" "}
            <span className="text-indigo-500 uppercase">with us</span>{" "}
          </h1> */}
          <a
            href={"#courses"}
            className="relative transition-all px-3 py-2 rounded text-white ease-in duration-75 bg-indigo-500 group-hover:bg-opacity-0"
          >
            Browse All Courses
          </a>
          <Link
            to={"/contact"}
            className="relative transition-all px-3 py-2 rounded bg-indigo-500 text-white ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0"
          >
            Contact
          </Link>
          {/* <FaArrowRight color="white" /> */}
        </div>
      </div>
    </>
  );
};

export default Courses;

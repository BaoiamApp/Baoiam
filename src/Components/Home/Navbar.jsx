import React, { useEffect, useState } from "react";
import img1 from "../../assets/img1.png";
import { FaBars, FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import CoursesList from "../CoursesList";
import { Link, NavLink } from "react-router-dom";
import { CollegeCourse, OtherCourse, School } from "../../Data";
import { RxCross2 } from "react-icons/rx";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenu3Line, RiSearch2Line } from "react-icons/ri";
import SearchBox from "./SearchBox";
import logo from "../../assets/BAOAM.png";
import axios from "axios";
import MobNavbar from "./MobNavbar";

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);

  const [isDark, setIsDark] = useState(false);
  const [userDrop, setUserDrop] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [linkActive, setLinkActive] = useState("Home");
  const [courses, setCourses] = useState([]);



  const darkTheme = () => {
    setIsDark(old => !old);
    theme();
  };

  const handleLinkClick = (link) => {
    setLinkActive(link);
  };

  const getCourseData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.baoiam.com/api/categories/"
      );
      setSchoolCourses(data[0].subcategories);
      setCourses(data);
      console.log(data);
    } catch (err) {
      // console.log(err.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    getCourseData();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle mouse entering the dropdown
  const handleMouseEnter = () => {
    if (delayHide) clearTimeout(delayHide); // Clear any existing timeout
    setShow(true);
  };

  // Function to handle mouse leaving the dropdown
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setShow(false), 300); // Set a 300ms delay
    setDelayHide(timeout); // Store the timeout so it can be cleared if necessary
  };

  return (
    <>
    {showmenu && <div className="overlay fixed top-0 right-0 w-full h-full bg-black opacity-40 z-40 lg:hidden" onClick={()=>setShowmenu(false)}></div>}
      <div
        className={`flex z-[90] items-center justify-between px-4 py-2 w-full sticky top-0 ${isTransparent
          ? "bg-white dark:bg-[#080529]"
          : "bg-white/70 backdrop-blur dark:bg-black/30 "
          }`}
      >

        {/* Logo */}

        <Link
          to={"/instructor-dashboard"}
          className={`${isDark ? "w-36 h-20" : "w-40 h-20"}`}
        >
          <img
            src={isDark ? logo : img1}
            className={`w-full h-full ${isDark ? "object contain" : "object-contain"
              }`}
            alt="logo"
          />
        </Link>

        {/* NavLinks */}
        <div
          className={`hidden lg:flex items-center ${isDark ? "font-semibold" : "font-medium"
            } justify-between `}
        >
          <Link
            to={"/"}
            onClick={() => handleLinkClick("Home")}
            className={`mx-4  ${linkActive === "Home" ? "text-orange-500" : ""
              }`}
          >
            Home
          </Link>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mx-4 cursor-pointer flex gap-2 items-center"
          >
            Courses
            {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>

          {show && (
            <div
              className="absolute px-4 top-[4.5rem] font-normal left-52 bg-white dark:bg-gray-700 border-black/20 border-[1px] rounded-b-3xl text-sm p-1 shadow-lg z-50 dark:text-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex relative rounded-md">
                <div className="absolute left-[6%] bottom-[101%]  border- cd 8 border-x-transparent border-t-transparent border-b-gray-100"></div>

                {/* School Course */}
                {!courses[0] ? (
                  School.map((c, i) => {
                    return (
                      <div key={i} className="p-4">
                        <Link
                          to={`${c.link}`}
                          className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                        >
                          {c.Cate}
                          {/* {courses[0].name} */}
                        </Link>
                        <ul className="flex flex-col">
                          {c.subCate.map((sub, index) => {
                            return (
                              <Link
                                key={index}
                                to={`/course/school/${sub.id}`}
                                className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                              >
                                {sub.course}
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4">
                    <Link
                      to={`/courses/school`}
                      className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                    >
                      {/* {c.Cate} */}
                      {courses[0]?.name}
                    </Link>
                    <ul className="flex flex-col">
                      {courses[0]?.subcategories.map((sub, index) => {
                        return (
                          <Link
                            key={index}
                            to={`/course/school/${sub.id}`}
                            className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {!courses[1] ? (
                  CollegeCourse.map((c, i) => {
                    return (
                      <div key={i} className="p-4">
                        <Link
                          to={`${c.link}`}
                          className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                        >
                          {c.Cate}
                        </Link>
                        <ul className="flex flex-col">
                          {c.subCate.map((sub, index) => {
                            return (
                              <Link
                                key={index}
                                // to={`/course/${sub.courseName}`}
                                to={`/course/college/${sub.id}`}
                                className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                              >
                                {sub.courseName}
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4">
                    <Link
                      to={`/courses/college`}
                      className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                    >
                      {/* {c.Cate} */}
                      {courses[1]?.name}
                    </Link>
                    <ul className="flex flex-col">
                      {courses[1]?.subcategories.map((sub, index) => {
                        return (
                          <Link
                            key={index}
                            to={`/course/college/${sub.id}`}
                            className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {!courses[2] ? (
                  OtherCourse.map((c, i) => {
                    return (
                      <div key={i} className="p-4">
                        <Link
                          to={`${c.link}`}
                          className="font-semibold mb-2 px-2 text-base text-slate-800 hover:underline"
                        >
                          {c.Cate}
                        </Link>
                        <ul className="flex flex-col">
                          {c.subCate.map((sub, index) => {
                            // {c.subCate.map((sub, index) => {
                            return (
                              <Link
                                key={index}
                                to={`/`}
                                className="px-2 py-1 rounded-md text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                              >
                                {sub.course}
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4">
                    <Link
                      to={`/courses/other`}
                      className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                    >
                      {/* {c.Cate} */}
                      {courses[2]?.name}
                    </Link>
                    <ul className="flex flex-col">
                      {courses[2]?.subcategories.map((sub, index) => {
                        return (
                          <Link
                            key={index}
                            to={`/course/other/${sub.id}`}
                            className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          <Link
            to={"/about-us"}
            onClick={() => handleLinkClick("About")}
            className={`mx-4 text-nowrap hover:text-indigo-500 ${linkActive === "About" ? "text-indigo-600" : ""
              } `}
          >
            About Us
          </Link>

          <Link
            to={"/pap"}
            onClick={() => handleLinkClick("PAP")}
            className={`mx-4 hover:text-indigo-500 ${linkActive === "PAP" ? "text-indigo-600" : ""
              } `}
          >
            PAP
          </Link>

          <Link
            to={"/itie"}
            onClick={() => handleLinkClick("ITIE")}
            className={`mx-4 hover:text-indigo-500 ${linkActive === "ITIE" ? "text-indigo-600" : ""
              } `}
          >
            ITIE
          </Link>

          <Link
            to={"/blogs"}
            onClick={() => handleLinkClick("Blog")}
            className={`mx-4 hover:text-indigo-500 ${linkActive === "Blog" ? "text-indigo-600" : ""
              } `}
          >
            Blog
          </Link>

          <Link
            to={"/contact"}
            onClick={() => handleLinkClick("Contact")}
            className={`mx-4 hover:text-indigo-500 ${linkActive === "Contact" ? "text-indigo-600" : ""
              } `}
          >
            Contact
          </Link>
        </div>

        {/* Last */}
        <div>
        <div className="flex items-center gap-4 text-black dark:text-white">
          <div className="flex items-center gap-4">
            <SearchBox />

            <FaRegUser
              onClick={() => setUserDrop(!userDrop)}
              size={18}
              className="z-10 relative cursor-pointer"
            />

            {userDrop && (
              <div className="z-40 absolute top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-24 md:w-28 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <Link
                    to={"/login"}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <NavLink to="/login">Login</NavLink>
                  </Link>
                  <Link
                    to={"/signup"}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <NavLink to="/signup">Sign Up</NavLink>
                  </Link>
                </ul>
                {/* <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> */}
              </div>
            )}
          </div>

          <span
            onClick={darkTheme}
            className="text-xl cursor-pointer"
          >
            {isDark ? <BsSun /> : <BsMoonStars />}
          </span>
          <Link to={"/gcsp"} className="relative group">
            <button
              type="button"
              class="hidden sm:flex text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 font-semibold rounded-lg text-sm px-8 py-2.5 text-center me-14 "
            >
              GCEP
            </button>
          </Link>
          <span
            onClick={() => setShowmenu(old => !old)}
            className="block lg:hidden"
          >
            <RiMenu3Line size={22} />
          </span>
        </div>
        <MobNavbar setShowmenu={setShowmenu} showmenu={showmenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

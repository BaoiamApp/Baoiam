import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/img1.png";
import { FaBars, FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import CoursesList from "../CoursesList";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CollegeCourseData, OtherCourseData, School } from "../../Data";
import { RxCross2 } from "react-icons/rx";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenu3Line, RiSearch2Line } from "react-icons/ri";
import SearchBox from "./SearchBox";
import logo from "../../assets/BAOAM.png";
import axios from "axios";

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);
  const [subCateDrop, setSubCateDrop] = useState(false);
  const [schoolCate, setSchoolCate] = useState(false);
  const [collegeCate, setCollegeCate] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [userDrop, setUserDrop] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [linkActive, setLinkActive] = useState("Home");
  const [schoolCourses, setSchoolCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const userDropDownRef = useRef();
  const navigate = useNavigate();
  const userhandleDropDownRef = useRef();
  const darkTheme = () => {
    setIsDark(!isDark);
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

  const HideUserDrop = (event) => {
    if (
      userDropDownRef.current &&
      !userDropDownRef.current.contains(event.target) &&
      userhandleDropDownRef.current &&
      !userhandleDropDownRef.current.contains(event.target)
    ) {
      setUserDrop(false);
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
    window.addEventListener("click", HideUserDrop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", HideUserDrop);
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
      <div
        className={`flex z-50 items-center justify-between px-4 py-2 ${
          isTransparent
            ? "bg-white dark:bg-[#080529]"
            : "bg-white/70 backdrop-blur dark:bg-black/30 fixed top-0 right-0 left-0"
        }`}
      >
        {/* Logo */}

        <Link
          to={"/instructor-dashboard"}
          className={`${isDark ? "w-36 h-20" : "w-40 h-20"}`}
        >
          <img
            src={isDark ? logo : img1}
            className={`w-full h-full ${
              isDark ? "object contain" : "object-contain"
            }`}
            alt="logo"
          />
        </Link>

        {/* NavLinks */}
        <div
          className={`hidden lg:flex items-center ${
            isDark ? "font-semibold" : "font-medium"
          } justify-between mt-4`}
        >
          <Link
            to={"/"}
            onClick={() => handleLinkClick("Home")}
            className={`mx-4  ${
              linkActive === "Home" ? "text-orange-500" : ""
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
              className="absolute top-[4.5rem] font-normal left-52 bg-white dark:bg-gray-700 border-black/20 border-[1px] rounded-b-3xl text-sm p-1 shadow-lg z-50 dark:text-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex left-1/2">
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
                  CollegeCourseData.map((c, i) => {
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
                  OtherCourseData.map((c, i) => {
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
                                to={`/course/other/${sub.id}`}
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
            className={`mx-4 hover:text-indigo-500 ${
              linkActive === "About" ? "text-indigo-600" : ""
            } `}
          >
            About Us
          </Link>

          <Link
            to={"/pap"}
            onClick={() => handleLinkClick("PAP")}
            className={`mx-4 hover:text-indigo-500 ${
              linkActive === "PAP" ? "text-indigo-600" : ""
            } `}
          >
            PAP
          </Link>

          <Link
            to={"/itie"}
            onClick={() => handleLinkClick("ITIE")}
            className={`mx-4 hover:text-indigo-500 ${
              linkActive === "ITIE" ? "text-indigo-600" : ""
            } `}
          >
            ITIE
          </Link>

          <Link
            to={"/blogs"}
            onClick={() => handleLinkClick("Blog")}
            className={`mx-4 hover:text-indigo-500 ${
              linkActive === "Blog" ? "text-indigo-600" : ""
            } `}
          >
            Blog
          </Link>

          <Link
            to={"/contact"}
            onClick={() => handleLinkClick("Contact")}
            className={`mx-4 hover:text-indigo-500 ${
              linkActive === "Contact" ? "text-indigo-600" : ""
            } `}
          >
            Contact
          </Link>
        </div>

        {/* Last */}
        <div className="flex items-center gap-4 text-black dark:text-white mt-2">
          <div className="flex items-center gap-4">
            <SearchBox />

            <div ref={userhandleDropDownRef}>
              <FaRegUser
                onClick={() => setUserDrop(!userDrop)}
                size={18}
                className="z-10 relative cursor-pointer"
              />
            </div>

            {userDrop && (
              <div
                ref={userDropDownRef}
                className="z-40 absolute top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-24 md:w-28 dark:bg-gray-700 dark:divide-gray-600"
              >
                {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div> */}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {!localStorage.getItem("access_token") ? (
                    <Link
                      to={"/login"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to="/login">Login</NavLink>
                    </Link>
                  ) : (
                    <Link
                      to={"/profile"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to="/profile">Profile</NavLink>
                    </Link>
                  )}
                  {!localStorage.getItem("access_token") ? (
                    <Link
                      to={"/signup"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to="/signup">Sign Up</NavLink>
                    </Link>
                  ) : (
                    <p
                      onClick={() => {
                        localStorage.removeItem("access_token");
                        localStorage.removeItem("userInfo");
                        navigate("/login");
                      }}
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logout
                    </p>
                  )}
                </ul>
                {/* <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> */}
              </div>
            )}
          </div>

          <span
            onClick={darkTheme}
            className="text-xl cursor-pointer hidden lg:block"
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
            onClick={() => setShowmenu(!showmenu)}
            className="block lg:hidden"
          >
            <RiMenu3Line size={22} />
          </span>

          {showmenu && (
            <aside className="fixed lg:hidden top-0 right-0 z-40 w-80 h-screen transition-transform -translate-x-0">
              <div className="h-full px-3 py-4 overflow-y-auto bg-white border dark:text-white dark:bg-black">
                <RxCross2
                  className="text-black dark:text-white ml-64"
                  onClick={() => setShowmenu(!showmenu)}
                  size={25}
                />

                <ul className="space-y-2 font-medium">
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/"} className="ms-3">
                      Home
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => setSubCateDrop(!subCateDrop)}
                      type="button"
                      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                        Course
                      </span>
                    </button>
                    {subCateDrop && (
                      <ul className="py-2 space-y-2">
                        <li
                          onClick={() => setSchoolCate(!schoolCate)}
                          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 relative"
                        >
                          School
                        </li>
                        {!courses[0] ? (
                          schoolCate && (
                            <div className="absolute top-56 md:top-24 w-72 right-4 md:right-80 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 md:w-96 h-64 md:h-fit overflow-auto dark:text-gray-700">
                              {School.map((c, i) => {
                                return (
                                  <div key={i} className="p-4">
                                    <Link
                                      onClick={() => {
                                        setShowmenu(!showmenu);
                                        setSubCateDrop(!subCateDrop);
                                      }}
                                      to={`${c.link}`}
                                      className="font-bold mb-2 px-2 text-base"
                                    >
                                      {c.Cate}
                                    </Link>
                                    <ul className="flex flex-col">
                                      {c.subCate.map((sub, index) => {
                                        return (
                                          <Link
                                            onClick={() => {
                                              setShowmenu(!showmenu);
                                              setSubCateDrop(!subCateDrop);
                                              setSchoolCate(!schoolCate);
                                            }}
                                            key={index}
                                            to={`/course/school/${sub.id}`}
                                            className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                                          >
                                            {sub.course}
                                          </Link>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          )
                        ) : (
                          <div className="absolute top-56 md:top-24 w-72 right-4 md:right-80 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 md:w-96 h-64 md:h-fit overflow-auto dark:text-gray-700">
                            <div className="p-4">
                              <Link
                                onClick={() => {
                                  setShowmenu(!showmenu);
                                  setSubCateDrop(!subCateDrop);
                                }}
                                // to={`${c?.link}`}
                                to={`/course/${courses[0].name}`}
                                className="font-bold mb-2 px-2 text-base"
                              >
                                {courses[0].name}
                              </Link>
                              <ul className="flex flex-col">
                                {courses[0].subcategories.map((sub, index) => {
                                  return (
                                    <Link
                                      onClick={() => {
                                        setShowmenu(!showmenu);
                                        setSubCateDrop(!subCateDrop);
                                        setSchoolCate(!schoolCate);
                                      }}
                                      key={index}
                                      to={`/course/school/${sub.id}`}
                                      className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                                    >
                                      {sub.name}
                                    </Link>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        )}
                        <li
                          onClick={() => setCollegeCate(!collegeCate)}
                          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          College
                        </li>
                        {collegeCate && (
                          <div className="absolute top-64 right-4 w-72 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 md:w-96 h-64 overflow-auto dark:text-gray-700">
                            {!courses[1] ? (
                              CollegeCourseData.map((c, i) => {
                                return (
                                  <div key={i} className="p-4">
                                    <Link
                                      onClick={() => {
                                        setShowmenu(!showmenu);
                                        setSubCateDrop(!subCateDrop);
                                      }}
                                      to={`${c.link}`}
                                      className="font-bold mb-2 px-2 text-base"
                                    >
                                      {c.Cate}
                                    </Link>
                                    <ul className="flex flex-col">
                                      {c.subCate.map((sub, index) => {
                                        return (
                                          <Link
                                            onClick={() => {
                                              setShowmenu(!showmenu);
                                              setSubCateDrop(!subCateDrop);
                                              setCollegeCate(!collegeCate);
                                            }}
                                            key={index}
                                            to={`/course/college/${sub.id}`}
                                            className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
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
                              <div></div>
                            )}
                          </div>
                        )}
                      </ul>
                    )}
                  </li>

                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/about-us"} className="ms-3">
                      About Us
                    </Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/pap"} className="ms-3">
                      PAP
                    </Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/itie"} className="ms-3">
                      ITIE
                    </Link>
                  </li>
                  <li className="flex md:hidden items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/gcsp"} className="ms-3">
                      GCSP
                    </Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/blogs"} className="ms-3">
                      Blogs
                    </Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={"/contact"} className="ms-3">
                      Contact
                    </Link>
                  </li>
                </ul>

                <ul className="pt-4 mt-4 font-medium border-t border-gray-200 dark:border-gray-700">
                  <li className="flex items-center p-2 font-medium text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    Theme
                  </li>
                  <li
                    onClick={darkTheme}
                    className="flex items-center gap-2 p-2 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <BsSun size={18} /> Light
                  </li>
                  <li
                    onClick={darkTheme}
                    className="flex items-center gap-2 p-2 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <BsMoonStars size={18} /> Dark
                  </li>
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

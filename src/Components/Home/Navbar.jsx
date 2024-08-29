import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { LuMoonStar } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CourseCate } from "../../Data";

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);

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
      <div className="flex justify-evenly items-center bg-white dark:bg-black p-[2rem]">
        <Link to={"/"}>
          <img className="h-[3.5rem] w-[8rem]" src={img1} />
        </Link>

        <div className="hidden lg:mt-5 dark:text-white lg:block">
          <ul className="flex ">
            <Link to={"/"} className="mx-4">
              Home
            </Link>
            <Link to={"/about-us"} className="mx-4">
              About Us
            </Link>

            <div className="flex flex-col relative">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="mx-4 cursor-pointer"
              >
                Courses
              </li>

              {show && (
                <div
                  className="absolute top-[5.8rem] bg-white border-black/20 border-[1px] rounded-b-3xl text-sm p-1 shadow-lg z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex left-1/2">
                    {CourseCate.map((c, i) => {
                      return (
                        <div key={i} className="p-4">
                          <h3 className="font-bold mb-2 px-2 text-base">
                            {c.Cate}
                          </h3>
                          <ul className="flex flex-col">
                            {c.subCate.map((sub, index) => {
                              return (
                                <Link
                                  key={index}
                                  to={`/course`}
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
                </div>
              )}
            </div>

            <Link to={"/blog"} className="mx-4">
              Blog
            </Link>
            <Link to={"/contact"} className="mx-4">
              Contact
            </Link>
          </ul>
        </div>

        <div className="px-3 w-[20%] border-2 sm:flex items-center lg:py-1 hidden lg:px-3 lg:w-[29%] xl:w-[22vw] md:mt-4 h-10 sm:mt-4 lg:rounded-lg lg:border-gray-400 xl:flex p-0.5 sm:w-[50%] rounded-lg border-gray-400">
          <input
            className="w-[14rem] lg:text-[1rem] bg-transparent outline:none xl:w-[16rem] sm:text-[2.3vw] h-8 sm:w-[85%] mr-2 focus:outline-none"
            type="text"
            placeholder="Search for your favorite course"
          ></input>

          <FaMagnifyingGlass className="text-gray-400 lg:text-xl xl:pl-2 xl:text-2xl text-[1.5rem] pl-2" />
        </div>

        <Link
          to={"/gscp"}
          className="bg-[#fbbf24] xl:px-[1.8rem] xl:w-[8%]  font-bold lg:block lg:p-2 lg:px-4 p-1 pl-3 lg:w-[8%]  w-[9%] md:pt-2  mt-4 h-10  px-14 rounded-lg text-white"
        >
          <button className="lg:ml-1 ">GSCP</button>
        </Link>

        <div className="flex ">
          <Link
            to={"/login"}
            className="border hidden font-semibold lg:hidden px-3 xl:py-1 xl:block mr-[1rem] border-blue-400 hover:bg-blue-400 hover:text-white hover:border-white xl:h-9 xl:mt-4 rounded-lg text-blue-400"
          >
            <button className="px-2">Login</button>
          </Link>
          <Link
            to={"/signup"}
            className="bg-blue-400 hidden xl:block xl:py-1 lg:hidden text-white font-semibold xl:mt-4 xl:h-9 border border-white rounded-lg px-3 hover:text-blue-400 hover:bg-transparent hover:border-blue-400"
          >
            <button>Sign Up</button>
          </Link>
        </div>

        <div>
          <div className="absolute lg:block top-[2rem] lg:right-[2%] xl:hidden sm:top-[2.2rem] right-[2rem]">
            <FaBars
              className="text-[2rem] dark:text-white mt-4"
              onClick={() => setShowmenu(!showmenu)}
            />
          </div>

          {showmenu && (
            <div className="absolute w-[9rem] right-[0.5rem] mt-[5.5rem] bg-white">
              <ul className="flex flex-col  ">
                <li className="mx-5 my-1 lg:hidden">Home</li>
                <li className="mx-5 my-1 lg:hidden">About Us</li>

                <div className="flex flex-col">
                  <li
                    className="mx-5 cursor-pointer my-1 lg:hidden"
                    onClick={() => setShow(!show)}
                  >
                    Courses
                  </li>

                  {show && (
                    <div className="absolute mt-8 bg-gray-200 text-sm p-1">
                      <ul>
                        <li className="my-4 px-2">Engineering</li>
                        <li className="my-4 px-2">Research</li>
                        <li className="my-4 px-2">Data Analytics</li>
                        <li className="my-4 px-2">AI</li>
                      </ul>
                    </div>
                  )}
                </div>

                <li className="mx-5 my-1 lg:hidden">Blog</li>
                <li className="mx-5 my-1 lg:hidden">Contact</li>
                <li className="mx-3 my-1">
                  <button className="ml-2">Sign Up</button>
                </li>
                <li className="mx-3 my-1">
                  <button className="ml-2">Login</button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <LuMoonStar
          onClick={theme}
          className="text-[1.7rem] mr-9  cursor-pointer text-blue-700 mt-5"
        />
      </div>
    </>
  );
};

export default Navbar;

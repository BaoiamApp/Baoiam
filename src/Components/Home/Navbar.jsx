
// import { FaBars } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
// testing
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import img1 from '../../images/img1.png';
import { FaCaretUp } from 'react-icons/fa';
import { FaBars, FaCaretDown, FaLock, FaMagnifyingGlass, FaRightToBracket, FaUser, } from 'react-icons/fa6';
import { LuMoonStar } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = ({theme}) => {
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

  // comment
  return (
    <>
      <div className="flex justify-evenly bg-white dark:bg-black p-[2rem]">
        <div>
          <img className="h-[3.5rem] w-[8rem]" src={img1} />
        </div>

        <div className="hidden lg:mt-5 dark:text-white lg:block">
          <ul className="flex ">
            <li className="mx-4">Home</li>
            <li className="mx-4">About Us</li>

            <div className="flex flex-col">
              <li
                className="mx-4 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Courses
              </li>

              {show && (
                <div
                  className="absolute mt-8 bg-white text-sm p-1 hover:shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex border-slate-500 left-1/2">
                    {/* Card 1 */}
                    <div className="p-4 border-r border-gray-200">
                      <h3 className="font-bold mb-4 px-2 text-base">School</h3>
                      <ul>
                        
                        <Link to={"/course"}  className="my-3 px-2 cursor-pointer">
                          English speaking/Public speaking
                        </Link>
                        <li className="my-3 px-2 cursor-pointer">
                          Creative writing
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Art and craft (DIY)
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Critical thinking & problem solving
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Life Skills
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Photography & editing skills
                        </li>
                        <li className="my-3 px-2 cursor-pointer">Finance</li>
                        <li className="my-3 px-2 cursor-pointer">
                          Technology Development with AI and Coding
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Entrepreneurship & Innovation
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Social Media and Digital Marketing
                        </li>
                      </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4">
                      <h3 className="font-bold mb-4 px-2 text-base">College</h3>
                      <ul>
                        <li className="my-3 px-2 cursor-pointer">
                          Web Development
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Graphic Designing
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Human Resource
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Data Analytics
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Product Management
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Android Development
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Digital Marketing
                        </li>
                        <li className="my-3 px-2 cursor-pointer">SEO</li>
                        <li className="my-3 px-2 cursor-pointer">
                          UI UX Design
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Software Testing
                        </li>
                        <li className="my-3 px-2 cursor-pointer">
                          Entrepreneurship and Innovation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* {show?<FontAwesomeIcon className='ml-1' icon={faCaretUp}/>:<FontAwesomeIcon className='ml-1' icon={faCaretDown}/>} */}
            {/* <div className="flex flex-col">
              <li
                className="mx-4 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                Courses
              </li>

              {show && (
                <div className="absolute mt-8 bg-white text-sm p-1">
                  <ul>
                    <li className="my-3 px-2">Engineering</li>
                    <li className="my-3 px-2">Research</li>
                    <li className="my-3 px-2">Data Analytics</li>
                    <li className="my-3 px-2">AI</li>
                  </ul>
                </div>
              )}
            </div> */}

            <li className="mx-4">Blog</li>
            <li className="mx-4"><Link to="/ContactUs">Contact</Link></li>
          </ul>
        </div>

        <div className="px-3 w-[20%] border-2 sm:flex lg:py-0.1 hidden lg:px-3 lg:w-[29%] xl:w-[22vw] md:mt-4 h-10 sm:mt-4 lg:rounded-lg lg:border-gray-400 xl:flex p-0.5 sm:w-[50%] rounded-lg border-gray-400">
          <input
            className="w-[14rem] lg:text-[1rem] bg-transparent outline:none xl:w-[16rem]  sm:text-[2.3vw] h-8 sm:w-[85%] mr-2 "
            type="text"
            placeholder="Search for your favorite course"
          ></input>

          {/* <FontAwesomeIcon className='text-gray-400 lg:text-lg xl:pl-2 xl:text-xl text-xl pt-1 pl-2' icon={faMagnifyingGlass}/> */}
          <FaMagnifyingGlass className='text-gray-400 lg:text-xl xl:pl-2 xl:text-2xl text-[1.5rem] pt-1 mt-1 pl-2'/>
        </div>

        <div className="bg-[#fbbf24] xl:px-[1.8rem] xl:w-[8%]  font-bold lg:block lg:p-2 lg:px-4 p-1 pl-3 lg:w-[8%]  w-[9%] md:pt-2  mt-4 h-10  px-14 rounded-lg text-white">
          <button className="lg:ml-1 ">GCEP</button>
        </div>

        <div className="flex ">
          <div className="border-2 hidden lg:hidden px-3 xl:py-1 xl:block mr-[1rem] border-violet-700 xl:h-9 xl:mt-4 rounded-lg text-violet-700">
            <button className="pr-2 ">Login</button>

            {/* <FontAwesomeIcon icon={faLock} /> */}
          </div>
          <div className="bg-violet-700 hidden xl:block xl:py-1 lg:hidden text-white font-semibold xl:mt-4 xl:h-9 border-2 border-blue-700 rounded-lg px-3 ">
            <button>Sign Up</button>
          </div>
        </div>

        <div>
          <div className="absolute lg:block top-[2rem] lg:right-[2%] xl:hidden sm:top-[2.2rem] right-[2rem]">
            {/* <FontAwesomeIcon className='text-[2rem]' onClick={() => setShowmenu(!showmenu)} icon={faBars} /> */}
            <FaBars className='text-[2rem] dark:text-white mt-4' onClick={() => setShowmenu(!showmenu)}/>
          </div>

          {showmenu && (
            <div className="absolute w-[9rem] right-[0.5rem] mt-[5.5rem] bg-white">
              <ul className="flex flex-col  ">
                <li className="mx-5 my-1 lg:hidden">Home</li>
                <li className="mx-5 my-1 lg:hidden">About Us</li>

                {/* {show ? <FontAwesomeIcon className='ml-1' icon={faCaretUp} /> : <FontAwesomeIcon className='ml-1' icon={faCaretDown} />} */}
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
                <li className="mx-5 my-1 lg:hidden "><Link to="/ContactUs">Contact</Link></li>
                <li className="mx-3 my-1">
                  {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
                  <button className="ml-2">Sign Up</button>
                </li>
                <li className="mx-3 my-1">
                  {/* <FontAwesomeIcon icon={faUser} /> */}
                  <button className="ml-2">Login</button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <LuMoonStar onClick={theme} className="text-[1.7rem] mr-9  cursor-pointer text-blue-700 mt-5"/>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react'
import img1 from '../../assets/img1.png';
import { FaBars, FaMagnifyingGlass, FaRegUser } from 'react-icons/fa6';
import CoursesList from "../CoursesList";
import { Link } from "react-router-dom";
import { CollegeCourse, School } from "../../Data";
import { RxCross2 } from 'react-icons/rx';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RiMenu3Line, RiSearch2Line } from 'react-icons/ri';

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);
  const [subCateDrop, setSubCateDrop] = useState(false)
  const [schoolCate, setSchoolCate] = useState(false)
  const [collegeCate, setCollegeCate] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [userDrop, setUserDrop] = useState(false)

  const darkTheme = () => {
    setIsDark(!isDark)
    theme()
  }


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
      <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-black">
        {/* Logo */}
        <Link to={'/'} className='w-28 h-14'>
          <img src={img1} className='w-full h-full' alt="logo" />
        </Link>


        {/* NavLinks */}
        <div className='hidden lg:flex items-center justify-between mt-4'>
          <Link to={'/'} className="mx-4">Home</Link>
          <Link to={'/about-us'} className="mx-4">About Us</Link>
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
              className="absolute top-[4.5rem] bg-white dark:bg-gray-700 dark:text-gray-200 border-black/20 border-[1px] rounded-b-3xl text-sm p-1 shadow-lg z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex left-1/2">
                {/* School Course */}
                {School.map((c, i) => {
                  return <div key={i} className="p-4">
                    <Link to={`${c.link}`} className="font-bold mb-2 px-2 text-base">{c.Cate}</Link>
                    <ul className="flex flex-col">

                      {c.subCate.map((sub, index) => {
                        return <Link key={index} to={`/course/${sub.id}`} className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200">
                          {sub.course}
                        </Link>
                      })}

                    </ul>

                  </div>
                })}
                {CollegeCourse.map((c, i) => {
                  return <div key={i} className="p-4">
                    <Link to={`${c.link}`} className="font-bold mb-2 px-2 text-base">{c.Cate}</Link>
                    <ul className="flex flex-col">

                      {c.subCate.map((sub, index) => {
                        return <Link key={index} to={`/course/${sub.id}`} className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200">
                          {sub.course}
                        </Link>
                      })}

                    </ul>
                  </div>
                })}
              </div>
            </div>
          )}

          <Link to={'/pap'} className="mx-4">PAP</Link>
          <Link to={'/itie'} className="mx-4">ITIE</Link>
          <Link to={'/blogs'} className="mx-4">Blog</Link>
          <Link to={'/contact'} className="mx-4">Contact</Link>
        </div >

        {/* Last */}
        <div className='flex items-center gap-4 text-black dark:text-white mt-2'>
          <div className='flex items-center gap-4'>
            <RiSearch2Line size={20} className='z-10' />
            <FaRegUser onClick={() => setUserDrop(!userDrop)} size={18} className='z-10 relative cursor-pointer' />

            {userDrop && (
              <div className="z-40 absolute top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-24 md:w-28 dark:bg-gray-700 dark:divide-gray-600">
                {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div> */}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Login
                  </li>
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign Up
                  </li>
                </ul>
                {/* <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> */}
              </div>
            )}
          </div>

          {/* <button className='px-6 py-2 border text-black bg-white z-10 rounded-full'>GCSP</button> */}
          <Link to={'/gcsp'} className="relative px-6 py-2 z-10 ml-2 overflow-hidden font-medium text-indigo-500 bg-gray-100 border border-gray-100 rounded-full hidden md:block shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indiborder-indigo-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indiborder-indigo-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-600 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">GCSP</span>
          </Link>

          <span onClick={darkTheme} className='text-[1.7rem] z-10 cursor-pointer hidden lg:block'>
            {isDark ? <BsMoonStars className='text-white' /> : <BsSun className='text-orange-500' />}
          </span>

          <span onClick={() => setShowmenu(!showmenu)} className='z-10 block lg:hidden'>
            <RiMenu3Line size={22} />
          </span>

          {showmenu && (
            <aside className="fixed lg:hidden top-0 right-0 z-40 w-80 h-screen transition-transform -translate-x-0">
              <div className="h-full px-3 py-4 overflow-y-auto bg-white border dark:text-white dark:bg-black">

                {/* <div className='flex items-center justify-around min-[200px]:gap-20 min-[425px]:gap-12 mb-4'>
                  <div className="opacity-0 flex gap-4 items-center">
                    <Link to={'/login'} className="border font-semibold px-4 py-1 border-blue-400 hover:bg-blue-400 hover:text-white hover:border-white rounded-lg text-blue-400">
                      Login
                    </Link>
                    <Link to={'/signup'} className="bg-blue-400 px-4 py-1 text-white font-semibold border border-white rounded-lg hover:text-blue-400 hover:bg-transparent hover:border-blue-400">
                      Sign Up
                    </Link>
                  </div>
                </div> */}
                <RxCross2 className='text-black ml-64' onClick={() => setShowmenu(!showmenu)} size={25} />

                <ul className="space-y-2 font-medium">
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/'} className="ms-3">Home</Link>
                  </li>

                  <li>
                    <button onClick={() => setSubCateDrop(!subCateDrop)} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Course</span>

                    </button>
                    {subCateDrop && (
                      <ul className="py-2 space-y-2">
                        <li onClick={() => setSchoolCate(!schoolCate)} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 relative">
                          School
                        </li>
                        {schoolCate && (
                          <div className="absolute top-56 md:top-24 right-4 md:right-80 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 w-96 h-64 md:h-fit overflow-auto dark:text-gray-700">
                            {School.map((c, i) => {
                              return <div key={i} className="p-4">
                                <Link onClick={() => { setShowmenu(!showmenu); setSubCateDrop(!subCateDrop) }} to={`${c.link}`} className="font-bold mb-2 px-2 text-base">{c.Cate}</Link>
                                <ul className="flex flex-col">

                                  {c.subCate.map((sub, index) => {
                                    return <Link onClick={() => { setShowmenu(!showmenu); setSubCateDrop(!subCateDrop); setSchoolCate(!schoolCate) }} key={index} to={`/course/${sub.id}`} className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200">
                                      {sub.course}
                                    </Link>
                                  })}

                                </ul>
                              </div>
                            })}
                          </div>
                        )}
                        <li onClick={() => setCollegeCate(!collegeCate)} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                          College
                        </li>
                        {collegeCate && (
                          <div className="absolute top-64 right-4 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 w-96 h-64 overflow-auto dark:text-gray-700">
                            {CollegeCourse.map((c, i) => {
                              return <div key={i} className="p-4">
                                <Link onClick={() => { setShowmenu(!showmenu); setSubCateDrop(!subCateDrop) }} to={`${c.link}`} className="font-bold mb-2 px-2 text-base">{c.Cate}</Link>
                                <ul className="flex flex-col">

                                  {c.subCate.map((sub, index) => {
                                    return <Link onClick={() => { setShowmenu(!showmenu); setSubCateDrop(!subCateDrop); setCollegeCate(!collegeCate) }} key={index} to={`/course/${sub.id}`} className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200">
                                      {sub.course}
                                    </Link>
                                  })}

                                </ul>
                              </div>
                            })}
                          </div>
                        )}
                      </ul>
                    )}
                  </li>

                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/about-us'} className="ms-3">About Us</Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/pap'} className="ms-3">PAP</Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/itie'} className="ms-3">ITIE</Link>
                  </li>
                  <li className="flex md:hidden items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/gcsp'} className="ms-3">GCSP</Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/blogs'} className="ms-3">Blogs</Link>
                  </li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Link to={'/contact'} className="ms-3">Contact</Link>
                  </li>

                </ul>

                <ul className="pt-4 mt-4 font-medium border-t border-gray-200 dark:border-gray-700">
                  <li className="flex items-center p-2 font-medium text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    Theme
                  </li>
                  <li onClick={darkTheme} className="flex items-center gap-2 p-2 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

                    <BsSun size={18} /> Light
                  </li>
                  <li onClick={darkTheme} className="flex items-center gap-2 p-2 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

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

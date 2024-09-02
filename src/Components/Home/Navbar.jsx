import React, { useState } from 'react'
import img1 from '../../assets/img1.png';
import { FaBars, FaMagnifyingGlass, FaRegUser } from 'react-icons/fa6';
import CoursesList from "../CoursesList";
import { Link } from "react-router-dom";
import { CollegeCourse, School } from "../../Data";
import { RxCross2 } from 'react-icons/rx';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);
  const [isDark, setIsDark] = useState(false)

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
      <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-black relative">
        {/* Logo */}
        <Link to={'/'} className='w-28 h-14'>
          <img src={img1} className='w-full h-full' alt="logo" />
        </Link>

        {/* NavLinks */}
        <div className='flex items-center justify-between mt-4'>
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
              className="absolute top-[4.5rem] bg-white border-black/20 border-[1px] rounded-b-3xl text-sm p-1 shadow-lg z-50 dark:text-gray-700"
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
          <Link to={'/about-us'} className="mx-4">Blog</Link>
          <Link to={'/contact'} className="mx-4">Contact</Link>
        </div >

        {/* Last */}
        <div className='flex items-center gap-8 text-white mt-2'>
          <div className='flex items-center gap-4'>
            <RiSearch2Line size={20} className='z-10' />
            <FaRegUser size={18} className='z-10' />
          </div>

          <button className='px-6 py-2 border text-black bg-white z-10 rounded-full'>GCSP</button>

          <div className='absolute top-0 right-0 w-80 h-0  border-l-[100px] border-l-transparent border-t-[5rem] border-t-indigo-500 border-r-[0rem] border-r-transparent'></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

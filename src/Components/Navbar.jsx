
import { faBars, faCaretDown, faCaretUp, faLock, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FaBars } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import img1 from '../images/img1.png'
const Navbar = () => {
  const [show,setShow] = useState(false) ;
  const [showmenu,setShowmenu] = useState(false)
  return (
    <>
    <div className='flex justify-around lg:py-2 lg:px-1 bg-white p-[1rem]'>

    <div><img className='h-[2.5rem] w-[8rem]' src={img1}/></div>


    <div className='hidden lg:block lg:mt-2'>
        <ul className='flex '>
            <li className='mx-3.5'>Home</li>
            <li className='mx-3.5'>About Us</li>


            <div className='flex flex-col'>
              <li className='mx-3.5 cursor-pointer flex' onClick={()=>setShow(!show)}>Courses {show?<IoMdArrowDropup className='ml-1 mt-1' icon={faCaretUp}/>:<IoMdArrowDropdown className='ml-1 mt-2' icon={faCaretDown}/>}</li>

              { show && <div className='absolute mt-8 bg-white text-sm p-1'>
              <ul>
                <li className='my-3 px-2'>Engineering</li>
                <li className='my-3 px-2'>Research</li>
                <li className='my-3 px-2'>Data Analytics</li>
                <li className='my-3 px-2'>AI</li>
              </ul>
              </div>}
                
            </div>


            <li className='mx-3.5'>Blog</li>
            <li className='mx-3.5'>Contact</li>
        </ul>
    </div>


    <div className='px-3 w-[20%] border-2 py-0.9 lg:pt-0.1 hidden lg:px-3 lg:w-[29%] xl:w-[22vw] lg:rounded-lg lg:border-gray-400 md:flex lg:justify-between  xl:flex sm:py-2 sm:flex sm:w-[50%] rounded-lg border-gray-400'>

      <input className='w-[14rem] lg:text-[1rem] outline:none xl:w-[16rem]  sm:text-[2.3vw] sm:w-[85%] mr-2 ' type="text" placeholder='Search for your favorite course'></input>

      <CiSearch  className='text-gray-400 lg:text-[2rem] xl:pl-2 xl:text-[2rem] text-xl pt-1 pl-2 md:text-[2rem] sm:text-[2rem] '/>

      </div>


    <div className='bg-orange-400 xl:px-[2rem] sm:mb-1 xl:w-[8%]  font-bold lg:block lg:p-1 lg:px-3 p-1 pl-3 xl:py-1 lg:mr-1 w-[9%] md:pt-2 lg:w-[7%]  mt-1.5  px-14 rounded-lg text-white'><button className='sm:pt-1 md:mb-1 lg:text-center md:mx-1.5'>GCEP</button></div>

    <div className='flex '>
        <div className='border-2 xl:flex hidden lg:hidden px-3 xl:pt-2 mr-[1rem] border-violet-700 rounded-lg mb-1 text-violet-700'><button className='pr-2 '>Login</button>
        <FaRegUser className='mt-2'/></div>
        <div className='bg-violet-700 hidden xl:block xl:pt-2 lg:hidden text-white font-semibold border-2 border-blue-700 mb-1 rounded-lg px-3 '><button>Sign Up</button></div>
    </div>
    
    <div>
    <div className="absolute lg:block top-[1.4rem] md:mt-2 lg:absolute lg:right-3 lg:top-2 xl:hidden sm:top-[1.4rem] right-[2rem]"><FaBars className='text-[2rem] ' onClick={()=>setShowmenu(!showmenu)} />
    </div>

    {
      showmenu && <div className='absolute w-[9rem] right-[0.5rem] mt-[5.5rem] bg-white'>
         <ul className='flex flex-col  '>
            <li className='mx-5 my-1 lg:hidden'>Home</li>
            <li className='mx-5 my-1 lg:hidden'>About Us</li>


            <div className='flex flex-col'>
              <li className='mx-5 cursor-pointer my-1 lg:hidden flex' onClick={()=>setShow(!show)}>Courses {show?<IoMdArrowDropup className='ml-1 mt-2' icon={faCaretUp}/>:<IoMdArrowDropdown className='ml-1 mt-2' icon={faCaretDown}/>}</li>

              { show && <div className='absolute mt-8 w-[9rem] bg-gray-200 text-sm p-1'>
              <ul>
                <li className='my-4 px-2'>Engineering</li>
                <li className='my-4 px-2'>Research</li>
                <li className='my-4 px-2'>Data Analytics</li>
                <li className='my-4 px-2'>AI</li>
              </ul>
              </div>}
                
            </div>


            <li className='mx-5 my-1 lg:hidden'>Blog</li>
            <li className='mx-5 my-1 lg:hidden'>Contact</li>
            <li className='mx-3 my-1 flex'><FaSignInAlt className='mt-1' /><button className='ml-2 '>Sign Up</button></li>
            <li className='mx-3 my-1 flex'><FaRegUser className='mt-1'/><button className='ml-2 '>Login</button></li>
        </ul>
        
        
      </div>
    }


    </div>
    </div>
   
    
    </>
  )
}

export default Navbar

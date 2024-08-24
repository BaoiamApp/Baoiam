
import { faBars, faCaretDown, faCaretUp, faLock, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import img1 from '../images/img1.png'
const Navbar = () => {
  const [show,setShow] = useState(false) ;
  const [showmenu,setShowmenu] = useState(false)
  return (
    <>
    <div className='flex justify-evenly bg-white p-[2rem]'>

    <div><img className='h-[2.5rem] w-[8rem]' src={img1}/></div>


    <div className='hidden lg:block'>
        <ul className='flex '>
            <li className='mx-4'>Home</li>
            <li className='mx-4'>About Us</li>


            <div className='flex flex-col'>
              <li className='mx-4 cursor-pointer' onClick={()=>setShow(!show)}>Courses {show?<FontAwesomeIcon className='ml-1' icon={faCaretUp}/>:<FontAwesomeIcon className='ml-1' icon={faCaretDown}/>}</li>

              { show && <div className='absolute mt-8 bg-white text-sm p-1'>
              <ul>
                <li className='my-3 px-2'>Engineering</li>
                <li className='my-3 px-2'>Research</li>
                <li className='my-3 px-2'>Data Analytics</li>
                <li className='my-3 px-2'>AI</li>
              </ul>
              </div>}
                
            </div>


            <li className='mx-4'>Blog</li>
            <li className='mx-4'>Contact</li>
        </ul>
    </div>


    <div className='px-3 w-[20%] border-2 py-0.9 lg:py-0.1 hidden lg:px-3 lg:w-[29%] xl:w-[22vw] lg:rounded-lg lg:border-gray-400 xl:flex sm:block sm:py-2 sm:w-[50%] rounded-lg border-gray-400'>

      <input className='w-[14rem] lg:text-[1rem] outline:none xl:w-[16rem]  sm:text-[2.3vw] sm:w-[85%] mr-2 ' type="text" placeholder='Search for your favorite course'></input>

      <FontAwesomeIcon className='text-gray-400 lg:text-lg xl:pl-2 xl:text-xl text-xl pt-1 pl-2' icon={faMagnifyingGlass}/>

      </div>


    <div className='bg-orange-400 xl:px-[2rem] xl:w-[8%]  font-bold lg:block lg:p-2 lg:px-4 p-1 pl-3  w-[9%]  px-14 rounded-lg text-white'><button>GCEP</button></div>

    <div className='flex '>
        <div className='border-2 hidden lg:hidden px-3 xl:pt-1.5 xl:block mr-[1rem] border-violet-700 rounded-lg text-violet-700'><button className='pr-2'>Login</button>
        <FontAwesomeIcon icon={faLock}/></div>
        <div className='bg-violet-700 hidden xl:block xl:pt-1.5 lg:hidden text-white font-semibold border-2 border-blue-700 rounded-lg px-3 '><button>Sign Up</button></div>
    </div>
    
    <div>
    <div className="absolute lg:block top-[2rem] xl:hidden sm:top-[2.2rem] right-[2rem]"><FontAwesomeIcon className='text-[2rem]' onClick={()=>setShowmenu(!showmenu)} icon={faBars}/>
    </div>

    {
      showmenu && <div className='absolute w-[9rem] right-[0.5rem] mt-[3rem] bg-white'>
         <ul className='flex flex-col  '>
            <li className='mx-5 my-1 lg:hidden'>Home</li>
            <li className='mx-5 my-1 lg:hidden'>About Us</li>


            <div className='flex flex-col'>
              <li className='mx-5 cursor-pointer my-1 lg:hidden' onClick={()=>setShow(!show)}>Courses {show?<FontAwesomeIcon className='ml-1' icon={faCaretUp}/>:<FontAwesomeIcon className='ml-1' icon={faCaretDown}/>}</li>

              { show && <div className='absolute mt-8 bg-gray-200 text-sm p-1'>
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
            <li className='mx-3 my-1'><FontAwesomeIcon icon={faRightToBracket}/><button className='ml-2'>Sign Up</button></li>
            <li className='mx-3 my-1'><FontAwesomeIcon icon={faUser}/><button className='ml-2'>Login</button></li>
        </ul>
        
        
      </div>
    }


    </div>
    </div>
   
    
    </>
  )
}

export default Navbar

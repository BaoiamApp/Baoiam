import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { CollegeCourse, OtherCourse, School } from "../../Data";


const MobNavbar = ({ showmenu, setShowmenu }) => {
    const mobTabtyles = `flex items-center p-2 text-base font-medium rounded-lg`;
    const [activeTab, setActiveTab] = useState('Home');
    const [subCateDrop, setSubCateDrop] = useState(false);
    const [schoolCate, setSchoolCate] = useState(false);
    const [collegeCate, setCollegeCate] = useState(false);

    const [schoolCourses, setSchoolCourses] = useState([]);

    useEffect(()=>{
    
    },[activeTab])

    const closeSideBar=()=>{
        setShowmenu(false)
    }

    return (
        <div>
            {showmenu && <div className="overlay fixed top-0 right-0 w-full h-full bg-black opacity-30 z-30 lg:hidden" onClick={closeSideBar}></div>}
            <aside className={`fixed lg:hidden top-0 left-0 z-40 w-80 h-screen transition-transform  ${showmenu ? 'translate-x-0' : '-translate-x-full'}  `}>
                <div className="h-full px-3 py-4 overflow-y-auto rounded-r-lg  bg-white border taxt-[#B1BBF5] dark:text-white dark:bg-black">
                    <RxCross2
                        className="text-black dark:text-white ml-64"
                        onClick={() => setShowmenu(old => !old)}
                        size={25}
                    />


                    <ul className="space-y-2 font-medium">
                        <li className={`${mobTabtyles} ${activeTab==='Home' ? 'text-[#1638C9]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("Home") }} >
                            <Link to={"/"}  className="ms-3">
                                Home
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setSubCateDrop(old=>!old)}
                                type="button"
                                className={style}
                            >
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Course
                                </span>
                                {subCateDrop?<FaChevronUp />:<FaChevronDown />}
                            </button>
                            {subCateDrop && (
                                <ul className="py-2 space-y-2">
                                    <li
                                        onClick={() => setSchoolCate(old=>!old)}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 relative"
                                    >
                                        School
                                    </li>
                                    {schoolCate && (
                                        <div className="absolute top-56 md:top-24 w-72 right-4 md:right-80 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 md:w-96 h-64 md:h-fit overflow-auto dark:text-gray-700">
                                            {School.map((c, i) => {
                                                return (
                                                    <div key={i} className="p-4">
                                                        <Link
                                                            onClick={() => {
                                                                setShowmenu(old=>!old)
                                                                setSubCateDrop(old=>!old)
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
                                                                            setShowmenu(old=>!old);
                                                                            setSubCateDrop(old=>!old);
                                                                            setSchoolCate(old=>!old);
                                                                        }}
                                                                        key={index}
                                                                        to={`/course/${sub.id}`}
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
                                    )}
                                    <li
                                        onClick={() => setCollegeCate(old=>!old)}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        College
                                    </li>
                                    {collegeCate && (
                                        <div className="absolute top-64 right-4 w-72 text-gray-600 bg-white border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 md:w-96 h-64 overflow-auto dark:text-gray-700">
                                            {CollegeCourse.map((c, i) => {
                                                return (
                                                    <div key={i} className="p-4">
                                                        <Link
                                                            onClick={() => {
                                                                setShowmenu(old=>!old);
                                                                setSubCateDrop(old=>!old);
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
                                                                            setShowmenu(old=>!old);
                                                                            setSubCateDrop(old=>!old);
                                                                            setCollegeCate(old=>!old);
                                                                        }}
                                                                        key={index}
                                                                        to={`/course/${sub.id}`}
                                                                        className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                                                                    >
                                                                        {sub.courseName}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </ul>
                            )}
                        </li>

                        <li className={`${mobTabtyles} ${activeTab==='About Us'?'text-[#1638C9]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("About Us") }}>
                            <Link to={"/about-us"} className="ms-3 text-nowrapx" >
                                About Us
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab==='PAP'?'text-[#1638C9]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("PAP") }}>
                            <Link to={"/pap"} className="ms-3" >
                                PAP
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab==='ITIE'?'text-[#1638C9]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("ITIE") }}>
                            <Link to={"/itie"} className="ms-3" >
                                ITIE
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab==='GCSP'?'text-[#1638C9] dark:bg-[#060606]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("GCSP") }}>
                            <Link to={"/gcsp"} className="ms-3" >
                                GCSP
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab==='Blogs'?'text-[#1638C9]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("Blogs") }}>
                            <Link to={"/blogs"} className="ms-3" >
                                Blogs
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab==='Contact'?'text-[#1638C9]':'text-[#B1BBF5]'}`} onClick={() => { setActiveTab("Contact") }}>
                            <Link to={"/contact"} className="ms-3" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <hr className=" border-gray-200 border-1 mx-auto w-11/12 dark:border-gray-700 my-4" />
                    {/* <div
                    onClick={darkTheme}
                    className="flex items-center gap-2 p-2 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    {isDark?<BsSun size={18} />:<BsMoonStars size={18} />} Theme
                  </div> */}
                </div>
            </aside>
        </div>
    )
}

export default MobNavbar
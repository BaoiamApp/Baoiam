import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { PiCertificateFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Certificate from './Certificate';
import Courses from './Courses';
import ProfilePage from './ProfilePage';


function SideBar() {
    const [isTabActive, setIsTabActive] = useState('myprofile');
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('name') || "";
        const email = localStorage.getItem('email') || "";
        const contact = localStorage.getItem('contact') || "";
        const birthday = localStorage.getItem('birthday') || "";
        const gender = localStorage.getItem('gender') || "";

        if (name === "" || email === "" || contact === "" || birthday === "") {
            setIsTabActive('myprofile');
        }
    }, []);

    const handleTabActiveState = (tab) => {
        setIsTabActive(tab);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/"); 
    }

    const renderContent = (tab) => {
        switch (tab) {
            case 'myprofile':
                return <ProfilePage />;
            case 'certificate':
                return <Certificate />;
            case 'coursecard':
                return <Courses />;
            default:
                return <ProfilePage />;
        }
    }

    return (
        <div className='flex px-8 text-xl lg:px-36'>
            <div className='flex flex-col items-center md:items-start mt-4 rounded-3xl md:pl-6 gap-6 md:gap-4 md:h-[28rem]'>
                <h2 className='hidden sm:flex font-semibold pt-4 md:text-[20px]'>My Account</h2>
                <div
                    onClick={() => handleTabActiveState("myprofile")}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === 'myprofile' ? 'bg-indigo-600 text-white' : 'border border-indigo-600'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><CgProfile /></div>
                    <h3 className='hidden md:flex'>My Profile</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("certificate")}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === 'Certificate' ? 'bg-indigo-600 text-white' : 'border border-indigo-600'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><PiCertificateFill /></div>
                    <h3 className='hidden md:flex'>Certificates</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("coursecard")}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === 'CoursesCard ' ? 'bg-indigo-600 text-white' : 'border border-indigo-600'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><SiGoogleclassroom /></div>
                    <h3 className='hidden md:flex'>Courses</h3>
                </div>
                <div
                    onClick={handleLogout}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === '/' ? 'bg-indigo-600 text-white' : 'border border-indigo-600'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><MdLogout /></div>
                    <h3 className='hidden md:flex'>Logout</h3>
                </div>
            </div>
            <div className='w-full h-full lg:pl-8'>
                {renderContent(isTabActive)}
            </div>
        </div>
    );
}

export default SideBar;
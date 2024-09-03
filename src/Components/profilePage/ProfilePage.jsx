import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import MyProfilePage from './GauravAndMahak/MyProfilePage';
import Wishlist from './Classes';
import MyOrder from './Jatin/myOrder';
import { PiCertificateFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

function ProfilePage() {
    const [isTabActive, setIsTabActive] = useState('myprofile');
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('name') || "";
        const email = localStorage.getItem('email') || "";
        const contact = localStorage.getItem('contact') || "";
        const birthday = localStorage.getItem('birthday') || "";
        const gender = localStorage.getItem('gender') || "";

        if (name === "" || email === "" || contact === "" || birthday === "" || gender === "") {
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
                return <MyProfilePage />;
            case 'wishlist':
                return <Wishlist />;
            case 'myorders':
                return <MyOrder />;
            default:
                return <MyProfilePage />;
        }
    }

    return (
        <div className='dark:bg-black dark:text-white gap-8 flex px-4 lg:px-44 justify-center'>
            <div className='flex flex-col items-center md:items-start mt-4 gap-3 md:w-56 w-16 md:h-[28rem]'>
                <h2 className='hidden sm:flex font-semibold items-center pt-4 md:text-[20px]'>My Account</h2>
                <div
                    onClick={() => handleTabActiveState("myprofile")}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === 'myprofile' ? 'bg-indigo-600 text-white' : 'border border-amber-500'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><CgProfile /></div>
                    <h3 className='hidden md:flex'>My Profile</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("wishlist")}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === 'wishlist' ? 'bg-indigo-600 text-white' : 'border border-amber-500'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><PiCertificateFill /></div>
                    <h3 className='hidden md:flex'>Certificates</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("myorders")}
                    className={`flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer ${isTabActive === 'myorders' ? 'bg-indigo-600 text-white' : 'border border-amber-500'}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><SiGoogleclassroom /></div>
                    <h3 className='hidden md:flex'>Classes</h3>
                </div>
                <div
                    onClick={handleLogout}
                    className='flex items-start md:items-center w-full rounded-lg md:gap-3 hover:bg-indigo-500 hover:text-white p-2 cursor-pointer border border-amber-500'>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><MdLogout /></div>
                    <h3 className='hidden md:flex'>Logout</h3>
                </div>
            </div>
            <div className='w-[80%]'>
                {renderContent(isTabActive)}
            </div>
        </div>
    );
}

export default ProfilePage;

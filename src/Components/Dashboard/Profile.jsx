import React, { useEffect, useState } from 'react';
import Modal from '../Dashboard/Modal';
import { FiCalendar, FiEdit, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaUniversity } from 'react-icons/fa';
import HeroDp from '../../assets/Images/dp.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaX, FaXTwitter } from 'react-icons/fa6';
import Recommendations from './Recommendations';

function Profile({userInfo}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [errors, setErrors] = useState({});

  const handleChangeProfile=()=>{
    console.log("Change DP");
    
  }


  return (
    <div className="relative bg-slate-100 p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 xl:py-4">
        <div className="profile-pic">
          <div className='relative  aspect-square mx-auto  md:w-40 md:h-40 w-20 h-20'>
          <img
            src={HeroDp || "https://via.placeholder.com/150"}
            alt="Profilephoto"
            className="object-cover rounded-full mx-auto"
          />
          <button
            onClick={handleChangeProfile}
            className="absolute bottom-2 right-2 text-gray-500 rounded-full p-1 bg-white hover:text-gray-800"
          >
            <FiEdit size={16} />
          </button>
          </div>
          <div className="flex items-center gap-2 my-4 justify-center socials">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div className="info">
          <div className="flex flex-col mt-6 lg:mt-0 space-y-4">
            <p className='uppercase font-bold text-lg'>{userInfo.name || 'John Doe'}</p>

            <div className="flex items-center">
              <FiMail className="mr-2" />
              <p>{userInfo.email}</p>
            </div>
            <div className="flex items-center">
              <FaUniversity className="mr-2" />
              <p>{userInfo.college}</p>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <p>{userInfo.mobile}</p>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <p>{userInfo.dob}</p>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-2" />
              <p>{userInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

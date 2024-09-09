import React, { useEffect, useState } from 'react';
import Modal from '../Dashboard/Modal';
import { FiCalendar, FiEdit, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaUniversity } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import Recommendations from './Recommendations';
import HeroDp from '../../assets/Images/dp.jpg'
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from 'react-router-dom';


function Profile({userInfo}) {
  const [profileImage, setProfileImage] = useState(HeroDp || "https://via.placeholder.com/150");
  const navigate=useNavigate();
  // Load profile image from local storage
  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  // Handle profile image change
  const handleChangeProfile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        // Save the image in localStorage
        localStorage.setItem('profileImage', base64String);
        // Update the state to reflect the new image
        setProfileImage(base64String);
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 string
    }
  };

  return (
    <div className="relative bg-slate-100 dark:bg-black dark:text-white dark:border dark:border-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 xl:py-4">
        <div className="profile-pic">
          <div className="relative flex bg-gray-300 rounded-full items-center justify-center aspect-square mx-auto md:w-40 md:h-40 w-20 h-20">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover rounded-full mx-auto"
            />
            <label htmlFor="profileImageInput">
              <FiEdit
                className="absolute bottom-2 text-xl md:text-3xl right-2 text-gray-500 rounded-full p-1 bg-white hover:text-gray-800 cursor-pointer"
              />
            </label>
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChangeProfile}
            />
          </div>
          <div className="flex items-center gap-2 my-4 justify-center socials">
            <FaLinkedin onClick={()=>{navigate(`${userInfo.socialLinks.linkedIn}`)}}/>
            <FaGithub onClick={()=>{navigate(userInfo.socialLinks.gitHub)}}/>
            <SiLeetcode onClick={()=>{navigate(userInfo.socialLinks.leetCode)}}/>
          </div>
        </div>
        <div className="info">
          <div className="flex flex-col mt-6 lg:mt-0 space-y-4">
            <p className="uppercase font-bold text-lg">{userInfo.name || 'John Doe'}</p>

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

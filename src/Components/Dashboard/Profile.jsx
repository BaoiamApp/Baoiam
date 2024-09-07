import React, { useState } from 'react';
import Modal from './Modal';
import { FiCalendar, FiEdit, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaUniversity } from 'react-icons/fa';
import HeroDp from '../../assets/Images/dp.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaX, FaXTwitter } from 'react-icons/fa6';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-white p-4 rounded-lg  shadow-md">
      <button
        onClick={handleEditProfile}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <FiEdit size={20} />
      </button>
      <h2 className="text-xl font-bold mb-4">Profile Management</h2>

      <div className="flex flex-col lg:flex-row  items-center gap-4">
        <div className="profile-pic">
          <img
            src={HeroDp || "https://via.placeholder.com/150"}
            alt="Profilephoto"
            className="w-40 h-40 rounded-full mx-auto"
          />
          <div className="flex items-center gap-2 my-4 justify-center socials">
            <FaFacebook/>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaXTwitter/>
          </div>
        </div>
        <div className="info">
          <div className="flex flex-col mt-6 lg:mt-0 space-y-4">
            <p className='uppercase font-bold text-lg'>John Doe</p>

            <div className="flex items-center">
              <FiMail className="mr-2" />
              <p>{'Email not provided'}</p>
            </div>
            <div className="flex items-center">
              <FaUniversity className="mr-2" />
              <p>{'College not provided'}</p>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <p>{'Mobile not provided'}</p>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <p>{'Date of Birth not provided'}</p>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-2" />
              <p>{'Location not provided'}</p>
            </div>
          </div>
        </div>
      </div>


      {/* <button 
        className="mt-4 bg-blue-600 text-white p-2 rounded-md"
        onClick={handleEditProfile}
      >
        Edit Profile
      </button> */}

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full py-1 px-3 border rounded-md"
                  defaultValue="John Doe"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full py-1 px-3 border rounded-md"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Phone Number</label>
                <input
                  type="number"
                  className="w-full py-1 px-3 border rounded-md"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">College</label>
                <input
                  type="college"
                  className="w-full py-1 px-3 border rounded-md"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">DOB</label>
                <input
                  type="date" 
                  className="w-full py-1 px-3 border rounded-md"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-1 rounded-md"
                  onClick={handleCloseModal}
                >
                  Save Info
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Profile;

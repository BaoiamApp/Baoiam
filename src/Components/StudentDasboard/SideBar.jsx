import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaTrophy, FaCog, FaSignOutAlt } from 'react-icons/fa';
import ProfilePage from './ProfilePage';
import Certificate from './Certificate'; // Import the Certificate component
import Courses from './Courses'; // Import the Courses component
import ProfileManage from './ProfileManage';
import { MdAccountCircle } from 'react-icons/md';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Default active tab

  // Function to determine class names for the tabs based on active state
  const tabClassNames = (tab) =>
    activeTab === tab
      ? 'bg-white text-black 3xl p-4 rounded-l-full flex gap-2 text-sm lg:text-lg items-center cursor-pointer relative'
      : 'p-4 rounded-l-full flex gap-2 text-sm lg:text-lg items-center cursor-pointer text-white relative';

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfilePage />;
      case 'courses':
        return <Courses />;
      case 'achievements':
        return <Certificate />;
      case 'management':
        return <ProfileManage />; // Replace with the actual Profile Management component
      default:
        return <ProfilePage />;
    }
  };
  const ActiveTabColor=(tab)=>{
    return activeTab===tab?'text-gray-900 text-lg':' text-lg';
  }

  return (
    <div className="flex pt-8">
      {/* Sidebar */}
      <div className="bg-indigo-600 pl-[4%] text-white flex  flex-col rounded-tr-3xl">
        {/* Dashboard Heading */}   <h2 className="xl:text-3xl md:text-lg text-base font-bold mt-5 lg:mr-[0.2rem] mb-8 hidden md:inline-block">My Account</h2>

        {/* Sidebar Tabs */}
        <ul className="my-8 md:my-2">
          {/* My Profile Tab */}
          <li onClick={() => setActiveTab('profile')} className={`${tabClassNames('profile')}`}>
            <FaUser className={ActiveTabColor("profile")}  />
            <span className=" hidden md:inline-block">My Profile</span>
          </li>

          {/* All Courses Tab */}
          <li onClick={() => setActiveTab('courses')} className={tabClassNames('courses')}>
            <FaGraduationCap className={ActiveTabColor("courses")}  />
            <span className=" hidden md:inline-block">My Courses</span>
          </li>

          {/* Achievements Tab */}
          <li onClick={() => setActiveTab('achievements')} className={tabClassNames('achievements')}>
            <FaTrophy className={ActiveTabColor("achievements")}  />
            <span className=" hidden md:inline-block">Achievements</span>
          </li>

          {/* Profile Management Tab */}
          <li onClick={() => setActiveTab('management')} className={tabClassNames('management')}>
            <FaCog className={ActiveTabColor("management")}  />
            <span className=" hidden md:inline-block">Manage</span>
          </li>

          {/* Logout Tab */}
          <li onClick={() => setActiveTab('logout')} className={tabClassNames('logout')}>
            <FaSignOutAlt className={ActiveTabColor("logout")}  />
            <span className=" hidden md:inline-block">Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-full p-6 bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;

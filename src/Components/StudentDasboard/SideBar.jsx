import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaTrophy, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Profile from './Profile';
import Certificate from './Certificate'; // Import the Certificate component
import Courses from './Courses'; // Import the Courses component
import ProfileManage from './ProfileManage';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Default active tab

  // Function to determine class names for the tabs based on active state
  const tabClassNames = (tab) =>
    activeTab === tab
      ? 'bg-white text-black p-4 rounded-l-full flex items-center cursor-pointer relative'
      : 'hover:bg-white hover:text-black p-4 rounded-l-full flex items-center cursor-pointer text-white relative';

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'courses':
        return <Courses />;
      case 'achievements':
        return <Certificate />;
      case 'management':
        return <ProfileManage />; // Replace with the actual Profile Management component
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-indigo-900 shadow-inner md: lg:w-[20%] pl-4 lg:pl-10 text-white flex flex-col lg:rounded-tr-3xl">
        {/* Dashboard Heading for Large Screens */}
        <h2 className="text-3xl font-bold mt-5 mb-8 hidden lg:block">My Account</h2>
        {/* Dashboard Heading for Small Screens */}
        <h2 className="text-2xl font-bold mt-5 mb-8 block lg:hidden text-center">Account</h2>

        {/* Sidebar Tabs */}
        <ul className="space-y-4 lg:space-y-6 text-center lg:text-left">
          {/* My Profile Tab */}
          <li onClick={() => setActiveTab('profile')} className={tabClassNames('profile')}>
            <FaUser className="mr-3" />
            <span className="text-lg hidden lg:block">My Profile</span> {/* Text hidden on small screens */}
          </li>

          {/* All Courses Tab */}
          <li onClick={() => setActiveTab('courses')} className={tabClassNames('courses')}>
            <FaGraduationCap className="mr-3" />
            <span className="text-lg hidden lg:block">All Courses</span> {/* Text hidden on small screens */}
          </li>

          {/* Achievements Tab */}
          <li onClick={() => setActiveTab('achievements')} className={tabClassNames('achievements')}>
            <FaTrophy className="mr-3" />
            <span className="text-lg hidden lg:block">Achievements</span> {/* Text hidden on small screens */}
          </li>

          {/* Profile Management Tab */}
          <li onClick={() => setActiveTab('management')} className={tabClassNames('management')}>
            <FaCog className="mr-3" />
            <span className="text-lg hidden lg:block">Profile Management</span> {/* Text hidden on small screens */}
          </li>

          {/* Logout Tab */}
          <li onClick={() => setActiveTab('logout')} className={tabClassNames('logout')}>
            <FaSignOutAlt className="mr-3" />
            <span className="text-lg hidden lg:block">Logout</span> {/* Text hidden on small screens */}
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-[80%] p-4 lg:p-6 bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;

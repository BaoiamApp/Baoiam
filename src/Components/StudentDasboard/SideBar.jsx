import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaTrophy, FaCog, FaSignOutAlt } from 'react-icons/fa';
import ProfilePage from './ProfilePage';
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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-indigo-800 w-[20%] pl-10 text-white flex flex-col rounded-tr-3xl">
        {/* Dashboard Heading */}
        <h2 className="text-3xl font-bold mt-5 mb-8">My Account</h2>

        {/* Sidebar Tabs */}
        <ul className="space-y-6">
          {/* My Profile Tab */}
          <li onClick={() => setActiveTab('profile')} className={`${tabClassNames('profile')}`}>
            <FaUser className="mr-3" />
            <span className="text-lg">My Profile</span>
          </li>

          {/* All Courses Tab */}
          <li onClick={() => setActiveTab('courses')} className={tabClassNames('courses')}>
            <FaGraduationCap className="mr-3" />
            <span className="text-lg">All Courses</span>
          </li>

          {/* Achievements Tab */}
          <li onClick={() => setActiveTab('achievements')} className={tabClassNames('achievements')}>
            <FaTrophy className="mr-3" />
            <span className="text-lg">Achievements</span>
          </li>

          {/* Profile Management Tab */}
          <li onClick={() => setActiveTab('management')} className={tabClassNames('management')}>
            <FaCog className="mr-3" />
            <span className="text-lg">Profile Management</span>
          </li>

          {/* Logout Tab */}
          <li onClick={() => setActiveTab('logout')} className={tabClassNames('logout')}>
            <FaSignOutAlt className="mr-3 " />
            <span className="text-lg">Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-[80%] p-6 bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;

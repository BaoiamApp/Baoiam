import React, { useState } from 'react';
import { FaUser, FaBook, FaChartLine, FaClipboard, FaPlus, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import MyProfile from './MyProfile';
import MyCourses from './MyCourses';
import StudentProgress from './StudentProgress';
import Assignments from './Assignment';
import CreateCourse from './CreateCourse';
import ProfileManage from './ProfileManage';


const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('My Profile');
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: 'My Profile', icon: <FaUser /> },
    { name: 'My Courses', icon: <FaBook /> },
    { name: 'Student Progress', icon: <FaChartLine /> },
    { name: 'Assignments', icon: <FaClipboard /> },
    { name: 'Create Course', icon: <FaPlus /> },
    { name: 'Profile Manage', icon: <FaCog /> },
    { name: 'Logout', icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`lg:w-1/4 w-full lg:block ${isOpen ? 'block' : 'hidden'} text-white bg-indigo-700 p-6 fixed lg:static h-full`}>
        <div className="flex items-center justify-between lg:justify-start mb-6">
          <h1 className="text-2xl font-bold">My Account</h1>
          <FaBars className="lg:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)} />
        </div>
        <ul>
          {tabs.map((tab, idx) => (
            <li key={idx} onClick={() => setActiveTab(tab.name)} className={`flex items-center p-4 mb-2 cursor-pointer ${activeTab === tab.name ? 'bg-indigo-900' : 'hover:bg-indigo-800'}`}>
              {tab.icon} <span className="ml-4">{tab.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="lg:ml-1/4 ml-0 w-full p-6">
        <button className="lg:hidden mb-6 text-black" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-2xl" />
        </button>
        <div>
          {activeTab === 'My Profile' && <MyProfile />}
          {activeTab === 'My Courses' && <MyCourses />}
          {activeTab === 'Student Progress' && <StudentProgress />}
          {activeTab === 'Assignments' && <Assignments />}
          {activeTab === 'Create Course' && <CreateCourse />}
          {activeTab === 'Profile Manage' && <ProfileManage />}
          {activeTab === 'Logout' && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;



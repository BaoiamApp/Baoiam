import React, { useState } from 'react';

const ProfileManage = () => {
  const [editSection, setEditSection] = useState({
    personalInfo: false,
    socialLinks: false,
    email: false,
    password: false,
  });

  const handleEditToggle = (section) => {
    setEditSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-100 mb-12">
      <form className="space-y-8">
        {/* Personal Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('personalInfo')}
            className="absolute top-6 right-6 bg-indigo-500 text-white py-1 px-3 rounded hover:bg-indigo-600"
          >
            {editSection.personalInfo ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">First Name</label>
              )}
              <input
                type="text"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="First Name"
                disabled={!editSection.personalInfo}
              />
            </div>
            {/* Middle Name */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">Middle Name</label>
              )}
              <input
                type="text"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Middle Name"
                disabled={!editSection.personalInfo}
              />
            </div>
            {/* Last Name */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">Last Name</label>
              )}
              <input
                type="text"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Last Name"
                disabled={!editSection.personalInfo}
              />
            </div>
            {/* Mobile Number */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">Mobile Number</label>
              )}
              <input
                type="tel"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Mobile Number"
                disabled={!editSection.personalInfo}
              />
            </div>
            {/* Date of Birth */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">Date of Birth</label>
              )}
              <input
                type="date"
                className={`mt-1 block px-2 py-2 w-full border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                disabled={!editSection.personalInfo}
              />
            </div>
            {/* College/School */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">College/School</label>
              )}
              <input
                type="text"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="College or School Name"
                disabled={!editSection.personalInfo}
              />
            </div>
            {/* Location */}
            <div>
              {editSection.personalInfo && (
                <label className="block text-gray-700">Location</label>
              )}
              <input
                type="text"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.personalInfo ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Location"
                disabled={!editSection.personalInfo}
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('socialLinks')}
            className="absolute top-6 right-6 bg-indigo-500 text-white py-1 px-3 rounded hover:bg-indigo-600"
          >
            {editSection.socialLinks ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* LinkedIn */}
            <div>
              {editSection.socialLinks && (
                <label className="block text-gray-700">LinkedIn</label>
              )}
              <input
                type="url"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.socialLinks ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="LinkedIn Profile URL"
                disabled={!editSection.socialLinks}
              />
            </div>
            {/* GitHub */}
            <div>
              {editSection.socialLinks && (
                <label className="block text-gray-700">GitHub</label>
              )}
              <input
                type="url"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.socialLinks ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="GitHub Profile URL"
                disabled={!editSection.socialLinks}
              />
            </div>
            {/* LeetCode */}
            <div>
              {editSection.socialLinks && (
                <label className="block text-gray-700">LeetCode</label>
              )}
              <input
                type="url"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.socialLinks ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="LeetCode Profile URL"
                disabled={!editSection.socialLinks}
              />
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Email</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('email')}
            className="absolute top-6 right-6 bg-indigo-500 text-white py-1 px-3 rounded hover:bg-indigo-600"
          >
            {editSection.email ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Email */}
            <div className="col-span-1 sm:col-span-2">
              {editSection.email && (
                <label className="block text-gray-700">Current Email</label>
              )}
              <input
                type="email"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.email ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Current Email Address"
                disabled={!editSection.email}
              />
            </div>
            {/* New Email */}
            <div>
              {editSection.email && (
                <label className="block text-gray-700">New Email</label>
              )}
              <input
                type="email"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.email ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="New Email Address"
                disabled={!editSection.email}
              />
            </div>
            {/* Confirm New Email */}
            <div>
              {editSection.email && (
                <label className="block text-gray-700">Confirm New Email</label>
              )}
              <input
                type="email"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.email ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Confirm New Email"
                disabled={!editSection.email}
              />
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <h3 className="text-xl font-bold mb-4">Password</h3>
          <button
            type="button"
            onClick={() => handleEditToggle('password')}
            className="absolute top-6 right-6 bg-indigo-500 text-white py-1 px-3 rounded hover:bg-indigo-600"
          >
            {editSection.password ? 'Save' : 'Edit'}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Password */}
            <div>
              {editSection.password && (
                <label className="block text-gray-700">Current Password</label>
              )}
              <input
                type="password"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.password ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Current Password"
                disabled={!editSection.password}
              />
            </div>
            {/* New Password */}
            <div>
              {editSection.password && (
                <label className="block text-gray-700">New Password</label>
              )}
              <input
                type="password"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.password ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="New Password"
                disabled={!editSection.password}
              />
            </div>
            {/* Confirm New Password */}
            <div>
              {editSection.password && (
                <label className="block text-gray-700">Confirm New Password</label>
              )}
              <input
                type="password"
                className={`mt-1 block w-full px-2 py-2 border-gray-300 rounded-md shadow-sm ${editSection.password ? '' : 'bg-transparent cursor-not-allowed'}`}
                placeholder="Confirm New Password"
                disabled={!editSection.password}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileManage;

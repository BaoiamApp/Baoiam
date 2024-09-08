import React from 'react';
import { FaLock, FaCreditCard, FaEnvelope } from 'react-icons/fa';

const ProfileManage = () => {
  return (
    <section className="p-6 bg-gray-100 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Change Password */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-6 text-center">
          <FaLock className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Change Password</h3>
          <p className="text-gray-600">Update your password for security reasons.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Change Password
          </button>
        </div>

        {/* Change Payment Method */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-6 text-center">
          <FaCreditCard className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Change Payment Method</h3>
          <p className="text-gray-600">Update your saved payment methods here.</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Change Payment Method
          </button>
        </div>

        {/* Change Email */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-6 text-center">
          <FaEnvelope className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Change Email</h3>
          <p className="text-gray-600">Update your email address for account notifications.</p>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Change Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileManage;

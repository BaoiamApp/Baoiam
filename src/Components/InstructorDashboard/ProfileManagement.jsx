import React from 'react';

const ProfileManagement = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Profile Management</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full border rounded-md shadow-sm" defaultValue="Monica Howard" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full border rounded-md shadow-sm" defaultValue="monica@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Qualifications</label>
          <textarea className="mt-1 block w-full border rounded-md shadow-sm" rows={3} defaultValue="M.Sc. in Mathematics, 5 years teaching experience"></textarea>
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileManagement;
import React from 'react';

function Profile() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Profile Management</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <button className="mt-4 bg-blue-600 text-white p-2 rounded-md">Edit Profile</button>
    </div>
  );
}

export default Profile;

import React, { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';

const ProfileCard = ({name,profileImage,editUserInfo, onEdit }) => {
  return (
    <div className="lg:w-96 relative bg-gradient-to-tr from-slate-300/50 backdrop-filter backdrop-blur-3xl bg-opacity-500 drop-shadow-2xl border-white/20 p-4 rounded-lg shadow-md text-center dark:border dark:border-gray-200">
      <img
        src={profileImage || "https://via.placeholder.com/150"}
        alt="Profilephoto"
        className="w-40 h-40 rounded-full mx-auto"
      />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <button
        onClick={onEdit}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <FiEdit size={20} />
      </button>
    </div>
  );
};

export default ProfileCard;

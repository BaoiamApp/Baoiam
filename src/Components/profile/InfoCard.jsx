import React from 'react';
import { FiEdit, FiMail, FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaUniversity } from 'react-icons/fa';

const InfoCard = ({ email, college, mobile, dob, location, onEdit }) => {
  return (
    <div className="bg-gradient-to-tr from-slate-300/50 backdrop-filter backdrop-blur-3xl bg-opacity-500 drop-shadow-2xl  border-white/20 p-4 rounded-lg shadow-md dark:border dark:border-gray-200">
      <div className="flex flex-col mt-6 lg:mt-0 space-y-4">
        <div className="flex items-center">
          <FiMail className="mr-2" />
          <p className='text-wrap overflow-hidden'>{email}</p>
        </div>
        <div className="flex items-center">
          <FaUniversity className="mr-2" />
          <p>{college}</p>
        </div>
        <div className="flex items-center">
          <FiPhone className="mr-2" />
          <p>{mobile}</p>
        </div>
        <div className="flex items-center">
          <FiCalendar className="mr-2" />
          <p>{dob}</p>
        </div>
        <div className="flex items-center">
          <FiMapPin className="mr-2" />
          <p>{location}</p>
        </div>
      </div>
      <button
        onClick={onEdit}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <FiEdit size={20} />
      </button>
    </div>
  );
};

export default InfoCard;

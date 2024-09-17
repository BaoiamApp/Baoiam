import React from 'react';
import { FaUsers, FaBuilding, FaChalkboardTeacher } from 'react-icons/fa';

// Component for individual milestone card
const MilestoneCard = ({ icon: Icon, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200">
    <div className="bg-indigo-500 text-white rounded-full p-4 mb-4">
      <Icon className="text-3xl" />
    </div>
    <p className="text-lg font-medium text-gray-800">{description}</p>
  </div>
);

const Timeline = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Journey</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Founded in 2020, BAOIAM emerged from a bold vision to connect traditional education with real-world skills. Our founders, fueled by a deep passion for learning and a commitment to accessibility, set out to create a platform that empowers individuals to steer their own career journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <MilestoneCard
            icon={FaUsers}
            description="Over 50,000 students enrolled worldwide."
          />
          <MilestoneCard
            icon={FaBuilding}
            description="Collaborations with leading companies."
          />
          <MilestoneCard
            icon={FaChalkboardTeacher}
            description="100+ industry experts as mentors."
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;

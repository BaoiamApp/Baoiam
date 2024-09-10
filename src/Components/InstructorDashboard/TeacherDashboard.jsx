import React from 'react';
import Calendar from './Calendar';
import MyCourses from './MyCourses';
import StudentProgress from './StudentProgress';
import CreateCourse from './CreateCourse';
import GradingAndFeedback from './GradingAndFeedback';
import ProfileManagement from './ProfileManagement';

const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MyCourses />
        <StudentProgress />
        <CreateCourse />
        <GradingAndFeedback />
        <ProfileManagement />
        <Calendar />
      </div>
    </div>
  );
};

export default TeacherDashboard;
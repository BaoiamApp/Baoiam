import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CoursesMain = () => {
  const courses = [
    { name: 'Course 1', progress: 50 },
    { name: 'Course 2', progress: 100 },
    { name: 'Course 3', progress: 10 }
  ];

  return (
    <div className="max-w-4xl bg-slate-100 mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Courses</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white w-full shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{course.name}</h3>
            
            {/* Progress Bar */}
            <div className="h-4 bg-gray-200 rounded-full mb-4">
              <div 
                className={`h-full rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm font-medium text-gray-600">Progress: {course.progress}%</p>
          </div>
        ))}
      </div>

      {/* Link to All Courses */}
      <div className="mt-8 text-center">
        <Link to="/courses" className="text-blue-500 hover:underline">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesMain;

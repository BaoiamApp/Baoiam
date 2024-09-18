import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CoursesMain = () => {
  const courses = [
    { name: 'Course 1', progress: 50, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
    { name: 'Course 2', progress: 100, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
    { name: 'Course 3', progress: 10, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' }
  ];

  return (
    <div className="w-full backdrop-filter bg-indigo-500 shadow-border backdrop-blur-lg dark:text-white dark:border dark:border-white h-fit mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-bold mb-5 text-center">Courses</h2>
      
      <div className="flex flex-col max-h-full gap-6">
        {courses.map((course, index) => (
          <div key={index} className=" w-full flex text-black flex-col bg-white dark:border dark:border-white lg:flex-row items-center gap-4 shadow-lg rounded-3xl py-3 px-4">
            
            {/* Course Image */}
            <img 
              src={course.image} 
              alt={course.name} 
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Course Info */}
            <div className="flex flex-col w-full">
              <h3 className="text-lg font-semibold">{course.name}</h3>

              {/* Progress Bar */}
              <div className="h-4 bg-black rounded-full mt-1">
                <div 
                  className={`h-full rounded-e-3xl ${course.progress === 100 ? 'bg-gradient-to-r from-green-800 to-green-500' : 'bg-gradient-to-r from-indigo-800 to-indigo-500'}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-4 font-medium">Progress: {course.progress}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Link to All Courses */}
      <div className="mt-8 text-center">
        <Link to="/courses" className="text-white hover:underline">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesMain;


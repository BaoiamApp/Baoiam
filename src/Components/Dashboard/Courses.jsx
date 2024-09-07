import React from 'react';

function Courses() {
  const courses = [
    { id: 1, name: 'JavaScript Basics', progress: 75 },
    { id: 2, name: 'React Essentials', progress: 50 },
    { id: 3, name: 'Tailwind CSS Mastery', progress: 90 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">My Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{course.name}</span>
              <span className="text-gray-600">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;

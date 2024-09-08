import React from 'react';

function Recommendations() {
  const recommendedCourses = [
    { id: 1, name: 'Advanced React Patterns' },
    { id: 2, name: 'Fullstack Web Development' },
  ];

  return (
    <div className="bg-indigo-800 text-white p-4 mt-8 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
      <ul>
        {recommendedCourses.map((course) => (
          <li key={course.id} className="mb-2">
            <button className="text-white hover:underline">
              {course.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;

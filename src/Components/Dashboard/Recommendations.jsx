import React from 'react';

function Recommendations() {
  const recommendedCourses = [
    { id: 1, name: 'Advanced React Patterns' },
    { id: 2, name: 'Fullstack Web Development' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
      <ul>
        {recommendedCourses.map((course) => (
          <li key={course.id} className="mb-2">
            <button className="text-blue-600 hover:underline">
              {course.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;

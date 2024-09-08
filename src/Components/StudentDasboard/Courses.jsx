import React from 'react';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  { id: 2, title: 'Advanced Node.js', description: 'Deep dive into Node.js.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  { id: 3, title: 'Full-Stack Development', description: 'Become a full-stack developer.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  { id: 4, title: 'Python Programming', description: 'Master Python from scratch.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  { id: 5, title: 'Database Design', description: 'Learn how to design efficient databases.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  { id: 6, title: 'UI/UX Design Principles', description: 'Design beautiful and usable interfaces.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
];

const Courses = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

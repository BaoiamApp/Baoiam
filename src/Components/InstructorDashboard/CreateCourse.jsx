import React from 'react';

const CreateCourse = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Create Course</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Course Description"
          className="w-full p-2 border rounded"
          rows={3}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { FadeLoader } from "react-spinners";
import { addCourse } from "../../redux/course/courseSlice";
const apiUrl = import.meta.env.VITE_API_URL;

const CoursesMain = () => {
  const [courses, setCourses] = useState([]);
  const courseData = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const extractDate = (date) => {
    const validDate = new Date(date);
    const year = validDate.getFullYear();
    const month = String(validDate.getMonth() + 1).padStart(2, "0");
    const day = String(validDate.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  };

  const fetchCourses = async () => {
    try {
      const url = `${apiUrl}/api/enroll`;
      const { data } = await axios.post(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log("all courses:", data);
      setCourses(data);
      console.log("IS COURSES FETCHED:", courseData.isFetched);
      dispatch(addCourse(data));
    } catch (err) {
      console.log(err.stack);
    }
  };
  useEffect(() => {
    if (!courseData.isFetched) fetchCourses();
    return () => {};
  }, [courseData.isFetched]);

  // const courses = [
  //   { name: 'Course 1', progress: 50, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  //   { name: 'Course 2', progress: 100, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
  //   { name: 'Course 3', progress: 10, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' }
  // ];

  return courseData.data.length > 0 ? (
    <div className="w-full backdrop-filter bg-indigo-500 shadow-border backdrop-blur-lg dark:text-white dark:border dark:border-white h-fit mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-bold mb-5 text-center">
        Courses
      </h2>

      <div className="flex flex-col max-h-full gap-6">
        {courseData.data.map((course, index) => (
          <div
            key={index}
            className=" w-full flex text-black flex-col bg-white dark:border dark:border-white lg:flex-row items-center gap-4 shadow-lg rounded-3xl py-3 px-4"
          >
            {/* Course Image */}
            {/* <img
              src={course.image}
              alt={course.course_title}
              className="w-16 h-16 rounded-full object-cover"
            /> */}
            <FaBook size={20} />

            {/* Course Info */}
            <div className="flex flex-col w-full">
              <h3 className="text-lg font-semibold">{course.course_title}</h3>
              <div className="flex items-center">
                <p
                  className={`px-2 py-1 w-fit mt-2 rounded ${
                    course.plan_type == "plus" ? "bg-gray-300" : "bg-yellow-200"
                  }`}
                >
                  {course.plan_type}
                </p>
                <p className="ml-5 py-1 px-2 mt-2 text-gray-400 font-semibold">
                  Enrolled on: {extractDate(course.created_at)}
                </p>
              </div>
              {/* Progress Bar */}
              {/* <div className="h-4 bg-black rounded-full mt-1">
                <div
                  className={`h-full rounded-e-3xl ${
                    course.progress === 100
                      ? "bg-gradient-to-r from-green-800 to-green-500"
                      : "bg-gradient-to-r from-indigo-800 to-indigo-500"
                  }`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div> */}
              {/* <p className="text-sm mt-4 font-medium">
                Progress: {course.progress}%
              </p> */}
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
  ) : (
    <div className="flex justify-center w-full mt-5">
      <FadeLoader />
    </div>
  );
};

export default CoursesMain;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const CoursesMain = () => {
//   const courses = [
//     {
//       name: 'Course 1',
//       progress: 50,
//       teacher: 'John Doe',
//       startDate: '2024-09-01',
//       endDate: '2024-12-15',
//       image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png'
//     },
//     {
//       name: 'Course 2',
//       progress: 100,
//       teacher: 'Jane Smith',
//       startDate: '2024-10-01',
//       endDate: '2025-01-15',
//       image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png'
//     },
//     {
//       name: 'Course 3',
//       progress: 10,
//       teacher: 'Alice Johnson',
//       startDate: '2024-08-20',
//       endDate: '2024-11-30',
//       image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png'
//     }
//   ];

//   return (
//     <div className="w-full bg-slate-100 mx-auto p-4 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-5 text-center">Courses</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="p-3 text-left">Image</th>
//               <th className="p-3 text-left">Course Name</th>
//               <th className="p-3 text-left">Teacher</th>
//               <th className="p-3 text-left">Start Date</th>
//               <th className="p-3 text-left">End Date</th>
//               <th className="p-3 text-left">Progress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course, index) => (
//               <tr key={index} className="border-b">
//                 {/* Image Column */}
//                 <td className="p-3">
//                   <img
//                     src={course.image}
//                     alt={course.name}
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                 </td>

//                 {/* Course Name */}
//                 <td className="p-3">
//                   <h3 className="text-lg font-semibold">{course.name}</h3>
//                 </td>

//                 {/* Teacher */}
//                 <td className="p-3">
//                   <p>{course.teacher}</p>
//                 </td>

//                 {/* Start Date */}
//                 <td className="p-3">
//                   <p>{course.startDate}</p>
//                 </td>

//                 {/* End Date */}
//                 <td className="p-3">
//                   <p>{course.endDate}</p>
//                 </td>

//                 {/* Progress Bar */}
//                 <td className="p-3">
//                   <div className="w-full bg-gray-100 rounded-full">
//                     <div
//                       className={`h-4 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                       style={{ width: `${course.progress}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-sm mt-2">{course.progress}%</p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Link to All Courses */}
//       <div className="mt-8 text-center">
//         <Link to="/courses" className="text-blue-500 hover:underline">
//           View All Courses
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CoursesMain;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { addCourse } from "../../redux/slices/courseSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const CoursesMain = () => {
  const [courses, setCourses] = useState([]);
  const courseData = useSelector((state) => state.course);
  const [loading, setLoading] = useState(!courseData.isFetched); // Initialize with the opposite of isFetched
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
      setLoading(false); // Set loading to false after fetching data
      setCourses(data); // Update local state with fetched data
      dispatch(addCourse(data)); // Update Redux state with fetched courses
    } catch (err) {
      setLoading(false); // Set loading to false in case of error
      console.log(err.stack);
    }
  };

  useEffect(() => {
    if (!courseData.isFetched) {
      fetchCourses(); // Fetch only if not fetched already
    } else {
      setCourses(courseData.data); // Use Redux state if courses are already fetched
      setLoading(false);
    }
  }, [courseData.isFetched]);

  return !loading ? (
    <div className="w-full backdrop-filter bg-indigo-500 shadow-border backdrop-blur-lg dark:text-white dark:border dark:border-white h-fit mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-bold mb-5 text-center">
        Courses
      </h2>

      {courses.length > 0 ? (
        <div className="flex flex-col max-h-full gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full flex text-black flex-col bg-white dark:border dark:border-white lg:flex-row items-center gap-4 shadow-lg rounded-3xl py-3 px-4"
            >
              <FaBook size={20} />
              <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold">{course.course_title}</h3>
                <div className="flex items-center">
                  <p
                    className={`px-2 py-1 w-fit mt-2 rounded ${
                      course.plan_type === "plus"
                        ? "bg-gray-300"
                        : "bg-yellow-200"
                    }`}
                  >
                    {course.plan_type}
                  </p>
                  <p className="ml-5 py-1 px-2 mt-2 text-gray-400 font-semibold">
                    Enrolled on: {extractDate(course.created_at)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <p>You are not enrolled in any course yet!</p>
        </div>
      )}

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

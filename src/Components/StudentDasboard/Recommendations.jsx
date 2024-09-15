import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai"; // Import star icon
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendedCourse } from "../../redux/slices/recommendedCourseSlice";
import { FadeLoader } from "react-spinners";
const apiUrl = import.meta.env.VITE_API_URL;

function Recommendations() {
  const dispatch = useDispatch();
  const [categoryValue, setCategoryValue] = useState(0);
  const recommendedCourses = useSelector((state) => state.recommendedCourse);
  const [rCourses, setRCourses] = useState([]);
  const [rCoursesbackup, setRCoursesbackup] = useState([]);
  const fetchAllCourses = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/courses`);
      console.log("all courses:", data);
      // dispatch(addRecommendedCourse(data));
      setRCourses(data);
      setRCoursesbackup(data);
      console.log("length is:", data.length);
    } catch (err) {
      console.log(err.stack);
    }
  };
  useEffect(() => {
    fetchAllCourses();
    return () => {};
  }, []);

  const filter = (category) => {
    if (category != 0)
      setRCourses(
        rCoursesbackup.filter((course, id) => {
          return course.category == category;
        })
      );
    else setRCourses(rCoursesbackup);
  };

  const navigate = useNavigate();
  // const recommendedCourses = [
  //   {
  //     id: 1,
  //     name: "Advanced React Patterns",
  //     rating: 4.5, // Add rating here
  //     price: "$10",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Fullstack Web Development",
  //     rating: 4.8,
  //     price: "$10",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Advanced React Patterns",
  //     rating: 4.5, // Add rating here
  //     price: "$10",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Fullstack Web Development",
  //     rating: 4.8,
  //     price: "$10",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
  //   },
  // ];

  // const renderStars = (rating) => {
  //   const fullStars = Math.floor(rating);
  //   const halfStar = rating % 1 !== 0;
  //   const emptyStars = 5 - Math.ceil(rating);

  //   return (
  //     <div className="flex items-center">
  //       {[...Array(fullStars)].map((_, index) => (
  //         <AiFillStar key={index} className="text-yellow-400" />
  //       ))}
  //       {halfStar && <AiFillStar className="text-yellow-400" />}
  //       {[...Array(emptyStars)].map((_, index) => (
  //         <AiFillStar key={index + fullStars} className="text-gray-400" />
  //       ))}
  //     </div>
  //   );
  // };

  return rCourses.length > 0 ? (
    <div className="h-screen overflow-scroll backdrop-filter bg-indigo-500 shadow-border backdrop-blur-lg text-white dark:bg-black dark:text-white relative dark:border dark:border-white flex flex-col items-center rounded-lg">
      {/* Sticky Heading */}
      <div className="sticky top-0 w-full left-0 right-0 z-20 dark:bg-black py-4 bg-indigo-500">
        <h2 className="text-xl lg:text-2xl font-bold text-center w-full md:text-base">
          Recommended Courses
        </h2>
      </div>
      {/* filter section */}
      <div className="text-black mb-5 mt-2  gap-4 outline-none flex justify-center cursor-pointer items-center">
        <select
          className="outline-none px-2 py-1 rounded cursor-pointer"
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value={0}>All</option>
          <option value={1}>School</option>
          <option value={2}>College</option>
          <option value={3}>Other</option>
        </select>
        <button
          className="bg-white px-3 py-1 rounded text-blue-800 font-semibold"
          onClick={() => filter(categoryValue)}
        >
          Filter
        </button>
      </div>
      {/* Course List */}
      <div className="w-full px-5">
        <div className="flex flex-col gap-6 z-5 mx-15 mb-5 w-full">
          {rCourses.map((course) => (
            <div
              key={course.id}
              className="w-full flex bg-indigo-600 flex-col xl:flex-row hover:shadow-md hover:shadow-black duration-100 ease-in dark:border dark:border-white items-center gap-4 shadow-lg rounded-lg p-4 md:p-6"
            >
              {/* Course Image */}
              {/* <div className="w-full xl:w-fit">
              <img
                src="https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png"
                alt={course.name}
                className="object-cover xl:w-32 xl:h-32 rounded-lg"
              />
            </div> */}
              {/* Course Info */}
              <div className="flex flex-col flex-1 text-center md:text-left">
                <h3 className="text-lg text-white md:text-xl font-semibold">
                  {course.title}
                </h3>

                {/* Rating Section */}
                <div className="mt-2 flex flex-col flex-1 text-center">
                  {/* {renderStars(course.rating)} */}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                  {/* Price Section */}
                  <p className="text-sm md:text-sm rounded-md font-bold text-gray-400 px-1 py-1 border-gray-400 mb-4 md:mb-0 border-2">
                    {course.category == 1
                      ? "School"
                      : course.category == 2
                      ? "College"
                      : "Other"}
                  </p>

                  {/* Enroll Button */}
                  <button
                    onClick={() => navigate("/courses/college")}
                    className="relative xl:w-auto flex items-center justify-center bg-white py-2 px-3 lg:py-2 lg:px-4 md:py-1 md:px-2 overflow-hidden text-black font-semibold rounded-full group"
                  >
                    <span className="md:text-sm">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full justify-center mt-5">
      <FadeLoader />
    </div>
  );
}

export default Recommendations;

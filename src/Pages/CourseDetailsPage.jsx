import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";
import Loader from "../Components/Loader";
import Brochure from "../Brochure.txt";
import { CollegeCourseData, OtherCourseData, School } from "../Data";
import Testimonials from "../Components/Testmonials/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetails } from "../redux/slices/courseDetailSlice";


const CourseDetailsPage = () => {

  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [showTab, setShowTab] = useState(1);
  const [coursePlusContent, setCoursePlusContent] = useState([
    "Doubt clearing sessions",
    "Material & Assignment Management",
    "Live Sessions",
    "Project based learning",
    "Mentorship & Evaluation",
    "Mentor Feedback",
    "Regular Quizzes & Assessment",
  ]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // const getCourseDetails = async () => {
  //   // setCourseDetails(data[0]);
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `https://api.baoiam.com/api/courses?subcategory=${id}`
  //     );
  //     // console.log(data);
  //     setCourseDetails(data[0]);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error.stack);
  //     setLoading(true);
  //   }
  // };
  console.log("course details: ", courseDetails);
  // document.title = `Baoiam - ${courseDetails.title}`;

  useEffect(() => {
    if (id >= 1 && id <= 10) {
      // setCoursePlusContent(schoolCoursePlusContent);
      // console.log("school is : ", school[0].id);
      const d = School.filter((data) => data.id == id);
      console.log("d is:", d);
      setCourseDetails(School[0].subCate.filter((data) => data.id == id)[0]);
      console.log("course details:", courseDetails);
    } else if (id >= 11 && id <= 22) {
      // setCoursePlusContent(collegeCoursePlusContent);
      setCourseDetails(
        CollegeCourseData[0].subCate.filter((data) => data.id == id)[0]
      );
    } else {
      // setCoursePlusContent(otherCoursePlusContent);
      setCourseDetails(
        OtherCourseData[0].subCate.filter((data) => data.id == id)[0]
      );
    }

    return () => {};
  }, [id]);

  // } else if (id >= 11 && id <= 22) {
  //   // setCoursePlusContent(collegeCoursePlusContent);
  //   setCourseDetails(
  //     CollegeCourseData[0].subCate.filter((data) => data.id == id)[0]
  //   );
  // } else {
  //   // setCoursePlusContent(otherCoursePlusContent);
  //   setCourseDetails(
  //     OtherCourseData[0].subCate.filter((data) => data.id == id)[0]
  //   );
  // }

  const planRef = useRef();
  const enrollNowScroll = () => {
    planRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log("id is:", id);

 
  // redux start

  const { course, status, error } = useSelector((state) => state.courseDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    ;
    if (status == 'idle') {
      dispatch(fetchCourseDetails(id));
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-[200px]">
        loading...
      </div>
    );
  }
  if (status === 'failed') {
    return (
      <div className="text-center p-4 bg-red-100 text-red-600 rounded-lg ">
        <p>Error: {error}</p>
      </div>
    );
  }

  // redux end


  console.log(course, 'course api on action')

  return (
    <div>
      {/* Course Description */}
      <div className="flex items-center flex-col md:flex-row gap-12 md:gap-4 lg:gap-24 justify-between px-4 lg:px-24 my-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.7rem] lg:text-4xl font-bold text-neutral-600 dark:text-white">
            {courseDetails?.course}
          </h3>
          <Link
            to={`/book-a-demo/${courseDetails.id}`}
            className="relative group"
          >
            <button
              type="button"
              class="flex text-xs md:text-sm lg:text-base text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg px-8 py-2.5 text-center"
            >
              Book a Demo
            </button>
          </Link>
          {/* <p className="text-[0.8rem] lg:text-base">
            {courseDetails?.desc?.map((detail, id) => {
              return { detail };
            })}
          </p> */}
          {courseDetails?.desc?.map((detail, id) => {
            return <p className="text-[0.8rem] lg:text-base">{detail}</p>;
          })}

          <div className="flex flex-row  gap-2">
            <button
              onClick={enrollNowScroll}
              className="pl-4 mr-6 pr-6 py-2 border text-xs md:text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 transition duration-300 hover:text-white"
            >
              Enroll Now{" "}
              <FaArrowRight size={22} className="group-hover:animate-pulse" />{" "}
            </button>
            <a
              href={Brochure}
              download={true}
              className="pl-4 pr-6 py-2 border text-xs md:text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 transition duration-300 hover:text-white"
            >
              Download Brochure{" "}
              {/* <FaDownLong size={22} className="group-hover:animate-pulse" />{" "} */}
              <FaDownload size={18} />
            </a>
          </div>
        </div>

        <img
          src={CourseDesc2}
          alt=""
          className="w-72 h-72 lg:w-full lg:h-96 rounded-ss-[7rem] rounded-ee-[7rem] shadow-2xl shadow-black"
        />
      </div>
      {/* Changes */}
      <div className="px-8 lg:px-24  my-12 py-12 flex items-center  mt-32 justify-between flex-col-reverse md:flex-row gap-12 md:gap-8 lg:gap-24 w-full">
        <div className="w-full md:w-[40%]">
          <img
            src={CourseOverview}
            alt=""
            className="w-full md:w-72 h-72 lg:w-full lg:h-96 object-cover shadow-[-15px_15px_#ea580c] lg:shadow-[-20px_20px_#ea580c]"
          />
        </div>
        <div className="w-full flex h-[400px] xs:p-2  rounded flex-col justify-center p-5">
          <div className="flex justify-start border-b border-gray-300">
            <h3
              className={`xs:text-[16px] font-bold flex-1 text-lg md:text-xl cursor-pointer text-center py-2 transition ${
                showTab === 1
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setShowTab(1)}
            >
              Overview
            </h3>
            <h3
              className={`xs:text-[16px] font-bold flex-1 text-lg md:text-xl cursor-pointer text-center py-2 transition ${
                showTab === 2
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setShowTab(2)}
            >
              Curriculum
            </h3>
          </div>

          {showTab == 1 ? (
            <div className="w-full h-[400px] overflow-auto mt-5 py-5 pt-0 hide-scrollbar">
              <div className="w-full">
                {/* <h4 className="text-[1.6rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
                  Course{" "}
                  <span className="border-b border-orange-500 text-orange-500">
                    Overview
                  </span>
                </h4> */}

                <ul className="list-inside xs:text-[14px] px-2 list-disc marker:text-orange-600 marker:text-md flex flex-col gap-2 w-full">
                  {courseDetails.overview?.map(
                    (o, i) =>
                      typeof o === "string" && (
                        <li className="text-black">{o}</li>
                      )
                  )}
                  {/* {courseDetails.overview?.split(".").map((o, i) => (
              <li>{o}</li>
            ))} */}
                </ul>
              </div>
            </div>
          ) : (
            showTab == 2 && (
              <div className="w-full mt-5 overflow-auto h-[400px] hide-scrollbar pb-3">
                {/* <h4 className="text-[1.6rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
                  Course{" "}
                  <span className="border-b border-orange-500 text-orange-500">
                    Curriculum
                  </span>
                </h4> */}

                <ul className="list-inside  mt-4">
                  {courseDetails?.curriculum?.map((o, i) =>
                    typeof o === "string" ? (
                      <li className=" px-3 mx-2 py-4 shadow-md shadow-gray-500 font-bold rounded mt-4">
                        {o}
                      </li>
                    ) : (
                      o.weekTitle && (
                        <details
                          className="text-black bg-white cursor-pointer px-3 py-4 rounded mt-4 shadow-gray-400 shadow-md mx-2"
                          onClick={() => {
                            setIsWeekExpanded((prevState) => ({
                              ...prevState,
                              [i]: !prevState[i], // Toggle the state for the specific week by index
                            }));
                          }}
                        >
                          <summary className="font-bold xs:text-[14px] text-lg flex justify-between w-full">
                            {/* Week Title Handling */}
                            {o.weekTitle.startsWith("Week")
                              ? o.weekTitle
                              : "Week " + (i + 1) + ": " + o.weekTitle}

                            {/* Arrow Rendering */}
                            {/* {o.topics?.length > 0 && (
                              <p
                                className={`mr-5 ml-5 transform ${
                                  isWeekExpanded[i] ? "-rotate-90" : "rotate-90"
                                }`}
                              >
                                &gt;
                              </p>
                            )} */}
                          </summary>

                          <ul className="list-disc w-full xs:text-[13px]">
                            {o.topics?.map((d, i) => (
                              <li
                                className="ml-10 mt-2 break-words whitespace-normal"
                                key={i}
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        </details>
                      )
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      {/* Changes done */}
      {/* Course Overview */}
      {/* <div className="px-8 lg:px-24 my-12 py-12 flex justify-between flex-col-reverse md:flex-row gap-12 md:gap-8 lg:gap-24 w-full">
        <div className="w-full md:w-[40%]">
          <img
            src={CourseOverview}
            alt=""
            className="w-full md:w-72 h-72 lg:w-full lg:h-96 object-cover shadow-[-15px_15px_#ea580c] lg:shadow-[-20px_20px_#ea580c]"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <h4 className="text-[1.6rem] lg:text-4xl font-semibold mb-2 lg:mt-12 lg:mb-4">
            Course{" "}
            <span className="border-b border-orange-500 text-orange-500">
              Overview
            </span>
          </h4>

          <ul className="list-inside list-disc marker:text-orange-600 marker:text-md flex flex-col gap-2 w-full">
            <li className="font-medium text-[0.8rem] lg:text-base">
              {courseDetails.program_overview}
            </li>
          </ul>
        </div>
      </div> */}

      {/* Course Curriculum */}
      {/* <div className="w-full px-8 lg:px-24 my-12 md:my-20 h-full flex flex-col items-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold text-neutral-600 mb-2 lg:mb-4 dark:text-white">
          Course{" "}
          <span className="text-orange-500 border-b border-orange-500">
            Curriculum
          </span>
        </h4>

        <ul className="list-inside list-disc marker:text-orange-500 marker:text-md mt-4">
          <li>{courseDetails.curriculum}</li>
        </ul>
      </div> */}

      {/* Course Highlights */}
      <CourseHighlights />

      {/* Join we us */}
      {courseDetails.plans && courseDetails.plans.length > 0 ? (
        <div
          id="plans"
          ref={planRef}
          className="my-12 px-8 lg:px-24 w-full h-full"
        >
          <div className="bg-white dark:bg-[#080529] py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="mb-4 text-center text-[1.8rem] font-bold text-gray-800 dark:text-white md:mb-8 lg:text-4xl xl:mb-12">
                Join With Us Find the{" "}
                <span className="text-orange-500 border-b border-orange-500">
                  Right Course
                </span>
              </h2>

              <div className="mb-6 flex justify-center flex-wrap gap-10">
                {courseDetails?.plans?.map((p, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex  flex-col  rounded-lg border ${
                        p.name === "premium" ? "border-orange-500 relative" : ""
                      } p-4 pt-6`}
                    >
                      <div className="mb-8">
                        {p.name === "premium" ? (
                          <>
                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                              <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                                most popular
                              </span>
                            </div>

                            <div className="mb-2 text-center capitalize text-2xl font-bold text-gray-800 dark:text-white">
                              {p.name}
                            </div>

                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              {courseDetails.title}
                            </p>
                            <p className="mx-auto font-extrabold mb-2 px-8 text-center text-black dark:text-white">
                              All Contents of Plus
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Personal Mentorship
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Experts councelling
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Live Projects
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Dedicated Placement cell
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="mb-2 text-center capitalize text-2xl font-bold text-gray-800 dark:text-white">
                              Plus
                            </div>
                            {/* <p className="mx-auto  mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Course Duration: {p.duration}
                            </p> */}
                            {coursePlusContent.map((content, i) => (
                              <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                                {content}
                              </p>
                            ))}
                          </>
                        )}
                      </div>

                      <div className="mt-auto flex flex-col gap-8">
                        <div className="flex items-end justify-center gap-1">
                          <span className="self-start text-gray-600 dark:text-white">
                            ₹
                          </span>
                          <span className="text-4xl font-bold text-gray-800 dark:text-white">
                            {p.price}
                          </span>
                          <span className="text-gray-500 dark:text-white">
                            /{p.name != "premium" ? p.duration : "Unlimited"}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            if (localStorage.getItem("access_token"))
                              navigate(
                                `/checkout/${id}/${
                                  p.name == "premium" ? "Premium" : "Plus"
                                }`
                              );
                            else navigate("/login");
                          }}
                          className={`block  rounded-lg ${
                            p.name === "premium"
                              ? "bg-orange-500 text-white"
                              : "bg-gray-500"
                          } px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700 md:text-base`}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center text-sm text-gray-500 dark:text-white sm:text-base">
                Need help deciding?{" "}
                <Link
                  to={"/contact"}
                  className="text-gray-600 dark:text-orange-500 underline transition duration-100 hover:text-orange-600 active:text-orange-400"
                >
                  Get in touch
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-14"></div>
      )}

      <Testimonials />

      {/* Emi & Placement */}
      {/* <div className="w-full h-auto flex justify-center items-center relative">
        <div className="relative xs:w-[300px] w-[350px] lg:w-[530px] mx-auto">
          <img
            className="z-0 opacity-40 absolute inset-0 w-full h-full object-cover"
            src="https://images.stockcake.com/public/1/a/3/1a34b575-b411-49cf-8943-922dcb8fc637_large/payment-in-progress-stockcake.jpg"
            alt="EMI background"
          />
          <div className="relative z-20 w-full text-white p-4 flex justify-center flex-col text-center">
            <p className="font-semibold text-black text-[1.2rem] lg:text-2xl mb-2 dark:text-white">
              Easy EMI
            </p>
            <p className="text-black dark:text-white mb-2 text-sm lg:text-base">
              Easy monthly payment options with our emi facilities
            </p>
            <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-black dark:text-white'>
              <li className="text-sm lg:text-base">
                No upfront payment required
              </li>
              <li className="text-sm lg:text-base">
                Fixed monthly installments
              </li>
              <li className="text-sm lg:text-base">
                Flexible repayment options
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Amazing Offer */}
      {/* <div className="py-8 px-8 lg:px-24 my-20 w-full h-full text-white bg-[#F6A611] dark:bg-gray-700 text-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
          Amazing <span className="border-b">Career</span>
        </h4>
        <p className="text-sm lg:text-lg">
          Grab these exclusive offers available only once a year.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-4 justify-center w-full mt-8">
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 2 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">15% OFF</p>
          </div>
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 3 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">20% OFF</p>
          </div>
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 4 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">25% OFF</p>
          </div>
        </div>
      </div> */}
    </div>


  );
};

export default CourseDetailsPage;

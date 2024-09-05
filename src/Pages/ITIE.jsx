import React from "react";
import { useNavigate } from 'react-router-dom';
import img2 from '../Images/ITIE/img2.jpeg'
import intern from '../Images/ITIE/intern.jpg'
import img1 from '../Images/ITIE/img1.jpg'
import { PiGraduationCapFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import Faq from './Faq'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummy1 from '../images/ITIE/dummy1.png'
import dummy2 from '../Images/ITIE/dummy2.png'

const highlights = [
  { title: "Live Online Classes", description: "At your own schedule" },
  { title: "Mobile Friendly", description: "No Laptop? No Problem" },
  { title: "Paid Internship Opportunities", description: "To Build Your Career" },
  { title: "Certificate of Completion", description: "From Baoiam Trainings" },
  { title: "Live Projects", description: "For hand-on practice" },
  { title: "Doubt Clearing", description: "Through Q&A forum" },
  { title: "Beginner Friendly", description: "No prior knowledge required" },
  { title: "12-20 Weeks Duration", description: "2 hours/week (flexible schedule)" },
  { title: "Downloadable Resource", description: "With Lifetime Access" },
  { title: "Professional trainer accreditation", description: "Study From The Best Tutors" },
];

const courses = [
  {
    title: 'Human Resource',
    duration: '3 months',
    description: 'Empowering People, Building Teams with Baoiam.',
    image: { img1 },
  },
  {
    title: 'Data Analytics',
    duration: '3 months',
    description: 'Turn Data in your advantage with BAOIAM',
    image: { img1 },
  },
  {
    title: 'Marketing',
    duration: '3 months',
    description: 'Make your products/services irresistible.',
    image: { img1 },
  },
  {
    title: 'SEO',
    duration: '3 months',
    description: 'Attract website traffic and rank higher.',
    image: { img1 },
  },
  {
    title: 'Web Development',
    duration: '3 months',
    description: 'From concept to click, web magic made real.',
    image: { img1 },
  },
  {
    title: 'UI/UX Designing',
    duration: '3 months',
    description: 'Design that sparks curiosity, fuels understanding.',
    image: { img1 },
  },
  {
    title: 'Gaphics Designing',
    duration: '3 months',
    description: 'Learn the art of visual imagery.',
    image: { img1 },
  },
  {
    title: 'Product Management',
    duration: '3 months',
    description: 'Building products that users love.',
    image: { img1 },
  },
  {
    title: 'Business Communication',
    duration: '3 months',
    description: 'Mitigate communication barriers.',
    image: { img1 },
  },
];

const testimonials = [
  {
    img: dummy2,
    name: "Tanisha Rajput",
    title: "Web Developer",
    content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee in Web Development. They helped me in learning with ease which eventually landed me a job for a package of 12 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Prince Raj",
    title: "HR Generalist",
    content: "I started my training at BAOIAM as a HR. With all the essential training and knowledge from my mentors, I landed a job for 12 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
  },
  {
    img: dummy1,
    name: "Vijay Poranki",
    title: "Product Manager",
    content: "Trained with BAOIAM as a Product Management and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },
  {
    img: dummy2,
    name: "Rituraj Datta",
    title: "Data Analyst",
    content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee as a Data Analytics. They helped me in learning with ease which eventually landed me a job for a package of 11 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Android Developer",
    content: "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Preetika Rawat",
    title: "Digital Marketer",
    content: "I started my training at BAOIAM. With all the essential training and knowledge from my mentors, I landed a job for 13 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Android Developer",
    content: "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Harsha Khirwadkar",
    title: "Graphic Designer",
    content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee. They helped me in learning with ease which eventually landed me a job for a package of 10 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Pracheta Bhanjachowdhuri",
    title: "UI/UX Designer",
    content: "I trained with BAOIAM as a UI/UX Designer and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },

];



const ITIE = () => {
      const navigate = useNavigate();
  return (
    <div>
      {/* ITIE */}
      <div className="flex flex-col md:flex-row items-center justify-center  bg-white p-6 mx-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Interns <span className="text-orange-500">TEACH</span> Interns <span className="text-blue-900">EARN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
            ITIE Revolutionizes Internships
          </h2>
          <p className="text-gray-600 mt-6">
            Our mission is all about learning and sharing. Our platform is designed to help you gain knowledge, share your expertise with others, and earn rewards along the way.
          </p>
          <button className="mt-8 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-6 rounded-full text-lg" onClick={()=>navigate('/maintenance')}>
            I AM INTERESTED
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={img2} alt="Person pointing" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Program Overview */}
      <div className="mx-auto p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3 mb-4 md:ml-20 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Program <span className="text-orange-500">Overview</span>
            </h1>
            <p className="text-gray-600 mb-4 ml-10 mt-5 text-xl">
              ITIE is a program that has been formulated by our team and leading experts for young enthusiasts to build a strong and powerful career path. Through this program, not only do the interns get the chance to learn and hone their skills, but also to monetise their skill by cascading the knowledge they have gained so far into others. Hence, after learning a skill, they will be tested on it and if they clear the tests, they get the opportunity to teach a new intern who wishes to learn the same skill as them. The 'Teacher Interns' will then earn exciting compensation offers and incentives.
            </p>
            <div className="text-yellow-600 font-medium">
              ⏳ Enrollment Deadline Approaching Soon!
            </div>
          </div>
          <div className="w-full  hidden md:block">
            <div className="relative">
              <img src={intern} alt="Person" className="rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Highlight */}
      <div className="max-w-5xl mx-5 md:mx-auto p-4 bg-white shadow-md rounded-2xl border-2 mt-16 mb-20 hover:scale-110 hover:shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Course <span className="text-orange-500">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-4 border-b border-gray-200 pb-4">
              <div className="text-orange-500 text-3xl size-10">
                <PiGraduationCapFill />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Our courses */}

      <div className="max-w-6xl mx-auto p-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900">
          Our <span className="text-orange-500">Courses</span>
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Plus +
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Premium ★
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div key={index} className="bg-white hover:shadow-2xl hover:border-2 hover:scale-105 overflow-hidden">
              <img src={img1} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center text-sm text-orange-500 font-bold my-2 ">
                    <span className="text-orange-500 mr-2"><GoDotFill size={20} />
                    </span>
                    {course.duration}

                  </div>
                  <div className="text-orange-500"><FaPlus />
                  </div>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Our Testimonials */}

      <div>
        <h1 className="text-3xl md:text-5xl text-center font-semibold my-8 md:my-14 text-orange-600">
          Our <span className="text-blue-950">Testimonials</span>
        </h1>

        <div className="relative w-full px-4 md:px-10 pb-10 md:pb-20">
          <Swiper
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={1} 
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, 
              768: { slidesPerView: 2, spaceBetween: 25 }, 
              1024: { slidesPerView: 3, spaceBetween: 30 }, 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="border border-orange-600 shadow-xl rounded-2xl text-center mt-10 px-6 md:px-10 flex flex-col py-10 w-full h-96">
                  <img
                    className="w-16 md:w-24 h-16 md:h-24 mx-auto rounded-full object-cover"
                    src={testimonial.img}
                    alt="Student img"
                  />
                  <h3 className="text-lg md:text-xl text-gray-800 font-bold mt-4">{testimonial.name}</h3>
                  <p className="text-gray-600 font-semibold">{testimonial.title}</p>
                  <p className="mt-2 text-gray-500">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-prev bg-orange-400 rounded-full p-5 md:p-7"></div>
          <div className="swiper-button-next bg-orange-400 rounded-full p-5 md:p-7"></div>
        </div>


      </div>
       {/* Amazing Career */}

      <div className="flex flex-col items-center justify-center bg-orange-100 m-3 md:m-10 py-5 md:py-20 px-5 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 text-center">
          Amazing <span className="text-orange-500">Career</span>
        </h1>
        <p className="mt-2 text-sm md:text-lg lg:text-xl text-gray-500 font-bold text-center">
          Grab these exclusive offers available only once a year.
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl text-center border-2 border-orange-600 w-full md:w-auto">
            <h2 className="text-base md:text-lg font-semibold text-indigo-900">BUY 2 COURSES & GET MORE</h2>
            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-orange-500">15%</p>
            <p className="mt-2 text-lg md:text-xl text-indigo-900">OFF</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl text-center border-2 border-orange-600 w-full md:w-auto">
            <h2 className="text-base md:text-lg font-semibold text-indigo-900">BUY 3 COURSES & GET MORE</h2>
            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-orange-500">20%</p>
            <p className="mt-2 text-lg md:text-xl text-indigo-900">OFF</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl text-center border-2 border-orange-600 w-full md:w-auto">
            <h2 className="text-base md:text-lg font-semibold text-indigo-900">BUY 4 COURSES & GET MORE</h2>
            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-orange-500">25%</p>
            <p className="mt-2 text-lg md:text-xl text-indigo-900">OFF</p>
          </div>
        </div>
        <p className="mt-10 text-sm md:text-lg text-gray-500">Deal Expired!</p>
      </div>

      {/* FAQ Section */}
            <Faq/>


    </div>
  );
};

export default ITIE;

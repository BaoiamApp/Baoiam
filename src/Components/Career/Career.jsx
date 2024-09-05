import React, { useState, useEffect } from "react";
import image1 from "../../images/pngegg.png";
import image0 from "../../images/pngegg (2).png"
import image2 from "../../images/teamwork00.webp";
import image3 from "../../images/images new.jpeg";
import image4 from "../../images/images new1.jpeg";
import image5 from "../../images/download new.jpeg";
import image7 from "../../images/Biaoam.webp";
import image8 from "../../images/teamwork13.avif";
import image9 from "../../images/teamwork14.avif";
import image10 from "../../images/teamwork6.webp";
import image11 from "../../images/pngegg (3).png"
import icon1 from "../../images/graduation-hat.png";
import icon2 from "../../images/learning.png";
import icon3 from "../../images/office-building.png";
import icon4 from "../../images/reading-book.png";
import icon5 from "../../images/thinking.png";
import icon6 from "../../images/code.png";
import icon7 from "../../images/location.png";
import icon8 from "../../images/briefcase (1).png"
import { FaGoogle, FaSlack, FaDribbble } from "react-icons/fa"; // For example icons
import { FiBarChart2 } from "react-icons/fi";
const Career = () => {
 


const benefits = [
  {
    title: "Large Beautiful Office",
    description: "Enjoy a spacious beautiful office .",
    icon: icon1,
  },
  {
    title: "Great Co-Workers",
    description: "Work with supportive colleagues.",
    icon: icon2,
  },
  {
    title: "Easy Location",
    description: "Conveniently located office .",
    icon: icon3,
  },
  {
    title: "Education Opportunities",
    description: "Continuous learning and development.",
    icon: icon4,
  },
  {
    title: "Free Lunch & Snacks",
    description: "Enjoy free meals and snacks every day.",
    icon: icon5,
  },
  {
    title: "Performance Awards",
    description: "Get rewarded .",
    icon: icon6,
  },

  {
    title: "Performance Awards",
    description: "Get rewarded .",
    icon: icon6,
  },

  {
    title: "Performance Awards",
    description: "Get rewarded .",
    icon: icon6,
  },
];

const features = [
  { id: 1, title: "Quality Job", icon: "🏅" },
  { id: 2, title: "Top Companies", icon: "🏢" },
  { id: 3, title: "No Extra Charge", icon: "💸" },
  { id: 4, title: "International Job", icon: "🌍" },
];


const slides = [
  {
    image: image5,
    content:
      "The best part of working at Hubstaff will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here..",
  },
  {
    image: image3,
    content:
      "The best part of working at Hubstaff will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here..",
  },
  {
    image: image4,
    content:
      "The best part of working at Hubstaff will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here..",
  },
];


const jobs = [
  {
    title: "Senior UI Designer",
    company: "Microsoft",
    team: "Visual Design-Team Landing",
    location: "Copenhagen (Full-time)",
    logo: icon1,
  },
  {
    title: "Product Designer",
    company: "Behance",
    team: "UI Design-Web Apps Team",
    location: "Copenhagen (Full-time)",
    logo:icon2,
  },
  {
    title: "Product Manager",
    company: "Daily Mail",
    team: "Product Manager-Mobile Team",
    location: "Copenhagen (Full-time)",
    logo:icon3,
  },
  {
    title: "Product Designer",
    company: "Etsy",
    team: "UI Design-Web Apps Team",
    location: "Copenhagen (Full-time)",
    logo: icon4,
  },
  {
    title: "Product Manager",
    company: "Apple",
    team: "Product Manager-Mobile Team",
    location: "Copenhagen (Full-time)",
    logo: icon5,
  },
  {
    title: "Product Manager",
    company: "Patch",
    team: "Product Manager-Mobile Team",
    location: "Copenhagen (Full-time)",
    logo:icon6,
  },
];






  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);









  return (
    <div className="min-h-screen flex flex-col justify-center item-center   text-white relative overflow-x-hidden lg:pb-0">
      <div className="min-h-screen bg-[#fcfdff] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center lg:flex-row w-full relative overflow-hidden">
        {/* Main Content Section */}
        <main className="flex flex-col lg:flex-row items-center lg:justify-between w-full lg:px-20 py-8 lg:py-12">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#0a0a0a] ">
              Upskills Your{" "}
              <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-transparent bg-clip-text">
                Career
              </span>
              <br />
              Journey With Us.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#0a0a0a] ">
              Amet nulla ornare neque, in diam ultrices et phasellus<br/> mattis.
              Eget eget ut eget nibh.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Type"
                className="border border-gray-300 rounded-lg p-3 w-full sm:w-auto flex-grow"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#d97706] hover:shadow-lg mt-2 sm:mt-0">
                Search
              </button>
            </div>
          </div>

          {/* Image and Icons Section */}
          <div className="relative mt-8 lg:mt-0 lg:w-1/2 flex justify-center ">
            {/* Yellow Circle and Main Image */}
            <div className="relative w-full flex justify-center">
              <div className="  bg-yellow-300 w-[300px] h-[300px]  md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full absolute -top-2 -left-3 md:top-10 md:-left-3 lg:-top-10 lg:-left-1 "></div>
              <img
                src={image0} // Replace with your image source
                alt="Job Finder Illustration"
                className=" relative w-full h-auto  z-10 lg:pl-10 "
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute top-[-20px] left-12 lg:left-20">
              <FaSlack className="text-blue-600 bg-white p-2 rounded-full shadow-lg w-12 h-12" />
            </div>
            <div className="absolute top-24 left-[-10px] lg:left-[-20px]">
              <FaGoogle className="text-red-600 bg-white p-2 rounded-full shadow-lg w-12 h-12" />
            </div>
            <div className="absolute top-[-10px] right-12 lg:right-40">
              <FaDribbble className="text-pink-600 bg-white p-2 rounded-full shadow-lg w-12 h-12" />
            </div>
            <div className="absolute top-8 right-12 lg:right-10">
              <FiBarChart2 className="text-green-600 bg-white p-2 rounded-full shadow-lg w-12 h-12" />
            </div>

            {/* Stats Box */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 lg:bottom-[-18px] lg:left-auto lg:right-10 z-20 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-2 transition-transform animate-bounce hover:animate-none transition-transform duration-200 ease-in-out hover:scale-105">
              <FiBarChart2 className="text-orange-500 w-8 h-8" />
              <div>
                <p className="text-xl font-bold text-gray-800">20K+</p>
                <p className="text-sm text-gray-500">People got hired</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="bg-white flex flex-col">
        <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-15 lg:px-0 xl:px-0 m-4 md:m-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center text-[#0a0a0a] pt-4 sm:pt-5 mb-0">
            Your Life At BAOIAM
          </h1>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 md:p-6 flex flex-col items-center bg-white hover:bg-gray-100 transition border border-gray-300 rounded-lg shadow-sm lg:mt-0"
              >
                {/* Image Icon */}
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-12 h-12 mb-4"
                />

                {/* Title */}
                <h2 className="text-lg md:text-lg font-bold text-gray-900 text-center mb-2">
                  {benefit.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8 mx-0 mt-5 lg:mt-2 w-full">
        {/* Left Section */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8 lg:pr-16 xl:pr-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-[#0a0a0a] mb-4">
            Why We Are Most Popular
          </h2>
          <p className="text-gray-600 mb-8">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
            ultrices gravida.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center bg-gray-100 p-4 rounded-lg shadow"
              >
                <span className="text-xl sm:text-2xl mr-4">{feature.icon}</span>
                <span className="text-base sm:text-lg font-medium text-gray-700">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center md:pl-8 lg:pl-16 xl:pl-20">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-full">
            <img
              src={image1}
              alt="Why We Are Most Popular"
              className="rounded-lg w-full"
            />
            <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg flex items-center">
              <span className="text-sm font-medium text-gray-700 sm:text-xs">
                100% Trusted
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#e0e7ff] flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">Featured Jobs</h1>
        <p className="text-gray-600 mb-8 ">
          Hand-picked jobs featured depending on popularity and benefits
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 flex flex-col   border border-gray-200 rounded-lg border border-gray-900 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h2>
              <div className="flex flex-row text-xs space-x-5">
                <p className="text-gray-700 mb-1 ">{job.team}</p>
                <p className="text-gray-700 mb-4">{job.location}</p>
              </div>
              <div className="flex flex-row space-x-4 items-center justify-between ">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-10 h-10 mb-4  border-2 border-gray-300 rounded-full bg-white"
                />
                <button className="bg-[#474541] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300  ">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-4 mt-10 lg:mt-7 w-full">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-full max-w-md md:max-w-full">
            <img
              src={image11}
              alt="Why We Are Most Popular"
              className="rounded-lg w-full"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg flex items-center">
              <span className="text-sm font-medium text-gray-700">
                100% Trusted
              </span>
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className="md:w-1/2 text-left pl-0 md:pl-8 lg:pl-12 xl:pl-16">
          <img
            src={icon8} // Replace iconSrc with the path to your icon image
            alt="Icon"
            className="w-12 h-12 mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-[#0a0a0a] mb-4">
            Trusted & Popular Job Portal
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg lg:text-xl">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
            ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus
            commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum
            suspendisse ultrices gravida.
          </p>

          <div className="flex space-x-4">
            <button className=" bg-[#6366f1] text-white px-6 py-3  font-semibold hover:bg-[#1e3a8a] transition">
              Post a Job
            </button>
            <button className="bg-gray-200  text-[#6366f1] px-6 py-3  font-semibold hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white py-4 px-2">
        {/* Header Section */}
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold  text-[#0a0a0a] mb-4">
            Experience Life at BAOIAM
          </div>
          <div className="text-base sm:text-lg md:text-xl text-gray-700">
            We're building a workspace environment that promotes growth, both
            personally, professionally & mentally.
          </div>
        </div>
      </div>

      {/* Slide Section */}
      <div className=" h-screen relative w-full h-80 sm:h-96 overflow-hidden mt-8 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div
          className="flex transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="flex flex-col sm:flex-row w-full max-w-screen-lg h-full border border-gray-200 shadow-2xl rounded-xl transform transition-transform hover:scale-105 hover:shadow-3xl bg-white">
                {/* Left side - Content */}
                <div className="flex-1 flex justify-center p-4 sm:p-6">
                  <p className="text-lg sm:text-sm md:text-xl text-black text-center sm:text-left">
                    {slide.content}
                  </p>
                </div>
                {/* Right side - Image */}
                <div className="flex-1 h-full">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="relative bg-blue-900 text-white flex flex-col md:flex-row items-center justify-center p-8 mt-8 overflow-hidden">
        {/* Background Circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-700 rounded-full opacity-75 z-0 overflow-hidden"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700 rounded-full opacity-75 z-0 overflow-hidden"></div>

        {/* Image Gallery */}
        <div className="relative z-10 w-1/3 md:w-1/4 grid grid-cols-2  gap-2 p-4  ">
          <div className="grid grid-cols-1 gap-2">
            <div className="col-span-1">
              <img
                src={image8}
                alt="Team Member 1"
                className="w-full h-full  object-cover"
              />
            </div>
            <div className="col-span-1 row-span-4">
              <img
                src={image2}
                alt="Team Member 2"
                className="w-full h-full  object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="col-span-1 row-span-4">
              <img
                src={image9}
                alt="Team Member 3"
                className="w-full h-full  object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src={image8}
                alt="Team Member 4"
                className="w-full h-full  object-cover"
              />
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="relative z-10 w-full md:w-1/2 text-left p-4 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">
            Take a closer look at the Baoiam team
          </h1>
          <p className="mb-4">
            We are mostly dog people (but we love cat people, too).
          </p>
          <p className="mb-4">
            Hubstaffers generally spend their free time cooking, playing games,
            reading, working out, brewing beer, or hanging with the family.
          </p>
          <p className="mb-4">
            We're big into family. One of the great benefits of remote work is
            being home for bus pickup and drop-off.
          </p>
          <p className="mb-8">
            Wellness is important to us. Many Hubstaffers lift weights, rock
            climb, and practice yoga — as reported in our #wellness Slack
            channel.
          </p>
        </div>
      </section>
    </div>
  );
}


export default Career;

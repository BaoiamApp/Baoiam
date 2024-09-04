import React, { useState, useEffect } from "react";
import image1 from "../../images/pngegg.png";
import image0 from "../../images/pngegg (1).png"
import image2 from "../../images/teamwork00.webp";
import image3 from "../../images/teamwork10.webp";
import image4 from "../../images/teamwork15.jpg";
import image5 from "../../images/teamwork0.webp";
import image7 from "../../images/Biaoam.webp";
import image8 from "../../images/teamwork13.avif";
import image9 from "../../images/teamwork14.avif";
import image10 from "../../images/teamwork6.webp";
import image11 from "../../images/pngegg (3).png"
import icon1 from "../../images/graduated (3).png";
import icon2 from "../../images/knowledge.png";
import icon3 from "../../images/education.png";
import icon4 from "../../images/deep-learning.png";
import icon5 from "../../images/academic.png";
import icon6 from "../../images/machine-learning.png";
import icon7 from "../../images/online-lesson.png";

const Career = () => {
 


const benefits = [
  {
    title: "Large Beautiful Office",
    description: "Enjoy a spacious and beautiful office environment.",
    icon: icon1,
  },
  {
    title: "Great Co-Workers",
    description: "Work with amazing and supportive colleagues.",
    icon: icon2,
  },
  {
    title: "Easy Location",
    description: "Conveniently located office for easy commute.",
    icon: icon3,
  },
  {
    title: "Education Opportunities",
    description: "Access to continuous learning and development.",
    icon: icon4,
  },
  {
    title: "Free Lunch & Snacks",
    description: "Enjoy free meals and snacks every day.",
    icon: icon5,
  },
  {
    title: "Performance Awards",
    description: "Get rewarded for your hard work and achievements.",
    icon: icon6,
  },

  {
    title: "Performance Awards",
    description: "Get rewarded for your hard work and achievements.",
    icon: icon6,
  },

  {
    title: "Performance Awards",
    description: "Get rewarded for your hard work and achievements.",
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
    image:image5,
    content: "This is the content for slide 1.",
  },
  {
    image:image3,
    content: "This is the content for slide 2.",
  },
  {
    image: image4,
    content: "This is the content for slide 3.",
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
      <div
        className="h-screen bg-[#c7d2fe] p-10 sm:p-6 lg:p-10 flex flex-col items-center justify-center lg:flex-row w-full relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(252, 191, 5, 0.2) 0%, transparent 70%), radial-gradient(circle at 20% 80%, rgba(252, 83, 5, 0.15) 0%, transparent 60%)",
        }}
      >
        {/* Background Circular Effects */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-[#6366f1] to-[#4338ca] rounded-full opacity-75 z-0 opacity-20"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-gradient-to-r from-[#6366f1] to-[#4338ca] rounded-full opacity-75 z-0 opacity-20"></div>

        <div className="flex flex-col space-y-6 z-10 px-4 md:px-12 items-center justify-center w-full lg:w-1/2 pt-0 ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#0a0a0a]">
            Upskill your{" "}
            <span className="bg-gradient-to-r from-[#4338ca] to-[#6366f1] text-transparent bg-clip-text">
              career
            </span>{" "}
            journey with Us.
          </h1>

          <p className="text-lg text-sm md:text-xl max-w-xl text-[#0a0a0a]">
            Work at the most dynamic agency & unlock your true potential.
          </p>

          <button className="bg-[#4338ca] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#fc3003] hover:text-white transition w-48">
            Explore Careers
          </button>
        </div>

        <div className="relative pr-20 lg:w-full w-1/2 lg:w-1/3 h-full bottom-2 sm:w-1/3 sm:pt-10 ">
          <img
            fetchpriority="high"
            decoding="async"
            src={image0}
            alt="Illustration"
            className="w-full  max-w-lg h-auto mx-auto z-10 lg:pt-20"
          />
        </div>
      </div>

      <div className="bg-white flex flex-col">
        <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-15 lg:px-28 xl:px-32 m-4 md:m-8 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center  text-[#3730a3] pt-4 sm:pt-5 mb-0">
            Your Life At BAOIAM
          </h1>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 md:p-6 flex items-start bg-white hover:bg-gray-100 transition border border-gray-300 rounded-lg shadow-sm lg:mt-0"
              >
                {/* Image on the Left */}
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-12 h-12 mr-4"
                />

                {/* Content on the Right */}
                <div className="flex flex-col">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8 mx-0 mt-5 lg:mt-2 w-full">
        {/* Left Section */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8 lg:pr-16 xl:pr-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3730a3] mb-4">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3730a3] mb-4">
            Trusted & Popular Job Portal
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg lg:text-xl">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
            ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus
            commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum
            suspendisse ultrices gravida.
          </p>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white py-4 px-2">
        {/* Header Section */}
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold  text-[#3730a3] mb-4">
            Experience Life at BAOIAM
          </div>
          <div className="text-base sm:text-lg md:text-xl text-[#1f0a6b]">
            We're building a workspace environment that promotes growth, both
            personally, professionally & mentally.
          </div>
        </div>
      </div>

      {/* Slide Section */}
      <div className="relative w-full h-80 sm:h-96 overflow-hidden mt-8 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div
          className="flex transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="flex flex-col sm:flex-row w-full h-full">
                {/* Left side - Content */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
                  <p className="text-lg sm:text-xl md:text-2xl text-black text-center sm:text-left">
                    {slide.content}
                  </p>
                </div>
                {/* Right side - Image */}
                <div className="flex-1">
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

        {/* Text Content */}
        <div className="relative z-10 w-full md:w-1/2 text-left p-4">
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

        {/* Image Gallery */}
        <div className="relative z-10 w-full md:w-1/2 grid grid-cols-2 gap-4 p-4">
          <div className="relative">
            <img
              src={image10}
              alt="Team Member 1"
              className="w-full h-auto rounded-lg relative z-20"
            />
          </div>
          <div className="relative">
            <img
              src={image10}
              alt="Team Member 2"
              className="w-full h-auto rounded-lg relative z-20"
            />
          </div>
          <div className="relative">
            <img
              src={image10}
              alt="Team Member 3"
              className="w-full h-auto rounded-lg relative z-20"
            />
          </div>
          <div className="relative">
            <img
              src={image10}
              alt="Team Member 4"
              className="w-full h-auto rounded-lg relative z-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


export default Career;

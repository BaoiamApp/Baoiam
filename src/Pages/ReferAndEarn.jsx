import React from "react";
import { FiShare2, FiCreditCard, FiTrendingUp } from "react-icons/fi";
import { FaBook, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import refer_earn_image from "../assets/Refer/refer1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import refer from "../assets/Refer/refer2.png";
import Faq from "./Faq";

const ReferAndEarn = () => {
  return (
    <>
      {/* section-1 */}
    <div className="flex items-center flex-col-reverse gap-12 mt-8 md:mt-0 md:gap-0 md:flex-row px-8 md:px-20 w-[100vw] h-full md:h-[90vh]">
        <div className="w-full text-center md:text-left md:w-[60%]">
          <h1 className="text-4xl lg:text-6xl mb-4 font-semibold">
            <span className="text-indigo-700"> REFER </span>A FRIEND
          </h1>

          <p className="text-base lg:text-lg md:w-3/4">
            We are on a mission to empower learners to acquire knowledge,
            skills, and competencies & transform the way we learn.
          </p>

          <button class="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 md:px-12 py-3 mt-12 lg:mt-16 text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full hover:text-indigo-600 group">
            <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <IoIosArrowRoundForward size={30} />
            </span>
            <span class="relative">Get Refferal Code</span>
          </button>
        </div>
        <div className="w-full md:w-[40%]">
          <div className="w-full md:w-72 h-96 lg:size-[30rem] rounded-3xl overflow-hidden">
            <img
              src={refer_earn_image}
              className="w-full h-full object-contain"
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="flex flex-col items-center px-4 py-12">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6">
          How <span className="text-indigo-600">BAOIAM Referrals</span> Works ?
        </h1>

        {/* Paragraph */}
        <p className="text-lg lg:text-xl text-center mb-12 max-w-2xl">
          Get a ₹500 cash bonus when your referred business collects the first
          payment. Get a ₹1,000 cash bonus when your referred business
          subscribes to the Growth annual plan of the BAOIAM online website.
        </p>

        {/* Card Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72 h-72">
            <FiShare2 className="text-4xl text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Join BAOIAM</h2>
            <p className="text-center mb-4">
              Create your account on BAOIAM and generate a referral link.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden lg:block">
            <span className="text-3xl text-gray-400">→</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72 h-72">
            <FiCreditCard className="text-4xl text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Refer other friends</h2>
            <p className="text-center mb-4">
              Share the link with your friends. When your friend enrolls, they
              get up to 20% off on programs.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden lg:block">
            <span className="text-3xl text-gray-400">→</span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72 h-72">
            <FiTrendingUp className="text-4xl text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Enjoy cash bonus</h2>
            <p className="text-center mb-4">
              Get rewarded when your referred business completes the process.
            </p>
          </div>
        </div>

        {/* Referral Code Button */}
        <button className="px-6 py-3 mt-4 font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
          Get Referral Code
        </button>
      </div>
        {/* section-3 */}
        <div className="flex flex-col lg:flex-row items-center px-4 py-16 lg:px-16 lg:py-20">
  {/* Text Section */}
  <div className="lg:w-1/2 space-y-8 lg:pr-12">
    {/* Heading */}
    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
      WHY <span className="text-indigo-600">Refer</span> BAOIAM?
    </h2>

    {/* Paragraphs with Icons */}
    <div className="flex items-center space-x-4">
      <FaBook className="text-indigo-600 text-3xl" />
      <h3 className="text-xl font-semibold text-indigo-600">
        Upskilling Courses
      </h3>
    </div>
    <p className="text-gray-600 text-lg lg:text-base leading-relaxed">
      Get access to the best curated courses mentored by top-notch experts.
    </p>

    <div className="flex items-center space-x-4">
      <FaChalkboardTeacher className="text-indigo-600 text-3xl" />
      <h3 className="text-xl font-semibold text-indigo-600">
        Experienced Mentors & High-Quality Content
      </h3>
    </div>
    <p className="text-gray-600 text-lg lg:text-base leading-relaxed">
      Courses crafted just for you that help you enhance your skills and crack your dream job.
    </p>

    <div className="flex items-center space-x-4">
      <FaBriefcase className="text-indigo-600 text-3xl" />
      <h3 className="text-xl font-semibold text-indigo-600">
        100% Placement Assistance
      </h3>
    </div>
    <p className="text-gray-600 text-lg lg:text-base leading-relaxed">
      Learn to crack interviews from our experienced trainers and get placed at top companies.
    </p>
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 mt-10 lg:mt-0">
    {/* Placeholder for Image */}
    <div className="w-full h-72 lg:h-96 rounded-lg overflow-hidden flex items-center justify-center">
      <img
        src={refer}
        alt="Why Refer BAOIAM"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  </div>
</div>

  {/* section-4 */}

   <Faq/>

    </>
  );
};

export default ReferAndEarn;

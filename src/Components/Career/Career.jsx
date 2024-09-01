import React from "react";
import image1 from "../../images/onlineLearning2.avif";
import image2 from "../../images/teamwork00.webp";
import image3 from "../../images/teamwork10.webp";
import image4 from "../../images/teamwork15.jpg";
import image5 from "../../images/teamwork0.webp";
import image7 from "../../images/Biaoam.webp";
import image8 from "../../images/teamwork13.avif";
import image9 from "../../images/teamwork14.avif";
import image10 from "../../images/teamwork6.webp";
import icon1 from "../../images/graduated (3).png";
import icon2 from "../../images/knowledge.png"
import icon3 from "../../images/education.png";
import icon4 from "../../images/deep-learning.png"
import icon5 from "../../images/academic.png";
import icon6 from "../../images/machine-learning.png";
import icon7 from "../../images/online-lesson.png"


const Career = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <header className="p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row items-center lg:justify-between w-full">
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-10 animate-fade-in">
          <h1 className=" text-4xl md:text-4xl sm:text-6xl lg:text-6xl font-bold text-[#1f0a6b] mb-4 sm:mb-6 md:m-4">
            Upskill your{" "}
            <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
              career
            </span>{" "}
            journey with Us.
          </h1>
          <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
            Come, Join us & together we can transform the way the nation learns.
            <br />
            Want to know how BAOIAM can help you?
          </p>
          <button className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:scale-105 transform transition duration-300 ease-in-out shadow-lg text-lg sm:text-xl lg:text-2xl">
            Contact Us
          </button>
        </div>
        <div className="lg:w-50 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden ">
            <img
              src={image1} // Replace with your image path
              alt="Upskill your career"
              className="object-cover w-full h-auto "
            />
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto my-16 flex flex-col lg:flex-row items-center">
        {/* Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:mr-16 sm:ml-10 flex justify-center mb-8 lg:mb-0 px-4 sm:px-8 lg:px-0">
          <img
            src={image2}
            alt="Team working together"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-[#1f0a6b] p-7">
            Join Our Growing{" "}
            <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
              Team
            </span>{" "}
            If You Are
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 pl-7">
            {/* Box 1 */}
            <div className="flex bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-start space-x-4 p-4 sm:p-6">
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <img
                    src={icon2}
                    alt="Icon Description"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    Solution Oriented
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base">
                    If you have an entrepreneurial mindset & want to change
                    hundreds of lives literally.
                  </p>
                </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="flex bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-start space-x-4 p-4 sm:p-6">
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <img
                    src={icon1}
                    alt="Icon Description"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    Self-Motivated
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base">
                    If you have perseverance & dedication to achieve your goals
                    and work best without supervision.
                  </p>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-start space-x-4 p-4 sm:p-6">
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <img
                    src={icon7}
                    alt="Icon Description"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    A Go-Getter & Passionate
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">
                    You have innovative ideas and an urge to implement them.
                    Also, your education lies beyond books.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-16 flex flex-col lg:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-[#1f0a6b]
          pl-7">
            Why{" "}
            <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
              BAOIAM?
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg pl-7">
            We believe in creating a holistic and dynamic workplace where you
            can create, innovate, and ideate & turn them into reality!
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 pl-7">
            {/* Box 1 */}
            <div className="flex bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-start space-x-4 p-4 sm:p-6">
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <img
                    src={icon4}
                    alt="Icon Description"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    Employee-friendly policies
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base">
                    Incentives | Paid leaves | Medical emergency leave
                  </p>
                </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="flex bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-start space-x-4 p-4 sm:p-6">
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <img
                    src={icon5}
                    alt="Icon Description"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    We've got your back
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base">
                    Insurance cover | Family insurance
                  </p>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-start space-x-4 p-4 sm:p-6">
                <div className="bg-white text-pink-600 rounded-full p-3 sm:p-4">
                  <img
                    src={icon6}
                    alt="Icon Description"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    Unparalleled learning opportunities
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base">
                    Best-in-class Mentors and Leaders | Accelerated growth |
                    Timely feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:ml-16 flex justify-center mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
          <img
            src={image7}
            alt="Team working together"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>

      <div className="bg-white">
        {/* Header Section */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-screen-lg mx-auto text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f0a6b] mb-4">
              Experience Life at BAOIAM
            </div>
            <div className="text-base sm:text-lg md:text-xl text-[#1f0a6b]">
              We're building a workspace environment that promotes growth, both
              personally, professionally & mentally.
            </div>
          </div>
        </div>

        {/* Image Section with Gradient Background */}
        <section className="relative py-8 px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            <div
              className="relative bg-gradient-to-br from-teal-300 via-green-300 to-lime-300 p-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={image4}
                alt="Group of individuals in a meeting"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 p-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={image5}
                alt="Individual giving a presentation"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="relative bg-gradient-to-br from-yellow-300 via-red-300 to-orange-300 p-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={image3}
                alt="Individuals working on laptops"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white p-8 w-full mt-8 mb-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:items-center text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f0a6b] mb-6">
              Hear from the{" "}
              <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
                team
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#1f0a6b] mt-4 lg:w-3/4 mx-auto">
              Get a sneak-peek of what happens at BAOIAM
            </p>
          </div>
          <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden h-full">
              <img
                src={image7}
                alt="Team member"
                className="w-full h-48 object-cover sm:h-60 lg:h-64"
              />
              <div className="p-6 flex-1">
                <p className="text-gray-600 italic">
                  BAOIAM has a great work culture &amp; professional environment
                  for its interns. I learned that every company or organisation
                  has its own culture.
                </p>
                <p className="text-gray-700 font-bold mt-4 text-lg sm:text-xl">
                  - Shreya Choudhary
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden h-full">
              <img
                src={image8}
                alt="Team member"
                className="w-full h-48 object-cover sm:h-60 lg:h-64"
              />
              <div className="p-6 flex-1">
                <p className="text-gray-600 italic">
                  My experience working at Baoiam was fantastic. It was an
                  incredible journey from being hired as a testing intern to
                  having worked as a tech manager!
                </p>
                <p className="text-gray-700 font-bold mt-4 text-lg sm:text-xl">
                  - Chitranshu Kankar
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden h-full">
              <img
                src={image9}
                alt="Team member"
                className="w-full h-48 object-cover sm:h-60 lg:h-64"
              />
              <div className="p-6 flex-1">
                <p className="text-gray-600 italic">
                  My experience working at Baoiam was fantastic. It was an
                  incredible journey from being hired as a testing intern to
                  having worked as a tech manager!
                </p>
                <p className="text-gray-700 font-bold mt-4 text-lg sm:text-xl">
                  - Chitranshu Kankar
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden h-full">
              <img
                src={image10}
                alt="Team member"
                className="w-full h-48 object-cover sm:h-60 lg:h-64"
              />
              <div className="p-6 flex-1">
                <p className="text-gray-600 italic">
                  My experience working at Baoiam was fantastic. It was an
                  incredible journey from being hired as a testing intern to
                  having worked as a tech manager!
                </p>
                <p className="text-gray-700 font-bold mt-4 text-lg sm:text-xl">
                  - Chitranshu Kankar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

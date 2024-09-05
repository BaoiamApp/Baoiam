import React from "react";
import image1 from "../../images/onlineLearning2.avif";
import image2 from "../../images/teamwork12.avif";
import image3 from "../../images/teamwork10.webp";
import image4 from "../../images/teamwork15.jpg";
import image5 from "../../images/teamwork0.webp";
import image7 from "../../images/Biaoam.webp";

const Career = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden ">
      <header className="  p-10 w-full flex flex-col lg:flex-row items-center lg:justify-between ">
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-20 animate-fade-in ">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-500 mb-4 pb-5">
            Upskill your{" "}
            <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
              career
            </span>
            <br />
            journey with
            <span className="text-blue-500"> Us</span>.
          </h1>
          <p className="text-white mb-6 pb-5 ">
            Come, join us & together we can transform the way the nation learns.
            <br />
            Want to know how BAOIAM can help you?
          </p>
          <button className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-white py-3 px-6 rounded-full hover:scale-105 transform transition duration-300 ease-in-out shadow-lg">
            Contact Us
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="w-70 h-70 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img
              src={image1}
              alt="Upskill your career"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <section className="bg-white p-8 w-full mt-8 lg:pl-8">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:space-x-16">
          {" "}
          {/* Increased space-x for more gap */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-96 h-72 overflow-hidden pr-26 mr-20 pl-0 ml-0">
              {" "}
              {/* Increased size and padding-right */}
              <img
                src={image2}
                alt="Upskill your career"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  clipPath: "ellipse(80% 80% at 80% 80%)",
                }}
              />
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1f0a6b] mb-6 text-center lg:text-left whitespace-nowrap">
              Join Our Growing{" "}
              <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
                Team
              </span>{" "}
              If You Are
            </h2>
            <div className="flex flex-col space-y-6">
              <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1f0a6b] mb-4">
                  Solution Oriented
                </h3>
                <p className="text-[#03000d]">
                  If you have an entrepreneurial mindset & want to change
                  hundreds of lives.
                </p>
              </div>
              <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1f0a6b] mb-4">
                  Self-Motivated
                </h3>
                <p className="text-[#03000d]">
                  If you have perseverance & dedication to achieve your goals
                  and work best without supervision.
                </p>
              </div>
              <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1f0a6b] mb-4">
                  A Go-Getter & Passionate
                </h3>
                <p className="text-[#03000d]">
                  You have innovative ideas and an urge to implement them. Also,
                  your education lies beyond books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  p-8 w-full mt-8 lg:pl-8">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Left Side - Text Section */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1f0a6b] mb-6 text-center lg:text-left">
              Why{" "}
              <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
                BAOIAM?
              </span>
            </h2>
            <div className="space-y-8">
              <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1f0a6b] mb-4">
                  Employee-friendly policies
                </h3>
                <p className="text-gray-600">
                  Incentives | Paid leaves | Medical emergency leave
                </p>
              </div>
              <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1f0a6b] mb-4">
                  We've got your back
                </h3>
                <p className="text-gray-600">
                  Insurance cover | Family insurance
                </p>
              </div>
              <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1f0a6b] mb-4">
                  Unparalleled learning opportunities
                </h3>
                <p className="text-gray-600">
                  Best-in-class Mentors and Leaders | Accelerated growth |
                  Timely feedback
                </p>
              </div>
            </div>
          </div>
          {/* Right Side - Image Section */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end  pl-20">
            <img
              src={image7}
              alt="Why BAOIAM"
              className="w-full max-w-sm rounded-lg   transition-shadow duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-8 w-full mt-0 lg:pl-8 pt-9">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:items-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1f0a6b] mb-6">
              Experience Life at BAOIAM
            </h2>
            <p className="text-lg lg:text-xl text-[#1f0a6b] mt-4 lg:w-3/4 mx-auto text-center">
              We're building a workspace environment that promotes growth,
              personally, professionally & mentally.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center lg:justify-around gap-6">
            <div className="w-full md:w-1/3 p-4 flex justify-center">
              <div className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 p-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={image5}
                  alt="Group of individuals in a meeting"
                  className="w-50 h-50 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 flex justify-center">
              <div className="relative bg-gradient-to-br from-yellow-300 via-red-300 to-orange-300 p-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={image3}
                  alt="Individual giving a presentation"
                  className="w-50 h-50 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 flex justify-center">
              <div className="relative bg-gradient-to-br from-teal-300 via-green-300 to-lime-300 p-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={image4}
                  alt="Individuals working on laptops"
                  className="w-50 h-50 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  p-8 w-full mt-8 lg:pl-8 mb-12 ">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:items-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1f0a6b] mb-6">
              Hear from the{" "}
              <span className="bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text">
                team
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-[#1f0a6b] mt-4 lg:w-3/4 mx-auto text-center">
              Get a sneak-peek of what happens at BAOIAM
            </p>
          </div>
          <div className="mt-8 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <p className="text-gray-600 italic">
                BAOIAM has a great work culture &amp; professional environment
                for its interns. I learned that every company or organisation
                has its own culture. Its essential to observe thers and learn
                how they enage and interact with co-worker or help them with
                projects and tasks.
              </p>
              <p className="text-gray-700 font-bold mt-4 text-3xl ">
                - Shreya Choudhary
              </p>
            </div>
            <div className="p-6 bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <p className="text-gray-600 italic">
                My experience working at Baoiam was fantastic. It was an
                incredible journey from being hired as a testing intern to
                having worked as a tech manager! There are excellent and
                seasoned executives in the organization who are always willing
                to offer guidance and the necessary mentorship. I gained some
                useful technical experience, but I also picked up a number of
                other important skills. All things considered, this is a good
                place for beginners looking for internship&nbsp;experience.
              </p>
              <p className="text-gray-700 font-bold mt-4 text-3xl ">
                - Chitranshu Kankar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

import { FaSlack, FaGoogle, FaDribbble } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import image10 from "../../assets/ITIE&Entre/teamwork6.webp";

export const CareerSection1 = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-zinc-200 bg-[#fcfdff] px-6 py-12 flex flex-col items-center justify-center lg:flex-row w-full relative overflow-hidden">
        {/* Main Content Section */}
        <main className="flex flex-col lg:flex-row items-center gap-4 justify-center w-11/12 ">
          {/* Text Section */}
          <div className="text-center p-4 lg:w-1/2 lg:text-left ">
            <h3 className="text-4xl dark:text-zinc-100 sm:text-4xl md:text-5xl lg:text-5xl font-bold  text-[#0a0a0a]">
              Career Opportunities at
              <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-transparent bg-clip-text leading-[1.3]">
                {" "}
                BAOIAM
              </span>{" "}
            </h3>{" "}
            <p className="text-sm mt-2 sm:text-lg md:text-xl dark:text-gray-600 text-[#0a0a0a] pt-5">
              At BAOIAM, we're dedicated to transforming education through
              innovative solutions. Join our dynamic team and contribute to
              shaping the future of learning.
            </p>
            {/* Search Bar */}
            {/* <div className="flex flex-col sm:flex-row gap-3 py-8">
              <input
                type="text"
                placeholder="Type"
                className="border text-black border-gray-300 rounded-lg p-3 w-full sm:w-auto flex-grow"
              />
              <button className="bg-black dark:bg-white dark:hover:bg-[#d97706] dark:hover:shadow-lg dark:text-black text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#d97706] hover:shadow-lg mt-2 sm:mt-0">
                Search
              </button>
            </div> */}
            <div className="max-w-xl  mx-auto bg-white flex  rounded-full text-left mt-12 border focus-within:border-gray-900 border-gray-500 lg:h-[60px] md:h-[50px] ">
              <input
                type="text"
                placeholder="Search for career opportunities..."
                className="w-full outline-none bg-transparent lg:text-sm md:text-sm sm:text-sm  text-gray-800 px-4 py-3 text-xs"
              />

              <button
                type="button"
                className="bg-gradient-to-r from-black to-gray-700 hover:bg-gradient-to-l transition-all text-white tracking-wide text-xs lg:text-sm md:text-sm sm:text-sm rounded-full lg:px-10 sm:px-6 md:px-8 py-3 px-2 "
              >
                Search
              </button>
            </div>
          </div>
          {/* Image and Icons Section */}
          <div className="relative aspect-square px-4 lg:w-1/2 h-96 flex justify-center ">
            {/* Yellow Circle and Main Image */}
            <div className="relative rounded-md overflow-hidden h-full w-full flex justify-center">
              {/* <div className='absolute overflow-hidden bg-yellow-300 h-full w-full rounded-full'> 
                </div> */}
              <img
                src={image10} // Replace with your image source
                alt="Job Finder Illustration"
                className="object-cover w-full h-full "
              />
            </div>
            {/* Stats Box */}
            <div className="absolute z-30 bottom-4 right-1/2 translate-x-1/2 py-2 px-4 transition duration-150 mx-auto bg-white rounded-lg shadow-lg  flex items-center hover:scale-105">
              <FiBarChart2 className="text-orange-500 w-8 h-8" />
              <div>
                <p className="lg:text-xl  md:text-xl text-lg font-bold text-gray-800">
                  20K+
                </p>
                <p className="lg:text-sm  md:text-sm text-xs text-gray-500">
                  People got hired
                </p>
              </div>
            </div>

            {/* Floating Icons */}
            {/* <div className='absolute top-[30px] left-12 lg:left-[60px]'>
                <FaSlack className='text-blue-600 bg-white p-1 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
              </div>
              <div className='absolute top-36 left-[-10px] lg:left-[25px]'>
                <FaGoogle className='text-red-600 bg-white p-1 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
              </div>
              <div className='absolute top-[-10px] right-20 lg:right-40 md:right-40 sm:right-40'>
                <FaDribbble className='text-pink-600 bg-white p-1 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
              </div>
              <div className='absolute top-8 right-9 lg:right-10 '>
                <FiBarChart2 className='text-green-600 bg-white p-1 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
              </div> */}
          </div>
        </main>
      </div>
    </>
  );
};

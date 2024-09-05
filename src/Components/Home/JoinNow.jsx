import React from "react";
import onlinelearning from "../../assets/Onlinelearning.gif";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full p-8 bg-white mt-12 dark:bg-[#080529]">
      <div className="w-1/3 mr-6 md:w-auto">
        <img src={onlinelearning} alt="" />
      </div>

      {/* Text and Button on the right */}
      <div className="w-2/3 max-w-md text-center m-0 p-0 sm:mx-6 sm:px-6">
        <h2 className="font-semibold mb-6 mt-16 max-w-[100%] w-full md:w-auto text-2xl sm:text-3xl lg:text-4xl">
          Take the next step toward achieving your personal and professional
          goals with Baoiam.
        </h2>
        <p className="mb-6 max-w-[100%] w-full md:w-auto">
          Join now to receive personalized recommendations from the full Baoiam
          catalog.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;

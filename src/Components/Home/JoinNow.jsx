import React from "react";
import onlinelearning from "../../assets/Onlinelearning.gif";

const Home = () => {
  return (
    <>
     <h1 className='text-3xl my-2 text-center font-bold'>Your Future Starts <span className='underline text-amber-400'> Here</span></h1>
    <div className="dark:bg-black dark:text-white flex flex-col lg:flex-row items-start justify-evenly h-full p-8 mt-12">
      <div className="w-[90%] md:w-auto">
        <img className="w-full h-full rounded-lg" src='https://images.stockcake.com/public/9/2/b/92b03ff4-71c3-4116-9796-5975ea317e11_large/join-now-ad-stockcake.jpg' alt="" />
      </div>

      {/* Text and Button on the right */}
      <div className="md:w-2/3 w-[80%] max-w-md text-center justify-center sm:mx-6 sm:px-6">
        <h2 className="font-semibold mb-6 mt-16 max-w-[100%] w-full md:w-auto text-2xl sm:text-3xl lg:text-4xl">
          Take the next step toward achieving your personal and professional
          goals with Baoiam.
        </h2>
        <p className="mb-6 max-w-[100%] w-full md:w-auto">
          Join now to receive personalized recommendations from the full Baoiam
          catalog.
        </p>
        <button className="px-6 py-3 text-xl bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-xl  text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
          Join Now
        </button>
      </div>
    </div>
    </>
  );
};

export default Home;

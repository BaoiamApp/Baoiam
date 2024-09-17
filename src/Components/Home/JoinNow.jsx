// import React from "react";
// import onlinelearning from "../../assets/Onlinelearning.gif";

// const Home = () => {
//   return (
//     <>
//       <h1 className="text-3xl my-2 text-center font-bold">
//         Your Future Starts <span className=""> Here</span>
//       </h1>
//       <div className="dark:bg-[#080529] px-4 md:px-8 lg:px-16 dark:text-white flex flex-col md:flex-row justify-center my-12 w-full ">
//         <div className="w-full lg:w-[50%] lg:h-[30rem] md:w-[70%]  ">
//           <img
//             className="w-full h-full lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[80%]   rounded-lg object-cover "
//             src="https://images.stockcake.com/public/9/2/b/92b03ff4-71c3-4116-9796-5975ea317e11_large/join-now-ad-stockcake.jpg"
//             alt=""
//           />
//         </div>

//         {/* Text and Button on the right */}
//         <div className="p-6 w-full lg:w-[40%] text-center">
//           <p className="mb-6 px-0 text-lg lg:px-0 w-full md:w-auto text-left">
//             Take the next step toward achieving your personal and professional
//             goals with Baoiam. Join now to receive personalized recommendations
//             from the full Baoiam catalog.
//           </p>
//           <button className="px-6 py-3 font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300 flex flex-start">
//             Join Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



import React from "react";
import onlinelearning from "../../assets/Onlinelearning.gif";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl my-2 text-center font-bold">
        Your Future Starts <span className="">Here</span>
      </h1>
      <div className="dark:bg-[#080529] px-4 md:px-8 lg:px-16 dark:text-white flex flex-col md:flex-row justify-between items-center my-4 w-full space-y-8 md:space-y-0">
        {/* Container for the image */}
        <div className="w-full lg:w-[50%] lg:h-[30rem] md:w-[70%] flex justify-center items-center">
          <img
            className="w-full h-full lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[80%] rounded-lg object-cover"
            src="https://images.stockcake.com/public/9/2/b/92b03ff4-71c3-4116-9796-5975ea317e11_large/join-now-ad-stockcake.jpg"
            alt="Join Now"
          />
        </div>

        {/* Text and Button on the right */}
        <div className="flex justify-center items-center w-full lg:w-[50%]">
          <div className="p-6 text-center lg:text-left">
            <p className="mb-6 text-lg lg:text-xl ">
              Take the next step toward achieving your personal and professional
              goals with Baoiam. Join now to receive personalized
              recommendations from the full Baoiam catalog.
            </p>
            <button className="px-6 py-3 font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


import React, { useEffect } from "react";
import onlinelearning from "../../assets/Onlinelearning.gif";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animes7",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: ".animes7",
          start: "top 100%",
          end: "bottom 90%",
        },
      }
    );
  }, []);

  return (
    <>
      <h1 className="animes7 text-3xl my-2 text-center font-bold">
        Your Future Starts <span className=""> Here</span>
      </h1>
      <div className="animes7 dark:bg-black px-0 md:px-16 dark:text-white flex flex-col md:flex-row items-center justify-center my-12">
        <div className="w-[70%] md:w-1/2 mx-auto">
          <img
            className="w-full h-full rounded-lg"
            src="https://images.stockcake.com/public/9/2/b/92b03ff4-71c3-4116-9796-5975ea317e11_large/join-now-ad-stockcake.jpg"
            alt=""
          />
        </div>

        {/* Text and Button on the right */}
        <div className=" p-6 max-w-md text-center">
          <h2 className="font-semibold px-10 mb-6 mt-16 max-w-[100%] text-xl sm:text-2xl lg:text-3xl">
            Take the next step toward achieving your personal and professional
            goals with Baoiam.
          </h2>
          <p className="mb-6 px-3 max-w-[100%] w-full md:w-auto">
            Join now to receive personalized recommendations from the full
            Baoiam catalog.
          </p>
          <button className="px-6 py-3 font-semibold bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-xl  text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

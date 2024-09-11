import React, { useEffect } from "react";
import { GoGear, GoProjectRoadmap, GoGlobe } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import gsap from "gsap";

const How = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".anime-d9",
        start: "top 100%",
        end: "bottom 90%",
      },
    });
    tl.fromTo(
      ".animes6",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
        stagger:0.3
      }
    );
    tl.fromTo(
      ".anime-i",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
      },
      '-=0.5'
    );

    tl.fromTo(
      ".anime-h3",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
      },
      '-=0.5'
    );
    tl.fromTo(
      ".anime-p3",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
      },
      '-=0.5'
    );


  }, []);

  return (
    <>
      <div className="flex justify-center my-4 anime-d9">
        <div className="w-[80%] xl:w-[85%] text-center">
          <h1 className="animes6 text-[2rem] my-5 font-bold">
            How we <span className="text-indigo-600">Work?</span>
          </h1>
          <p className="animes6 mx-auto w-[80%]">
            We create high-quality courses mentored by experts, offering
            full-time support, live corporate training, placement help, and
            networking opportunities.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:gap-10 lg:grid-cols-5 w-[80%] xl:w-[86%] my-[4rem] mx-auto">
        <IconBox
          icon={<GoGear />}
          title="Expert Guidance"
          text="Boost your confidence with guidance from top experts."
        />
        <IconBox
          icon={<IoPeopleOutline />}
          title="Community Support"
          text="Join discussions and share ideas with a supportive community."
        />
        <IconBox
          icon={<GoProjectRoadmap />}
          title="Live Projects"
          text="Gain practical knowledge by working on live corporate projects."
        />
        <IconBox
          icon={<HiOutlineRocketLaunch />}
          title="Placement Help"
          text="Learn interview skills and land top jobs with our guidance."
        />
        <IconBox
          icon={<GoGlobe />}
          title="Networking & Funding"
          text="Enhance networking and secure financial aid for your business."
        />
      </div>
    </>
  );
};

const IconBox = ({ icon, title, text }) => (
  <div className="p-2 text-center">
    <div className="text-[3rem] flex justify-center mb-4">
      <div className="anime-i rounded-full p-3 text-indigo-600 border-2 border-indigo-600">
        {icon}
      </div>
    </div>
    <h2 className="anime-h3 text-nowrap font-bold mb-4">{title}</h2>
    <p className="anime-p3">{text}</p>
  </div>
);

export default How;

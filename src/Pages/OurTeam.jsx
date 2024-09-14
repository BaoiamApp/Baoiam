import { useEffect } from "react";
import { Advertiseteam } from "../Components/OurTeam Components/Advertiseteam";
import { LeadershipTeam } from "../Components/OurTeam Components/LeadershipTeam";
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import { WebDevTeam } from "../Components/OurTeam Components/WebDevTeam";
import JoinUs from "../Components/OurTeam Components/JoinUs";

export const OurTeam = () => {
  document.title = 'Baoiam - Our Team'
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => { };
  }, []);

  return (
    <div className=" w-11/12 pb-12 mx-auto flex flex-col gap-4">
      <div className="">
        <h1 className="py-4 px-6 lg:p-6 text-center text-4xl lg:text-5xl font-bold">
          A glance to <span className="text-indigo-800">Our team </span>
        </h1>
        <div className="p-2 lg:p-4 w-[80%] lg:w-[60%] mx-auto">
          <p className="text-center text-xs md:text-sm lg:text-lg">
            At BAOIAM, our team drives our vision with passion, creativity, and expertise. From strategic thinkers to hands-on innovators, we are a diverse group committed to shaping the future of education and empowering students globally. Meet the dedicated teams working tirelessly to shape the future of education and empower students worldwide.
          </p>
        </div>
      </div>
      <div className="my-6">
        <TeamSwiper />
      </div>
      <div className="flex flex-col divide-y divi divide-double gap-8">
        <WebDevTeam />
        <Advertiseteam />
        <LeadershipTeam />
      </div>
      <JoinUs />
    </div>
  );
};

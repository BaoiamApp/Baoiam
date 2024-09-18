import { useEffect } from "react";
import { Advertiseteam } from "../Components/OurTeam Components/Advertiseteam";
import { LeadershipTeam } from "../Components/OurTeam Components/LeadershipTeam";
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import { WebDevTeam } from "../Components/OurTeam Components/WebDevTeam";
import JoinUs from "../Components/OurTeam Components/JoinUs";
import gsap from "gsap";

export const OurTeam = () => {
  document.title = "Baoiam - Our Team";
  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      ".t1",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut", stagger: 0.3 }
    );
  }, []);

  return (
    <div className=" w-11/12 pb-12 mx-auto flex flex-col gap-4">
      <div className="">
        <h1 className="t1 p-6 font-serif text-center text-4xl md:text-5xl font-extrabold">
          Our Dedicated <span className="text-indigo-800">Team</span> Members
        </h1>
        <div className="p-4 overflow-hidden w-[80%] lg:w-[60%] mx-auto">
          <p className="t1 text-md text-center md:text-xl">
            At BAOIAM, our team is passionate about transforming education. Each
            member brings a wealth of experience and expertise, working together
            to create impactful learning solutions.
          </p>
        </div>
      </div>
      <div className="my-6">
        <TeamSwiper />
      </div>
      <div className="flex flex-col divide-y divi divide-double gap-8">
        <WebDevTeam />
        <LeadershipTeam />
        <Advertiseteam />
      </div>
      <JoinUs />
    </div>
  );
};

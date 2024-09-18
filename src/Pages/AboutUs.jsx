import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../Components/AboutUs/ContentCard";
import ValueCard from "../Components/AboutUs/ValueCard";
import HeroCard from "../Components/AboutUs/HeroCard";
import ProgressBar from "../Components/AboutUs/ProgressBar";
//import OurTeam from "./OurTeamSlide"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Subcription from "../Components/Home/Subcription";
// import required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import aboutus1 from "../assets/aboutus (1).jpg";
import aboutus2 from "../assets/aboutus (2).jpg";
import aboutus3 from "../assets/aboutus (3).jpg";
import aboutus4 from "../assets/aboutus (4).jpg";
import aboutus5 from "../assets/aboutus (5).jpg";
import Liam from "../assets/Liam.png";
import Henrik from "../assets/Henrik.png";
import Sylphie from "../assets/Sylphie.png";
import {
  FaHandsHelping,
  FaEye,
  FaLightbulb,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineCode, AiOutlineClockCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import OurTeam from "../Components/AboutUs/OurTeam"
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import Testimonials from "../Components/Testmonials/Testimonials";
import Timeline from "../Components/AboutUs/Timeline";
import { Mission, Vision } from "../assets/assets";

const AboutUs = () => {
  document.title = "Baoiam - About Us";
  const [data, setData] = useState(swiperData);

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   return () => { };
  // }, []);

  return (
    <div>
      {/* Section - 1 */}
      <div className="  mx-auto h-fit w-full text-white">
        <div className="relative mx-auto lg:h-[30rem] w-full text-white">
          <div className="h-[22rem] sm:h-[23rem] lg:h-full w-full image-container">
            <img
              className="w-full h-full opacity-90 object-cover"
              src={aboutus4}
              alt="image"
            />
          </div>
          <div className="absolute inset-0 content-overlay bg-gradient-to-b from-black/60 via-black/30 to-black/25 flex flex-col gap-4 lg:gap-6 items-center pl-6 sm:px-8 md:px-24 lg:px-48 xl:px-52 w-[100%] h-[22rem] sm:h-[23rem] md:h-[100%] sm:pt-20  justify-center sm:justify-start text-white">
            {/* bg-#2a272a/30 bg-gradient-to-tr from-gray-800/50 via-gray-600/30 to-black/10*/}
            <div className="rounded-3xl py-1 px-4 w-fit bg-white z-10">
              <span className="text-amber-600 text-xs lg:text-sm font-medium">
                Transforming education with ed-tech ~
              </span>
            </div>
            <h2 className="text-3xl font-bold text-center lg:text-5xl">
              Join Us on a Journey to Be A One In A Million!
            </h2>
            <p className="font-medium text-sm lg:text-lg text-center">
              At BAOIAM, we believe in empowering individuals with the knowledge and skills needed to stand out in the ever-evolving professional landscape. Our platform offers high-quality, industry-driven courses tailored to help learners achieve their personal and professional goals.
            </p>

          </div>

        </div>
      </div>

      {/* Section - 2 */}
      <div className="animediv1 w-full px-4 my-12 lg:my-16 xl:my-24 xl:px-20">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center mb-8 lg:mb-12 font-semibold">
          Our Mission
        </h2>

        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-[100%] h-64 md:w-[40%] px-4 lg:px-0">
            <img
              src={Mission}
              alt="image"
              className="w-full h-full lg:h-96 rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />

          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 sm:px-8 lg:px-12">
            <span className="text-indigo-600 font-medium text-xs lg:text-sm">Unlocking potential, one learner at a time.</span>
            <h4 className="mt-2 text-lg lg:text-2xl font-semibold">Empowering individuals with transformative education to reach their full potential and shape a better future.</h4>

            <p className="text-xs lg:text-base text-slate-600 mt-4">Our mission is to empower individuals with transformative educational experiences that unlock their full potential, enabling them to contribute meaningfully to society and shape a brighter future. We believe that education is the key to unlocking human potential.</p>
          </div>
        </div>
      </div>


      <div className="animediv1 w-full px-4 mt-16 lg:mt-44 lg:mb-28 xl:mt-52 xl:mb-32 xl:px-20">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center mb-8 lg:mb-12 font-semibold">
          Vision
        </h2>

        <div className="flex flex-col md:flex-row-reverse items-center w-full">
          <div className="w-[100%] h-64 md:w-[40%] px-4 lg:px-0">
            <img
              src={Vision}
              alt="image"
              className="w-full h-full md:h-72 lg:h-96 rounded-tl-2xl rounded-br-2xl object-cover object-left shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />

          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 sm:px-8 lg:px-12">
            <span className="text-indigo-600 font-medium text-xs lg:text-sm">Empowering the next generation with the skills and knowledge they need to succeed.</span>
            <h4 className="mt-2 text-lg lg:text-2xl font-semibold">Future-Proofing Education: Preparing Learners for Tomorrow's World</h4>

            <p className="text-xs lg:text-base text-slate-600 mt-4"> In a rapidly evolving world, education must adapt to meet the challenges of tomorrow. We are committed to providing innovative learning solutions that equip learners with the skills and knowledge they need to thrive in the future. Our programs are designed to foster critical thinking, creativity, problem-solving, and adaptability, ensuring that students are well-prepared for the challenges and opportunities that lie ahead.</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col items-center gap-4 mx-auto px-4 sm:px-16 py-20 xl:px-20">
        <div className="w-full text-center">
          <h2 className="font-bold text-3xl lg:text-4xl">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4 lg:gap-x-0 lg:gap-4 xl:gap-0 w-full">
          <ValueCard
            Icon={FaHandsHelping}
            title="Quality Education"
            description="Providing top-notch content curated by industry experts."
          />
          <ValueCard
            Icon={FaEye}
            title="Inclusivity"
            description="Ensuring access to education for learners from all walks of life."
          />
          <ValueCard
            Icon={FaLightbulb}
            title="Innovation"
            description="Continuously improving and adapting our courses to meet industry demands."
          />
          <ValueCard
            Icon={FaChartLine}
            title="Student Success"
            description="Prioritizing the success of our learners through personalized learning paths and career support."
          />
        </div>

      </div>



      {/* how it started */}

      <Timeline />

      {/* team */}

      <TeamSwiper />


      {/* USP */}

      <div className="flex flex-col items-start gap-4 lg:py-10 mb-10 mx-auto p-8 lg:pl-20 lg:pr-20">
        <div className="w-full text-center">
          <h2 className="font-bold text-3xl lg:text-4xl">What Makes Us Different</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 w-full">
          <ValueCard
            Icon={FaHandsHelping}
            title="Expert-Led Learning"
            description="Every course is designed and taught by industry leaders."
          />
          <ValueCard
            Icon={FaEye}
            title="Career-Focused Curriculum"
            description="Our courses are tailored to equip you with the skills needed to land your dream job."
          />
          <ValueCard
            Icon={FaLightbulb}
            title="Flexible Learning Paths"
            description="Learn at your own pace, from anywhere, anytime"
          />
          {/* <ValueCard
            Icon={GiTeamIdea}
            title="Synergy"
            description="Workplace synergy through teamwork cultivates a culture of collaboration."
          /> */}
          <ValueCard
            Icon={FaChartLine}
            title="Affordable Education"
            description="High-quality courses without the heavy price tag."
          />
          {/* <ValueCard
            Icon={FaMedal}
            title="Excellence"
            description="Striving for the highest standards in everything we do."
          /> */}
        </div>
      </div>

      {/* testimonial */}
      <Testimonials />

      {/* Section 6 */}
      {/* <OurTeam /> */}
      <Subcription />
    </div>
  );
};

export default AboutUs;

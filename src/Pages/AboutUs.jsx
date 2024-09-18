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
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  document.title = "Baoiam - About Us";
  const [data, setData] = useState(swiperData);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => { };
  }, []);

  return (
    <div>
      {/* Section - 1 */}
      <div className="  mx-auto h-fit md:h-screen w-full text-white">
        <div className="relative mx-auto h-fit md:h-screen w-full text-white">
          <div className="h-[22rem] sm:h-[23rem] md:h-[70%] w-full image-container">
            <img
              className="w-full h-full opacity-90 object-cover"
              src={aboutus4}
              alt="image"
            />
          </div>
          <div className="absolute inset-0 content-overlay bg-gradient-to-r from-black/30 via-black/20 to-black/10 flex flex-col gap-4 sm:gap-6 items-center pl-6 sm:px-8 md:px-24 lg:px-48 xl:px-52 w-[100%] h-[22rem] sm:h-[23rem] md:h-[70%] sm:pt-20  justify-center sm:justify-start text-white">
            {/* bg-#2a272a/30 bg-gradient-to-tr from-gray-800/50 via-gray-600/30 to-black/10*/}
            {/* <div className="rounded-3xl py-2 px-4 w-fit bg-white z-10">
              <h1 className="text-amber-600 font-medium">
                Transforming education with ed-tech ~
              </h1>
            </div> */}
            <h2 className="text-2xl font-bold text-center md:text-4xl sm:text-3xl">
              Join Us on a Journey to Be A One In A Million!
            </h2>
            <p className="font-semibold text-center">
              At BAOIAM, we believe in empowering individuals with the knowledge and skills needed to stand out in the ever-evolving professional landscape. Our platform offers high-quality, industry-driven courses tailored to help learners achieve their personal and professional goals.
            </p>

            {/* <button className="flex justify-center items-center gap-1 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 px-6 md:px-8 py-2 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">

              Our Team
              <FaArrowRight className="font-normal" size={18} />
            </button> */}
          </div>
          {/* <div className="relative -bottom-[20rem] mt-1 md:absolute mx-auto mb-40 sm:mt-3 md:mt-auto sm:-bottom-40 md:top-auto md:-bottom-48 md:-inset-x-0 sm:grid sm:grid-cols-3 md:grid-cols-5 justify-center transform -translate-y-1/2 w-full text-black font-bold text-center flex flex-col md:flex md:flex-row items-center sm:gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6">
            <div className="sm:col-span-3 grid grid-cols-2 sm:flex sm:justify-between sm:items-center gap-4 md:gap-6 lg:gap-8">
              <HeroCard Icon={MdDesignServices} title="UI/UX Design Services" />
              <HeroCard Icon={FaBusinessTime} title="Business Consultation" />
              <HeroCard Icon={AiOutlineCode} title="Website Development" />
              <HeroCard Icon={BiSupport} title="Support Management" />
              <HeroCard Icon={RiBarChartBoxLine} title="Market Research" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Section - 2 */}
      <div className="animediv1 flex flex-col md:flex-row gap-8 sm:mt-32 md:mt-0 px-4 sm:px-6 md:px-10 lg:px-20 pb-20 w-full items-stretch">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full md:ml-6">
          <div className="w-full h-64 sm:h-96 md:h-full pt-8 rounded-b-3xl mb-2 px-2 border-slate-400">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-full lg:w-[400px] lg:h-[350px] rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-15px_#4338ca] sm:shadow-[-15px_-20px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 items-start w-full md:w-1/2 lg:w-1/2 mr-0 lg:mr-8 px-4 sm:px-6 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Mission
          </h2>
          <p className="text-base sm:text-lg">
            Our mission is to democratize education by making high-quality learning accessible to everyone, helping learners achieve their true potential and lead fulfilling careers.
          </p>
          {/* <button className="flex justify-center items-center bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 px-4 sm:px-6 md:px-8 lg:px-8 py-2 lg:py-4 sm:py-3 text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button> */}
        </div>
      </div>

      {/* section- 2 b */}
      <div className="flex flex-col md:flex-row gap-8 sm:mt-32 md:mt-0 px-4 sm:px-6 md:px-10 lg:px-20 pb-20 w-full items-stretch">


        <div className="flex flex-col gap-8 items-start w-full md:w-1/2 lg:w-1/2 mr-0 lg:mr-8 px-4 sm:px-6 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Vision
          </h2>
          <p className="text-base sm:text-lg">
            We envision a world where everyone has the opportunity to grow and succeed, regardless of their background, through innovative learning solutions
          </p>
          {/* <button className="flex justify-center items-center bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 px-4 sm:px-6 md:px-8 lg:px-8 py-2 lg:py-4 sm:py-3 text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button> */}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full md:ml-6">
          <div className="w-full h-64 sm:h-96 md:h-full rounded-b-3xl mb-2 px-2 border-slate-400">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-full lg:w-[400px] lg:h-[350px] rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-15px_#4338ca] sm:shadow-[-15px_-20px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      {/* <div className="flex flex-col md:flex-row gap-8 p-4 sm:p-6 md:p-10 mb-16 justify-center items-center mx-auto"> */}
      {/* Text Section */}
      {/* <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2 pr-0 md:pr-10 lg:pl-10 pl-4">
          <h3 className="text-amber-600 text-xl sm:text-2xl font-semibold">
            Get to Know Us
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Baoiam—a powerhouse of knowledge, fueling success
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            At Boaiam, we believe in empowering learners in every dynamic
            situation. With highly in-demand courses, we’re shaping careers
            through expertly crafted programs that seamlessly blend theory with
            hands-on experience. we’re here to sharpen your skills from the
            ground up. Our dedicated team supports you at every stage, ensuring
            you can rely on us for guidance and assistance whenever needed.
          </p>
          <div className="flex gap-8">
            <div className="flex gap-4 items-center">
              <div className="text-indigo-700 p-4 bg-gray-200 rounded-xl">
                <AiOutlineClockCircle className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg lg:text-xl md:text-2xl sm:text-2xl text-slate-600">
                  5
                </h3>
                <p className="text-slate-500 text-xs lg:text-lg md:text-sm sm:text-base">
                  Years of Experience
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-indigo-700 p-4 bg-gray-200 rounded-xl">
                <FaUsers className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg lg:text-xl md:text-2xl sm:text-2xl text-slate-600">
                  45
                </h3>
                <p className="text-slate-500 text-xs lg:text-lg md:text-sm sm:text-base">
                  Team Members
                </p>
              </div>
            </div>
          </div>
        </div> */}

      {/* Image Section */}
      {/* <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full md:w-[80%]">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-64 sm:h-72 md:h-96 rounded-tl-2xl rounded-br-2xl object-cover shadow-[10px_15px_#4338ca] sm:shadow-[15px_20px_#4338ca] lg:shadow-[20px_25px_#4338ca]"
            />
          </div>
        </div>
      </div> */}


      {/* Section 4 */}
      <div className="flex flex-col items-center gap-4 lg:py-10 mb-10 mx-auto p-8 lg:pl-20 lg:pr-20">
        <div className="w-full text-center">
          <h2 className="font-bold text-3xl lg:text-4xl">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
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

      <div className="flex flex-col items-start gap-4 lg:py-10 mb-10  mx-auto p-8 lg:pl-20 lg:pr-20">
        <div className="w-full text-center">
          <h2 className="font-bold text-3xl lg:text-4xl">What Makes Us Different</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
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

      {/* Section 5 */}
      {/* <div className="flex flex-col md:flex-row  lg:flex-row mx-auto gap-8 p-6 md:p-10 justify-center items-center max-w-7xl"> */}
      {/* Image Section */}
      {/* <div className="w-full lg:w-1/2  pl-0 lg:pl-20 mb-6 lg:mb-0">
          <img
            src={aboutus5}
            alt="image"
            className="w-full h-full sm:w-[750px] sm:h-[350px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[490px] rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-15px_#4338ca] lg:shadow-[-15px_-20px_#4338ca]"
          />
        </div> */}

      {/* Text and Progress Bars Section */}
      {/* <div className="flex flex-col items-start justify-center gap-2 w-full lg:w-1/2">
          <h3 className="text-amber-600 text-xl sm:text-2xl font-semibold">
            Our profile
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Key attributes that Define us: commitment, quality and expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            What Sets Us Apart is our strong commitment to our work. We believe
            in growing and learning together, even through changing times. Our
            diverse expertise across various skills is what makes us the
            preferred choice. Additionally, the exceptional standard of quality
            we maintain at work is reflects our professionalism.
          </p> */}

      {/* Progress Bars */}
      {/* <div className="w-full text-slate-800 mx-auto mt-4 space-y-4">
            <ProgressBar percentage={86} title="UI/UX Design" />
            <ProgressBar percentage={80} title="Business Consultation" />
            <ProgressBar percentage={78} title="Website Development" />
            <ProgressBar percentage={83} title="Market Research" />
          </div>
        </div>
      </div> */}

      {/* Section 6 */}
      {/* <OurTeam /> */}
      <Subcription />
    </div>
  );
};

export default AboutUs;

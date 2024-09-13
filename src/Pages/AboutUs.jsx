import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../Components/AboutUs/ContentCard";
import ValueCard from "../Components/AboutUs/ValueCard";
import HeroCard from "../Components/AboutUs/HeroCard";
import ProgressBar from "../Components/AboutUs/ProgressBar";
import ServicesTab from "../Components/AboutUs/ServicesTab";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
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

const AboutUs = () => {
  const [data, setData] = useState(swiperData);
  //   const [content, setContent] = useState(
  //     "In 2019, Baoiam was founded in Noida. The inception of our consulting firm was marked by an innovative spirit and a commitment to deliver superior solutions. Throughout this journey, we forged a robust foundation emphasizing service quality and steadfast partnerships. Through unwavering dedication, we successfully cultivated meaningful client relationships and achieved sustainable growth. That year proved to be a historic milestone in shaping our corporate identity, setting standards for excellence, and reaffirming our commitment to client success through an innovative consultative approach."
  //   );
  //   const [activeYear, setActiveYear] = useState("2019");

  //   const handleDivClick = (year) => {
  //     setActiveYear(year); // Set the clicked year as active

  //     switch (year) {
  //       case "2019":
  //         setContent(
  //           "In 2019, Baoiam was founded in Noida. The inception of our consulting firm was marked by an innovative spirit and a commitment to deliver superior solutions. Throughout this journey, we forged a robust foundation emphasizing service quality and steadfast partnerships. Through unwavering dedication, we successfully cultivated meaningful client relationships and achieved sustainable growth. That year proved to be a historic milestone in shaping our corporate identity, setting standards for excellence, and reaffirming our commitment to client success through an innovative consultative approach."
  //         );
  //         break;
  //       case "2020":
  //         setContent(
  //           "In 2020, we expanded our team and services, reaching new markets. Fueled by a commitment to innovation, Lunaria navigated challenges with resilience, expanding its services and client base. The firm's adaptability and visionary approach positioned it as a trusted partner, providing cutting-edge solutions and strategic insights amidst the evolving business environment. Lunaria's journey in 2020 shows its dedication to excellence and its important role in shaping the consulting landscape, this will influence Lunaria's sustainable development in the future."
  //         );
  //         break;
  //       case "2021":
  //         setContent(
  //           "In the pivotal year of 2021, Baoiam Consulting Firm navigated the unprecedented challenges brought about by the global pandemic with remarkable resilience and strategic acumen. As the world faced uncertainty, Lunaria emerged as a steadfast partner, offering clients innovative solutions and strategic insights. The Lunaria consulting firm adaptability and visionary approach not only mitigated the impact of the crisis, but positioned Lunaria as a transformative force in the consulting landscape, exemplifying Lunaria's commitment to excellence and client-centric strategies during these critical times."
  //         );
  //         break;
  //       case "2022":
  //         setContent(
  //           "In the aftermath of the pandemic in 2022, Baoiam Consulting Firm embarked on a robust business recovery journey. With a resilient spirit and strategic vision, the firm focused on rebuilding and strengthening its operations. Implementing innovative solutions, Lunaria played a pivotal role in guiding clients through the recovery phase, offering tailored strategies for renewed success. The post-pandemic era saw Lunaria's commitment to excellence shine, as it became a trusted partner in navigating the evolving business landscape, exemplifying adaptability, resilience, and a forward-thinking approach in sustainable client fostering."
  //         );
  //         break;
  //       case "2023":
  //         setContent(
  //           "In 2023, Baoiam Consulting Firm has emerged as a standout leader in the industry, distinguished for its exceptional performance and client satisfaction. Renowned for innovative strategies, Lunaria continues to set the standard for excellence. With a dedicated team and a client-centric ethos, the firm consistently delivers transformative solutions. Lunaria's commitment to pushing boundaries and exceeding expectations positions it as a trailblazer, earning accolades and solidifying its status as one of the top consulting firms, driving success for clients in a rapidly evolving business landscape."
  //         );
  //         break;
  //       default:
  //         setContent("Click on a year to see the journey.");
  //         break;
  //     }
  //   };

  // const cardsData = [
  //   {
  //     imageSrc: Liam,
  //     title: "Liam Anderson",
  //     content: "CEO & Founder",
  //   },
  //   {
  //     imageSrc: Sylphie,
  //     title: "Sylphie Young",
  //     content: "VP of Finance & Marketing",
  //   },
  //   {
  //     imageSrc: Henrik,
  //     title: "Henrik Johansson",
  //     content: "VP of Product Development",
  //   },
  //   {
  //     imageSrc: Liam,
  //     title: "Liam Anderson",
  //     content: "CEO & Founder",
  //   },
  // ];

  // const slides = [
  //   {
  //     imgSrc: aboutus1,
  //   },
  //   {
  //     imgSrc: aboutus2,
  //   },
  //   {
  //     imgSrc: aboutus3,
  //   },
  //   {
  //     imgSrc: aboutus4,
  //   },
  //   {
  //     imgSrc: aboutus5,
  //   },
  // ];

  return (
    // <div className="dark:bg-black dark:text-white">
    <div>
      {/* Section - 1 */}
      <div className="mx-auto h-fit sm:h-screen w-full text-white">
        <div className="relative mx-auto h-screen w-full text-white">
          <div className="h-[55%] md:h-[70%] w-full image-container">
            <img
              className="w-full h-full object-cover"
              src={aboutus4}
              alt="image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black content-overlay flex flex-col gap-4 sm:gap-6 items-start pl-6 sm:px-8 md:px-24 lg:px-48 xl:px-72 w-[100%] h-[55%] md:h-[70%] pt-20 justify-start opacity-60 text-white">
            {/* bg-#2a272a/30 */}
            <div className="rounded-3xl py-2 px-4 w-fit bg-white z-10">
              <p className="text-amber-600 font-medium">
                We are an EdTech Organization ~
              </p>
            </div>
            <h2 className="text-2xl font-bold md:text-4xl sm:text-3xl">
              Think Big. We make IT, possible!
            </h2>
            <p className="font-medium">
              We place you at the centre of information networks to advance your
              strategic interests.
            </p>
            <button className="flex justify-center items-center gap-1 bg-gradient-to-r from-indigo-700 to-indigo-500 px-6 md:px-8 py-2 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">
              Our Team
              <FaArrowRight className="font-normal" size={18} />
            </button>
          </div>
          <div className="absolute mx-auto top-[99%] mb-40 sm:top-[85%] md:inset-x-0 md:top-auto gap-4 sm:grid sm:grid-cols-3 md:grid-cols-5 justify-center transform -translate-y-1/2 w-full text-black font-bold text-center flex flex-col md:flex md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6">
            {/* <div className="absolute mx-auto sm:inset-x-0 transform -translate-y-1/2 w-full text-black font-bold text-center flex items-center justify-center gap-8"> */}
            <div className="sm:col-span-3 sm:flex sm:justify-between sm:items-center gap-4 md:gap-6 lg:gap-8">
              <HeroCard Icon={MdDesignServices} title="UI/UX Design Services" />
              <HeroCard Icon={FaBusinessTime} title="Business Consultation" />
              <HeroCard Icon={AiOutlineCode} title="Website Development" />
            </div>
            <div className="sm:col-span-3 sm:flex justify-evenly gap-4 md:gap-6 lg:gap-8">
              <HeroCard Icon={BiSupport} title="Support Management" />
              <HeroCard Icon={RiBarChartBoxLine} title="Market Research" />
            </div>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex gap-4 sm:mt-32 md:mt-0 px-20 pb-20 w-full items-stretch">
        <div className="w-full md:w-1/2 h-full ml-6">
          <div className="w-full md:w-[85%] h-3/4 rounded-b-3xl mb-2 px-2 border-slate-400">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-full rounded-tl-2xl rounded-br-2xl lg:w-full object-cover shadow-[-15px_-20px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>
          {/* <div className="w-1/2 pl-20">
          <div className="w-full md:w-[80%]">
            
          </div>
        </div> */}
          {/* <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              el: ".swiper-pagination-bullet-custom",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full dark:bg-black dark:text-white"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="text-center text-[18px] flex justify-center items-center"
              >
                <div className="absolute flex top-16 flex-col border-3xl max-w-[90%] h-[100%] rounded-b-3xl border-slate-400 mb-12">
                  <div className="relative w-full md:w-[90%] h-[70%] rounded-b-3xl mb-2 px-2 border-slate-400">
                    <img
                      src={slide.imgSrc}
                      alt="image"
                      className="block w-full h-full object-cover rounded-b-2xl shadow-lg"
                    />
                  </div>

                  <div className="absolute top-7 left-7 w-full  md:w-[88%] h-[70%] z-10 border-indigo-700 border-[3px] rounded-2xl"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>

        <div className="flex flex-col gap-8 justify-center items-start w-1/2 mr-8">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Students Success Is Our Focus
          </h2>
          <p className="">
            Unlock your potential with our expertly designed courses, tailored
            to provide you with the skills and knowledge needed for success.
            From practical strategies to in-depth expertise, our courses are
            crafted to empower your growth and help you achieve your goals with
            confidence.
          </p>
          <button className="flex justify-center items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-6 md:px-6 lg:px-8 py-3 lg:py-4 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex mx-auto gap-8 p-10 mb-16 justify-center items-center">
        <div className="flex flex-col items-start justify-center pr-10 gap-4 ml-10 w-1/2">
          <h3 className="text-amber-600 text-2xl font-semibold">About Us</h3>
          <h2 className="text-4xl font-semibold">
            The Easiest Way to Manage Personal Finances
          </h2>
          <p className="text-lg text-slate-600">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="flex gap-8">
            <div className="flex gap-4">
              <div className="text-indigo-700 p-4 w-fit bg-gray-200 rounded-xl">
                <AiOutlineClockCircle size={32} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl text-slate-600">5</h3>
                <p className="text-slate-500">Years of Experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-indigo-700 p-4 w-fit bg-gray-200 rounded-xl">
                <FaUsers size={32} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl text-slate-600">45</h3>
                <p className="text-slate-500">Team Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full md:w-[80%]">
            <img
              src={aboutus5}
              alt="image"
              className="w-full md:w-72 h-72 rounded-tl-2xl rounded-br-2xl lg:w-full lg:h-96 object-cover shadow-[15px_20px_#4338ca] lg:shadow-[20px_25px_#4338ca]"
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex items-center gap-4 py-10 mb-10 max-w-6xl mx-auto">
        <div className="flex flex-col mt-6 gap-8 mb-10 max-w-xs">
          <h2 className="text-amber-600 font-medium text-xl">Our Values</h2>
          <h3 className="text-4xl font-semibold">
            The Values We Maintain At Work
          </h3>
          <p className="text-lg text-slate-500">
            We are a team with a variety of skills, each member contributes
            their expertise, and works professionally among members and clients.
          </p>
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 w-fit px-6 md:px-8 py-4 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            Icon={FaHandsHelping}
            title="Dedication"
            description="Dedication at work is the key to sustained excellence and success."
          />
          <ValueCard
            Icon={FaEye}
            title="Clarity"
            description="Clear objectives at work pave the way for strategic success."
          />
          <ValueCard
            Icon={FaLightbulb}
            title="Innovation"
            description="Embracing innovation fosters creativity and growth."
          />
          <ValueCard
            Icon={GiTeamIdea}
            title="Synergy"
            description="Workplace synergy through teamwork cultivates a culture of collaboration."
          />
          <ValueCard
            Icon={FaChartLine}
            title="Improvement"
            description="Commitment to improvement fuels a culture of continuous success."
          />
          <ValueCard
            Icon={FaMedal}
            title="Excellence"
            description="Striving for the highest standards in everything we do."
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex mx-auto gap-4 p-10 justify-center items-center">
        <div className="w-1/2 pl-20">
          <div className="w-full md:w-[80%]">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-full md:w-60 rounded-tl-2xl rounded-br-2xl lg:w-full object-cover shadow-[-15px_-20px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center pr-10 gap-4 w-1/2">
          <h3 className="text-amber-600 text-2xl font-semibold">Who We Are</h3>
          <h2 className="text-4xl font-semibold">
            Get Expert Advice And Start Saving
          </h2>
          <p className="text-lg text-slate-600">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="w-full text-slate-800 mx-auto mt-6 space-y-6">
            <ProgressBar percentage={86} title="UI/UX Design" />
            <ProgressBar percentage={80} title="Business Consultation" />
            <ProgressBar percentage={78} title="Website Development" />
            <ProgressBar percentage={83} title="Market Research" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      {/* <div className="flex mx-auto gap-4 mb-16 justify-center items-center">
        <div className="flex flex-col items-start gap-4 pt-16 ml-10 p-10 w-1/2">
          <h2 className="text-4xl font-bold">
            Our Vision for Better Result for Your Success
          </h2>
          <h3 className="text-2xl font-semibold">Vision We have</h3>
          <p className="text-lg">
            Our vision is to be the cornerstone of client success by providing
            innovative and sustainable consulting solutions.
          </p>
          <h3 className="text-2xl font-semibold">The path we took</h3>
          <p className="text-lg mb-4">
            Our mission is to guide businesses in realizing their full potential
            through customized strategies and high-quality services. Committed
            to building strong partnerships, we empower growth and create a
            positive impact in every facet of our consulting journey.
          </p>
          <button className="bg-amber-400 text-white rounded-md p-4 font-semibold text-lg">
            Collaborate with us
          </button>
        </div>
        <div className="w-1/2">
          <div className="relative overflow-hidden rounded-b-2xl mb-2 px-2 max-w-[90%] h-full border-slate-400">
            <div className="absolute inset-0 bg-indigo-500 rounded-b-2xl mix-blend-multiply"></div>
            <img
              src={aboutus5}
              alt="image"
              className="block max-w-full h-[60%] object-contain rounded-b-2xl shadow-lg"
            />
            <div className="absolute inset-0 mt-2 flex mx-6 items-center justify-center mb-4">
              <p className="text-4xl text-white font-semibold">
                "In the garden of achievement, diligent effort blossoms dreams
                into reality."
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 3 */}
      {/* <div className="flex mx-auto bg-indigo-500 text-white gap-4 justify-start items-center">
        <div className="flex flex-col items-start gap-8 ml-10 p-10 w-1/2">
          <h2 className="text-4xl font-bold">Baoiam Journey Through Time</h2>
          <div className="flex gap-6 text-lg font-semibold">
            {["2019", "2020", "2021", "2022", "2023"].map((year) => (
              <div
                key={year}
                onClick={() => handleDivClick(year)}
                className={`flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20 ${
                  activeYear === year ? "bg-amber-300" : ""
                }`} 
              >
                <p>{year}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mb-4">{content}</p>
        </div>

        <div className="w-1/2 py-10">
          <div className="flex flex-col max-w-[90%] h-[70%] rounded-3xl mb-12 px-2">
            <div className="relative">
              <img
                src={aboutus5}
                alt="image"
                className="block max-w-full h-[60%] object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute top-10 left-10 w-[100%] h-[100%] z-10 border-amber-300 border-2 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div> */}

      <ServicesTab/>
      {/* Section 6 */}
      <div className="text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold">
        Our Team
      </div>
      <div className="p-6">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className=" md:h-[350px] w-full md:w-[90%] m-auto rounded-lg  flex flex-col justify-center items-center gap-4"
        >
          {data?.map((el) => {
            return (
              <SwiperSlide
                className="relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md h-[160px] w-[180px] md:h-[330px] md:w-[130px] flex flex-col justify-center items-center gap-4"
                key={el.id}
              >
                <img
                  className="h-full rounded-md  w-full"
                  src={el.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-md">
                  <h3 className="text-center text-white font-sans font-medium text-sm md:text-lg">
                    {el.name}
                  </h3>
                  <p className="text-center text-gray-300 text-xs md:text-sm">
                    {el.role}
                  </p>
                  <div className="py-2 flex items-center justify-center gap-2">
                    <FaLinkedin className="text-blue-600 text-xl text-center" />
                    <FaXTwitter className="text-black font-bold" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* <div className="flex flex-col p-16 py-20 gap-12">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-xl font-semibold text-amber-600">Our Team</p>
          <h2 className="text-4xl font-bold">Meet The Expert</h2>
        </div>
        <div className="flex flex-wrap justify-between px-2">
          {cardsData.map((card, index) => (
            <ContentCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
        <div className="flex justify-center gap-10">
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 px-6 md:px-8 py-4 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button>
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent border-2 border-gradient-to-r from-indigo-700 to-indigo-500 px-6 md:px-8 py-4 dark:text-white dark:border-white overflow-hidden font-medium border border-indigo-600 rounded-full">
            See Other Members
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;

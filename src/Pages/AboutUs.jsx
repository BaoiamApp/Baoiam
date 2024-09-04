import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../Components/AboutUs/ContentCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
} from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";

const AboutUs = () => {
  const [content, setContent] = useState(
    "In 2019, Baoiam was founded in Noida. The inception of our consulting firm was marked by an innovative spirit and a commitment to deliver superior solutions. Throughout this journey, we forged a robust foundation emphasizing service quality and steadfast partnerships. Through unwavering dedication, we successfully cultivated meaningful client relationships and achieved sustainable growth. That year proved to be a historic milestone in shaping our corporate identity, setting standards for excellence, and reaffirming our commitment to client success through an innovative consultative approach."
  );
  const [activeYear, setActiveYear] = useState("2019");

  const handleDivClick = (year) => {
    setActiveYear(year); // Set the clicked year as active

    switch (year) {
      case "2019":
        setContent(
          "In 2019, Baoiam was founded in Noida. The inception of our consulting firm was marked by an innovative spirit and a commitment to deliver superior solutions. Throughout this journey, we forged a robust foundation emphasizing service quality and steadfast partnerships. Through unwavering dedication, we successfully cultivated meaningful client relationships and achieved sustainable growth. That year proved to be a historic milestone in shaping our corporate identity, setting standards for excellence, and reaffirming our commitment to client success through an innovative consultative approach."
        );
        break;
      case "2020":
        setContent(
          "In 2020, we expanded our team and services, reaching new markets. Fueled by a commitment to innovation, Lunaria navigated challenges with resilience, expanding its services and client base. The firm's adaptability and visionary approach positioned it as a trusted partner, providing cutting-edge solutions and strategic insights amidst the evolving business environment. Lunaria's journey in 2020 shows its dedication to excellence and its important role in shaping the consulting landscape, this will influence Lunaria's sustainable development in the future."
        );
        break;
      case "2021":
        setContent(
          "In the pivotal year of 2021, Baoiam Consulting Firm navigated the unprecedented challenges brought about by the global pandemic with remarkable resilience and strategic acumen. As the world faced uncertainty, Lunaria emerged as a steadfast partner, offering clients innovative solutions and strategic insights. The Lunaria consulting firm adaptability and visionary approach not only mitigated the impact of the crisis, but positioned Lunaria as a transformative force in the consulting landscape, exemplifying Lunaria's commitment to excellence and client-centric strategies during these critical times."
        );
        break;
      case "2022":
        setContent(
          "In the aftermath of the pandemic in 2022, Baoiam Consulting Firm embarked on a robust business recovery journey. With a resilient spirit and strategic vision, the firm focused on rebuilding and strengthening its operations. Implementing innovative solutions, Lunaria played a pivotal role in guiding clients through the recovery phase, offering tailored strategies for renewed success. The post-pandemic era saw Lunaria's commitment to excellence shine, as it became a trusted partner in navigating the evolving business landscape, exemplifying adaptability, resilience, and a forward-thinking approach in sustainable client fostering."
        );
        break;
      case "2023":
        setContent(
          "In 2023, Baoiam Consulting Firm has emerged as a standout leader in the industry, distinguished for its exceptional performance and client satisfaction. Renowned for innovative strategies, Lunaria continues to set the standard for excellence. With a dedicated team and a client-centric ethos, the firm consistently delivers transformative solutions. Lunaria's commitment to pushing boundaries and exceeding expectations positions it as a trailblazer, earning accolades and solidifying its status as one of the top consulting firms, driving success for clients in a rapidly evolving business landscape."
        );
        break;
      default:
        setContent("Click on a year to see the journey.");
        break;
    }
  };

  const cardsData = [
    {
      imageSrc: Liam,
      title: "Liam Anderson",
      content: "CEO & Founder",
    },
    {
      imageSrc: Sylphie,
      title: "Sylphie Young",
      content: "VP of Finance & Marketing",
    },
    {
      imageSrc: Henrik,
      title: "Henrik Johansson",
      content: "VP of Product Development",
    },
  ];

  const slides = [
    {
      imgSrc: aboutus1,
      text: "I would recommend all start-up businesses.",
    },
    {
      imgSrc: aboutus2,
      text: "Being on this entrepreneurship bootcamp.",
    },
    {
      imgSrc: aboutus3,
      text: "I had a wonderful experience.",
    },
    {
      imgSrc: aboutus4,
      text: "I had a wonderful experience.",
    },
    {
      imgSrc: aboutus5,
      text: "I had a wonderful experience.",
    },
  ];
  return (
    <div>
      {/* Section - 1 */}
      <div className="flex relative gap-4 pb-20 w-full h-max text-white bg-indigo-900">
        <div className="flex flex-col items-start mx-4 w-1/2 pt-24 pl-14 px-8">
          <h2 className="text-6xl pb-8 font-bold">
            Students Success Is Our Focus
          </h2>
          <p className="pb-12">
            Unlock your potential with our expertly designed courses, tailored
            to provide you with the skills and knowledge needed for success.
            From practical strategies to in-depth expertise, our courses are
            crafted to empower your growth and help you achieve your goals with
            confidence.
          </p>
          <button className="bg-amber-600 rounded-md p-4 font-semibold text-lg">
            Collaborate with us
          </button>
        </div>
        <div className="w-1/2 ml-6">
          <Swiper
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
                <div className="absolute top-0 flex flex-col border-3xl max-w-[90%] h-[100%] rounded-b-3xl border-slate-400 mb-12">
                  <div className="relative rounded-b-3xl mb-2 px-2 border-slate-400">
                    <img
                      src={slide.imgSrc}
                      alt="image"
                      className="block max-w-full h-[70%] object-cover rounded-b-2xl shadow-lg"
                    />
                    <div className="mt-2 mb-4 text-center">{slide.text}</div>
                  </div>

                  <div className="absolute top-10 left-10 w-[82%] h-[90%] z-10 border-amber-600 border-4 rounded-2xl"></div>
                </div>
              </SwiperSlide>
            ))}
            {/* <div
              className="swiper-pagination-bullet swiper-pagination-bullet-custom"
              style={{ display: "none" }}
            /> */}
          </Swiper>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex mx-auto gap-4 mb-16 justify-center items-center">
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
            {/* <div className="bg-blue-500 opacity-50  z-10"> */}
            <img
              src={aboutus5}
              alt="image"
              className="block max-w-full h-[60%] object-contain rounded-b-2xl shadow-lg"
            />
            {/* </div> */}
            <div className="absolute inset-0 mt-2 flex mx-6 items-center justify-center mb-4">
              <p className="text-4xl text-white font-semibold">
                "In the garden of achievement, diligent effort blossoms dreams
                into reality."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex mx-auto bg-indigo-500 text-white gap-4 justify-start items-center">
        {/* <div className="flex flex-col items-start gap-8 ml-10 p-10 w-1/2">
          <h2 className="text-4xl font-bold">Baoiam Journey Through Time</h2>
          <div className="flex gap-6 text-lg font-semibold">
            <div
              onClick={() => handleDivClick("Content for Div 1")}
              className="flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20"
            >
              <p>2019</p>
            </div>
            <div className="flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20">
              <p>2020</p>
            </div>
            <div className="flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20">
              <p>2021</p>
            </div>
            <div className="flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20">
              <p>2022</p>
            </div>
            <div className="flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20">
              <p>2023</p>
            </div>
          </div>
          <p className="text-lg mb-4">
            {content} */}
        {/* In 2019, Baoiam was founded in Noida. the inception of our
            consulting firm was marked by an innovative spirit and a commitment
            to deliver superior solutions. Throughout this journey, we forged a
            robust foundation emphasizing service quality and steadfast
            partnerships. Through unwavering dedication, we successfully
            cultivated meaningful client relationships and achieved sustainable
            growth. That year proved to be a historic milestone in shaping our
            corporate identity, setting standards for excellence, and
            reaffirming our commitment to client success through an innovative
            consultative approach. */}
        {/* </p>
        </div> */}

        <div className="flex flex-col items-start gap-8 ml-10 p-10 w-1/2">
          <h2 className="text-4xl font-bold">Baoiam Journey Through Time</h2>
          <div className="flex gap-6 text-lg font-semibold">
            {["2019", "2020", "2021", "2022", "2023"].map((year) => (
              <div
                key={year}
                onClick={() => handleDivClick(year)}
                className={`flex rounded-full border-2 border-amber-300 justify-center items-center cursor-pointer h-20 w-20 ${
                  activeYear === year ? "bg-amber-300" : ""
                }`} // Conditional background color based on active year
              >
                <p>{year}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mb-4">{content}</p>
        </div>

        <div className="w-1/2 py-10">
          <div className="flex flex-col max-w-[90%] h-[70%] rounded-3xl mb-12 px-2">
            {/* <div className="absolute inset-0 rounded-b-3xl"></div> */}
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
      </div>

      {/* Section 4 */}
      <div className="flex flex-col gap-12 p-20">
        <div className="flex justify-between items-center">
          <div className="w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl font-bold">
              The Values We Maintain At Work
            </h2>
            <p className="text-lg text-slate-500">
              We are a team with a variety of skills, each member contributes
              their expertise, and works professionally among members and
              clients.
            </p>
          </div>
          <div className="w-1/2">
            <button className="bg-amber-400 ml-96 rounded-md p-4 text-white font-semibold text-lg">
              Collaborate with us
            </button>
          </div>
        </div>
        <div className="flex text-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 w-1/3">
            <FaHandsHelping className="text-4xl text-indigo-500" />
            <h3 className="text-lg font-semibold">Dedication</h3>
            <p className="text-lg text-slate-500">
              Dedication at work is the key to sustained excellence and success.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-1/3">
            <FaEye className="text-4xl text-indigo-500" />
            <h3 className="text-lg font-semibold">Clarity</h3>
            <p className="text-lg text-slate-500">
              Clear objectives at work pave the way for strategic success.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-1/3">
            <FaLightbulb className="text-4xl text-indigo-500" />
            <h3 className="text-lg font-semibold">Innovation</h3>
            <p className="text-lg text-slate-500">
              Clear objectives at work pave the way for strategic success.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 text-center">
          <div className="flex flex-col items-center justify-center gap-4 w-1/3">
            <GiTeamIdea className="text-4xl text-indigo-500" />
            <h3 className="text-lg font-semibold">Synergy</h3>
            <p className="text-lg text-slate-500">
              Workplace synergy through teamwork cultivates a culture of
              collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-1/3">
            <FaChartLine className="text-4xl text-indigo-500" />
            <h3 className="text-lg font-semibold">Improvement</h3>
            <p className="text-lg text-slate-500">
              Commitment to improvement fuels a culture of continuous success.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col p-16 py-20 text-white bg-indigo-500">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">
            Introduce the Key Players in Baoiam
          </h2>
          <p className="text-lg w-[50%]">
            Meet the driving forces behind Baoiam, the key players whose
            dedication and expertise fuel our success and innovation every day.
          </p>
        </div>
        <div className="flex flex-wrap justify-between py-12 px-4">
          {cardsData.map((card, index) => (
            <ContentCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

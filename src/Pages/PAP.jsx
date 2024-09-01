import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner_pap from "../assets/banner_pap.png";
import Chitranshu from "../assets/Chitranshu.jpg";
import Aditya from "../assets/Aditya.jpg";
import Tina from "../assets/Tina.jpg";
import Som from "../assets/Som.jpg";
import Prasun from "../assets/Prasun.jpg";
import Surbhi from "../assets/Surbhi.jpg";
import Prajwal from "../assets/Prajwal.jpg";
import placement from "../assets/placement.jpg";
import {
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  LightBulbIcon,
  DeviceTabletIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

const PAP = () => {
  const slides = [
    {
      imgSrc: Prasun,
      date: "26 December 2023",
      title: "REVIEW",
      text: "I would recommend all start-up businesses or any entrepreneur in the SMME sector to participate in this entrepreneurship program as it would help many run their businesses with a much more viable and realistic business model.",
    },
    {
      imgSrc: Surbhi,
      date: "12 September 2023",
      title: "REVIEW",
      text: "Being on this entrepreneurship bootcamp really shifted my mindset on a lot of things as an entrepreneur. I look at myself and my business in a different light, I really grow a lot and am really appreciative of BAOIAM for making this opportunity available for me. I have learned and also looking for more ways to grow as a person and business.",
    },
    {
      imgSrc: Prajwal,
      date: "11 January 2024",
      title: "REVIEW",
      text: "I had a wonderful experience throughout this entrepreneurship bootcamp and learned a lot from the team, coaches, and my fellow students. I loved the way the coaches engage with us and also that they were always willing to assist. I wouldn't have traded this for anything.",
    },
  ];

  // const handleReadMoreClick = (e) => {
  //   e.preventDefault();
  //   // Your "Read More" logic goes here
  //   console.log("Read More clicked");
  // };

  return (
    <div className="dark:bg-black dark:text-white">
      {/* section 1 */}
      <div className="">
        <img src={banner_pap} alt="banner" />
      </div>

      {/* section 2 */}
      <div className="my-6 py-6 text-center">
        <h2 className="lg:leading-[4rem] text-2xl font-bold text-[#031864] mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
          Mentored by the &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            visionary <br /> entrepreneurs
          </span>{" "}
          of today
        </h2>
        <p className="text-gray-500 text-base lg:text-lg mb-16">
          Harnessing the wisdom of today's entrepreneurial gems, a <br /> new
          era of startup-focused business education is born.
        </p>

        <div className="flex p-4 pb-12 justify-evenly items-center flex-wrap gap-6">
          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Chitranshu}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2 text-center">
              Chitranshu Kankar
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">Sales</p>
          </div>

          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Tina}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2 text-center">
              Tina Chahelwani
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">
              Business Analytics
            </p>
          </div>

          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Som}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2 text-center">
              Som Thirtha
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">
              Product Management
            </p>
          </div>

          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Aditya}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2 text-center">
              Aditya Vishkarma
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">
              User Experience
            </p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col items-center text-center pb-24">
        <h2 className="text-2xl font-bold text-[#031864] mb-12 sm:text-3xl sm:mb-8 md:text-4xl lg:text-5xl">
          Become a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            budding
          </span>{" "}
          Startup Leader
        </h2>
        <p className="text-gray-500 my-8 mx-16 text-base sm:my-4 sm:mx-8 lg:text-lg">
          Develop an entrepreneurial mindset and become a visionary leader that
          will build nation’s next unicorns
        </p>
        <div className="grid grid-cols-1 text-[#031864] font-bold text-sm md:text-base sm:grid-cols-3 lg:text-lg">
          <ul>
            <li className="mx-4 my-5">Visionary Thinking</li>
            <li className="mx-4 my-5">Creativity & Innovation</li>
            <li className="mx-4 my-5">Risk Management</li>
            <li className="mx-4 my-5">Resilience & Persistence</li>
          </ul>
          <ul>
            <li className="mx-4 my-5">Adaptability</li>
            <li className="mx-4 my-5">Leadership</li>
            <li className="mx-4 my-5">Financial Management</li>
            <li className="mx-4 my-5">Networking & Relationship Building</li>
          </ul>
          <ul>
            <li className="mx-4 my-5">Communication & Salesmanship</li>
            <li className="mx-4 my-5">Problem Solving</li>
            <li className="mx-4 my-5">
              Product Management & Interpersonal Skills
            </li>
            <li className="mx-4 my-5">
              Leveraging AI & technology for automation
            </li>
          </ul>
        </div>
      </div>

      {/* section 4 */}
      <div className="flex flex-col items-center pb-24 text-center">
        <h2 className="text-2xl font-bold text-[#031864] mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            PLACEMENT
          </span>{" "}
          : HUNGER FOR SUCCESS
        </h2>
        <p className="text-gray-500 text-base mx-12 my-4 p-4 lg:text-lg font-medium">
          THE PLACEMENT BOOTCAMP PROGRAM : A 6 month program for startup
          founders of tomorrow
        </p>

        <div className="flex lg:flex-row flex-col-reverse sm:items-center items-stretch text-left px-12">
          <div className="w-[90%] mr-6 md:max-w-[70%] lg:max-w-[57%]">
            <p className="ml-10 mb-4 pr-8 text-base text-gray-500 sm:text-lg md:text-xl lg:text-2xl">
              Join us on this transformative journey as we empower you to become
              the driving force behind India's startup ecosystem. Whether you
              have a groundbreaking idea or a burning passion for innovation,
              our business school is the platform.where you can develop the
              skills, knowledge, and mindset to thrive in the ever-evolving
              entrepreneurial landscape.
            </p>
            <p className="ml-10 mb-4 pr-8 text-base sm:text-lg md:text-xl lg:text-2xl text-[#031864] font-bold">
              Unleash your potential and shape the future of business with us
            </p>
            <button className="ml-10 p-1.5 w-52 sm:w-52 md:w-48 lg:w-64  sm:p-1.5 md:p-2 lg:p-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-base rounded-2xl cursor-pointer">
              Click here
            </button>
          </div>

          <div className="max-w-[90%] mx-10 md:max-w-[70%] lg:max-w-[43%] mr-6 mb-6">
            <img
              className="max-w-full max-h-full rounded-2xl object-contain"
              src={placement}
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-[#031864] mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
          SNEAK PEEK OF{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            BOOTCAMP PROGRAM
          </span>
        </h2>
        <p className="mt-4 mx-12 mb-8 px-6 pr-8 text-base text-gray-500 pb-6 lg:text-lg">
          A transformational journey designed to create budding founders of
          future unicorns
        </p>

        <div className="flex flex-wrap gap-4 mb-20 py-10 px-6 max-w-7xl mx-auto justify-evenly">
          <div className="mb-8 flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
            <AcademicCapIcon className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-[#031864] font-bold mb-4 px-4">
              Foundation and Knowledge Acquisition:
            </p>
            <p className="mb-4 px-4 text-[#031864]">
              Lay a strong foundation and acquire the necessary knowledge and
              skills. Study various aspects of entrepreneurship, including
              market analysis, business planning, financial management,
              marketing strategies, and legal considerations. Aims to provide a
              comprehensive understanding of the entrepreneurial landscape and
              equip individuals with the knowledge required to embark on their
              entrepreneurial journey.
            </p>
          </div>

          <div className="mb-8 flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
            <WrenchScrewdriverIcon className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-[#031864] font-bold mb-4 px-4">
              Skill Development and Practical Application:
            </p>
            <p className="mb-4 px-4 text-[#031864]">
              Focus on skill development and practical application. Hands-on
              learning experiences, such as workshops, simulations, and
              real-world projects. Activities that enhance their critical
              thinking, problem-solving, communication, and leadership skills.
              To bridge the gap between theory and practice, allowing
              participants to apply their knowledge in real entrepreneurial
              scenarios.
            </p>
          </div>

          <div className="mb-8 flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
            <UserGroupIcon className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-[#031864] font-bold mb-4 px-4">
              Mentorship, Networking, and Launch:
            </p>
            <p className="mb-4 px-4 text-[#031864]">
              Get an opportunity to connect with experienced entrepreneurs,
              industry experts, and mentors who provide guidance and support.
              Receive feedback on their business ideas, refine their strategies,
              and gain valuable insights from those who have already walked the
              entrepreneurial path. Take the leap and launch their own ventures,
              armed with the knowledge, skills, and support acquired during the
              program.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
            <LightBulbIcon className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-[#031864] font-bold mb-4 px-4">
              Nurturing a leader:
            </p>
            <p className="mb-4 px-4 text-[#031864]">
              Leadership plays a very crucial and multifaceted role in
              entrepreneurial business. Therefore, it is important to nurture a
              leader who can set a clear vision for the business, develop a
              decisive attitude, and approach the growth path with optimism. A
              leader plays a key role in team building, resource management,
              networking and partnerships, and ultimately influences the overall
              success and sustainability of the venture. Given the multitude of
              responsibilities that need to be fulfilled, it is crucial to
              receive effective leadership training from industry leaders.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
            <DeviceTabletIcon className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-[#031864] font-bold mb-4 px-4">
              Exposure to new business trends and technology:
            </p>
            <p className="mb-4 px-4 text-[#031864]">
              Stay informed about new businesses and technology is essential for
              identifying the unique factors that set a business apart.
              Utilizing new and advanced technology can improve efficiency,
              productivity, and reduce costs. Know about the latest business
              trends, strategies, and techniques by attending free live
              workshops led by industry experts. Discover more about supply
              chain optimization and other related cutting-edge terms.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
            <PresentationChartBarIcon className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-[#031864] font-bold mb-4 px-4">
              Business Idea Presentation:
            </p>
            <p className="mb-4 px-4 text-[#031864]">
              The final business idea will be presented to a panel of experts
              and potential investors. The most promising ideas will have the
              opportunity to secure investment from the panel. Other business
              ideas will receive feedback, suggestions, and guidance for
              improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col justify-center items-center mb-10 ">
        <h2 className="text-2xl font-bold text-[#031864] mb-10 sm:mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          BAOIAM’IONS{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            EXPERIENCE
          </span>
        </h2>

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
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative flex flex-col flex-wrap sm:flex-nowrap h-180 sm:h-104 border-3xl rounded-3xl border-slate-400 mb-12">
                <div className="absolute -left-12 top-2 my-10 w-72 h-72 rounded-2xl opacity-80">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="object-cover rounded-2xl shadow-lg "
                  />
                </div>
                {/* <div className="flex flex-col sm:flex-row"> */}
                <div className="p-6 bg-white rounded-3xl border-slate-400 shadow-md max-w-xl h-104 text-right sm:max-w-xl md:h-96 md:max-w-2xl lg:max-w-3xl">
                  <span className=" text-gray-500 text-sm block mb-2">
                    {slide.date}
                  </span>
                  <div className="text-2xl font-bold text-[#031864] mb-4">
                    {slide.title}
                  </div>
                  <div className="w-1/2 ml-auto text-gray-700 mb-4 text-left">
                    {slide.text}
                  </div>
                  {/* <button
                    onClick={handleReadMoreClick}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    READ MORE
                  </button> */}
                  {/* </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PAP;

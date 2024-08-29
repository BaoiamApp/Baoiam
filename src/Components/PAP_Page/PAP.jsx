import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner_pap from "../../assets/banner_pap.png";
import Chitranshu from "../../assets/Chitranshu.jpg";
import Aditya from "../../assets/Aditya.jpg";
import Tina from "../../assets/Tina.jpg";
import Som from "../../assets/Som.jpg";
import placement from "../../assets/placement.jpg";

const PAP = () => {
  return (
    <>
      {/* section 1 */}
      <div className="">
        <img src={banner_pap} alt="banner" />
      </div>

      {/* section 2 */}
      <div className="my-6 py-6 text-center">
        <h2 className="text-[40px] font-bold text-[#031864] mb-12">
          Mentored by the &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            visionary <br /> entrepreneurs
          </span>{" "}
          of today
        </h2>
        <p className="text-gray-500 text-lg mb-16">
          Harnessing the wisdom of today's entrepreneurial gems, a <br /> new
          era of startup-focused business education is born.
        </p>
        <div className="flex pb-12">
          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg">
            <img className="mt-4 mb-2" src={Chitranshu} alt="image" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2">
              Chitranshu Kankar
            </h2>
            <p className="mb-4 text-gray-500 text-lg">Sales</p>
          </div>
          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg">
            <img className="mt-4 mb-2" src={Tina} alt="image" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2">
              Tina Chahelwani
            </h2>
            <p className="mb-4 text-gray-500 text-lg">Business Analytics</p>
          </div>
          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg">
            <img className="mt-4 mb-2" src={Som} alt="image" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2">
              Som Thirtha
            </h2>
            <p className="mb-4 text-gray-500 text-lg">Product Management</p>
          </div>
          <div className="border-slate-500 border-2 rounded-xl hover:shadow-lg">
            <img className="mt-4 mb-2" src={Aditya} alt="image" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold mb-2">
              Aditya Vishkarma
            </h2>
            <p className="mb-4 text-gray-500 text-lg">User Experience</p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col items-center text-center pb-24">
        <h2 className="text-5xl font-bold text-[#031864] mb-12">
          Become a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            budding
          </span>{" "}
          Startup Leader
        </h2>
        <p className="text-gray-500 text-lg my-8 mx-16">
          Develop an entrepreneurial mindset and become a visionary leader that
          will build nation’s next unicorns
        </p>
        <div className="grid grid-cols-3 text-[#031864] font-bold text-lg">
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
      <div className="flex flex-col items-center pb-24">
        <h2 className="text-5xl font-bold text-[#031864] mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            PLACEMENT
          </span>{" "}
          : HUNGER FOR SUCCESS
        </h2>
        <p className="text-gray-500 text-base mx-12 my-4 p-4 font-bold">
          THE PLACEMENT BOOTCAMP PROGRAM : A 6 month program for startup
          founders of tomorrow
        </p>

        <div className="flex justify-center">
          <div className="flex flex-col max-w-[50%] mr-8 justify-center">
            <p className="mb-4 ml-16 pr-8 text-2xl text-gray-500">
              Join us on this transformative journey as we empower you to become
              the driving force behind India's startup ecosystem. Whether you
              have a groundbreaking idea or a burning passion for innovation,
              our business school is the platform.where you can develop the
              skills, knowledge, and mindset to thrive in the ever-evolving
              entrepreneurial landscape.
            </p>
            <p className="mb-4 ml-16 pr-8 text-2xl text-[#031864] font-bold">
              Unleash your potential and shape the future <br />
              of business with us
            </p>
            <button className="ml-16 w-64 bg-gradient-to-r from-red-500 to-orange-500 text-white text-base p-2.5 rounded-2xl cursor-pointer">
              Click here
            </button>
          </div>

          <div className="">
            <img
              className="w-[40vw] h-[28vw] rounded-2xl"
              src={placement}
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-[#031864] mb-6">
          SNEAK PEEK OF{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 border-b-2 border-red-500">
            BOOTCAMP PROGRAM
          </span>
        </h2>
        <p className="mt-4 mx-12 mb-8 pr-8 text-lg text-gray-500 pb-6">
          A transformational journey designed to create budding founders of
          future unicorns
        </p>
        // // modules={[Navigation, Pagination, Autoplay]} // Add Swiper modules
        // spaceBetween={30} // Space between slides // slidesPerView={1} //
        Number of slides to show at a time // navigation // Enable navigation
        (arrows) // pagination={{ clickable: true }} // Enable pagination //
        autoplay={{ delay: 3000 }} // Enable autoplay with 3s delay // loop //
        Enable continuous loop mode // className="mySwiper" // // Swiper
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* <SwiperSlide>Slide 4</SwiperSlide> */}
          {/* </Swiper> */}
          <div className="flex items-stretch justify-spacebetween items-center py-10 max-w-[950px] h-fit">
            <SwiperSlide>
              <div className="w-[calc(33.33%-15px)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-center items-center text-center mx-5 py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
                <h2 className="bg-gradient-to-r from-red-500 to-orange-500 text-5xl text-white font-bold text-center w-28 h-28 rounded-full p-4 mt-8 mb-6 mx-20 flex items-center justify-center">
                  01
                </h2>
                <p className="text-[#031864] font-bold mb-4 px-8">
                  Foundation and Knowledge Acquisition:
                </p>
                <p className="mb-4 px-8 text-[#031864]">
                  Lay a strong foundation and acquire the necessary knowledge
                  and skills. Study various aspects of entrepreneurship,
                  including market analysis, business planning, financial
                  management, marketing strategies, and legal
                  considerations.Aims to provide a comprehensive understanding
                  of the entrepreneurial landscape and equip individuals with
                  the knowledge required to embark on their entrepreneurial
                  journey.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[calc(33.33%-15px)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-center items-center text-center mx-5 py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
                <h2 className="bg-gradient-to-r from-red-500 to-orange-500 text-5xl text-white font-bold text-center w-28 h-28 rounded-full p-4 mt-8 mb-6 mx-20 flex items-center justify-center">
                  02
                </h2>
                <p className="text-[#031864] font-bold mb-4 px-8">
                  Skill Development and Practical Application:
                </p>
                <p className="mb-4 px-8 text-[#031864]">
                  Focus on skill development and practical application. Hands-on
                  learning experiences, such as workshops, simulations, and
                  real-world projects.Activities that enhance their critical
                  thinking, problem-solving, communication, and leadership
                  skills. To bridge the gap between theory and practice,
                  allowing participants to apply their knowledge in real
                  entrepreneurial scenarios.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[calc(33.33%-15px)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-center items-center text-center mx-5 py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
                <h2 className="bg-gradient-to-r from-red-500 to-orange-500 text-5xl text-white font-bold text-center w-28 h-28 rounded-full p-4 mt-8 mb-6 mx-20 flex items-center justify-center">
                  03
                </h2>
                <p className="text-[#031864] font-bold mb-4 px-8">
                  Mentorship, Networking, and Launch:
                </p>
                <p className="mb-4 px-8 text-[#031864]">
                  Get an opportunity to connect with experienced entrepreneurs,
                  industry experts, and mentors who provide guidance and
                  support. Receive feedback on their business ideas, refine
                  their strategies, and gain valuable insights from those who
                  have already walked the entrepreneurial path. Take the leap
                  and launch their own ventures, armed with the knowledge,
                  skills, and support acquired during the program.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[calc(33.33%-15px)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-center items-center text-center mx-5 py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
                <h2 className="bg-gradient-to-r from-red-500 to-orange-500 text-5xl text-white font-bold text-center w-28 h-28 rounded-full p-4 mt-8 mb-6 mx-20 flex items-center justify-center">
                  04
                </h2>
                <p className="text-[#031864] font-bold mb-4 px-8">
                  Nurturing a leader:-
                </p>
                <p className="mb-4 px-8 text-[#031864]">
                  Leadership plays a very crcial and multifaceted role in
                  entrepreneurial business. Therefore, it is important to
                  nurture leader who can set a clear vision for the business,
                  develop a decisive attitude, and approach the growth path with
                  optimism. A leader plays a key role in team buiding, resource
                  management, networking and partnerships, and ultimately
                  influences the overall success and sustainability of the
                  venture. Give the multitude of responsibilities that need to
                  be fulfilled, it is crucial to recieve effective leadership
                  training from industry leaders.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[calc(33.33%-15px)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-center items-center text-center mx-5 py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
                <h2 className="bg-gradient-to-r from-red-500 to-orange-500 text-5xl text-white font-bold text-center w-28 h-28 rounded-full p-4 mt-8 mb-6 mx-20 flex items-center justify-center">
                  05
                </h2>
                <p className="text-[#031864] font-bold mb-4 px-8">
                  Exposure to new business trends and technology:-
                </p>
                <p className="mb-4 px-8 text-[#031864]">
                  Stay informed about new businesses and technology is essential
                  for identifying the unique factors that set a business apart.
                  Utilizing new and advanced technology can improve efficiency,
                  productivity, and reduce costs. Know about the latest business
                  trends, strategies, and techniques by attending free live
                  workshops led by industry experts. Discover more about supply
                  chain optimization and other related cutting-edge terms.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[calc(33.33%-15px)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-center items-center text-center mx-5 py-8 transition-all duration-400 ease-in-out hover:-translate-y-2">
                <h2 className="bg-gradient-to-r from-red-500 to-orange-500 text-5xl text-white font-bold text-center w-28 h-28 rounded-full p-4 mt-8 mb-6 mx-20 flex items-center justify-center">
                  06
                </h2>
                <p className="text-[#031864] font-bold mb-4 px-8">
                  Business Idea Presentation:-
                </p>
                <p className="mb-4 px-8 text-[#031864]">
                  The final business idea will be presented to a panel of
                  experts and potential investors. The most promising ideas will
                  have the opportunity to secure investment from the panel.
                  Other business ideas will receive feedback, suggestions, and
                  guidance for improvement.
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default PAP;

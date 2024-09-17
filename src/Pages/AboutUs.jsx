import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../Components/AboutUs/ContentCard";
import ValueCard from "../Components/AboutUs/ValueCard";
import HeroCard from "../Components/AboutUs/HeroCard";
import ProgressBar from "../Components/AboutUs/ProgressBar";
import OurTeam from "./OurTeamSlide"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import required modules
import OurTeamSlide from "./OurTeamSlide"
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
import ServicesTab from "../Components/AboutUs/ServicesTab";
import Origin from "../Components/AboutUs/Origin";
import gsap from 'gsap'

const AboutUs = () => {
  document.title = "Baoiam - About Us";
  const [data, setData] = useState(swiperData);

  useEffect(() => {
    window.scrollTo(0, 0);

   

//gsap

gsap.fromTo('.anime1',{opacity:0,y:30},{
  opacity:1,
  y:0,
  duration:1,
  ease:'back.inOut',
  stagger:0.3
})



gsap.fromTo('.anime2',{opacity:0,x:-50},
  {opacity:1,
    x:0,
    duration:1,
    ease:'back.inOut',
    scrollTrigger:{
      trigger:'.animediv1',
      start:'top 90%',
      end:'bottom 100%',
    }
    
  }
  )

  gsap.fromTo('.anime3',{opacity:0,x:50},
    {opacity:1,
      x:0,
      duration:1,
      ease:'back.inOut',
      delay:0.5,
      scrollTrigger:{
        trigger:'.animediv1',
        start:'top 90%',
        end:'bottom 100%',
      }
    }
    )



    gsap.fromTo('.anime4',{opacity:0,x:-50},
      {opacity:1,
        x:0,
        duration:1,
        ease:'back.inOut',
        scrollTrigger:{
          trigger:'.animediv2',
          start:'top 90%',
          end:'bottom 100%',
        }
        
      }
      )
    
      gsap.fromTo('.anime5',{opacity:0,x:50},
        {opacity:1,
          x:0,
          duration:1,
          ease:'back.inOut',
          delay:0.5,
          scrollTrigger:{
            trigger:'.animediv2',
            start:'top 90%',
            end:'bottom 100%',
          }
        }
        )

        gsap.fromTo('.anime6',{opacity:0,y:30},
          {opacity:1,
            y:0,
            duration:1,
            ease:'back.inOut',
           stagger:0.3,
            scrollTrigger:{
              trigger:'.animediv4',
              start:'top 90%',
              end:'bottom 100%',
            }
          }
          )

          gsap.fromTo('.anime7',{opacity:0},
            {opacity:1,
             
              duration:1,
              delay:0.8,
              scrollTrigger:{
                trigger:'.animediv4',
                start:'top 90%',
                end:'bottom 100%',
              }
            }
            )

            gsap.fromTo('.anime9',{opacity:0,x:-50},
              {opacity:1,
                x:0,
                duration:1,
                ease:'back.inOut',
                scrollTrigger:{
                  trigger:'.animediv5',
                  start:'top 90%',
                  end:'bottom 100%',
                  markers:true
                }
                
              }
              )
            
              gsap.fromTo('.anime10',{opacity:0,x:50},
                {opacity:1,
                  x:0,
                  duration:1,
                  ease:'back.inOut',
                  delay:0.5,
                  scrollTrigger:{
                    trigger:'.animediv5',
                    start:'top 90%',
                    end:'bottom 100%',
                  }
                }
                )


                gsap.fromTo('.anime11',{opacity:0,y:30},
                  {opacity:1,
                    y:0,
                    duration:1,
                    ease:'back.inOut',
                   stagger:0.3,
                    scrollTrigger:{
                      trigger:'.animediv6',
                      start:'top 90%',
                      end:'bottom 100%',
                    }
                  }
                  )
    


return () => {};



  }, []);

  return (
    <div>
      {/* Section - 1 */}
      <div className="  mx-auto h-fit md:h-screen w-full text-white">
        <div className="relative mx-auto h-fit md:h-screen w-full text-white">
          <div className="h-[22rem] sm:h-[23rem] md:h-[70%] w-full image-container">
            <img
              className="w-full h-full object-cover"
              src={aboutus4}
              alt="image"
            />
          </div>
          <div className=" absolute inset-0 content-overlay bg-gradient-to-r from-black/30 via-black/20 to-black/10 flex flex-col gap-4 sm:gap-6 items-start pl-6 sm:px-8 md:px-24 lg:px-48 xl:px-52 w-[100%] h-[22rem] sm:h-[23rem] md:h-[70%] sm:pt-20  justify-center sm:justify-start text-white">
            {/* bg-#2a272a/30 bg-gradient-to-tr from-gray-800/50 via-gray-600/30 to-black/10*/}
            <div className="anime1 rounded-3xl py-2 px-4 w-fit bg-white z-10">
              <h1 className=" text-amber-600 font-medium">
                Transforming education with ed-tech ~
              </h1>
            </div>
            <h2 className="anime1 text-2xl font-bold md:text-4xl sm:text-3xl">
              Reaching higher, while breaking barriers is our aim!
            </h2>
            <p className="font-medium anime1">
              Baoiam is here to advise you on advancing your goals with
              Strategic Information Needs.
            </p>
            <button className="anime1 flex justify-center items-center gap-1 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300  px-6 md:px-8 py-2 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">
              Our Team
              <FaArrowRight className="font-normal" size={18} />
            </button>
          </div>
          <div className="relative -bottom-[20rem] mt-1 md:absolute mx-auto mb-40 sm:mt-3 md:mt-auto sm:-bottom-40 md:top-auto md:-bottom-48 md:-inset-x-0 sm:grid sm:grid-cols-3 md:grid-cols-5 justify-center transform -translate-y-1/2 w-full text-black font-bold text-center flex flex-col md:flex md:flex-row items-center sm:gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6">
            <div className="anime1 sm:col-span-3 grid grid-cols-2 sm:flex sm:justify-between sm:items-center gap-4 md:gap-6 lg:gap-8">
              <HeroCard Icon={MdDesignServices} title="UI/UX Design Services" />
              <HeroCard Icon={FaBusinessTime} title="Business Consultation" />
              <HeroCard Icon={AiOutlineCode} title="Website Development" />
              <HeroCard Icon={BiSupport} title="Support Management" />
              <HeroCard Icon={RiBarChartBoxLine} title="Market Research" />
            </div>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="animediv1 flex flex-col md:flex-row gap-8 sm:mt-32 md:mt-0 px-4 sm:px-6 md:px-10 lg:px-20 pb-20 w-full items-stretch">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full md:ml-6">
          <div className="anime2 w-full h-64 sm:h-96 md:h-full rounded-b-3xl mb-2 px-2 border-slate-400">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-full lg:w-[450px] lg:h-[400px] rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-15px_#4338ca] sm:shadow-[-15px_-20px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>
        </div>

        <div className="anime3 flex flex-col gap-8 justify-center items-start w-full md:w-1/2 lg:w-1/2 mr-0 lg:mr-8 px-4 sm:px-6 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            We’re committed to your Success
          </h2>
          <p className="text-base sm:text-lg">
            Uncover your expertise with our proficiently designed courses,
            crafted to provide you with every skill and knowledge you need to
            reach the top of the world. From theoretical insights to hands-on
            practical experience, our courses cater to every student, empowering
            your growth and backing you to achieve your goals with confidence.
          </p>
          <button className="flex justify-center items-center bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 px-4 sm:px-6 md:px-8 lg:px-8 py-2 lg:py-4 sm:py-3 text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="animediv2 flex flex-col md:flex-row gap-8 p-4 sm:p-6 md:p-10 mb-16 justify-center items-center mx-auto">
        {/* Text Section */}
        <div className="anime4 flex flex-col items-start justify-center gap-4 w-full md:w-1/2 pr-0 md:pr-10 lg:pl-10 pl-4">
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
        </div>

        {/* Image Section */}
        <div className="anime5 w-full md:w-1/2 flex justify-center">
          <div className="w-full md:w-[80%]">
            <img
              src={aboutus5}
              alt="image"
              className="w-full h-64 sm:h-72 md:h-96 rounded-tl-2xl rounded-br-2xl object-cover shadow-[10px_15px_#4338ca] sm:shadow-[15px_20px_#4338ca] lg:shadow-[20px_25px_#4338ca]"
            />
          </div>
        </div>
      </div>

      <Origin />

      {/* Section 4 */}
      <div className="animediv4 flex flex-col lg:flex-row items-start gap-4 lg:py-10 mb-10  mx-auto p-8 lg:pl-20 lg:pr-20">
        <div className="flex flex-col mt-6 gap-8 mb-10 max-w-full lg:max-w-xs ">
          <h2 className="anime6 text-amber-600 font-medium text-xl">Our Values</h2>
          <h3 className="anime6 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            The standard we promote at work
          </h3>
          <p className="anime6 text-base sm:text-lg text-slate-500">
            We are a diverse force in today's skill-oriented Era, standing out
            due To our exceptional team coordination. Each members of our team
            demonstrated a high level of commitment, not only to their own work
            but also in their interactions with learners and clients.
          </p>
          <button className="anime6 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 w-fit px-6 md:px-8 py-3 lg:py-4 dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full">
            Collaborate with us
          </button>
        </div>

        <div className="anime7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 w-full lg:ml-4">
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
      <div className="animediv5 flex flex-col md:flex-row  lg:flex-row mx-auto gap-8 p-6 md:p-10 justify-center items-center max-w-7xl">
        {/* Image Section */}
        <div className="anime9 w-full lg:w-1/2  pl-0 lg:pl-20 mb-6 lg:mb-0">
          <img
            src={aboutus5}
            alt="image"
            className="w-full h-full sm:w-[750px] sm:h-[350px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[490px] rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-15px_#4338ca] lg:shadow-[-15px_-20px_#4338ca]"
          />
        </div>

        {/* Text and Progress Bars Section */}
        <div className="anime10 flex flex-col items-start justify-center gap-2 w-full lg:w-1/2">
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
          </p>

          {/* Progress Bars */}
          <div className="w-full text-slate-800 mx-auto mt-4 space-y-4">
            <ProgressBar percentage={86} title="UI/UX Design" />
            <ProgressBar percentage={80} title="Business Consultation" />
            <ProgressBar percentage={78} title="Website Development" />
            <ProgressBar percentage={83} title="Market Research" />
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="animediv6 anime11 text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold">
        Our Team
      </div>

      <div className="p-6 anime11">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide on small screens like mobile
            },
            640: {
              slidesPerView: 2, // 2 slides on small tablets
            },
            768: {
              slidesPerView: 3, // 3 slides on larger tablets
            },
            1024: {
              slidesPerView: 4, // 4 slides on desktops
            },
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper initialized")}
          className="md:h-[350px] w-full md:w-[90%] m-auto rounded-lg flex flex-col justify-center items-center gap-4"
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id} className="group flip-card w-96 h-96">
              <div className="flip-card-inner">
                {/* Front Side (Image) */}
                <div className="flip-card-front">
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={el.image}
                    alt={el.name}
                  />
                </div>

                {/* Back Side (Details) */}
                <div className="flip-card-back bg-black/80 text-white rounded-md flex flex-col justify-center items-center">
                  <h3 className="text-center font-sans font-medium text-lg">
                    {el.name}
                  </h3>
                  <p className="text-center font-bold text-xs">{el.role}</p>
                  <div className="py-2 flex items-center justify-center gap-2">
                    <FaLinkedin className="text-xl" />
                    <FaXTwitter className="" />
                  </div>

                  <p className="text-xs md:text-sm text-center px-4">
                    {el.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUs;

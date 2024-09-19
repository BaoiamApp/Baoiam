import React from 'react';
import { useNavigate } from 'react-router-dom';
import Trending from '../Components/School/Trending'
import WhyUs from '../Components/School/WhyUs'
import SkillCatalog from '../Components/School/SkillCatalog'
import SliderHero from '../Components/School/SliderHero'
import TypewriterText from '../Components/School/TypewiterText'
import { Link } from 'react-router-dom'
import { InstructorSlider } from '../Components/School/InstructorSlider';
import Categories from "../Components/Home/Categories";
import Testimonials from '../Components/Testmonials/Testimonials';


const School = () => {
  document.title = "Baoiam - School";
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    navigate("/ITIE");
  };

  return (
    <>
    <div className="relative font-[sans-serif]  dark:before:bg-black dark:before:opacity-80 from-amber-600  to-teal-800  before:absolute before:w-full before:h-full before:inset-0 before:opacity-50 before:z-10">
      <img
        src="https://readymadeui.com/photo.webp"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover object-bottom "
      />
      <div className=" relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-white md:text-5xl text-4xl font-bold">
          Explore Our Comprehensive Course Offerings
          </h3>
          <p className="text-gray-300 italic text-lg mt-4">
          At BAOIAM, we offer a diverse range of courses designed to meet the needs of students across various educational levels. Whether you’re in school, college, or pursuing a degree, our expertly crafted courses provide valuable knowledge and skills to help you succeed academically and professionally.
          </p>
        
        </div>
      </div>
    </div>
      <TypewriterText />
      <div className="pl-10 dark:bg-black dark:text-white p-4 bg-white text-black">
        {/* <h2 className="text-3xl font-bold mb-5">
          Courses
          <span className="block h-1 w-20 bg-red-500 rounded-full mt-2"></span>
        </h2> */}

        <div className="flex pt-10 items-center justify-center p-6 w-fit mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 justify-between items-center mx-auto w-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore Our Comprehensive Course Offerings
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                Get access to our diverse array of courses constructed to help
                you accomplish your academic aims. Whether you're sharpening
                your expertise or Embarking a new roadmap. There's a fit for
                everyone. Experience the impeccable program tailored to your
                requirement and awaken your full potential here.
              </p>
              <Link
                to={"/courses"}
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg"
              >
                Explore Courses
              </Link>
            </div>

            <div className="md:h-full md:w-[40%] pt-8 md:pt-0">
              <SliderHero />
            </div>
          </div>
        </div>
        <WhyUs />
        <Categories />
        {/* <SkillCatalog /> */}
        <Trending />
        <WhyUs />
        {/* <InstructorSlider/> */}
        <Testimonials/>
      </div>
    </>
  );
};

export default School;

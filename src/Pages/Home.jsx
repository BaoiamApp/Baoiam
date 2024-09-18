import React from "react";
import Courses from "../Components/Home/Courses";
import Swiper from "../Components/Home/Swiper";
import Hero from "../Components/Home/Hero";
import Categories from "../Components/Home/Categories";
import JoinNow from "../Components/Home/JoinNow";
import Partners from '../Components/Home/Partners'
import Protocol from '../Components/Home/Protocol'
import How from '../Components/Home/How'
import Slider from '../Components/Home/Slider'
import Phone from '../Components/Home/Phone'
//import Meetourexperts from '../Components/Home/Meetourexperts'
import { SuccessLight } from '../assets/assets'
import OurTeam from "../Components/AboutUs/OurTeam"
import ServicesTab from '../Components/AboutUs/ServicesTab'
import BrandMarquee from "../Components/Marquee/BrandMarquee";

const Home = () => {
    document.title = 'Baoiam - Home'
    return (
        <>
            <div className='max-w-11/12 mx-auto'>
                <Hero />
                <BrandMarquee />
                <Courses />
                <Slider />
                <div className="mx-auto w-full md:w-[85%] mb-8">
                    <img className="w-full h-full" src={SuccessLight} alt="" />
                </div>
                {/* <Categories /> */}
                <ServicesTab />
                <Partners />
                <Protocol />
                <JoinNow />
                <How />
                <OurTeam />
                <Phone />
            </div>
        </>
    );
}

export default Home;

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
import Meetourexperts from '../Components/Home/Meetourexperts'
import { SuccessLight } from '../assets/assets'

const Home = () => {
    document.title = 'Baoiam - Home'
    return (
        <>
            <div className='max-w-11/12 mt-36 mx-auto'>
            <Hero />
            <Courses />
            <Slider />
            <div className='mx-auto w-full md:w-[85%]'>
                <img className="w-full h-full" src={SuccessLight} alt="" />
            </div>
//             <Categories />
            <Partners />
            <Protocol />
            <JoinNow />
            <How />
            <Meetourexperts />
            <Phone />
            </div>
        </>
    )
}

export default Home;

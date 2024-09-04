import React from 'react'
import Courses from '../Components/Home/Courses'
import Swiper from '../Components/Home/Swiper'
import Hero from '../Components/Home/Hero'
import Categories from '../Components/Home/Categories'
import JoinNow from "../Components/Home/JoinNow";
import Partners from '../Components/Home/Partners'
import Protocol from '../Components/Home/Protocol'
import How from '../Components/Home/How'
const Home = () => {
    return (
        <>
            <Hero />
            <Courses />
            <Swiper />
            <Categories />
            <Partners />
            <Protocol />
            <JoinNow />
            <How />
        </>
    )
}

export default Home
import React from 'react'
import Courses from '../Components/Home/Courses'
import Swiper from '../Components/Home/Swiper'
import Hero from '../Components/Home/Hero'
import Categories from '../Components/Home/Categories'
import JoinNow from "../Components/Home/JoinNow";
import Partners from '../Components/Partners/Partners'

const Home = () => {
    return (
        <>
            <Hero />
            <Courses />
            <Swiper />
            <Categories />
            <Partners />
            <JoinNow />
        </>
    )
}

export default Home
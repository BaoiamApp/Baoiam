import React from 'react'
import Courses from './Courses'
import Swiper from './Swiper'
import Hero from './Hero'
import Categories from './Categories'


import JoinNow from "./JoinNow";

const Home = () => {
    return (
        <>
        <Hero />
            <Courses />
            <Swiper />
            <Categories />
            <JoinNow />
        </>
    )
}

export default Home
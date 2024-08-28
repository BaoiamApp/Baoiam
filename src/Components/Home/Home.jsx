import React from 'react'
import Courses from './Courses'
import Swiper from './Swiper'
import Categories from './Categories'


import JoinNow from "./JoinNow";

const Home = () => {
    return (
        <>
            <Courses />
            <Swiper />
            <Categories />
            <JoinNow />
        </>
    )
}

export default Home
import React from 'react'
import Courses from './Courses'
import Swiper from './Swiper'
import Hero from './Hero'
import Categories from './Categories'
import How from './How'
import Protocol from './Protocol'

import JoinNow from "./JoinNow";

const Home = () => {
    return (
        <>
        <Hero />
            <Courses />
            <Swiper />
            <Categories />
            <Protocol/>
            <JoinNow />
            
            <How/>
        </>
    )
}

export default Home
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleScroll = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <button className={`scrollToTop fixed bottom-[5%] right-[2%] shadow-xl w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full text-white border-none cursor-pointer z-50 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-700 md:w-14 md:h-14 md:text-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop} data-aos="fade-up">
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTop
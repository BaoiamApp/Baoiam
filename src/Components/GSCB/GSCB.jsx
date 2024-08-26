import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GSCB = () => {

    const section2 = [
        {
            id: 1,
            img: 'https://tedpartnerships.com/wp-content/uploads/2023/09/Screenshot-2023-09-18-at-1.33.30-PM-1.webp',
            title: 'Impact',
            num: '75%',
            subtitle: 'say Baoiam has impacted their lives.',
            desc: "We’re many things to many people: globally recognized storyteller, landmark events and conferences hub, and media powerhouse."
        },
        {
            id: 2,
            img: 'https://tedpartnerships.com/wp-content/uploads/2023/09/Screenshot-2023-09-18-at-1.33.38-PM-1.webp',
            title: 'Trust',
            num: '9/10',
            subtitle: 'view TED as a trusted brand.',
            desc: "We uphold the highest editorial standards to continually earn our audience's trust and respect."
        },
        {
            id: 3,
            img: 'https://tedpartnerships.com/wp-content/uploads/2023/09/Screenshot-2023-09-18-at-1.33.46-PM-1.webp',
            title: 'Value',
            num: '2/3',
            subtitle: 'feel our partners share our values.',
            desc: "Our value comes from a mission to share the best ideas from around the world."
        },
    ]

    // useGSAP(() => {
    //     const text = 
    // }, { scope: container })

    useEffect(() => {
        const tl = gsap.timeline()
        // gsap.to('.text', {
        //     x: 200,
        //     duration: 1,
        // })

        // tl.fromTo('.what', {
        //     y: 100,
        //     opacity: 0,
        //     duration: 1,
        // }, {
        //     y: 0,
        //     ease: 'power1.inOut',
        //     opacity: 1,
        //     scrollTrigger: {
        //         trigger: '.what',
        //         start: '0% ',
        //         scrub: true,
        //         markers: true,
        //     },
        //     duration: 1,
        // })

        // tl.fromTo('.talk-btn', {
        //     scale: 2,
        //     duration: 1,
        // }, {
        //     scale: 1,
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: '.talk-btn',
        //         start: '-100% center',
        //         scrub: true,
        //         // markers: true
        //     }
        // })

        // tl.fromTo('.global', {
        //     scale: 0,
        //     opacity: 0,
        //     ease: 'power1.inOut',
        //     duration: 1,
        // }, {
        //     scale: 1,
        //     opacity: 1,
        //     ease: 'power1.inOut',
        // })

        // tl.fromTo('.global-text', {
        //     x: -500,
        //     ease: 'power1.inOut',
        //     duration: 1,
        // }, {
        //     x: 0,
        //     duration: 1,
        //     ease: 'power1.inOut'
        // })

    }, [])

    return (
        <div className='overflow-x-hidden'>
            <div className='w-[100vw] h-full pb-20'>
                <div className='w-[100vw] h-[50vh] flex items-center justify-center text-white bg-red-300'>
                    HI, Welcome to <span className='text'>Baoiam!</span>
                </div>

                {/* Section 1 */}
                <div className='py-28 px-24'>
                    <div className='flex flex-col items-center gap-8 border-y-2 border-red-500 py-12'>
                        <h2 className='text-[4rem] text-center px-20 what'>Whatever your brand challenge,
                            Baoiam Partnerships has a solution.</h2>
                        <button className='px-8 py-4 bg-red-700 text-xl rounded-full talk-btn'>let's talk about it</button>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='grid grid-cols-3 gap-8 w-full h-full mt-24 px-24'>
                    {section2.map((info, index) => {
                        return <div key={index} className='flex flex-col gap-8'>
                            <img className='w-full h-[32rem]' src={info.img} alt="" />
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-7xl font-bold'>{info.title}.</h3>
                                <h4 className='text-6xl font-bold text-red-600'>{info.num}</h4>
                                <h5 className='text-3xl font-semibold'>{info.subtitle}</h5>
                                <h6 className='text-xl tracking-tight'>{info.desc}</h6>
                            </div>
                        </div>
                    })}

                </div>

                {/* Contact */}
                <ContactForm />
            </div>
        </div >
    )
}

export default GSCB
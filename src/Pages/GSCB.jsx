import React, { useEffect } from 'react'
import ContactForm from '../Components/GSCB/ContactForm'
import gsap from 'gsap'

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

    return (
        <div className='overflow-x-hidden'>
            <div className='w-[100vw] h-full pb-20'>
                <div className='h-[50vh] w-full relative overflow-hidden'>
                    <img src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg" className="w-full h-full object-cover" alt="" />
                    <div className='flex items-center justify-center text-white absolute top-0 left-0 right-0 bottom-0 bg-black/45'>
                        Global Collabo Startup Program
                    </div>
                </div>

                {/* Section 1 */}
                <div className='py-28 px-24'>
                    <div className='flex flex-col items-center gap-8 border-y-2 border-black py-12'>
                        <h2 className='text-[4rem] text-center px-20 what'>Whatever your brand challenge,
                            Baoiam Partnerships has a solution.</h2>
                        <button className='px-8 py-4 border border-black hover:bg-black hover:text-white transition-all ease-in-out text-xl rounded-full talk-btn'>let's talk about it</button>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='grid grid-cols-3 gap-8 w-full h-full mt-24 px-24'>
                    {section2.map((info, index) => {
                        return <div key={index} className='group flex flex-col gap-8 relative'>
                            <img className='w-full h-[32rem]' src={info.img} alt="" />
                            <div className='flex flex-col gap-4 opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/50 transition-all ease-linear text-center pt-24 text-white'>
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

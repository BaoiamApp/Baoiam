import React from 'react'
import Marquee from 'react-fast-marquee'

const BrandMarquee = ({array}) => {
    const arrayDoubled=[...array,...array,...array,...array];
    return (
        <div className="flex px-14 dark:bg-slate-200 my-4 mx-auto">

        <Marquee className='flex gap-4'>{
            arrayDoubled.map((item, index) => (
                <div key={index} className="flex-shrink-0 mx-8 h-fit w-24 md:w-28">
                    <img
                        src={item}
                        alt={`Image `}
                        className=" mx-auto object-cover"
                        />
                </div>
            ))
        }</Marquee>
        </div>
    )
}

export default BrandMarquee
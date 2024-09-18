import React from 'react'
import Marquee from 'react-fast-marquee'

const BrandMarquee = ({array}) => {
    const arrayDoubled=[...array,...array,...array,...array];
    return (
        <div className="flex w-11/12 my-4 mx-auto">

        <Marquee className='flex gap-4'>{
            arrayDoubled.map((item, index) => (
                <div key={index} className="flex-shrink-0">
                    <img
                        src={item}
                        alt={`Image `}
                        className=" h-16 w-28 object-contain"
                        />
                </div>
            ))
        }</Marquee>
        </div>
    )
}

export default BrandMarquee
import React from 'react'
import Marquee from 'react-fast-marquee'
import Alliance from '../../assets/Universities/Alliance.png'
import IILM from '../../assets/Universities/IILM.png'
import DU from '../../assets/Universities/DU.webp'
import Amity from '../../assets/Universities/Amity.png'
import GLA from '../../assets/Universities/GLA.webp'

const BrandMarquee = () => {
    const BrandArray=[Alliance, IILM, DU, Amity,GLA, IILM, DU, Amity,GLA]
    return (
        <div className="flex w-11/12 mx-auto">

        <Marquee className='flex gap-4'>{
            BrandArray.map((item, index) => (
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
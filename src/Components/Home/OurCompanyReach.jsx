import React from 'react'
import { universities } from '../../assets/Universities/Universities'
import { brands } from '../../assets/BrandPartners/Brands'

const OurCompanyReach = () => {
  return (
    <div className='w-11/12'>
        <div>Our College Reach</div>        
        <div className="grid auto-cols-max">
            {
                brands.map((item)=>(
                    <div className="w-28 h-auto">
                        <img src={item} alt="" className='w-full h-full object-cover' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurCompanyReach
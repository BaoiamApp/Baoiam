import React from 'react'
import { universities } from '../../assets/Universities/Universities'

const OurCollegeReach = () => {
  return (
    <div className='w-11/12'>
    <div>Our College Reach</div>        
    <div className="grid auto-cols-fr">
        {
            universities.map((item)=>(
                <div className="w-28 h-auto">
                    <img src={item} alt="" className='w-full h-full object-cover' />
                </div>
            ))
        }
    </div>
</div>
  )
}

export default OurCollegeReach
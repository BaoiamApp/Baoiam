import React, { useEffect } from 'react'
import gsap from 'gsap'

const Origin = () => {

useEffect(() => {


    gsap.fromTo('.anime8',{opacity:0,y:30},
        {opacity:1,
          y:0,
          duration:1,
          ease:'back.inOut',
          stagger:0.3,
          scrollTrigger:{
            trigger:'.animediv3',
            start:'top 110%',
            end:'bottom 100%',
          }
          
        }
        )

        


},[])


    return (
        <div className='animediv3 px-12 lg:px-20 w-full'>
            {/* Content */}
            <div className='text-center'>
                <h4 className='anime8 text-4xl font-semibold'><span className='text-indigo-600'>Baoiam's</span> origin</h4>

                <p className='anime8 text-base sm:text-lg text-slate-600 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur, neque veniam architecto maiores autem accusamus quasi non delectus incidunt.</p>
                <p className='anime8 text-base sm:text-lg text-slate-600 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quibusdam! Ipsum quae repudiandae deserunt! Corrupti, saepe? Maxime, mollitia facere natus culpa fugit soluta tenetur nemo quas accusamus, doloremque velit eligendi.</p>
            </div>

            {/* Video */}
            <div className='anime8 mt-12 flex justify-between flex-col md:flex-row gap-8'>
                <div className='w-4/5 mx-auto'>
                    <video controls className='h-full w-full' src="https://cdn.pixabay.com/video/2021/03/05/66976-521238760_large.mp4"></video>
                </div>

                {/* <div className='w-full md:w-[45%]'>
                    <h6 className='text-2xl font-semibold mt-12'>How we <span className='text-amber-600'>started</span></h6>
                    <p className='text-base sm:text-lg text-slate-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, nisi iusto quaerat dolor atque.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Origin
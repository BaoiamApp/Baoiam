import React from 'react'

const GSCB = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='bg-[#0C0111] text-white w-[100vw]'>
                <div className='w-[100vw] h-[50vh]  flex items-center justify-center text-white bg-red-300'>
                    HI, Welcome to Baoiam!
                </div>

                {/* Section 1 */}
                <div className='py-28 px-24'>
                    <div className='flex flex-col items-center gap-8 border-y-2 border-red-500 py-12'>
                        <h2 className='text-[4rem] text-center px-20'>Whatever your brand challenge,
                            Baoiam Partnerships has a solution.</h2>
                        <button className='px-8 py-4 bg-red-700 text-xl rounded-full'>let's talk about it</button>
                    </div>
                </div>

                {/* Section 2 */}
                <div>
                    <h3 className='text-[4rem] font-semibold text-center text-red-700'>Global ad solutions</h3>

                    <div className='flex items-center justify-between w-full mt-4 px-24'>
                        <div className='w-[40%] flex flex-col gap-4 px-16'>
                            <h4 className='text-4xl font-medium'>Leveraging TED's storytelling expertise and global reach to create highly impactful campaigns.</h4>

                            <p>We provide partners with a full-service team—strategists, account managers, creatives, producers, designers, editors, and more.</p>
                        </div>
                        <div className='w-[60%]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GSCB
import React from 'react'

const ContactForm = () => {

    const interestedCheckbox = [
        {
            id: 1,
            label: 'Communication training',
            value: 'communication',
        },
        {
            id: 2,
            label: 'Conferences',
            value: 'conferences',
        },
        {
            id: 3,
            label: 'Content collaboration',
            value: 'content',
        },
        {
            id: 4,
            label: 'Custom events',
            value: 'custom',
        },
        {
            id: 5,
            label: 'Media',
            value: 'media',
        },
        {
            id: 6,
            label: 'Podcasts',
            value: 'podcasts',
        },
        {
            id: 7,
            label: 'Other (list below)',
            value: 'other',
        },
    ]

    return (
        <div className='mt-28 px-24 w-full'>
            <h3 className='text-[3rem] font-medium'>Contact</h3>
            <p className='mt-8 text-xl'>
                "<span className='text-red-600'>*</span>"
                indicates required fields
            </p>

            <form action='' className='flex flex-col gap-8 w-full mt-4'>
                {/* Name */}
                <div className='flex flex-col gap-4 w-full'>
                    <label htmlFor="name" className='text-lg font-semibold'>Name <span className='text-red-600'>*</span></label>
                    <div className='flex items-center justify-between gap-8'>
                        <div className='flex flex-col gap-2 w-full'>
                            <input type="text" required id='name' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                            <span className='text-sm'>First</span>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <input type="text" required id='name' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                            <span className='text-sm'>Last</span>
                        </div>

                    </div>
                </div>

                {/* Company */}
                <div className='flex gap-8 justify-between w-full'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="company" className='text-lg font-semibold'>Company <span className='text-red-600'>*</span></label>
                        <div className='flex flex-col gap-2 w-full'>
                            <input type="text" required id='company' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                            <span className='text-sm'>Who do you work for?</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="agency" className='text-lg font-semibold'>Company represented (if agency)</label>
                        <input type="text" id='agency' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                    </div>
                </div>

                {/* Email & Phone */}
                <div className='flex gap-8 justify-between w-full'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="email" className='text-lg font-semibold'>Email <span className='text-red-600'>*</span></label>
                        <div className='flex flex-col gap-2 w-full'>
                            <input type="email" required id='email' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="name" className='text-lg font-semibold'>Phone</label>
                        <input type="tel" inputmode="numeric" id='name' maxLength={10} className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                    </div>
                </div>

                {/* Job Title & Industry */}
                <div className='flex gap-8 justify-between w-full'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="jobt" className='text-lg font-semibold'>Job Title</label>
                        <div className='flex flex-col gap-2 w-full'>
                            <input type="text" id='jobt' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="Industry" className='text-lg font-semibold'>Industry</label>
                        <select className='bg-transparent border border-gray-400 px-4 py-1 text-lg' name="industry" id="industry" value='Industry'>
                            <option className='text-black'>Select an Industry</option>
                            <option value="software" className='text-black'>Technology - Software</option>
                        </select>
                    </div>
                </div>

                {/* Interested */}
                <div className='flex flex-col gap-2 w-full'>
                    <h6 className='text-lg font-semibold'>I am interested in... <span className='text-red-600'>*</span></h6>

                    <div className='grid grid-cols-2 grid-rows-4'>
                        {interestedCheckbox.map((box, i) => {
                            return <div key={i} className='flex items-center gap-2'>

                                <input type="checkbox" id={box.value} name={box.value} value={box.value} className='size-4' />
                                <label htmlFor={box.value}>{box.label}</label>

                            </div>
                        })}
                    </div>

                    <div className='flex flex-col mt-8 gap-2'>
                        <label htmlFor="interested" className='text-lg font-semibold'>How can we help?</label>

                        <textarea name="" id="" rows={6} className='bg-transparent border border-gray-400 px-4 py-1 text-lg' ></textarea>
                    </div>

                    <button type='submit' className='px-6 py-2 mt-4 bg-red-600 rounded-full w-fit uppercase text-sm font-medium'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
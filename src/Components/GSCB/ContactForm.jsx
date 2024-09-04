import React from 'react'
import { industry, interestedCheckbox } from '../../Data'

const ContactForm = () => {

    return (
        <div className='mt-20 w-[70%] p-4 mx-auto h-full'>

            <h1 className='text-5xl font-semibold'>Contact</h1>

            <form action='' className='w-full h-full py-4 flex flex-col gap-4 text-black'>

                {/* Name */}
                <div className='flex flex-col w-full'>
                    <p className='text-lg font-medium'>Name <span className='text-red-600'>*</span></p>
                    <div className='flex items-center justify-between gap-8 w-full'>
                        <div className='w-1/2 flex flex-col'>
                            <input type="text" id='first' className='px-4 py-1 border border-black/60 w-full' required />
                            <label  htmlFor='first'>First</label>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <input type="text" id='last' className='px-4 py-1 border border-black/60 w-full' required />
                            <label htmlFor='last'>Last</label>
                        </div>
                    </div>
                </div>

                {/* Company */}
                <div className='flex gap-8 w-full'>
                    <div className='flex-col flex w-1/2'>
                        <label className='text-lg font-medium' htmlFor='company'>Company <span className='text-red-600'>*</span></label>
                        <div className='w-full'>
                            <input type="text" id='company' className='px-4 py-1 border border-black/60 w-full' required />
                            <span>Who do you work for?</span>
                        </div>
                    </div>

                    <div className='flex-col flex w-1/2'>
                        <label className='text-lg font-medium' htmlFor='agency'>Company represented (if agency)</label>

                        <input type="text" id='agency' className='px-4 py-1 border border-black/60 w-full' />
                    </div>
                </div>

                {/* Email & Phone */}
                <div className='flex gap-8 w-full'>
                    <div className='flex-col flex w-1/2'>
                        <label className='text-lg font-medium' htmlFor='email'>Email <span className='text-red-600'>*</span></label>
                        <input type="email" id='email' className='px-4 py-1 border border-black/60 w-full' required />
                    </div>

                    <div className='flex-col flex w-1/2'>
                        <label className='text-lg font-medium' htmlFor='phone'>Phone</label>

                        <input type="tel" id='phone' inputMode='numeric' maxLength={10} className='px-4 py-1 border border-black/60 w-full' />
                    </div>
                </div>

                {/* Job & Industry */}
                <div className='flex gap-8 w-full'>
                    <div className='flex-col flex w-1/2'>
                        <label className='text-lg font-medium' htmlFor='job'>Job Title</label>
                        <input type="text" id='job' className='px-4 py-1 border border-black/60 w-full' />
                    </div>

                    <div className='flex-col flex w-1/2'>
                        <label className='text-lg font-medium' htmlFor='industry'>Industry</label>
                        <select name="" id="industry" className='px-4 py-1 border border-black/60 w-full'>
                            <option value="">Select an Industry</option>
                            {industry.map((i) => {
                                return <option key={i.id} value={i.value}>{i.label}</option>
                            })}
                        </select>
                    </div>
                </div>

                {/* Interested */}
                <div>
                    <p className='text-lg font-medium'>I am interested in... <span className='text-red-600'>*</span></p>

                    <div className='grid grid-cols-2 mt-2'>
                        {interestedCheckbox.map((c) => {
                            return <div key={c.id} className='flex items-center'>
                                <input type="checkbox" id={c.value} name={c.value} value={c.value} required />
                                <label className="ml-2" htmlFor={c.value}>{c.label}</label>
                            </div>
                        })}
                    </div>
                </div>

                {/* Textarea */}
                <div className='w-full'>
                    <label className='text-lg font-medium' htmlFor='help'>How can we help?</label>

                    <textarea rows={4} id='help' className='px-4 py-1 border border-black/60 w-full mt-2'></textarea>

                    <button type='submit' className='px-6 py-2 mt-4 uppercase rounded-full bg-black text-white'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm
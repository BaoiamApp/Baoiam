import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const ContactForm = () => {

    const interestedCheckbox = [
        {
            id: 1,
            label: 'Web Development',
            value: 'Web Development',
        },
        {
            id: 2,
            label: 'Product Management',
            value: 'Product Management',
        },
        {
            id: 3,
            label: 'Andriod Development',
            value: 'Andriod Development',
        },
        {
            id: 4,
            label: 'Digital Marketing',
            value: 'Digital Marketing',
        },
        {
            id: 5,
            label: 'SEO',
            value: 'SEO',
        },
        {
            id: 6,
            label: 'Graphic Design',
            value: 'Graphic Design',
        },
        {
            id: 7,
            label: 'Data Analytics',
            value: 'Data Analytics',
        },
    ]

    return (
        // <div className='mt-28 px-24 w-full'>
        //     <h3 className='text-[3rem] font-medium'>Contact</h3>
        //     <p className='mt-8 text-xl'>
        //         "<span className='text-red-600'>*</span>"
        //         indicates required fields
        //     </p>

        //     <form action='' className='flex flex-col gap-8 w-full mt-4'>
        //         {/* Name */}
        //         <div className='flex flex-col gap-4 w-full'>
        //             <label htmlFor="name" className='text-lg font-semibold'>Name <span className='text-red-600'>*</span></label>
        //             <div className='flex items-center justify-between gap-8'>

        //                 <input type="text" required className='bg-transparent border w-1/2 border-gray-400 px-4 py-1 text-lg' />

        //                 <input type="text" required className='bg-transparent border w-1/2 border-gray-400 px-4 py-1 text-lg' />

        //             </div>
        //         </div>

        // {/* Email & Phone */}
        // <div className='flex gap-8 justify-between w-full'>
        //     <div className='flex flex-col gap-2 w-full'>
        //         <label htmlFor="email" className='text-lg font-semibold'>Email <span className='text-red-600'>*</span></label>
        //         <div className='flex flex-col gap-2 w-full'>
        //             <input type="email" required id='email' className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
        //         </div>
        //     </div>
        //     <div className='flex flex-col gap-2 w-full'>
        //         <label htmlFor="name" className='text-lg font-semibold'>Phone</label>
        //         <input type="tel" inputmode="numeric" maxLength={10} className='bg-transparent border border-gray-400 px-4 py-1 text-lg' />
        //     </div>
        // </div>

        // {/* Interested */}
        // <div className='flex flex-col gap-2 w-full'>
        //     <h6 className='text-lg font-semibold'>I am interested in... <span className='text-red-600'>*</span></h6>

        //     <div className='grid grid-cols-2 grid-rows-4'>
        //         {interestedCheckbox.map((box, i) => {
        //             return <div key={i} className='flex items-center gap-2'>

        //                 <input type="checkbox" id={box.value} name={box.value} value={box.value} className='size-4' />
        //                 <label htmlFor={box.value}>{box.label}</label>

        //             </div>
        //         })}
        //     </div>

        //     <div className='flex flex-col mt-8 gap-2'>
        //         <label htmlFor="interested" className='text-lg font-semibold'>How can we help?</label>

        //         <textarea name="" id="" rows={6} className='bg-transparent border border-gray-400 px-4 py-1 text-lg' ></textarea>
        //     </div>

        //     <button type='submit' className='px-6 py-2 mt-4 bg-red-600 rounded-full w-fit uppercase text-sm font-medium'>Submit</button>
        // </div>
        //     </form>
        // </div>

        <div className='mt-20 w-[80%] p-4 mx-auto flex h-full border border-black'>
            <div className='w-[40%] h-[25rem] p-8 bg-black text-white'>
                <h1 className='text-3xl'>Contact Information</h1>
                <h3 className='text-sm mt-4'>Do you have any queries? Reach out to us and we are happy to help you!</h3>

                <div className='flex flex-col gap-4 mt-8'>
                    <div className='flex items-center gap-4'>
                        <FaPhone size={22} /> <span>+91 8069640635</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <IoMdMail size={22} /> <span>tutors@baoiam.com</span>
                    </div>
                </div>
            </div>

            <form action='' className='w-[60%] h-full py-8 px-12 flex flex-col gap-4 text-black'>

                <div className='flex items-center justify-between gap-8'>

                    <input type="text" required placeholder='First Name' className='bg-transparent border-b w-1/2 border-black placeholder:text-black px-4 py-1 focus:outline-none' />

                    <input type="text" required placeholder='Last Name' className='bg-transparent border-b w-1/2 border-black placeholder:text-black px-4 py-1 focus:outline-none' />


                </div>

                {/* Email & Phone */}
                <div className='flex items-center justify-between gap-8'>

                    <input type="text" required placeholder='Email' className='bg-transparent border-b w-1/2 border-black placeholder:text-black px-4 py-1 focus:outline-none' />

                    <input type="tel" inputmode="numeric" placeholder='Phone' maxLength={10} className='bg-transparent w-1/2 border-b border-black placeholder:text-black px-4 py-1 focus:outline-none' />

                </div>


                {/* Interested */}
                <div className='flex flex-col gap-4 w-full'>
                    {/* <h6 className='font-medium'>I am interested in...</h6> */}

                    <div className='w-full'>
                        <select name="" id="" className='bg-transparent border-b w-full border-black placeholder:text-black px-4 py-1 focus:outline-none'>
                            <option value="">Select</option>
                            {interestedCheckbox.map((i) => {
                                return <option key={i.id} value={i.value}>{i.label}</option>
                            })}
                        </select>
                    </div>


                    <textarea name="" id="" placeholder='Write here your message' rows={4} className='bg-transparent border-b border-black placeholder:text-black px-4 py-1 text-lg focus:outline-none' ></textarea>

                    <button type='submit' className='px-6 py-2 mt-4 bg-black text-white rounded-md w-fit uppercase text-sm font-medium'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm
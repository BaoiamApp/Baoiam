import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { School } from '../Data'
import { CourseDesc2, CourseOverview } from '../assets/assets';
import { FaArrowRightLong, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa6';
import { MdCheck } from 'react-icons/md';

import * as MDIcons from 'react-icons/md'
import * as FCIcons from 'react-icons/fc'
import * as GRIcons from 'react-icons/gr'
import * as SLIcons from 'react-icons/sl'
import * as GOIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'

const SchoolCourse = () => {

    const { id } = useParams();
    const course = School.find((cate) => cate.subCate.find((subCate) => subCate.id === parseInt(id)));
    const subCourse = course.subCate.find((subCate) => subCate.id === parseInt(id));

    console.log(subCourse);

    const [swiper, setSwiper] = useState(null);

    const handleNextClick = () => swiper.slideNext();
    const handlePrevClick = () => swiper.slidePrev();

    // For maping icons dynamically
    const highlightIcons = (icon) => {
        if (icon.startsWith("Md")) {
            return MDIcons[icon]
        } else if (icon.startsWith("Fc")) {
            return FCIcons[icon]
        } else if (icon.startsWith("Gr")) {
            return GRIcons[icon]
        }
        else if (icon.startsWith("Sl")) {
            return SLIcons[icon]
        }
        else if (icon.startsWith("Go")) {
            return GOIcons[icon]
        }
        else if (icon.startsWith("Pi")) {
            return PiIcons[icon]
        }
        else {
            return "not found"
        }
    }

    return (
        <div>
            {/* Banner */}
            <div className='lg:w-full lg:h-[68vh] xl:h-[80vh]'>
                <img src={subCourse.banner} alt={`${subCourse.course} Banner`} className='w-full h-full object-cover object-top' />
            </div>

            {/* Course Description */}
            <div className='flex items-center flex-col md:flex-row gap-12 md:gap-4 lg:gap-24 justify-between px-4 lg:px-24 my-12'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[1.7rem] lg:text-4xl font-bold text-neutral-600'>{subCourse.course}</h3>
                    {subCourse.desc.map((d, i) => {
                        return <p className='text-[0.8rem] lg:text-base' key={i}>{d}</p>
                    })}

                    <button className='pl-4 pr-6 py-2 border text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 hover:text-white'>Enroll Now <FaArrowRightLong size={22} className='group-hover:animate-pulse' /> </button>
                </div>

                <img src={CourseDesc2} alt="" className='w-72 h-72 lg:w-full lg:h-96 rounded-ss-[7rem] rounded-ee-[7rem] shadow-2xl shadow-black' />
            </div>

            {/* Course Overview */}
            <div className='px-8 lg:px-24 my-12 py-12 flex justify-between flex-col-reverse md:flex-row gap-12 md:gap-8 lg:gap-24 w-full'>
                <div className='w-full md:w-[40%]'>
                    <img src={CourseOverview} alt="" className='w-full md:w-72 h-72 lg:w-full lg:h-96 object-cover shadow-[-15px_15px_#ea580c] lg:shadow-[-20px_20px_#ea580c]' />
                </div>
                <div className='w-full md:w-[60%]'>
                    <h4 className='text-[1.6rem] lg:text-4xl font-semibold mb-2 lg:mt-12 lg:mb-4'>Course <span className='border-b border-orange-500 text-orange-500'>Overview</span></h4>

                    <ul className='list-inside list-disc marker:text-orange-600 marker:text-xl flex flex-col gap-2 w-full'>
                        {subCourse.overview.map((v, i) => {
                            return <li key={i} className='font-medium text-[0.8rem] lg:text-base'>{v}</li>
                        })}
                    </ul>
                </div>
            </div>

            {/* Course Curriculum */}
            <div className='w-full px-8 lg:px-24 my-12 md:my-20 h-full '>
                <h4 className='text-[2rem] lg:text-4xl font-semibold text-neutral-600 mb-2 lg:mb-4'>Course <span className='text-orange-500 border-b border-orange-500'>Curriculum</span></h4>

                <ul className='list-inside list-disc marker:text-orange-500 marker:text-xl'>
                    {subCourse.curriculum.map((c, i) => {
                        return <li key={i} className='py-1 text-[0.9rem] lg:text-base'>{c}</li>
                    })}
                </ul>
            </div>

            {/* Course Highlights */}
            <div className='py-8 px-8 lg:px-24 w-full h-full'>
                <h4 className='text-4xl font-semibold mb-8'>Course <span className='border-b text-orange-500 border-orange-500'>Highlights</span></h4>

                <div className='flex items-center justify-center flex-wrap gap-x-6 gap-y-4 text-black'>
                    {subCourse.highlights.map((h, i) => {
                        return <div key={i} className='bg-white group hover:scale-105 shadow-2xl px-4 py-8 h-44 md:h-52 rounded-xl flex flex-col gap-4 w-[21rem] lg:w-64'>
                            <span className='text-4xl drop-shadow-2xl group-hover:text-orange-600 group-hover:shadow-orange-600 group-hover:animate-bounce transition-all ease-in-out'>{React.createElement(highlightIcons(h.icon))}</span>
                            <p className='tracking-tighter'><span className='text-2xl font-semibold leading-tight tracking-tighter'>{h.head}</span> <br /> {h.desc}</p>
                        </div>
                    })}

                </div>

            </div>

            {/* Join we us */}
            <div className='my-12 px-8 lg:px-24 w-full h-full'>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                        <h2 className="mb-4 text-center text-[1.8rem] font-bold text-gray-800 md:mb-8 lg:text-4xl xl:mb-12">Join With Us Find the <span className='text-orange-500 border-b border-orange-500'>Right Course</span></h2>

                        <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">

                            {subCourse.plans.map((p, i) => {
                                return <div key={i} className={`flex flex-col rounded-lg border ${p.name === "Premium" ? "border-orange-500 relative" : ""} p-4 pt-6`}>
                                    <div className="mb-12">
                                        {p.name === "Premium" ? <>
                                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                                                <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
                                            </div>
                                        </> : ""}
                                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">{p.name}</div>

                                        <p className="mx-auto mb-8 px-8 text-center text-gray-500 font-medium">{p.courseName}</p>

                                        <div className="space-y-2">

                                            {p.courseItems.map((item, index) => {
                                                return <div key={index} className="flex gap-2">
                                                    <MdCheck size={22} className='text-orange-500' />
                                                    <span className="text-gray-600">{item}</span>
                                                </div>
                                            })}

                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-col gap-8">
                                        <div className="flex items-end justify-center gap-1">
                                            <span className="self-start text-gray-600">₹</span>
                                            <span className="text-4xl font-bold text-gray-800">{p.price}</span>
                                            <span className="text-gray-500">/Full Course</span>
                                        </div>

                                        <button className={`block rounded-lg ${p.name === "Premium" ? "bg-orange-500 text-white" : "bg-gray-500"} px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700 md:text-base`}>Buy Now</button>
                                    </div>
                                </div>
                            })}
                        </div>

                        <div className="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <Link to={'/'} className="text-gray-600 underline transition duration-100 hover:text-orange-600 active:text-orange-400">Get in touch</Link>.</div>
                    </div>
                </div>
            </div>

            {/* Emi & Placement */}
            <div className='flex items-center flex-col md:flex-row gap-8 lg:justify-around px-8 lg:px-24 my-12 lg:my-32'>
                <div className='border border-orange-500 rounded-3xl px-6 py-4 shadow-xl md:w-[35rem]'>
                    <p className='text-center font-semibold text-orange-500 text-[1.2rem] lg:text-2xl mb-2'>Easy EMI</p>
                    <p className='text-neutral-600 mb-2 text-sm lg:text-base'>Easy monthly payment options with our emi facilities</p>

                    <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-neutral-600'>
                        <li className='text-sm lg:text-base'>No upfront payment required</li>
                        <li className='text-sm lg:text-base'>Fixed monthly installments</li>
                        <li className='text-sm lg:text-base'>Flexible repayment options</li>
                    </ul>
                </div>

                <div className='border border-orange-500 rounded-3xl px-6 py-4 shadow-xl md:w-[35rem] h-[12.5rem] lg:h-[11.5rem]'>
                    <p className='text-center font-semibold text-orange-500 text-[1.2rem] lg:text-2xl mb-2'>Pay After Placement</p>
                    <p className='text-neutral-600 mb-2 text-sm lg:text-base'>Pay only when you get placed with our Pay After Placement support</p>

                    <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-neutral-600'>
                        <li className='text-sm lg:text-base'>With our Pay After Placement program, you invest in your career development now and pay us only when yoy land a job.</li>
                    </ul>
                </div>
            </div>

            {/* Amazing Offer */}
            <div className='py-8 px-8 lg:px-24 my-20 w-full h-full text-white bg-gradient-to-r from-orange-400 to-orange-600 text-center'>
                <h4 className='text-[2rem] lg:text-4xl font-semibold mb-2 lg:mb-4'>Amazing <span className='border-b'>Career</span></h4>
                <p className='text-sm lg:text-lg'>Grab these exclusive offers available only once a year.</p>

                <div className='flex items-center flex-col md:flex-row gap-4 justify-center w-full mt-8'>
                    <div className='bg-white w-80 rounded-3xl px-6 py-4 shadow-xl'>
                        <p className='text-center font-semibold text-neutral-500 text-[1rem] lg:text-xl mb-2'>BUY 2 COURSES & GET</p>
                        <p className='mb-2 text-2xl font-bold text-orange-500'>15% OFF</p>
                    </div>
                    <div className='bg-white w-80 rounded-3xl px-6 py-4 shadow-xl'>
                        <p className='text-center font-semibold text-neutral-500 text-[1rem] lg:text-xl mb-2'>BUY 3 COURSES & GET</p>
                        <p className='mb-2 text-2xl font-bold text-orange-500'>20% OFF</p>
                    </div>
                    <div className='bg-white w-80 rounded-3xl px-6 py-4 shadow-xl'>
                        <p className='text-center font-semibold text-neutral-500 text-[1rem] lg:text-xl mb-2'>BUY 4 COURSES & GET</p>
                        <p className='mb-2 text-2xl font-bold text-orange-500'>25% OFF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolCourse
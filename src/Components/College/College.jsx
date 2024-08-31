import React, { useDebugValue, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import CoursesList from '../CoursesList'
import { useParams } from 'react-router-dom'

function College() {
    const params=useParams();
    const [filteredCourses,setFilteredCourses]=useState([]);
    const [catagory,setCatagory]=useState('');
    const [duration,setDuration]=useState('');
    const [difficultyList,setDifficultyList]=useState(['beginner','advanced']);

    useEffect(()=>{
        console.log()
        setFilteredCourses(()=>{
            return (
                CoursesList[params.courseName].filter(course=>{
                    return difficultyList.includes(course.difficulty);
                })
            )
        })
    },[catagory,duration,difficultyList])
  return (
    <div>
        <div className=' bg-gradient-to-br from-orange-300 to-violet-300 flex flex-col gap-2 py-12 items-center justify-center'>
            <h1 className="text-4xl text-center font-bold">All Courses for {params.courseName}</h1>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className=" py-4">
            <div className="college-filters">

            </div>
            <div className="college-main">
                <div className="college-sort">

                </div>
                <div className="w-11/12 college-card-container grid grid-cols-[repeat(auto-fill,_minmax(252px,1fr))] mx-auto gap-4">
                    {
                        filteredCourses.map(course=>{
                            return <CourseCard course={course} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default College
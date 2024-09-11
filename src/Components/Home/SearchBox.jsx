import React, { useState, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { School } from '../../Data'
import { Link } from 'react-router-dom'

const SearchBox = () => {
    const [boxOpen, setBoxOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState(false)
    const [searchBox, setSearchBox] = useState(false)
    const scourse = School[0].subCate;

    const filteredCourses = scourse.filter(course =>
        course.course.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const result = (eve) => {
        if(searchQuery.length < 0){
            setSearchBox(false)
        } else{
            setSearchQuery(eve)
            setSearchBox(true)
        }
    }

    return (
        <div>
            <RiSearch2Line onClick={() => setBoxOpen(true)} size={20} className='z-10 cursor-pointer' />

            {boxOpen && (
                <div className='absolute top-0 left-0 w-[100vw] h-[100vh] z-50 bg-black/50 backdrop-blur-sm flex gap-2 flex-col items-center pt-28 lg:pt-40 transition-transform ease-in-out duration-500'>
                    <RxCross2 onClick={() => setBoxOpen(false)} className='text-white absolute top-20 right-12 md:right-32 cursor-pointer' size={25} />

                    <span className='text-2xl text-white text-left w-72'>Search</span>
                    <div className='bg-white relative flex items-center justify-between px-6 py-1 border border-black rounded-3xl'>
                        <input
                            type="text"
                            placeholder='Courses'
                            className=' py-2 focus:outline-none w-72'
                            value={searchQuery}
                            onChange={(e) => result(e.target.value)}
                        />
                        <RiSearch2Line size={20} />
                    </div>

                    {searchBox && (
                        <div className='bg-white w-96 h-fit max-h-80 overflow-auto rounded-md py-4 flex flex-col'>
                            {filteredCourses.map((c, i) => {
                                return <Link to={`/course/school/${c.id}`} onClick={() => setBoxOpen(false)} className='py-2 px-6 hover:bg-gray-200' key={i}>{c.course}</Link>
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBox
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import CoursesList from '../CoursesList'
import { useParams } from 'react-router-dom'
import FilterSidebar from './CourseFilters';
import SortPopover from './SortPopover';
import TypewriterText from './TypewriterTextCollege';

function College() {
    const params = useParams();
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [duration, setDuration] = useState('');

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState([]);

    const [showFilters, setShowFilters] = useState(false);


    const isPriceInRange = (coursePrice, range) => {
        console.log(range);
        
        if (range === 'Free') {
            return coursePrice === 'Free';
        }
        return coursePrice!=="Free";
    };

    useEffect(() => {
        const applyFilters = () => {
            let updatedCourses = CoursesList[params.courseName];

            if (selectedCategory.length > 0) {
                updatedCourses = updatedCourses.filter((course) =>
                    selectedCategory.includes(course.category)
                );
            }

            if (selectedDifficulty.length > 0) {
                updatedCourses = updatedCourses.filter((course) =>
                    selectedDifficulty.includes(course.difficultyLevel)
                );
            }

            if (selectedPrice.length > 0) {
                updatedCourses = updatedCourses.filter((course) =>
                    //   selectedPrice.includes(course.price);
                    selectedPrice.some((range) => isPriceInRange(course.price, range))
                );
            }



            setFilteredCourses(updatedCourses);
        };

        applyFilters();
    }, [selectedCategory, selectedDifficulty, selectedPrice]);

    return (
        <div className=''>
            {/* <div className='flex flex-col gap-2 py-12 items-center justify-center'>
                <h1 className="text-4xl text-center font-bold">All Courses for {params.courseName}</h1>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet.</p>
                <TypewriterText/>
            </div> */}
            
            <div className=" py-4  h-max ">
                <div className="college-filters relative">
                    <FilterSidebar toggler={() => {
                        setShowFilters(old => !old);
                    }} isOpen={showFilters} setCategory={setSelectedCategory} setDifficulty={setSelectedDifficulty} setPrice={setSelectedPrice} />
                </div>
                <div className="college-main pl-8 flex flex-col items-end justify-end">
                    <div className="college-sort flex justify-end w-11/12 mx-auto">
                    
                    <SortPopover setFilteredCourses={setFilteredCourses} courses={filteredCourses}/>
                    </div>
                    {filteredCourses.length ? <div className="w-11/12 college-card-container grid grid-cols-[repeat(auto-fill,_minmax(252px,1fr))] mx-auto gap-4">
                        {
                            filteredCourses.map(course => {
                                return <CourseCard course={course} />
                            })
                        }
                    </div> : <div className='text-center mx-2 w-full text-3xl flex items-center font-bold py-12 justify-center'>No data found!</div>}
                </div>
            </div>
            {/* {showFilters && <div className="sideFilterBar absolute"><FilterSidebar/></div>} */}
        </div>
    )
}

export default College
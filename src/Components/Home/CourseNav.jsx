import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CollegeCourseData, OtherCourseData, School } from '../../Data';

const CourseNav = ({ setShow, courses }) => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabActiveState = (tabId, index) => {
        setActiveTabId(tabId);
        setActiveTabIndex(index);
    };

    // will change after api integration
    const label = [{ title: School[0].Cate, id: 0, link: courses[0].name }, { title: CollegeCourseData[0].Cate, id: 1, link: courses[1].name }, { title: OtherCourseData[0].Cate, id: 2, link: courses[2].name }]

    return (
        <div>
            <div className="flex flex-col h-fit p-1">
                {label.map((c, i) => {
                    return (
                        <div key={i} className={`flex items-center justify-between py-1 w-48 ${activeTabIndex === i && 'text-amber-600'}`}>
                            <Link onClick={() => setShow(false)} to={`/courses/${c.link}`} className="hover:underline hover:text-amber-600 font-semibold">
                                {c.title}
                            </Link>
                            <button onClick={() => handleTabActiveState(c.id, i)} className={`hover:text-amber-600`}>
                                <IoIosArrowDown
                                    className={`${activeTabIndex === i && '-rotate-90'}`}
                                />
                            </button>
                        </div>
                    );
                })}
            </div>

            {activeTabIndex !== null && (
                <div className="absolute top-6 left-[14.3rem] h-72 w-72 overflow-x-hidden rounded-b-3xl rounded-tr-3xl bg-white dark:bg-gray-700 border-black/20 border-[1px] text-sm p-1 shadow-lg z-50 dark:text-white overflow-y-auto">
                    {courses[activeTabIndex].subcategories.map((sub, index) => {
                        return (
                            <div key={index} className="px-6 py-2 hover:bg-amber-50">
                                <Link onClick={() => setShow(false)} to={`/course/${sub.name}/${sub.id}`} className="text-sm">
                                    {sub.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CourseNav;


// import React, { useState } from 'react';
// import { IoIosArrowDown } from 'react-icons/io';
// import { Link } from 'react-router-dom';
// import { CollegeCourseData, OtherCourseData, School } from '../../Data';

// const CourseNav = ({ setShow, setDropCourse, dropCourse, courses }) => {
//     const [activeTabId, setActiveTabId] = useState(0);
//     const [activeTabIndex, setActiveTabIndex] = useState(0);

//     const handleTabActiveState = (tabId, index) => {
//         setActiveTabId(tabId);
//         setActiveTabIndex(index);
//     };

//     const label = [School[0].Cate, CollegeCourseData[0].Cate, OtherCourseData[0].Cate]

//     return (
//         <div>
//             <div className="flex overflow-auto relative">
//                 <div className="flex flex-col h-fit w-[30%] p-1">
//                     {courses.map((c, i) => {
//                         return (
//                             <div className={`flex items-center justify-between py-1 pl-4 ${activeTabIndex === i && 'text-amber-600'}`}>
//                                 <Link onClick={() => setShow(false)} to={`/courses/${c.name}`} className="hover:underline hover:text-amber-600 font-semibold">
//                                     {c.name}
//                                 </Link>
//                                 <button onClick={() => handleTabActiveState(c.id, i)} className={`hover:text-amber-600`}>
//                                     <IoIosArrowDown
//                                         className={`${activeTabIndex === i && '-rotate-90'}`}
//                                     />
//                                 </button>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="w-[70%] h-full overflow-x-hidden dark:bg-gray-700 text-sm p-1 z-50 dark:text-white overflow-y-auto">
//                     {activeTabIndex !== null && (
//                         <div className="w-full h-72 overflow-x-hidden dark:bg-gray-700 dark:text-white overflow-y-auto">
//                             {courses[activeTabIndex].subcategories.map((sub, index) => {
//                                 return (
//                                     <div key={index} className="px-6 py-2 hover:bg-amber-50">
//                                         <Link onClick={() => setShow(false)} to={`/course/${sub.name}/${sub.id}`} className="text-sm">
//                                             {sub.name}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseNav;
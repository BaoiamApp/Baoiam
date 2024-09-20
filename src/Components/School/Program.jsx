import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

//icons
import {
    FaArrowRight,
    FaBook,
    FaBug,
    FaBullhorn,
    FaCamera,
    FaChartLine,
    FaCode,
    FaGlobe,
    FaLightbulb,
    FaMicrophone,
    FaPaintbrush,
    FaPalette,
    FaRobot,
    FaUserTie,
} from "react-icons/fa6";
import { FaCog, FaHandsHelping, FaSearch, FaTasks } from "react-icons/fa";
import {
    MdContentPaste,
    MdDesignServices,
    MdGroup,
    MdWeb,
} from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

const Program = ({ title, data, icons }) => {    
    useEffect(() => console.log(data), [])
    return (

        <div className="p-5 mx-auto lg:w-10/12 mt-10  sm:px- xs:px-4" id="courses">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Catalogue of {title} Courses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
                {data.map((item, index) => (
                    <Link to={`#`} >
                        <button
                            key={index}
                            className="dark:bg-indigo-600 w-full px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
                        >
                            <span className="relative z-10 flex items-center gap-4 ">
                                <span>
                                {icons[index]}
                                </span>
                                <span className="">{item.name}</span>
                            </span>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Program
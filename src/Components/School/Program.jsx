import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Program = ({ title, data, icons  }) => {
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Animation for the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for each button
    buttonRefs.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: button,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            delay: index * 0.1, // Stagger the animations
          },
        }
      );
    });
    console.log(data)
  }, []);

  return (
    <div className="p-5 mx-auto w-11/12 lg:w-10/12 mt-10 sm:px-4 xs:px-4" id="courses">
      <h1
        ref={titleRef}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
      >
        {title} Programs Catalouge
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
      {data.map((item, index) => (
                    <Link to={`/course/${item.name}/${item.id}`} >
                        <button
                            key={index}
                            className="dark:bg-indigo-600 w-full px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base h-full"
                        >
                            <span className="relative z-10 flex items-center gap-4 ">
                                <span className='flex items-center text-lg justify-center mb-4'>
                                {icons[index]}
                                </span>
                                <span className="text-xl text-start font-semibold text-gray-800 dark:text-white mb-4">{item.name}</span>
                            </span>
                        </button>
                    </Link>
                ))}
      </div>
    </div>
  );
};

export default Program;

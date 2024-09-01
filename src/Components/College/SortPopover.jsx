import React, { useState, useRef, useEffect } from 'react';

const SortPopover = ({setFilteredCourses,courses }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sortCourses = (sortBy) => {
    console.log("sorting....")
    switch (sortBy) {
      case 'Price: Low to High':
        return [...courses].sort((a, b) => {
            if(a.price === 'Free'){
                return true;
            }
            a.price - b.price;
        });
      case 'Price: High to Low':
        return [...courses].sort((a, b) => b.price - a.price);
      case 'Duration: Low to High':
        return [...courses].sort((a, b) => a.courseDuration.split(" ")[0]- b.courseDuration.split(" ")[0]);
      case 'Duration: High to Low':
        return [...courses].sort((a, b) => b.courseDuration.split(" ")[0]- a.courseDuration.split(" ")[0]);
      default:
        return courses;
    }
  };

  return (
    <div className="relative inline-block text-left shadow-md rounded-xl border-2" ref={dropdownRef}>
      {/* Sort Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Sort
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => { setFilteredCourses(sortCourses("Price: Low to High")) }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Price: Low to High
            </button>
            <button
              onClick={() => { setFilteredCourses(sortCourses("Price: High to Low"))}}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Price: High to Low
            </button>
            <button
              onClick={() => { setFilteredCourses(sortCourses("Duration: Low to High"))}}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
               Duration: Low to High
            </button>
            <button
              onClick={() => { setFilteredCourses(sortCourses("Duration: High to Low"))}}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
               Duration: High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortPopover;

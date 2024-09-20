import React from "react";

const Program = ({ title, data }) => {
  return (
    <div className="p-5 mx-auto lg:w-10/12 mt-10  sm:px- xs:px-4" id="courses">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title} Programs
      </h1>
      {/* <ul className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-2 gap-x-5 text-left text-[#031864] font-semibold">
          {static_data.map((ele, id) => {
            return (
              <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                {ele}
              </li>
            );
          })}
        </ul> */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
        {data.map((category, index) => (
          <button
            key={index}
            className="dark:bg-indigo-600 w-full px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Program;

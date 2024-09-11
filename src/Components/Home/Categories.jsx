// src/components/Categories.jsx
import React, { useEffect } from "react";
import gsap from "gsap";

const Categories = () => {
  const categories = [
    "Information Systems",
    "Human Resources",
    "Business Management",
    "Quality Control",
    "Health Care",
    "Police Training ",
    "Management",
    "Accounting",
    "Health and Safety",
  ];

  useEffect(() => {
    gsap.fromTo(
      ".anime-d4",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: ".anime-d4",
          start: "top 100%",
          end: "bottom 90%",
        },
      }
    );
  });

  return (
    <div className="text-center pt-11 pb-11 mx-auto anime-d4">
      <h1 className="text-3xl font-bold mx-auto mb-4">
        Advance Your Career Learn in{" "}
        <span className="text-indigo-600">Baoiam</span>
      </h1>
      <p className="text-xl w-[90%] mx-auto md:text-lg mb-4 md:mb-6">
        Upskill in business analytics, health care, graphic design, management,
        and more.
      </p>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="dark:bg-indigo-600 px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;

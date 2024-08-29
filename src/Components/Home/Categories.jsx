// src/components/Categories.jsx
import React from 'react';

const Categories = () => {
    const categories = [
        'Information Systems',
        'Human Resources',
        'Business Management',
        'Quality Control',
        'Health Care',
        'police tranning ',
        'Management',
        'Accounting',
        'Health and Safety'
    ];

    return (
        <div className="text-center p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Advance Your Career. Learn in . Boaiam</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Upskill in business analytics, health care, graphic design, management, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        className="px-4 py-2 md:px-6 md:py-2 border border-gray-300 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm md:text-base"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Categories;

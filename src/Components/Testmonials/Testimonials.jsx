import React from 'react';
import data from './testimonialsData.json';

const Star = ({ filled }) => (
  <svg className={`w-4 ${filled ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
);

const Testimonials = () => {
  return (
    <div className="my-6">
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-2">
        <h2 className="font-extrabold text-lg md:text-4xl">{data.title}</h2>
        <p className="mt-4 leading-relaxed">{data.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl h-60 relative max-md:gap-16 max-md:max-w-lg mx-auto mt-20">
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
            <img src={testimonial.image} className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" alt={testimonial.name} />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-800 leading-relaxed">{testimonial.quote}</p>
            </div>
               <div className='absolute translate-x-1/2 items-center flex flex-col bottom-4 gap-2 right-1/2'>
            <div className="flex justify-center space-x-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < testimonial.rating} />
              ))}
            </div>

            <div className="">
              <h4 className="text-sm font-bold whitespace-nowrap">{testimonial.name}</h4>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

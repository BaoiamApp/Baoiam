import React, { useState, useEffect } from 'react';
import Lenskart from '../../assets/Partners/Lenskart.png';
import Hirect from '../../assets/Partners/Hirect.png';
import Internshala from '../../assets/Partners/Internshala.png';
import HCLTech from '../../assets/Partners/HCLTech.png';
import HelloIntern from '../../assets/Partners/HelloIntern.png';
import Mentorsity from '../../assets/Partners/Mentorsity.png';

const Partners = () => {
  const images = [Lenskart, Hirect, Internshala, HCLTech, HelloIntern, Mentorsity];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(3);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth >= 812) {
        setImagesPerSlide(3); 
      } else if (window.innerWidth >= 560) {
        setImagesPerSlide(2); 
      } else {
        setImagesPerSlide(1); 
      }
    };

    updateImagesPerSlide(); 
    window.addEventListener('resize', updateImagesPerSlide); 

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + imagesPerSlide >= images.length ? 0 : prevIndex + imagesPerSlide
      );
    }, 1500); 

    return () => {
      clearInterval(interval); 
      window.removeEventListener('resize', updateImagesPerSlide); 
    };
  }, [images.length, imagesPerSlide]);

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerSlide);

  return (
    <div className='m-2'>
      <h1 className="text-center text-3xl font-bold my-9">
        We are associated with businesses and non-profits
        <span className='text-amber-500'> from startups to MNC's</span>
      </h1>

      <div className="px-5 ">
        <div className="flex justify-between bg-[radial-gradient(circle,_white,_black)] bg-white/50 backdrop-blur-[100%] bg-opacity-20 drop-shadow-lg  border-white/20 rounded-md bg-clip-padding backdrop-filter border border-gray-100">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-full  px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-contain w-full h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

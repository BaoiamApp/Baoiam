import React, { useState, useEffect } from "react";
import Lenskart from "../../assets/Partners/Lenskart.png";
import Hirect from "../../assets/Partners/Hirect.png";
import Internshala from "../../assets/Partners/Internshala.png";
import HCLTech from "../../assets/Partners/HCLTech.png";
import HelloIntern from "../../assets/Partners/HelloIntern.png";
import Mentorsity from "../../assets/Partners/Mentorsity.png";
import Marquee from "react-fast-marquee";
import gsap from "gsap";

const Partners = () => {
  const images = [
    Lenskart,
    Hirect,
    Internshala,
    HCLTech,
    HelloIntern,
    Mentorsity,
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [imagesPerSlide, setImagesPerSlide] = useState(3);

  // useEffect(() => {
  //   const updateImagesPerSlide = () => {
  //     if (window.innerWidth >= 812) {
  //       setImagesPerSlide(3);
  //     } else if (window.innerWidth >= 560) {
  //       setImagesPerSlide(2);
  //     } else {
  //       setImagesPerSlide(1);
  //     }
  //   };

  //   updateImagesPerSlide();
  //   window.addEventListener('resize', updateImagesPerSlide);

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex + imagesPerSlide >= images.length ? 0 : prevIndex + imagesPerSlide
  //     );
  //   }, 1500);

  //   return () => {
  //     clearInterval(interval);
  //     window.removeEventListener('resize', updateImagesPerSlide);
  //   };
  // }, [images.length, imagesPerSlide]);

  // const visibleImages = images.slice(currentIndex, currentIndex + imagesPerSlide);

  useEffect(() => {
    gsap.fromTo(
      ".anime-d8",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".anime-d8",
          start: "top 100%",
          end: "bottom 90%",
        },
      }
    );
  }, []);

  return (
    <div className="m-2 anime-d8">
      <h1 className="text-center text-3xl w-[90%] w-[60%] mx-auto font-bold my-9">
        We are associated with businesses and non-profits
        <span className="text-indigo-600"> from startups to MNC's</span>
      </h1>

      <Marquee className="px-5" speed={100}>
        <div className="flex justify-between">
          {images.map((image, index) => (
            <div key={index} className="w-full  px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-contain w-[80%] h-32"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;

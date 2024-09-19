import React, { useState, useEffect } from "react";
import Lenskart from "../../assets/Partners/Lenskart.png";
import Hirect from "../../assets/Partners/Hirect.png";
import Internshala from "../../assets/Partners/Internshala.png";
import HCLTech from "../../assets/Partners/HCLTech.png";
import HelloIntern from "../../assets/Partners/HelloIntern.png";
import Mentorsity from "../../assets/Partners/Mentorsity.png";
import BrandMarquee from "../Marquee/BrandMarquee";
import { universities } from "../../assets/Universities/Universities";
import { brands } from "../../assets/BrandPartners/Brands";

const Partners = () => {
  const images = [
    Lenskart,
    Hirect,
    Internshala,
    HCLTech,
    HelloIntern,
    Mentorsity,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(3);

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
  //   window.addEventListener("resize", updateImagesPerSlide);

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex + imagesPerSlide >= images.length
  //         ? 0
  //         : prevIndex + imagesPerSlide
  //     );
  //   }, 1500);

  //   return () => {
  //     clearInterval(interval);
  //     window.removeEventListener("resize", updateImagesPerSlide);
  //   };
  // }, [images.length, imagesPerSlide]);

  // const visibleImages = images.slice(
  //   currentIndex,
  //   currentIndex + imagesPerSlide
  // );

  return (
    <div className="dark:bg-black">
      <div className="my-20">
        <h2 className="text-3xl px-2 text-center sm:text-4xl dark:text-white font-bold text-gray-900">
          Our Trusted{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Business Partners
          </span>
        </h2>
        <p className="text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10">
          We collaborate with organizations from startups to multinational
          firms, including diverse range of business and non profits
        </p>
        {/* <div className="bg-slate-100">
          <div className="flex justify-between">
            {visibleImages.map((image, index) => (
              <div key={index} className="w-full px-2">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="object-contain w-full h-28"
                />
              </div>
            ))}
          </div>
        </div> */}
        <BrandMarquee array={brands} />
      </div>
      <div className="my-20">
        <h2 className="text-3xl text-center sm:text-4xl px-2 dark:text-white font-bold text-gray-900">
          Shaping Futures with{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Leading Universities
          </span>
        </h2>
        <p className="text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10">
          Partnering with top universities to provide quality education and
          access to advanced resources, ensuring students are prepared for
          future success.
        </p>

        <BrandMarquee array={universities} />
        {/* <div className="bg-slate-100">
        <div className="flex justify-between">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-full px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-contain w-full h-28"
              />
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Partners;

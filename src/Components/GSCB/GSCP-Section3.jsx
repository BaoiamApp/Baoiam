import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

const GSCPBottom = () => {
  const textRef = useRef(null); // Reference for the text to animate

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 5,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current, 
          start: "top 80%",         
          toggleActions: "play none none reverse", 
        },
      }
    );
  }, []);

  return (
    <div className="relative text-center p-8 md:p-12 lg:p-[5.5vw]">
      <div className="absolute inset-0 bg-black opacity-0 dark:opacity-65"></div>
      <h6
        ref={textRef}
        className="relative text-xl md:text-2xl lg:text-3xl z-10 max-xs:text-[5vw] max-xs:leading-tight"
      >
        For any questions or to discuss partnership opportunities, please contact us at{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          partner@baoiam.com
        </span>
      </h6>
    </div>
  );
};

export default GSCPBottom;

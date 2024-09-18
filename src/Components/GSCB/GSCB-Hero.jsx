import React, { useEffect } from "react";
import gsap from "gsap";
import demo from "../../assets/GSCP/favicon.mp4";

const HeroSection = () => {
  useEffect(() => {
    const sentences = gsap.utils.toArray(".sentence");

    const tl = gsap.timeline({ repeat: -1 });

    sentences.forEach((sentence) => {
      const h1s = sentence.querySelectorAll("h1");
      const h2s = sentence.querySelectorAll("h2");
      const spans = sentence.querySelectorAll(".spn");

      tl.fromTo(sentence, { display: "none" }, { display: "flex", duration: 0 })
        .fromTo(
          spans,
          { scaleY: 0, transformOrigin: "center" },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          h1s,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          h2s,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          },
          "-=0"
        )

        .to(sentence, { display: "none", duration: 2 });
    });

    gsap.fromTo(
      ".effect",
      {
        opacity: 0,
        y: 30,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.inOut",
        stagger: 0.4,
      }
    );
  }, []);

  return (
    <section className="flex flex-col px-6 pt-20 items-center">
    <div className="flex py-16 items-center flex-col justify-evenly px-6">
      <h1 className="effect text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-8 md:mb-4 lg:mb-[4vw] text-center ">
        Global Collabo Educational Partnership
      </h1>
      <p className="effect text-2xl md:text-3xl lg:text-2xl text-center px-4 lg:px-[10rem] mb-4 md:mb-6 lg:mb-[4vw]  md:font-medium ">
        Uniting educational institutions globally for a brighter future
      </p>
      {/* Uncomment and customize the button and link as needed */}
      {/* <a
        href="#4"
        className="effect text-lg md:text-xl lg:text-2xl font-semibold gap-3 mb-6 hover:text-slate-600 max-xs:text-[3vw] max-xs:px-4 max-xs:font-semibold md:text-[2.3vw]"
      >
        Learn more about the Make Academic Alliance →
      </a>
      <button className="effect enlarge shadow-inset px-8 py-3 rounded-full font-bold bg-black text-white hover:bg-white hover:text-black transition-all max-xs:px-4 max-xs:py-2 max-xs:text-[2.5vw]">
        Click Me
      </button> */}
    </div>
  
    {/* Uncomment and use the video section as needed */}
    {/* <div className="w-full h-[75vh] relative overflow-hidden px-4 rounded-3xl max-xs:h-[30vh] max-md:h-[40vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src={demo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
  
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
  
      <div className="text-white font-extrabold flex flex-col items-center justify-center w-full h-full relative text-center">
        <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-xs:gap-1">
          <h1 className="bg-red-500 p-2 max-xs:p-1">
            <span className="text-4xl md:text-5xl lg:text-6xl">Responsive</span>
          </h1>
          <span className="w-1 h-48 bg-black max-xs:h-24"></span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Layout</h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">For</h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Us.</h2>
        </div>
      </div>
    </div> */}
  </section>
  
  );
};

export default HeroSection;

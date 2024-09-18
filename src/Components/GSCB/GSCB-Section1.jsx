import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const marquee_imgs = [
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F4XvJVi6UxVYuBoNcqtYnUO%2F51dc6ab3d5fb7a294e9c1ae82ec60c6f%2FGroup_86352.png&w=1200&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F2WBizctzgyfHmlJ4ij7XKG%2Fd6357a445dd2d11ef7cd043b5eec7185%2FGroup_86351.png&w=750&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F2vSJPjxsts6ozhd7QCTXgS%2F33323dbc6e5b6484e6b1631130e96a27%2FGroup_86347.png&w=1080&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F3DzWyNVXsTpnjKt4veGa37%2F4bd2c6121f835c28d9c180895dbc8de2%2FGroup_86348.png&w=1920&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F16BgY5izUWIBlgThVza7hW%2F21150260e1b094f455c474b5aec0a994%2FGroup_86349.png&w=828&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F3QtrtKRIon2vI1Y7KkuX9U%2F619b3d342fd9f6206cab033c7f2e42d0%2FGroup_86350.png&w=1200&q=90",
];

const Section1 = ({ dark }) => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "GCEP (Global Collabo Educational Partnership) is an initiative by BAOIAM aimed at building strong, innovative alliances with schools, colleges, and educational institutions worldwide. Through GCEP, we collaborate to enhance the quality of education and create new opportunities for students and educators alike.";

  useEffect(() => {
    const color = dark ? "white" : "black";
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 6,
        start: "top 90%",
        end: "bottom 85%",
      },
      color: color,
      stagger: 0.1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  const stepRefs = useRef([]); // Array to hold references for the steps

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    stepRefs.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.3, // Adding a stagger effect
          scrollTrigger: {
            trigger: step, // Trigger animation for each step
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="flex items-center justify-evenly flex-col">
      <div
        ref={triggerRef}
        className="px-[6vw] max-xs:px-4 max-xs:py-8 max-md:py-0 text-center"
      >
        {text.split("").map((letter, index) => (
          <span
            className="leading-[5vw] font-normal text-slate-200 dark:drop-shadow-[0_0_0.03rem_white] text-4xl max-xs:leading-[6vw] max-xs:font-medium max-xs:text-[4.5vw] max-md:text-[4.5vw] max-md:leading-[7vw] max-xs:text-white"
            key={index}
            ref={setlettersRef}
          >
            {letter}
          </span>
        ))}
      </div>
      {/* <div className="mt-[40px] text-center relative">
        <h2 className="text-[2vw] max-xs:text-[4vw] max-xs:font-[600] max-md:text-[3vw] ">
          Trusted by a global community of progressive educators
        </h2>

        <div className="mt-[30px] relative">
          <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none"></div>

          <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none"></div>

          <Marquee className="w-[80vw] mb-[4rem] max-xs:mb-[0rem]" speed={100}>
            {marquee_imgs.map((el, i) => (
              <div key={i} className="mr-[-5rem] max-xs:mr-[-6rem]">
                <img
                  className="w-[30%] dark:invert dark:brightness-0 dark:contrast-200"
                  src={el}
                  alt="img"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div> */}

      {/* Join */}

      <section className="w-full h-full py-24 px-6 lg:px-12 max-xs:px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold max-xs:text-3xl">
          How to Join GCEP
        </h2>
        <p className="text-base lg:text-lg mt-4 max-xs:text-sm">
          Follow these steps to become a partner and collaborate with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-md:grid-cols-1">
        {/* Step 1 */}
        <div
          ref={(el) => (stepRefs.current[0] = el)}
          className="flex flex-col items-center bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-center bg-indigo-500 text-white rounded-full w-16 h-16 mb-6">
            <span className="text-2xl font-bold"><BsFillEnvelopeAtFill /></span>
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800 max-xs:text-lg">
            Submit an Inquiry
          </h3>
          <p className="text-sm lg:text-lg text-gray-600 text-center max-xs:text-base">
            Submit an inquiry via the partnership form below.
          </p>
        </div>

        {/* Step 2 */}
        <div
          ref={(el) => (stepRefs.current[1] = el)}
          className="flex flex-col items-center bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-center bg-indigo-500 text-white rounded-full w-16 h-16 mb-6">
            <span className="text-2xl font-bold"><MdPreview /></span>
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800 max-xs:text-lg">
            Review & Discuss
          </h3>
          <p className="text-sm lg:text-lg text-gray-600 text-center max-xs:text-base">
            Our team will review your institution’s goals and discuss how we
            can collaborate.
          </p>
        </div>

        {/* Step 3 */}
        <div
          ref={(el) => (stepRefs.current[2] = el)}
          className="flex flex-col items-center bg-white p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-center bg-indigo-500 text-white rounded-full w-16 h-16 mb-6">
            <span className="text-2xl font-bold"><FaHandshake/></span>
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 w-full text-center text-gray-800 max-xs:text-lg">
            Tailored Partnership
          </h3>
          <p className="text-sm lg:text-lg text-gray-600 text-center max-xs:text-base">
            Once approved, we will co-create a tailored partnership plan to
            meet your educational needs.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Section1;

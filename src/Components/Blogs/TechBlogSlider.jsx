import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import carrer1 from "../../assets/carrer1.jpg";
import datasc from "../../assets/datasc.jpg";
import ed_tech from "../../assets/Blogs/ed_tech.png";
import ent from "../../assets/Blogs/ent.jpg";
import stp from "../../assets/Blogs/stup.jpg";
import tech from "../../assets/Blogs/tech.jpg";
import software_testing from "../../assets/Blogs/software_testing.png";
import { useEffect } from "react";
import gsap from "gsap";

const blog_slider = [
  {
    id: 1,
    pic: carrer1,
    des: "The Best Graphic Design Careers — for Beginners and Professionals",
    cat: "TECHNOLOGY",
    icon: stp,
  },
  {
    id: 2,
    pic: datasc,
    des: "The Top Technical Skills All Employees Need in 2022",
    cat: "TECHNOLOGY",
    icon: stp,
  },
  {
    id: 3,
    pic: ed_tech,
    des: "Types Of Quantitative Research for Students and Researchers",
    cat: "TECHNOLOGY",
    icon: ent,
  },
  {
    id: 4,
    pic: software_testing,
    des: "Types Of Quantitative Research for Students and Researchers",
    cat: "TECHNOLOGY",
    icon: tech,
  },
];
export const TechBlogSlider = () => {
  useEffect(() => {
    gsap.fromTo(
      ".b4",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".bdiv3",
          start: "top 90%",
          end: "bottom 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bdiv3 my-14">
      <div>
        {" "}
        <h1 className="m-8 text-3xl font-bold text-center">Recent Blogs</h1>
      </div>
      <div className="mb-6 mt-8 px-10">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className="b4 w-full m-auto rounded-lg  flex flex-col justify-center items-center gap-4"
        >
          {blog_slider?.map((el) => {
            return (
              <SwiperSlide
                className="p-4 cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-100 rounded-md  flex flex-col justify-center items-center gap-4"
                key={el.id}
              >
                <img
                  className="h-full rounded-md  w-full"
                  src={el.pic}
                  alt="technoloy_image"
                />
                <div className="flex flex-col justify-center items-center rounded-md">
                  <h2 className="text-sm  my-3 md:text-lg font-bold xs:text-[0.98rem]">
                    {el.des}
                  </h2>
                  <div className="w-full flex gap-2 items-center">
                    <img src={el.icon} alt="tech_iconImage" />
                    <h3 className="text-gray-700 dark:text-slate-300 text-sm md:text-md font-bold">
                      {el.cat}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

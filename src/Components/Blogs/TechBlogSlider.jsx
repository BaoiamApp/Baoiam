import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import carrer1 from "../../assets/carrer1.jpg";
import datasc from "../../assets/datasc.jpg";
import ed_tech from "../../assets/Blogs/ed_tech.png";
import software_testing from "../../assets/Blogs/software_testing.png";
import { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const blog_slider = [
  {
    id: 1,
    pic: software_testing,
    des: "Types Of Quantitative Research for Students and Researchers",
    info: "Jan 13, 2024 • 55 mins read",
    title: "Gunjan Gupta",
  },
  {
    id: 2,
    pic: carrer1,
    des: "The Best Graphic Design Careers — for Beginners and Professionals",
    info: "Sep 13, 2022 • 5 mins read",
    title: "John Doe",
  },
  {
    id: 3,
    pic: datasc,
    des: "The Top Technical Skills All Employees Need in 2022",
    info: "Dec 13, 2023 • 5 mins read",
    title: "John Doe",
  },
  {
    id: 4,
    pic: ed_tech,
    des: "Types Of Quantitative Research for Students and Researchers",
    info: "Jan 13, 2024 • 5 mins read",
    title: "Kumar shree",
  },
];
export const TechBlogSlider = () => {
const navigate=useNavigate();

useEffect(() => {
  
  gsap.fromTo('.b4',{opacity:0,y:30},{
    opacity:1,
    duration:1,
    y:0,
    ease:'back.inOut',
    stagger:0.3,
    scrollTrigger:{
      trigger:'.bdiv3',
      start:'top 90%',
      end:'bottom 80%'
    }
  })

},[])

  return (
    <div className='my-14'>
      <div>
        {" "}
        <h1 className='m-8 text-3xl font-bold text-center'>Recent Blogs</h1>
      </div>
      <div className='mb-6 mt-8 px-10'>
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
          className='b4 w-full  p-6  m-auto rounded-lg  flex flex-col justify-center items-center gap-4'
        >
          {blog_slider?.map((el) => {
            return (
              <SwiperSlide
                className='p-4 cursor-pointer hover:shadow-indigo-400 hover:shadow-md duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-100 rounded-md  flex flex-col justify-center items-center gap-4'
                key={el.id}
                onClick={()=>navigate(`/Blog_detail/${el.id}`)}
              >
                <img
                  className='h-full rounded-md  w-full'
                  src={el.pic}
                  alt='technoloy_image'
                />
                <div className='flex-grow'>
                  {/* <span className={`text-sm text-blue-500 font-semibold`}>
                    {el.title}
                  </span> */}
                  <h2 className='text-lg font-bold text-wrap  my-2 truncate'>{el.des}</h2>
                  <p className='text-sm'>{el.info}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
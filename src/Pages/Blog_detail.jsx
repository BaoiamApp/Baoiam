import React, { useEffect, useState } from "react";
import code from "../assets/code.jpg";
import ai from "../assets/ai.webp";
import marketing from "../assets/marketing.jpg";
import carrer1 from "../assets/carrer1.jpg";
import datasc from "../assets/datasc.jpg";
import business from "../assets/business.jpg";
import tech from "../assets/tech.jpg";
import critical from "../assets/critical.jpg";
import content_data from "../Data/Content.js";
import { useParams } from "react-router-dom";
import data2 from "../Data/Content2.js";
import { FaUserCircle } from "react-icons/fa";
import {
  FaBullhorn,
  FaClipboardList,
  FaLightbulb,
  FaMugHot,
  FaRobot,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const getcmt = [
  {
    id: 1,
    name: "Ayesha",
    comment:
      " Flat view is a good match for blogs or news articles, where the aim is to keep things brief.",
  },
  {
    id: 1,
    name: "Ayesha",
    comment:
      " Flat view is a good match for blogs or news articles, where the aim is to keep things brief.",
  },
];

const Blog_detail = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(content_data);
    console.log(content_data[id].heading1);
    return () => {};
  }, []);

  const handlePostSubmit = () => {
    console.log("hi");
    if (email === "" || comment === "" || !name === "") {
      toast.error("Please fill in all the fields");
    }

    axios
      .post("", {
        comment: comment,
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const data = [
  //   {
  //     heading: content_data[id].title && content_data[id].title,
  //     data: (
  //       <div
  //         dangerouslySetInnerHTML={{
  //           __html: content_data[id].detail && content_data[id].detail,
  //         }}
  //       ></div>
  //     ),
  //   },
  //   {
  //     heading: content_data[id].heading1,
  //     data: (
  //       <div>
  //         <img className="h-[20rem] w-[100%] object-contain mb-5" src={tech} />

  //         <p>{content_data[id].p1}</p>
  //       </div>
  //     ),
  //   },
  //   {
  //     heading: <p className="text-[1.4rem]">{content_data[id].heading2}</p>,

  //     data: (
  //       <div>
  //         {Array.isArray(content_data[id].p2) ? (
  //           <>
  //             <p>{content_data[id].p2[0]}</p>
  //             <p>{content_data[id].p2[1]}</p>
  //           </>
  //         ) : (
  //           <p>{content_data[id].p2}</p>
  //         )}
  //         {content_data[id] &&
  //           content_data[id].points1 &&
  //           content_data[id].points1.map((item, id) => {
  //             return (
  //               <li>
  //                 <span className="font-bold">{item.head}:</span>
  //                 <span> {item.desc}</span>
  //               </li>
  //             );
  //           })}
  //       </div>
  //     ),
  //   },
  //   {
  //     heading: (
  //       <div>
  //         {id != 8 && (
  //           <h1 className="text-[1.6rem]">{content_data[id].heading3}</h1>
  //         )}
  //         {content_data[id].heading3 &&
  //           content_data[id].heading3.split("\n")[1] && (
  //             <p className="mb-5">{content_data[id].heading3.split("\n")[0]}</p>
  //           )}
  //         <p className="text-[17px] mt-3 font-normal">
  //           {content_data[id].heading3 &&
  //             content_data[id].heading3.split("\n")[1]}
  //         </p>
  //         {content_data[id].sm_head && (
  //           <p className="text-[18px]">{content_data[id].sm_head}</p>
  //         )}
  //       </div>
  //     ),

  //     data: (
  //       <>
  //         {Array.isArray(content_data[id].p3) &&
  //           content_data[id].p3.map((item, id) => {
  //             if (typeof item !== "object")
  //               return <li className="mb-5">{item}</li>;
  //             else
  //               return (
  //                 <li>
  //                   <b>{item.head}: </b>
  //                   {item.desc}
  //                 </li>
  //               );
  //           })}
  //         <div>
  //           {content_data[id].p4 &&
  //             typeof content_data[id].p4[0] == "object" &&
  //             content_data[id].heading4 && (
  //               // Array.isArray(content_data[id].p3)(
  //               <>
  //                 <h1 className="text-[1.6rem] font-bold mt-10">
  //                   {" "}
  //                   {content_data[id].heading4}{" "}
  //                 </h1>
  //                 {/* <p>
  //                 {content_data[id].p4 &&
  //                   content_data[id].p4.map((item, id) => {
  //                     if (typeof item !== "object") return <li>{item}</li>;
  //                     else
  //                       return (
  //                         <li>
  //                           <b>{item.head}: </b>
  //                           {item.desc}
  //                         </li>
  //                       );
  //                   })}
  //               </p> */}
  //               </>
  //             )}
  //           {content_data[id].points2 ? (
  //             content_data[id].points2.map((item, id) => {
  //               return (
  //                 <>
  //                   <li>
  //                     <b>{item.head}</b>:{item.desc}
  //                   </li>
  //                 </>
  //               );
  //             })
  //           ) : (
  //             <>
  //               {" "}
  //               {Array.isArray(content_data[id].p3) ? (
  //                 content_data[id].p3.map((item, id) => {
  //                   if (id == 5)
  //                     return (
  //                       <li>
  //                         <b>{item.head}</b>
  //                       </li>
  //                     );
  //                 })
  //               ) : (
  //                 <p>{content_data[id].p3}</p>
  //               )}
  //               <p className="mt-3">
  //                 {content_data[id].sm_text && content_data[id].sm_text}
  //               </p>
  //               <p>
  //                 {Array.isArray(content_data[id].p4) &&
  //                   content_data[id].p4.map((item, id) => {
  //                     return (
  //                       <li>
  //                         <b>{item.head}:</b>
  //                         {Array.isArray(item.desc) ? (
  //                           <>
  //                             {Array.isArray(item.desc) &&
  //                               item.desc.map((item2, id) => {
  //                                 if (typeof item2 !== "object")
  //                                   return <p>{item2}</p>;
  //                                 else
  //                                   return (
  //                                     <p>
  //                                       <i>
  //                                         <u>{item2.d}</u>
  //                                       </i>
  //                                       :{item2.desc}
  //                                     </p>
  //                                   );
  //                               })}
  //                           </>
  //                         ) : (
  //                           item.desc
  //                         )}{" "}
  //                       </li>
  //                     );
  //                   })}
  //               </p>
  //             </>
  //           )}
  //         </div>
  //       </>
  //     ),
  //   },

  //   {
  //     heading: (
  //       <div>
  //         <h1 className="font-bold text-[1.9rem]">
  //           {content_data[id].conclusion && content_data[id].conclusion}
  //         </h1>
  //         {content_data[id].conclusion_heading && (
  //           <h2 className="text-[1.6rem] mt-4">
  //             {content_data[id].conclusion_heading}
  //           </h2>
  //         )}
  //       </div>
  //     ),

  //     data:
  //       content_data[id].conclusion_para && content_data[id].conclusion_para,
  //   },
  // ];

  return (
    <>
      <div className='h-[auto] w-[90%] sm:text-[1.6vw] mx-[5%] px-[2rem] py-[2.5rem] flex-col my-[2rem] bg-purple-100'>
        <p className='font-bold text-sm dark:text-black'>
          {" "}
          HOME / ARTICLES / SINGLE ARTICLE{" "}
        </p>
        <h1 className='text-[1.3rem] sm:text-[3vw] pt-6 w-[100%] font-extrabold dark:text-black'>
          All That Is Wrong With Codding In The Field Of Apprentices
        </h1>
      </div>
      <div className='w-[80%] lg:flex lg:flex-row  flex-col gap-[2rem] mx-[10%] mt-[10%]'>
        <div className='w-[100%] lg:w-[70%] lg:flex lg:flex-col  flex-col'>
          {/* {data.map((d) => {
            return (
              <>
                <div className="w-[100%] lg:w-[90%] flex flex-col">
                  <h2 className="text-[1.9rem] p-3 mt-[2rem] font-bold">
                    {d.heading}
                  </h2>
                  <p className="p-3">{d.data}</p>
                </div>
              </>
            );
          })} */}

          <div>
            <div dangerouslySetInnerHTML={{ __html: data2[id].head }}></div>
            <div dangerouslySetInnerHTML={{ __html: data2[id].body }}></div>
          </div>
        </div>

        <div className='w-[100%] lg:w-[40%] mt-5'>
          <div className='w-[100%]  rounded pb-5 lg:h-auto h-[45%]  dark:border-white dark:border-[1px] shadow-md shadow-[#00000081] dark:text-black flex flex-col gap-2 '>
            <h2 className='text-[30px] xs:text-[23px] py-5  font-bold text-center dark:text-white'>
              Categories
            </h2>
            <div className='text-[20px] xs:text-[14px] mx-8 hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 bg-[#F3E8FF] px-3 py-2  rounded-lg cursor-pointer transition-all dark:border-[1px] '>
              Product Development
            </div>
            <div className='text-[20px] xs:text-[14px] mx-8 hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 bg-[#F3E8FF] px-3 py-2  rounded-lg cursor-pointer transition-all dark:border-[1px] '>
              Entrepreneurship
            </div>
            <div className='text-[20px] xs:text-[14px] mx-8 hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 bg-[#F3E8FF] px-3 py-2  rounded-lg cursor-pointer transition-all dark:border-[1px] '>
              Java Full-Stack Developer Roadmap
            </div>
            <div className='text-[20px] xs:text-[14px] mx-8 hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 bg-[#F3E8FF] px-3 py-2  rounded-lg cursor-pointer transition-all dark:border-[1px] '>
              Android Development
            </div>
            <div className='text-[20px] xs:text-[14px] mx-8 hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 bg-[#F3E8FF] px-3 py-2  rounded-lg cursor-pointer transition-all dark:border-[1px] '>
              Marketing
            </div>
            <div className='text-[20px] xs:text-[14px] mx-8 hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 bg-[#F3E8FF] px-3 py-2  rounded-lg cursor-pointer transition-all dark:border-[1px] '>
              Artificial Intelligence
            </div>
          </div>

          <div className='w-[100%] mt-20 dark:text-white xs:px-1 rounded pb-5 lg:h-auto h-[45%]  dark:border-white dark:border-[1px] shadow-md shadow-[#00000081] flex flex-col gap-2 '>
            <h2 className='text-[2rem]  font-bold text-center xs:text-[23px] mt-5'>
              Related Blogs
            </h2>

            <div className='flex items-center justify-center xs:dark:shadow-none hover:shadow-lg duration-200 hover:scale-105 hover:bg-white hover:text-black transition-all xs:text-center xs:flex-col xs:px-0 xs:gap-2 xs:mx-1 gap-10 mt-[2rem] px-4 shadow-md dark:shadow-gray-100 mx-4 py-4 dark:shadow-sm cursor-pointer'>
              <img
                className='w-[6rem] xs:w-[5.7rem] xs:h-[5.7rem]'
                src={code}
              />
              <p className='w-[60%]  xs:w-[90%] xs:text-center xs:text-[0.9rem] font-bold text-[1rem]'>
                The Best Graphic Design Careers — for Beginners and
                Professionals{" "}
              </p>
            </div>

            <div className='flex items-center justify-center xs:dark:shadow-none hover:shadow-lg duration-200 hover:scale-105 hover:bg-white hover:text-black transition-all xs:text-center xs:flex-col xs:px-0 xs:gap-2 xs:mx-1 gap-10 mt-[2rem] px-4 shadow-md dark:shadow-gray-100 mx-4 py-4 dark:shadow-sm cursor-pointer'>
              <img className='w-[6rem] xs:w-[5.7rem] xs:h-[5.7rem]' src={ai} />
              <p className='w-[60%]  xs:w-[90%] xs:text-center xs:text-[0.9rem] font-bold text-[1rem]'>
                The Top Technical Skills All Employees Need in 2022
              </p>
            </div>

            <div className='flex items-center justify-center xs:dark:shadow-none hover:shadow-lg duration-200 hover:scale-105 hover:bg-white hover:text-black transition-all xs:text-center xs:flex-col xs:px-0 xs:gap-2 xs:mx-1 gap-10 mt-[2rem] px-4 shadow-md dark:shadow-gray-100 mx-4 py-4 dark:shadow-sm cursor-pointer'>
              <img
                className='w-[6rem] xs:w-[5.7rem] xs:h-[5.7rem]'
                src={marketing}
              />
              <p className='w-[60%]  xs:w-[90%] xs:text-center xs:text-[0.9rem] font-bold text-[1rem]'>
                Types Of Quantitative Research for Students and Researchers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* reply section */}

      <div className='w-[80%] m-auto py-6 flex '>
        {getcmt ? (
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold text-lg text-md'>Comments</h2>
            <div>
              <div className=' flex flex-col gap-6'>
                {getcmt.map((el, index) => (
                  <>
                    <div className='border-2 hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm p-4 bg-zinc-50 rounded-md flex gap-2 items-start'>
                      <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                        <FaUserCircle className='h-full w-full text-zinc-400' />
                      </div>
                      <div key={index} className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                          <p className='font-semibold'>{el.name}</p>
                          <p className='text-zinc-500'>3hr ago</p>
                        </div>
                        <p className='text-[#444444]'>{el.comment}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* end here */}
      <div className='mb-5 mx-[10%] w-[80%] lg:w-[50%] mt-[2rem]'>
        <h1 className='text-[1.3rem] font-bold'>Leave a Reply </h1>
        <p className='text-[1.02rem] my-[1.2rem]'>
          Your email address will not be published. Required fields are marked{" "}
        </p>
        <h2 className='text-[1.13rem] font-bold mb-1'>Add a Response</h2>
        <textarea
          rows='8'
          className='bg-gray-100 w-[100%] p-5 dark:text-black'
          cols='80'
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        {/* <h2 className='text-[1.13rem] mt-5 mb-1'>Name</h2>
        <input
          className='bg-gray-100 w-[100%] p-5 dark:text-black'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2 className='text-[1.13rem] mt-5 mb-1'>Email</h2>
        <input
          className='bg-gray-100 w-[100%] p-5 dark:text-black'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <div>
          <button
            onClick={handlePostSubmit}
            className=' bg-black text-white p-3 rounded-lg mt-9 dark:bg-white dark:text-black'
          >
            Post Comment
          </button>
        </div>
      </div>

      <h2 className='text-[2rem] ml-[10%] font-bold mt-[4rem] xs:top-10 relative top-6 xs:text-[1.325rem]'>
        Other Blogs
      </h2>
      <div className='mx-[10%]  mb-5 md:flex-row w-[80%] md:gap-[2rem] flex-col mt-[2rem] flex justify-evenly'>
        <div className='mt-5 w-[100%] p-[2rem] hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm'>
          <div className='w-[100%]'>
            <img className='w-[100%] ' src={carrer1} />
          </div>
          <div>
            <h2 className='text-[1.3rem] my-3 md:text-[1.2rem] font-bold xs:text-[0.98rem]'>
              The Best Graphic Design Careers — for Beginners and Professionals
            </h2>
            <p className='text-[1.2rem] md:text-[1.1rem] font-semibold xs:text-[0.98rem]'>
              Read More ➭
            </p>
          </div>
        </div>

        <div className='mt-5 w-[100%] p-[2rem] hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm'>
          <div className='w-[100%]'>
            <img className='w-[100%] ' src={datasc} />
          </div>
          <div>
            <h2 className='text-[1.3rem] my-3 md:text-[1.2rem] font-bold xs:text-[0.98rem]'>
              The Top Technical Skills All Employees Need in 2022
            </h2>
            <p className='text-[1.2rem] md:text-[1.1rem] font-semibold xs:text-[0.98rem]'>
              Read More ➭
            </p>
          </div>
        </div>

        <div className='mt-5 w-[100%] p-[2rem] hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm'>
          <div className='w-[100%]'>
            <img className='w-[100%] ' src={business} />
          </div>
          <div>
            <h2 className='text-[1.3rem] my-3 md:text-[1.2rem] font-bold xs:text-[0.98rem]'>
              Types Of Quantitative Research for Students and Researchers
            </h2>
            <p className='text-[1.2rem] md:text-[1.1rem] font-semibold xs:text-[0.98rem]'>
              Read More ➭
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_detail;

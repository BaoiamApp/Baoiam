// import React from "react";
// import { industry, interestedCheckbox } from "../../Data";

// const ContactForm = () => {
//   return (
//     <div className="mt-20 w-[70%] p-4 mx-auto h-full xs:w-full xs:p-4 xs:mt-10 xs:h-full xs:py-2">
//       <h1 className="text-5xl font-semibold xs:text-3xl xs:text-center">
//         Contact
//       </h1>

//       <form
//         action=""
//         className="w-full h-full py-4 flex flex-col gap-4 text-black  xs:flex xs:flex-col xs:gap-4 "
//       >
//         {/* Name */}
//         <div className="flex flex-col w-full xs:flex-col">
//           <p className="text-lg font-medium xs:text-base dark:text-white">
//             Name <span className="text-red-600">*</span>
//           </p>
//           <div className="flex items-center justify-between gap-8 w-full xs:flex-col xs:gap-4 xs:w-full">
//             <div className="w-1/2 flex flex-col xs:w-full">
//               <input
//                 type="text"
//                 id="first"
//                 className="px-4 py-2 border border-black/60 w-full xs:py-1"
//                 required
//               />
//               <label
//                 htmlFor="first"
//                 className="text-sm xs:text-xs dark:text-white"
//               >
//                 First
//               </label>
//             </div>
//             <div className="w-1/2 flex flex-col xs:w-full">
//               <input
//                 type="text"
//                 id="last"
//                 className="px-4 py-2 border border-black/60 w-full xs:py-1"
//                 required
//               />
//               <label
//                 htmlFor="last"
//                 className="text-sm xs:text-xs dark:text-white"
//               >
//                 Last
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Company */}
//         <div className="flex gap-8 w-full xs:flex-col xs:gap-4">
//           <div className="flex-col flex w-1/2 xs:w-full">
//             <label
//               className="text-lg font-medium xs:text-base dark:text-white"
//               htmlFor="company"
//             >
//               Company <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="text"
//               id="company"
//               className="px-4 py-2 border border-black/60 w-full xs:py-1"
//               required
//             />
//             <span className="text-sm xs:text-xs dark:text-white">
//               Who do you work for?
//             </span>
//           </div>

//           <div className="flex-col flex w-1/2 xs:w-full">
//             <label
//               className="text-lg font-medium xs:text-base dark:text-white"
//               htmlFor="agency"
//             >
//               Company represented (if agency)
//             </label>
//             <input
//               type="text"
//               id="agency"
//               className="px-4 py-2 border border-black/60 w-full xs:py-1"
//             />
//           </div>
//         </div>

//         {/* Email & Phone */}
//         <div className="flex gap-8 w-full xs:flex-col xs:gap-4">
//           <div className="flex-col flex w-1/2 xs:w-full">
//             <label
//               className="text-lg font-medium xs:text-base dark:text-white"
//               htmlFor="email"
//             >
//               Email <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="px-4 py-2 border border-black/60 w-full xs:py-1"
//               required
//             />
//           </div>

//           <div className="flex-col flex w-1/2 xs:w-full">
//             <label
//               className="text-lg font-medium xs:text-base dark:text-white"
//               htmlFor="phone"
//             >
//               Phone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               inputMode="numeric"
//               maxLength={10}
//               className="px-4 py-2 border border-black/60 w-full xs:py-1"
//             />
//           </div>
//         </div>

//         {/* Job & Industry */}
//         <div className="flex gap-8 w-full xs:flex-col xs:gap-4">
//           <div className="flex-col flex w-1/2 xs:w-full">
//             <label
//               className="text-lg font-medium xs:text-base dark:text-white"
//               htmlFor="job"
//             >
//               Job Title
//             </label>
//             <input
//               type="text"
//               id="job"
//               className="px-4 py-2 border border-black/60 w-full xs:py-1"
//             />
//           </div>

//           <div className="flex-col flex w-1/2 xs:w-full">
//             <label
//               className="text-lg font-medium xs:text-base dark:text-white"
//               htmlFor="industry"
//             >
//               Industry
//             </label>
//             <select
//               name=""
//               id="industry"
//               className="px-4 py-2 border border-black/60 w-full xs:py-1 "
//             >
//               <option value="">Select an Industry</option>
//               {industry.map((i) => (
//                 <option className="dark:text-white" key={i.id} value={i.value}>
//                   {i.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Interested */}
//         <div className="w-full xs:w-full">
//           <p className="text-lg font-medium xs:text-base dark:text-white">
//             I am interested in... <span className="text-red-600">*</span>
//           </p>
//           <div className="grid grid-cols-2 gap-4 mt-2 xs:grid-cols-1 xs:gap-2">
//             {interestedCheckbox.map((c) => (
//               <div key={c.id} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id={c.value}
//                   name={c.value}
//                   value={c.value}
//                   required
//                 />
//                 <label
//                   className="ml-2 xs:text-sm dark:text-white"
//                   htmlFor={c.value}
//                 >
//                   {c.label}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Textarea */}
//         <div className="w-full xs:w-full">
//           <label
//             className="text-lg font-medium xs:text-base dark:text-white"
//             htmlFor="help"
//           >
//             How can we help?
//           </label>
//           <textarea
//             rows={4}
//             id="help"
//             className="px-4 py-2 border border-black/60 w-full mt-2 xs:py-1 xs:mt-2"
//           ></textarea>
//           <button
//             type="submit"
//             className="px-6 py-2 mt-4 uppercase rounded-full bg-black text-white border-black xs:px-4 xs:py-2 xs:mt-2 dark:bg-[#EB0027] dark:hover:bg-transparent dark:hover:border-[#EB0027] border dark:hover:text-[#EB0027] xs:text-[3vw] xs:px-[15px] py-[3.4px]"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React from "react";
import { industry, interestedCheckbox } from "../../Data";

const ContactForm = () => {
  return (
<<<<<<< HEAD
    <div className="mt-20 w-[70%] p-4 mx-auto h-full max-xs:w-full max-xs:p-4 max-xs:mt-10 max-xs:h-full max-xs:py-2">
      <h1 className="text-5xl font-semibold max-xs:text-3xl max-xs:text-center">
=======
    <div className="mt-5 md:mt-20 md:w-[70%] p-4 mx-auto h-full">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
>>>>>>> bda10e6 (applied Gsap)
        Contact
      </h1>

      <form
        action=""
<<<<<<< HEAD
        className="w-full h-full py-4 flex flex-col gap-4 text-black  max-xs:flex max-xs:flex-col max-xs:gap-4 "
      >
        {/* Name */}
        <div className="flex flex-col w-full max-xs:flex-col">
          <p className="text-lg font-medium max-xs:text-base dark:text-white">
            Name <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center justify-between gap-8 w-full max-xs:flex-col max-xs:gap-4 max-xs:w-full">
            <div className="w-1/2 flex flex-col max-xs:w-full">
              <input
                type="text"
                id="first"
                className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
                required
              />
              <label
                htmlFor="first"
                className="text-sm max-xs:text-xs dark:text-white"
              >
                First
              </label>
            </div>
            <div className="w-1/2 flex flex-col max-xs:w-full">
              <input
                type="text"
                id="last"
                className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
                required
              />
              <label
                htmlFor="last"
                className="text-sm max-xs:text-xs dark:text-white"
              >
=======
        className="w-full h-full py-4 grid grid-col-1 gap-4 text-black"
      >
        {/* Name */}
        <div className="flex flex-col w-full">
          <p className="text-lg font-medium dark:text-white">
            Name <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center justify-between gap-8 w-full">
            <div className="w-1/2 flex flex-col">
              <input
                type="text"
                id="first"
                className="px-4 py-2 border border-black/60 w-full"
                required
              />
              <label htmlFor="first" className="text-sm dark:text-white">
                First
              </label>
            </div>
            <div className="w-1/2 flex flex-col">
              <input
                type="text"
                id="last"
                className="px-4 py-2 border border-black/60 w-full"
                required
              />
              <label htmlFor="last" className="text-sm dark:text-white">
>>>>>>> bda10e6 (applied Gsap)
                Last
              </label>
            </div>
          </div>
        </div>

        {/* Company */}
<<<<<<< HEAD
        <div className="flex gap-8 w-full max-xs:flex-col max-xs:gap-4">
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
=======
        <div className="flex gap-8 w-full">
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
>>>>>>> bda10e6 (applied Gsap)
              htmlFor="company"
            >
              Company <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company"
<<<<<<< HEAD
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
              required
            />
            <span className="text-sm max-xs:text-xs dark:text-white">
=======
              className="px-4 py-2 border border-black/60 w-full"
              required
            />
            <span className="text-sm dark:text-white">
>>>>>>> bda10e6 (applied Gsap)
              Who do you work for?
            </span>
          </div>

<<<<<<< HEAD
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
=======
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
>>>>>>> bda10e6 (applied Gsap)
              htmlFor="agency"
            >
              Company represented (if agency)
            </label>
            <input
              type="text"
              id="agency"
<<<<<<< HEAD
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
=======
              className="px-4 py-2 border border-black/60 w-full"
>>>>>>> bda10e6 (applied Gsap)
            />
          </div>
        </div>

        {/* Email & Phone */}
<<<<<<< HEAD
        <div className="flex gap-8 w-full max-xs:flex-col max-xs:gap-4">
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
=======
        <div className="flex gap-8 w-full">
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
>>>>>>> bda10e6 (applied Gsap)
              htmlFor="email"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
<<<<<<< HEAD
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
=======
              className="px-4 py-2 border border-black/60 w-full"
>>>>>>> bda10e6 (applied Gsap)
              required
            />
          </div>

<<<<<<< HEAD
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
=======
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
>>>>>>> bda10e6 (applied Gsap)
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              inputMode="numeric"
              maxLength={10}
<<<<<<< HEAD
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
=======
              className="px-4 py-2 border border-black/60 w-full"
>>>>>>> bda10e6 (applied Gsap)
            />
          </div>
        </div>

        {/* Job & Industry */}
<<<<<<< HEAD
        <div className="flex gap-8 w-full max-xs:flex-col max-xs:gap-4">
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
=======
        <div className="flex gap-8 w-full">
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
>>>>>>> bda10e6 (applied Gsap)
              htmlFor="job"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job"
<<<<<<< HEAD
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
            />
          </div>

          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
=======
              className="px-4 py-2 border border-black/60 w-full"
            />
          </div>

          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
>>>>>>> bda10e6 (applied Gsap)
              htmlFor="industry"
            >
              Industry
            </label>
            <select
              id="industry"
<<<<<<< HEAD
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1 "
=======
              className="px-4 py-2 border border-black/60 w-full"
>>>>>>> bda10e6 (applied Gsap)
            >
              <option value="">Select an Industry</option>
              {industry.map((i) => (
                <option className="dark:text-white" key={i.id} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Interested */}
<<<<<<< HEAD
        <div className="w-full max-xs:w-full">
          <p className="text-lg font-medium max-xs:text-base dark:text-white">
            I am interested in... <span className="text-red-600">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2 max-xs:grid-cols-1 max-xs:gap-2">
=======
        <div className="w-full">
          <p className="text-lg font-medium dark:text-white">
            I am interested in... <span className="text-red-600">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
>>>>>>> bda10e6 (applied Gsap)
            {interestedCheckbox.map((c) => (
              <div key={c.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={c.value}
                  name={c.value}
                  value={c.value}
                  required
                />
<<<<<<< HEAD
                <label
                  className="ml-2 max-xs:text-sm dark:text-white"
                  htmlFor={c.value}
                >
=======
                <label className="ml-2 dark:text-white" htmlFor={c.value}>
>>>>>>> bda10e6 (applied Gsap)
                  {c.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Textarea */}
<<<<<<< HEAD
        <div className="w-full max-xs:w-full">
          <label
            className="text-lg font-medium max-xs:text-base dark:text-white"
            htmlFor="help"
          >
=======
        <div className="w-full">
          <label className="text-lg font-medium dark:text-white" htmlFor="help">
>>>>>>> bda10e6 (applied Gsap)
            How can we help?
          </label>
          <textarea
            rows={4}
            id="help"
<<<<<<< HEAD
            className="px-4 py-2 border border-black/60 w-full mt-2 max-xs:py-1 max-xs:mt-2"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 mt-4 uppercase rounded-full bg-black text-white border-black  max-xs:mt-2 dark:bg-[#EB0027] dark:hover:bg-transparent dark:hover:border-[#EB0027] border dark:hover:text-[#EB0027] max-xs:text-[3vw] max-xs:px-[17px] max-xs:py-[4.5px]"
=======
            className="px-4 py-2 border border-black/60 w-full mt-2"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-1 text-[3.5vw] md:text-[1.5vw] mt-4 uppercase rounded-full bg-black text-white border-black dark:bg-[#EB0027] dark:hover:bg-transparent dark:hover:border-[#EB0027] border dark:hover:text-[#EB0027]"
>>>>>>> bda10e6 (applied Gsap)
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

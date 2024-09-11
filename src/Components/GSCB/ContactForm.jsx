import React from "react";
import { industry, interestedCheckbox } from "../../Data";

const ContactForm = () => {
  return (
    <div className="mt-5 md:mt-20 md:w-[70%] p-4 mx-auto h-full">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        Contact
      </h1>

      <form
        action=""
        className="w-full h-full py-4 flex flex-col gap-4 text-black"
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
              <label
                htmlFor="first"
                className="text-sm dark:text-white"
              >
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
              <label
                htmlFor="last"
                className="text-sm dark:text-white"
              >
                Last
              </label>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="flex gap-8 w-full">
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="company"
            >
              Company <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company"
              className="px-4 py-2 border border-black/60 w-full"
              required
            />
            <span className="text-sm dark:text-white">
              Who do you work for?
            </span>
          </div>

          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="agency"
            >
              Company represented (if agency)
            </label>
            <input
              type="text"
              id="agency"
              className="px-4 py-2 border border-black/60 w-full"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-8 w-full">
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="email"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border border-black/60 w-full"
              required
            />
          </div>

          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              inputMode="numeric"
              maxLength={10}
              className="px-4 py-2 border border-black/60 w-full"
            />
          </div>
        </div>

        {/* Job & Industry */}
        <div className="flex gap-8 w-full">
          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="job"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job"
              className="px-4 py-2 border border-black/60 w-full"
            />
          </div>

          <div className="flex-col flex w-1/2">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="industry"
            >
              Industry
            </label>
            <select
              id="industry"
              className="px-4 py-2 border border-black/60 w-full"
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
        <div className="w-full">
          <p className="text-lg font-medium dark:text-white">
            I am interested in... <span className="text-red-600">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {interestedCheckbox.map((c) => (
              <div key={c.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={c.value}
                  name={c.value}
                  value={c.value}
                  required
                />
                <label
                  className="ml-2 dark:text-white"
                  htmlFor={c.value}
                >
                  {c.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <div className="w-full">
          <label
            className="text-lg font-medium dark:text-white"
            htmlFor="help"
          >
            How can we help?
          </label>
          <textarea
            rows={4}
            id="help"
            className="px-4 py-2 border border-black/60 w-full mt-2"
          ></textarea>
          <button
            type="submit"
            className="px-3 py-1 text-[4vw] sm:text-[2.3vw] md:text-[1.3vw] mt-4 uppercase rounded-full bg-black text-white border border-black hover:bg-transparent hover:border-black hover:text-black dark:bg-[#EB0027] dark:hover:bg-transparent dark:hover:border-[#EB0027] dark:hover:text-[#EB0027]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

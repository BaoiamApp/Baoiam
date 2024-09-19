import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="ContactUs my-8">
      <section className="relative dark:bg-black px-4 py-8 md:py-10 z-10 mt-4 md:mt-14 mb-6 md:mb-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-3xl md:text-5xl dark:text-white font-semibold text-gray-900">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl dark:text-slate-300 text-gray-600 mt-4 md:mt-6">
            Have any questions, feedback, or need assistance? We're just a
            message away.
            <br /> Fill out the form below, and our team will get back to you
            shortly.
          </p>
        </div>
      </section>

      <section className="py-2 dark:bg-black px-4 md:px-6 rounded-xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="lg:w-3/5 dark:bg-black p-4 md:p-6 lg:p-8 rounded-lg border">
            <h2 className="text-2xl md:text-3xl font-bold md:mb-8 mb-4">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-gray-700 dark:text-slate-300 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="w-full p-3 border dark:bg-slate-800  border-gray-300 rounded-md"
                    placeholder="Enter your first name here..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-gray-700 dark:text-slate-300 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="w-full p-3 border dark:bg-slate-800 border-gray-300 rounded-md"
                    placeholder="Enter your last name here..."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border dark:bg-slate-800 border-gray-300 rounded-md"
                  placeholder="xyz.@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 dark:text-slate-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 border dark:bg-slate-800 border-gray-300 rounded-md"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="relative inline-block w-full">
                <select
                  className="border p-3 pr-8 rounded dark:bg-slate-800 focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer"
                  required
                >
                  <option value="" className="bg-gray-300">
                    Select Inquiry Type
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Course-Related Query">
                    Course-Related Query
                  </option>
                  <option value="Partnership Opportunities">
                    Partnership Opportunities
                  </option>
                  <option value="Others">Others</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border dark:bg-slate-800 border-gray-300 rounded-md"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="lg:w-2/5 space-y-4">
            <div className="dark:bg-black p-6 lg:p-8 rounded-lg ">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4" />
                  <a href="mailto:tutors@baoiam.com" className="underline">
                    support@baoiam.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-4" />
                  <a href="tel:08069640635" className="underline">
                    08069640635
                  </a>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4" />
                  <a href="#" className="underline">
                    B Block Noida Sector 15 Uttar Pradesh
                  </a>
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-6">
                <Link
                  to={
                    "https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"
                  }
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaFacebook size={22} />
                </Link>

                <Link
                  to={"https://www.instagram.com/baoiam_innovations/"}
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaInstagram size={22} />
                </Link>

                <Link
                  to={
                    "https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/mycompany/"
                  }
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaLinkedin size={22} />
                </Link>

                <Link
                  to={"https://twitter.com/BAOIAM1"}
                  target="_blank"
                  className="text-black text-nowrap flex items-center dark:text-white hover:text-gray-500"
                >
                  <FaSquareXTwitter size={22} />
                </Link>
              </div>

              <div className="h-56 w-full mt-6 md:mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56778.23569201361!2d77.29743635795448!3d28.56460407812812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3036ecb3b95%3A0x927e51f17b1aeb5b!2sB%20Block%2C%20Sector%2015%2C%20Noida%2C%20Uttar%20Pradesh%20201021!5e0!3m2!1sen!2sin!4v1694209323043"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

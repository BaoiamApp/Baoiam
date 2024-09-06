import React from "react";
import Certificate from "../assets/Certificate.jpg";
import mern from "../assets/mern.png";
import razorpay from "../assets/razorpay.png";
import secure from "../assets/secure.png";
import {
  UserIcon,
  PencilIcon,
  ComputerDesktopIcon,
  PercentBadgeIcon,
} from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi";

const Checkout = () => {
  return (
    <div className="flex flex-wrap dark:bg-black dark:text-white py-4 pb-12 px-4 sm:px-14">
      {/* left section */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 py-6 px-6 lg:px-20 ">
        <div className="flex flex-col py-20">
          <h2 className="font-semibold text-xl mb-4">
            Enhance your prgoramming journey by getting Certified
          </h2>
          <div className="w-full md:max-w-[80%] lg:max-w-[95%]">
            <img
              className="h-full w-full"
              src={Certificate}
              alt="Certificate"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-[90%]">
          <div className="flex items-center mb-2">
            <PercentBadgeIcon className="h-8 w-8 mr-2" />
            <p className="text-lg font-semibold">No cost EMI</p>
          </div>
          <p className="text-slate-500 mb-6 px-10">
            Easy on your wallet. Choose No cost EMI when paying with credit
            cards.
          </p>
          <div className="flex items-center">
            <HiShieldCheck className="h-8 w-8 mr-2" />
            <p className="text-lg font-semibold">100% safe & secure payment</p>
          </div>
          <div className="flex justify-start px-8 w-full">
            <img className="h-14 w-28 mr-4" src={secure} alt="secure img" />
            <img className="h-16 w-28" src={razorpay} alt="razorpay img" />
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="flex flex-col w-full lg:w-1/2 dark:border-gray dark:border-[1.5px] border-slate-400 shadow-lg py-6 px-6 rounded-lg">
        <h1 className="font-semibold text-2xl mb-4">Confirm your order</h1>
        <div className="flex">
          <UserIcon className="h-8 w-8 mr-2 rounded-full border-[1.5px] border-emerald-500 text-white bg-gray-200" />
          <div className="flex justify-between w-full">
            <div>
              <p className="text-sm text-slate-600">User Name</p>
              <p className="text-sm text-slate-400">8785144645</p>
            </div>
            <div className="flex items-center">
              <PencilIcon className="h-4 w-4 text-orange-500 cursor-pointer" />
              <span className="ml-2 text-orange-500">Edit</span>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-gray-300 mt-4 mb-4" />
        <div className="flex flex-col mb-10 sm:flex-row">
          <div className="h-38 w-38 mr-4">
            <img
              className="w-full h-full object-cover"
              src={mern}
              alt="course_logo"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="rounded-md bg-green-200 p-1 w-fit">
                <p className="text-green-700 px-1 font-medium text-xs">
                  Standard Plan
                </p>
              </div>

              <h2 className="font-semibold text-lg mb-2">
                Standard | MERN Stack | Java | English
              </h2>
              <p className="text-slate-500 text-base">
                English • Batch Starts: 26 Sep 2024
              </p>
            </div>
            <p className="text-slate-700 font-medium text-lg">₹64,999</p>
          </div>
        </div>
        <div className="mx-2">
          <p className="text-slate-500 mb-2 font-medium text-base">
            Get this package to help you crack tech job interviews
          </p>
          <div className="w-full bg-zinc-100 border-gray-200 border-[1.5px] rounded-lg px-4 mb-2 pt-2">
            <div className="flex">
              <ComputerDesktopIcon className="h-8 w-8 text-blue-500 mr-2 mt-2" />
              <div className="flex w-full justify-between">
                <h2 className="text-slate-700 text-xl font-medium">
                  Career Climber Combo
                </h2>
                <p className="text-slate-700 font-meduim text-xl">₹0</p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="ml-8 mb-4">
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">DBMS course</p>
                </div>
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">System Design course</p>
                </div>
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">Aptitude Preparation course</p>
                </div>
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">Operating System course</p>
                </div>
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">
                    3 Live 1:1 sessions with Industry Experts
                  </p>
                </div>
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">Live 1:1 Doubt Support</p>
                </div>
                <div className="flex">
                  <FaCheck className="h-5 w-6 mr-2 mt-1" />
                  <p className="text-orange-600">Ebook</p>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap">
                <div className="rounded-md bg-green-200 p-1 h-fit w-full">
                  <p className="text-green-700 px-1 font-medium text-xs">
                    Save 100%
                  </p>
                </div>
                <span className="ml-4 text-slate-700 line-through">
                  ₹40,000
                </span>
              </div>
            </div>
            <hr className="border-t-1 border-gray-300" />
            <div className="flex w-full justify-between p-4">
              <div className="bg-blue-100 p-2 rounded-md max-w-[70%]">
                <p className="text-slate-500 text-sm">
                  Unlock this exclusive combo offer when you enrol for this
                  course.
                </p>
              </div>
              <div className="border-gray-200 px-4 border-2 flex flex-col justify-center text-slate-400 rounded-md">
                <p className="text-lg">Added !</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2 pt-2">
          <h3 className="text-slate-600 font-medium text-md">Total Discount</h3>
          <span className="text-green-600 font-medium text-md">- ₹24,049</span>
        </div>
        <div className="flex ml-2 mb-2">
          <p className="text-slate-600 text-sm">View more</p>
          <RiArrowDropDownLine className="text-2xl" />
        </div>
        {/* <div className="flex w-full p-3 mb-5 rounded-lg bg-orange-50">
          <PercentBadgeIcon className="h-6 w-6 text-orange-500 bg-white mr-2" />
          <p className="text-orange-500 font-semibold">Apply Coupon</p>
        </div> */}
        <hr className="border-t-1 border-gray-300 mb-4" />
        <div className="flex justify-between mb-5">
          <h2 className="text-2xl text-black font-semibold">Total</h2>
          <p className="text-2xl text-black font-semibold">₹40,950</p>
        </div>

        <button className="w-full flex justify-center rounded-md font-bold text-lg p-2 text-white bg-gradient-to-r from-indigo-800 to-indigo-500">
          <HiShieldCheck className="h-6 w-6 text-white" />
          &nbsp; PROCEED TO PAY ₹40,950
        </button>
      </div>
    </div>
  );
};

export default Checkout;

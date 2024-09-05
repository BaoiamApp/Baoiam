import React from "react";
import BrandLogo from "../../assets/brand.png";
import AppStore from "../../assets/footer-desktop-appstore.svg";
import PlayStore from "../../assets/footer-desktop-playstore.svg";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <div className="w-full pt-8 pb-4 dark:bg-black dark:text-white rounded-lg relative shadow-md bg-slate-200 text-black ">
      <div className="flex flex-wrap gap-8 justify-between mx-auto w-10/12 py-2 items-center">
        <div className="brand-logo w-28 md:w-32">
          <img
            src={BrandLogo}
            className="rounded-md"
            alt="Brand logo"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-28 md:w-32">
            <img src={AppStore} alt='AppStore' />
          </div>
          <div className="w-28 md:w-32">
            <img src={PlayStore} alt='PlayStore' />   
          </div>
        </div>
        {/* <p className="font-semibold">
          Get connected with us on social networks:
        </p> */}
      </div>
      {/* <hr className="w-11/12 border-2 text-gray-400 mx-auto" /> */}
      <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 m-8 gap-8 w-10/12 mx-auto">
        {[
          {
            heading: "Quick Links",
            links: [
              "Home",
              "Care",
              "Hire From Us",
              "BTH - Talent Hunt Exam",
              "Refer and Earn",
            ],
          },
          {
            heading: "Other Links",
            links: ["Blog", "Events and Contest", "Contact US"],
          },
          {
            heading: "Courses",
            links: [
              "B Block Noida Sector 15 Uttar Pradesh",
              "Product Management",
              "SAP FICO",
            ],
          },
          {
            heading: "Contact Us",
            links: ["Entrepreneurship", "tutors@baoiam.com", "08069640635"],
          },
        ].map((item) => {
          return (
            <div className="company">
              <h1 className="mb-2 font-bold text-base uppercase">
                {item.heading}
              </h1>
              {item.links.map((subItem) => {
                return <p className=" my-1 text-sm">{subItem} </p>;
              })}
            </div>
          );
        })}
        <div className="social-icons lg:col-start-4 sm:col-start-2 ">
          {/* <TiSocialFacebook /> */}
          <div className="flex items-center gap-3">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
          </div>

          <div className=" lg:col-start-4 sm:col-start-2 ">
          <div className="flex items-center gap-3">
        <a href="/terms-conditions" className="text-black hover:underline">
          Terms & Conditions
        </a>
        <a href="/privacy-policy" className="text-black hover:underline">
          Privacy Policy
        </a>
        <a href="/return-policy" className="text-black hover:underline">
       Return Policy
        </a>
      </div>
      </div>
      
</div>
      <hr className="w-11/12 border-2 border-slate-700 mx-auto" />

      <div className="flex justify-between py-4 items-center">
        <div className=" flex items-center text-xs md:text-sm gap-2 justify-center w-full">
          Copyright
          <FaRegCopyright /> 2023 BAOIAM. ALL Rights Reserved
        </div>
        </div>
 </div>
        );
}

export default Footer;

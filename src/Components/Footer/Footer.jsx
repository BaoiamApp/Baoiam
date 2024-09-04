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
import { Logo } from "../../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-400">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to={'/'} className="flex justify-center text-teal-600 sm:justify-start h-24 w-56">
              <img src={Logo} className="w-full h-full" alt="" />
            </Link>

            {/* <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
              cum itaque neque.
            </p> */}


          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {/* Company */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Company</p>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link to={'/about-us'} className="text-white transition">
                  About Us
                </Link>
                <Link to={'/hire'} className="text-white transition">
                  Hire from us
                </Link>
                <Link to={'/team'} className="text-white transition">
                  Our Team
                </Link>
                <Link to={'/faqs'} className="text-white transition">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Join Us */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Join Us</p>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link to={'/gcsp'} className="text-white transition">
                  GCSP
                </Link>
                <Link to={'/entrepreneurship'} className="text-white transition">
                  Entrepreneurship
                </Link>
                <Link to={'/career'} className="text-white transition">
                  Career
                </Link>
                <Link to={'/partner'} className="text-white transition">
                  Partner with us
                </Link>
                <Link to={'/affiliate'} className="text-white transition">
                  Become an affiliate
                </Link>
              </div>
            </div>

            {/* Help & Support */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Help & Support</p>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link to={'/terms-conditions'} className="text-white transition">
                  Terms & Conditions
                </Link>
                <Link to={'/refund-policy'} className="text-white transition">
                  Refund policy
                </Link>
                <Link to={'/privacy-policy'} className="text-white transition">
                  Privacy policy
                </Link>

              </div>
            </div>

            {/* Contact Us */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-4 space-y-4 text-sm">
                {/* Mail */}
                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="flex-1 text-white">tutors@baoiam.com</span>
                </li>

                {/* Phone */}
                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="flex-1 text-white">08069640635</span>
                </li>

                {/* Address */}
                <li
                  className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic text-white">
                    B Block Noida Sector 15 Uttar Pradesh
                  </address>
                </li>
              </ul>
              <div className="mt-8 flex justify-center gap-6 sm:justify-start">
                {/* Facebook */}
                <Link to={'/'} target="_blank" className="text-white transition hover:text-gray-500">
                  <FaFacebook size={22} />
                </Link>

                {/* Instagram */}
                <Link to={'/'} target="_blank" className="text-white transition hover:text-gray-500">
                  <FaInstagram size={22} />
                </Link>

                {/* Linkedin */}
                <Link to={'/'} target="_blank" className="text-white transition hover:text-gray-500">
                  <FaLinkedin size={22} />
                </Link>

                {/* Github */}
                <Link to={'/'} target="_blank" className="text-white transition hover:text-gray-500">
                  <FaGithub size={22} />
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between text-left">
            <p className="text-sm flex items-center gap-2 text-white">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-sm text-white order-first">&copy; 2023 BAOIAM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
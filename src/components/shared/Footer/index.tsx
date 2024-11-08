import React from "react";
import {  logoN} from "@/assets/sharedSection";
import { FaFacebookF, FaGooglePlus, FaTwitter } from "react-icons/fa";
import { IoLogoFlickr } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="text-textG py-10 bg-[#FAFAFA] font-sans ">
      <div className="lg:w-[80%] mx-auto md:w-[90%] w-[80%] ">
        <div className="flex flex-wrap justify-between mx-5 md:mx-0">
          <div className="w-full md:w-1/4 mb-9 ">
            <h3 className="text-xl font-medium mb-7 font-Ubuntu text-black">
              PRODUCTS
            </h3>
            <ul className="space-y-5 ">
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Stock
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Gold
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                 Investment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Fast Link
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 ">
            <h3 className="text-xl font-medium mb-7 font-Ubuntu text-black">
              SUPPORT
            </h3>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Support Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 ">
            <h3 className="text-xl font-medium mb-7 font-Ubuntu text-black">
              COMPANY
            </h3>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-crypOrange">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crypOrange">
                  Forum
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="text-xl font-medium mb-7 font-Ubuntu text-black">
              SOCIAL
            </h3>
            <div className="flex flex-wrap gap-1 ">
              <a
                href="#"
                className=" border-[1px] border-crypOrange rounded-full p-2 text-crypOrange"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border-[1px] border-crypOrange rounded-full p-2 text-crypOrange"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className=" border-[1px] border-crypOrange rounded-full p-2 text-crypOrange"
              >
                <FaGooglePlus />
              </a>
              <a
                href="#"
                className=" border-[1px] border-crypOrange rounded-full p-2 text-crypOrange"
              >
                <IoLogoFlickr />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 opacity-30 " />
        <div className="text-center mt-10 ">
          <div className="p-3 flex justify-center font-opensans">
        
         
         <img src={logoN.src} alt="logo"    className="h-100 "/>
         {/* <span className="text-black text-3xl mt-2">Crypt<span className="text-pink font-bold ">App</span></span> */}
      
  

          </div>
          <p>
            Copyright © 2024{" "}
            <a href="#" className="hover:text-crypOrange ">
              designthemes
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

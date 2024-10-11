'use client';
import React, { useState } from "react";
import { logo } from "@/assets/sharedSection";
import Link from "next/link";
import { useSlideContext } from "@/context/SlideContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
const { currentIndex } = useSlideContext();
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};

  return (
    <div className={`font-sans ${currentIndex===0?"bg-customGray":"bg-black"} border-b-[1px] border-gray-700 `}>
      <nav className="lg:w-[80%] w-[92%] mx-auto flex md:flex-row  flex-col justify-center md:justify-between items-center lg:h-[71px] md:h-14 sm:h-auto gap-5 md:gap-0 p-5 md:p-0">
        {/* Logo Section */}
        <div className="text-xl font-bold h-auto w-[180px]">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-11 text-[16px] font-light">
          {[
            { name: "Home", href: "#home" },
            { name: "Features", href: "#feature" },
            { name: "Blog", href: "#bitcoinNews" },
            { name: "Faq", href: "#downloads" },
            { name: "Gallery", href: "#ssCarousel" },
            { name: "Pricing", href: "#price" },
            { name: "Mail us", href: "#contactForm" },
            { name: "Widgets", href: "#networkInfo" },
          ].map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-[28px] flex items-center overflow-hidden relative ">
                {/* Hidden title that translates upwards */}
                <span
                  className={`absolute left-0 transition-transform duration-300 transform  text-crypOrange ${
                    hoveredIndex === i ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                >
                  {item.name}
                </span>

                {/* Visible title that appears below */}
                <span
                  className={`block transition-transform duration-300 transform ${i===0 ?"text-crypOrange":"text-white"} ${
                    hoveredIndex === i ? "-translate-y-7" : ""
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center justify-center bg-crypOrange w-40 gap-4 h-[50px] md:h-full text-black" onClick={toggleSidebar}>
          <button className=" focus:outline-none " >
          <GiHamburgerMenu size={28}/>
         
          </button>
          <span className="font-bold text-xl">MENU</span>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 h-full md:w-[250px] w-full  bg-white  transition-transform transform duration-700 z-[999] ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4 flex justify-end ">
          <button onClick={toggleSidebar}>
          <FaTimes size={20}  />
          </button>
        </div>
        <div className="flex flex-col items-start  border-t border-gray-100 space-y-2  py-1 ">
          {[
            { name: "Home", href: "#home" },
            { name: "Features", href: "#feature" },
            { name: "Blog", href: "#bitcoinNews" },
            { name: "Faq", href: "#downloads" },
            { name: "Gallery", href: "#ssCarousel" },
            { name: "Pricing", href: "#price" },
            { name: "Mail us", href: "#contactForm" },
            { name: "Widgets", href: "#networkInfo" },
          ].map((item,index) => (
            <div key={item.name} className="w-full border-b border-gray-100 pb-2 pl-3"> <a  href={item.href}  className={` text-[17px] font-light ${index === 0 ? "text-crypOrange" : "text-textG"}`} onClick={toggleSidebar}>
            {item.name}
          </a></div>
           
          ))}
        </div>
      </div>
      {isSidebarOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-500 ease-in-out z-[998]"
    onClick={toggleSidebar}
  ></div>
)}
    </div>
    
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/sharedSection/light-logo.webp";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-customGray border-b-[1px] border-gray-700">
      <nav className="w-[80%] mx-auto flex justify-between items-center  h-[71px]">
        {/* Logo Section */}
        <div className="text-xl font-bold h-auto w-[210px]">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
        </div>

       
        <div className="hidden md:flex space-x-8 text-[16px] font-light ">
          {["Home", "Features", "Blog", "Faq", "Gallery", "Pricing", "Mail us", "Widgets"].map((item,i) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "")}`} className="relative group">
            
            
            <div>
            <span className={` mt-5 block  transition-transform duration-300 group-hover:-translate-y-3 group-hover:opacity-0   hover:text-[#FEA301]  ${i===0 ?"text-[#FEA301] hover:text-white": "text-white "} `}>
                {item}
              </span>
              <span className={`  transition-transform duration-500 transform translate-y-full opacity-0 hover:text-[#FEA301] group-hover:translate-y-1 group-hover:opacity-100  `}>
                {item}
              </span>

            </div>
             
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

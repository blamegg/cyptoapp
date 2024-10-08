import React from "react";
import logo from "../../assets/light-logo.webp";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-800 border-b-[1px] border-gray-700">
      <nav className="w-[75%] mx-auto flex justify-between items-center text-white h-[71px]">
        {/* Logo Section */}
        <div className="text-xl font-bold h-auto w-[210px]">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-8 text-xl font-light">
          {["Home", "Features", "Blog", "Faq", "Gallery", "Pricing", "Mail us", "Widgets"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "")}`} className="relative group">
              {/* Hidden text that will appear when hovering */}
              <span className="absolute top-0 left-0 transition-transform duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                {item}
              </span>
              {/* Default text visible */}
              <span className="block transition-transform duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                {item}
              </span>
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

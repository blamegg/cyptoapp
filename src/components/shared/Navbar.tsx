import React from "react";
import logo from "../../assets/light-logo.webp";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-black">
      <nav className="w-[75%] mx-auto flex justify-between items-center text-white h-[71px]">
        <div className="text-xl font-bold h-auto w-[210px]">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-xl font-light">
          <Link href="/" className="relative group">
          <span className="absolute top-0 left-0 transition-transform duration-500 transform translate-y-full  opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Home
            </span>
            <span className="block transition-transform duration-500  group-hover:-translate-y-0 group-hover:opacity-0">
              Home
            </span>
           
          </Link>

          <Link href="/features" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Features
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Features
            </span>
          </Link>

          <Link href="/blog" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Blog
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Blog
            </span>
          </Link>

          <Link href="/faq" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Faq
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Faq
            </span>
          </Link>

          <Link href="/gallery" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Gallery
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Gallery
            </span>
          </Link>

          <Link href="/pricing" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Pricing
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Pricing
            </span>
          </Link>

          <Link href="/contact" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Mail us
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Mail us
            </span>
          </Link>

          <Link href="/widgets" className="relative group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-5">
              Widgets
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Widgets
            </span>
          </Link>
        </div>

 
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

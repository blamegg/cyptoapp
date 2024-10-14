
"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { sections } from "../constants";
const RightSection = () => {
  const [openSection, setOpenSection] = useState(1);
  const handleClick = (id: number) => {
    setOpenSection(id);
  };
 
  return (
    <div className="lg:w-1/2 w-full clmd:mt-0 md:mt-20 sm:mt-0  md:min-h-[36rem]">
      {sections.map((section) => (
        <div key={section.id} className="transition-all duration-300">
          <div className="flex items-center gap-8 mb-10">
            <div
              onClick={() => handleClick(section.id)}
              className={`min-h-10 min-w-10 rounded-full cursor-pointer ${
                openSection === section.id ? "bg-crypOrange" : "bg-bitBlack"
              } flex items-center justify-center`}
            >
              <span className="text-white w-10 h-10 flex justify-center translate-y-3">
                {openSection === section.id ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <p
              onClick={() => handleClick(section.id)}
              className={`font-semibold hover:text-crypOrange ${
                openSection === section.id ? "text-crypOrange" : "text-bitBlack"
              } cursor-pointer`}
            >
              {section.title}
            </p>
          </div>
          <div
            className={`ml-18 sm:mb-0 mb-12 transition-max-height duration-1000 ease-in-out overflow-hidden ${
              openSection === section.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ transitionProperty: "max-height, opacity" }}
          >
            <p className="leading-7  text-text  text-sm font-light font-sans ">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSection;

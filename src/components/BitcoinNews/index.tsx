import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { contentArray } from "../constants";

export const BitcoinNews = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-24 ">
        <div className="whitespace-break-spaces text-center">
          <span className="text-bitBlack text-40 text-center">
            Lorem &
            <span className="text-crypOrange text-40 font-semibold">
               Heading Dummy
            </span>
          </span>
        </div>
        <div>
          <p className="text-13 font-semibold opacity-55">OUR LATEST NEWS</p>
        </div>
      </div>
      <div className="max-w-[100vw] overflow-x-hidden min-h-screen  scroll-container flex md:flex-row flex-wrap flex-col items-center justify-center gap-7 clmd:mt-0 mt-10">
        {contentArray.map((content, index) => (
          <div
            key={index}
            className="max-w-[370px] overflow-x-hidden h-auto md:mb-10 mb-20 lg:px-0 md:px-4 px-0"
          >
            <div>
              <img
                src={content.imgSrc}
                className="md:h-60 md:w-full  w-[70%] h-auto mx-auto cursor-pointer"
              />
            </div>
            <div className="md:flex justify-start  md:mx-0 md:text-start  md:gap-0 gap-4">
              <div className="flex border-t md:mx-0 text-xs   font-Segoe md:mr-4 mx-10 border-crypOrange mt-10 border-b md:h-20 h-10">
                <p className="flex md:flex-col md:gap-2 my-auto gap-4 md:mx-0 mx-auto flex-row items-center">
                  <span>{content.date.split(" ")[0]} </span>
                  <span>{content.date.split(" ")[1]}</span>
                  <span> {content.date.split(" ")[2]}</span>
                </p>
              </div>
              <div className="mt-10 md:mx-0 mx-10">
                <p className="hover:text-crypOrange transition-all duration-500 font-Segoe cursor-pointer">
                  {content.title}
                </p>
                <p className="text-text leading-8 mt-5 text-base  font-Segoe">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magni repellendus alias harum provident debitis autem illum
                  consequuntur nemo possimus sit ratione ipsam voluptatem
                  similique numquam non ipsum, iure amet recusandae...
                </p>
                <div className="flex justify-between text-base font-light font-Segoe mt-4">
                  <span className="flex gap-4 items-center">
                    <FaRegCircleUser className="text-gray-700" />
                    <p>{content.author}</p>
                  </span>
                  <span className="flex gap-5 items-center cursor-pointer">
                    <TiMessages className="text-gray-700" />
                    <p>1</p>
                  </span>
                  <span className="flex items-center gap-4">
                    <FaRegCircleUser className="text-gray-500" />
                    <p>{content.category}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

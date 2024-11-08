import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export const NewsLetter = () => {
  return (
    <>
      <div className="md:h-350 grid place-items-center text-center mt-20 w-full bg-nLetterbg ">
        <div className="flex justify-center items-center flex-col ">
          <div className="whitespace-break-spaces mt-10 sm:mt-4">
            <span className="text-white text-40 font-thin ">
              Sign Into Our{" "}
              <span className="text-crypOrange text-40 font-semibold">
                Newsletter
              </span>
            </span>
          </div>
          <div>
            <p className="text-13 font-bold mt-1 text-white ">
              WHAT DO YOU GET
            </p>
          </div>
        </div>

        <div className="flex justify-center  items-center mt-20 sm:mt-0   ">
          <div className="flex md:flex-row  sm:w-[80vw] text-center  mx-auto justify-center items-center flex-col md:mx-0  gap-5 mb-16  ">
            <input
              placeholder="Name"
              className="h-12 md:w-400 w-[100%]  p-2 focus:outline-none focus:ring-2 focus:ring-pink focus:shadow-[0_0_10px_#A4165A]"
            />
            <input
              placeholder="Email"
              className="h-12 md:w-400 w-[100%] p-2 focus:outline-none focus:ring-2 focus:ring-pink focus:shadow-[0_0_10px_#A4165A]"
            />
            <button className=" bg-buttonColor h-10 md:w-52 w-fit p-6 flex justify-center items-center gap-5 text-white font-medium tracking-widest">
              SUBSCRIBE{" "}
              <span className="text-white md:block hidden">
                <FaPaperPlane />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export const ChooseUs = () => {
    return (
      <>
        <div className="bg-Choosebg ">
          <div className="flex justify-center flex-col items-center mb-20">
            <div className="mt-20">
              <p>
                <span className="text-40 text-bitBlack">Why?</span>{" "}
                <span className="text-crypOrange text-40 font-semibold">
                  Choose Us
                </span>
              </p>
            </div>
            <div>
              <p className="text-13 font-semibold opacity-55">
                WE WORK FOR YOUR SUCCESS
              </p>
            </div>
          </div>
          <div className="flex  mt-0 md:mt-20 lg:mt-0 gap-10 w-[80vw] mx-auto lg:flex-row flex-col">
            <LeftSection />
            <RightSection />
          </div>
        </div>
      </>
    );
};

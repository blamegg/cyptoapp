import React from "react";
import { background } from "@/assets/sharedSection";

const NetworkInfo = () => {
  return (
    <div className="bg-[#F9F9FA] py-10 ">
      <div className=" grid grid-cols-1 clg:grid-cols-2 gap-12 clg:gap-6 items-center px-6 md:px-8 clg:px-16 my-16 mx-10 md:mx-0">
        {/* Left Section - Image & Card */}
        <div className="flex justify-center items-center">
          <div
            className="clg:w-2/3 w-full h-60 rounded-lg flex justify-center items-center p-4 border border-gray-200"
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="shadow-lg rounded-lg bg-white p-2 h-auto border border-gray-200 w-full">
              <div className="text-center">
                <h2 className="text-[#2C4676] text-xl font-semibold">
                  BTC Prices List
                </h2>
                <p className="text-black font-bold text-16 px-2">
                  CCCAGG market does not exist for this coin pair (BTC-EGP)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full clg:w-2/3 text-left ">
          <h3 className="text-40 text-text font-Ubuntu  leading-tight">
            Innovative Payment{" "}
            <span className="text-crypOrange font-bold">Network</span>
          </h3>

          <h2 className="text-text text-2xl mt-4 font-sans ">
            Simple & secure access to buy, sell{" "} <span className="block">and use Bitcoin.</span> 
          </h2>
          
          <p className="mt-4  font-light leading-7 text-17 text-text font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sagittis nisl porttitor, eleifend tortor sed, auctor libero.
            Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam
            vitae nunc ac eros laoreet egestas.
          </p>
          
          <button className="bg-buttonColor text-white font-medium  py-3 px-6 mt-6 lg:mt-8 font-sans text-13">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;
